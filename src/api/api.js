import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "90f162c3-67da-435f-84ba-4af89102403f"},  
});

export const usersAPI = { 
    getUsers(currentPage=1,pageSize=10){
    return instance.get(
        `users?page=${currentPage}&count=${pageSize}`
      )
      .then(response => {
        return response.data;
      })
    },

    unfollow(id){
      return instance.delete(`follow/${id}`)
      .then(response => {
        return response.data;
      })
    },

    follow(id){
        return instance.post(`follow/${id}`)
          .then(response => { 
            return response.data;
          });
    },
}

export const authAPI = {
    authMe(){ 
        return instance.get(`auth/me`).then(response => {
        return response.data;
      })
    },
    login(email,password,rememberMe = false,captcha = null){
      return instance.post(`auth/login`,{email,password,rememberMe,captcha})
    },
    logout(){
      return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
  getCaptchaUrl(){ 
      return instance.get(`security/get-captcha-url`)
    }
  }

export const profileAPI = {
    getProfileInfo(userId){ 
        return instance.get(`profile/` + userId).then(response => {
            return response.data;
          });
    },
    getStatus(userId){
      return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status){
      return instance.put(`profile/status`,
      // {status:status}
      )

    },
    savePhoto(photoFile){
      const formData = new FormData();
      formData.append("image",photoFile);

      return instance.put(`profile/photo`,formData,{
        headers:{
      
        }
      })
    },
    saveProfile(profile){
      return instance.put(`profile/`,profile)
    }
}

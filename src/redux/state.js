let rerenderEntireTree = () =>{
  console.log('State was change')
}

let state = {


    
    profilePage:{
        posts:[
            { id: 1, message: "Hi!", likeCount: 15 },
            { id: 2, message: "Yo!", likeCount: 45 },
            { id: 3, message: "Where are you?", likeCount: 55 },
          ],
          newPostText:""
    },
    dialogsPage:{
        dialogs:[
            { id: 1, name: "Dima", avatar:"https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
            { id: 2, name: "Andrey", avatar:"https://images.unsplash.com/photo-1497993950456-cdb57afd1cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" },
            { id: 3, name: "Elena",avatar:"https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" },
            { id: 4, name: "Kate", avatar:"https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"},
            { id: 5, name: "Sergey", avatar:"https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80" },
          ],
        messages:[
            { id: 1, message: "Hi!", writer:"Me", avatar:"https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" },
            { id: 2, message: "Yo!", writer:"Dima", avatar:"https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
            { id: 3, message: "Where are you?", writer:"Me",avatar:"https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" },
          ],
          newMessageText:""
    },
    navBar:{
        popularFriend:[
            {name: "Dima", avatar:"https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
            {name: "Sergey", avatar:"https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80"},
            {name: "Elena",avatar:"https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
            ]
    }
  }

  window.state=state;

  export const addPost = () =>{
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likeCount:0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
  }

  export const updateNewPostText= (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

  }

  export const addMessage = () =>{
    let newMessage = {
        id:4,
        message: state.dialogsPage.newMessageText,
        writer:"Me",
        avatar:"https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = " ";
    rerenderEntireTree(state);
  }

  export const updateNewMessageText= (newText) => {
    state.dialogsPage.newMessageText= newText;
    rerenderEntireTree(state);

  }

  export const subscribe = (observer) => {
    rerenderEntireTree = observer;
  }

export default state;
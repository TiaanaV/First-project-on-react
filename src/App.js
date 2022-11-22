
import classes from "./App.module.css";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Friends from "./components/Friends/Friends";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginPage";
import { connect, Provider } from "react-redux";
import {  useParams } from "react-router-dom";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import React, {Suspense} from "react";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer =  React.lazy(() => import("./components/Profile/ProfileContainer"));
const News =  React.lazy(() => import("./components/News/News"));
const Music  =  React.lazy(() => import("./components/Music/Music"));
const Settings =  React.lazy(() => import("./components/Settings/Settings"));

class App extends React.Component{
  componentDidMount() {
    this.props.initializeApp();
  }

    render(){
      if(!this.props.initialized){
       return <Preloader/>
      }
       return (
          <div className={classes.appWrapper}>
           <HeaderContainer/>
            <NavbarContainer
            />
            <div className={classes.appWrapperContent}>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                <Route path="/profile/*" element={<ProfileContainer/>}/>
                <Route path="/dialogs/*" element={<DialogsContainer/>} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/users" element={<UsersContainer/>} />
                <Route path="/friends" element={<Friends/>} />
                <Route path="/login" element={<LoginPage/>} />
              </Routes>
              </Suspense>
            </div>
          </div>
      );
  };
}


const withRouter = WrappedComponent => props => {
  const params = useParams();
  return (
      <WrappedComponent
          {...props}
          params={params}
      />
  );
};

let WithUrlDataContainerComponent = withRouter(App);

const mapStateToProps = (state) => ({
  initialized:state.app.initialized,
})
  const AppContainer =  compose(connect(mapStateToProps, {initializeApp})(WithUrlDataContainerComponent));
  
 const MainApp = (props) => {
  return <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
  </BrowserRouter>
  }

  export default MainApp;

import React from "react";
import Profile from "./Profile";
import { getProfileInfo } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 25786;
    }
    this.props.getProfileInfo(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} match={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { getProfileInfo }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);

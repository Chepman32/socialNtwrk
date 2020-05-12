import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { setUserProfileActionCreator } from "../../redux/profile-reducer";
import Axios from "axios";
class ProfileContainer extends React.Component {
  debugger
  componenDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            console.log(response.data);
            this.props.setUserProfile(response.data)
            });
  }
    render() {
      return <Profile profile={this.props.profile} {...this.props} />
    }
};
let mapStateToProps = state => ({
  profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfileActionCreator})(ProfileContainer)
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { setUser } from "../../redux/profile-reducer";
import Axios from "axios";
class ProfileContainer extends React.Component {
  debugger
  componenDidMount() {
    alert("TEST")
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      debugger;
            
            this.props.setUser(response.data);
            });
  }
    render() {
      return <Profile profile={this.props.profile} {...this.props} />
    }
};
let mapStateToProps = state => ({
  profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUser})(ProfileContainer)
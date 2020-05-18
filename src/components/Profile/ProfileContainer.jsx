import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { setUser } from "../../redux/profile-reducer";
import Axios from "axios";
import {withRouter} from "react-router-dom";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUser(response.data);
            });
  }
    render() {
      return <Profile profile={this.props.profile} {...this.props} />
    }
};
let mapStateToProps = state => ({
  profile: state.profilePage.profile
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUser})(WithUrlDataContainerComponent);
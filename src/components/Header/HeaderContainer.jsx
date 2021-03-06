import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";
import Axios from "axios";
class HeaderContainer extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {
      withCredentials: true
    } ).then(response => {
      if(response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        this.props.setAuthUserData(response.data.data);
      }
            });
  }
    render() {
      return <Header {...this.props}/>
    }
};
const mapStateToProps = state => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
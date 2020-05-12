import { cloneFriendActionCreator } from "../../redux/sidebar-reducer";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
let mapStateToProps = state => {
  return {
    sidebarData: state.sidebar.sidebarData
  };
};
let mapDispatchToProps = dispatch => {
  return {
    cloneFriend: (name, nickName) => dispatch(cloneFriendActionCreator(name, nickName))
  }
};
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;
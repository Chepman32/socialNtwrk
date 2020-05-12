import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import {follow, unfollow, setUsersData, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../../assets/glow.gif";
class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsersData(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }
    onPageChanged = pageNumber => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsersData(response.data.items);
                this.props.toggleIsFetching(false);
            })
    }
    render() {
        return (
            <>
        { this.props.isFetching ? <img src={Loader} alt=""/>
         : <Users pageSize={this.props.pageSize} currentPage={this.props.currentPage} totalUsersCount={this.props.totalUsersCount} usersData={this.props.usersData}
         onPageChanged={this.onPageChanged} follow={this.props.follow} unfollow={this.props.unfollow} /> }
        </>
        )
        }
};
let mapStateToProps = state => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, { follow, unfollow, setUsersData, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIComponent);
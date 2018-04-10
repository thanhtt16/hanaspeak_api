import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {Header} from "../../_components/Header";
import {Sidebar} from "../../_components/Sidebar"
import { userActions } from '../../_actions/index';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        console.log(this.props);
        return (
            <React.Fragment>
                <Header
                    value={this.state}/>
                <div className={"page-container"}>
                    <Sidebar />
                    <div className="page-content-wrapper">
                        <div className="page-content" >
                            <div className="page-bar">
                                <ul className="page-breadcrumb">
                                    <li>
                                        <i className="fa fa-home"></i>
                                        <Link to="/">Home</Link>
                                        <i className="fa fa-angle-right"></i>
                                    </li>
                                    <li>
                                        <a href="#">Page Layouts</a>
                                        <i className="fa fa-angle-right"></i>
                                    </li>
                                    <li>
                                        <a href="#">Blank Page</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    Page content goes here
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
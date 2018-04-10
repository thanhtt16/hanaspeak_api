import React from 'react';
import { PrivateRoute } from '../../_components';
import { Router, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {Header} from "../../_components/Header";
import {Sidebar} from "../../_components/Sidebar"
import {userActions } from '../../_actions/index';
import {history} from "../../_helpers";
import {Blank} from "../Blank"
import {Profiles} from "../Profiles"

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <React.Fragment>
                <Header
                    value={this.state}/>
                <div className={"page-container"}>
                    <Sidebar />
                    <div className="page-content-wrapper">
                        <div className="page-content" >
                            <Router history={history}>
                                <Switch>
                                    <PrivateRoute path="/blank-page" component={Blank} />
                                    <PrivateRoute path="/profiles" component={Profiles} />
                                </Switch>
                            </Router>

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
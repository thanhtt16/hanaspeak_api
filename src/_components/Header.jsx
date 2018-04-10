import React from 'react';
import { Link } from 'react-router-dom';
export class Header extends React.Component {
    render() {
        return (
            <div className="page-header -i navbar navbar-fixed-top">

                <div className="page-header-inner">

                    <div className="page-logo">
                        <Link to="/">
                            <img src="/assets/admin/layout/img/logo.png" alt="logo" className="logo-default" />
                        </Link>
                        <div className="menu-toggler sidebar-toggler">
                            <ul className="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                                <li className="sidebar-toggler-wrapper">
                                    <div className="sidebar-toggler">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                    </a>

                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right">

                            <li className="dropdown dropdown-user">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="false">
                                    <img alt="" className="img-circle" src="/assets/admin/layout/img/avatar3_small.jpg" />
                                    <span className="username username-hide-on-mobile">
                                    Nick </span>
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-default">
                                    <li>
                                        <a href="extra_profile.html">
                                            <i className="icon-user"></i> My Profile </a>
                                    </li>
                                    <li>
                                        <a href="page_calendar.html">
                                            <i className="icon-calendar"></i> My Calendar </a>
                                    </li>
                                    <li>
                                        <a href="inbox.html">
                                            <i className="icon-envelope-open"></i> My Inbox <span className="badge badge-danger">3 </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page_todo.html">
                                            <i className="icon-rocket"></i> My Tasks <span className="badge badge-success">7 </span>
                                        </a>
                                    </li>
                                    <li className="divider">
                                    </li>
                                    <li>
                                        <a href="extra_lock.html">
                                            <i className="icon-lock"></i> Lock Screen </a>
                                    </li>
                                    <li>
                                        <Link to="/login">
                                            <i className="icon-key"></i> Log Out </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}
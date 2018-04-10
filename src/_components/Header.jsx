import React from 'react';
import { Link } from 'react-router-dom';
export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

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
                                        <Link to="/profiles">
                                            <i className="icon-user"></i> My Profile </Link>
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
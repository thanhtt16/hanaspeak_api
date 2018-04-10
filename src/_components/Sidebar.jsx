import React from 'react';
import { Router, Link, Switch } from 'react-router-dom';

export class Sidebar extends React.Component {
    render() {
        return (
            <div className="page-sidebar-wrapper">
                <div className="page-sidebar navbar-collapse collapse">
                    <ul className="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                        <li className="heading">
                            <h3 className="uppercase">Features</h3>
                        </li>
                        <li className="start ">
                            <a href="javascript:;">
                                <i className="icon-home"></i>
                                <span className="title">Default Dashboard</span>
                                <span className="arrow "></span>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/blank-page">
                                        <i className="icon-bar-chart"></i>
                                        Blank page
                                    </Link>
                                </li>
                                <li>
                                    <a href="index_2.html">
                                        <i className="icon-bulb"></i>
                                        New Dashboard #1</a>
                                </li>
                                <li>
                                    <a href="index_3.html">
                                        <i className="icon-graph"></i>
                                        New Dashboard #2</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
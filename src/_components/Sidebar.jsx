import React from 'react';
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
                                <span className="title">Dashboard</span>
                                <span className="arrow "></span>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="index.html">
                                        <i className="icon-bar-chart"></i>
                                        Default Dashboard</a>
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
                        <li>
                            <a href="javascript:;">
                                <i className="icon-basket"></i>
                                <span className="title">eCommerce</span>
                                <span className="arrow "></span>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="ecommerce_index.html">
                                        <i className="icon-home"></i>
                                        Dashboard</a>
                                </li>
                                <li>
                                    <a href="ecommerce_orders.html">
                                        <i className="icon-basket"></i>
                                        Orders</a>
                                </li>
                                <li>
                                    <a href="ecommerce_orders_view.html">
                                        <i className="icon-tag"></i>
                                        Order View</a>
                                </li>
                                <li>
                                    <a href="ecommerce_products.html">
                                        <i className="icon-handbag"></i>
                                        Products</a>
                                </li>
                                <li>
                                    <a href="ecommerce_products_edit.html">
                                        <i className="icon-pencil"></i>
                                        Product Edit</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i className="icon-diamond"></i>
                                <span className="title">UI Features</span>
                                <span className="arrow "></span>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="ui_general.html">
                                        General Components</a>
                                </li>
                                <li>
                                    <a href="ui_buttons.html">
                                        Buttons</a>
                                </li>
                                <li>
                                    <a href="ui_confirmations.html">
                                        Popover Confirmations</a>
                                </li>
                                <li>
                                    <a href="ui_icons.html">
                                        <span className="badge badge-roundless badge-danger">new</span>Font Icons</a>
                                </li>
                                <li>
                                    <a href="ui_colors.html">
                                        Flat UI Colors</a>
                                </li>
                                <li>
                                    <a href="ui_typography.html">
                                        Typography</a>
                                </li>
                                <li>
                                    <a href="ui_tabs_accordions_navs.html">
                                        Tabs, Accordions &amp; Navs</a>
                                </li>
                                <li>
                                    <a href="ui_tree.html">
                                        <span className="badge badge-roundless badge-danger">new</span>Tree View</a>
                                </li>
                                <li>
                                    <a href="ui_page_progress_style_1.html">
                                        <span className="badge badge-roundless badge-warning">new</span>Page Progress Bar</a>
                                </li>
                                <li>
                                    <a href="ui_blockui.html">
                                        Block UI</a>
                                </li>
                                <li>
                                    <a href="ui_bootstrap_growl.html">
                                        <span className="badge badge-roundless badge-warning">new</span>Bootstrap Growl Notifications</a>
                                </li>
                                <li>
                                    <a href="ui_notific8.html">
                                        Notific8 Notifications</a>
                                </li>
                                <li>
                                    <a href="ui_toastr.html">
                                        Toastr Notifications</a>
                                </li>
                                <li>
                                    <a href="ui_alert_dialog_api.html">
                                        <span className="badge badge-roundless badge-danger">new</span>Alerts &amp; Dialogs API</a>
                                </li>
                                <li>
                                    <a href="ui_session_timeout.html">
                                        Session Timeout</a>
                                </li>
                                <li>
                                    <a href="ui_idle_timeout.html">
                                        User Idle Timeout</a>
                                </li>
                                <li>
                                    <a href="ui_modals.html">
                                        Modals</a>
                                </li>
                                <li>
                                    <a href="ui_extended_modals.html">
                                        Extended Modals</a>
                                </li>
                                <li>
                                    <a href="ui_tiles.html">
                                        Tiles</a>
                                </li>
                                <li>
                                    <a href="ui_datepaginator.html">
                                        <span className="badge badge-roundless badge-success">new</span>Date Paginator</a>
                                </li>
                                <li>
                                    <a href="ui_nestable.html">
                                        Nestable List</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
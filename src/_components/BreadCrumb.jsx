import React from 'react';
import {Link} from 'react-router-dom';


export class BreadCrumb extends React.Component {
    render() {
        var listLinks = this.props.datalink;

        const listItems = listLinks.map((link, index) =>
            <li>
                {index == 0 ? <i className="fa fa-home"></i> : ''}
                <Link to={link.link}>{link.title}</Link>
                {index != listLinks.length -1 ? <i className="fa fa-angle-right"></i> : ''}
            </li>
        );

        return (
            <ul className="page-breadcrumb">
                {listItems}
            </ul>
        );
    }
}

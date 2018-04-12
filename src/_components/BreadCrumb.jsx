import React from 'react';
import {Link} from 'react-router-dom';


export class BreadCrumb extends React.Component {
    render() {
        var listLinks = this.props.datalink;

        const listItems = listLinks.map((link, index) =>
            <li class={index === listLinks.length -1 ? 'active' : ''}>
                <Link to={link.title}>{index === 0 ? <i class="icon-home2 position-left"></i> : ''} {link.title}</Link>
            </li>
        );
        return (
            <div class="page-header">
                <div class="breadcrumb-line">
                    <ul class="breadcrumb">
                        {listItems}
                    </ul>
                </div>
            </div>

        );
    }
}

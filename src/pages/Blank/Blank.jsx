import React from 'react';
import { Link } from 'react-router-dom';
import {BreadCrumb} from '../../_components/BreadCrumb'
export class Blank extends React.Component {
    componentDidMount() {
    }

    render() {
        const { user, users } = this.props;
        let breadCrumb = [{title: "Blank Page", link: "/blank-page"}];
        return (
            <React.Fragment>
                <div className="page-bar">
                    <BreadCrumb datalink={breadCrumb} />
                </div>
                <h1>Blank page</h1>
            </React.Fragment>
        );
    }
}
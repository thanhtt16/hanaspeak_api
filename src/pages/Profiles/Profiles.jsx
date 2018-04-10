import React from 'react';
import {BreadCrumb} from '../../_components/BreadCrumb'
export class Profiles extends React.Component {
    render() {
        let breadCrumb = [{title: "Profiles", link: "profiles"}];
        return (
            <React.Fragment>
                <div className="page-bar">
                    <BreadCrumb datalink={breadCrumb} />
                </div>

                <h1>Profiles page</h1>
            </React.Fragment>
        );
    }
}

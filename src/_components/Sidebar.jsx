import React from 'react';
import { Link} from 'react-router-dom';

export class Sidebar extends React.Component {
    render() {
        return (
            <div class="sidebar sidebar-main">
                <div class="sidebar-content">
{/*
                    <div class="sidebar-user">
                        <div class="category-content">
                            <div class="media">
                                <a href="#" class="media-left"><img src="assets/images/placeholder.jpg" class="img-circle img-sm" alt="" /></a>
                                <div class="media-body">
                                    <span class="media-heading text-semibold">Victoria Baker</span>
                                    <div class="text-size-mini text-muted">
                                        <i class="icon-pin text-size-small"></i> &nbsp;Santa Ana, CA
                                    </div>
                                </div>

                                <div class="media-right media-middle">
                                    <ul class="icons-list">
                                        <li>
                                            <a href="#"><i class="icon-cog3"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>*/}

                    <div class="sidebar-category sidebar-category-visible">
                        <div class="category-content no-padding">
                            <ul class="navigation navigation-main navigation-accordion">
                                <li class="active"><a href="index.html"><i class="icon-home4"></i> <span>Dashboard</span></a></li>

                                <li>
                                    <a href="#"><i class="icon-images2"></i> <span>Gallery</span></a>
                                    <ul>
                                        <li><a href="gallery_grid.html">Media grid</a></li>
                                        <li><a href="gallery_titles.html">Media with titles</a></li>
                                        <li><a href="gallery_description.html">Media with description</a></li>
                                        <li><a href="gallery_library.html">Media library</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
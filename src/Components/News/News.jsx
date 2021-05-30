import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pager from 'react-pager';
import {AppStateType} from "../../redux/redux-store";


class AlbumsShow extends Component {
    constructor(props) {
        super(props);
        this.renderImage = this.renderImage.bind(this);
        this.handlePageChanged = this.handlePageChanged.bind(this);

        this.state = {
            total:       3,
            current:     1,
            visiblePage: 2,
        };
    }

    handlePageChanged(newPage) {
        this.setState({ current : newPage });
    }

    renderImage(){
        return this.props.images.map(image => (
            <li key={image.id}>
                <img className="album_img" alt="job" src={image.img} />
                <p className="album_title">Test</p>
            </li>
        ));
    }

    render(){
        return (
            <div>
                <div>
                    {this.renderImage()}
                </div>
                <Pager
                    total={this.state.total}
                    current={this.state.current}
                    visiblePages={this.state.visiblePage}
                    titles={{ first: '<|', last: '>|' }}
                    className="pagination-sm pull-right"
                    onPageChanged={this.handlePageChanged}
                />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        images: state.main.albums[0].images,
    };
}
export default connect(mapStateToProps)(AlbumsShow);
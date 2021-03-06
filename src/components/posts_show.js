import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchSinglePost,deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component {

    componentWillMount() {
        this.props.fetchSinglePost(this.props.params.id);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
        .then(()=> {
            this.context.router.push('/React-blog/');
        });
        
    }

    render() {                
        if(!this.props.post) {
                return <div>Loading...</div>;
        }

        return(
            <div>
                <Link to="/React-blog/">Back to Index</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick = {this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{this.props.post.title}</h3>
                <h6>Categories: {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps,{fetchSinglePost, deletePost})(PostsShow);
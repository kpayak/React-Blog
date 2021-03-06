import React, {Component,PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {addPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.addPost(props)
            .then(()=>{
                this.context.router.push('/React-blog/');
            });
    }
    
    render() {
        const {handleSubmit, fields: {title,categories,content}} = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Add a New Post</h3>
                <div className={`'form-group ${title.touched&&title.invalid?'has-danger':''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`'form-group ${categories.touched&&categories.invalid?'has-danger':''}`}>
                    <label>Category</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`'form-group ${content.touched&&content.invalid?'has-danger':''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/React-blog/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = "Enter a valid title";
    }

    if(!values.categories) {
        errors.categories = "Category field cannot be empty";
    }

    if(!values.content) {
        errors.content = "content cannot be empty";
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { addPost })(PostsNew);
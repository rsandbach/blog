import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class PostsNew extends React.Component {
    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/')
        })
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}:</label>
                <input className="form-control" type="text" {...field.input} data-lpignore="true" />
                <div className="text-help">
                    {touched && error}
                </div>
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" component={this.renderField} label="Title" />
                <Field name="categories" component={this.renderField} label="Categories" />
                <Field name="content" component={this.renderField} label="Post Content" />
                <button type="submit" className="btn btn-primary">Save</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {

    const errors = {}

    if (!values.title) {
        errors.title = "Enter a title"
    }

    if (values.title && values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!"
    }

    if (!values.categories) {
        errors.categories = "Enter at least one category!"
    }

    if (!values.content) {
        errors.content = "Enter some content!"
    }

    return errors;
}

export default reduxForm({ validate, form: 'PostsNewForm' })(
    connect(null, { createPost })(PostsNew)
)
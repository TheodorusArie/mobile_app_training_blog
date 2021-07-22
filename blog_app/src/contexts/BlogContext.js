import React, { useReducer } from 'react';
import createDataContext from './createDataContext';



const blogReducer = (state, actions) => {

    switch (actions.type) {
        case 'add_blogpost':
            return [...state, {
                title: actions.payload.title,
                id: Math.floor(Math.random() * 9999),
                content: actions.payload.content,
            }];

        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== actions.payload.id)
        default:
            return state;
    }

}
const addBlogPost = (dispatch) => {
    return (title, content, _callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } })
        _callback();
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: { id } })
    }
}


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
)
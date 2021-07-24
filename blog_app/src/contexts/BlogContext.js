import React, { useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonserver from '../Api/jsonserver';



const blogReducer = (state, actions) => {

    switch (actions.type) {
        case 'add_blogpost':
            return [...state, {
                title: actions.payload.title,
                id: actions.payload.id,
                content: actions.payload.content,
            }];

        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== actions.payload.id);

        case 'edit_blogpost':

            return state.map(blogPost => {
                return blogPost.id === actions.payload.id
                    ? actions.payload
                    : blogPost
            })

        case 'get_blogpost':
            return actions.payload;


        default:
            return state;
    }

}
const addBlogPost = (dispatch) => {
    return async (title, content, _callback) => {

        let response = await jsonserver.post('/blogposts', { title, content });
        dispatch({
            type: 'add_blogpost', payload: {
                title: response.data.title,
                id: response.data.id,
                content: response.data.content,
            }
        })

        if (_callback) {
            _callback()
        }
    }
}

const deleteBlogPost = dispatch => {
    return async (id) => {

        await jsonserver.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: { id } })
    }
}

const editBlogPost = dispatch => {
    return async (title, content, id, _callback) => {

        let response = await jsonserver.put(`/blogposts/${id}`, { title, content })
        dispatch({
            type: 'edit_blogpost', payload: {
                title: response.data.title,
                content: response.data.content,
                id: response.data.id
            }
        })
        if (_callback) {
            _callback();
        }

    }
}

const getBlogPost = dispatch => {
    return async () => {
        try {
            let response = await jsonserver.get('/blogposts');
            dispatch({ type: 'get_blogpost', payload: response.data })
        }
        catch (err) {
            console.warn("ERROR:", err)
        }

    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
    []
)
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context } from '../contexts/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

function EditScreen({ navigation }) {


    const { state } = useContext(Context)
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id)

    const { editBlogPost } = useContext(Context)

    handleSubmitButton = (title, content, id) => {
        editBlogPost(title, content, id, () => {
            navigation.pop();
        });
    }

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => handleSubmitButton(title, content, id)}
    />

}

export default withNavigation(EditScreen)

const styles = StyleSheet.create({});
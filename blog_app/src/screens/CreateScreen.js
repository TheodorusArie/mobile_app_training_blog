import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Context } from '../contexts/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

function CreateScreen({ navigation }) {

    const { addBlogPost } = useContext(Context)

    handleSubmitButton = (title, content) => {
        addBlogPost(title, content, () => {
            navigation.navigate('Index');
        });

    }

    return (
        <BlogPostForm onSubmit={(title, content) => handleSubmitButton(title, content)} />
    )

}

export default withNavigation(CreateScreen)

const styles = StyleSheet.create({});
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

function BlogPostForm({ onSubmit, initialValues }) {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Input Title :</Text>
                <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
                <Text style={styles.label}>Input Content :</Text>
                <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
                <TouchableOpacity style={styles.button}>
                    <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
        alignItems: 'center',


    },
    formContainer: {
        width: 300,
        marginTop: 100,
    },
    label: {
        fontSize: 20,
        marginHorizontal: 5,
        marginTop: 10,
    },
    input: {
        fontSize: 18,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 10,
        height: 40,
        borderRadius: 4,

    },
    button: {
        marginHorizontal: 5,
        marginTop: 25,
    }
})

export default withNavigation(BlogPostForm)
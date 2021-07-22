import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Context } from '../contexts/BlogContext'

function CreateScreen({ navigation }) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { addBlogPost } = useContext(Context)

    handleSubmitButton = () => {
        addBlogPost(title, content, () => {
            navigation.navigate('Index');
        });

    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Input Title :</Text>
                <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
                <Text style={styles.label}>Input Content :</Text>
                <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
                <TouchableOpacity style={styles.button}>
                    <Button title="Add Blog Post" onPress={() => handleSubmitButton()} />
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default withNavigation(CreateScreen)

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
    },
    button: {
        marginHorizontal: 5,
        marginTop: 25,
    }

});
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Context } from '../contexts/BlogContext'
import { withNavigation } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function IndexScreen({ navigation }) {

    const { state, deleteBlogPost, getBlogPost } = useContext(Context);

    useEffect(() => {
        getBlogPost();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPost();
        })

        return () => {
            listener.remove();
        };
    }, [])


    const renderBlogPost = ({ item }) => {
        return (
            <TouchableOpacity style={styles.blogPostContainer} onPress={() => navigation.navigate('Detail', { id: item.id })}>
                <View>
                    <Text> Title : {item.title} - {item.id} </Text>
                    <Text> Content : {item.content}  </Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => deleteBlogPost(item.id)} >
                    <Icon name='delete' size={20} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            {/* <Button title="Hit Me" onPress={addBlogPost} /> */}

            <FlatList
                data={state}
                keyExtractor={(blogPost) => String(blogPost.id)}
                renderItem={renderBlogPost}
                nestedScrollEnabled
            />

        </SafeAreaView>
    )
}



IndexScreen.navigationOptions = ({ navigation }) => ({
    headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')} style={styles.createButtonContainer}>
            <Icon name="plus" size={40} />
        </TouchableOpacity>
    ),
})



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fefefe',
    },

    blogPostContainer: {
        flexDirection: 'row',
        height: 100,
        marginHorizontal: 15,
        borderWidth: 0.5,
        borderRadius: 4,
        marginVertical: 5,
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    buttonContainer: {
        justifyContent: 'flex-end',
    },
    createButtonContainer: {
        margin: 5,
    }

});


export default withNavigation(IndexScreen);
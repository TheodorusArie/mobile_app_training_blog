import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
// import { Context } from '../contexts/BlogContext'
import BlogContext from '../contexts/BlogContext';
function IndexScreen() {

    const { data,addBlogPost } = useContext(BlogContext);


    // const renderBlogPost = ({ item }) => {
    //     return (
    //         <View>
    //             <Text> Title : {item.title} </Text>
    //         </View>
    //     )
    // }

    return (
        <View>
            <Button title="Hit Me" onPress={addBlogPost} />
            <Text>Index Screen</Text>
            <Text>{JSON.stringify(data)}</Text>
            {/* <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={renderBlogPost}
            /> */}

        </View>
    )
}

const styles = StyleSheet.create({});


export default IndexScreen;
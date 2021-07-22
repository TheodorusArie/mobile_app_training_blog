import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Context } from '../contexts/BlogContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function DetailScreen({ navigation }) {
    const id = navigation.getParam('id')
    let { state } = useContext(Context);
    const blogPost = state.find(post => post.id === id)


    return (
        <View style={styles.container}>
            <View style={styles.blogPostContainer}>
                <Text style={styles.blogPostTitle}>{blogPost.title} - {blogPost.id}</Text>
                <Text style={styles.blogPostContent}>{blogPost.content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    blogPostContainer: {
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        alignSelf: 'center',
        marginTop: 20,
        height: 200,
    },
    blogPostTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 5,
    },
    blogPostContent: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 5,
    },
    editButtonContainer: {
        margin: 5,
    }

})

DetailScreen.navigationOptions = ({ navigation }) => ({
    headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Index')} style={styles.editButtonContainer}>
            <Icon name="pencil" size={30} />
        </TouchableOpacity>
    )
})

export default withNavigation(DetailScreen);

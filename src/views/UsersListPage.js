import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import database from '@react-native-firebase/database';
import { observer } from 'mobx-react';


import styles from '../styles/UsersListPageStyle';
import helper from '../controllers/helper';


class UsersListPage extends Component{

    // fetch all users from database
    componentWillMount=async()=> {
        await database()
            .ref('users')
            .on('value',response => {
                const tmp = []
                for(let i in response.val()){
                    tmp.push({
                        user: response.val()[i]
                    })
                }
                helper.users = tmp
            })
    }

    // navigates to a specific chat dialog page
    routeToChat(item){
        helper.chatUserName = item
        this.props.navigation.navigate('ChatPage')
    }

    // shows all users as a list
    renderUsersList(item){
        return(
            <>
                {
                    helper.name !== item.user.name&&  // when the person writes a name and enters the app, it hides that name in users list
                    <TouchableOpacity
                        onPress={()=> this.routeToChat(item.user.name)}
                        style={styles.userContainer}
                    >
                        <Text style={styles.userAvatar}>{item.user.name.charAt(0).toUpperCase()+item.user.name.charAt(1).toUpperCase()}</Text>
                        <Text style={styles.userName}>{item.user.name}</Text>
                    </TouchableOpacity>
                }
            </>
        )
    }

    render(){
        return(
            <View style={styles.usersListContainer}>
                {
                    <FlatList
                        data={helper.users}
                        renderItem={item => this.renderUsersList(item.item)}
                    />
                }
            </View>
        )
    }
}

export default observer(UsersListPage);

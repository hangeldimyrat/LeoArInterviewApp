import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, LayoutAnimation } from "react-native";
import database from '@react-native-firebase/database';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles/ChatsListPageStyle';
import helper from '../controllers/helper';

class ChatsListPage extends Component{


    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    // takes the  all previous chats from database
    componentWillMount=async()=> {
        await database()
            .ref(`chats/${helper.name}`)
            .on('value',response => {
                const tmp = []
                for(let i in response.val()){
                    tmp.push({
                        name: response.val()[i].name
                    })
                }
                helper.chatsList = tmp
            })
    }

    // navigates to a specific chat dialog page
    goChatPage=async(item)=>{
        helper.chatUserName = item
        this.props.navigation.navigate('ChatPage')
    }

    // renders all chats done before and shows as a list
    renderChatsList(item){
        return(
            <>
                <TouchableOpacity
                    onPress={()=> this.goChatPage(item.item.name)}
                    style={styles.chatContainer}>
                    <Text style={styles.userAvatar}>{item.item.name.charAt(0).toUpperCase()+item.item.name.charAt(1).toUpperCase()}</Text>
                    <View style={styles.chatDetails}>
                        <Text style={styles.userName}>{item.item.name}</Text>
                    </View>
                </TouchableOpacity>

            </>
        )
    }

    // if there is no chat done before, navigates to the users list page
    createNewChat(){
        return(
            <View style={{alignItems:'center',justifyContent:'center',height:'80%'}}>
                <Text style={styles.startFirstChat}>Start your first chat</Text>
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('UsersListPage')}
                    style={styles.crateNewChatButton}
                >
                    <Icon name='chat-plus' size={25} color='#fff'/>
                    <Text style={styles.createNewChatText}>New Chat</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.chatsListContainer}>
                {
                    helper.chatsList.length>0?
                    <FlatList
                        data={helper.chatsList}
                        renderItem={item => this.renderChatsList(item)}
                    />:
                    this.createNewChat()
                }
            </View>
        )
    }
};

export default observer(ChatsListPage);

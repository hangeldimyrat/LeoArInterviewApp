import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,ScrollView, LayoutAnimation } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import database from '@react-native-firebase/database';

import styles from '../styles/ChatPageStyle';
import helper from '../controllers/helper';
import {observer} from 'mobx-react';



class ChatPage extends Component{


    componentWillMount(){
        database()
    .ref(`chatDetails/${helper.name}-${helper.chatUserName}`)
    .on('value',response => {
        let data = response.val()
        const tmp=[]
        for (let key in data) {
            tmp.push({
                key: key,
                data: data[key]
            })
        };
        helper.messages = tmp
    })
    }

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }


    renderChatter1(item){
        return(
            <>
                <View style={styles.chatter1Container}>
                    <Text style={styles.userAvatar}>{item.sender.charAt(0)+item.sender.charAt(1).toUpperCase()}</Text>
                    <View style={styles.messageContainer}>
                        <Text style={styles.chatter1}>
                            {item.message}
                        </Text>
                    </View>
                </View>
            </>
        )
    }

    renderChatter2(item) {
        return (
            <View style={styles.chatter2Container}>
                <View style={styles.messageContainer}>
                    <Text style={styles.chatter2}>{item.message}</Text>
                </View>
                <Text style={styles.userAvatar}>{item.sender.charAt(0)+item.sender.charAt(1).toUpperCase()}</Text>
            </View>
        )
    }


    constructor(props) {
        super(props);
        this.state = {
            message:'',
        }
    }

    createChatDatabase(){
        const chatsRef = database().ref(`chats/${helper.name}/${helper.chatUserName}` )
        chatsRef.set({
           name:helper.chatUserName
        })

        const chatsRef1 = database().ref(`chats/${helper.chatUserName}/${helper.name}` )
        chatsRef1.set({
            name:helper.name
        })

        const chatDetails = database().ref(`chatDetails/${helper.name}-${helper.chatUserName}/`+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds())
        chatDetails.set({
            message:this.state.message,
            sender:helper.name
        })

        const chatDetails1 = database().ref(`chatDetails/${helper.chatUserName}-${helper.name}/`+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds())
        chatDetails1.set({
            message:this.state.message,
            sender:helper.name
        })
        this.setState({message:''})

    }

    render(){
        return(
            <View style={styles.chatContainer}>

                <ScrollView>
                    <FlatList
                        data={helper.messages}
                        renderItem={item=>
                            item.item.data.sender === helper.name ?
                                this.renderChatter2(item.item.data):
                                this.renderChatter1(item.item.data)}
                    />
                </ScrollView>

                <View style={styles.messageArea}>
                    <TouchableOpacity style={styles.addImage}>
                        <Icon name='image' size={30} color='#9c9c9c'/>
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Mesaj yaz...'
                        multiline
                        value={this.state.message}
                        onChangeText={message => this.setState({message:message})}
                        style={styles.messageInput}/>
                    <TouchableOpacity
                        onPress={()=>this.createChatDatabase()}
                        style={styles.sendButton}>
                        <Icon name='arrow-up' size={25} color='#fff'/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default observer(ChatPage);

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,ScrollView, LayoutAnimation,} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import database from '@react-native-firebase/database';
import {observer} from 'mobx-react';
import axios from 'axios';

import styles from '../styles/ChatPageStyle';
import helper from '../controllers/helper';

class ChatPage extends Component{


    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    //fetch all conversations between two users from database
    componentWillMount=async()=> {
        database()
            .ref(`chatDetails/${helper.name}-${helper.chatUserName}`)
            .on('value',() => {
                // I used axios here because database() function couldn't fetch data in order
                axios.get(`https://leoarinterviewapp-d3c35.firebaseio.com/chatDetails/${helper.name}-${helper.chatUserName}.json`)
                    .then(response=>{
                        let data = response.data
                        const temp = []
                        for(let key in data){
                            temp.push(
                                {
                                    key : key,
                                    data : data[key]
                                }
                            )
                        }
                        helper.messages=temp
                    })
            })

    }

    constructor(props) {
        super(props);
        this.state = {
            message:''
        }
    }


    // shows the conversation messages from the opposite side chatter
    renderChatter1(item){
        return(
            <>
                <View style={styles.chatter1Container}>
                    <Text style={styles.userAvatar}>{item.sender.charAt(0).toUpperCase()+item.sender.charAt(1).toUpperCase()}</Text>
                    <View style={styles.messageContainer}>
                        <Text style={styles.chatter1}>
                            {item.message}
                        </Text>
                    </View>
                </View>
            </>
        )
    }

    // shows the conversation messages of the user
    renderChatter2(item) {
        return (
            <View style={styles.chatter2Container}>
                <View style={styles.messageContainer}>
                        <Text style={styles.chatter2}>
                            {item.message}
                        </Text>
                </View>
                <Text style={styles.userAvatar}>{item.sender.charAt(0).toUpperCase()+item.sender.charAt(1).toUpperCase()}</Text>
            </View>
        )
    }

    // this function creates chat database
    createChatDatabase(){
        const chatsRef = database().ref(`chats/${helper.name}/${helper.chatUserName}` )
        chatsRef.set({
           name:helper.chatUserName
        })

        const chatsRef1 = database().ref(`chats/${helper.chatUserName}/${helper.name}` )
        chatsRef1.set({
            name:helper.name
        })

        const chatDetails = database().ref(`chatDetails/${helper.name}-${helper.chatUserName}/`+new Date().toLocaleDateString().replace(/[^a-z0-9|]/g, '-')+' '+new Date().toLocaleTimeString())
        chatDetails.set({
            message:this.state.message,
            sender:helper.name
        })

        const chatDetails1 = database().ref(`chatDetails/${helper.chatUserName}-${helper.name}/`+new Date().toLocaleDateString().replace(/[^a-z0-9|]/g, '-')+' '+new Date().toLocaleTimeString())
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
                        style={{paddingTop:15,paddingBottom:15}}

                        // checks if the message belongs to the user or the opposite side chatter and runs the related function
                        renderItem={item=> item.item.data.sender === helper.name?
                                this.renderChatter2(item.item.data):
                                this.renderChatter1(item.item.data)}
                    />
                </ScrollView>


                <View style={styles.messageArea}>
                    <TouchableOpacity
                        style={styles.addImage}>
                        <Icon name='image' size={30} color='#9c9c9c'/>
                    </TouchableOpacity>

                    <TextInput
                        placeholder='Write message...'
                        multiline
                        value={this.state.message}
                        onChangeText={message => this.setState({message:message})}
                        style={styles.messageInput}/>


                    {  // send button appears if user writes something, else 'location send' button is shown
                        this.state.message !== '' ?
                        <TouchableOpacity
                            onPress={()=>this.createChatDatabase()}
                            style={styles.sendButton}>
                            <Icon name='arrow-up' size={25} color='#fff'/>
                        </TouchableOpacity>:
                        <TouchableOpacity
                            style={styles.sendLocation}
                         >
                            <Icon name='map-pin' size={30} color='#9c9c9c'/>
                         </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
}

export default observer(ChatPage);

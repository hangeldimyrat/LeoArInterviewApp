import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import styles from '../styles/ChatPageStyle';

class ChatPage extends Component{

    renderChatter1(){
        return(
            <>
                <View style={styles.chatter1Container}>
                    <Text style={styles.userAvatar}>MA</Text>
                    <View style={styles.messageContainer}>
                        <Text style={styles.chatter1}>Merhaba</Text>
                        <Text style={styles.chatter1}>Nasılsın mncxmvözxn ömncömxvmn mnvbzmcnvmözncxvmn zmxnmvömzncxzm xzmxvmözxnc mövcm zmcv zmcxv</Text>
                    </View>
                </View>
            </>
        )
    }

    renderChatter2() {
        return (
            <View style={styles.chatter2Container}>
                <View style={styles.messageContainer}>
                    <Text style={styles.chatter2}>Merhaba iyiym sağolasın sen nasılsın vmnmdknf nkjfsnvkjfndv ndsjvnjfnvjk nfvkjdnvskjf dvfjvkjndvkdkfjvn</Text>
                </View>
                <Text style={styles.userAvatar}>RK</Text>
            </View>
        )
    }
    render(){
        return(
            <View style={styles.chatContainer}>
                {
                    this.renderChatter1()
                }
                {
                    this.renderChatter2()
                }
                <View style={styles.messageArea}>
                    <TouchableOpacity style={styles.addImage}>
                        <Icon name='image' size={30} color='#9c9c9c'/>
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Mesaj yaz...'
                        multiline
                        style={styles.messageInput}/>
                    <TouchableOpacity style={styles.sendButton}>
                        <Icon name='arrow-up' size={25} color='#fff'/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default ChatPage;

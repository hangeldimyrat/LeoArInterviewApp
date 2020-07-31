import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";

import styles from '../styles/ChatsListPageStyle';

class ChatsListPage extends Component{


    renderChatsList(){
        return(
            <>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('ChatPage')}
                    style={styles.chatContainer}>
                    <Text style={styles.userAvatar}>MA</Text>
                    <View style={styles.chatDetails}>
                        <Text style={styles.userName}>Mehmet Arif</Text>
                        <Text style={styles.userMessage}>Selam nasılsın</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.chatContainer}>
                    <Text style={styles.userAvatar}>SG</Text>
                    <View style={styles.chatDetails}>
                        <Text style={styles.userName}>Salih Genç</Text>
                        <Text style={styles.userMessage}>Nasılsın ben Salih</Text>
                    </View>

                </TouchableOpacity>
            </>
        )
    }

    render(){
        return(
            <View style={styles.chatsListContainer}>
                {
                    this.renderChatsList()
                }
            </View>
        )
    }
};

export default ChatsListPage;

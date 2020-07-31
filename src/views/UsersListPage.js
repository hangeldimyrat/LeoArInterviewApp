import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from '../styles/UsersListPageStyle';

class UsersListPage extends Component{

    renderUsersList(){
        return(
            <>
                <TouchableOpacity style={styles.userContainer}>
                    <Text style={styles.userAvatar}>MY</Text>
                    <Text style={styles.userName}>Mehmet Yavuz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userContainer}>
                    <Text style={styles.userAvatar}>ZK</Text>
                    <Text style={styles.userName}>Zafer Kaplan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userContainer}>
                    <Text style={styles.userAvatar}>AY</Text>
                    <Text style={styles.userName}>Alev Yılmaz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userContainer}>
                    <Text style={styles.userAvatar}>MA</Text>
                    <Text style={styles.userName}>Murat Artan</Text>
                </TouchableOpacity>
            </>
        )
    }

    render(){
        return(
            <View style={styles.usersListContainer}>
                {
                    this.renderUsersList()
                }
            </View>
        )
    }
};

export default UsersListPage;

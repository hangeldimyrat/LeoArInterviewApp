import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native";
import {observer} from "mobx-react";
import database from '@react-native-firebase/database';

import styles from '../styles/LoginPageStyle';
import helper from "../controllers/helper";


// in order to enable LayoutAnimation
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}


class LoginPage extends Component{




    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    constructor(props) {
        super(props);
        this.state = {
            onFocus:false,
            showError:false
        }
    }

    // checks if the username length is more than two letters
    userNameCheck=async ()=>{
        if(helper.name.length >= 2) {
            const reference = database().ref(`users/${helper.name}`)
            reference.set({
                name:helper.name
            })
            this.props.navigation.navigate('ChatsListPage')
        }
        else this.setState({showError:true,})
    }

    render(){
        return(
            <View style={styles.loginContainer}>

               <View style={[styles.inputView,this.state.onFocus&&{borderColor:'#3DABFF'}]}>
                   <Text style={this.state.onFocus ? styles.userNameTextAbsolute : styles.userNameText}>Enter your username</Text>
                   <TextInput
                       onChangeText={ name => {
                           helper.name = name;
                           if(helper.name.length>=2)this.setState({showError:false})
                       }}
                       style={styles.input}
                       onEndEditing={()=>{
                           if(helper.name==='')this.setState({onFocus:false, showError: false})
                       }}
                       onFocus={()=>this.setState({onFocus:true})}
                   />
               </View>
                {
                    this.state.showError &&
                    <Text style={styles.errorText}>Username must be more than two letters</Text>
                }
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={()=>this.userNameCheck()}
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>
            </View>

        )
    }
};

export default observer(LoginPage);

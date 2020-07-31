import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native";

import styles from '../styles/LoginPageStyle';


if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}


class LoginPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            onFocus:false
        }
    }

    componentDidUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    render(){
        return(
            <View style={styles.container}>
               <View style={[styles.inputView,this.state.onFocus&&{borderColor:'#3DABFF'}]}>
                   <Text style={this.state.onFocus ? styles.userNameTextAbsolute : styles.userNameText}>Enter your username</Text>
                   <TextInput
                       style={styles.input}
                       onEndEditing={()=>this.setState({onFocus:false})}
                       onFocus={()=>this.setState({onFocus:true})}
                   />
               </View>

                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={()=>this.props.navigation.navigate('UsersListPage')}
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>Giriş yap</Text>
                </TouchableOpacity>
            </View>

        )
    }
};

export default LoginPage;

import React, { Component } from 'react';
import { TouchableOpacity, Text, StatusBar } from "react-native";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//my components
import LoginPage from './src/views/LoginPage';
import UsersListPage from './src/views/UsersListPage';
import ChatsListPage from './src/views/ChatsListPage';
import ChatPage from './src/views/ChatPage';


import colors from './src/styles/colors';

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
        <>
            <StatusBar background={colors.appColor}/>

            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={({navigation}) => ({
                        headerStyle: {
                            backgroundColor: colors.appColor,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text>Geri</Text>
                            </TouchableOpacity>
                        ),
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center'
                    })}
                    initialRouteName="LoginPage">

                    <Stack.Screen
                        name='LoginPage'
                        options={{
                            title: 'Login'
                        }}
                        component={LoginPage}/>

                    <Stack.Screen
                        name='UsersListPage'
                        options={{
                            title: 'Users List'
                        }}
                        component={UsersListPage}/>

                    <Stack.Screen
                        name='ChatsListPage'
                        options={{
                            title:'Chats List'
                        }}
                        component={ChatsListPage}/>

                    <Stack.Screen
                        name='ChatPage'
                        options={{
                            title: 'Chat Page'
                        }}
                        component={ChatPage}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
  }
}

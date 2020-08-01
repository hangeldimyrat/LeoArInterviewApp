import React, { Component } from 'react';
import { TouchableOpacity, Text, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//my components
import LoginPage from './src/views/LoginPage';
import UsersListPage from './src/views/UsersListPage';
import ChatsListPage from './src/views/ChatsListPage';
import ChatPage from './src/views/ChatPage';


import colors from './src/styles/colors';
import database from '@react-native-firebase/database';
import helper from './src/controllers/helper';

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
                    backgroundColor: '#3DABFF',
                  },
                  headerTintColor: '#fff',
                  headerTitleAlign: 'center'
                })}
                initialRouteName="LoginPage">

              <Stack.Screen
                  name='LoginPage'
                  options={{
                    title: 'Login',
                    headerLeft:false
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
                  options={({navigation}) => ({
                      title:'Chats List',
                      headerRight:()=>(
                          <TouchableOpacity
                              onPress={()=> navigation.navigate('UsersListPage')}
                              style={{paddingRight:20}}>
                              <Icon name='account-multiple' color='#fff' size={25}/>
                          </TouchableOpacity>
                      ),


                  })}
                  component={ChatsListPage}/>

              <Stack.Screen
                  name='ChatPage'
                  options={({navigation}) => ({
                    title: 'Chat Page',
                    headerLeft: ()=>(
                        <TouchableOpacity
                            onPress={()=> {
                                database()
                                    .ref(`chats/${helper.name}`)
                                    .once('value')
                                    .then(response => {
                                        const tmp = []
                                        console.log(response.val())
                                        for(let i in response.val()){
                                            tmp.push({
                                                name: response.val()[i].name
                                            })
                                        }
                                        helper.chatsList = tmp
                                    });
                                navigation.navigate('ChatsListPage');
                            }}
                            style={{paddingLeft:20}}>
                            <Icon name='arrow-left' color='#fff' size={25}/>
                        </TouchableOpacity>
                    )
                  })}
                  component={ChatPage}/>
            </Stack.Navigator>
          </NavigationContainer>
        </>
    )
  }
}

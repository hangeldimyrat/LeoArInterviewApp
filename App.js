import React, { Component } from 'react';
import { TouchableOpacity, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginPage from './src/views/LoginPage';
import UsersListPage from './src/views/UsersListPage';
import ChatsListPage from './src/views/ChatsListPage';
import ChatPage from './src/views/ChatPage';



const Stack = createStackNavigator();


export default class App extends Component{
  render(){
    return(
        <>
          <StatusBar backgroundColor={'#3DABFF'}/>

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
                          <TouchableOpacity   // button which navigates to the users list at header
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
                        <TouchableOpacity   // when exit from a chat conversation page, the back button navigates to the chats page
                            onPress={()=> {
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

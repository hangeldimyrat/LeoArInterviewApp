import { StyleSheet } from 'react-native'
import colors from './colors';

const styles = StyleSheet.create({
    chatsListContainer:{
        flex:1,
        alignItems:'center',
        paddingTop:10,
        backgroundColor:'#fff'
    },
    chatContainer:{
        flexDirection:'row',
        width: '100%',
        height:70,
        margin:3,
        alignItems: 'center',
        paddingRight:20,
        paddingLeft:20,
    },
    userAvatar:{
        height:55,
        width:55,
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor: '#ef40aa',
        color:'#fff',
        borderRadius:100,
        fontSize:18,
        marginRight:15
    },
    chatDetails:{
        height:'100%',
        width:'80%',
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#e3e3e3'
    },
    userName:{
        fontSize: 18,
        color:'#3b3b3b'

    },
    userMessage:{
        fontSize:13,
        color:'#4e4e4e'
    },
    startFirstChat:{
        fontSize:18,
        color:'#6d6d6d',
    },
    crateNewChatButton:{
        width:150,
        marginTop:15,
        padding:5,
        backgroundColor:colors.colorApp,
        borderRadius: 7,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    createNewChatText:{
        color:'#fff',
        fontSize:16,
        marginLeft:5
    },
    newChatButton:{
        width:50,
        height:50,
        backgroundColor:colors.colorApp,
    }
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    chatContainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    chatter1Container:{
        width: '100%',
        alignItems:'flex-start',
        marginTop:5,
        flexDirection: 'row',
        paddingLeft:10
    },
    userAvatar:{
        height:45,
        width:45,
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor: '#ef40aa',
        color:'#fff',
        borderRadius:100,
        fontSize:15,
    },
    messageContainer:{
        width:'50%'
    },
    chatter1:{
        fontSize:15,
        padding:5,
        paddingLeft:10,
        paddingRight:10,
        borderRadius: 7,
        marginTop:15,
        backgroundColor: '#ececec',
        marginLeft:7,
        color:'#282828'
    },
    chatter2Container:{
        width: '100%',
        justifyContent:'flex-end',
        marginTop:5,
        alignItems:'flex-start',
        flexDirection:'row',
        paddingRight:10
    },
    chatter2:{
        fontSize:15,
        padding:5,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:7,
        marginTop:15,
        backgroundColor: '#418dff',
        marginRight:7,
        color:'#fff'
    },
    messageArea:{
        width:'100%',
        minHeight:65,
        backgroundColor:'#f5f5f5',
        paddingBottom:10,
        paddingTop:5,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
    },
    addImage:{
        height:40,
        width:45,
        marginLeft:15,
        marginRight:5,
        alignItems:'center',
        justifyContent:'center',
    },
    messageInput:{
        flex:1,
        borderRadius:5,
        minHeight:40,
        borderColor:'#ececec',
        borderWidth:1,
        paddingLeft:10,
        paddingRight:10,
        fontSize:17,
        paddingTop:5,
        paddingBottom:5,
        color:'#555555',
        maxHeight:175,
        backgroundColor:'#fff'
    },
    sendLocation:{
        height:40,
        width:40,
        marginLeft:5,
        marginRight:15,
        alignItems:'center',
        justifyContent:'center'
    },
    sendButton:{
        width:40,
        height:40,
        borderRadius:100,
        backgroundColor:'#16d0ff',
        marginLeft: 5,
        marginRight:15,
        justifyContent: 'center',
        alignItems:'center'
    },
    map:{
        width:'100%',
        height:75,
        borderRadius:30


    }
});

export default styles;

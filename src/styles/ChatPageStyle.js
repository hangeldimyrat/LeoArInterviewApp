import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    chatContainer:{
        flex:1,
        paddingTop:15,
        backgroundColor:'#fff'
    },
    chatter1Container:{
        width: '100%',
        alignItems:'flex-start',
        marginBottom:2,
        flexDirection: 'row',
        paddingLeft:10
    },
    userAvatar:{
        height:45,
        width:45,
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor: '#fd64d9',
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
        borderRadius: 13,
        backgroundColor: '#ececec',
        marginTop:5,
        marginLeft:7,
        color:'#282828'
    },
    chatter2Container:{
        width: '100%',
        justifyContent:'flex-end',
        marginTop:2,
        flexDirection:'row',
        paddingRight:10
    },
    chatter2:{
        fontSize:15,
        padding:5,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:13,
        backgroundColor: '#418dff',
        marginTop:5,
        marginRight:7,
        color:'#fff'
    },
    messageArea:{
        width:'100%',
        minHeight:65,
        backgroundColor:'#fff',
        position:'absolute',
        bottom:0,
        paddingBottom:10,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        borderTopColor:'#e8e8e8',
        borderTopWidth:1
    },
    addImage:{
        height:40,
        width:45,
        marginLeft:15,
        marginRight:5,
        alignItems:'center',
        justifyContent:'center'
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
    sendButton:{
        width:45,
        height:45,
        borderRadius:100,
        backgroundColor:'#16d0ff',
        marginLeft: 15,
        marginRight:15,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default styles;

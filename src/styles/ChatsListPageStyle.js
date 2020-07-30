import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    chatsListContainer:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        paddingTop:10
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
        backgroundColor: '#fd64d9',
        color:'#fff',
        borderRadius:100,
        fontSize:18,
        marginRight:15
    },
    chatDetails:{
        height:'100%',
        flex:1,
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
    }
});

export default styles;

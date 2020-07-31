import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    inputView:{
        width:'60%',
        height:40,
        borderRadius:7,
        borderWidth:1,
        borderColor:'grey',
        paddingLeft:15,
        paddingRight:15,
        justifyContent: 'center'
    },
    userNameTextAbsolute:{
        color:'#3DABFF',
        fontSize: 15,
        position:'absolute',
        top:-13,
        left:10,
        backgroundColor:'#fff',
        borderRightWidth: 5,
        borderLeftWidth: 5,
        borderRightColor: '#fff',
        borderLeftColor:'#fff',
        textAlign:'center'
    },
    userNameText:{
        color:'#a1a1a1',
        fontSize: 17,
        position:'absolute',
        backgroundColor:'#fff',
        borderRightWidth: 5,
        borderLeftWidth: 5,
        borderRightColor: '#fff',
        borderLeftColor:'#fff',
        textAlign:'center',
        left:10,
    },

    input:{
        width: '100%',
        color:'#4c4c4c',
        fontSize: 17,
        padding:0
    },
    loginButton:{
        width:'60%',
        height: 40,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#3DABFF',
        marginTop:25,
        borderRadius: 7
    },
    loginText:{
        color:'#fff',
        fontSize:18
    }
});

export default styles;

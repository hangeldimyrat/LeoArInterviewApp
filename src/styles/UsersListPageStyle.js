import { StyleSheet, Dimensions } from 'react-native';


const w = Dimensions.get('window').width;

const styles = StyleSheet.create({
    usersListContainer:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    userContainer:{
        width:w,
        padding:10,
        paddingLeft: 20,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8'
    },
    userAvatar:{
        width:55,
        height:55,
        color:'#fff',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:18,
        borderRadius: 100,
        backgroundColor:'#ef40aa'
    },
    userName:{
        fontSize:20,
        paddingLeft:10,
        color:'#5f5f5f'
    },
    userSearchView:{
        flexDirection: 'row',
        width: '80%',
        height:40,
        marginTop:10,
        backgroundColor: '#efefef',
        borderRadius:100,
        alignItems: 'center',
        justifyContent:'center',
        paddingLeft:15,
        marginBottom:10
    },
    userSearchInput:{
        flex:1,
        fontSize: 17,
        color:'#666666',
        padding:0,
        paddingLeft:10
    }
});

export default styles;

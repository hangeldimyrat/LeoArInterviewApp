import { StyleSheet, Dimensions } from 'react-native';


const w = Dimensions.get('window').width;

const styles = StyleSheet.create({
    usersListContainer:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        paddingTop:10
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
});

export default styles;

import React from 'react';
import {Button, SafeAreaView,View,TouchableOpacity,Text,Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
const navigation = useNavigation();

return(
    <SafeAreaView style ={styles.container}>

            <Text style={styles.text_header}>A premium online store for sporter and their stylish choice</Text>
            <View style={styles.body}>
                <Image style={styles.img_bike_1} source={require("../images/bike_1.webp")}/>
            </View>
            <Text style={styles.text_power} >POWER BIKE SHOP</Text>
            <TouchableOpacity style={styles.btn_get} onPress={()=>navigation.navigate('Screen2')}>
                <Text style={{color:'#fff'}}>Get Started</Text>
            </TouchableOpacity>
    </SafeAreaView>
);

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%',
        height:'100%', 
    },
    text_header:{
        fontSize:26,
        fontFamily:'VT323',
        textAlign:'center',
        marginLeft: 12,
        marginTop: 10,
        fontWeight:'bold',
        
    },
    body:{
        flex:1,
        backgroundColor:'#E941411A',
        justifyContent:'center',
        alignItems:'center',
        width: 380,
        height: 388,
        borderRadius:50,
        marginTop:20,
        marginLeft:4,
        marginRight:4,
    },
    img_bike_1:{
        width:330,
        height :270,
        borderRadius:40,
    },
    text_power:{
        fontWeight:'bold',
        fontFamily:'Time new roman',
        fontSize:'30px',
        textAlign:'center',
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        marginBottom: 20,

    },
    btn_get:{
        backgroundColor:'red',
        width:'300px',
        height:'50px',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        borderRadius:30,
    },

});

export default Screen1;
import React, { useState } from 'react';
import { 
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
 } from 'react-native';
import {NavigationContainer, useNavigation  } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
var array = [
  {
    Image:require('../images/img_1.png'),
    name: 'Pinarello',
    price : 180,
  },

  {
    Image:require('../images/img_1.png'),
    name: 'Pinarello',
    price : 180,
  },
  {
    Image:require('../images/img_1.png'),
    name: 'Pinarello',
    price : 180,
  },
  {
    Image:require('../images/img_1.png'),
    name: 'Pinarello',
    price : 180,
  },
  {
    Image:require('../images/img_1.png'),
    name: 'Pinarello',
    price : 180,
  },
  {
    Image:require('../images/img_1.png'),
    name: 'Pinarello',
    price : 180,
  },

]

const Screen2 = () => {
  const navigation = useNavigation();
  var [state , setState] = useState(array);
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.view_header} >
              <Text style={styles.text_header}>The world's Best Bike</Text>
          </View>

          <View style={styles.view_body}>
              <View style={styles.group_btn}>
                {/* Cac nut btn viet sau */}
              </View>
              <View style={styles.view_section_img}>
                {/* Flast list */}
                <FlatList
                  data={state}
                  numColumns={2}
                  renderItem={({item})=>{
                     return(
                      <TouchableOpacity style ={styles.btn_img}>
                         <Image
                           source={item.Image}
                           style={styles.img_bike}
                           resizeMode='contain'
                         />
                         <Text>{item.name}</Text>
                         <Text>${item.price}</Text>
                      </TouchableOpacity>
                     );

                  }}
                />
              </View>
          </View>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
      justifyContent:'flex-start',
      flex:9,
     
    },
    view_header :{
        flex : 1,
        marginTop:10,
        marginLeft:10,
    },
    text_header:{
        color : 'red',
        fontSize:25,
        fontWeight:'bold',
    },
    view_body:{
      flex:8,
    },

    group_btn :{
       
    },
    view_section_img:{
      flex:7,

    },
    img_bike:{
       width:100,
       height:100,
       
    },
    btn_img:{
      backgroundColor:'#FFFAF0',
      margin:10,
      width:167,
      height:160,
      alignItems:'center',
      justifyContent:'center',
      shadowColor:'grey',
      shadowOpacity:'0.5',
      shadowOffset:{width:3,height:3},
      borderRadius:'10px'
      
      
    },

});
export default Screen2;
import { View ,Text,TouchableHighlight } from "react-native"
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";


const RecuperarCuenta =()=>{
    const n = useNavigation();
    return(
        <ImageBackground source={require("./img/xxxx.gif")} style={estilos.container}>
<View style={estilos.container2}>
    <ImageBackground source={require("./img/xxxx.gif")} style={estilos.container3}  >
        <Image source={require("./img/programmer.png")} style={estilos.logo}/>
    
    <Text style={estilos.subtitulo}>Email </Text>
    <TextInput placeholder="Email" style={estilos.chat} keyboardType="email-address" />
    
    <Text style={estilos.subtitulo}>Password</Text>
    <TextInput placeholder="Password" style={estilos.chat} keyboardType="visible-password"/>


        <TouchableHighlight
        onPress={()=>n.navigate("Principal")}
            style={{
                backgroundColor:'white',
                padding:12,
                width:"50%",
                alignSelf:"center",
                borderRadius:10,
                marginTop:20,
            }}
        >
              <Text
              style={{
                color:'purple',
                textAlign:"center",
              }}>Recuperar</Text>

        </TouchableHighlight>

        

    </ImageBackground>
    
      
    </View>
</ImageBackground>
    );
}

export default RecuperarCuenta;



const estilos = StyleSheet.create({
    container: {
      top:-20,
      height:990,
      width:600,
    },

    container2: {  
            backgroundColor:'#a2c8e9b1',
            height:1000,
      },
      container3: {
        top:100,
        justifyContent:"center",
         width:450,
       alignSelf:"center",
       padding:50, 
       left:-20,
  },
  chat:{
    backgroundColor:'white',
    color:'black',
    borderRadius:10,
  },
   subtitulo:{
    fontSize:20,
    color:'white',
    fontWeight:"bold",
    alignSelf:"center",
    marginBottom:13,
   },
   logo:{
    width:120,
    height:120,
    alignSelf:"center",
    marginBottom:9,
   },
 
  });
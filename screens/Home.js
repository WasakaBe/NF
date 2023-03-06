import { View,Text, TouchableHighlight } from "react-native"
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
const Homes =()=>{
    const n = useNavigation();
    return(
        <ImageBackground source={require("./img/xxxx.gif")} style={estilos.container}>
<View style={estilos.container2}>
    <Image source={require("./img/NF1.png")} style={estilos.logo}/>
    <Text style={estilos.titulo}>Nabina Fam </Text>
    <Text style={estilos.subtitulo}>Bienvenido a mi Aplicación </Text>
        <TouchableHighlight
        onPress={()=>n.navigate("Login")}
            style={{
                backgroundColor:'white',
                padding:10,
                width:"50%",
                alignSelf:"center",
                borderRadius:10,
                top:290,
            }}
        >
              <Text
              style={{
                color:'purple',
                textAlign:"center",
              }}>Iniciar</Text>

        </TouchableHighlight>
    </View>
</ImageBackground>
    );
}

export default Homes;
const estilos = StyleSheet.create({
    container: {
      flex:1,
      top:-20,
      height:994,
      width:600, 
    },

    container2: {
           backgroundColor:'#4c75985e',
           height:994,
           width:600, 
      },
   titulo:{
    fontSize:60,
    color:'white',
    fontWeight:"bold",
    alignSelf:"center",
     top:310,
   },
   subtitulo:{
    fontSize:20,
    color:'white',
    fontWeight:"bold",
    alignSelf:"center",
    marginBottom:50,
    top:300,
    backgroundColor:"#7ebcf3b6",
    borderRadius:90,
    width:380,
    textAlign:"center",
   },
   logo:{
    width:220,
    height:220,
    alignSelf:"center",
    marginBottom:20,
    top:290,
   },
 
  });
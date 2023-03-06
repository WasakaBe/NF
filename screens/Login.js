import { View ,Text,TouchableHighlight } from "react-native"
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
const Login =()=>{

  //inputs de textinput
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail ] = useState()

  //navegacion
    const n = useNavigation();
    return(
        <ImageBackground source={require("./img/xxxx.gif")} style={estilos.container}>
<View style={estilos.container2}>
    <ImageBackground source={require("./img/xxxx.gif")} style={estilos.container3}  >
        <Image source={require("./img/profile.png")} style={estilos.logo}/>
   
   
    <Text style={estilos.subtitulo}>Username </Text>
    <TextInput onChangeText={setUserName} value={userName}  placeholder="Username" style={estilos.chat}/>

    <Text style={estilos.subtitulo}>Email </Text>
    <TextInput onChangeText={setEmail} value={email} placeholder="Email" style={estilos.chat} keyboardType="email-address" />
    
    <Text style={estilos.subtitulo}>Password</Text>
    <TextInput  onChangeText={setPassword} value={password}  placeholder="Password" style={estilos.chat} keyboardType="visible-password"/>


        <TouchableHighlight
        onPress={()=>n.navigate("HomeClient")}
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
              }}>Loguearse</Text>

        </TouchableHighlight>

        <TouchableHighlight
        onPress={()=>n.navigate("Formulario")}  >
              <Text
              style={{
                color:'white',
                textAlign:"center",
                textDecorationLine:"underline",
                marginTop:12,
              }}>Crear Nueva Cuenta</Text>

        </TouchableHighlight>

        <TouchableHighlight
        onPress={()=>n.navigate("RecuperarCuenta")}>
              <Text
              style={{
                color:'white',
                textAlign:"center",
                textDecorationLine:"underline",
                marginTop:12,
              }}>RecuperarCuenta</Text>

        </TouchableHighlight>
    </ImageBackground>
    
      
    </View>
</ImageBackground>
    );
}

export default Login;


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
    textAlign:"center",
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
   },
 
  });
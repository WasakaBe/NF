import React from "react";
import { Text,TextInput ,StyleSheet,TouchableHighlight} from "react-native";
import { View ,ImageBackground,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
//./img/xxxx.gif
const PerfilUsuario =()=>{
   
        const n = useNavigation();
        return(
            <ImageBackground source={require("./img/xxxx.gif")} style={estilos.container}>
        
    <View style={estilos.container2} >
    
        <ImageBackground source={require("./img/xxxx.gif")} style={estilos.container3}  >
        <Text  style={estilos.subtitulo}>Perfil Usuario</Text>
            <Image source={require("./img/profile.png")} style={estilos.logo}/>
        
        <Text style={estilos.subtitulo}>Nombre </Text>
        <Text placeholder="Nombre" style={estilos.chat}/>

        <Text style={estilos.subtitulo}>Apellido </Text>
        <Text placeholder="Apellido" style={estilos.chat}/>

        <Text style={estilos.subtitulo}>Correo </Text>
        <Text placeholder="Correo" style={estilos.chat}/>
        
        <Text style={estilos.subtitulo}>Telefono </Text>
        <Text placeholder="Telefono" style={estilos.chat}/>
        
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
              }}>Editar</Text>

        </TouchableHighlight>
       
        </ImageBackground>
        
          
        </View>
    </ImageBackground>
            
    );
}

export default PerfilUsuario;

const estilos = StyleSheet.create({
    container: {

      height:990,
      width:600,
      justifyContent:"center",
    },

    container2: {  
            backgroundColor:'#a2c8e9b1',
            height:1000,
  
      },
      container3: {
        top:140,
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
    height:30,
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
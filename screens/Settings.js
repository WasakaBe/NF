import React from "react";
import { View ,Text,StyleSheet,TouchableHighlight, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ImageBackground } from "react-native";
const Settings=()=>{
    const n = useNavigation();
    return( 
 
        <ImageBackground source={require('./img/ww.jpg')} style={estilos.container}>
             <View  style={estilos.container}>

       
            <Text style={estilos.titulo}>Settings</Text>

            <TouchableHighlight onPress={()=>n.navigate("Homes")}
                  style={estilos.touc}>
              <Text style={estilos.toucText}>
                <MaterialCommunityIcons name="exit-run" size={24} color="black" />
                 Salir</Text>
         </TouchableHighlight>

         <TouchableHighlight onPress={()=>n.navigate("Privacidad")}
                  style={estilos.touc}>
              <Text style={estilos.toucText}>
              <MaterialIcons name="privacy-tip" size={24} color="black" />
                 Privacidad</Text>
         </TouchableHighlight>
        
         <TouchableHighlight onPress={()=>n.navigate("Homes")}
                  style={estilos.touc}>
              <Text style={estilos.toucText}>
              <MaterialIcons name="arrow-circle-up" size={24} color="black" />
                 Acerca </Text>
         </TouchableHighlight>
         <TouchableHighlight onPress={()=>n.navigate("Homes")}
                  style={estilos.touc}>
              <Text style={estilos.toucText}>
              <MaterialIcons name="language" size={24} color="black" />
                 Sitio web</Text>
         </TouchableHighlight>

         <TouchableHighlight onPress={()=>n.navigate("Homes")}
                  style={estilos.touc}>
              <Text style={estilos.toucText}>
              <MaterialIcons name="help-outline" size={24} color="black" />
                 Ayuda</Text>
         </TouchableHighlight>

        
         <Text style={estilos.r}>
                 Siguenos En Nuestras Redes Sociales</Text>
         <View style={estilos.container2}>
 <TouchableHighlight onPress={()=>n.navigate("https://web.facebook.com/")}
                  style={estilos.redes}>
           <Image source={require('./img/facebook.png')} style={estilos.media} />
         </TouchableHighlight>

            <TouchableHighlight onPress={()=>n.navigate("Homes")}
                  style={estilos.redes}>
           <Image source={require('./img/instagram.png')} style={estilos.media} />
         </TouchableHighlight>
         <TouchableHighlight onPress={()=>n.navigate("Homes")}
                  style={estilos.redes}>
           <Image source={require('./img/youtube.png')} style={estilos.media} />
         </TouchableHighlight>
         </View>
        </View>
        </ImageBackground>
         
    );
}

export default Settings;


const estilos = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#5092cb99",
      justifyContent:"center",
      
    },
  
    container2: {
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"center",
        
      },
    titulo:{
        color:'white',
        textAlign:"center",
        fontSize:60,
        fontWeight:"bold",
        textShadowColor:'#e4a56d9b',
        textShadowOffset:{width:9.5,height:1.5},
        textShadowRadius:3.5,
    },
    touc:{
        backgroundColor:'white',
        padding:12,
        width:"auto",
        alignSelf:"center",
        borderRadius:10,
        marginTop:20,
    },
    toucText:{
        color:'black',
        textAlign:"center",
    },
    redes:{
        backgroundColor:"white",
        padding:12,
        width:"auto",
        alignSelf:"center",
        borderRadius:10,
        marginTop:20,
        marginLeft:10,
    },
    media:{
        width:50,height:50,
        
    },
    r:{
        color:"black",
        fontSize:20,
        alignSelf:"center",
        backgroundColor:"white",
        padding:12,
        width:"auto",
        marginTop:20,
        borderRadius:40,
    },
  });
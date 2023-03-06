import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View ,StatusBar, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const HomeClient =()=>{
    const n = useNavigation();
    return(
        <View style={Estilos.container}>
            
            <Text style={Estilos.Titulo}> <Image source={require('./img/NF1.png')} style={Estilos.logo}/> Nabina Fam</Text>
            <Image source={require('./img/modelo.webp')} style={Estilos.modelo}/>
             <Text style={Estilos.modeloTexto}>La belleza se encuentra en una misma</Text>
             
                    <View style={Estilos.view2}>
                      
                    <ScrollView style={Estilos.scrollView} >
                      <Text style={Estilos.Texto}>Productos  <Text style={Estilos.Texto2}>Nuevos</Text></Text>  
                     
                     
                       <SafeAreaView style={Estilos.v2}>
                          
                             <View style={Estilos.v3} >
                                  <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                                  <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                                  <Text style={Estilos.TextoImg}>$21.50</Text>
                                 
                                    <TouchableHighlight
                                    onPress={()=>n.navigate("Homes")}
                                     style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                             borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                            <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                                    </TouchableHighlight>
                             </View>

                             <View style={Estilos.v3} >
                                  <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                                  <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                                  <Text style={Estilos.TextoImg}>$21.50</Text>
                                 
                                    <TouchableHighlight
                                    onPress={()=>n.navigate("Homes")}
                                     style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                             borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                            <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                                    </TouchableHighlight>
                             </View>

                             <View style={Estilos.v3} >
                                  <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                                  <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                                  <Text style={Estilos.TextoImg}>$21.50</Text>
                                 
                                    <TouchableHighlight
                                    onPress={()=>n.navigate("Homes")}
                                     style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                             borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                            <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                                    </TouchableHighlight>
                             </View>

                       </SafeAreaView>
      
                       <Text style={Estilos.Texto}>Categorias de  <Text style={Estilos.Texto2}>Productos</Text></Text>   
                     <SafeAreaView style={Estilos.v2}>
                      
                        <View style={Estilos.v3} >
                             <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                             <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                             <Text style={Estilos.TextoImg}>$21.50</Text>
                            
                               <TouchableHighlight
                               onPress={()=>n.navigate("Homes")}
                                style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                        borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                       <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                               </TouchableHighlight>
                        </View>

                        <View style={Estilos.v3} >
                             <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                             <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                             <Text style={Estilos.TextoImg}>$21.50</Text>
                            
                               <TouchableHighlight
                               onPress={()=>n.navigate("Homes")}
                                style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                        borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                       <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                               </TouchableHighlight>
                        </View>

                        <View style={Estilos.v3} >
                             <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                             <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                             <Text style={Estilos.TextoImg}>$21.50</Text>
                            
                               <TouchableHighlight
                               onPress={()=>n.navigate("Homes")}
                                style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                        borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                       <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                               </TouchableHighlight>
                        </View>
                  </SafeAreaView>
             
                 <Image source={require('./img/tuu.jpg')} style={Estilos.modelo2}/>
             <Text style={Estilos.modeloTexto}>La belleza se encuentra en una misma</Text>

                  <Text style={Estilos.Texto}>Shampoo's</Text>  
                     
                     
                     <SafeAreaView style={Estilos.v2}>
                      
                        <View style={Estilos.v3} >
                             <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                             <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                             <Text style={Estilos.TextoImg}>$21.50</Text>
                            
                               <TouchableHighlight
                               onPress={()=>n.navigate("Homes")}
                                style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                        borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                       <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                               </TouchableHighlight>
                        </View>

                        <View style={Estilos.v3} >
                             <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                             <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                             <Text style={Estilos.TextoImg}>$21.50</Text>
                            
                               <TouchableHighlight
                               onPress={()=>n.navigate("Homes")}
                                style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                        borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                       <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                               </TouchableHighlight>
                        </View>

                        <View style={Estilos.v3} >
                             <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                             <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                             <Text style={Estilos.TextoImg}>$21.50</Text>
                            
                               <TouchableHighlight
                               onPress={()=>n.navigate("Homes")}
                                style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                        borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                       <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                               </TouchableHighlight>
                        </View>

                        
                        

                  </SafeAreaView>
                     <SafeAreaView style={Estilos.v2}>
                      
                        <View style={Estilos.v3} >
                             <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                             <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                             <Text style={Estilos.TextoImg}>$21.50</Text>
                            
                               <TouchableHighlight
                               onPress={()=>n.navigate("Homes")}
                                style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                        borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                       <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                               </TouchableHighlight>
                        </View>

                        <View style={Estilos.v3} >
                             <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                             <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                             <Text style={Estilos.TextoImg}>$21.50</Text>
                            
                               <TouchableHighlight
                               onPress={()=>n.navigate("Homes")}
                                style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                        borderRadius:10,    marginTop:20, alignSelf:"center",   }} >

                                       <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                               </TouchableHighlight>
                        </View>

                        <View style={Estilos.v3} >
                             <Image source={require('./img/SHAMPOO.png')} style={Estilos.productosNuevos}/>
                             <Text style={Estilos.TextoImg}>Shampoo Heldan</Text>
                             <Text style={Estilos.TextoImg}>$21.50</Text>
                            
                               <TouchableHighlight
                               onPress={()=>n.navigate("Homes")}
                                style={{ backgroundColor:'white',   padding:12,  width:"auto",
                                        borderRadius:10,    marginTop:20, alignSelf:"center",    }} >

                                       <Text  style={{ color:'purple',  textAlign:"center", }}>Comprar</Text>

                               </TouchableHighlight>
                        </View>         

                  </SafeAreaView>
                  <Image source={require('./img/tuu.jpg')} style={Estilos.modelo2}/>
             <Text style={Estilos.modeloTexto}>La belleza se encuentra en una misma</Text>
                  
                        </ScrollView> 
                    
                    </View>
             
        </View>
        
         
    );
}


export default HomeClient;

const Estilos = StyleSheet.create({
 
            container:{
                    flex:1,        
            },
          
            Titulo:{
                color:"white",
                fontSize:50,
                fontWeight:"bold",
                backgroundColor:"#a3c4e1",
            },
            logo:{
                width:50,height:50,
               marginRight:50,
            },

            modelo:{
                marginTop:5,
                width:500,height:250,
               alignSelf:"center",
               borderRadius:20,
            },
            modelo2:{
                marginTop:15,
                width:500,height:250,
               alignSelf:"center",
               borderRadius:60,
            },

            modeloTexto:{
             fontSize:30,
             alignSelf:"center",
             width:180,
             top:-120,
             color:'white',
             textShadowColor:'#7ebcf3b6',
             textShadowOffset:{width:1.5,height:1.5},
             textShadowRadius:0.5,
             right:132,
             fontWeight:"bold",
            },
            view2:{
                flex:1,
                flexDirection:"column",
                paddingTop: StatusBar.currentHeight,
                top:-60,
                height:200,
            },
            Texto:{
                fontSize:32,
                textAlign:"center",
                margin:30,
            
            },
            Texto2:{
              backgroundColor:"#7ebcf3b6",
              color:"white",
              fontSize:32,
              width:30,
              alignSelf:"center",
              textAlign:"center",
            },
            productosNuevos:{
                width:100,
                height:100,
            },
            v2:{
                width:120,
                alignItems:"center",
                padding:5,
                marginLeft:32,
                flexDirection:"row",
                  
            },
            v3:{
                backgroundColor:"#76aee099",
                width:120,
                alignItems:"center",
                padding:5,
                marginLeft:32,
                  
            },

        

            TextoImg:{
                color:"white",
                fontSize:20,
                textAlign:"center",
                alignSelf:"center",
            },
  
            scrollView: {
                marginHorizontal: 5,
              },
})
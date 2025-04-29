import { Tabs } from "expo-router";
import { Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function InicioLayout(){
    return(
        <Tabs
            screenOptions={ ({route}) => ({
                //headerShown: false,
                headerTintColor: "#000000",
                headerTitleAlign: "center",
                headerTitleStyle:{
                    fontFamily: "SpaceMono-Regular",
                    fontWeight: "bold",
                    fontSize: 22,
                },
                headerBackground: () => (
                    <Image
                        source={require('../../assets/images/partial-react-logo.png')}
                        style={{
                           position: 'absolute',
                           width: "100%",
                           height: "100%",
                           opacity: 0.1 
                        }}
                        resizeMode= "cover"
                    />
                ),

                //Configurar el tab
                //Colores
                tabBarActiveTintColor: "#6200EE",
                tabBarInactiveTintColor: "#999999",
                //Estilos a la barra
                tabBarStyle:{
                    backgroundColor: "#fff",
                    borderTopColor: "#eee",
                    height: 60,
                    paddingBottom: 10,
                },

                //Iconos dinámicos por ruta
                tabBarIcon: ({color, size}) => {
                    let iconName: keyof typeof MaterialIcons.glyphMap = 'home';

                    if (route.name === 'index'){
                        iconName = 'home';
                    }
                    else if (route.name === 'juego'){
                        iconName = 'sports-esports';
                    }

                    return <MaterialIcons name={iconName} size={size} color={color}/>
                }
            })}
        >
            <Tabs.Screen name="index" options={{title: "Inicio"}}/>
            <Tabs.Screen name="juego" options={{title:"Juguemos"}}/>
        </Tabs>
    );
}
import { Stack } from "expo-router";
import { Image, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        // Fondo de la cabecera
        headerStyle: {
          backgroundColor: "#6B05A1FF", // Color de fondo
        },
        // Color del texto de la cabecera
        headerTintColor: "#ffffff", // Color del texto
        headerTitleAlign: "center", // Alineación del título
        headerTitleStyle: {
          fontFamily: "SpaceMono-Regular", // Tipo de letra
          fontSize: 20, // Tamaño de la fuente
          fontWeight: "bold", // Negrita
        },
        // Animación de transición
        animation: "fade", // Puedes usar "fade", "slide" o "none"
        // Agregar las imágenes a la cabecera
        headerRight: () => (
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <Image
              source={require('../assets/images/tres.png')} // URL de la imagen derecha 1
              style={{ width: 62, height: 62, marginRight: 5 }}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="(inicio)"
        options={{
          title: "3 EN RAYA",
        }}
      />
      <Stack.Screen
        name="game/[modo]"
        options={{
          title: "Hora de Jugar",
        }}
      />
    </Stack>
  );
}
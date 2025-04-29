import { Text, View, Button, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

<View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <Image
          source={require('../../assets/images/univalle.png')} // Ruta relativa a tu archivo
          style={{ width: 120, height: 120, marginRight: 10 }} // margen para separar las imágenes
        />
        <Image
          source={require('../../assets/images/tres.png')} // Ruta relativa a tu archivo
          style={{ width: 120, height: 120 }}
        />
      </View>

      <Text>¡Bienvenido!</Text>
      <Text>¡Juguemos 3 en raya!</Text>

      <Button
        onPress={() => router.navigate('/(inicio)/juego')}
        title="INGRESAR!"
        color="#08146FFF"
      />

      <Link href="/(inicio)/juego" asChild>
        <Pressable>
          <Text>Mucha Suerte!</Text>
        </Pressable>
      </Link>
    </View>
  );
}

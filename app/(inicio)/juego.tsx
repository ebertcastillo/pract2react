import { View, Text, StyleSheet, TextInput } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Juego() {
  const [nombreJuan, setNombreJuan] = useState("Juan");
  const [nombreSaid, setNombreSaid] = useState("Said");

  return (
    <View style={styles.contenedor}>
      <Text>Elije un bando:</Text>

      {/* Input para el jugador oscuro */}
      <TextInput
        style={styles.input}
        placeholder="Nombre jugador X"
        value={nombreJuan}
        onChangeText={setNombreJuan}
      />

      {/* Input para el jugador claro */}
      <TextInput
        style={styles.input}
        placeholder="Nombre jugador O"
        value={nombreSaid}
        onChangeText={setNombreSaid}
      />

      {/* Enlaces dinámicos 
      <Link href={`../game/negro?usuario=${encodeURIComponent(nombreJuan)}`}>
        <Text style={styles.link}>Jugar con pantalla oscura</Text>
      </Link>

      <Link href={`../game/claro?usuario=${encodeURIComponent(nombreSaid)}`}>
        <Text style={styles.link}>Jugar con pantalla claro</Text> {/*{nombreSaid} }
      </Link>
    </View>*/}

    <Link
        href={`../game/negro?jugadorX=${encodeURIComponent(nombreJuan)}&jugadorO=${encodeURIComponent(nombreSaid)}`}>
        <Text style={styles.link}>Jugar con pantalla oscura</Text>
    </Link>

    <Link
        href={`../game/claro?jugadorX=${encodeURIComponent(nombreJuan)}&jugadorO=${encodeURIComponent(nombreSaid)}`}>
        <Text style={styles.link}>Jugar con pantalla clara</Text>
    </Link>  
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    width: '80%',
    marginVertical: 10,
  },
  link: {
    marginTop: 10,
    color: '#0066cc',
    textDecorationLine: 'underline',
  },
});
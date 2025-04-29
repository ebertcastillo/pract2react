import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Juego() {
  const [nombreJuan, setNombreJuan] = useState("");
  const [nombreSaid, setNombreSaid] = useState("");

  // Función para mostrar alerta si alguno de los nombres está vacío
  const handlePlayGame = () => {
    if (!nombreJuan || !nombreSaid) {
      Alert.alert("Error", "Por favor, ingresa ambos nombres antes de continuar.");
    }
  };

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

      {/* Verificamos que ambos nombres estén llenos antes de permitir acceder a los enlaces */}
      {nombreJuan && nombreSaid ? (
        <>
          <Link
            href={`../game/negro?jugadorX=${encodeURIComponent(nombreJuan)}&jugadorO=${encodeURIComponent(nombreSaid)}`}
            onPress={handlePlayGame} // Validación al hacer clic
          >
            <Text style={styles.link}>Jugar con pantalla oscura</Text>
          </Link>

          <Link
            href={`../game/claro?jugadorX=${encodeURIComponent(nombreJuan)}&jugadorO=${encodeURIComponent(nombreSaid)}`}
            onPress={handlePlayGame} // Validación al hacer clic
          >
            <Text style={styles.link}>Jugar con pantalla clara</Text>
          </Link>
        </>
      ) : (
        <Text style={styles.link}>Por favor, ingresa ambos nombres.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    width: "80%",
    marginVertical: 10,
  },
  link: {
    marginTop: 10,
    color: "#0066cc",
    textDecorationLine: "underline",
  },
});
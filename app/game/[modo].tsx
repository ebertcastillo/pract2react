import { useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function Game() {
  const { modo, jugadorX, jugadorO } = useLocalSearchParams();
  const esOscuro = modo === 'negro'; // Determinamos si es modo oscuro

  // Tablero de juego
  const emptyBoard = Array<string | null>(9).fill(null);
  const [board, setBoard] = useState<string | null[]>(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = () => {
    const combos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
      [0, 4, 8], [2, 4, 6],            // diagonales
    ];
    for (const [a, b, c] of combos) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // 'X' o 'O'
      }
    }
    if (!board.includes(null)) return 'Empate';
    return null;
  }

  useEffect(() => {
    const result = checkWinner();
    if (result) {
      setWinner(result);
    }
  }, [board]);

  const handlePress = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  const resetGame = () => {
    setBoard(emptyBoard);
    setCurrentPlayer('X');
    setWinner(null);
  }

  return (
    <View style={[styles.container, esOscuro ? styles.oscuro : styles.claro]}>
      <Text style={[styles.titles, esOscuro ? styles.tituloOscuro : styles.tituloClaro]}>
        {`Tres en Raya, Modo: ${esOscuro ? 'Oscuro' : 'Claro'}`}
      </Text>

      {winner ? (
        <Text style={[styles.titles, esOscuro ? styles.tituloOscuro : styles.tituloClaro]}>
          {winner === 'Empate' ? '¡Empate!' : `El ganador es: ${winner === 'X' ? jugadorX : jugadorO}`}
        </Text>
      ) : (
        <Text style={[styles.titles2, esOscuro ? styles.tituloOscuro : styles.tituloClaro]}>
          Turno de: {currentPlayer === 'X' ? jugadorX : jugadorO} ({currentPlayer})
        </Text>
      )}

      <View style={styles.board}>
        {
          board.map((cell, index) => (
            <Pressable
              key={index}
              style={[
                styles.cell,
                esOscuro ? styles.cellOscuro : styles.cellClaro,
                {
                  borderLeftWidth: index % 3 === 0 ? 0 : 1,
                  borderTopWidth: index < 3 ? 0 : 1,
                }
              ]}
              onPress={() => handlePress(index)}
            >
              <Text style={[styles.titles, esOscuro ? styles.tituloOscuro : styles.tituloClaro]}>
                {cell}
              </Text>
            </Pressable>
          ))
        }
      </View>

      {winner && (
        <Pressable style={styles.boton} onPress={resetGame}>
          <Text>Reiniciar</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  titles: {
    fontSize: 24,
  },
  titles2: {
    fontSize: 24,
    color: "red",
  },
  // Estilos para el modo oscuro
  oscuro: {
    backgroundColor: "#111111",
  },
  // Estilos para el modo claro
  claro: {
    backgroundColor: "#ffe4f0",
  },
  // Estilos para los textos en modo oscuro
  tituloOscuro: {
    color: "#fff",
  },
  // Estilos para los textos en modo claro
  tituloClaro: {
    color: "#333",
  },
  cellOscuro: {
    backgroundColor: "#333",
    borderColor: "#fff",
  },
  cellClaro: {
    backgroundColor: "#fff",
    borderColor: "#333",
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#333",
  },
  boton: {
    backgroundColor: "#2f95dc",
    marginTop: 20,
    borderRadius: 8,
    padding: 5,
  },
});
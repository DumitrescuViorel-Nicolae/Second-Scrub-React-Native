import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../components/constants/Colors";

const GameScreen = ({ userNumber, setGamerOver, setNumberValid }) => {
  const generateRandom = (min, max, exclude) => {
    const rand = Math.floor(Math.random() * (max - min) + min);

    if (rand === exclude) {
      return generateRandom(min, max, exclude);
    } else {
      return rand;
    }
  };

  let minBoundary = 1;
  let maxBoundary = 100;

  const initalGuess = generateRandom(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Invalid input", "Please review your input!"),
        [
          {
            text: "Okay",
            style: "destructive",
          },
        ];
      return;
    }
    switch (direction) {
      case "lower":
        maxBoundary = currentGuess;
        break;
      case "higher":
        if (currentGuess < maxBoundary) {
          minBoundary = currentGuess + 1;
        }
        break;
      default:
        break;
    }
    const newGuess = generateRandom(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess);
  };

  useEffect(() => {
    currentGuess.toString() === userNumber ? setGamerOver(true) : null;
  }, [currentGuess]);

  const handleReturn = () => {
    setNumberValid(false);
  };
  return (
    <View style={styles.screen}>
      <Title title={"Opponent guess"} />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.container}>
        <Text style={styles.text}>Higher or Lower?</Text>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <PrimaryButton onPress={handleReturn}>Return</PrimaryButton>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginVertical: 8,
  },

  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },

  text: {
    color: Colors.accent500,
    paddingBottom: 12,
    textAlign: "center",
    fontSize: 24,
  },

  container: {
    backgroundColor: Colors.primary800,
    padding: 24,
    borderRadius: 10,
  },
});

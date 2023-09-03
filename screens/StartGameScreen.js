import React, { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../components/constants/Colors";
import Title from "../components/Title";

const StartGameScreen = ({ setVisibleScreen, setUserNumber }) => {
  const [userInput, setUserInput] = useState("");

  const handleOnChange = (input) => {
    setUserInput(input);
  };

  const resetInputHandler = () => {
    setUserInput("");
  };

  const confirmInputHandler = () => {
    const userInputNumber = parseInt(userInput);
    if (
      isNaN(userInputNumber) ||
      userInputNumber <= 0 ||
      userInputNumber > 99
    ) {
      Alert.alert("Invalid input", "Please review your input!"),
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler(),
          },
        ];
      return;
    }
    setVisibleScreen(true);
    setUserNumber(userInput);
  };

  return (
    <View style={styles.rootContainer}>
      <Title title={"My ass guess"} />
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput
          onChangeText={handleOnChange}
          style={styles.textInput}
          maxLength={2}
          inputMode="numeric"
          value={userInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 50,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonContainer: {
    flexDirection: "row",
  },
  buttonInnerContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 23,
  },
});

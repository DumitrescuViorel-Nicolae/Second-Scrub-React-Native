import React, { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../components/constants/Colors";

const StartGameScreen = ({ setVisibleScreen }) => {
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
  };

  return (
    <View style={styles.inputContainer}>
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
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
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
});

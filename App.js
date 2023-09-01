import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [numberValid, setNumberValid] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#4e0329", "#ddb52f", "transparent"]}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>
          <ImageBackground
            resizeMode="cover"
            source={require("./assets/images/background.png")}
            style={styles.container}
            imageStyle={{ opacity: 0.35 }}
          >
            {numberValid ? (
              <GameScreen />
            ) : (
              <StartGameScreen setVisibleScreen={setNumberValid} />
            )}
          </ImageBackground>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

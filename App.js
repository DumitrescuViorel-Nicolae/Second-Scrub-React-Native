import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./components/constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [numberValid, setNumberValid] = useState(false);
  const [userNumber, setNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderScreen = () => {
    if (numberValid) {
      return (
        <GameScreen
          setNumberValid={setNumberValid}
          setGamerOver={setIsGameOver}
          userNumber={userNumber}
        />
      );
    } else if (isGameOver) {
      return <GameOverScreen />;
    } else {
      return (
        <StartGameScreen
          setVisibleScreen={setNumberValid}
          setUserNumber={setNumber}
        />
      );
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500, "transparent"]}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>
          <ImageBackground
            resizeMode="cover"
            source={require("./assets/images/background.png")}
            style={styles.container}
            imageStyle={{ opacity: 0.35 }}
          >
            {renderScreen()}
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

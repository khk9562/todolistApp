import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";

const catImg = require("./assets/images/cat-1.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image source={catImg} style={styles.image} />
      </View>
      <View style={styles.TxtCont}>
        <Text>야호 아무튼 개발환경 세팅 끝!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => alert("고양이 귀엽져?")}
        >
          <Text style={styles.buttonLabel}>확인</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => alert("귀여운 고양일 두고 정말요..?")}
        >
          <Text style={styles.buttonLabel}>취소</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "lightgray",
  },
  imgCont: {
    flex: 1,
    marginTop: 80,
  },
  image: {
    width: 300,
    height: 200,
    objectFit: "cover",
    borderRadius: 8,
  },
  TxtCont: {
    flex: 1,
    backgroundColor: "#efefef",
    width: 300,
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 18,
    paddingRight: 18,
  },
  buttonContainer: {
    width: 320,
    height: 120,
    marginVertical: 30,
    flexDirection: "column",
    gap: 5,
  },
  button: {
    backgroundColor: "#333",
    borderRadius: 10,
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});

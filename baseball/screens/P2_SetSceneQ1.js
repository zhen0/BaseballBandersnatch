import React from "react";
import {
  Image,
  Button,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Permissions } from "expo";

export default class SetSceneQ1 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.getStartedText}> ---------- </Text>
          <Image
            source={{
              uri:
                "https://i.pinimg.com/474x/db/aa/aa/dbaaaa1f36d8f4d73b78d0f7783c4283--baseball-birthday-party-baseball-art.jpg"
            }}
            style={styles.welcomeImage}
          />
          <Text style={styles.getStartedText}> ---------- </Text>
        </View>

        <Text style={styles.getStartedText}>Hurray! It's Time to Play!</Text>
        <Image
          source={{
            uri:
              "https://media3.giphy.com/media/ZgUU46zeOERo4cYG8Q/giphy.gif?cid=790b76115cc35bb65a6c3478775792e4&rid=giphy.gif"
          }}
          style={styles.photo}
        />
        <Text style={styles.lessonText}>
          {this.props.player} is about to swing the bat to hit the ball. It's an
          important shot! If the team do well, they might win the game. If not,
          it's all over.
        </Text>
        <Text style={styles.lessonText}>Do they swing the bat very fast? </Text>
        <View>
          <Button
            onPress={() => this.props.choice1("a")}
            title="They swing very fast!"
          />
        </View>
        <Text style={styles.lessonText}>Or do they swing too fast?</Text>
        <Button
          onPress={() => this.props.choice1("b")}
          title="They swing too fast!"
        />
        <Text style={styles.getStartedText}> ---------- </Text>
        <Text style={styles.getStartedText}>Swipe to see what happens!</Text>
      </ScrollView>
    );
  }

  _loadImageClick = async () => {
    try {
      // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== "granted") {
        throw new Error("Camera permission not granted");
      }
    } catch (err) {
      console.log("error in camera permissions", err);
    }
  };
}

const styles = StyleSheet.create({
  photosContainer: {
    paddingTop: 60,
    alignItems: "center"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#4842f4"
  },
  buttonText: {
    padding: 20,
    color: "green"
  },
  playerImage: {
    width: 400,
    height: 260,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: 5
  },
  photo: {
    width: 600,
    height: 450
  },

  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "space-around"
  },
  welcomeImage: {
    width: 50,
    height: 50
  },
  getStartedContainer: {
    flex: 0.7
  },
  getStartedText: {
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,

    fontFamily: "monospace"
  },

  lessonText: {
    color: "rgba(96,100,109, 1)",
    fontSize: 15,
    fontFamily: "monospace"
  }
});

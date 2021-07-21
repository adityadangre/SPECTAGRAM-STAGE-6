import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class StoryCard extends React.Component {
    render() {
        return (
          <TouchableOpacity style={styles.container} onPress={() => {
            this.props.navigation.navigate('StoryScreen', {story: this.props.story})
          }}>
          <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.cardContainer}>
                            <View style={styles.storyImage}>
                            <Image
                source={require("../assets/post.jpeg")}
                style={styles.storyImage}
              ></Image>
                            </View>
                            <Text style={styles.storyTitleText}>
                  {this.props.story.title}
                </Text>
                <Text style={styles.storyAuthorText}>
                  {this.props.story.author}
                </Text>
                <Text style={styles.descriptionText}>
                  {this.props.story.description}
                </Text>
                            <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                  <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                  <Text style={styles.likeText}>12k</Text>
                </View>
              </View>
                        </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    storyImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    titleContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    storyTitleText: {
      fontSize: RFValue(25),
      color: "white"
    },
    storyAuthorText: {
      fontSize: RFValue(18),
      color: "white"
    },
    descriptionText: {
      fontSize: 13,
      color: "white",
      paddingTop: RFValue(10)
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    }
  });
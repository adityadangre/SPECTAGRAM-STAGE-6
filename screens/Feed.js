import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, FlatList, Image } from 'react-native';
import StoryCard from './StoryCard.js'
import { RFValue } from "react-native-responsive-fontsize";

let stories = require('./temp_stories.json')

export default class Feed extends React.Component {
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item: story }) => {
        return(
          <StoryCard story = {story} navigation={this.props.navigation} />
        )
    } 

    render() {
        return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>SPECTAGRAM</Text>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={stories}
                            renderItem={this.renderItem}
                        />
                    </View>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
    },
    cardContainer: {
      flex: 0.85
    }
  });
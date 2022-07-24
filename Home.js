import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { RFValue as rf } from "react-native-responsive-fontsize";
import { Cards } from "../components/data";

export default function Home(props) {
  // const [reveal, setReveal] = useState(false);
  // const backimage = require("../assets/Cards/back.png");

  // function onReveal(backimage) {
  //   setReveal(backimage);
  // }

  //  useEffect(() => {
  //   onReveal?.length==1?setReveal(true) : null
  // }, [reveal]);

  let data = props.route.params;

  function shuffle() {
    for (var i = Cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = Cards[i];
      Cards[i] = Cards[j];
      Cards[j] = temp;
    }
  }
  shuffle(Cards);

  let players = 2;
  const size = players * 3;
  const gameCards = Cards.slice(0, size);

  let onePlayer = gameCards.slice(0, 3);

  let secondPlayer = gameCards.slice(3, 6);

  return (
    <View style={styles.container}>
      <View style={styles.playerWrapper}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>John</Text>
          <View style={styles.playerBox}>
            {onePlayer.map((items, index) => {
              return (
                <View key={index} style={styles.imageWrapper}>
                  <Image
                    source={items.img}
                    resizeMode="contain"
                    style={{ height: "100%", width: "100%" }}
                    
                  />
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.wrapper}>
        
          <View style={styles.playerBox}>
          <TouchableOpacity style={styles.button}
          onPress={()=>onReveal()}
          >
            <Text>Show</Text>
          </TouchableOpacity>
            {reveal && 
            secondPlayer?.map((items, index) => {
              return (
                <View key={index} style={styles.imageWrapper}>
                  <Image
                    source={items.img}
                    resizeMode="contain"
                    style={{ height: "100%", width: "100%" }}
                  />
                   
                </View>
              );
            })}
            
          </View>

          <Text style={styles.title}>{data.a}</Text>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  playerWrapper: {
    width: wp("90%"),
    height: "90%",
    justifyContent: "space-between",
    paddingVertical: hp("5%"),
  },
  wrapper: {
    backgroundColor: "blue",
    width: wp("90%"),
    height: hp("35%"),
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: hp("3%"),
  },
  playerBox: {
    backgroundColor: "orange",
    flexDirection: "row",
    height: hp("25%"),
    width: wp("90%"),
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageWrapper: {
    width: wp("28%"),
    height: "85%",
    borderRadius: 10,
    borderColor: "#e5e5e5",
  },
  title: {
    fontSize: rf(20),
    fontWeight: "bold",
  },
  button: {
    height: hp("5%"),
    width: wp("40%"),
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: hp("10%"),
  },
});

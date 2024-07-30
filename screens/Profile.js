import { View, Text,StyleSheet } from 'react-native'
import React,{useContext} from 'react'

import { EventRegister } from "react-native-event-listeners";

import themeContext from "../theme/themeContext";

const Profile = () => {
    const theme = useContext(themeContext)
  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      <Text style={[styles.text,{color:theme.color}]}>Profile Screen</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });
import { View, Text, StyleSheet,Switch } from "react-native";
import React,{useState,useContext} from "react";

import { EventRegister } from "react-native-event-listeners";

import themeContext from "../theme/themeContext";

const Home = () => {
 const theme = useContext(themeContext)
 const [darkMode,setDarkMode] = useState(false);

  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      <Text style={[styles.text,{color:theme.color}]}>Home Screen</Text>
      <Switch
         value={darkMode}
         onValueChange={(value) => {setDarkMode(value);
         EventRegister.emit('ChangeTheme',value);
         }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
    }
})

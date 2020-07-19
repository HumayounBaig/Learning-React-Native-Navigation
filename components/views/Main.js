import React, {useState} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';
import { Navigation } from "react-native-navigation";

const HomeScreen = (props) => { 
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>
      <Button
        title='Settings'
        color='green'
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
              options: {
                topBar: {
                  title: {
                    text: 'Settings'
                  }
                }
              }
            }
          })
        }}
      />
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Main',
      color: 'black'
    },
    background: {
      color: 'lightblue'
    }
  },
  bottomTab: {
    text: 'Home',
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

export default HomeScreen;
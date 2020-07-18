/**
 * @format
 */
import React from 'react'
import { Navigation } from "react-native-navigation";
import { View, StyleSheet, Text, Button } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

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

const SettingsScreen = () => {
  return (
    <View style={[styles.root, {backgroundColor: 'gray'}]}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <Button
        title='Login'
        color='#710ce3'
        onPress={() => Navigation.setRoot(mainRoot)}
      />
    </View>
  );
};


HomeScreen.options = {
  topBar: {
    title: {
      text: 'Main',
      color: 'white'
    },
    background: {
      color: 'red'
    }
  },
  bottomTab: {
    text: 'Home'
  }
}

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Main',
      color: 'white'
    },
    background: {
      color: 'red'
    }
  },
  bottomTab: {
    text: 'Settings'
  }
}

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children:[
                {
                  component: {
                    name: 'Home'
                  }
                }
              ]
            }
          },
          {
            stack: {
              children:[
                {
                  component: {
                    name: 'Settings'
                  }
                }
              ]
            }
          },
        ]
      }
    }
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
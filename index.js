/**
 * @format
 */
import React from 'react'
import { Navigation } from "react-native-navigation";
import { View, StyleSheet, Text, Button } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import LoginScreen from './components/views/Login'
import HomeScreen from './components/views/Main';

const SettingsScreen = () => {
  return (
    <View style={[styles.root]}>
      <Text>Settings Screen</Text>
    </View>
  );
}

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Main',
      color: 'white'
    },
    background: {
      color: 'green'
    },
    backButton: {
      color: 'white',
      showTitle: false
    }, 

  },
  bottomTab: {
    text: 'Settings'
  }
}

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
  }
});

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home'
                }
              },
            ]
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Settings'
                }
              }
            ]
          }
        }
      ]
    }
  }
};

const loginRoot = {
  root: {
    component: {
      name: 'Login',
      passProps: {
        mainRoot: mainRoot,
      }
    }
  }
};

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});


const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
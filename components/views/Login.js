import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';
import { Navigation } from "react-native-navigation";

const LoginScreen = (props) => {
  return (
    <View style={styles.root}>
      <Button
        title='Login'
        color='#710ce3'
        onPress={() => Navigation.setRoot(props.mainRoot)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

export default LoginScreen;
import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { Navigation } from "react-native-navigation";

const LoginScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.root}>
      <TextInput 
        placeholder="username"
        textContentType='name'
        style={{borderWidth: 1, padding: 10, margin: 10 }}
        onChangeText={setUsername}
        autoCapitalize={"none"}
        value={username}
      />

      <TextInput 
        placeholder="password"
        style={{borderWidth: 1, padding: 10, margin: 10 }}
        textContentType="password"
        onChangeText={setPassword}
        autoCapitalize={"none"}
        value={password}

      />
      <Button
        title='Login'
        color='#710ce3'
        onPress={() => {
          if(username === 'admin' && password === 'admin'){
            Navigation.setRoot(props.mainRoot)
          }else{
            alert('wrong user or pass')
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

export default LoginScreen;
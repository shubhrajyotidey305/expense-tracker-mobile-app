import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import CustomBox from '../components/CustomBox'
import CustomText from '../components/CustomText'
import { Button } from '@gluestack-ui/themed'

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const gotoSignup = () => {
    navigation.navigate('SignUp', { name: 'SignUp' });
  };

  return (
    <View style={styles.loginContainer}>
      <CustomBox style={loginBox}>
        <CustomText style={styles.heading}>
          Login
        </CustomText>
        <TextInput
          placeholder="User Name"
          value={userName}
          onChangeText={text => setUserName(text)}
          style={styles.textInput}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.textInput}
          placeholderTextColor="#888"
          secureTextEntry
        />
      </CustomBox>
      <Button onPressIn={() => { }} style={styles.button}>
        <CustomBox style={buttonBox}>
          <CustomText style={{ textAlign: 'center' }}>Submit</CustomText>
        </CustomBox>
      </Button>
      <Button onPressIn={() => gotoSignup()} style={styles.button}>
        <CustomBox style={buttonBox}>
          <CustomText style={{ textAlign: 'center' }}>Goto Signup</CustomText>
        </CustomBox>
      </Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginTop: 20,
    width: '30%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    color: 'black',
  },
});

const loginBox = {
  mainBox: {
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
  },
  shadowBox: {
    backgroundColor: 'gray',
    borderRadius: 10,
  },
};

const buttonBox = {
  mainBox: {
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  shadowBox: {
    backgroundColor: 'gray',
    borderRadius: 10,
  },
};

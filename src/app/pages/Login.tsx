import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomBox from '../components/CustomBox'
import CustomText from '../components/CustomText'

const Login = () => {
  return (
    <View>
      <CustomBox style={loginBox}>
        <CustomText style={styles.heading}>
          Login
        </CustomText>
      </CustomBox>
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

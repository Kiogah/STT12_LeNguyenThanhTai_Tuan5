import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      alert('Đăng nhập thành công');
    } else {
      alert('Đăng nhập thất bại. Vui lòng kiểm tra tên và mật khẩu.');
    }
  };

  const handleForgotPassword = () => {
    // Chuyển đến màn hình ForgotPassword
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Image source={require("./user.png")} style={styles.inputIcon} />
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require("./lock.png")} style={styles.inputIcon} />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Image source={require("./eye.png")} style={styles.inputIcon} />
        </View>

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.forgotPassword}>
        <Pressable onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Your Password?</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.forgotPasswordText}>Forgot Password Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 40,
  },
  form: {
    flex: 2,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputIcon: {
    width: 60,
    height: 60,
  },
  inputText: {
    flex: 1,
    height: 60,
  },
  loginButton: {
    marginVertical: 20,
    height: 70,
    borderRadius: 5,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 30,
  },
  forgotPassword: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPasswordText: {
    fontSize: 30,
  },
});

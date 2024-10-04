import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Onboarding1 from './src/screens/Onboarding1';
import Onboarding2 from './src/screens/Onboarding2';
import Onboarding3 from './src/screens/Onboarding3';
import WelcomeBack from './src/screens/WelcomeBack';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import ForgetPassword from './src/screens/ForgetPassword';
import Verification from './src/components/Verification';
import PasswordCreate from './src/screens/PasswordCreate';
import Dashboard from './src/screens/Dashboard';
import Prefrences from './src/screens/Prefrences';

export type RootStackParamList = {
  Home: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  WelcomeBack: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ForgetPassword: undefined;
  Verification: undefined;
  PasswordCreate: undefined;
  Dashboard: undefined;
  Prefrences: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboarding3"
          component={Onboarding3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomeBack"
          component={WelcomeBack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PasswordCreate"
          component={PasswordCreate}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Prefrences"
          component={Prefrences}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



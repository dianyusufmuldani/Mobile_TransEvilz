import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import OnBoarding from '../pages/onBoarding';
import Login from '../pages/login';
import Registration from '../pages/registration';
import OTP from '../pages/otp';
import FormRegistration from '../pages/formRegistration';
import CreatePIN from '../pages/createPIN';
import Homepage from '../pages/homepage';
import TransferCard from '../pages/transferCard';
import ForgotPassword from '../pages/forgotPassword';
import CreateNewPassword from '../pages/createNewPassword';
import IconHome from '../../assets/tabNav/home.png';
import IconUsers from '../../assets/tabNav/user.png';
import IconMessage from '../../assets/tabNav/message.png';
import IconList from '../../assets/tabNav/list.png';
import Layanan from '../pages/layanan';
import Riwayat from '../pages/riwayat';
import User from '../pages/user';
import Transaction from '../pages/transaction';
import TransactionMethod from '../pages/transactionMethod';
import TransactionSuccess from '../pages/transactionSuccess';
import TermsAndConditions from '../pages/termsAndConditions';
import TransferCardInternational from '../pages/transferCardInternational';
import TransactionInternational from '../pages/transactionInternational';
import PIN from '../pages/pin';
import TransactionMethodInternational from '../pages/transactionMethodInternational';
import TransactionSuccessInternational from '../pages/transactionSuccessInternational';
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="onBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FormRegistration"
          component={FormRegistration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePIN"
          component={CreatePIN}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransferCard"
          component={TransferCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateNewPassword"
          component={CreateNewPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionMethod"
          component={TransactionMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomepageNav"
          component={TabNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionSuccess"
          component={TransactionSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransferCardInternational"
          component={TransferCardInternational}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionInternational"
          component={TransactionInternational}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PIN"
          component={PIN}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionMethodInternational"
          component={TransactionMethodInternational}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="TransactionSuccessInternational"
          component={TransactionSuccessInternational}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;

export const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          width: '100%',
          elevation: 20,
          backgroundColor: '#FFFFFF',
          // position: 'absolute',
        },

        headerShown: false,
        tabBarLabelStyle: {fontSize: 12, paddingBottom: 5},
      }}>
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={IconHome}
              style={{tintColor: focused ? '#2F82FF' : '#BCC8E7'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Layanan"
        component={Layanan}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={IconMessage}
              style={{tintColor: focused ? '#2F82FF' : '#BCC8E7'}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Riwayat"
        component={Riwayat}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={IconList}
              style={{tintColor: focused ? '#2F82FF' : '#BCC8E7'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={User}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={IconUsers}
              style={{tintColor: focused ? '#2F82FF' : '#BCC8E7'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
// import Product from '../screens/Product';
import Setting from '../screens/Setting';

import { theme } from '../constants';

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Signup,
    Setting,
    Browse,
    // Product,
    Explore,
    Forgot,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white'
        borderBottomColor: 'transparent',
        elevation: 0, // for android
      },
      headerBackImage: <Image source={require('../assets/icons/back.png')} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: theme.sizes.base * 1.2,
        marginRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        marginRight: theme.sizes.base,
      },
    },
  },
);

export default createAppContainer(screens);
// Hello

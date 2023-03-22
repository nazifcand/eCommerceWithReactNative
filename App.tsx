/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from './styles/contants';
import {Text} from 'react-native';
import {
  FavoritesContext,
  FavoritesContextProvider,
} from './contexts/favorites.context';

// screens
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import CartScreen from './screens/CartScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

// icons
import HomeIcon from './icons/HomeIcon';
import HeartIcon from './icons/HeartIcon';
import CartIcon from './icons/CartIcon';

// navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: COLORS.grey,
          height: 55,
        },
      }}>
      <Tab.Screen
        name="_home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <HomeIcon
                  color={focused ? COLORS.primary : '#333'}
                  strokeWidth={focused ? 2 : 1}
                />
                <Text
                  style={{
                    marginTop: 4,
                    width: 40,
                    textAlign: 'center',
                    fontSize: 10,
                    fontWeight: focused ? '500' : 'normal',
                  }}>
                  Home
                </Text>
              </>
            );
          },
        }}
      />
      {/* FIXME: bu sekmeye tiklayinca yukseklikte bir sapma oluyor */}
      <Tab.Screen
        name="_favorites"
        component={FavoritesScreen}
        options={{
          tabBarBadge: favoritesContext.favorites.length
            ? favoritesContext.favorites.length
            : undefined,
          tabBarBadgeStyle: {
            fontSize: 12,
            backgroundColor: COLORS.primary,
            color: '#fff',
          },
          tabBarIcon: ({focused}) => {
            return (
              <>
                <HeartIcon
                  color={focused ? COLORS.primary : '#333'}
                  strokeWidth={focused ? 2 : 1}
                />
                <Text
                  style={{
                    marginTop: 4,
                    width: 40,
                    textAlign: 'center',
                    fontSize: 10,
                    fontWeight: focused ? '500' : 'normal',
                  }}>
                  Saved
                </Text>
              </>
            );
          },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="_cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <CartIcon
                  color={focused ? COLORS.primary : '#333'}
                  strokeWidth={focused ? 2 : 1}
                />
                <Text
                  style={{
                    marginTop: 4,
                    width: 40,
                    textAlign: 'center',
                    fontSize: 10,
                    fontWeight: focused ? '500' : 'normal',
                  }}>
                  Cart
                </Text>
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="_homeTab" component={HomeTabs} />
          <Stack.Screen name="_productDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
};

export default App;

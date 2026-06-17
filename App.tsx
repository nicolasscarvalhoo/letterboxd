import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import Feed from './src/pages/Feed';
import Perfil from './src/pages/Perfil';

const Tab = createBottomTabNavigator();


const DummyComponent = () => null;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { 
            backgroundColor: '#1c242c', 
            borderTopColor: '#2c3440', 
            height: 60 
          },
          tabBarActiveTintColor: '#40bcf4',
          tabBarInactiveTintColor: '#667888',
        }}
      >

        <Tab.Screen 
          name="Letterboxd" 
          component={Feed} 
          options={{
            tabBarIcon: ({ color, size }) => 
            <Ionicons 
            name="layers" 
            size={size || 24} 
            color={color} />,
          }}
        />

        <Tab.Screen 
          name="Letterboxd - Search" 
          component={DummyComponent} 
          listeners={{
            tabPress: (e) => e.preventDefault(), 
          }}
          options={{
            tabBarIcon: ({ color, size }) => 
            <Ionicons 
            name="search" 
            size={size || 24} 
            color={color} />,
          }}
        />

        <Tab.Screen 
          name="Letterboxd - Add" 
          component={DummyComponent} 
          listeners={{
            tabPress: (e) => e.preventDefault(), 
          }}
          options={{
            tabBarIcon: () => (
              <View style={{
                width: 40, 
                height: 40, 
                borderRadius: 20, 
                backgroundColor: '#00e054', 
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
                <Ionicons 
                name="add" 
                size={26} 
                color="#fff" />
              </View>
            ),
          }}
        />

        <Tab.Screen 
          name="Letterboxd - Flash" 
          component={DummyComponent} 
          listeners={{
            tabPress: (e) => e.preventDefault(), 
          }}
          options={{
            tabBarIcon: ({ color, size }) => 
            <Ionicons 
            name="flash" 
            size={size || 24} 
            color={color} />,
          }}
        />

      
        <Tab.Screen 
          name="Letterboxd - Profile" 
          component={Perfil} 
          options={{
            tabBarIcon: ({ color, size }) => 
            <Ionicons 
            name="person" 
            size={size || 24} 
            color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import { SUBJECTS_DATA } from '../data/subjects';

// Screens
import HomeScreen from '../screens/HomeScreen';
import SubjectDetailScreen from '../screens/SubjectDetailScreen';

// Custom Drawer Content
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Home
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="SubjectDetail" component={SubjectDetailScreen} />
    </Stack.Navigator>
  );
};

// Main App Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: COLORS.white,
            width: 280,
          },
          drawerActiveBackgroundColor: COLORS.primaryLight,
          drawerActiveTintColor: COLORS.white,
          drawerInactiveTintColor: COLORS.textPrimary,
          drawerLabelStyle: {
            marginLeft: -20,
            fontSize: 16,
            fontWeight: '500',
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        
        {/* Add individual subject screens to drawer */}
        {SUBJECTS_DATA.map((subject) => (
          <Drawer.Screen
            key={subject.id}
            name={`Subject${subject.id}`}
            component={SubjectDetailScreen}
            options={{
              drawerLabel: subject.title,
              drawerIcon: ({ color, size }) => (
                <Icon name={subject.icon} size={size} color={color} />
              ),
            }}
            initialParams={{ subject }}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

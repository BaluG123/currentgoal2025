import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, GRADIENTS } from '../constants/colors';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <LinearGradient
        colors={GRADIENTS.primary}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.brandContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>PS</Text>
          </View>
          <Text style={styles.title}>PSIESI</Text>
          <Text style={styles.subtitle}>Government Exam Preparation</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  brandContainer: {
    alignItems: 'center',
  },
  logoCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
    letterSpacing: 2,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.9,
  },
});

export default SplashScreen;



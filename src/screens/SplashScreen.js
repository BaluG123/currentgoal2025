// import React, { useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, StatusBar, Animated, Easing } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { COLORS, GRADIENTS } from '../constants/colors';

// const SplashScreen = ({ navigation }) => {
//   const logoScale = useRef(new Animated.Value(0.8)).current;
//   const titleOpacity = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(logoScale, {
//         toValue: 1,
//         duration: 800,
//         easing: Easing.out(Easing.ease),
//         useNativeDriver: true,
//       }),
//       Animated.timing(titleOpacity, {
//         toValue: 1,
//         duration: 900,
//         delay: 300,
//         easing: Easing.out(Easing.ease),
//         useNativeDriver: true,
//       }),
//     ]).start();

//     const timer = setTimeout(() => {
//       navigation.navigate('Home');
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [navigation, logoScale, titleOpacity]);

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
//       <LinearGradient
//         colors={GRADIENTS.primary}
//         style={styles.gradient}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       >
//         <View style={styles.brandContainer}>
//           <Animated.View style={[styles.logoCircle, { transform: [{ scale: logoScale }] }]}>
//             <Text style={styles.logoText}>PS</Text>
//           </Animated.View>
//           <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>PSIESI</Animated.Text>
//           <Animated.Text style={[styles.subtitle, { opacity: titleOpacity }]}>Government Exam Preparation</Animated.Text>
//         </View>
//       </LinearGradient>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.primary,
//   },
//   gradient: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 32,
//   },
//   brandContainer: {
//     alignItems: 'center',
//   },
//   logoCircle: {
//     width: 96,
//     height: 96,
//     borderRadius: 48,
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   logoText: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: COLORS.white,
//   },
//   title: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: COLORS.white,
//     letterSpacing: 2,
//   },
//   subtitle: {
//     marginTop: 8,
//     fontSize: 16,
//     color: COLORS.white,
//     opacity: 0.9,
//   },
// });

// export default SplashScreen;


import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Animated, Easing, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, GRADIENTS } from '../constants/colors';

const DreamScreen = ({ navigation }) => {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(50)).current;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 1200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(slideUp, {
        toValue: 0,
        duration: 1200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Show button after animation finishes
      setShowButton(true);
    });
  }, [fadeIn, slideUp]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <LinearGradient
        colors={GRADIENTS.primary}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View
          style={[
            styles.textContainer,
            { opacity: fadeIn, transform: [{ translateY: slideUp }] },
          ]}
        >
          <Text style={styles.year}>2025</Text>
          <Text style={styles.vision}>My Dream</Text>
          <Text style={styles.goal}>
            I will achieve my goal in 2025–2026 🚀
          </Text>
        </Animated.View>

        {showButton && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        )}
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
  textContainer: {
    alignItems: 'center',
  },
  year: {
    fontSize: 64,
    fontWeight: 'bold',
    color: COLORS.white,
    letterSpacing: 4,
  },
  vision: {
    marginTop: 12,
    fontSize: 32,
    fontWeight: '600',
    color: COLORS.white,
    letterSpacing: 1.5,
  },
  goal: {
    marginTop: 16,
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 28,
    opacity: 0.95,
  },
  button: {
    marginTop: 40,
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
    letterSpacing: 1,
  },
});

export default DreamScreen;

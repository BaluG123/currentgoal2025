// import React, { useMemo, useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Alert } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { COLORS, GRADIENTS } from '../constants/colors';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getNCERTTotalLevels } from '../data/ncertData';

// const NCERTLevelsScreen = ({ route, navigation }) => {
//   const { subject, klass } = route.params;
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [totalLevels, setTotalLevels] = useState(0);
//   const [completedLevels, setCompletedLevels] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const saved = await AsyncStorage.getItem('theme_preference');
//         if (saved) setIsDarkMode(saved === 'dark');
//       } catch (e) {}
//     })();
//     setTotalLevels(getNCERTTotalLevels(subject, klass));
//   }, [subject, klass]);

//   const theme = useMemo(() => ({
//     background: isDarkMode ? '#0B1220' : COLORS.background,
//     card: isDarkMode ? '#111827' : COLORS.white,
//     textPrimary: isDarkMode ? '#F3F4F6' : COLORS.textPrimary,
//     textSecondary: isDarkMode ? '#9CA3AF' : COLORS.textSecondary,
//   }), [isDarkMode]);

//   const onLevelPress = (level) => {
//     if (level > totalLevels) {
//       Alert.alert('Not available', 'Level not available.');
//       return;
//     }
//     navigation.navigate('NCERTQuiz', { subject, klass, level });
//   };

//   // const renderLevels = () => {
//   //   const blocks = [];
//   //   for (let i = 1; i <= totalLevels; i++) {
//   //     blocks.push(
//   //       <TouchableOpacity key={i} style={[styles.levelBlock, { backgroundColor: theme.card }]} onPress={() => onLevelPress(i)} activeOpacity={0.8}>
//   //         <Icon name="book" size={20} color={COLORS.primary} />
//   //         <Text style={[styles.levelText, { color: theme.textPrimary }]}>{i}</Text>
//   //       </TouchableOpacity>
//   //     );
//   //   }
//   //   return blocks;
//   // };

//   const renderLevels = () => {
//   const blocks = [];
//   for (let i = 1; i <= totalLevels; i++) {
//     const isCompleted = completedLevels.includes(i);
//     blocks.push(
//       <TouchableOpacity 
//         key={i} 
//         style={[
//           styles.levelBlock, 
//           { backgroundColor: isCompleted ? COLORS.success : theme.card }
//         ]} 
//         onPress={() => onLevelPress(i)} 
//         activeOpacity={0.8}
//       >
//         <Icon 
//           name={isCompleted ? "check-circle" : "book"} 
//           size={20} 
//           color={isCompleted ? COLORS.white : COLORS.primary} 
//         />
//         <Text style={[
//           styles.levelText, 
//           { color: isCompleted ? COLORS.white : theme.textPrimary }
//         ]}>
//           {i}
//         </Text>
//       </TouchableOpacity>
//     );
//   }
//   return blocks;
// };

//   useEffect(() => {
//   const loadCompleted = async () => {
//     const completed = [];
//     for (let i = 1; i <= totalLevels; i++) {
//       const isCompleted = await AsyncStorage.getItem(`completed_${subject}_${klass}_${i}`);
//       if (isCompleted === 'true') completed.push(i);
//     }
//     setCompletedLevels(completed);
//   };
//   loadCompleted();
// }, [subject, klass, totalLevels]);

//   return (
//     <View style={[styles.container, { backgroundColor: theme.background }]}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={theme.background} />
//       <LinearGradient colors={GRADIENTS.primary} style={styles.header} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
//         <View style={styles.headerContent}>
//           <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
//             <Icon name="arrow-left" size={24} color={COLORS.white} />
//           </TouchableOpacity>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerTitle}>{subject}</Text>
//             <Text style={styles.headerSubtitle}>Class {klass} • Select a quiz</Text>
//           </View>
//           <View style={styles.headerIcon}>
//             <Icon name="book-open-page-variant" size={32} color={COLORS.white} />
//           </View>
//         </View>
//       </LinearGradient>

//       <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
//         <View style={styles.grid}>{renderLevels()}</View>
//         {totalLevels === 0 && (
//           <View style={styles.empty}>
//             <Icon name="alert-circle" size={40} color={theme.textSecondary} />
//             <Text style={[styles.emptyText, { color: theme.textSecondary }]}>No quizzes available yet</Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: COLORS.background },
//   header: { paddingTop: 50, paddingBottom: 20, paddingHorizontal: 20 },
//   headerContent: { flexDirection: 'row', alignItems: 'center' },
//   backButton: {
//     width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)',
//     justifyContent: 'center', alignItems: 'center', marginRight: 12,
//   },
//   headerInfo: { flex: 1 },
//   headerTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.white, marginBottom: 4 },
//   headerSubtitle: { fontSize: 14, color: COLORS.white, opacity: 0.9 },
//   headerIcon: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
//   content: { flex: 1, paddingHorizontal: 16 },
//   grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingVertical: 16 },
//   levelBlock: { width: '48%', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', marginBottom: 12, alignItems: 'center' },
//   levelText: { marginTop: 6, fontSize: 16, fontWeight: '700' },
//   empty: { alignItems: 'center', paddingVertical: 40 },
//   emptyText: { marginTop: 8 },
// });

// export default NCERTLevelsScreen;


import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getNCERTTotalLevels } from '../data/ncertData';

const NCERTLevelsScreen = ({ route, navigation }) => {
  const { subject, klass } = route.params;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [totalLevels, setTotalLevels] = useState(0);
  const [completedLevels, setCompletedLevels] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem('theme_preference');
        if (saved) setIsDarkMode(saved === 'dark');
      } catch (e) {}
    })();
    setTotalLevels(getNCERTTotalLevels(subject, klass));
  }, [subject, klass]);

  const theme = useMemo(
    () => ({
      background: isDarkMode ? '#0B1220' : COLORS.background,
      card: isDarkMode ? '#1F2937' : COLORS.white,
      textPrimary: isDarkMode ? '#F9FAFB' : COLORS.textPrimary,
      textSecondary: isDarkMode ? '#9CA3AF' : COLORS.textSecondary,
    }),
    [isDarkMode]
  );

  const onLevelPress = (level) => {
    if (level > totalLevels) {
      Alert.alert('Not available', 'Level not available.');
      return;
    }
    navigation.navigate('NCERTQuiz', { subject, klass, level });
  };

  const renderLevels = () => {
    const blocks = [];
    for (let i = 1; i <= totalLevels; i++) {
      const isCompleted = completedLevels.includes(i);
      blocks.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.levelBlock,
            { backgroundColor: isCompleted ? COLORS.success : theme.card },
          ]}
          onPress={() => onLevelPress(i)}
          activeOpacity={0.85}
        >
          <Icon
            name={isCompleted ? 'check-circle' : 'book'}
            size={22}
            color={isCompleted ? COLORS.white : COLORS.primary}
          />
          <Text
            style={[
              styles.levelText,
              { color: isCompleted ? COLORS.white : theme.textPrimary },
            ]}
          >
            Level {i}
          </Text>
        </TouchableOpacity>
      );
    }
    return blocks;
  };

  useEffect(() => {
    const loadCompleted = async () => {
      const completed = [];
      for (let i = 1; i <= totalLevels; i++) {
        const isCompleted = await AsyncStorage.getItem(
          `completed_${subject}_${klass}_${i}`
        );
        if (isCompleted === 'true') completed.push(i);
      }
      setCompletedLevels(completed);
    };
    loadCompleted();
  }, [subject, klass, totalLevels]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <LinearGradient
        colors={GRADIENTS.primary}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Icon name="arrow-left" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>{subject}</Text>
            <Text style={styles.headerSubtitle}>Class {klass} • Select a quiz</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name="book-open-page-variant" size={28} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>{renderLevels()}</View>
        {totalLevels === 0 && (
          <View style={styles.empty}>
            <Icon name="alert-circle" size={42} color={theme.textSecondary} />
            <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
              No quizzes available yet
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  headerContent: { flexDirection: 'row', alignItems: 'center' },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerInfo: { flex: 1 },
  headerTitle: { fontSize: 22, fontWeight: '700', color: COLORS.white },
  headerSubtitle: { fontSize: 14, color: COLORS.white, opacity: 0.85 },
  headerIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: { flex: 1, paddingHorizontal: 16, paddingBottom: 30 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  levelBlock: {
    width: '48%',
    paddingVertical: 20,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: 'center',
  },
  levelText: { marginTop: 8, fontSize: 16, fontWeight: '600' },
  empty: { alignItems: 'center', paddingVertical: 50 },
  emptyText: { marginTop: 8, fontSize: 15, fontWeight: '500' },
});

export default NCERTLevelsScreen;

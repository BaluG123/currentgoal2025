// import React, { useMemo, useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Alert } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { COLORS, GRADIENTS } from '../constants/colors';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getNCERTQuiz } from '../data/ncertData';

// const NCERTQuizScreen = ({ route, navigation }) => {
//   const { subject, klass, level } = route.params;
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [quiz, setQuiz] = useState(null);
//   const [selected, setSelected] = useState(null);
//   const [isCorrect, setIsCorrect] = useState(null);

//   const [showNextButton, setShowNextButton] = useState(false);
//   const [showTryAgain, setShowTryAgain] = useState(false);

//   useEffect(() => {
//   // Reset state when level changes
//   setSelected(null);
//   setIsCorrect(null);
//   setShowNextButton(false);
//   setShowTryAgain(false);
// }, [level]); // Add level as dependency

//   useEffect(() => {
//     (async () => {
//       try {
//         const saved = await AsyncStorage.getItem('theme_preference');
//         if (saved) setIsDarkMode(saved === 'dark');
//       } catch (e) {}
//     })();
//   }, []);

//   // useEffect(() => {
//   //   const q = getNCERTQuiz(subject, klass, level);
//   //   if (!q) {
//   //     Alert.alert('Not found', 'Quiz not found.');
//   //     navigation.goBack();
//   //   } else {
//   //     setQuiz(q);
//   //   }
//   // }, [subject, klass, level, navigation]);

//   useEffect(() => {
//   const q = getNCERTQuiz(subject, klass, level);
//   if (!q) {
//     Alert.alert('Not found', 'Quiz not found.');
//     navigation.goBack();
//   } else {
//     setQuiz(q);
//     // Reset all states when quiz changes
//     setSelected(null);
//     setIsCorrect(null);
//     setShowNextButton(false);
//     setShowTryAgain(false);
//   }
// }, [subject, klass, level, navigation]);

//   const theme = useMemo(() => ({
//     background: isDarkMode ? '#0B1220' : COLORS.background,
//     card: isDarkMode ? '#111827' : COLORS.white,
//     textPrimary: isDarkMode ? '#F3F4F6' : COLORS.textPrimary,
//     textSecondary: isDarkMode ? '#9CA3AF' : COLORS.textSecondary,
//   }), [isDarkMode]);

//   // const onSelect = (idx) => {
//   //   if (selected !== null) return;
//   //   setSelected(idx);
//   //   setIsCorrect(idx === (quiz.correctAnswer || 1) - 1);
//   // };

//   const onSelect = (idx) => {
//   if (selected !== null) return;
//   setSelected(idx);
//   const correct = idx === (quiz.correctAnswer || 1) - 1;
//   setIsCorrect(correct);
  
//   if (correct) {
//     setShowNextButton(true);
//     AsyncStorage.setItem(`completed_${subject}_${klass}_${level}`, 'true');
//   } else {
//     setShowTryAgain(true);
//   }
// };

// // const goToNextLevel = () => {
// //   navigation.navigate('NCERTQuiz', { subject, klass, level: level + 1 });
// // };

// const goToNextLevel = () => {
//   navigation.replace('NCERTQuiz', { subject, klass, level: level + 1 });
// };

// const tryAgain = () => {
//   setSelected(null);
//   setIsCorrect(null);
//   setShowNextButton(false);
//   setShowTryAgain(false);
// };

//   const goBack = () => navigation.navigate('NCERTLevels', { subject, klass });

//   if (!quiz) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text style={styles.loadingText}>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={[styles.container, { backgroundColor: theme.background }]}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={theme.background} />
//       <LinearGradient colors={GRADIENTS.primary} style={styles.header} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
//         <View style={styles.headerContent}>
//           <TouchableOpacity style={styles.backButton} onPress={goBack} activeOpacity={0.7}>
//             <Icon name="arrow-left" size={24} color={COLORS.white} />
//           </TouchableOpacity>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerTitle}>Level {level}</Text>
//             <Text style={styles.headerSubtitle}>{subject} • Class {klass}</Text>
//           </View>
//           <View style={styles.headerIcon}>
//             <Icon name="help-circle" size={32} color={COLORS.white} />
//           </View>
//         </View>
//       </LinearGradient>

//       <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
//         <View style={[styles.card, { backgroundColor: theme.card }]}>
//           <Text style={[styles.question, { color: theme.textPrimary }]}>{quiz.question}</Text>
//         </View>
//         <View style={styles.options}>
//           {quiz.options.map((opt, idx) => {
//             const isAns = idx === (quiz.correctAnswer || 1) - 1;
//             const active = selected !== null;
//             const bg = !active ? theme.card : isAns ? COLORS.success : selected === idx ? COLORS.error : theme.card;
//             const color = !active ? theme.textPrimary : isAns || selected === idx ? COLORS.white : theme.textPrimary;
//             return (
//               <TouchableOpacity key={idx} style={[styles.option, { backgroundColor: bg }]} onPress={() => onSelect(idx)} activeOpacity={0.85} disabled={active}>
//                 <Text style={[styles.optionText, { color }]}>{opt}</Text>
//                 {active && selected === idx && (
//                   <Icon name={isCorrect ? 'check-circle' : 'close-circle'} size={22} color={COLORS.white} />
//                 )}
//               </TouchableOpacity>
//             );
//           })}
//         </View>
//         {selected !== null && (
//           <View style={[styles.card, { backgroundColor: theme.card }]}>
//             <Text style={[styles.explanationTitle, { color: theme.textPrimary }]}>Explanation</Text>
//             <Text style={[styles.explanation, { color: theme.textSecondary }]}>{quiz.explanation || 'No explanation available'}</Text>
//           </View>
//         )}
//         {selected !== null && (
//   <View style={styles.actionButtons}>
//     {showNextButton && (
//       <TouchableOpacity style={[styles.actionBtn, { backgroundColor: COLORS.success }]} onPress={goToNextLevel}>
//         <Text style={styles.actionBtnText}>Next Level</Text>
//       </TouchableOpacity>
//     )}
//     {showTryAgain && (
//       <TouchableOpacity style={[styles.actionBtn, { backgroundColor: COLORS.primary }]} onPress={tryAgain}>
//         <Text style={styles.actionBtnText}>Try Again</Text>
//       </TouchableOpacity>
//     )}
//   </View>
// )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: COLORS.background },
//   loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background },
//   loadingText: { color: COLORS.textSecondary },
//   header: { paddingTop: 50, paddingBottom: 20, paddingHorizontal: 20 },
//   headerContent: { flexDirection: 'row', alignItems: 'center' },
//   backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
//   headerInfo: { flex: 1 },
//   headerTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.white, marginBottom: 4 },
//   headerSubtitle: { fontSize: 14, color: COLORS.white, opacity: 0.9 },
//   headerIcon: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
//   content: { flex: 1, paddingHorizontal: 16 },
//   card: { padding: 16, marginTop: 16, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB' },
//   question: { fontSize: 16, lineHeight: 22 },
//   options: { marginTop: 16 },
//   option: { padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//   optionText: { fontSize: 16 },
//   explanationTitle: { fontSize: 16, fontWeight: '700', marginBottom: 6 },
//   explanation: { fontSize: 14, lineHeight: 20 },
//   actionButtons: { marginTop: 20, marginBottom: 20 },
//   actionBtn: { padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 12 },
//   actionBtnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
// });

// export default NCERTQuizScreen;


import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getNCERTQuiz } from '../data/ncertData';

const NCERTQuizScreen = ({ route, navigation }) => {
  const { subject, klass, level } = route.params;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const [showNextButton, setShowNextButton] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);

  useEffect(() => {
    setSelected(null);
    setIsCorrect(null);
    setShowNextButton(false);
    setShowTryAgain(false);
  }, [level]);

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem('theme_preference');
        if (saved) setIsDarkMode(saved === 'dark');
      } catch (e) {}
    })();
  }, []);

  useEffect(() => {
    const q = getNCERTQuiz(subject, klass, level);
    if (!q) {
      Alert.alert('Not found', 'Quiz not found.');
      navigation.goBack();
    } else {
      setQuiz(q);
      setSelected(null);
      setIsCorrect(null);
      setShowNextButton(false);
      setShowTryAgain(false);
    }
  }, [subject, klass, level, navigation]);

  const theme = useMemo(
    () => ({
      background: isDarkMode ? '#0B1220' : COLORS.background,
      card: isDarkMode ? '#1F2937' : COLORS.white,
      textPrimary: isDarkMode ? '#F9FAFB' : COLORS.textPrimary,
      textSecondary: isDarkMode ? '#9CA3AF' : COLORS.textSecondary,
    }),
    [isDarkMode]
  );

  const onSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === (quiz.correctAnswer || 1) - 1;
    setIsCorrect(correct);

    if (correct) {
      setShowNextButton(true);
      AsyncStorage.setItem(`completed_${subject}_${klass}_${level}`, 'true');
    } else {
      setShowTryAgain(true);
    }
  };

  const goToNextLevel = () => {
    navigation.replace('NCERTQuiz', { subject, klass, level: level + 1 });
  };

  const tryAgain = () => {
    setSelected(null);
    setIsCorrect(null);
    setShowNextButton(false);
    setShowTryAgain(false);
  };

  const goBack = () => navigation.navigate('NCERTLevels', { subject, klass });

  if (!quiz) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={theme.background} />
      <LinearGradient colors={GRADIENTS.primary} style={styles.header} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} onPress={goBack} activeOpacity={0.8}>
            <Icon name="arrow-left" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Level {level}</Text>
            <Text style={styles.headerSubtitle}>{subject} • Class {klass}</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name="lightbulb-on" size={28} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.question, { color: theme.textPrimary }]}>{quiz.question}</Text>
        </View>

        <View style={styles.options}>
          {quiz.options.map((opt, idx) => {
            const isAns = idx === (quiz.correctAnswer || 1) - 1;
            const active = selected !== null;
            const bg = !active
              ? theme.card
              : isAns
              ? COLORS.success
              : selected === idx
              ? COLORS.error
              : theme.card;
            const color = !active ? theme.textPrimary : isAns || selected === idx ? COLORS.white : theme.textPrimary;

            return (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.option,
                  { backgroundColor: bg, borderColor: active && isAns ? COLORS.success : '#E5E7EB' },
                ]}
                onPress={() => onSelect(idx)}
                activeOpacity={0.9}
                disabled={active}
              >
                <Text style={[styles.optionText, { color }]}>{opt}</Text>
                {active && selected === idx && (
                  <Icon name={isCorrect ? 'check-circle' : 'close-circle'} size={22} color={COLORS.white} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {selected !== null && (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={[styles.explanationTitle, { color: theme.textPrimary }]}>💡 Explanation</Text>
            <Text style={[styles.explanation, { color: theme.textSecondary }]}>
              {quiz.explanation || 'No explanation available'}
            </Text>
          </View>
        )}

        {selected !== null && (
          <View style={styles.actionButtons}>
            {showNextButton && (
              <TouchableOpacity style={[styles.actionBtn, styles.nextBtn]} onPress={goToNextLevel}>
                <Text style={styles.actionBtnText}>Next Level</Text>
              </TouchableOpacity>
            )}
            {showTryAgain && (
              <TouchableOpacity style={[styles.actionBtn, styles.tryAgainBtn]} onPress={tryAgain}>
                <Text style={styles.actionBtnText}>Try Again</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { color: COLORS.textSecondary, fontSize: 16 },
  header: { paddingTop: 50, paddingBottom: 20, paddingHorizontal: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 4 },
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
  headerTitle: { fontSize: 22, fontWeight: '700', color: COLORS.white, marginBottom: 2 },
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
  card: {
    padding: 18,
    marginTop: 18,
    borderRadius: 16,
    borderWidth: 1,
    // borderColor: '#E5E7EB',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.08,
    // shadowRadius: 6,
    // elevation: 2,
  },
  question: { fontSize: 18, fontWeight: '600', lineHeight: 24 },
  options: { marginTop: 16 },
  option: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOpacity: 0.05,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 4,
    // elevation: 1,
  },
  optionText: { fontSize: 16, fontWeight: '500' },
  explanationTitle: { fontSize: 16, fontWeight: '700', marginBottom: 6 },
  explanation: { fontSize: 15, lineHeight: 21 },
  actionButtons: { marginTop: 24 },
  actionBtn: {
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 14,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 3 },
    // shadowRadius: 5,
    // elevation: 3,
  },
  actionBtnText: { color: COLORS.white, fontSize: 17, fontWeight: '600' },
  nextBtn: { backgroundColor: COLORS.success },
  tryAgainBtn: { backgroundColor: COLORS.primary },
});

export default NCERTQuizScreen;

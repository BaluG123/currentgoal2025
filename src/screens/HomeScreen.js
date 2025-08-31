import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import { SUBJECTS_DATA } from '../data/subjects';
import SubjectCard from '../components/SubjectCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = 'theme_preference';

const HomeScreen = ({ navigation }) => {
  // Removed verbose console logs for performance
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(THEME_KEY);
        if (saved) setIsDarkMode(saved === 'dark');
      } catch (e) {}
    })();
  }, []);

  const theme = useMemo(() => ({
    background: isDarkMode ? '#0B1220' : COLORS.background,
    card: isDarkMode ? '#111827' : COLORS.card,
    textPrimary: isDarkMode ? '#F3F4F6' : COLORS.textPrimary,
    textSecondary: isDarkMode ? '#9CA3AF' : COLORS.textSecondary,
    headerGradient: GRADIENTS.primary,
  }), [isDarkMode]);

  const toggleTheme = async () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    try {
      await AsyncStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
    } catch (e) {}
  };
  
  const handleSubjectPress = (subject) => {
    console.log('HomeScreen - Subject pressed:', subject);
    navigation.navigate('SubjectDetail', { subject });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={isDarkMode ? '#0B1220' : COLORS.background} />
      
      {/* Header */}
      <LinearGradient
        colors={theme.headerGradient}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerTitle}>PSIESI</Text>
            <Text style={styles.headerSubtitle}>
              Government Exam Preparation
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={toggleTheme} activeOpacity={0.8} style={{ marginRight: 12 }}>
              <Icon name={isDarkMode ? 'white-balance-sunny' : 'weather-night'} size={28} color={COLORS.white} />
            </TouchableOpacity>
            <Icon name="school" size={40} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeSection}>
          <Text style={[styles.welcomeTitle, { color: theme.textPrimary }]}>Welcome to Your Study Guide</Text>
          <Text style={[styles.welcomeText, { color: theme.textSecondary }]}>
            Explore comprehensive study materials for Indian & Karnataka Government Exams
          </Text>
        </View>


        <View style={styles.subjectsGrid}>
          {SUBJECTS_DATA.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onPress={() => handleSubjectPress(subject)}
            />
          ))}
        </View>

                {/* Mock Tests Section */}
        <View style={{ marginBottom: 8 }}>
          <Text style={[styles.welcomeTitle, { color: theme.textPrimary }]}>Mock Tests</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MockTestList')}
              activeOpacity={0.8}
              style={{
                flex: 1,
                marginRight: 8,
                padding: 16,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#E5E7EB',
                backgroundColor: theme.card,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <Icon name="clipboard-check" size={20} color={theme.textPrimary} />
                <Text style={{ marginLeft: 8, fontWeight: '700', color: theme.textPrimary }}>Mock Tests</Text>
              </View>
              <Text style={{ color: theme.textSecondary }}>Practice with real exam pattern</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('EssayList')}
              activeOpacity={0.8}
              style={{
                flex: 1,
                marginLeft: 8,
                padding: 16,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#E5E7EB',
                backgroundColor: theme.card,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <Icon name="book-open-variant" size={20} color={theme.textPrimary} />
                <Text style={{ marginLeft: 8, fontWeight: '700', color: theme.textPrimary }}>Essays</Text>
              </View>
              <Text style={{ color: theme.textSecondary }}>Topics and Kannada essays</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Kannada Section */}
        <View style={{ marginBottom: 8 }}>
          <Text style={[styles.welcomeTitle, { color: theme.textPrimary }]}>Kannada Section</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Translations')}
              activeOpacity={0.8}
              style={{
                flex: 1,
                marginRight: 8,
                padding: 16,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#E5E7EB',
                backgroundColor: theme.card,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <Icon name="translate" size={20} color={theme.textPrimary} />
                <Text style={{ marginLeft: 8, fontWeight: '700', color: theme.textPrimary }}>Translations</Text>
              </View>
              <Text style={{ color: theme.textSecondary }}>English to Kannada phrases</Text>
            </TouchableOpacity>
            <View style={{
              flex: 1,
              marginLeft: 8,
              padding: 16,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#E5E7EB',
              backgroundColor: '#F8FAFC',
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <Icon name="school" size={20} color={COLORS.textSecondary} />
                <Text style={{ marginLeft: 8, fontWeight: '700', color: COLORS.textSecondary }}>More Coming</Text>
              </View>
              <Text style={{ color: COLORS.textSecondary }}>Additional features soon</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: theme.textSecondary }]}>
            Tap on any subject to explore detailed topics
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  welcomeSection: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  subjectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});

export default HomeScreen;

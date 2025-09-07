import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SUBJECTS = [
  { key: 'Polity', icon: 'gavel', color: 'primary' },
  { key: 'History', icon: 'timeline-clock', color: 'warning' },
  { key: 'Geography', icon: 'earth', color: 'success' },
  { key: 'Economics', icon: 'currency-inr', color: 'accent' },
  { key: 'Science', icon: 'atom', color: 'info' },
  { key: 'Environment', icon: 'leaf', color: 'success' },
];

const CLASS_FILTERS = ['6','7','8','9','10','11','12'];

const NCERTHomeScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedClass, setSelectedClass] = useState('6');

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem('theme_preference');
        if (saved) setIsDarkMode(saved === 'dark');
      } catch (e) {}
    })();
  }, []);

  const theme = useMemo(() => ({
    background: isDarkMode ? '#0B1220' : COLORS.background,
    card: isDarkMode ? '#111827' : COLORS.white,
    textPrimary: isDarkMode ? '#F3F4F6' : COLORS.textPrimary,
    textSecondary: isDarkMode ? '#9CA3AF' : COLORS.textSecondary,
  }), [isDarkMode]);

  const onSubjectPress = (subjectKey) => {
    navigation.navigate('NCERTLevels', { subject: subjectKey, klass: selectedClass });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={theme.background} />
      <LinearGradient colors={GRADIENTS.primary} style={styles.header} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
            <Icon name="arrow-left" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>NCERT Hub</Text>
            <Text style={styles.headerSubtitle}>Subjects for Classes 6–12</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name="book-open-variant" size={32} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.filterRow, { backgroundColor: theme.card, borderColor: '#E5E7EB' }]}>
          <Text style={[styles.filterLabel, { color: theme.textSecondary }]}>Class</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.filterChips}>
              {CLASS_FILTERS.map((klass) => {
                const active = selectedClass === klass;
                return (
                  <TouchableOpacity
                    key={klass}
                    style={[styles.chip, active ? styles.chipActive : styles.chipInactive]}
                    onPress={() => setSelectedClass(klass)}
                    activeOpacity={0.8}
                  >
                    <Text style={[styles.chipText, active ? styles.chipTextActive : { color: COLORS.textSecondary }]}>
                      {klass}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>

        <View style={styles.subjectsGrid}>
          {SUBJECTS.map((s) => (
            <TouchableOpacity
              key={s.key}
              style={[styles.subjectCard, { backgroundColor: theme.card, borderColor: '#E5E7EB' }]}
              onPress={() => onSubjectPress(s.key)}
              activeOpacity={0.85}
            >
              <View style={[styles.subjectIcon, { backgroundColor: 'rgba(59,130,246,0.1)' }]}>
                <Icon name={s.icon} size={24} color={COLORS.primary} />
              </View>
              <Text style={[styles.subjectTitle, { color: theme.textPrimary }]}>{s.key}</Text>
              <Text style={[styles.subjectSubtitle, { color: theme.textSecondary }]}>Class {selectedClass}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { paddingTop: 50, paddingBottom: 20, paddingHorizontal: 20 },
  headerContent: { flexDirection: 'row', alignItems: 'center' },
  backButton: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center', alignItems: 'center', marginRight: 12,
  },
  headerInfo: { flex: 1 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.white, marginBottom: 4 },
  headerSubtitle: { fontSize: 14, color: COLORS.white, opacity: 0.9 },
  headerIcon: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
  content: { flex: 1, paddingHorizontal: 16 },
  filterRow: { margin: 16, padding: 12, borderRadius: 12, borderWidth: 1 },
  filterLabel: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  filterChips: { flexDirection: 'row' },
  chip: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 16, marginRight: 8, borderWidth: 1, borderColor: '#E5E7EB' },
  chipActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  chipInactive: { backgroundColor: '#F8FAFC' },
  chipText: { fontSize: 14 },
  chipTextActive: { color: COLORS.white },
  subjectsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingBottom: 20 },
  subjectCard: { width: '48%', padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 12 },
  subjectIcon: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  subjectTitle: { fontSize: 16, fontWeight: '700' },
  subjectSubtitle: { fontSize: 12 },
});

export default NCERTHomeScreen;



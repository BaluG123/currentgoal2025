import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import { TRANSLATIONS } from '../data/translations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TranslationsScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    border: isDarkMode ? '#1F2937' : '#E5E7EB',
  }), [isDarkMode]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={theme.background} />
      <LinearGradient colors={GRADIENTS.primary} style={styles.header} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
            <Icon name="arrow-left" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Kannada Translations</Text>
            <Text style={styles.headerSubtitle}>English to Kannada</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name="translate" size={32} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {TRANSLATIONS.map((item) => (
          <View key={item.id} style={[styles.item, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.en, { color: theme.textPrimary }]}>{item.english}</Text>
            <Text style={[styles.kn, { color: theme.textSecondary }]}>{item.kannada}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { paddingTop: 50, paddingBottom: 20, paddingHorizontal: 20 },
  headerContent: { flexDirection: 'row', alignItems: 'center' },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerInfo: { flex: 1 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.white, marginBottom: 4 },
  headerSubtitle: { fontSize: 14, color: COLORS.white, opacity: 0.9 },
  headerIcon: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
  content: { flex: 1, paddingHorizontal: 16 },
  item: { borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', padding: 16, marginTop: 16 },
  en: { fontSize: 16, fontWeight: '600', marginBottom: 6, color: COLORS.textPrimary },
  kn: { fontSize: 16, color: COLORS.textSecondary },
});

export default TranslationsScreen;



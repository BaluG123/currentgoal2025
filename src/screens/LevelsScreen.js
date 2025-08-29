import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import { getTotalLevelsForSubject } from '../data/quizData';
import { getProgressForSubject, getCompletionPercentage } from '../utils/progressTracker';
import { getQuizSubjectTitle } from '../utils/subjectMapper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const LevelsScreen = ({ route, navigation }) => {
  const { subject } = route.params;
  const [progress, setProgress] = useState({ completedLevels: [], currentLevel: 1 });
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const quizSubjectTitle = getQuizSubjectTitle(subject.title);

  const totalLevels = getTotalLevelsForSubject(quizSubjectTitle);
  const gradientColors = GRADIENTS[subject.color] || GRADIENTS.primary;

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem('theme_preference');
        if (saved) {
          setIsDarkMode(saved === 'dark');
        }
      } catch (e) {}
    })();
  }, []);

  const theme = useMemo(() => ({
    background: isDarkMode ? '#0B1220' : COLORS.background,
    card: isDarkMode ? '#111827' : COLORS.white,
    textPrimary: isDarkMode ? '#F3F4F6' : COLORS.textPrimary,
    textSecondary: isDarkMode ? '#9CA3AF' : COLORS.textSecondary,
    border: isDarkMode ? '#1F2937' : '#E5E7EB',
    grayBlock: isDarkMode ? '#1F2937' : COLORS.grayLight,
  }), [isDarkMode]);

  useEffect(() => {
    if (totalLevels > 0) {
      loadProgress();
    }
  }, [totalLevels, loadProgress]);

  const loadProgress = useCallback(async () => {
    try {
      const subjectProgress = await getProgressForSubject(quizSubjectTitle);
      const percentage = await getCompletionPercentage(quizSubjectTitle, totalLevels);
      setProgress(subjectProgress);
      setCompletionPercentage(percentage);
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  }, [quizSubjectTitle, totalLevels]);

  const handleLevelPress = async (level) => {
    const isUnlocked = level === 1 || progress.completedLevels.includes(level - 1);

    if (!isUnlocked) {
      Alert.alert(
        'Level Locked',
        `Complete Level ${level - 1} to unlock this level.`,
        [{ text: 'OK' }]
      );
      return;
    }

    navigation.navigate('QuizScreen', { subject: quizSubjectTitle, level });
  };

  const renderLevelBlock = (level) => {
    const isCompleted = progress.completedLevels.includes(level);
    const isUnlocked = level === 1 || progress.completedLevels.includes(level - 1);
    const isCurrentLevel = level === progress.currentLevel;

    let blockStyle = styles.levelBlock;
    let iconName = 'lock';
    let iconColor = COLORS.gray;
    let textColor = COLORS.textSecondary;

    if (isCompleted) {
      blockStyle = [styles.levelBlock, styles.completedBlock];
      iconName = 'check-circle';
      iconColor = COLORS.success;
      textColor = COLORS.white;
    } else if (isUnlocked) {
      blockStyle = [styles.levelBlock, styles.unlockedBlock];
      iconName = 'play-circle';
      iconColor = COLORS.primary;
      textColor = COLORS.textPrimary;
    }

    if (isCurrentLevel && !isCompleted) {
      blockStyle = [styles.levelBlock, styles.currentBlock];
      iconName = 'star';
      iconColor = COLORS.warning;
      textColor = COLORS.white;
    }

    return (
      <TouchableOpacity
        key={level}
        style={blockStyle}
        onPress={() => handleLevelPress(level)}
        activeOpacity={0.8}
      >
        <Icon name={iconName} size={24} color={iconColor} />
        <Text style={[styles.levelText, { color: textColor }]}>{level}</Text>
        {isCompleted && (
          <View style={styles.completedIndicator}>
            <Icon name="trophy" size={12} color={COLORS.white} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderLevelRow = (startLevel) => {
    const levels = [];
    const levelsToShow = totalLevels || 0;
    for (let i = 0; i < 5; i++) {
      const level = startLevel + i;
      if (level <= levelsToShow) {
        levels.push(renderLevelBlock(level));
      }
    }
    return levels;
  };

  const renderLevelsGrid = () => {
    const rows = [];
    const levelsToShow = totalLevels || 0;

    for (let i = 1; i <= levelsToShow; i += 5) {
      rows.push(
        <View key={i} style={styles.levelRow}>
          {renderLevelRow(i)}
        </View>
      );
    }
    return rows;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading levels...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={theme.background} />

      {/* Header */}
      <LinearGradient
        colors={gradientColors}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Icon name="arrow-left" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>{subject.title}</Text>
            <Text style={styles.headerSubtitle}>Choose a level to start</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name={subject.icon} size={32} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      {/* Progress Section */}
      <View style={[styles.progressSection, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.progressInfo}>
          <Text style={[styles.progressTitle, { color: theme.textPrimary }]}>Your Progress</Text>
          <Text style={[styles.progressText, { color: theme.textSecondary }]}>
            {progress.completedLevels.length} of {totalLevels || 0} levels completed
          </Text>
        </View>
        <View style={[styles.progressBar, { backgroundColor: theme.grayBlock }]}>
          <View
            style={[
              styles.progressFill,
              { width: `${completionPercentage}%` },
            ]}
          />
        </View>
        <Text style={styles.percentageText}>{completionPercentage || 0}%</Text>
      </View>

      {/* Levels Grid */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.levelsContainer}>
          <Text style={[styles.levelsTitle, { color: theme.textPrimary }]}>Levels</Text>
          {totalLevels > 0 ? (
            renderLevelsGrid()
          ) : (
            <View style={styles.noLevelsContainer}>
              <Icon name="alert-circle" size={48} color={theme.textSecondary} />
              <Text style={[styles.noLevelsText, { color: theme.textPrimary }]}>No levels available for this subject</Text>
              <Text style={[styles.noLevelsSubtext, { color: theme.textSecondary }]}>Please check the quiz data configuration</Text>
            </View>
          )}
        </View>

        {/* Legend */}
        <View style={[styles.legendContainer, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.legendTitle, { color: theme.textPrimary }]}>Legend</Text>
          <View style={styles.legendItems}>
            <View style={styles.legendItem}>
              <View style={[styles.legendBlock, styles.unlockedBlock, { borderColor: theme.border, backgroundColor: theme.card }]}>
                <Icon name="play-circle" size={16} color={COLORS.primary} />
              </View>
              <Text style={[styles.legendText, { color: theme.textSecondary }]}>Available</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendBlock, styles.completedBlock]}>
                <Icon name="check-circle" size={16} color={COLORS.white} />
              </View>
              <Text style={[styles.legendText, { color: theme.textSecondary }]}>Completed</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendBlock, styles.lockedBlock, { backgroundColor: theme.grayBlock }]}>
                <Icon name="lock" size={16} color={theme.textSecondary} />
              </View>
              <Text style={[styles.legendText, { color: theme.textSecondary }]}>Locked</Text>
            </View>
          </View>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  loadingText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.9,
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressSection: {
    backgroundColor: COLORS.white,
    margin: 16,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  progressInfo: {
    marginBottom: 12,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  progressText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  progressBar: {
    height: 8,
    backgroundColor: COLORS.grayLight,
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.success,
    borderRadius: 4,
  },
  percentageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.success,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  levelsContainer: {
    marginBottom: 20,
  },
  levelsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  levelBlock: {
    width: (width - 80) / 5,
    height: 60,
    borderRadius: 12,
    backgroundColor: COLORS.grayLight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  unlockedBlock: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  completedBlock: {
    backgroundColor: COLORS.success,
  },
  currentBlock: {
    backgroundColor: COLORS.warning,
  },
  lockedBlock: {
    backgroundColor: COLORS.grayLight,
  },
  levelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  completedIndicator: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.warning,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendContainer: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  legendItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  legendItem: {
    alignItems: 'center',
  },
  legendBlock: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  legendText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  noLevelsContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noLevelsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginTop: 16,
    textAlign: 'center',
  },
  noLevelsSubtext: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default LevelsScreen;

import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import { getQuizForLevel } from '../data/quizData';
import { saveProgressForSubject } from '../utils/progressTracker';
import { getQuizSubjectTitle } from '../utils/subjectMapper';

const QuizScreen = ({ route, navigation }) => {
  const { subject, level } = route.params;
  const [quiz, setQuiz] = useState(null);
  
  console.log('QuizScreen - Subject:', subject, 'Level:', level);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuiz();
  }, [loadQuiz]);

  const loadQuiz = useCallback(() => {
    try {
      const quizSubjectTitle = getQuizSubjectTitle(subject);
      console.log('Loading quiz for subject:', quizSubjectTitle, 'level:', level);
      
      const quizData = getQuizForLevel(quizSubjectTitle, level);
      console.log('Quiz data:', quizData);
      
      if (quizData) {
        setQuiz(quizData);
      } else {
        Alert.alert('Error', 'Quiz not found for this level.');
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error loading quiz:', error);
      Alert.alert('Error', 'Failed to load quiz.');
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  }, [subject, level, navigation]);

  const handleOptionSelect = (optionIndex) => {
    if (selectedOption !== null) return; // Prevent multiple selections
    
    setSelectedOption(optionIndex);
    const correct = optionIndex === (quiz.correctAnswer || 1) - 1;
    setIsCorrect(correct);
    
    if (correct) {
      // Save progress when correct
      const quizSubjectTitle = getQuizSubjectTitle(subject);
      saveProgressForSubject(quizSubjectTitle, level, true);
    }
  };

  const handleNextLevel = () => {
    const nextLevel = level + 1;
    // Check if next level exists
    const quizSubjectTitle = getQuizSubjectTitle(subject);
    const nextQuiz = getQuizForLevel(quizSubjectTitle, nextLevel);
    if (nextQuiz) {
      navigation.replace('QuizScreen', { subject, level: nextLevel });
    } else {
      // All levels completed
      Alert.alert(
        'Congratulations!',
        'You have completed all levels in this subject!',
        [
          {
            text: 'Back to Levels',
            onPress: () => navigation.navigate('LevelsScreen', { subject: { title: subject, color: 'primary' } })
          }
        ]
      );
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setShowExplanation(false);
    setShowHint(false);
  };

  const handleBackToLevels = () => {
    navigation.navigate('LevelsScreen', { subject: { title: subject, color: 'primary' } });
  };

  const getOptionStyle = (optionIndex) => {
    if (selectedOption === null) {
      return styles.optionButton;
    }

    const isSelected = selectedOption === optionIndex;
    const isCorrectAnswer = optionIndex === (quiz.correctAnswer || 1) - 1;

    if (isCorrectAnswer) {
      return [styles.optionButton, styles.correctOption];
    } else if (isSelected && !isCorrectAnswer) {
      return [styles.optionButton, styles.incorrectOption];
    } else if (isSelected) {
      return [styles.optionButton, styles.selectedOption];
    }

    return styles.optionButton;
  };

  const getOptionTextStyle = (optionIndex) => {
    if (selectedOption === null) {
      return styles.optionText;
    }

    const isSelected = selectedOption === optionIndex;
    const isCorrectAnswer = optionIndex === (quiz.correctAnswer || 1) - 1;

    if (isCorrectAnswer || isSelected) {
      return [styles.optionText, styles.optionTextSelected];
    }

    return styles.optionText;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading quiz...</Text>
      </View>
    );
  }

  if (!quiz) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Quiz not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      
      {/* Header */}
      <LinearGradient
        colors={GRADIENTS.primary}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackToLevels}
            activeOpacity={0.7}
          >
            <Icon name="arrow-left" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Level {level}</Text>
            <Text style={styles.headerSubtitle}>{subject}</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name="help-circle" size={32} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Question Card */}
        <View style={styles.questionCard}>
          <View style={styles.questionHeader}>
            <Text style={styles.questionNumber}>Question</Text>
            <View style={styles.difficultyBadge}>
              <Text style={styles.difficultyText}>{quiz.difficulty || 'Unknown'}</Text>
            </View>
          </View>
          <Text style={styles.questionText}>{quiz.question || 'Question not available'}</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>Select the correct answer:</Text>
          {quiz.options && quiz.options.length > 0 ? (
            quiz.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={getOptionStyle(index)}
              onPress={() => handleOptionSelect(index)}
              activeOpacity={0.8}
              disabled={selectedOption !== null}
            >
              <Text style={styles.optionLabel}>{String.fromCharCode(65 + index)}</Text>
              <Text style={getOptionTextStyle(index)}>{option}</Text>
              {selectedOption === index && (
                <Icon 
                  name={isCorrect ? "check-circle" : "close-circle"} 
                  size={24} 
                  color={COLORS.white} 
                  style={styles.optionIcon}
                />
              )}
            </TouchableOpacity>
          ))
          ) : (
            <View style={styles.noOptionsContainer}>
              <Text style={styles.noOptionsText}>No options available</Text>
            </View>
          )}
        </View>

        {/* Hint Button */}
        {!showHint && selectedOption === null && (
          <TouchableOpacity
            style={styles.hintButton}
            onPress={() => setShowHint(true)}
            activeOpacity={0.8}
          >
            <Icon name="lightbulb" size={20} color={COLORS.warning} />
            <Text style={styles.hintButtonText}>Show Hint</Text>
          </TouchableOpacity>
        )}

        {/* Hint Display */}
        {showHint && (
          <View style={styles.hintContainer}>
            <View style={styles.hintHeader}>
              <Icon name="lightbulb" size={20} color={COLORS.warning} />
              <Text style={styles.hintTitle}>Hint</Text>
            </View>
            <Text style={styles.hintText}>{quiz.hint || 'No hint available'}</Text>
          </View>
        )}

        {/* Result Section */}
        {selectedOption !== null && (
          <View style={styles.resultContainer}>
            <View style={styles.resultHeader}>
              <Icon 
                name={isCorrect ? "trophy" : "alert-circle"} 
                size={32} 
                color={isCorrect ? COLORS.success : COLORS.error} 
              />
              <Text style={[styles.resultTitle, { color: isCorrect ? COLORS.success : COLORS.error }]}>
                {isCorrect ? 'Correct!' : 'Incorrect!'}
              </Text>
            </View>

            {/* Explanation */}
            <View style={styles.explanationContainer}>
              <Text style={styles.explanationTitle}>Explanation:</Text>
              <Text style={styles.explanationText}>{quiz.explanation || 'No explanation available'}</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              {isCorrect ? (
                <TouchableOpacity
                  style={styles.nextButton}
                  onPress={handleNextLevel}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={GRADIENTS.success}
                    style={styles.nextButtonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Icon name="arrow-right" size={20} color={COLORS.white} />
                    <Text style={styles.nextButtonText}>Next Level</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.retryButton}
                  onPress={handleRetry}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={GRADIENTS.accent}
                    style={styles.retryButtonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Icon name="refresh" size={20} color={COLORS.white} />
                    <Text style={styles.retryButtonText}>Try Again</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  errorText: {
    fontSize: 16,
    color: COLORS.error,
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
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  questionCard: {
    backgroundColor: COLORS.white,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  difficultyBadge: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  questionText: {
    fontSize: 16,
    color: COLORS.textPrimary,
    lineHeight: 24,
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  correctOption: {
    backgroundColor: COLORS.success,
  },
  incorrectOption: {
    backgroundColor: COLORS.error,
  },
  selectedOption: {
    backgroundColor: COLORS.primary,
  },
  optionLabel: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.grayLight,
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 32,
    marginRight: 12,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    lineHeight: 22,
  },
  optionTextSelected: {
    color: COLORS.white,
  },
  optionIcon: {
    marginLeft: 8,
  },
  hintButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  hintButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.warning,
    marginLeft: 8,
  },
  hintContainer: {
    backgroundColor: COLORS.white,
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  hintHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  hintTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.warning,
    marginLeft: 8,
  },
  hintText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  resultContainer: {
    backgroundColor: COLORS.white,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  explanationContainer: {
    marginBottom: 20,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  actionButtons: {
    alignItems: 'center',
  },
  nextButton: {
    borderRadius: 12,
    elevation: 4,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  nextButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 8,
  },
  retryButton: {
    borderRadius: 12,
    elevation: 4,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  retryButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  retryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 8,
  },
  noOptionsContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  noOptionsText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});

export default QuizScreen;

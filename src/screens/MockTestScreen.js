import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Alert,
  Dimensions,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import { getMockTestQuestions, calculateMockTestScore } from '../data/mockTests';

const { width } = Dimensions.get('window');

const MockTestScreen = ({ route, navigation }) => {
  const { mockTest } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(mockTest.duration * 60); // Convert to seconds
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [showQuestionPalette, setShowQuestionPalette] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  
  console.log('MockTestScreen mounted with mockTest:', mockTest);
  console.log('MockTest ID:', mockTest.id);
  
  const questions = getMockTestQuestions(mockTest.id);
  console.log('Questions loaded:', questions.length);
  
  const intervalRef = useRef(null);
  
  // Timer effect
  useEffect(() => {
    if (isTestStarted && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Auto-submit when time is up
            Alert.alert(
              'Time Up!',
              'Your test has been automatically submitted.',
              [
                {
                  text: 'View Results',
                  onPress: () => submitTest()
                }
              ]
            );
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTestStarted, timeLeft, submitTest]);

  // Start test when component mounts
  useEffect(() => {
    setIsTestStarted(true);
  }, []);
  
  const submitTest = useCallback(() => {
    const results = calculateMockTestScore(answers, questions, mockTest.negativeMarks);
    navigation.replace('MockTestResults', { 
      mockTest, 
      results, 
      answers, 
      questions 
    });
  }, [answers, questions, mockTest, navigation]);
  
  // Add error handling for missing data
  if (!mockTest) {
    console.error('No mockTest data received');
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ fontSize: 18, color: COLORS.error, marginBottom: 20 }}>Error: No test data received</Text>
        <TouchableOpacity 
          style={{ padding: 16, backgroundColor: COLORS.primary, borderRadius: 8 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: COLORS.white, fontSize: 16 }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  if (!questions || questions.length === 0) {
    console.error('No questions loaded for test:', mockTest.id);
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ fontSize: 18, color: COLORS.error, marginBottom: 20 }}>Error: No questions loaded for this test</Text>
        <TouchableOpacity 
          style={{ padding: 16, backgroundColor: COLORS.primary, borderRadius: 8 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: COLORS.white, fontSize: 16 }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleQuestionNavigation = (index) => {
    setCurrentQuestionIndex(index);
    setShowQuestionPalette(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitTest = () => {
    const answeredCount = Object.keys(answers).length;
    const totalQuestions = questions.length;
    
    if (answeredCount === 0) {
      Alert.alert(
        'No Answers',
        'You haven\'t answered any questions. Are you sure you want to submit?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Submit Anyway', onPress: () => setShowSubmitModal(true) }
        ]
      );
    } else {
      setShowSubmitModal(true);
    }
  };

  const getQuestionStatus = (index) => {
    if (answers[index] !== undefined) {
      return 'answered';
    }
    return 'unanswered';
  };

  const getQuestionStatusColor = (status) => {
    switch (status) {
      case 'answered':
        return COLORS.success;
      case 'unanswered':
        return COLORS.textSecondary;
      default:
        return COLORS.textSecondary;
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      
      {/* Header with Timer */}
      <LinearGradient
        colors={GRADIENTS.primary}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              Alert.alert(
                'Leave Test?',
                'Are you sure you want to leave? Your progress will be lost.',
                [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Leave', style: 'destructive', onPress: () => navigation.goBack() }
                ]
              );
            }}
            activeOpacity={0.7}
          >
            <Icon name="arrow-left" size={24} color={COLORS.white} />
          </TouchableOpacity>
          
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>{mockTest.title}</Text>
            <Text style={styles.headerSubtitle}>
              Question {currentQuestionIndex + 1} of {questions.length}
            </Text>
          </View>

          <View style={styles.timerContainer}>
            <Icon name="clock" size={20} color={COLORS.white} />
            <Text style={[
              styles.timerText,
              timeLeft <= 300 && styles.timerWarning // Warning when 5 minutes or less
            ]}>
              {formatTime(timeLeft)}
            </Text>
          </View>
        </View>
      </LinearGradient>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {currentQuestionIndex + 1} / {questions.length}
        </Text>
      </View>

      {/* Question Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Question Card */}
        <View style={styles.questionCard}>
          <View style={styles.questionHeader}>
            <Text style={styles.questionNumber}>
              Question {currentQuestion.id}
            </Text>
            <View style={styles.questionMeta}>
              <View style={[styles.difficultyBadge, { backgroundColor: getQuestionStatusColor(getQuestionStatus(currentQuestionIndex)) }]}>
                <Text style={styles.difficultyText}>{currentQuestion.difficulty}</Text>
              </View>
              <View style={styles.topicBadge}>
                <Text style={styles.topicText}>{currentQuestion.topic}</Text>
              </View>
            </View>
          </View>
          
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>Select the correct answer:</Text>
          
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                answers[currentQuestionIndex] === index && styles.selectedOption
              ]}
              onPress={() => handleAnswerSelect(index)}
              activeOpacity={0.8}
            >
              <View style={styles.optionLabel}>
                <Text style={styles.optionLabelText}>
                  {String.fromCharCode(65 + index)}
                </Text>
              </View>
              <Text style={[
                styles.optionText,
                answers[currentQuestionIndex] === index && styles.selectedOptionText
              ]}>
                {option}
              </Text>
              {answers[currentQuestionIndex] === index && (
                <Icon name="check-circle" size={20} color={COLORS.white} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={[styles.navButton, isFirstQuestion && styles.navButtonDisabled]}
            onPress={handlePreviousQuestion}
            disabled={isFirstQuestion}
            activeOpacity={0.8}
          >
            <Icon name="chevron-left" size={20} color={isFirstQuestion ? COLORS.textSecondary : COLORS.primary} />
            <Text style={[styles.navButtonText, isFirstQuestion && styles.navButtonTextDisabled]}>
              Previous
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.questionPaletteButton}
            onPress={() => setShowQuestionPalette(true)}
            activeOpacity={0.8}
          >
            <Icon name="grid" size={20} color={COLORS.white} />
            <Text style={styles.questionPaletteText}>Question Palette</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navButton, isLastQuestion && styles.navButtonDisabled]}
            onPress={handleNextQuestion}
            disabled={isLastQuestion}
            activeOpacity={0.8}
          >
            <Text style={[styles.navButtonText, isLastQuestion && styles.navButtonTextDisabled]}>
              Next
            </Text>
            <Icon name="chevron-right" size={20} color={isLastQuestion ? COLORS.textSecondary : COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitTest}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={GRADIENTS.success}
            style={styles.submitButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Icon name="check-circle" size={20} color={COLORS.white} />
            <Text style={styles.submitButtonText}>Submit Test</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Question Palette Modal */}
      <Modal
        visible={showQuestionPalette}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowQuestionPalette(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.questionPaletteModal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Question Palette</Text>
              <TouchableOpacity
                onPress={() => setShowQuestionPalette(false)}
                activeOpacity={0.8}
              >
                <Icon name="close" size={24} color={COLORS.textPrimary} />
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.questionGrid} showsVerticalScrollIndicator={false}>
              {questions.map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.questionGridItem,
                    currentQuestionIndex === index && styles.currentQuestionGridItem,
                    getQuestionStatus(index) === 'answered' && styles.answeredQuestionGridItem
                  ]}
                  onPress={() => handleQuestionNavigation(index)}
                  activeOpacity={0.8}
                >
                  <Text style={[
                    styles.questionGridText,
                    currentQuestionIndex === index && styles.currentQuestionGridText,
                    getQuestionStatus(index) === 'answered' && styles.answeredQuestionGridText
                  ]}>
                    {index + 1}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            
            <View style={styles.paletteLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: COLORS.textSecondary }]} />
                <Text style={styles.legendText}>Unanswered</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: COLORS.success }]} />
                <Text style={styles.legendText}>Answered</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: COLORS.primary }]} />
                <Text style={styles.legendText}>Current</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Submit Confirmation Modal */}
      <Modal
        visible={showSubmitModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSubmitModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.submitModal}>
            <View style={styles.submitModalHeader}>
              <Icon name="alert-circle" size={48} color={COLORS.warning} />
              <Text style={styles.submitModalTitle}>Submit Test?</Text>
            </View>
            
            <Text style={styles.submitModalText}>
              Are you sure you want to submit your test? You won't be able to change your answers after submission.
            </Text>
            
            <View style={styles.submitModalStats}>
              <View style={styles.submitStatItem}>
                <Text style={styles.submitStatLabel}>Answered:</Text>
                <Text style={styles.submitStatValue}>{Object.keys(answers).length}</Text>
              </View>
              <View style={styles.submitStatItem}>
                <Text style={styles.submitStatLabel}>Unanswered:</Text>
                <Text style={styles.submitStatValue}>{questions.length - Object.keys(answers).length}</Text>
              </View>
            </View>
            
            <View style={styles.submitModalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowSubmitModal(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.confirmSubmitButton}
                onPress={submitTest}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={GRADIENTS.success}
                  style={styles.confirmSubmitGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={styles.confirmSubmitText}>Submit Test</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.9,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 6,
  },
  timerWarning: {
    color: '#FCD34D',
  },
  progressContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  questionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  questionMeta: {
    flexDirection: 'row',
    gap: 8,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  difficultyText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  topicBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  topicText: {
    fontSize: 10,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  questionText: {
    fontSize: 16,
    color: COLORS.textPrimary,
    lineHeight: 24,
  },
  optionsContainer: {
    marginBottom: 20,
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
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedOption: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  optionLabel: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    lineHeight: 22,
  },
  selectedOptionText: {
    color: COLORS.white,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary,
    marginHorizontal: 4,
  },
  navButtonTextDisabled: {
    color: COLORS.textSecondary,
  },
  questionPaletteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },
  questionPaletteText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.white,
    marginLeft: 6,
  },
  submitButton: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  submitButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 12,
  },
  bottomSpacing: {
    height: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionPaletteModal: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: width * 0.9,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  questionGrid: {
    padding: 20,
  },
  questionGridItem: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  currentQuestionGridItem: {
    backgroundColor: COLORS.primary,
  },
  answeredQuestionGridItem: {
    backgroundColor: COLORS.success,
  },
  questionGridText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  currentQuestionGridText: {
    color: COLORS.white,
  },
  answeredQuestionGridText: {
    color: COLORS.white,
  },
  paletteLegend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  submitModal: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: width * 0.85,
    padding: 24,
  },
  submitModalHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  submitModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginTop: 12,
  },
  submitModalText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  submitModalStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  submitStatItem: {
    alignItems: 'center',
  },
  submitStatLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  submitStatValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  submitModalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  confirmSubmitButton: {
    flex: 2,
    borderRadius: 12,
    overflow: 'hidden',
  },
  confirmSubmitGradient: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  confirmSubmitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});

export default MockTestScreen;

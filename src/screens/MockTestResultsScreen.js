import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';

const { width } = Dimensions.get('window');

const MockTestResultsScreen = ({ route, navigation }) => {
  const { mockTest, results, answers, questions } = route.params;
  const [showDetailedResults, setShowDetailedResults] = useState(false);

  const getPerformanceColor = (percentage) => {
    if (percentage >= 80) return COLORS.success;
    if (percentage >= 60) return '#D97706';
    if (percentage >= 40) return '#EA580C';
    return COLORS.error;
  };

  const getPerformanceText = (percentage) => {
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Average';
    return 'Needs Improvement';
  };

  const getGrade = (percentage) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C+';
    if (percentage >= 40) return 'C';
    return 'D';
  };

  const handleViewDetailedResults = () => {
    setShowDetailedResults(!showDetailedResults);
  };

  const handleTakeAnotherTest = () => {
    navigation.navigate('MockTestList');
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  const handleReviewAnswers = () => {
    setShowDetailedResults(true);
  };

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
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Test Results</Text>
            <Text style={styles.headerSubtitle}>{mockTest.title}</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name="trophy" size={32} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Performance Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <Icon name="chart-line" size={24} color={COLORS.primary} />
            <Text style={styles.summaryTitle}>Performance Summary</Text>
          </View>
          
          <View style={styles.scoreContainer}>
            <View style={styles.mainScore}>
              <Text style={styles.scoreValue}>{results.totalScore.toFixed(2)}</Text>
              <Text style={styles.scoreLabel}>Total Score</Text>
              <Text style={styles.maxScore}>/ {results.maxPossibleScore}</Text>
            </View>
            
            <View style={styles.scoreBreakdown}>
              <View style={styles.scoreItem}>
                <Text style={styles.scoreItemLabel}>Percentage</Text>
                <Text style={[
                  styles.scoreItemValue,
                  { color: getPerformanceColor(results.percentage) }
                ]}>
                  {results.percentage.toFixed(1)}%
                </Text>
              </View>
              <View style={styles.scoreItem}>
                <Text style={styles.scoreItemLabel}>Grade</Text>
                <Text style={[
                  styles.scoreItemValue,
                  { color: getPerformanceColor(results.percentage) }
                ]}>
                  {getGrade(results.percentage)}
                </Text>
              </View>
              <View style={styles.scoreItem}>
                <Text style={styles.scoreItemLabel}>Performance</Text>
                <Text style={[
                  styles.scoreItemValue,
                  { color: getPerformanceColor(results.percentage) }
                ]}>
                  {getPerformanceText(results.percentage)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Icon name="check-circle" size={24} color={COLORS.success} />
            </View>
            <Text style={styles.statValue}>{results.correctAnswers}</Text>
            <Text style={styles.statLabel}>Correct</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Icon name="close-circle" size={24} color={COLORS.error} />
            </View>
            <Text style={styles.statValue}>{results.wrongAnswers}</Text>
            <Text style={styles.statLabel}>Wrong</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Icon name="help-circle" size={24} color={COLORS.textSecondary} />
            </View>
            <Text style={styles.statValue}>{results.unattempted}</Text>
            <Text style={styles.statLabel}>Unattempted</Text>
          </View>
        </View>

        {/* Detailed Analysis */}
        <View style={styles.analysisCard}>
          <View style={styles.analysisHeader}>
            <Icon name="analytics" size={24} color={COLORS.warning} />
            <Text style={styles.analysisTitle}>Detailed Analysis</Text>
          </View>
          
          <View style={styles.analysisGrid}>
            <View style={styles.analysisItem}>
              <Text style={styles.analysisLabel}>Accuracy Rate</Text>
              <Text style={styles.analysisValue}>
                {results.correctAnswers > 0 
                  ? ((results.correctAnswers / (results.correctAnswers + results.wrongAnswers)) * 100).toFixed(1)
                  : 0}%
              </Text>
            </View>
            
            <View style={styles.analysisItem}>
              <Text style={styles.analysisLabel}>Completion Rate</Text>
              <Text style={styles.analysisValue}>
                {((results.correctAnswers + results.wrongAnswers) / questions.length * 100).toFixed(1)}%
              </Text>
            </View>
            
            <View style={styles.analysisItem}>
              <Text style={styles.analysisLabel}>Net Score</Text>
              <Text style={styles.analysisValue}>
                {results.totalScore.toFixed(2)}
              </Text>
            </View>
            
            <View style={styles.analysisItem}>
              <Text style={styles.analysisLabel}>Negative Impact</Text>
              <Text style={styles.analysisValue}>
                {(results.wrongAnswers * mockTest.negativeMarks).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleReviewAnswers}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={GRADIENTS.primary}
              style={styles.actionButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Icon name="eye" size={20} color={COLORS.white} />
              <Text style={styles.actionButtonText}>Review Answers</Text>
            </LinearGradient>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleTakeAnotherTest}
            activeOpacity={0.8}
          >
            <Icon name="refresh" size={20} color={COLORS.primary} />
            <Text style={styles.secondaryButtonText}>Take Another Test</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleGoHome}
            activeOpacity={0.8}
          >
            <Icon name="home" size={20} color={COLORS.primary} />
            <Text style={styles.secondaryButtonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>

        {/* Detailed Results Section */}
        {showDetailedResults && (
          <View style={styles.detailedResultsCard}>
            <View style={styles.detailedResultsHeader}>
              <Icon name="file-document" size={24} color={COLORS.primary} />
              <Text style={styles.detailedResultsTitle}>Question-wise Analysis</Text>
              <TouchableOpacity
                onPress={() => setShowDetailedResults(false)}
                activeOpacity={0.8}
              >
                <Icon name="chevron-up" size={24} color={COLORS.textSecondary} />
              </TouchableOpacity>
            </View>
            
            {/* Question Summary */}
            <View style={styles.questionSummary}>
              <Text style={styles.questionSummaryText}>
                Total Questions: {questions.length} | 
                Answered: {Object.keys(answers).length} | 
                Unanswered: {questions.length - Object.keys(answers).length}
              </Text>
              
              {/* Quick Navigation for Large Question Sets */}
              {questions.length > 20 && (
                <View style={styles.quickNavigation}>
                  <Text style={styles.quickNavTitle}>Quick Navigation:</Text>
                  <View style={styles.quickNavButtons}>
                    {[1, 25, 50, 75, questions.length].map((num) => (
                      <TouchableOpacity
                        key={num}
                        style={styles.quickNavButton}
                        onPress={() => {
                          // Scroll to question number
                          const questionIndex = Math.min(num - 1, questions.length - 1);
                          // This will be handled by the ScrollView ref if needed
                        }}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.quickNavButtonText}>Q{num}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
            </View>
            
            <ScrollView style={styles.questionsList} showsVerticalScrollIndicator={true}>
              {questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                const isAnswered = userAnswer !== undefined;
                
                return (
                  <View key={index} style={styles.questionResultItem}>
                    <View style={styles.questionResultHeader}>
                      <Text style={styles.questionResultNumber}>Q{index + 1}</Text>
                      <View style={styles.questionResultMeta}>
                        <View style={[
                          styles.resultStatusBadge,
                          { backgroundColor: isAnswered ? (isCorrect ? COLORS.success : COLORS.error) : COLORS.textSecondary }
                        ]}>
                          <Icon 
                            name={isAnswered ? (isCorrect ? 'check' : 'close') : 'help'} 
                            size={12} 
                            color={COLORS.white} 
                          />
                          <Text style={styles.resultStatusText}>
                            {isAnswered ? (isCorrect ? 'Correct' : 'Wrong') : 'Unattempted'}
                          </Text>
                        </View>
                        <View style={styles.topicBadge}>
                          <Text style={styles.topicText}>{question.topic}</Text>
                        </View>
                      </View>
                    </View>
                    
                    <Text style={styles.questionResultText} numberOfLines={3}>
                      {question.question}
                    </Text>
                    
                    {isAnswered && (
                      <View style={styles.answerAnalysis}>
                        <View style={styles.answerRow}>
                          <Text style={styles.answerLabel}>Your Answer:</Text>
                          <Text style={[
                            styles.answerValue,
                            { color: isCorrect ? COLORS.success : COLORS.error }
                          ]}>
                            {String.fromCharCode(65 + userAnswer)}. {question.options[userAnswer]}
                          </Text>
                        </View>
                        
                        {!isCorrect && (
                          <View style={styles.answerRow}>
                            <Text style={styles.answerLabel}>Correct Answer:</Text>
                            <Text style={[styles.answerValue, { color: COLORS.success }]}>
                              {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
                            </Text>
                          </View>
                        )}
                        
                        {question.explanation && (
                          <View style={styles.explanationContainer}>
                            <Text style={styles.explanationLabel}>Explanation:</Text>
                            <Text style={styles.explanationText}>{question.explanation}</Text>
                          </View>
                        )}
                      </View>
                    )}
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}

        <View style={styles.bottomSpacing} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
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
  summaryCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginLeft: 12,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  mainScore: {
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  scoreLabel: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  maxScore: {
    fontSize: 20,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  scoreBreakdown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  scoreItem: {
    alignItems: 'center',
  },
  scoreItemLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  scoreItemValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  analysisCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  analysisHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginLeft: 12,
  },
  analysisGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  analysisItem: {
    width: '48%',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    marginBottom: 8,
  },
  analysisLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  analysisValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  actionButtons: {
    marginBottom: 20,
  },
  actionButton: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  actionButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 12,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    marginBottom: 8,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primary,
    marginLeft: 8,
  },
  detailedResultsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  detailedResultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  detailedResultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginLeft: 12,
  },
  questionSummary: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  questionSummaryText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    fontWeight: '500',
  },
  quickNavigation: {
    marginTop: 12,
    alignItems: 'center',
  },
  quickNavTitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 8,
    fontWeight: '500',
  },
  quickNavButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  quickNavButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
  },
  quickNavButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  questionsList: {
    // Remove maxHeight constraint to allow full scrolling for all questions
  },
  questionResultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  questionResultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  questionResultNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  questionResultMeta: {
    flexDirection: 'row',
    gap: 8,
  },
  resultStatusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  resultStatusText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 4,
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
  questionResultText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    lineHeight: 20,
    marginBottom: 12,
  },
  answerAnalysis: {
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 8,
  },
  answerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  answerLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textSecondary,
    width: 80,
  },
  answerValue: {
    fontSize: 12,
    fontWeight: '500',
    flex: 1,
  },
  explanationContainer: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  explanationLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  explanationText: {
    fontSize: 12,
    color: COLORS.textPrimary,
    lineHeight: 16,
  },
  bottomSpacing: {
    height: 20,
  },
});

export default MockTestResultsScreen;

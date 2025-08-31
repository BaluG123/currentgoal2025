import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';

const MockTestInstructionsScreen = ({ route, navigation }) => {
  const { mockTest } = route.params;
  const [hasReadInstructions, setHasReadInstructions] = useState(false);

  const handleStartTest = () => {
    if (!hasReadInstructions) {
      Alert.alert(
        'Please Read Instructions',
        'Please read through all instructions before starting the test.',
        [{ text: 'OK' }]
      );
      return;
    }

    console.log('Starting mock test:', mockTest.title);
    console.log('Navigation object:', navigation);
    
    Alert.alert(
      'Start Mock Test',
      `Are you ready to start "${mockTest.title}"?\n\nOnce started, the timer will begin and cannot be paused.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Start Test',
          style: 'destructive',
          onPress: () => {
            console.log('Attempting to navigate to MockTestScreen');
            try {
              navigation.navigate('MockTestScreen', { mockTest });
            } catch (error) {
              console.error('Navigation error:', error);
              Alert.alert('Navigation Error', 'Failed to start test. Please try again.');
            }
          }
        }
      ]
    );
  };

  const handleGoBack = () => {
    navigation.goBack();
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
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleGoBack}
            activeOpacity={0.7}
          >
            <Icon name="arrow-left" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Test Instructions</Text>
            <Text style={styles.headerSubtitle}>{mockTest.title}</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name="information" size={32} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Test Overview Card */}
        <View style={styles.overviewCard}>
          <View style={styles.overviewHeader}>
            <Icon name="clipboard-text" size={24} color={COLORS.primary} />
            <Text style={styles.overviewTitle}>Test Overview</Text>
          </View>
          
          <View style={styles.overviewGrid}>
            <View style={styles.overviewItem}>
              <Icon name="help-circle" size={20} color={COLORS.textSecondary} />
              <Text style={styles.overviewLabel}>Questions</Text>
              <Text style={styles.overviewValue}>{mockTest.totalQuestions}</Text>
            </View>
            <View style={styles.overviewItem}>
              <Icon name="star" size={20} color={COLORS.textSecondary} />
              <Text style={styles.overviewLabel}>Total Marks</Text>
              <Text style={styles.overviewValue}>{mockTest.totalMarks}</Text>
            </View>
            <View style={styles.overviewItem}>
              <Icon name="clock" size={20} color={COLORS.textSecondary} />
              <Text style={styles.overviewLabel}>Duration</Text>
              <Text style={styles.overviewValue}>{mockTest.duration} min</Text>
            </View>
            <View style={styles.overviewItem}>
              <Icon name="minus-circle" size={20} color={COLORS.textSecondary} />
              <Text style={styles.overviewLabel}>Negative</Text>
              <Text style={styles.overviewValue}>{mockTest.negativeMarks}</Text>
            </View>
          </View>
        </View>

        {/* Instructions Card */}
        <View style={styles.instructionsCard}>
          <View style={styles.instructionsHeader}>
            <Icon name="lightbulb" size={24} color={COLORS.warning} />
            <Text style={styles.instructionsTitle}>Important Instructions</Text>
          </View>
          
          {mockTest.instructions.map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <View style={styles.instructionBullet}>
                <Text style={styles.instructionBulletText}>{index + 1}</Text>
              </View>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </View>

        {/* Topics Covered Card */}
        <View style={styles.topicsCard}>
          <View style={styles.topicsHeader}>
            <Icon name="book-open" size={24} color={COLORS.success} />
            <Text style={styles.topicsTitle}>Topics Covered</Text>
          </View>
          
          <View style={styles.topicsGrid}>
            {mockTest.topics.map((topic, index) => (
              <View key={index} style={styles.topicChip}>
                <Text style={styles.topicText}>{topic}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Rules Card */}
        <View style={styles.rulesCard}>
          <View style={styles.rulesHeader}>
            <Icon name="shield-check" size={24} color={COLORS.error} />
            <Text style={styles.rulesTitle}>Test Rules</Text>
          </View>
          
          <View style={styles.rulesList}>
            <View style={styles.ruleItem}>
              <Icon name="check-circle" size={16} color={COLORS.success} />
              <Text style={styles.ruleText}>Each correct answer gives you 1.5 marks</Text>
            </View>
            <View style={styles.ruleItem}>
              <Icon name="minus-circle" size={16} color={COLORS.error} />
              <Text style={styles.ruleText}>Each wrong answer deducts {mockTest.negativeMarks} marks</Text>
            </View>
            <View style={styles.ruleItem}>
              <Icon name="help-circle" size={16} color={COLORS.textSecondary} />
              <Text style={styles.ruleText}>Unattempted questions carry no penalty</Text>
            </View>
            <View style={styles.ruleItem}>
              <Icon name="clock-alert" size={16} color={COLORS.warning} />
              <Text style={styles.ruleText}>Timer will automatically submit the test when time is up</Text>
            </View>
            <View style={styles.ruleItem}>
              <Icon name="arrow-left-right" size={16} color={COLORS.primary} />
              <Text style={styles.ruleText}>You can navigate between questions during the test</Text>
            </View>
            <View style={styles.ruleItem}>
              <Icon name="refresh" size={16} color={COLORS.textSecondary} />
              <Text style={styles.ruleText}>You can change your answers before final submission</Text>
            </View>
          </View>
        </View>

        {/* Confirmation Checkbox */}
        <View style={styles.confirmationCard}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setHasReadInstructions(!hasReadInstructions)}
            activeOpacity={0.8}
          >
            <View style={[
              styles.checkbox,
              hasReadInstructions && styles.checkboxChecked
            ]}>
              {hasReadInstructions && (
                <Icon name="check" size={16} color={COLORS.white} />
              )}
            </View>
            <Text style={styles.checkboxText}>
              I have read and understood all the instructions
            </Text>
          </TouchableOpacity>
        </View>

        {/* Start Test Button */}
        <TouchableOpacity
          style={[
            styles.startButton,
            !hasReadInstructions && styles.startButtonDisabled
          ]}
          onPress={handleStartTest}
          activeOpacity={0.8}
          disabled={!hasReadInstructions}
        >
          <LinearGradient
            colors={hasReadInstructions ? GRADIENTS.success : GRADIENTS.disabled}
            style={styles.startButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Icon name="play-circle" size={24} color={COLORS.white} />
            <Text style={styles.startButtonText}>Start Mock Test</Text>
          </LinearGradient>
        </TouchableOpacity>

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
  overviewCard: {
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
  overviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginLeft: 12,
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  overviewItem: {
    width: '48%',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    marginBottom: 8,
  },
  overviewLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
    marginBottom: 4,
  },
  overviewValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  instructionsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  instructionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginLeft: 12,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  instructionBullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  instructionBulletText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  instructionText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  topicsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  topicsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  topicsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginLeft: 12,
  },
  topicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  topicChip: {
    backgroundColor: '#F0F9FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#BAE6FD',
  },
  topicText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '500',
  },
  rulesCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  rulesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rulesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginLeft: 12,
  },
  rulesList: {
    gap: 12,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ruleText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
    marginLeft: 12,
    lineHeight: 20,
  },
  confirmationCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: COLORS.primary,
  },
  checkboxText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  startButton: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  startButtonDisabled: {
    opacity: 0.6,
  },
  startButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 12,
  },
  bottomSpacing: {
    height: 20,
  },
});

export default MockTestInstructionsScreen;

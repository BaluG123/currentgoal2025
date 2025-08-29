import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';

const SubjectDetailScreen = ({ route, navigation }) => {
  const { subject } = route.params;
  const [expandedSubtopic, setExpandedSubtopic] = useState(null);

  const gradientColors = GRADIENTS[subject.color] || GRADIENTS.primary;

  const toggleSubtopic = (subtopicId) => {
    setExpandedSubtopic(expandedSubtopic === subtopicId ? null : subtopicId);
  };

  const renderSubtopic = (subtopic) => {
    const isExpanded = expandedSubtopic === subtopic.id;
    
    return (
      <View key={subtopic.id} style={styles.subtopicContainer}>
        <TouchableOpacity
          style={styles.subtopicHeader}
          onPress={() => toggleSubtopic(subtopic.id)}
          activeOpacity={0.7}
        >
          <View style={styles.subtopicHeaderContent}>
            <View style={styles.subtopicIconContainer}>
              <Icon name="book-open-page-variant" size={20} color={COLORS.primary} />
            </View>
            <View style={styles.subtopicInfo}>
              <Text style={styles.subtopicTitle}>{subtopic.title}</Text>
              <Text style={styles.topicCount}>
                {subtopic.topics.length} Topics
              </Text>
            </View>
          </View>
          <Icon
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={24}
            color={COLORS.textSecondary}
          />
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.topicsContainer}>
            {subtopic.topics.map((topic, index) => (
              <View key={index} style={styles.topicItem}>
                <View style={styles.topicBullet} />
                <Text style={styles.topicText}>{topic}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      
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
            <Text style={styles.headerSubtitle}>{subject.description}</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name={subject.icon} size={32} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{subject.subtopics.length}</Text>
            <Text style={styles.statLabel}>Subtopics</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {subject.subtopics.reduce((total, subtopic) => total + subtopic.topics.length, 0)}
            </Text>
            <Text style={styles.statLabel}>Total Topics</Text>
          </View>
        </View>

        <View style={styles.subtopicsSection}>
          <Text style={styles.sectionTitle}>Study Topics</Text>
          <Text style={styles.sectionSubtitle}>
            Tap on any subtopic to expand and view detailed topics
          </Text>
          
          {subject.subtopics.map(renderSubtopic)}
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.studyButton}
            activeOpacity={0.8}
            onPress={() => {
              // TODO: Navigate to study mode
              console.log('Start studying:', subject.title);
            }}
          >
            <LinearGradient
              colors={gradientColors}
              style={styles.studyButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Icon name="play-circle" size={24} color={COLORS.white} />
              <Text style={styles.studyButtonText}>Start Studying</Text>
            </LinearGradient>
          </TouchableOpacity>
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
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    marginBottom: 24,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  statDivider: {
    width: 1,
    backgroundColor: COLORS.grayLight,
    marginHorizontal: 20,
  },
  subtopicsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  subtopicContainer: {
    backgroundColor: COLORS.white,
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
  subtopicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  subtopicHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  subtopicIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.grayLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  subtopicInfo: {
    flex: 1,
  },
  subtopicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  topicCount: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  topicsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  topicBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginTop: 6,
    marginRight: 12,
  },
  topicText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  footer: {
    paddingVertical: 20,
  },
  studyButton: {
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
  studyButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  studyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 8,
  },
});

export default SubjectDetailScreen;

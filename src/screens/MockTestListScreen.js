import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import { getActiveMockTests, getMockTestsByCategory } from '../data/mockTests';

const MockTestListScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const categories = ['All', 'UPSC', 'KPSC', 'Banking', 'SSC'];
  const mockTests = useMemo(() => {
    if (selectedCategory === 'All') {
      return getActiveMockTests();
    }
    return getMockTestsByCategory(selectedCategory);
  }, [selectedCategory]);

  const handleMockTestPress = (mockTest) => {
    navigation.navigate('MockTestInstructions', { mockTest });
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'UPSC':
        return '#DC2626';
      case 'KPSC':
        return '#059669';
      case 'Banking':
        return '#7C3AED';
      case 'SSC':
        return '#EA580C';
      default:
        return COLORS.primary;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return '#059669';
      case 'Medium':
        return '#D97706';
      case 'Hard':
        return '#DC2626';
      default:
        return COLORS.primary;
    }
  };

  const renderMockTestCard = ({ item }) => (
    <TouchableOpacity
      style={styles.mockTestCard}
      onPress={() => handleMockTestPress(item)}
      activeOpacity={0.8}
    >
      <View style={styles.cardHeader}>
        <View style={styles.titleContainer}>
          <Text style={styles.mockTestTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.mockTestSubject}>{item.subject}</Text>
        </View>
        <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(item.category) }]}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Icon name="help-circle-outline" size={16} color={COLORS.textSecondary} />
          <Text style={styles.statText}>{item.totalQuestions} Questions</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="star-outline" size={16} color={COLORS.textSecondary} />
          <Text style={styles.statText}>{item.totalMarks} Marks</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="clock-outline" size={16} color={COLORS.textSecondary} />
          <Text style={styles.statText}>{item.duration} Min</Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(item.difficulty) }]}>
          <Text style={styles.difficultyText}>{item.difficulty}</Text>
        </View>
        <View style={styles.topicsContainer}>
          {item.topics.slice(0, 3).map((topic, index) => (
            <View key={index} style={styles.topicChip}>
              <Text style={styles.topicText}>{topic}</Text>
            </View>
          ))}
          {item.topics.length > 3 && (
            <Text style={styles.moreTopics}>+{item.topics.length - 3} more</Text>
          )}
        </View>
      </View>

      <View style={styles.startButton}>
        <LinearGradient
          colors={GRADIENTS.primary}
          style={styles.startButtonGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Icon name="play-circle" size={20} color={COLORS.white} />
          <Text style={styles.startButtonText}>Start Test</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryFilter = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryFilter,
        selectedCategory === item && styles.categoryFilterActive
      ]}
      onPress={() => setSelectedCategory(item)}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.categoryFilterText,
          selectedCategory === item && styles.categoryFilterTextActive
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

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
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Icon name="arrow-left" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Mock Tests</Text>
            <Text style={styles.headerSubtitle}>Practice with Real Exam Pattern</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name="clipboard-check" size={32} color={COLORS.white} />
          </View>
        </View>
      </LinearGradient>

      {/* Category Filters */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategoryFilter}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />
      </View>

      {/* Mock Tests List */}
      <FlatList
        data={mockTests}
        renderItem={renderMockTestCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mockTestsList}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderTitle}>
              {selectedCategory === 'All' ? 'All Available Tests' : `${selectedCategory} Tests`}
            </Text>
            <Text style={styles.listHeaderSubtitle}>
              {mockTests.length} test{mockTests.length !== 1 ? 's' : ''} available
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="clipboard-off" size={64} color={COLORS.textSecondary} />
            <Text style={styles.emptyTitle}>No Tests Available</Text>
            <Text style={styles.emptySubtitle}>
              No mock tests are currently available for {selectedCategory} category
            </Text>
          </View>
        }
      />
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
  categoryContainer: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  categoryList: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  categoryFilter: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  categoryFilterActive: {
    backgroundColor: COLORS.primary,
  },
  categoryFilterText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  categoryFilterTextActive: {
    color: COLORS.white,
  },
  mockTestsList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  listHeader: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  listHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  listHeaderSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  mockTestCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleContainer: {
    flex: 1,
    marginRight: 12,
  },
  mockTestTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 4,
    lineHeight: 24,
  },
  mockTestSubject: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '500',
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginLeft: 6,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  difficultyText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  topicsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicChip: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 6,
  },
  topicText: {
    fontSize: 10,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  moreTopics: {
    fontSize: 10,
    color: COLORS.primary,
    fontWeight: '500',
    marginLeft: 6,
  },
  startButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  startButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 8,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default MockTestListScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';

const { width } = Dimensions.get('window');

const SubjectCard = ({ subject, onPress, style, showStats = true }) => {
  const gradientColors = GRADIENTS[subject.color] || GRADIENTS.primary;
  
  return (
    <TouchableOpacity
      style={[styles.cardContainer, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={gradientColors}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.iconContainer}>
          <Icon name={subject.icon} size={32} color={COLORS.white} />
        </View>
        <Text style={styles.cardTitle}>{subject.title}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {subject.description}
        </Text>
        {showStats && (
          <View style={styles.cardFooter}>
            <Text style={styles.topicCount}>
              {subject.subtopics.length} Subtopics
            </Text>
            <Icon name="chevron-right" size={20} color={COLORS.white} />
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: (width - 48) / 2,
    marginBottom: 16,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    minHeight: 160,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 12,
    color: COLORS.white,
    opacity: 0.9,
    lineHeight: 16,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  topicCount: {
    fontSize: 12,
    color: COLORS.white,
    opacity: 0.9,
  },
});

export default SubjectCard;

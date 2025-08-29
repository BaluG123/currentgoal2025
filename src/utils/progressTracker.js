import AsyncStorage from '@react-native-async-storage/async-storage';

const PROGRESS_KEY = 'quiz_progress';

// Get progress for a specific subject
export const getProgressForSubject = async (subject) => {
  try {
    const progressData = await AsyncStorage.getItem(PROGRESS_KEY);
    if (progressData) {
      const allProgress = JSON.parse(progressData);
      return allProgress[subject] || { completedLevels: [], currentLevel: 1 };
    }
    return { completedLevels: [], currentLevel: 1 };
  } catch (error) {
    console.error('Error getting progress:', error);
    return { completedLevels: [], currentLevel: 1 };
  }
};

// Save progress for a specific subject
export const saveProgressForSubject = async (subject, level, isCompleted = false) => {
  try {
    const progressData = await AsyncStorage.getItem(PROGRESS_KEY);
    let allProgress = progressData ? JSON.parse(progressData) : {};
    
    if (!allProgress[subject]) {
      allProgress[subject] = { completedLevels: [], currentLevel: 1 };
    }
    
    if (isCompleted && !allProgress[subject].completedLevels.includes(level)) {
      allProgress[subject].completedLevels.push(level);
    }
    
    allProgress[subject].currentLevel = Math.max(allProgress[subject].currentLevel, level + 1);
    
    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
    return true;
  } catch (error) {
    console.error('Error saving progress:', error);
    return false;
  }
};

// Check if a level is unlocked
export const isLevelUnlocked = async (subject, level) => {
  try {
    const progress = await getProgressForSubject(subject);
    return level === 1 || progress.completedLevels.includes(level - 1);
  } catch (error) {
    console.error('Error checking level unlock:', error);
    return level === 1; // First level is always unlocked
  }
};

// Get all progress data
export const getAllProgress = async () => {
  try {
    const progressData = await AsyncStorage.getItem(PROGRESS_KEY);
    return progressData ? JSON.parse(progressData) : {};
  } catch (error) {
    console.error('Error getting all progress:', error);
    return {};
  }
};

// Reset progress for a specific subject
export const resetProgressForSubject = async (subject) => {
  try {
    const progressData = await AsyncStorage.getItem(PROGRESS_KEY);
    if (progressData) {
      const allProgress = JSON.parse(progressData);
      delete allProgress[subject];
      await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
    }
    return true;
  } catch (error) {
    console.error('Error resetting progress:', error);
    return false;
  }
};

// Reset all progress
export const resetAllProgress = async () => {
  try {
    await AsyncStorage.removeItem(PROGRESS_KEY);
    return true;
  } catch (error) {
    console.error('Error resetting all progress:', error);
    return false;
  }
};

// Get completion percentage for a subject
export const getCompletionPercentage = async (subject, totalLevels) => {
  try {
    console.log('Getting completion percentage for:', subject, 'totalLevels:', totalLevels);
    const progress = await getProgressForSubject(subject);
    console.log('Progress data:', progress);
    const completedCount = progress.completedLevels.length;
    console.log('Completed count:', completedCount);
    const percentage = Math.round((completedCount / totalLevels) * 100);
    console.log('Calculated percentage:', percentage);
    return percentage;
  } catch (error) {
    console.error('Error getting completion percentage:', error);
    return 0;
  }
};

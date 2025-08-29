import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIENTS } from '../constants/colors';
import { SUBJECTS_DATA } from '../data/subjects';

const CustomDrawerContent = (props) => {
  const { navigation, state } = props;

  const renderSubjectItem = (subject) => {
    const isActive = state.index === SUBJECTS_DATA.findIndex(s => s.id === subject.id) + 1;
    const gradientColors = GRADIENTS[subject.color] || GRADIENTS.primary;
    
    return (
      <TouchableOpacity
        key={subject.id}
        style={[styles.subjectItem, isActive && styles.activeSubjectItem]}
        onPress={() => navigation.navigate(`Subject${subject.id}`)}
        activeOpacity={0.7}
      >
        {isActive && (
          <LinearGradient
            colors={gradientColors}
            style={styles.activeIndicator}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        )}
        <View style={styles.subjectItemContent}>
          <View style={[styles.subjectIcon, isActive && styles.activeSubjectIcon]}>
            <Icon 
              name={subject.icon} 
              size={20} 
              color={isActive ? COLORS.white : COLORS[subject.color]} 
            />
          </View>
          <Text style={[styles.subjectText, isActive && styles.activeSubjectText]}>
            {subject.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={GRADIENTS.primary}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Icon name="account" size={32} color={COLORS.white} />
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.userName}>Student</Text>
            <Text style={styles.userEmail}>student@psiesi.com</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Navigation Items */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Home */}
        <TouchableOpacity
          style={[styles.navItem, state.index === 0 && styles.activeNavItem]}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.7}
        >
          <View style={styles.navItemContent}>
            <Icon 
              name="home" 
              size={24} 
              color={state.index === 0 ? COLORS.white : COLORS.textPrimary} 
            />
            <Text style={[styles.navText, state.index === 0 && styles.activeNavText]}>
              Home
            </Text>
          </View>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Subjects</Text>
        </View>

        {/* Subjects */}
        {SUBJECTS_DATA.map(renderSubjectItem)}

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.bottomItem} activeOpacity={0.7}>
            <Icon name="cog" size={20} color={COLORS.textSecondary} />
            <Text style={styles.bottomText}>Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.bottomItem} activeOpacity={0.7}>
            <Icon name="help-circle" size={20} color={COLORS.textSecondary} />
            <Text style={styles.bottomText}>Help & Support</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.bottomItem} activeOpacity={0.7}>
            <Icon name="information" size={20} color={COLORS.textSecondary} />
            <Text style={styles.bottomText}>About</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.9,
  },
  content: {
    flex: 1,
  },
  navItem: {
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
  },
  activeNavItem: {
    backgroundColor: COLORS.primary,
  },
  navItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  navText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginLeft: 12,
  },
  activeNavText: {
    color: COLORS.white,
  },
  divider: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  dividerText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  subjectItem: {
    marginHorizontal: 16,
    marginVertical: 2,
    borderRadius: 12,
    position: 'relative',
  },
  activeSubjectItem: {
    backgroundColor: COLORS.grayLight,
  },
  activeIndicator: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  subjectItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingLeft: 16,
  },
  subjectIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.grayLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activeSubjectIcon: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
  },
  subjectText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textPrimary,
    flex: 1,
  },
  activeSubjectText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  bottomSection: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  bottomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 2,
  },
  bottomText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginLeft: 12,
  },
});

export default CustomDrawerContent;

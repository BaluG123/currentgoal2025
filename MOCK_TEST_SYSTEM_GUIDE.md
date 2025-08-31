# Mock Test System - Comprehensive Guide

## Overview
The Mock Test System is a comprehensive feature designed to help users prepare for government examinations through realistic practice tests. It simulates actual exam conditions with proper timing, scoring, and detailed analysis.

## Features

### 🎯 **Test Structure**
- **100 Questions per test** with **150 total marks**
- **90-minute duration** with countdown timer
- **Negative marking**: -0.25 marks for wrong answers
- **No penalty** for unattempted questions
- **Real-time progress tracking**

### 📊 **Scoring System**
- **Correct Answer**: +1.5 marks
- **Wrong Answer**: -0.25 marks (negative marking)
- **Unattempted**: 0 marks
- **Final Score**: Cannot go below 0

### 🏷️ **Test Categories**
1. **UPSC** - General Studies
2. **KPSC** - Karnataka PSC specific
3. **Banking** - Banking & Finance
4. **SSC** - Staff Selection Commission

### 📱 **User Interface Features**

#### **Mock Test List Screen**
- Category-based filtering (All, UPSC, KPSC, Banking, SSC)
- Test cards showing:
  - Title and subject
  - Difficulty level
  - Topics covered
  - Duration and marks
  - Category badges with color coding

#### **Test Instructions Screen**
- Comprehensive test overview
- Detailed instructions
- Topics covered
- Test rules and scoring
- Confirmation checkbox before starting

#### **Test Taking Screen**
- **Timer display** with warning colors (turns yellow at 5 minutes)
- **Progress bar** showing completion
- **Question navigation** (Previous/Next)
- **Question palette** for quick navigation
- **Answer selection** with visual feedback
- **Auto-submit** when time expires
- **Leave confirmation** to prevent accidental exits

#### **Results Screen**
- **Performance summary** with score and percentage
- **Grade system** (A+, A, B+, B, C+, C, D)
- **Performance rating** (Excellent, Good, Average, Needs Improvement)
- **Detailed statistics** (Correct, Wrong, Unattempted)
- **Question-wise analysis** with:
  - Your answers vs. correct answers
  - Explanations for each question
  - Topic-wise breakdown
- **Action buttons** for review and next steps

## Technical Implementation

### **Data Structure**

#### **Mock Test Object**
```javascript
{
  id: 'mock_1',
  title: 'UPSC Prelims Mock Test 1',
  subject: 'General Studies',
  description: 'Comprehensive mock test...',
  totalQuestions: 100,
  totalMarks: 150,
  duration: 90, // minutes
  negativeMarks: 0.25,
  difficulty: 'Medium',
  category: 'UPSC',
  instructions: [...],
  topics: [...],
  isActive: true,
  createdAt: '2025-01-15'
}
```

#### **Question Object**
```javascript
{
  id: 1,
  question: 'Question text...',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer: 1, // Index of correct option
  explanation: 'Detailed explanation...',
  topic: 'Polity',
  difficulty: 'Medium'
}
```

#### **Results Object**
```javascript
{
  correctAnswers: 75,
  wrongAnswers: 20,
  unattempted: 5,
  totalScore: 108.75,
  percentage: 72.5,
  maxPossibleScore: 150
}
```

### **Key Functions**

#### **Score Calculation**
```javascript
export const calculateMockTestScore = (answers, questions, negativeMarks = 0.25) => {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let unattempted = 0;
  let totalScore = 0;

  questions.forEach((question, index) => {
    const userAnswer = answers[index];
    
    if (userAnswer === undefined || userAnswer === null) {
      unattempted++;
    } else if (userAnswer === question.correctAnswer) {
      correctAnswers++;
      totalScore += 1.5; // Each correct answer gives 1.5 marks
    } else {
      wrongAnswers++;
      totalScore -= negativeMarks; // Negative marking
    }
  });

  return {
    correctAnswers,
    wrongAnswers,
    unattempted,
    totalScore: Math.max(0, totalScore), // Score cannot be negative
    percentage: (totalScore / 150) * 100,
    maxPossibleScore: 150
  };
};
```

## User Experience Flow

### 1. **Access Mock Tests**
- Navigate to Home Screen
- Click on "Mock Tests" section
- View available tests by category

### 2. **Select and Start Test**
- Choose a mock test
- Read comprehensive instructions
- Confirm understanding with checkbox
- Start the test

### 3. **Take the Test**
- Answer questions with multiple choice options
- Navigate between questions using Previous/Next
- Use question palette for quick navigation
- Monitor time remaining
- Submit when ready or wait for auto-submit

### 4. **View Results**
- See overall performance summary
- Review detailed statistics
- Analyze question-wise performance
- View correct answers and explanations
- Take another test or return home

## Customization Options

### **Adding New Mock Tests**
1. Add test data to `MOCK_TESTS_DATA` array
2. Create question set using `MOCK_TEST_X_QUESTIONS` format
3. Update `getMockTestQuestions()` function
4. Test the new mock test

### **Modifying Scoring**
- Adjust marks per question in `calculateMockTestScore()`
- Change negative marking percentage
- Modify time duration per test

### **Adding New Categories**
1. Add category to categories array in `MockTestListScreen`
2. Update `getCategoryColor()` function
3. Add category-specific styling

## Best Practices

### **For Users**
- Read all instructions before starting
- Manage time effectively (90 minutes for 100 questions)
- Use question palette for navigation
- Review answers before final submission
- Learn from explanations in results

### **For Developers**
- Maintain consistent data structure
- Handle edge cases (no answers, time expiry)
- Provide clear user feedback
- Ensure responsive design
- Test timer accuracy

## Future Enhancements

### **Planned Features**
- **Performance Analytics**: Track progress over time
- **Custom Tests**: User-created test sets
- **Offline Mode**: Download tests for offline use
- **Social Features**: Compare scores with peers
- **Advanced Analytics**: Topic-wise performance breakdown
- **Test Scheduling**: Plan test sessions
- **Performance Reports**: Detailed PDF reports

### **Technical Improvements**
- **Caching**: Store test data locally
- **Performance**: Optimize large question sets
- **Accessibility**: Screen reader support
- **Internationalization**: Multi-language support

## Troubleshooting

### **Common Issues**
1. **Timer not working**: Check interval cleanup in useEffect
2. **Navigation errors**: Verify screen names in navigation stack
3. **Score calculation**: Ensure negative marking logic is correct
4. **Performance issues**: Optimize large question lists

### **Testing**
- Test with different answer combinations
- Verify timer accuracy
- Check navigation flow
- Validate score calculations
- Test edge cases (no answers, all wrong, etc.)

## Conclusion

The Mock Test System provides a comprehensive, realistic exam preparation experience that helps users:
- **Practice** under real exam conditions
- **Learn** from detailed explanations
- **Track** their performance over time
- **Improve** through targeted practice

This system is designed to be scalable, maintainable, and user-friendly while providing valuable insights for exam preparation.

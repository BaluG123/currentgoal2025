// NCERT mock data (Classes 6–12) for key competitive subjects

const SUBJECT_KEYS = ['Polity', 'History', 'Geography', 'Economics', 'Science', 'Environment'];
const CLASSES = ['6','7','8','9','10','11','12'];

// Build minimal mock quizzes: 5 levels per class per subject
const NCERT_DATA = {};
SUBJECT_KEYS.forEach((subject) => {
  NCERT_DATA[subject] = {};
  CLASSES.forEach((klass) => {
    NCERT_DATA[subject][klass] = Array.from({ length: 5 }).map((_, idx) => {
      const level = idx + 1;
      return {
        level,
        difficulty: level <= 2 ? 'Easy' : level <= 4 ? 'Medium' : 'Hard',
        question: `${subject} • Class ${klass} • Level ${level}: Sample question?`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: 1,
        explanation: `Mock explanation for ${subject} Class ${klass} Level ${level}.`,
      };
    });
  });
});

export const getNCERTTotalLevels = (subject, klass) => {
  try {
    const arr = NCERT_DATA?.[subject]?.[String(klass)] || [];
    return arr.length;
  } catch (e) {
    return 0;
  }
};

export const getNCERTQuiz = (subject, klass, level) => {
  try {
    const arr = NCERT_DATA?.[subject]?.[String(klass)] || [];
    return arr.find((q) => q.level === Number(level));
  } catch (e) {
    return null;
  }
};

export const getNCERTSubjects = () => SUBJECT_KEYS.slice();
export const getNCERTClasses = () => CLASSES.slice();



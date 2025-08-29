// Subject title mapping to ensure consistency between subjects and quiz data
export const SUBJECT_MAPPING = {
  'History': 'History',
  'Geography': 'Geography',
  'Political Science': 'Political Science',
  'Economics': 'Economics',
  'Science': 'Science',
  'Current Affairs': 'Current Affairs',
  'Culture & Society': 'Culture & Society',
  'Technology & Development': 'Technology & Development',
  'Language & Communication': 'Language & Communication',
};

// Function to get the correct subject title for quiz data
export const getQuizSubjectTitle = (subjectTitle) => {
  console.log('Mapping subject title:', subjectTitle);
  
  // Try exact match first
  if (SUBJECT_MAPPING[subjectTitle]) {
    return SUBJECT_MAPPING[subjectTitle];
  }
  
  // Try case insensitive match
  const mappedTitle = Object.keys(SUBJECT_MAPPING).find(key => 
    key.toLowerCase() === subjectTitle.toLowerCase()
  );
  
  if (mappedTitle) {
    console.log('Found mapped title:', mappedTitle);
    return mappedTitle;
  }
  
  console.log('No mapping found for:', subjectTitle);
  return subjectTitle; // Return original if no mapping found
};

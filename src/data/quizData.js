// Sample quiz data structure - you can replace this with your actual JSON files
export const QUIZ_DATA = {
  History: [
    {
      level: 1,
      mainsubject: "History",
      question: "Which civilization is known as the 'Indus Valley Civilization'?",
      options: [
        "Harappan Civilization",
        "Mesopotamian Civilization",
        "Egyptian Civilization",
        "Chinese Civilization"
      ],
      correctAnswer: 1,
      explanation: "The Indus Valley Civilization is also known as the Harappan Civilization, named after the first site discovered at Harappa.",
      difficulty: "Easy",
      hint: "Think about the first archaeological site discovered"
    },
    {
      level: 2,
      mainsubject: "History",
      question: "Who was the founder of the Mauryan Empire?",
      options: [
        "Ashoka",
        "Chandragupta Maurya",
        "Bindusara",
        "Samprati"
      ],
      correctAnswer: 2,
      explanation: "Chandragupta Maurya founded the Mauryan Empire in 322 BCE with the help of his mentor Chanakya.",
      difficulty: "Medium",
      hint: "He was guided by a famous teacher"
    },
    {
      level: 3,
      mainsubject: "History",
      question: "Which emperor is known for spreading Buddhism?",
      options: [
        "Chandragupta Maurya",
        "Ashoka",
        "Bindusara",
        "Samprati"
      ],
      correctAnswer: 2,
      explanation: "Ashoka is known for spreading Buddhism after the Kalinga war and his conversion to Buddhism.",
      difficulty: "Medium",
      hint: "Think about the emperor who changed after a war"
    },
    {
      level: 4,
      mainsubject: "History",
      question: "Which dynasty ruled during the Golden Age of India?",
      options: [
        "Mauryan Dynasty",
        "Gupta Dynasty",
        "Kushan Dynasty",
        "Satavahana Dynasty"
      ],
      correctAnswer: 2,
      explanation: "The Gupta Dynasty ruled during the Golden Age of India, known for advancements in art, science, and literature.",
      difficulty: "Easy",
      hint: "Think about the period of great cultural achievements"
    },
    {
      level: 5,
      mainsubject: "History",
      question: "Who was the first Mughal emperor of India?",
      options: [
        "Akbar",
        "Babur",
        "Humayun",
        "Jahangir"
      ],
      correctAnswer: 2,
      explanation: "Babur was the first Mughal emperor who established the Mughal Empire in India in 1526.",
      difficulty: "Easy",
      hint: "Think about the founder of the Mughal Empire"
    }
  ],
  Geography: [
    {
      level: 1,
      mainsubject: "Geography",
      question: "Which is the highest peak in India?",
      options: [
        "Mount Everest",
        "K2",
        "Kangchenjunga",
        "Nanda Devi"
      ],
      correctAnswer: 2,
      explanation: "K2 (Godwin-Austen) is the highest peak in India at 8,611 meters, located in the Karakoram range.",
      difficulty: "Easy",
      hint: "It's in the northernmost part of India"
    },
    {
      level: 2,
      mainsubject: "Geography",
      question: "Which river is known as the 'Sorrow of Bengal'?",
      options: [
        "Ganga",
        "Brahmaputra",
        "Damodar",
        "Hooghly"
      ],
      correctAnswer: 3,
      explanation: "The Damodar River is called the 'Sorrow of Bengal' due to its frequent flooding in the region.",
      difficulty: "Medium",
      hint: "Think about natural disasters"
    }
  ],
  "Political Science": [
    {
      level: 1,
      mainsubject: "Political Science",
      question: "Statement I: The President of India is the Supreme Commander of the Armed Forces. \nStatement II: The Prime Minister is directly elected by the people of India.",
      options: [
        "Both statements are correct",
        "Only Statement I is correct",
        "Only Statement II is correct",
        "Both are incorrect"
      ],
      correctAnswer: 2,
      explanation: "Only Statement I is correct. The Prime Minister is indirectly elected.",
      difficulty: "Medium",
      hint: "Check the election process for Prime Minister"
    },
    {
      level: 2,
      mainsubject: "Political Science",
      question: "How many fundamental rights are guaranteed by the Indian Constitution?",
      options: [
        "5",
        "6",
        "7",
        "8"
      ],
      correctAnswer: 2,
      explanation: "Originally there were 7 fundamental rights, but after the 44th Amendment, Right to Property was removed from fundamental rights.",
      difficulty: "Easy",
      hint: "Count the basic rights every citizen has"
    }
  ],
  Economics: [
    {
      level: 1,
      mainsubject: "Economics",
      question: "What does GDP stand for?",
      options: [
        "Gross Domestic Product",
        "Gross Development Plan",
        "General Domestic Policy",
        "Global Development Program"
      ],
      correctAnswer: 1,
      explanation: "GDP stands for Gross Domestic Product, which measures the total value of goods and services produced in a country.",
      difficulty: "Easy",
      hint: "Think about economic measurement"
    },
    {
      level: 2,
      mainsubject: "Economics",
      question: "Which of the following is NOT a function of RBI?",
      options: [
        "Monetary Policy",
        "Banker to Government",
        "Printing Currency Notes",
        "Direct Lending to Public"
      ],
      correctAnswer: 4,
      explanation: "RBI does not directly lend to the public. It regulates banks and provides banking services to the government.",
      difficulty: "Medium",
      hint: "RBI is a central bank, not a commercial bank"
    }
  ],
  Science: [
    {
      level: 1,
      mainsubject: "Science",
      question: "What is the chemical symbol for gold?",
      options: [
        "Ag",
        "Au",
        "Fe",
        "Cu"
      ],
      correctAnswer: 2,
      explanation: "Au is the chemical symbol for gold, derived from the Latin word 'Aurum'.",
      difficulty: "Easy",
      hint: "Think about the Latin name"
    },
    {
      level: 2,
      mainsubject: "Science",
      question: "Which organ pumps blood throughout the body?",
      options: [
        "Lungs",
        "Heart",
        "Liver",
        "Kidney"
      ],
      correctAnswer: 2,
      explanation: "The heart is responsible for pumping blood throughout the body via the circulatory system.",
      difficulty: "Easy",
      hint: "It's the most important muscle in the body"
    }
  ],
  "Current Affairs": [
    {
      level: 1,
      mainsubject: "Current Affairs",
      question: "Which country hosted the G20 Summit in 2023?",
      options: [
        "India",
        "Indonesia",
        "Italy",
        "Japan"
      ],
      correctAnswer: 1,
      explanation: "India hosted the G20 Summit in 2023, with the theme 'Vasudhaiva Kutumbakam' (One Earth, One Family, One Future).",
      difficulty: "Easy",
      hint: "Think about recent international events"
    },
    {
      level: 2,
      mainsubject: "Current Affairs",
      question: "What is the name of India's first solar mission?",
      options: [
        "Chandrayaan",
        "Mangalyaan",
        "Aditya-L1",
        "Gaganyaan"
      ],
      correctAnswer: 3,
      explanation: "Aditya-L1 is India's first solar mission launched by ISRO to study the Sun.",
      difficulty: "Medium",
      hint: "Aditya means Sun in Sanskrit"
    }
  ],
  "Culture & Society": [
    {
      level: 1,
      mainsubject: "Culture & Society",
      question: "Which classical dance form originated in Kerala?",
      options: [
        "Bharatanatyam",
        "Kathakali",
        "Odissi",
        "Kuchipudi"
      ],
      correctAnswer: 2,
      explanation: "Kathakali is a classical dance form that originated in Kerala, known for its elaborate costumes and makeup.",
      difficulty: "Easy",
      hint: "Think about the southern state"
    },
    {
      level: 2,
      mainsubject: "Culture & Society",
      question: "Who wrote the famous Kannada poem 'Vachana'?",
      options: [
        "Kuvempu",
        "Basavanna",
        "Bendre",
        "Pampa"
      ],
      correctAnswer: 2,
      explanation: "Basavanna was a 12th-century philosopher and poet who wrote Vachanas, a form of Kannada poetry.",
      difficulty: "Medium",
      hint: "He was a social reformer"
    }
  ],
  "Technology & Development": [
    {
      level: 1,
      mainsubject: "Technology & Development",
      question: "What does AI stand for in technology?",
      options: [
        "Artificial Intelligence",
        "Advanced Internet",
        "Automated Information",
        "Applied Innovation"
      ],
      correctAnswer: 1,
      explanation: "AI stands for Artificial Intelligence, which refers to machines that can perform tasks that typically require human intelligence.",
      difficulty: "Easy",
      hint: "Think about smart machines"
    },
    {
      level: 2,
      mainsubject: "Technology & Development",
      question: "Which Indian city is known as the 'Silicon Valley of India'?",
      options: [
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Hyderabad"
      ],
      correctAnswer: 3,
      explanation: "Bangalore (Bengaluru) is known as the 'Silicon Valley of India' due to its large IT industry and tech companies.",
      difficulty: "Easy",
      hint: "Think about IT companies"
    }
  ],
  "Language & Communication": [
    {
      level: 1,
      mainsubject: "Language & Communication",
      question: "What is the plural form of 'child'?",
      options: [
        "Childs",
        "Children",
        "Childes",
        "Child's"
      ],
      correctAnswer: 2,
      explanation: "The plural form of 'child' is 'children', which is an irregular plural form in English.",
      difficulty: "Easy",
      hint: "It's an irregular plural"
    },
    {
      level: 2,
      mainsubject: "Language & Communication",
      question: "Which of the following is a synonym for 'beautiful'?",
      options: [
        "Ugly",
        "Pretty",
        "Dark",
        "Small"
      ],
      correctAnswer: 2,
      explanation: "'Pretty' is a synonym for 'beautiful', both meaning attractive or pleasing to look at.",
      difficulty: "Easy",
      hint: "Think about attractive appearance"
    }
  ]
};

// Helper function to get quiz data for a specific subject
export const getQuizDataForSubject = (subject) => {
  // Reduced logging for performance
  
  // Try exact match first
  if (QUIZ_DATA[subject]) {
    return QUIZ_DATA[subject];
  }
  
  // Try to find a match (case insensitive)
  const subjectKey = Object.keys(QUIZ_DATA).find(key => 
    key.toLowerCase() === subject.toLowerCase()
  );
  
  if (subjectKey) {
    return QUIZ_DATA[subjectKey];
  }
  
  return [];
};

// Helper function to get total levels for a subject
export const getTotalLevelsForSubject = (subject) => {
  const data = getQuizDataForSubject(subject);
  return data.length;
};

// Helper function to get quiz for a specific level
export const getQuizForLevel = (subject, level) => {
  const data = getQuizDataForSubject(subject);
  return data.find(quiz => quiz.level === level);
};

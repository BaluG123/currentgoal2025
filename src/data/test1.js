//**********test 1 easy one */
export const MOCK_TEST_1_QUESTIONS = [
  // Previous questions (id 1-15)
  {
    id: 1,
    question: 'Which of the following is NOT a fundamental right under the Indian Constitution?',
    options: [
      'Right to Equality',
      'Right to Property',
      'Right to Freedom of Religion',
      'Right to Constitutional Remedies'
    ],
    correctAnswer: 1,
    explanation: 'Right to Property was removed from fundamental rights by the 44th Constitutional Amendment Act, 1978. It is now a legal right under Article 300A.',
    topic: 'Polity',
    difficulty: 'Medium'
  },
  {
    id: 2,
    question: 'The Indus Valley Civilization was discovered in which year?',
    options: [
      '1921',
      '1922',
      '1923',
      '1924'
    ],
    correctAnswer: 0,
    explanation: 'The Indus Valley Civilization was discovered in 1921 by Dayaram Sahni at Harappa. Later, R.D. Banerjee discovered Mohenjo-daro in 1922.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 3,
    question: 'Which of the following rivers does NOT flow through Karnataka?',
    options: [
      'Kaveri',
      'Tungabhadra',
      'Godavari',
      'Krishna'
    ],
    correctAnswer: 2,
    explanation: 'Godavari flows through Maharashtra, Telangana, Andhra Pradesh, and Odisha. It does not flow through Karnataka.',
    topic: 'Geography',
    difficulty: 'Medium'
  },
  {
    id: 4,
    question: 'The "Green Revolution" in India was primarily associated with which crop?',
    options: [
      'Rice',
      'Wheat',
      'Pulses',
      'Sugarcane'
    ],
    correctAnswer: 1,
    explanation: 'The Green Revolution in India was primarily associated with wheat production. Dr. M.S. Swaminathan is known as the "Father of Green Revolution in India".',
    topic: 'Economics',
    difficulty: 'Easy'
  },
  {
    id: 5,
    question: 'Which of the following is NOT a greenhouse gas?',
    options: [
      'Carbon Dioxide',
      'Methane',
      'Nitrogen',
      'Water Vapor'
    ],
    correctAnswer: 2,
    explanation: 'Nitrogen (N₂) is not a greenhouse gas. The main greenhouse gases are carbon dioxide, methane, water vapor, nitrous oxide, and fluorinated gases.',
    topic: 'Environment',
    difficulty: 'Medium'
  },
  {
    id: 6,
    question: 'Who was the first woman President of India?',
    options: [
      'Sarojini Naidu',
      'Indira Gandhi',
      'Pratibha Patil',
      'Sonia Gandhi'
    ],
    correctAnswer: 2,
    explanation: 'Pratibha Patil served as the 12th President of India from 2007 to 2012 and was the first woman to hold the office.',
    topic: 'Polity',
    difficulty: 'Easy'
  },
  {
    id: 7,
    question: 'Which Indian state is known as the "Land of Five Rivers"?',
    options: [
      'Punjab',
      'Haryana',
      'Uttar Pradesh',
      'Bihar'
    ],
    correctAnswer: 0,
    explanation: 'Punjab is known as the "Land of Five Rivers" due to the five major rivers: Jhelum, Chenab, Ravi, Sutlej, and Beas.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 8,
    question: 'Who wrote the national anthem of India, "Jana Gana Mana"?',
    options: [
      'Rabindranath Tagore',
      'Bankim Chandra Chattopadhyay',
      'Sarojini Naidu',
      'Subhas Chandra Bose'
    ],
    correctAnswer: 0,
    explanation: 'Rabindranath Tagore wrote "Jana Gana Mana," which was adopted as the national anthem of India in 1950.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 9,
    question: 'Which of the following is NOT a classical dance form of India?',
    options: [
      'Bharatanatyam',
      'Kathak',
      'Bhangra',
      'Odissi'
    ],
    correctAnswer: 2,
    explanation: 'Bhangra is a folk dance from Punjab, while Bharatanatyam, Kathak, and Odissi are classical dance forms of India.',
    topic: 'Culture',
    difficulty: 'Medium'
  },
  {
    id: 10,
    question: 'The "Chipko Movement" is associated with which of the following?',
    options: [
      'Water Conservation',
      'Forest Conservation',
      'Wildlife Protection',
      'Air Pollution Control'
    ],
    correctAnswer: 1,
    explanation: 'The Chipko Movement was a forest conservation movement in India, where people hugged trees to prevent them from being cut down.',
    topic: 'Environment',
    difficulty: 'Medium'
  },
  {
    id: 11,
    question: 'Which planet is known as the "Red Planet"?',
    options: [
      'Venus',
      'Mars',
      'Jupiter',
      'Saturn'
    ],
    correctAnswer: 1,
    explanation: 'Mars is often called the "Red Planet" due to its reddish appearance, caused by iron oxide (rust) on its surface.',
    topic: 'Science',
    difficulty: 'Easy'
  },
  {
    id: 12,
    question: 'Who is known as the "Father of the Indian Constitution"?',
    options: [
      'Jawaharlal Nehru',
      'B.R. Ambedkar',
      'Mahatma Gandhi',
      'Sardar Patel'
    ],
    correctAnswer: 1,
    explanation: 'Dr. B.R. Ambedkar is known as the "Father of the Indian Constitution" for his pivotal role in drafting it.',
    topic: 'Polity',
    difficulty: 'Easy'
  },
  {
    id: 13,
    question: 'Which of the following is the largest freshwater lake in India?',
    options: [
      'Dal Lake',
      'Wular Lake',
      'Chilika Lake',
      'Vembanad Lake'
    ],
    correctAnswer: 1,
    explanation: 'Wular Lake, located in Jammu and Kashmir, is the largest freshwater lake in India.',
    topic: 'Geography',
    difficulty: 'Medium'
  },
  {
    id: 14,
    question: 'The "Battle of Plassey" was fought in which year?',
    options: [
      '1757',
      '1764',
      '1857',
      '1947'
    ],
    correctAnswer: 0,
    explanation: 'The Battle of Plassey was fought on June 23, 1757, and marked the beginning of British rule in India.',
    topic: 'History',
    difficulty: 'Medium'
  },
  {
    id: 15,
    question: 'Which of the following is NOT a UNESCO World Heritage Site in India?',
    options: [
      'Taj Mahal',
      'Hampi',
      'Gateway of India',
      'Khajuraho'
    ],
    correctAnswer: 2,
    explanation: 'The Gateway of India is not a UNESCO World Heritage Site, while Taj Mahal, Hampi, and Khajuraho are.',
    topic: 'Culture',
    difficulty: 'Medium'
  },
  {
    id: 16,
    question: 'Which Indian city is known as the "Pink City"?',
    options: [
      'Jaipur',
      'Jodhpur',
      'Udaipur',
      'Bikaner'
    ],
    correctAnswer: 0,
    explanation: 'Jaipur is known as the "Pink City" due to the pink-colored buildings in its old city.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 17,
    question: 'Who was the first Indian to win a Nobel Prize?',
    options: [
      'Rabindranath Tagore',
      'C.V. Raman',
      'Mother Teresa',
      'Amartya Sen'
    ],
    correctAnswer: 0,
    explanation: 'Rabindranath Tagore was the first Indian to win a Nobel Prize, in Literature, in 1913.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 18,
    question: 'Which of the following is NOT a type of coal?',
    options: [
      'Anthracite',
      'Bituminous',
      'Lignite',
      'Diamond'
    ],
    correctAnswer: 3,
    explanation: 'Diamond is not a type of coal. Anthracite, Bituminous, and Lignite are types of coal.',
    topic: 'Science',
    difficulty: 'Easy'
  },
  {
    id: 19,
    question: 'Which Indian state has the longest coastline?',
    options: [
      'Maharashtra',
      'Kerala',
      'Gujarat',
      'Tamil Nadu'
    ],
    correctAnswer: 2,
    explanation: 'Gujarat has the longest coastline among Indian states, stretching about 1,600 km.',
    topic: 'Geography',
    difficulty: 'Medium'
  },
  {
    id: 20,
    question: 'Who is known as the "Iron Man of India"?',
    options: [
      'Jawaharlal Nehru',
      'Sardar Vallabhbhai Patel',
      'Subhas Chandra Bose',
      'Bhagat Singh'
    ],
    correctAnswer: 1,
    explanation: 'Sardar Vallabhbhai Patel is known as the "Iron Man of India" for his role in integrating princely states into the Indian Union.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 21,
    question: 'Which of the following is the largest planet in our solar system?',
    options: [
      'Earth',
      'Mars',
      'Jupiter',
      'Saturn'
    ],
    correctAnswer: 2,
    explanation: 'Jupiter is the largest planet in our solar system, with a diameter of about 142,984 km.',
    topic: 'Science',
    difficulty: 'Easy'
  },
  {
    id: 22,
    question: 'Which Indian state is the largest producer of tea?',
    options: [
      'Kerala',
      'Assam',
      'Tamil Nadu',
      'West Bengal'
    ],
    correctAnswer: 1,
    explanation: 'Assam is the largest producer of tea in India, known for its strong and malty Assam tea.',
    topic: 'Economics',
    difficulty: 'Easy'
  },
  {
    id: 23,
    question: 'Which of the following is NOT a fundamental duty under the Indian Constitution?',
    options: [
      'To abide by the Constitution and respect its ideals',
      'To pay taxes',
      'To protect and improve the natural environment',
      'To develop scientific temper'
    ],
    correctAnswer: 1,
    explanation: 'Paying taxes is a legal obligation, not a fundamental duty under the Indian Constitution.',
    topic: 'Polity',
    difficulty: 'Medium'
  },
  {
    id: 24,
    question: 'Which of the following rivers is known as the "Sorrow of Bihar"?',
    options: [
      'Ganges',
      'Yamuna',
      'Kosi',
      'Damodar'
    ],
    correctAnswer: 2,
    explanation: 'The Kosi River is known as the "Sorrow of Bihar" due to its frequent and devastating floods.',
    topic: 'Geography',
    difficulty: 'Medium'
  },
  {
    id: 25,
    question: 'Who was the first Indian to travel to space?',
    options: [
      'Rakesh Sharma',
      'Kalpana Chawla',
      'Sunita Williams',
      'Yuri Gagarin'
    ],
    correctAnswer: 0,
    explanation: 'Rakesh Sharma was the first Indian to travel to space, aboard the Soviet spacecraft Soyuz T-11 in 1984.',
    topic: 'Science',
    difficulty: 'Easy'
  },
  {
    id: 26,
    question: 'Which of the following is the national animal of India?',
    options: [
      'Lion',
      'Tiger',
      'Elephant',
      'Peacock'
    ],
    correctAnswer: 1,
    explanation: 'The Bengal Tiger is the national animal of India.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 27,
    question: 'Which Indian city is known as the "City of Joy"?',
    options: [
      'Mumbai',
      'Kolkata',
      'Delhi',
      'Chennai'
    ],
    correctAnswer: 1,
    explanation: 'Kolkata is often referred to as the "City of Joy" due to its vibrant cultural life and historical significance.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 28,
    question: 'Who composed the famous Indian epic "Ramayana"?',
    options: [
      'Valmiki',
      'Vyasa',
      'Tulsidas',
      'Kalidasa'
    ],
    correctAnswer: 0,
    explanation: 'The "Ramayana" was composed by the sage Valmiki.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 29,
    question: 'Which of the following is NOT a type of government in India?',
    options: [
      'Democracy',
      'Monarchy',
      'Federalism',
      'Republic'
    ],
    correctAnswer: 1,
    explanation: 'India is not a monarchy; it is a democratic republic with a federal structure.',
    topic: 'Polity',
    difficulty: 'Easy'
  },
  {
    id: 30,
    question: 'Which of the following is the largest desert in the world?',
    options: [
      'Thar Desert',
      'Sahara Desert',
      'Gobi Desert',
      'Kalahari Desert'
    ],
    correctAnswer: 1,
    explanation: 'The Sahara Desert is the largest desert in the world, covering much of North Africa.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 31,
    question: 'Who was the founder of the Maurya Empire?',
    options: [
      'Ashoka',
      'Chandragupta Maurya',
      'Bindusara',
      'Samudragupta'
    ],
    correctAnswer: 1,
    explanation: 'Chandragupta Maurya founded the Maurya Empire in 322 BCE.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 32,
    question: 'Which of the following is the largest ocean in the world?',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean',
      'Pacific Ocean'
    ],
    correctAnswer: 3,
    explanation: 'The Pacific Ocean is the largest ocean in the world, covering about 63 million square miles.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 33,
    question: 'Which Indian state is known as the "Land of the Rising Sun"?',
    options: [
      'Arunachal Pradesh',
      'Manipur',
      'Mizoram',
      'Nagaland'
    ],
    correctAnswer: 0,
    explanation: 'Arunachal Pradesh is known as the "Land of the Rising Sun" because it is the first place in India to see the sunrise.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 34,
    question: 'Who is known as the "Nightingale of India"?',
    options: [
      'Lata Mangeshkar',
      'Sarojini Naidu',
      'Indira Gandhi',
      'Mother Teresa'
    ],
    correctAnswer: 1,
    explanation: 'Sarojini Naidu is known as the "Nightingale of India" for her poetic skills and contributions to literature.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 35,
    question: 'Which of the following is NOT a type of rock?',
    options: [
      'Igneous',
      'Sedimentary',
      'Metamorphic',
      'Volcanic'
    ],
    correctAnswer: 3,
    explanation: 'Volcanic is not a type of rock; it is a process related to the formation of igneous rocks.',
    topic: 'Science',
    difficulty: 'Medium'
  },
  {
    id: 36,
    question: 'Which Indian state is the largest producer of coffee?',
    options: [
      'Kerala',
      'Karnataka',
      'Tamil Nadu',
      'Andhra Pradesh'
    ],
    correctAnswer: 1,
    explanation: 'Karnataka is the largest producer of coffee in India, accounting for about 70% of the total production.',
    topic: 'Economics',
    difficulty: 'Easy'
  },
  {
    id: 37,
    question: 'Which of the following is the national bird of India?',
    options: [
      'Peacock',
      'Parrot',
      'Sparrow',
      'Pigeon'
    ],
    correctAnswer: 0,
    explanation: 'The Indian Peacock is the national bird of India.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 38,
    question: 'Which of the following is the largest continent in the world?',
    options: [
      'Africa',
      'Asia',
      'Europe',
      'North America'
    ],
    correctAnswer: 1,
    explanation: 'Asia is the largest continent in the world, covering about 30% of the Earth\'s land area.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 39,
    question: 'Who was the first Prime Minister of India?',
    options: [
      'Jawaharlal Nehru',
      'Lal Bahadur Shastri',
      'Indira Gandhi',
      'Morarji Desai'
    ],
    correctAnswer: 0,
    explanation: 'Jawaharlal Nehru was the first Prime Minister of India, serving from 1947 to 1964.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 40,
    question: 'Which of the following is the national flower of India?',
    options: [
      'Rose',
      'Lotus',
      'Marigold',
      'Jasmine'
    ],
    correctAnswer: 1,
    explanation: 'The Lotus is the national flower of India, symbolizing purity and beauty.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 41,
    question: 'Which Indian city is known as the "Silicon Valley of India"?',
    options: [
      'Hyderabad',
      'Bangalore',
      'Pune',
      'Chennai'
    ],
    correctAnswer: 1,
    explanation: 'Bangalore is known as the "Silicon Valley of India" due to its prominence in the IT industry.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 42,
    question: 'Who is known as the "Missile Man of India"?',
    options: [
      'A.P.J. Abdul Kalam',
      'Homi Bhabha',
      'Vikram Sarabhai',
      'C.V. Raman'
    ],
    correctAnswer: 0,
    explanation: 'Dr. A.P.J. Abdul Kalam is known as the "Missile Man of India" for his contributions to missile technology.',
    topic: 'Science',
    difficulty: 'Easy'
  },
  {
    id: 43,
    question: 'Which of the following is the largest river in India?',
    options: [
      'Ganges',
      'Yamuna',
      'Brahmaputra',
      'Godavari'
    ],
    correctAnswer: 0,
    explanation: 'The Ganges is the largest river in India, with a length of about 2,525 km.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 44,
    question: 'Which Indian state is known as the "Spice Garden of India"?',
    options: [
      'Kerala',
      'Karnataka',
      'Tamil Nadu',
      'Andhra Pradesh'
    ],
    correctAnswer: 0,
    explanation: 'Kerala is known as the "Spice Garden of India" due to its abundant production of spices like pepper, cardamom, and cloves.',
    topic: 'Economics',
    difficulty: 'Easy'
  },
  {
    id: 45,
    question: 'Which of the following is the national sport of India?',
    options: [
      'Cricket',
      'Hockey',
      'Football',
      'Badminton'
    ],
    correctAnswer: 1,
    explanation: 'Field Hockey is recognized as the national sport of India.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 46,
    question: 'Which of the following is the largest dam in India?',
    options: [
      'Bhakra Dam',
      'Hirakud Dam',
      'Tehri Dam',
      'Sardar Sarovar Dam'
    ],
    correctAnswer: 3,
    explanation: 'The Sardar Sarovar Dam is the largest dam in India, located on the Narmada River in Gujarat.',
    topic: 'Geography',
    difficulty: 'Medium'
  },
  {
    id: 47,
    question: 'Who was the first Indian woman to win an Olympic medal?',
    options: [
      'P.T. Usha',
      'Karnam Malleswari',
      'Mary Kom',
      'Saina Nehwal'
    ],
    correctAnswer: 1,
    explanation: 'Karnam Malleswari was the first Indian woman to win an Olympic medal, a bronze in weightlifting at the 2000 Sydney Olympics.',
    topic: 'Sports',
    difficulty: 'Easy'
  },
  {
    id: 48,
    question: 'Which of the following is the largest state in India by area?',
    options: [
      'Maharashtra',
      'Madhya Pradesh',
      'Rajasthan',
      'Uttar Pradesh'
    ],
    correctAnswer: 2,
    explanation: 'Rajasthan is the largest state in India by area, covering about 342,239 square kilometers.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 49,
    question: 'Which of the following is the national tree of India?',
    options: [
      'Banyan',
      'Peepal',
      'Neem',
      'Mango'
    ],
    correctAnswer: 0,
    explanation: 'The Banyan tree is the national tree of India, known for its extensive branches and deep roots.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 50,
    question: 'Which Indian state is known as the "Land of Festivals"?',
    options: [
      'West Bengal',
      'Rajasthan',
      'Punjab',
      'Kerala'
    ],
    correctAnswer: 0,
    explanation: 'West Bengal is known as the "Land of Festivals" due to its numerous cultural and religious celebrations.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 51,
    question: 'Which of the following is the largest lake in India?',
    options: [
      'Dal Lake',
      'Wular Lake',
      'Chilika Lake',
      'Vembanad Lake'
    ],
    correctAnswer: 2,
    explanation: 'Chilika Lake is the largest lake in India, located in Odisha.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 52,
    question: 'Who was the first Indian to win a Nobel Prize in Physics?',
    options: [
      'C.V. Raman',
      'Subrahmanyan Chandrasekhar',
      'Amartya Sen',
      'Hargobind Khorana'
    ],
    correctAnswer: 0,
    explanation: 'C.V. Raman was the first Indian to win a Nobel Prize in Physics, in 1930, for his work on the scattering of light.',
    topic: 'Science',
    difficulty: 'Easy'
  },
  {
    id: 53,
    question: 'Which of the following is the national fruit of India?',
    options: [
      'Apple',
      'Banana',
      'Mango',
      'Grapes'
    ],
    correctAnswer: 2,
    explanation: 'The Mango is the national fruit of India, known for its sweetness and variety.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 54,
    question: 'Which Indian city is known as the "City of Lakes"?',
    options: [
      'Udaipur',
      'Jaipur',
      'Bhopal',
      'Srinagar'
    ],
    correctAnswer: 0,
    explanation: 'Udaipur is known as the "City of Lakes" due to its beautiful lakes and palaces.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 55,
    question: 'Who is known as the "Father of Indian Cinema"?',
    options: [
      'Dadasaheb Phalke',
      'Satyajit Ray',
      'Ritwik Ghatak',
      'Guru Dutt'
    ],
    correctAnswer: 0,
    explanation: 'Dadasaheb Phalke is known as the "Father of Indian Cinema" for directing India\'s first full-length feature film, Raja Harishchandra, in 1913.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 56,
    question: 'Which of the following is the largest island in India?',
    options: [
      'Andaman Island',
      'Nicobar Island',
      'Lakshadweep Island',
      'Majuli Island'
    ],
    correctAnswer: 0,
    explanation: 'The Andaman Island is the largest island in India, part of the Andaman and Nicobar Islands.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 57,
    question: 'Which of the following is the national river of India?',
    options: [
      'Ganges',
      'Yamuna',
      'Brahmaputra',
      'Godavari'
    ],
    correctAnswer: 0,
    explanation: 'The Ganges is recognized as the national river of India due to its cultural and spiritual significance.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 58,
    question: 'Which Indian state is known as the "Land of Temples"?',
    options: [
      'Tamil Nadu',
      'Uttar Pradesh',
      'Karnataka',
      'Odisha'
    ],
    correctAnswer: 0,
    explanation: 'Tamil Nadu is known as the "Land of Temples" due to its numerous ancient and historic temples.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 59,
    question: 'Which of the following is the largest waterfall in India?',
    options: [
      'Jog Falls',
      'Dudhsagar Falls',
      'Shivanasamudra Falls',
      'Athirappilly Falls'
    ],
    correctAnswer: 0,
    explanation: 'Jog Falls is the largest waterfall in India, located in Karnataka.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 60,
    question: 'Who was the first Indian to win a Grammy Award?',
    options: [
      'A.R. Rahman',
      'Zubin Mehta',
      'Ravi Shankar',
      'Lata Mangeshkar'
    ],
    correctAnswer: 2,
    explanation: 'Ravi Shankar was the first Indian to win a Grammy Award, in 1967, for Best Chamber Music Performance.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 61,
    question: 'Which of the following is the largest cave temple in India?',
    options: [
      'Ajanta Caves',
      'Ellora Caves',
      'Elephanta Caves',
      'Badami Caves'
    ],
    correctAnswer: 1,
    explanation: 'The Ellora Caves, located in Maharashtra, is the largest cave temple in India, featuring Hindu, Buddhist, and Jain monuments.',
    topic: 'Culture',
    difficulty: 'Medium'
  },
  {
    id: 62,
    question: 'Which Indian state is known as the "Land of Black Diamonds"?',
    options: [
      'Jharkhand',
      'Chhattisgarh',
      'West Bengal',
      'Odisha'
    ],
    correctAnswer: 0,
    explanation: 'Jharkhand is known as the "Land of Black Diamonds" due to its rich coal reserves.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 63,
    question: 'Which of the following is the national heritage animal of India?',
    options: [
      'Tiger',
      'Elephant',
      'Lion',
      'Rhinoceros'
    ],
    correctAnswer: 1,
    explanation: 'The Indian Elephant is the national heritage animal of India, symbolizing wisdom and strength.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 64,
    question: 'Which Indian city is known as the "Manchester of India"?',
    options: [
      'Ahmedabad',
      'Mumbai',
      'Kanpur',
      'Surat'
    ],
    correctAnswer: 0,
    explanation: 'Ahmedabad is known as the "Manchester of India" due to its thriving textile industry.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 65,
    question: 'Who is known as the "Grand Old Man of India"?',
    options: [
      'Dadabhai Naoroji',
      'Bal Gangadhar Tilak',
      'Gopal Krishna Gokhale',
      'Lala Lajpat Rai'
    ],
    correctAnswer: 0,
    explanation: 'Dadabhai Naoroji is known as the "Grand Old Man of India" for his contributions to the Indian independence movement.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 66,
    question: 'Which of the following is the largest mosque in India?',
    options: [
      'Jama Masjid',
      'Taj-ul-Masajid',
      'Mecca Masjid',
      'Charminar'
    ],
    correctAnswer: 1,
    explanation: 'Taj-ul-Masajid in Bhopal is the largest mosque in India, with a capacity to hold 175,000 people.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 67,
    question: 'Which Indian state is known as the "Land of White Elephants"?',
    options: [
      'Assam',
      'Kerala',
      'Karnataka',
      'Tamil Nadu'
    ],
    correctAnswer: 0,
    explanation: 'Assam is known as the "Land of White Elephants" due to its historical association with white elephants.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 68,
    question: 'Which of the following is the national aquatic animal of India?',
    options: [
      'Dolphin',
      'Shark',
      'Whale',
      'Turtle'
    ],
    correctAnswer: 0,
    explanation: 'The Ganges River Dolphin is the national aquatic animal of India.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 69,
    question: 'Which Indian city is known as the "Pearl City"?',
    options: [
      'Hyderabad',
      'Chennai',
      'Mumbai',
      'Kolkata'
    ],
    correctAnswer: 0,
    explanation: 'Hyderabad is known as the "Pearl City" due to its historic pearl trading industry.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 70,
    question: 'Who was the first Indian to win an individual Olympic gold medal?',
    options: [
      'Abhinav Bindra',
      'Leander Paes',
      'K.D. Jadhav',
      'Rajyavardhan Singh Rathore'
    ],
    correctAnswer: 0,
    explanation: 'Abhinav Bindra was the first Indian to win an individual Olympic gold medal, in the 10-meter air rifle event at the 2008 Beijing Olympics.',
    topic: 'Sports',
    difficulty: 'Easy'
  },
  {
    id: 71,
    question: 'Which of the following is the largest delta in the world?',
    options: [
      'Sunderbans Delta',
      'Mississippi Delta',
      'Nile Delta',
      'Amazon Delta'
    ],
    correctAnswer: 0,
    explanation: 'The Sunderbans Delta, formed by the Ganges and Brahmaputra rivers, is the largest delta in the world.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 72,
    question: 'Which Indian state is known as the "Land of Red Rivers and Blue Hills"?',
    options: [
      'Assam',
      'Meghalaya',
      'Manipur',
      'Nagaland'
    ],
    correctAnswer: 0,
    explanation: 'Assam is known as the "Land of Red Rivers and Blue Hills" due to its scenic landscapes and the Brahmaputra River.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 73,
    question: 'Which of the following is the national reptile of India?',
    options: [
      'Cobra',
      'King Cobra',
      'Gharial',
      'Monitor Lizard'
    ],
    correctAnswer: 1,
    explanation: 'The King Cobra is the national reptile of India, known for its size and venom.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 74,
    question: 'Which Indian city is known as the "Golden City"?',
    options: [
      'Jaisalmer',
      'Jodhpur',
      'Bikaner',
      'Udaipur'
    ],
    correctAnswer: 0,
    explanation: 'Jaisalmer is known as the "Golden City" due to its yellow sandstone architecture.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 75,
    question: 'Who is known as the "Saint of the Gutters"?',
    options: [
      'Mother Teresa',
      'Vinoba Bhave',
      'Baba Amte',
      'Anna Hazare'
    ],
    correctAnswer: 0,
    explanation: 'Mother Teresa is known as the "Saint of the Gutters" for her work with the poor and sick in Kolkata.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 76,
    question: 'Which of the following is the largest desert in India?',
    options: [
      'Thar Desert',
      'Rann of Kutch',
      'Ladakh Desert',
      'Spiti Valley'
    ],
    correctAnswer: 0,
    explanation: 'The Thar Desert is the largest desert in India, covering parts of Rajasthan and Gujarat.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 77,
    question: 'Which Indian state is known as the "Land of High Passes"?',
    options: [
      'Ladakh',
      'Himachal Pradesh',
      'Uttarakhand',
      'Sikkim'
    ],
    correctAnswer: 0,
    explanation: 'Ladakh is known as the "Land of High Passes" due to its high mountain passes and rugged terrain.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 78,
    question: 'Which of the following is the national game of India?',
    options: [
      'Cricket',
      'Hockey',
      'Kabaddi',
      'Badminton'
    ],
    correctAnswer: 1,
    explanation: 'Field Hockey is recognized as the national game of India.',
    topic: 'Sports',
    difficulty: 'Easy'
  },
  {
    id: 79,
    question: 'Which Indian city is known as the "City of Nawabs"?',
    options: [
      'Lucknow',
      'Hyderabad',
      'Bhopal',
      'Patna'
    ],
    correctAnswer: 0,
    explanation: 'Lucknow is known as the "City of Nawabs" due to its rich cultural heritage and history under the Nawabs of Awadh.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 80,
    question: 'Who was the first Indian to win the Booker Prize?',
    options: [
      'Salman Rushdie',
      'Arundhati Roy',
      'V.S. Naipaul',
      'Aravind Adiga'
    ],
    correctAnswer: 1,
    explanation: 'Arundhati Roy was the first Indian to win the Booker Prize, in 1997, for her novel "The God of Small Things".',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 81,
    question: 'Which of the following is the largest freshwater lake in Asia?',
    options: [
      'Dal Lake',
      'Wular Lake',
      'Chilika Lake',
      'Loktak Lake'
    ],
    correctAnswer: 1,
    explanation: 'Wular Lake, located in Jammu and Kashmir, is the largest freshwater lake in Asia.',
    topic: 'Geography',
    difficulty: 'Medium'
  },
  {
    id: 82,
    question: 'Which Indian state is known as the "Land of Forests"?',
    options: [
      'Madhya Pradesh',
      'Chhattisgarh',
      'Odisha',
      'Jharkhand'
    ],
    correctAnswer: 0,
    explanation: 'Madhya Pradesh is known as the "Land of Forests" due to its extensive forest cover.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 83,
    question: 'Which of the following is the national vegetable of India?',
    options: [
      'Potato',
      'Pumpkin',
      'Tomato',
      'Brinjal'
    ],
    correctAnswer: 1,
    explanation: 'Pumpkin is recognized as the national vegetable of India.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 84,
    question: 'Which Indian city is known as the "City of Palaces"?',
    options: [
      'Kolkata',
      'Mysore',
      'Jaipur',
      'Udaipur'
    ],
    correctAnswer: 1,
    explanation: 'Mysore is known as the "City of Palaces" due to its numerous royal palaces and heritage sites.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 85,
    question: 'Who is known as the "Light of Asia"?',
    options: [
      'Gautama Buddha',
      'Mahavira',
      'Ashoka',
      'Chandragupta Maurya'
    ],
    correctAnswer: 0,
    explanation: 'Gautama Buddha is known as the "Light of Asia" for his teachings and spiritual influence.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 86,
    question: 'Which of the following is the largest artificial lake in India?',
    options: [
      'Gobind Sagar',
      'Dhebar Lake',
      'Nakki Lake',
      'Pichola Lake'
    ],
    correctAnswer: 0,
    explanation: 'Gobind Sagar, created by the Bhakra Dam, is the largest artificial lake in India.',
    topic: 'Geography',
    difficulty: 'Medium'
  },
  {
    id: 87,
    question: 'Which Indian state is known as the "Land of Festivals and Fairs"?',
    options: [
      'Rajasthan',
      'Gujarat',
      'Punjab',
      'Haryana'
    ],
    correctAnswer: 0,
    explanation: 'Rajasthan is known as the "Land of Festivals and Fairs" due to its vibrant cultural celebrations.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 88,
    question: 'Which of the following is the national currency of India?',
    options: [
      'Rupee',
      'Dollar',
      'Euro',
      'Yen'
    ],
    correctAnswer: 0,
    explanation: 'The Indian Rupee is the national currency of India.',
    topic: 'Economics',
    difficulty: 'Easy'
  },
  {
    id: 89,
    question: 'Which Indian city is known as the "City of Dreams"?',
    options: [
      'Mumbai',
      'Delhi',
      'Bangalore',
      'Hyderabad'
    ],
    correctAnswer: 0,
    explanation: 'Mumbai is known as the "City of Dreams" due to its opportunities in the entertainment and financial sectors.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 90,
    question: 'Who was the first Indian to win the Nobel Peace Prize?',
    options: [
      'Mother Teresa',
      'Dalai Lama',
      'Kailash Satyarthi',
      'Rabindranath Tagore'
    ],
    correctAnswer: 0,
    explanation: 'Mother Teresa was the first Indian to win the Nobel Peace Prize, in 1979, for her humanitarian work.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 91,
    question: 'Which of the following is the largest mangrove forest in the world?',
    options: [
      'Sunderbans',
      'Amazon Rainforest',
      'Congo Basin',
      'Daintree Forest'
    ],
    correctAnswer: 0,
    explanation: 'The Sunderbans, located in West Bengal and Bangladesh, is the largest mangrove forest in the world.',
    topic: 'Environment',
    difficulty: 'Easy'
  },
  {
    id: 92,
    question: 'Which Indian state is known as the "Land of Gods"?',
    options: [
      'Uttarakhand',
      'Himachal Pradesh',
      'Jammu and Kashmir',
      'Sikkim'
    ],
    correctAnswer: 0,
    explanation: 'Uttarakhand is known as the "Land of Gods" due to its numerous Hindu temples and pilgrimage sites.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 93,
    question: 'Which of the following is the national song of India?',
    options: [
      'Jana Gana Mana',
      'Vande Mataram',
      'Sare Jahan Se Achha',
      'Ae Mere Watan Ke Logo'
    ],
    correctAnswer: 1,
    explanation: 'Vande Mataram is the national song of India, composed by Bankim Chandra Chattopadhyay.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 94,
    question: 'Which Indian city is known as the "City of Golden Temple"?',
    options: [
      'Amritsar',
      'Chandigarh',
      'Ludhiana',
      'Jalandhar'
    ],
    correctAnswer: 0,
    explanation: 'Amritsar is known as the "City of Golden Temple" due to the presence of the Harmandir Sahib, or Golden Temple.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 95,
    question: 'Who is known as the "Father of the Nation"?',
    options: [
      'Mahatma Gandhi',
      'Jawaharlal Nehru',
      'Subhas Chandra Bose',
      'Bhagat Singh'
    ],
    correctAnswer: 0,
    explanation: 'Mahatma Gandhi is known as the "Father of the Nation" for his leadership in the Indian independence movement.',
    topic: 'History',
    difficulty: 'Easy'
  },
  {
    id: 96,
    question: 'Which of the following is the largest planetarium in India?',
    options: [
      'Birla Planetarium',
      'Nehru Planetarium',
      'Jawahar Planetarium',
      'Taramandal'
    ],
    correctAnswer: 0,
    explanation: 'The Birla Planetarium in Kolkata is the largest planetarium in India.',
    topic: 'Science',
    difficulty: 'Easy'
  },
  {
    id: 97,
    question: 'Which Indian state is known as the "Land of Sunrise"?',
    options: [
      'Arunachal Pradesh',
      'Manipur',
      'Mizoram',
      'Tripura'
    ],
    correctAnswer: 0,
    explanation: 'Arunachal Pradesh is known as the "Land of Sunrise" because it is the first place in India to see the sunrise.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 98,
    question: 'Which of the following is the national emblem of India?',
    options: [
      'Lion Capital of Ashoka',
      'Taj Mahal',
      'Lotus',
      'Peacock'
    ],
    correctAnswer: 0,
    explanation: 'The Lion Capital of Ashoka is the national emblem of India, symbolizing power, courage, and confidence.',
    topic: 'Culture',
    difficulty: 'Easy'
  },
  {
    id: 99,
    question: 'Which Indian city is known as the "City of Joy"?',
    options: [
      'Kolkata',
      'Mumbai',
      'Delhi',
      'Chennai'
    ],
    correctAnswer: 0,
    explanation: 'Kolkata is known as the "City of Joy" due to its vibrant cultural life and historical significance.',
    topic: 'Geography',
    difficulty: 'Easy'
  },
  {
    id: 100,
    question: 'Who was the first Indian to win an individual Olympic silver medal?',
    options: [
      'Rajyavardhan Singh Rathore',
      'Sushil Kumar',
      'Abhinav Bindra',
      'Leander Paes'
    ],
    correctAnswer: 1,
    explanation: 'Sushil Kumar was the first Indian to win an individual Olympic silver medal, in wrestling at the 2012 London Olympics.',
    topic: 'Sports',
    difficulty: 'Easy'
  }
];
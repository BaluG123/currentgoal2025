// NCERT mock data (Classes 6–12) for key competitive subjects

const SUBJECT_KEYS = [
  'Polity',
  'History',
  'Geography',
  'Economics',
  'Science',
  'Environment',
];
const CLASSES = ['6', '7', '8', '9', '10', '11', '12'];

// Build minimal mock quizzes: 5 levels per class per subject
const NCERT_DATA = {
  Polity: {
    6: [
      {
        level: 1,
        difficulty: 'Easy',
        question:
          "What phrase did Jawaharlal Nehru use to describe India's ability to remain united despite its vast differences?",
        options: [
          'Incredible India',
          'Unity in Diversity',
          'A Melting Pot of Cultures',
          'Strength in Numbers',
        ],
        correctAnswer: 2,
        explanation:
          "Jawaharlal Nehru coined the phrase 'Unity in Diversity' in his book 'The Discovery of India'. It highlights that despite different religions, languages, and cultures, Indians share a sense of unity.",
      },
      {
        level: 2,
        difficulty: 'Medium',
        question:
          'How does geography influence the diversity of a region, as seen in the examples of Ladakh and Kerala?',
        options: [
          'Geography only affects the climate, not the culture.',
          'It determines the food, clothes, and work of the people.',
          'People in different regions always have the same religion.',
          'Geography has no impact on society.',
        ],
        correctAnswer: 2,
        explanation:
          "Ladakh's cold desert supports animal herding, while Kerala's coastal climate allows spice cultivation. Geography influences economy, culture, and lifestyle.",
      },
      {
        level: 3,
        difficulty: 'Easy',
        question: 'When we fix people into one image, we create a __________.',
        options: ['Prejudice', 'Stereotype', 'Discrimination', 'Constitution'],
        correctAnswer: 2,
        explanation:
          'A stereotype is a fixed belief about a group, such as assuming only boys are good at sports. It prevents fair judgment.',
      },
      {
        level: 4,
        difficulty: 'Medium',
        question: "Who is known as the 'Father of the Indian Constitution'?",
        options: [
          'Mahatma Gandhi',
          'Jawaharlal Nehru',
          'Sardar Vallabhbhai Patel',
          'Dr. B.R. Ambedkar',
        ],
        correctAnswer: 4,
        explanation:
          'Dr. B.R. Ambedkar chaired the Drafting Committee of the Constitution and is called the Father of the Indian Constitution.',
      },
      {
        level: 5,
        difficulty: 'Easy',
        question:
          'Which of the following is NOT a level of government in India?',
        options: [
          'Local level',
          'State level',
          'National level',
          'Global level',
        ],
        correctAnswer: 4,
        explanation:
          'India has three levels of government: local, state, and national. A global-level government does not exist.',
      },
      {
        level: 6,
        difficulty: 'Medium',
        question:
          'What is the main difference between a democracy and a monarchy?',
        options: [
          'In a monarchy, rulers are elected; in democracy, they inherit power.',
          'In a democracy, people elect their leaders; in a monarchy, power is hereditary.',
          'In a democracy, rulers are kings; in monarchy, rulers are presidents.',
          'There is no difference between the two.',
        ],
        correctAnswer: 2,
        explanation:
          'In democracy, people elect their rulers; in monarchy, rulers inherit their position by birth.',
      },
      {
        level: 7,
        difficulty: 'Easy',
        question:
          'The system of racial discrimination practiced in South Africa was called:',
        options: ['Democracy', 'Monarchy', 'Apartheid', 'Suffrage'],
        correctAnswer: 3,
        explanation:
          'Apartheid was a policy of racial segregation in South Africa between 1948–1994.',
      },
      {
        level: 8,
        difficulty: 'Medium',
        question: "What is 'Universal Adult Franchise'?",
        options: [
          'Only men above 21 can vote.',
          'Only educated people can vote.',
          'All adults in the country are allowed to vote.',
          'Only property owners can vote.',
        ],
        correctAnswer: 3,
        explanation:
          'Universal Adult Franchise means every citizen aged 18+ has the right to vote regardless of caste, religion, gender, or wealth.',
      },
      {
        level: 9,
        difficulty: 'Easy',
        question:
          'Who is responsible for maintaining land records in villages?',
        options: [
          'Sarpanch',
          'SHO (Station House Officer)',
          'Patwari',
          'Tehsildar',
        ],
        correctAnswer: 3,
        explanation:
          'The Patwari (village accountant) maintains land records, measures fields, and collects land revenue.',
      },
      {
        level: 10,
        difficulty: 'Medium',
        question:
          'What change did the Hindu Succession Amendment Act, 2005 bring?',
        options: [
          'Lowered voting age',
          'Made education free for girls',
          'Gave daughters equal rights in property',
          'Abolished dowry system',
        ],
        correctAnswer: 3,
        explanation:
          'The 2005 amendment granted daughters equal rights in ancestral property, ensuring gender equality in inheritance.',
      },
      {
        level: 11,
        difficulty: 'Easy',
        question:
          'What are the key elements that make a government democratic?',
        options: [
          'Only elected leaders rule the country',
          'People participate in decision-making and leaders are accountable',
          'The government has a strong army',
          'The country is very rich',
        ],
        correctAnswer: 2,
        explanation:
          'A democratic government has several key features: people elect their representatives, everyone has equal voting rights, and the government is accountable to the people. Leaders must answer to citizens for their actions and decisions.',
      },
      {
        level: 12,
        difficulty: 'Medium',
        question: 'Which of these best explains why we need a government?',
        options: [
          'To make people follow one religion',
          'To maintain law and order, provide services, and protect citizens',
          'To make everyone rich',
          'To control what people think',
        ],
        correctAnswer: 2,
        explanation:
          'Governments are essential for maintaining peace, providing public services like roads and hospitals, ensuring justice, protecting citizens from external threats, and creating laws that help society function smoothly.',
      },
      {
        level: 13,
        difficulty: 'Easy',
        question: 'The Gram Panchayat is part of which level of government?',
        options: [
          'State government',
          'Central government',
          'Local government',
          'District government',
        ],
        correctAnswer: 3,
        explanation:
          'Gram Panchayat operates at the village level and is the most basic unit of local self-government. It handles local issues like water supply, sanitation, and village development.',
      },
      {
        level: 14,
        difficulty: 'Medium',
        question: 'What is the main role of the Gram Sabha?',
        options: [
          'To elect the Prime Minister',
          'To make laws for the entire country',
          "To approve the Gram Panchayat's work and budget",
          'To collect taxes from cities',
        ],
        correctAnswer: 3,
        explanation:
          "Gram Sabha consists of all adult members of the village. It monitors the Gram Panchayat's work, approves development plans and budgets, and ensures transparency in village governance.",
      },
      {
        level: 15,
        difficulty: 'Easy',
        question: "What does 'equality before law' mean?",
        options: [
          'Only rich people can go to court',
          'All people are equal in the eyes of law regardless of their background',
          'Only government officials are protected by law',
          'Laws apply differently to different people',
        ],
        correctAnswer: 2,
        explanation:
          'Equality before law means that all citizens - rich or poor, from any caste, religion, or gender - are treated equally by the legal system. No one is above the law.',
      },
      {
        level: 16,
        difficulty: 'Medium',
        question: 'The police officer in charge of a police station is called:',
        options: [
          'Superintendent of Police (SP)',
          'Deputy Inspector General (DIG)',
          'Station House Officer (SHO)',
          'Constable',
        ],
        correctAnswer: 3,
        explanation:
          'The SHO is responsible for maintaining law and order in the area under that police station, registering FIRs, conducting investigations, and ensuring public safety.',
      },
      {
        level: 17,
        difficulty: 'Easy',
        question: 'What is an FIR?',
        options: [
          'First Information Report',
          'Final Investigation Report',
          'Fair Investigation Rules',
          'Formal Inquiry Request',
        ],
        correctAnswer: 1,
        explanation:
          'FIR (First Information Report) is the first step in criminal justice. It records the initial information about a crime and starts the legal process. Anyone can file an FIR at a police station.',
      },
      {
        level: 18,
        difficulty: 'Medium',
        question:
          'Which of these is a major source of income for Gram Panchayats?',
        options: [
          'Income tax collection',
          'Grants from government and local taxes',
          'Foreign aid',
          'Private company donations',
        ],
        correctAnswer: 2,
        explanation:
          'Gram Panchayats receive funds through government grants, local taxes (like house tax, water tax), and contributions for development schemes. This money is used for village development.',
      },
      {
        level: 19,
        difficulty: 'Easy',
        question: 'The head of a Gram Panchayat is called:',
        options: ['Mayor', 'Collector', 'Sarpanch', 'Tehsildar'],
        correctAnswer: 3,
        explanation:
          'The Sarpanch is elected by the villagers and leads the Gram Panchayat. They chair meetings, implement development programs, and represent the village in various matters.',
      },
      {
        level: 20,
        difficulty: 'Medium',
        question:
          "What is the significance of having women's reservation in Panchayats?",
        options: [
          "It's just a formality",
          "It ensures women's participation in decision-making and development",
          'It reduces the workload of men',
          "It's only for show",
        ],
        correctAnswer: 2,
        explanation:
          'One-third of seats in Panchayats are reserved for women. This ensures women have a voice in local governance, brings gender perspective to development, and promotes equality.',
      },
      {
        level: 21,
        difficulty: 'Easy',
        question: 'What is the minimum age for voting in India?',
        options: ['21 years', '25 years', '18 years', '16 years'],
        correctAnswer: 3,
        explanation:
          'The voting age was reduced from 21 to 18 years in 1988 through the 61st Constitutional Amendment, allowing young adults to participate in democratic processes.',
      },
      {
        level: 22,
        difficulty: 'Medium',
        question:
          'Why is it important to have different levels of government (local, state, national)?',
        options: [
          'To create more jobs for politicians',
          'To handle different types of issues more effectively',
          'To make governance more expensive',
          'To confuse people',
        ],
        correctAnswer: 2,
        explanation:
          'Different levels handle different issues: local (village roads, water), state (education, healthcare), national (defense, foreign policy). This makes governance more effective and brings it closer to people.',
      },
      {
        level: 23,
        difficulty: 'Easy',
        question: "What does 'accountability' in government mean?",
        options: [
          'Government can do whatever it wants',
          'Government must answer to people for its actions',
          'Only the Prime Minister is responsible',
          'People cannot question the government',
        ],
        correctAnswer: 2,
        explanation:
          'Accountability means government officials must explain their decisions and actions to the people. Citizens can question, criticize, and demand answers from their representatives.',
      },
      {
        level: 24,
        difficulty: 'Medium',
        question:
          'How do rural and urban areas differ in terms of livelihood and governance?',
        options: [
          'There are no differences',
          'Rural areas focus on agriculture; urban areas have diverse occupations and different local governments',
          "Urban areas don't need government",
          'Rural areas are always richer',
        ],
        correctAnswer: 2,
        explanation:
          'Rural areas primarily depend on agriculture and have Gram Panchayats for governance. Urban areas have diverse occupations (services, manufacturing) and are governed by Municipal Corporations/Councils.',
      },
      {
        level: 25,
        difficulty: 'Hard',
        question:
          'What is the relationship between diversity and democracy in the Indian context?',
        options: [
          'Diversity weakens democracy',
          'Democracy celebrates and protects diversity while ensuring unity',
          'Diversity and democracy cannot coexist',
          'Only similar people can live in a democracy',
        ],
        correctAnswer: 2,
        explanation:
          "Indian democracy is built on the principle that diverse groups (different religions, languages, cultures) can coexist peacefully. Democracy protects minority rights while maintaining national unity, making 'Unity in Diversity' possible through constitutional guarantees and equal participation.",
      },
      {
        level: 26,
        difficulty: 'Easy',
        question:
          'What is the primary role of the Gram Sabha in the Panchayati Raj system?',
        options: [
          'To collect taxes from villagers',
          'To approve the work done by the Gram Panchayat',
          'To appoint the Sarpanch',
          'To maintain police stations in villages',
        ],
        correctAnswer: 2,
        explanation:
          'The Gram Sabha consists of all adults over 18 years in the village with voting rights. It meets at least twice a year to approve the plans, budgets, and work done by the Gram Panchayat, ensuring accountability and preventing misuse of funds. It also discusses and finalizes issues like the Below Poverty Line (BPL) list and monitors development programs, making it a key participatory body in rural governance.',
      },
      {
        level: 27,
        difficulty: 'Medium',
        question:
          'Who is the head of the Gram Panchayat and what are their responsibilities?',
        options: [
          'The Patwari, who maintains land records',
          'The Sarpanch, who presides over meetings and signs cheques',
          'The Tehsildar, who supervises revenue collection',
          'The Secretary, who calls the Gram Sabha meetings',
        ],
        correctAnswer: 2,
        explanation:
          'The Sarpanch, also known as the Panchayat President, is elected by the members of the Gram Sabha. Their responsibilities include presiding over Gram Panchayat meetings, signing cheques along with the Panchs, implementing development programs like road construction, water supply, and schools, and being accountable to the Gram Sabha. The Secretary, appointed by the government, assists by keeping records and calling meetings, but the Sarpanch leads the decision-making.',
      },
      {
        level: 28,
        difficulty: 'Easy',
        question:
          'What are the three levels of the Panchayati Raj system in India?',
        options: [
          'Gram Sabha, State Assembly, Parliament',
          'Gram Panchayat, Panchayat Samiti, Zila Parishad',
          'Village, City, National',
          'Local, Regional, Global',
        ],
        correctAnswer: 2,
        explanation:
          'The Panchayati Raj system has three tiers: the Gram Panchayat at the village level for local issues like water and roads; the Panchayat Samiti (or Janpad Panchayat) at the block level, overseeing multiple Gram Panchayats; and the Zila Parishad at the district level, coordinating overall rural development. This structure ensures decentralized governance, with funds flowing from higher levels to implement schemes like watershed development.',
      },
      {
        level: 29,
        difficulty: 'Medium',
        question:
          'How does the government resolve conflicts in a democratic setup, as illustrated by the Cauvery water dispute?',
        options: [
          'By ignoring the issue until it resolves itself',
          'By helping communities reach agreements and ensuring fair share',
          'By favoring the more powerful state',
          'By banning the use of the resource',
        ],
        correctAnswer: 2,
        explanation:
          'In democracies, governments resolve conflicts through dialogue and fair distribution to prevent violence. In the Cauvery water dispute between Karnataka and Tamil Nadu, both states claim rights to the river water for irrigation and urban needs. The government intervenes by facilitating negotiations, setting up tribunals, or allocating shares based on needs, emphasizing equality and justice to maintain peace, similar to handling religious procession routes to avoid clashes.',
      },
      {
        level: 30,
        difficulty: 'Easy',
        question:
          'What is the main function of a Municipal Corporation in urban areas?',
        options: [
          'Maintaining land records in cities',
          'Deciding how the city should grow and providing basic amenities',
          'Electing the Prime Minister',
          'Handling international trade',
        ],
        correctAnswer: 2,
        explanation:
          "The Municipal Corporation, or Nagar Nigam, handles urban administration in big cities. It makes decisions on city planning, provides essential services like water supply, garbage collection, street lighting, and maintains schools and hospitals. Elected Councillors form committees for specific tasks, and the Municipal Commissioner implements decisions, ensuring the city's growth and residents' needs are met through taxes and government grants.",
      },
      {
        level: 31,
        difficulty: 'Medium',
        question:
          "How do people's participation contribute to democratic governance?",
        options: [
          'By only voting once in a lifetime',
          'Through elections, protests, and social movements to influence decisions',
          'By paying taxes without questioning',
          'By following laws blindly',
        ],
        correctAnswer: 2,
        explanation:
          "People's participation is a key element of democracy, extending beyond voting in elections every five years. It includes organizing dharnas, rallies, strikes, signature campaigns, and writing letters to editors to challenge unfair policies, like the 2005 electricity price hike protest that forced a government reversal. Social movements by groups like dalits, adivasis, and women also push for equality, ensuring the government remains accountable and responsive to public needs.",
      },
      {
        level: 32,
        difficulty: 'Easy',
        question: 'What challenges do landless farmers face in rural areas?',
        options: [
          'They own large farms and earn high profits',
          "They work on others' land for low wages and face debt",
          'They only grow cash crops like cotton',
          'They have access to modern machinery',
        ],
        correctAnswer: 2,
        explanation:
          "Landless farmers, making up about 40% of rural households, do not own land and work as laborers on others' fields, earning low wages (e.g., Rs 60 per day for women). They often borrow money for seeds or health issues, leading to debt cycles. Examples include Thulasi from Kalpattu village, who sells surplus produce but struggles with manual labor and low pay, highlighting rural inequalities and dependence on monsoon rains.",
      },
      {
        level: 33,
        difficulty: 'Medium',
        question:
          'What is the role of the District Collector in rural administration?',
        options: [
          'To measure land and update records',
          'To head the district, supervise Tehsildars, and oversee revenue',
          'To elect the Sarpanch',
          'To sell agricultural produce',
        ],
        correctAnswer: 2,
        explanation:
          "The District Collector is the chief administrative officer of the district, overseeing all departments including revenue. They supervise Tehsildars, who in turn manage Patwaris, ensure land revenue collection, resolve disputes, and provide certificates. In cases like Mohan's land dispute in Chapter 6, the Collector coordinates to maintain order, emphasizing the hierarchical structure from Patwari to Collector for efficient rural administration.",
      },
      {
        level: 34,
        difficulty: 'Easy',
        question: 'Which of the following is a common urban livelihood?',
        options: [
          'Terrace farming in hills',
          'Street vending and factory work',
          'Animal herding in deserts',
          'Fishing in coastal areas only',
        ],
        correctAnswer: 2,
        explanation:
          'Urban livelihoods include diverse jobs like street vending (e.g., vegetable sellers like Bachchu Manjhi earning Rs 100/day), factory work in organized sectors with benefits, and casual labor in markets. Many, like Nirmala in garment factories, work long hours for low pay without security, while others in call centers have better conditions. This contrasts with rural jobs, showing urban challenges like vendor evictions and the need for labor laws protection.',
      },
      {
        level: 35,
        difficulty: 'Medium',
        question: 'How has watershed development helped rural communities?',
        options: [
          'By increasing urban migration',
          'By conserving water and improving agriculture through check-dams and tanks',
          'By reducing the need for Gram Sabhas',
          'By focusing only on large farmers',
        ],
        correctAnswer: 2,
        explanation:
          'Watershed development, as seen in Maharashtra villages, involves planting trees, building check-dams, and tanks to recharge groundwater and prevent soil erosion. Funded by government schemes through Panchayats, it solves water shortages, boosts crop yields, and benefits all farmers. In Hardas village discussions, it was proposed as a long-term solution to low water tables, demonstrating how local governance addresses environmental and livelihood issues for sustainable rural development.',
      },
    ],
    7: [
      {
        level: 1,
        difficulty: 'Easy',
        question: "What does 'equality' mean in a democracy?",
        options: [
          'Everyone gets the same salary',
          'All people are treated with equal dignity and have equal opportunities',
          'Everyone must look the same',
          'Only educated people get equal rights',
        ],
        correctAnswer: 2,
        explanation:
          "Equality in democracy means all people have equal dignity, equal opportunities, and equal treatment before the law regardless of their religion, caste, gender, or economic status. It doesn't mean everyone gets identical outcomes, but equal chances to succeed.",
      },
      {
        level: 2,
        difficulty: 'Medium',
        question:
          'Which Article of the Indian Constitution prohibits discrimination on grounds of religion, race, caste, sex or place of birth?',
        options: ['Article 14', 'Article 15', 'Article 16', 'Article 17'],
        correctAnswer: 2,
        explanation:
          'Article 15 of the Indian Constitution prohibits discrimination by the state on grounds of religion, race, caste, sex, or place of birth. It ensures equal treatment and access to public facilities for all citizens.',
      },
      {
        level: 3,
        difficulty: 'Easy',
        question: 'What is the practice of untouchability?',
        options: [
          'A religious ceremony',
          "Social discrimination where certain groups are considered 'impure'",
          'A type of meditation',
          'A form of greeting',
        ],
        correctAnswer: 2,
        explanation:
          "Untouchability is a discriminatory practice where certain groups (historically Dalits) were considered 'impure' and were denied basic rights like entering temples, using wells, or even being touched by others. This practice is now constitutionally banned in India.",
      },
      {
        level: 4,
        difficulty: 'Medium',
        question:
          'Which constitutional provision specifically abolishes untouchability?',
        options: ['Article 15', 'Article 16', 'Article 17', 'Article 18'],
        correctAnswer: 3,
        explanation:
          "Article 17 of the Indian Constitution abolishes untouchability and makes its practice a punishable offense. It states that 'untouchability is abolished and its practice in any form is forbidden.'",
      },
      {
        level: 5,
        difficulty: 'Easy',
        question: "What does the term 'midday meal scheme' refer to?",
        options: [
          'Free lunch for government employees',
          'Food distribution in slums',
          'Free cooked meals for school children',
          'Dinner for poor families',
        ],
        correctAnswer: 3,
        explanation:
          "The Midday Meal Scheme provides free cooked meals to school children to improve nutrition, increase school attendance, and reduce classroom hunger. It's one of the world's largest school feeding programs.",
      },
      {
        level: 6,
        difficulty: 'Medium',
        question: 'What is the main purpose of reservation policy in India?',
        options: [
          'To create divisions in society',
          'To provide equal opportunities to historically disadvantaged groups',
          'To reduce competition in jobs',
          'To favor certain political parties',
        ],
        correctAnswer: 2,
        explanation:
          'Reservation policy provides quotas in education and employment for Scheduled Castes, Scheduled Tribes, and Other Backward Classes to compensate for historical discrimination and ensure equal opportunities for social and economic advancement.',
      },
      {
        level: 7,
        difficulty: 'Easy',
        question:
          'In which year was the Right to Education Act implemented in India?',
        options: ['2008', '2009', '2010', '2011'],
        correctAnswer: 3,
        explanation:
          'The Right to Education (RTE) Act was implemented in 2010, making free and compulsory education a fundamental right for children aged 6-14 years. It mandates that every child has the right to quality elementary education.',
      },
      {
        level: 8,
        difficulty: 'Medium',
        question: "What does 'universal suffrage' mean?",
        options: [
          'Only educated people can vote',
          'All adult citizens have the right to vote',
          'Only men can vote',
          'Only property owners can vote',
        ],
        correctAnswer: 2,
        explanation:
          "Universal suffrage means all adult citizens (18+ years) have the right to vote regardless of their religion, race, caste, education, or economic status. It's a fundamental principle of democracy ensuring equal political participation.",
      },
      {
        level: 9,
        difficulty: 'Easy',
        question: 'What is the main function of the State Government?',
        options: [
          'Defence and foreign policy',
          'Education, healthcare, agriculture, and law and order',
          'Printing currency',
          'Space research',
        ],
        correctAnswer: 2,
        explanation:
          "State governments handle subjects like education, healthcare, agriculture, police, local governance, and state-specific laws. These are listed in the State List of the Constitution and directly affect people's daily lives.",
      },
      {
        level: 10,
        difficulty: 'Medium',
        question: 'Who is the head of the state government?',
        options: ['Governor', 'Chief Minister', 'President', 'Prime Minister'],
        correctAnswer: 2,
        explanation:
          'The Chief Minister is the head of the state government and leads the Council of Ministers. Though the Governor is the constitutional head, the CM holds real executive power and is responsible for state administration.',
      },
      {
        level: 11,
        difficulty: 'Easy',
        question: 'How is the Chief Minister of a state chosen?',
        options: [
          'Directly elected by people',
          'Leader of the majority party/coalition in the Legislative Assembly',
          'Appointed by the President',
          'Selected by other Chief Ministers',
        ],
        correctAnswer: 2,
        explanation:
          'The Chief Minister is the leader of the political party or coalition that has majority support in the State Legislative Assembly. The Governor invites this leader to form the government.',
      },
      {
        level: 12,
        difficulty: 'Medium',
        question: 'What is a Legislative Assembly?',
        options: [
          'A building where laws are made',
          'The elected house of the state legislature',
          'A court of law',
          'An administrative office',
        ],
        correctAnswer: 2,
        explanation:
          'The Legislative Assembly (Vidhan Sabha) is the elected house of the state legislature where MLAs (Members of Legislative Assembly) represent constituencies. It makes laws on state subjects and controls the state government.',
      },
      {
        level: 13,
        difficulty: 'Easy',
        question: 'What does MLA stand for?',
        options: [
          'Member of Legal Assembly',
          'Minister of Local Administration',
          'Member of Legislative Assembly',
          'Manager of Legislative Affairs',
        ],
        correctAnswer: 3,
        explanation:
          'MLA stands for Member of Legislative Assembly. MLAs are elected representatives who represent specific constituencies in the state legislature and participate in lawmaking and governance at the state level.',
      },
      {
        level: 14,
        difficulty: 'Medium',
        question: 'What is the role of the Governor in a state?',
        options: [
          'Head of state government with executive powers',
          'Constitutional head who acts on the advice of the CM',
          'Leader of the opposition party',
          'Chief of state police',
        ],
        correctAnswer: 2,
        explanation:
          "The Governor is the constitutional head of the state who acts on the advice of the Chief Minister and Council of Ministers. The Governor's role is largely ceremonial, similar to the President at the national level.",
      },
      {
        level: 15,
        difficulty: 'Easy',
        question: 'What is the minimum age to become an MLA in India?',
        options: ['21 years', '25 years', '30 years', '35 years'],
        correctAnswer: 2,
        explanation:
          'The minimum age to become an MLA (Member of Legislative Assembly) is 25 years. This ensures that representatives have sufficient maturity and life experience to handle legislative responsibilities.',
      },
      {
        level: 16,
        difficulty: 'Medium',
        question: 'How does a bill become a law in a state?',
        options: [
          'The CM signs it directly',
          'Passed by Legislative Assembly, then sent to Governor for assent',
          'Approved by the President only',
          'Voted by all citizens',
        ],
        correctAnswer: 2,
        explanation:
          "A bill becomes law when: 1) It's introduced in the Legislative Assembly, 2) Debated and passed by majority vote, 3) Sent to the Governor for assent. Once the Governor signs it, the bill becomes an Act (law).",
      },
      {
        level: 17,
        difficulty: 'Easy',
        question: 'What is the press or media often called in a democracy?',
        options: [
          'First Estate',
          'Second Estate',
          'Third Estate',
          'Fourth Estate',
        ],
        correctAnswer: 4,
        explanation:
          "The media is called the 'Fourth Estate' because it acts as a watchdog over the government (like the three estates of legislature, executive, and judiciary) by informing citizens, investigating issues, and holding power accountable.",
      },
      {
        level: 18,
        difficulty: 'Medium',
        question: 'Why is a free press important in a democracy?',
        options: [
          'To entertain people only',
          'To inform citizens and act as a watchdog over government',
          'To make profits for media companies',
          'To create sensational news',
        ],
        correctAnswer: 2,
        explanation:
          'A free press is vital for democracy as it: informs citizens about government actions, investigates corruption and wrongdoing, provides a platform for public debate, and ensures transparency and accountability in governance.',
      },
      {
        level: 19,
        difficulty: 'Easy',
        question: "What does 'public interest' mean in the context of media?",
        options: [
          'What the government wants people to know',
          'Information that benefits society and promotes transparency',
          'Only entertainment content',
          'News that creates controversy',
        ],
        correctAnswer: 2,
        explanation:
          'Public interest refers to information, investigations, and discussions that benefit society as a whole - exposing corruption, highlighting social issues, educating citizens about their rights, and promoting informed democratic participation.',
      },
      {
        level: 20,
        difficulty: 'Medium',
        question:
          'What is the difference between being independent and being fair in media reporting?',
        options: [
          'There is no difference',
          'Independent means free from outside control; fair means presenting balanced viewpoints',
          'Fair means supporting the government; independent means opposing it',
          'Independent is for newspapers; fair is for TV',
        ],
        correctAnswer: 2,
        explanation:
          'Independent media is free from government, political, or corporate control. Fair reporting means presenting all sides of a story objectively, without bias, and allowing readers/viewers to form their own opinions based on facts.',
      },
      {
        level: 21,
        difficulty: 'Easy',
        question: 'What is an advertisement?',
        options: [
          'A news report',
          'A paid promotion to sell products or services',
          'An editorial opinion',
          'A government announcement',
        ],
        correctAnswer: 2,
        explanation:
          'An advertisement is paid content designed to promote products, services, or ideas. Unlike news, ads are meant to persuade people to buy something or support a cause, and media companies earn revenue from advertising.',
      },
      {
        level: 22,
        difficulty: 'Medium',
        question: "How can advertisements influence people's thinking?",
        options: [
          'They provide only factual information',
          'They use persuasive techniques and emotions to influence choices',
          'They have no impact on people',
          'They only show prices',
        ],
        correctAnswer: 2,
        explanation:
          "Advertisements use various techniques like emotional appeals, celebrity endorsements, repetition, and attractive visuals to influence people's preferences, create desires, and persuade them to buy products or support ideas.",
      },
      {
        level: 23,
        difficulty: 'Easy',
        question: 'What are markets?',
        options: [
          'Only physical places where goods are sold',
          'Places or systems where buyers and sellers interact to exchange goods and services',
          'Only online shopping websites',
          'Government-controlled shops',
        ],
        correctAnswer: 2,
        explanation:
          'Markets are not just physical locations but any system where buyers and sellers come together to exchange goods and services for money. This includes local bazaars, malls, online platforms, and even stock exchanges.',
      },
      {
        level: 24,
        difficulty: 'Medium',
        question: 'What is the relationship between markets and equality?',
        options: [
          'Markets automatically ensure equality for all',
          'Markets can increase inequality if not properly regulated',
          'Markets have no connection to equality',
          'Only rich people can access markets',
        ],
        correctAnswer: 2,
        explanation:
          'While markets provide opportunities, they can increase inequality because people with more money have more purchasing power and better access to quality goods and services. Government intervention through policies is often needed to ensure equitable access.',
      },
      {
        level: 25,
        difficulty: 'Easy',
        question: 'What is a weekly market?',
        options: [
          'A market open only once a week',
          'A market that sells only weekly magazines',
          'A modern shopping mall',
          'An online marketplace',
        ],
        correctAnswer: 1,
        explanation:
          "A weekly market (haat) operates on specific days of the week in different locations. Traders move from place to place, providing access to goods for people in areas that don't have permanent shops, especially in rural areas.",
      },
      {
        level: 26,
        difficulty: 'Medium',
        question: 'How do weekly markets ensure cheaper prices?',
        options: [
          'Government fixes all prices',
          'Low overhead costs and direct selling by producers',
          'They sell only damaged goods',
          "Customers don't pay full prices",
        ],
        correctAnswer: 2,
        explanation:
          "Weekly markets offer cheaper prices because: traders have low overhead costs (no permanent shops/rent), many sell directly without middlemen, there's competition among vendors, and they often sell directly from producers.",
      },
      {
        level: 27,
        difficulty: 'Easy',
        question: 'What is a shopping complex or mall?',
        options: [
          'A weekly market',
          'A government office',
          'A large building with many shops under one roof',
          'A factory',
        ],
        correctAnswer: 3,
        explanation:
          'A shopping complex or mall is a large enclosed building containing many different shops, restaurants, and services under one roof. They offer convenience, variety, air conditioning, and often entertainment facilities.',
      },
      {
        level: 28,
        difficulty: 'Medium',
        question: 'What is a chain store?',
        options: [
          'A store that sells chains',
          'A store connected to others with the same name and management',
          'A store in a shopping chain',
          'A locked store',
        ],
        correctAnswer: 2,
        explanation:
          "A chain store is part of a network of stores with the same brand name, similar products, standardized operations, and central management. Examples include McDonald's, Big Bazaar, or Reliance stores.",
      },
      {
        level: 29,
        difficulty: 'Easy',
        question:
          'Why might goods be more expensive in shopping malls compared to weekly markets?',
        options: [
          'Mall goods are always better quality',
          'High rent, air conditioning, and overhead costs',
          'Mall owners are greedy',
          'Government taxes are higher in malls',
        ],
        correctAnswer: 2,
        explanation:
          'Mall prices are higher due to: expensive rent for shop spaces, air conditioning and maintenance costs, branded products with higher margins, and the convenience and ambiance customers pay for.',
      },
      {
        level: 30,
        difficulty: 'Medium',
        question:
          'How do people from different economic backgrounds experience markets differently?',
        options: [
          'Everyone has the same market experience',
          'Wealthy people shop in malls; poor people rely on weekly markets and local shops',
          "Economic background doesn't matter in markets",
          'Only middle-class people use markets',
        ],
        correctAnswer: 2,
        explanation:
          'Economic inequality affects market access: wealthy people can afford branded goods in malls and have more choices, while people with less money often shop in weekly markets, local stores, or buy in smaller quantities due to budget constraints.',
      },
      {
        level: 31,
        difficulty: 'Easy',
        question:
          'What is the principle that grants all adult citizens the right to vote, regardless of their wealth, caste, or education?',
        options: [
          'Universal Adult Franchise',
          'Right to Information',
          'Fundamental Duty',
          'Monarchy',
        ],
        correctAnswer: 1,
        explanation:
          'Universal Adult Franchise is a cornerstone of democracy. It ensures political equality by giving every adult citizen one vote of equal value.',
      },
      {
        level: 32,
        difficulty: 'Medium',
        question:
          'Which government scheme, first introduced in Tamil Nadu in 2001 by a Supreme Court directive, aims to provide cooked lunch to all children in government elementary schools to promote equality?',
        options: [
          'Sarva Shiksha Abhiyan',
          'Midday Meal Scheme',
          'National Health Mission',
          'Beti Bachao, Beti Padhao',
        ],
        correctAnswer: 2,
        explanation:
          'The Midday Meal Scheme provides free cooked meals to schoolchildren, improving nutrition, boosting attendance, and reducing caste barriers.',
      },
      {
        level: 33,
        difficulty: 'Hard',
        question:
          "The book 'Joothan', which describes the painful experiences of growing up as a Dalit boy, was written by whom?",
        options: [
          'Dr. B.R. Ambedkar',
          'Omprakash Valmiki',
          'Mahatma Gandhi',
          'Jawaharlal Nehru',
        ],
        correctAnswer: 2,
        explanation:
          "Omprakash Valmiki’s autobiography 'Joothan' vividly portrays the discrimination and struggles faced due to caste identity.",
      },
      {
        level: 34,
        difficulty: 'Easy',
        question:
          'Healthcare facilities that are owned and run by the government are known as:',
        options: [
          'Private health facilities',
          'Corporate hospitals',
          'Public health services',
          'Charitable clinics',
        ],
        correctAnswer: 3,
        explanation:
          'Public health services are government-run hospitals and health centers that provide treatment either free or at minimal cost.',
      },
      {
        level: 35,
        difficulty: 'Medium',
        question:
          "What is the 'Costa Rican approach' to health mentioned in the textbook?",
        options: [
          'Spending all government money on building private hospitals.',
          'Deciding not to have an army and spending that money on health, education, and other basic needs.',
          'Making healthcare a luxury available only to the rich.',
          'Relying solely on international aid for healthcare.',
        ],
        correctAnswer: 2,
        explanation:
          'Costa Rica abolished its army and redirected resources to health and education, ensuring high-quality services for all citizens.',
      },
      {
        level: 36,
        difficulty: 'Easy',
        question:
          'An elected representative from a particular constituency to the State Legislative Assembly is called a/an:',
        options: [
          'Member of Parliament (MP)',
          'Sarpanch',
          'Member of Legislative Assembly (MLA)',
          'Mayor',
        ],
        correctAnswer: 3,
        explanation:
          'An MLA (Member of Legislative Assembly) is elected by voters in a constituency to represent them in the State Assembly.',
      },
      {
        level: 37,
        difficulty: 'Medium',
        question:
          'Who is the head of the state, and who is the head of the state government?',
        options: [
          'Governor is the head of state; Chief Minister is the head of government.',
          'Chief Minister is the head of state; President is the head of government.',
          'President is the head of state; Prime Minister is the head of government.',
          'Governor is the head of both the state and the government.',
        ],
        correctAnswer: 1,
        explanation:
          'The Governor is the nominal head of the state, while the Chief Minister is the real executive head of the state government.',
      },
      {
        level: 38,
        difficulty: 'Easy',
        question:
          'The work that women traditionally do within the home, such as cooking, cleaning, and care-giving, is often not recognized as work and is unpaid. This work is referred to as being:',
        options: ['Devalued', 'Professional', 'Highly skilled', 'Public work'],
        correctAnswer: 1,
        explanation:
          'Housework and care-giving are devalued because they are unpaid and socially undervalued, despite being essential.',
      },
      {
        level: 39,
        difficulty: 'Medium',
        question:
          "Who wrote the remarkable story 'Sultana's Dream' in 1905, which imagined a utopian world called 'Ladyland' where women could study and work freely?",
        options: [
          'Rashsundari Devi',
          'Pandita Ramabai',
          'Rokeya Sakhawat Hossain',
          'Savitribai Phule',
        ],
        correctAnswer: 3,
        explanation:
          "Rokeya Sakhawat Hossain’s 'Sultana’s Dream' imagined a feminist utopia where women led society using science and knowledge.",
      },
      {
        level: 40,
        difficulty: 'Easy',
        question:
          'The different ways through which we communicate in society, like TV, radio, newspapers, and the internet, are collectively called:',
        options: ['Government', 'Market', 'Media', 'Judiciary'],
        correctAnswer: 3,
        explanation:
          'Media refers to mass communication channels that inform and influence public opinion in a democracy.',
      },
      {
        level: 41,
        difficulty: 'Medium',
        question:
          "What is meant by a 'balanced report' in the context of media?",
        options: [
          "A report that only supports the government's view.",
          'A report written by a famous journalist.',
          'A report that discusses all points of view of a particular story and leaves it to the reader to decide.',
          'A report that is censored by a business house.',
        ],
        correctAnswer: 3,
        explanation:
          'A balanced report covers all sides of an issue fairly, allowing readers to form their own opinions.',
      },
      {
        level: 42,
        difficulty: 'Easy',
        question:
          'A market that is held on a specific day of the week and does not have permanent shops is known as a:',
        options: [
          'Shopping mall',
          'Weekly market',
          'Neighbourhood shop',
          'Online market',
        ],
        correctAnswer: 2,
        explanation:
          'A weekly market (haat) operates on specific days with temporary shops, offering goods at lower prices.',
      },
      {
        level: 43,
        difficulty: 'Medium',
        question: "What is a 'chain of markets'?",
        options: [
          'A single large supermarket with many branches.',
          'A series of markets linked together, where goods pass from producers to final consumers.',
          'A market that only sells chains and jewellery.',
          'The process of banning certain markets by the government.',
        ],
        correctAnswer: 2,
        explanation:
          'A chain of markets shows how goods move step by step—from producers to wholesalers, retailers, and finally to consumers.',
      },
      {
        level: 44,
        difficulty: 'Medium',
        question:
          "In the story of the shirt, what is the role of the 'garment exporter'?",
        options: [
          'To grow cotton on the farm.',
          'To sell the shirt directly to the consumer in a local market.',
          'To make the shirts according to the specifications of foreign buyers and ship them abroad.',
          'To spin the cotton yarn from raw cotton.',
        ],
        correctAnswer: 3,
        explanation:
          'Garment exporters run factories to stitch clothes as per foreign orders and ship them abroad, linking local workers to global markets.',
      },
      {
        level: 45,
        difficulty: 'Hard',
        question:
          'The journey of a shirt from cotton to customer reveals that:',
        options: [
          'Everyone in the chain of market earns equally.',
          'The market offers equal opportunities and returns for all participants.',
          'There is great inequality in the market; foreign businesspersons make huge profits while small farmers and workers earn very little.',
          'The government controls the price at every step to ensure fairness.',
        ],
        correctAnswer: 3,
        explanation:
          'The shirt’s journey highlights inequality—farmers and workers earn little, while exporters and foreign sellers reap huge profits.',
      },
      {
        level: 46,
        difficulty: 'Medium',
        question:
          'The Tawa Matsya Sangh (TMS) in Madhya Pradesh is a federation that fought for the rights of:',
        options: [
          'Displaced farmers',
          'Urban street vendors',
          'Factory workers',
          'Fishworkers',
        ],
        correctAnswer: 4,
        explanation:
          'Tawa Matsya Sangh is a cooperative of fishworkers displaced by the Tawa dam, fighting for fishing rights and livelihoods.',
      },
      {
        level: 47,
        difficulty: 'Easy',
        question:
          'What is the key principle that forms the foundation of democracy in India?',
        options: [
          'Inequality among citizens',
          'Equality for all citizens',
          'Discrimination based on caste',
          'Privilege for the wealthy',
        ],
        correctAnswer: 2,
        explanation:
          'Equality is a core principle of Indian democracy as enshrined in the Constitution, ensuring that every person is equal before the law regardless of religion, caste, gender, or economic status. This includes political equality through Universal Adult Franchise, where all adults have the right to vote. However, inequalities persist in society, such as discrimination against Dalits or economic disparities, and the government implements measures like the Midday Meal Scheme to promote equality by providing free meals in schools to encourage attendance among underprivileged children. The chapter highlights movements like the Civil Rights Movement in the USA led by Rosa Parks, illustrating struggles against inequality, and emphasizes that recognizing dignity for all is essential for true equality.',
      },
      {
        level: 48,
        difficulty: 'Medium',
        question:
          'Which government initiative is mentioned as a step towards achieving equality in education?',
        options: [
          'Building new hospitals',
          'Providing midday meals in schools',
          'Constructing roads in villages',
          'Offering free electricity to farmers',
        ],
        correctAnswer: 2,
        explanation:
          'The Midday Meal Scheme is a government program aimed at improving equality in education by providing nutritious meals to students in government schools, which helps increase enrollment, attendance, and retention, especially among children from poor families who might otherwise drop out due to hunger or the need to work. This initiative addresses socio-economic inequalities by ensuring that all children, regardless of background, have access to education. The chapter discusses how such programs are part of broader efforts to implement constitutional guarantees of equality, countering everyday discriminations like those faced in public spaces or employment.',
      },
      {
        level: 49,
        difficulty: 'Easy',
        question:
          'What is the main difference between public and private health services?',
        options: [
          'Public services are free for everyone, private are only for the rich',
          'Public services are run by the government for all citizens, private are run for profit',
          'Public services are only in cities, private in villages',
          'There is no difference between them',
        ],
        correctAnswer: 2,
        explanation:
          "Public health services are provided by the government to ensure accessible healthcare for all citizens, including preventive measures like vaccination drives and sanitation, while private services are run by individuals or companies for profit, often offering better facilities but at higher costs, making them inaccessible to the poor. The chapter explores the role of government in health, highlighting issues like inadequate public facilities in rural areas, high costs in private hospitals leading to debt, and examples like Kerala's effective public health system with community participation. It also discusses the need for government action to regulate private services and ensure basic healthcare as a right.",
      },
      {
        level: 50,
        difficulty: 'Medium',
        question:
          'Why is Kerala considered to have a better public health system compared to other states?',
        options: [
          'It has more private hospitals',
          'The government allocates a large budget to health and involves local participation',
          'It focuses only on urban areas',
          'It charges high fees for services',
        ],
        correctAnswer: 2,
        explanation:
          "Kerala has invested heavily in public health infrastructure, allocating about 40% of its budget to Panchayats for local health needs, leading to better facilities, lower infant mortality, and community involvement through initiatives like water supply and sanitation. This contrasts with states like Uttar Pradesh, where public health is underfunded. The chapter emphasizes the government's responsibility to provide preventive and curative healthcare, addressing issues like communicable diseases, and highlights how inadequate services force people to rely on expensive private care, often resulting in debt or untreated illnesses.",
      },
      {
        level: 51,
        difficulty: 'Easy',
        question: 'Who is the head of the state government in India?',
        options: [
          'The President',
          'The Prime Minister',
          'The Chief Minister',
          'The Governor',
        ],
        correctAnswer: 3,
        explanation:
          'The Chief Minister is the head of the state government, leading the Council of Ministers and overseeing the executive functions. The chapter explains how the state government works, with the Legislative Assembly (Vidhan Sabha) consisting of MLAs elected from constituencies, the majority party forming the government. The opposition plays a crucial role in accountability. Examples include debates in the assembly on issues like water shortages or health crises, where the government responds through policies and actions.',
      },
      {
        level: 52,
        difficulty: 'Medium',
        question:
          'What role does the press play in the functioning of the state government?',
        options: [
          'It makes laws for the state',
          'It reports on government activities and holds it accountable',
          'It collects taxes from citizens',
          'It appoints MLAs',
        ],
        correctAnswer: 2,
        explanation:
          'The press informs the public about government actions, debates in the assembly, and issues like epidemics or accidents, ensuring transparency and accountability. For instance, during a health crisis, media coverage can pressure the government to act swiftly. The chapter details the legislative process, where bills are discussed and passed, and executive implementation, emphasizing representation through MLAs who address constituency needs, and how public welfare is prioritized through schemes and responses to crises.',
      },
      {
        level: 53,
        difficulty: 'Easy',
        question:
          'What term describes the process by which society teaches individuals their expected roles based on gender?',
        options: [
          'Discrimination',
          'Socialization',
          'Equality',
          'Stereotyping',
        ],
        correctAnswer: 2,
        explanation:
          "Gender socialization is the process where society, through family, media, and education, assigns different roles to boys and girls, such as boys being encouraged in outdoor activities and girls in housework. The chapter uses examples from Samoa, where boys and girls have similar responsibilities until teenage years, contrasting with India where girls often do more domestic work. It discusses how valuing housework less leads to inequality, and highlights government efforts like anganwadis to support girls' education.",
      },
      {
        level: 54,
        difficulty: 'Medium',
        question:
          'How do gender roles contribute to inequality between boys and girls?',
        options: [
          'By giving equal opportunities to both',
          'By assigning different values to their work, like undervaluing housework',
          'By encouraging both to pursue the same careers',
          'By providing the same education to all',
        ],
        correctAnswer: 2,
        explanation:
          "Gender roles lead to inequality by undervaluing women's work, such as unpaid housework, which is not counted in economic terms, leading to double burden for working women. Examples include studies showing women spend more time on household chores even if employed. The chapter explores how stereotypes limit opportunities, like fewer girls in sports or STEM, and stresses the need to challenge these for equality, with government initiatives promoting girls' education.",
      },
      {
        level: 55,
        difficulty: 'Easy',
        question:
          'Who was the first Indian woman to become a commercial pilot?',
        options: [
          'Rokeya Sakhawat Hossain',
          'Rashsundari Devi',
          'Ramabai',
          'Laxmi Lakra',
        ],
        correctAnswer: 4,
        explanation:
          "Laxmi Lakra, from a poor adivasi family, became the first Indian woman diesel engine mechanic and later a pilot, breaking stereotypes. The chapter highlights women's struggles against discrimination, with examples like Rashsundari Devi learning to read secretly, Rokeya Hossain establishing a girls' school, and Ramabai setting up a widows' mission. It discusses the women's movement campaigning for equal rights, leading to laws against domestic violence and higher education access.",
      },
      {
        level: 56,
        difficulty: 'Medium',
        question: "What was the significance of the women's movement in India?",
        options: [
          'It focused only on voting rights',
          'It campaigned for equal education, work opportunities, and against violence',
          "It aimed to restrict women's roles",
          'It was limited to urban areas',
        ],
        correctAnswer: 2,
        explanation:
          "The women's movement raised awareness about gender inequalities, leading to campaigns for girls' education, equal pay, and laws like the 2005 Domestic Violence Act. Examples include protests against dowry deaths and efforts to increase women's representation in politics. The chapter showcases inspiring women like Satyarani advocating against dowry and Shabana using media for awareness, emphasizing collective action for change.",
      },
      {
        level: 57,
        difficulty: 'Easy',
        question: 'What is the primary role of media in a democracy?',
        options: [
          'To entertain the public only',
          'To inform citizens and influence public opinion',
          'To sell products',
          'To control the government',
        ],
        correctAnswer: 2,
        explanation:
          "Media informs citizens about events, government actions, and issues, shaping public opinion and acting as a watchdog by exposing wrongdoing. Technologies like print, electronic, and digital media have changed how information is disseminated. The chapter discusses media's independence, though influenced by big business, and the need for critical analysis, with examples like local media addressing community issues.",
      },
      {
        level: 58,
        difficulty: 'Medium',
        question:
          'Why is it important for media to be independent in a democracy?',
        options: [
          'To promote government propaganda',
          'To provide balanced and unbiased information to citizens',
          'To focus only on advertisements',
          'To entertain without facts',
        ],
        correctAnswer: 2,
        explanation:
          "Independent media ensures diverse views, accountability, and balanced reporting, though often influenced by owners or advertisers. The chapter explains 'setting the agenda' where media highlights certain issues, like water shortages, influencing government response. It stresses ethical reporting and laws protecting media freedom, with examples of censorship threats.",
      },
      {
        level: 59,
        difficulty: 'Easy',
        question: 'What is a weekly market?',
        options: [
          'A permanent shop in a building',
          'A market held on specific days with temporary stalls',
          'An online shopping platform',
          'A large shopping mall',
        ],
        correctAnswer: 2,
        explanation:
          'Weekly markets are held on specific days, offering affordable goods without permanent structures, benefiting buyers with bargaining and sellers with low costs. The chapter describes various markets: neighborhood shops for daily needs, shopping complexes for branded items, and malls for high-end goods, highlighting how location and type affect prices and accessibility.',
      },
      {
        level: 60,
        difficulty: 'Medium',
        question: "What is the 'chain of markets'?",
        options: [
          'A series of shops in one location',
          'The process from producer to final buyer through middlemen',
          'A single market for all goods',
          'Online delivery system',
        ],
        correctAnswer: 2,
        explanation:
          'The chain of markets involves producers selling to traders, wholesalers to retailers, and finally to consumers, with each adding profit, making goods more expensive. Examples include vegetable farmers selling to agents who supply city markets. The chapter discusses inequality in markets, where small sellers earn less than mall owners, and the role of credit in weekly markets.',
      },
      {
        level: 61,
        difficulty: 'Easy',
        question:
          "In the story of 'A Shirt in the Market', what is the first step in the production process?",
        options: [
          'Weaving the cloth',
          'Growing cotton',
          'Selling in the market',
          'Exporting to foreign countries',
        ],
        correctAnswer: 2,
        explanation:
          "The production starts with farmers growing cotton, often facing low prices and debt due to market fluctuations. The chapter traces a shirt's journey: ginning, spinning, weaving, stitching by garment workers under poor conditions, and selling through exporters like Erode's market, where foreign buyers profit most while workers earn least.",
      },
      {
        level: 62,
        difficulty: 'Medium',
        question:
          'Why do garment workers in factories often face exploitation?',
        options: [
          'They earn high wages',
          'Due to pressure from exporters for low costs and fast delivery',
          'They have permanent jobs',
          'They work short hours',
        ],
        correctAnswer: 2,
        explanation:
          "Garment workers face low wages, long hours, and temporary jobs because exporters demand cheap, quick production to compete globally, leading to poor working conditions. Examples include Swapna, a cotton farmer in debt, and weavers dependent on merchants for yarn. The chapter highlights market inequalities, where big traders profit while small producers struggle, and suggests cooperatives like weavers' groups for fairer terms.",
      },
      {
        level: 63,
        difficulty: 'Easy',
        question: 'What was the Tawa Matsya Sangh (TMS)?',
        options: [
          'A government organization',
          'A cooperative of fisherfolk fighting for rights',
          'A private company',
          'A market for shirts',
        ],
        correctAnswer: 2,
        explanation:
          'TMS is a cooperative formed by displaced fisherfolk to regain fishing rights in the Tawa reservoir after being ousted by private contractors. Their successful protest led to government granting them rights, improving livelihoods. The chapter on struggles for equality discusses ongoing fights against discrimination based on caste, gender, religion, using constitutional rights and collective action.',
      },
      {
        level: 64,
        difficulty: 'Medium',
        question:
          'How does the Indian Constitution support struggles for equality?',
        options: [
          'By ignoring inequalities',
          'By recognizing equality and allowing protests and laws against discrimination',
          'By favoring certain groups',
          'By banning all movements',
        ],
        correctAnswer: 2,
        explanation:
          "The Constitution guarantees equality and fundamental rights, enabling movements to challenge violations through courts and protests. Examples include the TMS campaign and women's movements. The chapter emphasizes creative expressions like songs and writings in struggles, and how inequalities intersect with poverty, inspiring ongoing efforts for a fairer society.",
      },
    ],
    8: [
      {
        level: 1,
        difficulty: 'Easy',
        question:
          'What is the system of government where power is divided between the central authority and various constituent units of the country?',
        options: [
          'Unitary System',
          'Federalism',
          'Presidential System',
          'Monarchy',
        ],
        correctAnswer: 2,
        explanation:
          '**Federalism** is a key feature of the Indian Constitution. It refers to the existence of more than one level of government in the country. In India, we have governments at the state level and at the center. The Constitution clearly specifies the powers of each level of government through lists (Union List, State List, Concurrent List) to ensure they can function independently within their own spheres.',
      },
      {
        level: 2,
        difficulty: 'Medium',
        question:
          'Which feature of the Constitution ensures that no single organ of the state (legislature, executive, judiciary) can become too powerful?',
        options: [
          'Parliamentary Form of Government',
          'Fundamental Rights',
          'Separation of Powers',
          'Secularism',
        ],
        correctAnswer: 3,
        explanation:
          'The doctrine of **Separation of Powers** divides state power among three organs: the **Legislature** (our elected representatives who make laws), the **Executive** (a smaller group responsible for implementing laws and running the government), and the **Judiciary** (the system of courts that interprets laws). Each organ acts as a check on the others, ensuring a balance of power and preventing misuse of authority by any single branch.',
      },
      {
        level: 3,
        difficulty: 'Easy',
        question: "What does the term 'Secularism' mean in the Indian context?",
        options: [
          'The state promotes one official religion.',
          'The state is anti-religion and bans all religious practices.',
          'The state separates religion from state power and does not officially promote any one religion.',
          'Only religious leaders can hold government positions.',
        ],
        correctAnswer: 3,
        explanation:
          '**Secularism** in India means that the state does not have an official religion. The government must treat all religions with equal respect. It separates the power of religion from the power of the state. This ensures that no religious group dominates another and that all citizens are free to profess, practice, and propagate the religion of their choice.',
      },
      {
        level: 4,
        difficulty: 'Medium',
        question:
          'What is a key difference between Indian secularism and the American model of secularism?',
        options: [
          'The American model allows state intervention in religion, while the Indian model does not.',
          'The Indian model allows for state intervention in religious affairs to end social evils, while the American model has a strict separation.',
          'India has an official state religion, while America does not.',
          'There is no difference; both models are identical.',
        ],
        correctAnswer: 2,
        explanation:
          "While both India and the USA are secular, their approaches differ. The American model advocates a **strict 'wall of separation'** between religion and the state, meaning neither can interfere in the affairs of the other. Indian secularism is different; while the state maintains a principled distance from religion, it **can intervene** in religious personal laws to address discrimination and social evils (for example, by banning practices like untouchability or triple talaq). This is done to ensure that the rights of all citizens are protected.",
      },
      {
        level: 5,
        difficulty: 'Easy',
        question: 'The Parliament of India consists of which three components?',
        options: [
          'Lok Sabha, Rajya Sabha, and Prime Minister',
          'Lok Sabha, Rajya Sabha, and the President',
          'Lok Sabha, Vidhan Sabha, and the President',
          'Supreme Court, Lok Sabha, and Rajya Sabha',
        ],
        correctAnswer: 2,
        explanation:
          'The Parliament of India is the supreme law-making body. It is bicameral, meaning it has two houses. Its three constituent parts are:\n1.  **The President of India**.\n2.  **The Lok Sabha** (House of the People), whose members are directly elected by the people.\n3.  **The Rajya Sabha** (Council of States), whose members are elected by the elected members of the State Legislative Assemblies.',
      },
      {
        level: 6,
        difficulty: 'Medium',
        question: 'What is the primary role of the Opposition in Parliament?',
        options: [
          'To form a coalition government with the ruling party.',
          'To disrupt the proceedings of the House without any reason.',
          'To act as a critical watchdog, highlighting drawbacks in government policies and mobilising popular support.',
          'To pass all the bills introduced by the government without debate.',
        ],
        correctAnswer: 3,
        explanation:
          "The **Opposition** plays a crucial, constructive role in a healthy democracy. It is formed by all the political parties that are not part of the ruling party or coalition. Its main function is to ensure that the government is accountable. It does this by **critically examining** government policies and bills, asking questions during the Question Hour, participating in debates, and bringing attention to the government's failures.",
      },
      {
        level: 7,
        difficulty: 'Easy',
        question: "What does the concept of 'Rule of Law' mean?",
        options: [
          'The law is different for rich and poor people.',
          'The President is above the law.',
          'All persons in independent India are equal before the law, and the law cannot discriminate between citizens.',
          'Police officers have the right to punish anyone on the spot.',
        ],
        correctAnswer: 3,
        explanation:
          'The **Rule of Law**, a fundamental principle of the Indian Constitution, means that all laws apply equally to all citizens of the country, and no one can be above the law. It ensures that there is no arbitrary exercise of power. Whether it is a government official, a wealthy person, or even the President of the country, everyone is subject to the same laws.',
      },
      {
        level: 8,
        difficulty: 'Medium',
        question:
          'What was the significance of the Sedition Act of 1870, passed by the British?',
        options: [
          'It promoted freedom of speech and expression for Indians.',
          'It allowed Indians to protest peacefully against the British government.',
          'It was an arbitrary law that allowed the British to arrest and imprison any person protesting or criticising them.',
          'It established equal rights for Indians and the British.',
        ],
        correctAnswer: 3,
        explanation:
          "The **Sedition Act of 1870** is a classic example of the arbitrary and repressive nature of British colonial rule. Under this Act, the definition of 'sedition' was extremely broad, and any person protesting or criticising the British government could be arrested without due trial. Indian nationalists strongly opposed this law as it curtailed their fundamental rights and was used to suppress the freedom struggle.",
      },
      {
        level: 9,
        difficulty: 'Medium',
        question: "What is 'Judicial Review'?",
        options: [
          'The power of the judiciary to pass new laws.',
          'The power of the judiciary to strike down particular laws passed by the Parliament if they violate the basic structure of the Constitution.',
          'The process of appointing judges to the Supreme Court.',
          "The annual review of the judiciary's performance by the President.",
        ],
        correctAnswer: 2,
        explanation:
          "**Judicial Review** is a powerful tool wielded by the judiciary to uphold the Constitution. If the judiciary finds that a law passed by the Parliament is in violation of the Constitution's basic structure or fundamental rights, it has the power to declare that law unconstitutional and invalid. This power ensures that the legislature and the executive do not overstep their constitutional limits.",
      },
      {
        level: 10,
        difficulty: 'Hard',
        question: 'What is a Public Interest Litigation (PIL)?',
        options: [
          'A lawsuit filed by a person for their own personal gain.',
          'A mechanism that allows any individual or organisation to file a case in the High Court or Supreme Court on behalf of those whose rights are being violated.',
          'A legal notice sent only by the government.',
          'A type of criminal case involving property disputes.',
        ],
        correctAnswer: 2,
        explanation:
          '**Public Interest Litigation (PIL)**, introduced in the early 1980s, was a significant innovation by the Supreme Court to increase access to justice for the poor and marginalised. It allows any public-spirited citizen or organisation to approach the court for the protection of public interest, even if they are not the direct victim. A simple letter or telegram addressed to the court can be treated as a PIL. It has been used to address issues like bonded labour, environmental pollution, and the right to food.',
      },
      {
        level: 11,
        difficulty: 'Easy',
        question:
          'What is the document that the police prepare when they receive information about a cognizable offence, marking the official start of an investigation?',
        options: [
          'Judicial Custody Report (JCR)',
          'Charge Sheet',
          'First Information Report (FIR)',
          'Bail Application',
        ],
        correctAnswer: 3,
        explanation:
          'A **First Information Report (FIR)** is a written document prepared by the police when they receive information about the commission of a cognizable offence (an offence for which police can arrest without a warrant). It is the first step in the criminal justice process. The police are legally bound to register an FIR when a complaint is made, and the investigation begins only after the FIR has been lodged.',
      },
      {
        level: 12,
        difficulty: 'Medium',
        question:
          'According to Article 22 of the Constitution, what is a fundamental right of every arrested person?',
        options: [
          'The right to be tortured to confess the crime.',
          'The right to be kept in police custody for an indefinite period.',
          'The right to be informed of the offence for which they are being arrested and the right to be presented before a magistrate within 24 hours.',
          'The right to be denied a lawyer.',
        ],
        correctAnswer: 3,
        explanation:
          '**Article 22** of the Constitution and criminal law provide crucial safeguards to protect arrested individuals from the misuse of police power. These rights include:\n1.  The right to be informed of the reason for arrest at the time of arrest.\n2.  The right to be presented before a magistrate within 24 hours of arrest.\n3.  The right not to be ill-treated or tortured during arrest or in custody.\n4.  The right to consult a lawyer.',
      },
      {
        level: 13,
        difficulty: 'Easy',
        question:
          'The term for the original inhabitants of a region, often used to refer to tribal communities, is:',
        options: ['Migrants', 'Adivasis', 'Minorities', 'Immigrants'],
        correctAnswer: 2,
        explanation:
          "The word **'Adivasi'** literally means 'original inhabitants'. These are communities who lived in and often continue to have a close association with forests. They have their own distinct languages, religions, and cultures, which are often very different from mainstream society. Marginalisation has forced many Adivasi communities to move away from their traditional homes and lands.",
      },
      {
        level: 14,
        difficulty: 'Medium',
        question:
          'Which committee was set up by the government in 2005 to examine the social, economic, and educational status of the Muslim community in India?',
        options: [
          'Sarkaria Commission',
          'Mandal Commission',
          'Sachar Committee',
          'Balwant Rai Mehta Committee',
        ],
        correctAnswer: 3,
        explanation:
          "The **Sachar Committee**, headed by Justice Rajindar Sachar, was appointed to study the condition of the Muslim community. The committee's report, submitted in 2006, highlighted that the Muslim community was lagging behind other communities on various development indicators, such as literacy rates, access to public employment, and access to bank credit. This provided evidence of the marginalisation faced by the community.",
      },
      {
        level: 15,
        difficulty: 'Medium',
        question:
          'Which Act was passed in 1989 to protect Dalit and Adivasi communities from atrocities and humiliation by dominant castes?',
        options: [
          'Right to Information Act, 2005',
          'Forest Rights Act, 2006',
          'Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989',
          'Domestic Violence Act, 2005',
        ],
        correctAnswer: 3,
        explanation:
          'The **Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act** was enacted in response to the demands of Dalit and other groups that existing laws were inadequate to check the violence and humiliation they faced. This Act lists several crimes, such as forcing a member of an SC/ST to eat an inedible substance or parading them naked, and prescribes stringent punishments for these acts.',
      },
      {
        level: 16,
        difficulty: 'Easy',
        question:
          "Which fundamental right, according to the Supreme Court, includes the right to water, making it the government's responsibility to provide water for all?",
        options: [
          'Right to Equality (Article 14)',
          'Right to Freedom (Article 19)',
          'Right to Life (Article 21)',
          'Right to Education (Article 21A)',
        ],
        correctAnswer: 3,
        explanation:
          'The judiciary has interpreted the **Right to Life** under **Article 21** of the Constitution to include many other essential rights, such as the right to health, food, and a clean environment. The courts have held that the right to safe drinking water is a fundamental right, as it is indispensable for living a life with human dignity. Therefore, providing accessible and affordable water is a primary responsibility of the government.',
      },
      {
        level: 17,
        difficulty: 'Medium',
        question:
          'The Bhopal Gas Tragedy of 1984, which killed thousands of people, was caused by the leakage of which highly poisonous gas from a Union Carbide factory?',
        options: [
          'Carbon Monoxide (CO)',
          'Methyl Isocyanate (MIC)',
          'Sulphur Dioxide (SO2)',
          'Chlorine (Cl)',
        ],
        correctAnswer: 2,
        explanation:
          "The Bhopal Gas Tragedy, one of the world's worst industrial disasters, occurred on the night of December 2, 1984. It was caused by the accidental leakage of **Methyl Isocyanate (MIC)** gas from a pesticide plant owned by Union Carbide. The disaster highlighted the grave consequences of weak safety laws, poor enforcement by the government, and multinational corporations cutting costs on safety measures in developing countries, leading to a long and ongoing struggle for justice for the victims.",
      },
      {
        level: 18,
        difficulty: 'Easy',
        question: 'What is the Indian Constitution?',
        options: [
          'A religious book',
          'The supreme law that governs India',
          'A history book about India',
          'A collection of stories',
        ],
        correctAnswer: 2,
        explanation:
          'The Indian Constitution is the supreme law of India that lays down the framework defining fundamental political principles, establishes the structure of government, and defines the rights and duties of citizens. It came into effect on January 26, 1950.',
      },
      {
        level: 19,
        difficulty: 'Medium',
        question: 'Why do we need a Constitution?',
        options: [
          'To impress other countries',
          "To provide a framework for governance and protect citizens' rights",
          'To make laws complicated',
          'To give power to politicians',
        ],
        correctAnswer: 2,
        explanation:
          'A Constitution is needed to: establish the structure of government, define the powers of different institutions, protect fundamental rights of citizens, ensure rule of law, provide a framework for governance, and prevent misuse of power.',
      },
      {
        level: 20,
        difficulty: 'Easy',
        question: 'Who wrote the Indian Constitution?',
        options: [
          'Mahatma Gandhi alone',
          'The Constituent Assembly',
          'The British Parliament',
          'Jawaharlal Nehru alone',
        ],
        correctAnswer: 2,
        explanation:
          'The Indian Constitution was written by the Constituent Assembly, which consisted of 299 members representing different regions, communities, and political parties. Dr. B.R. Ambedkar chaired the Drafting Committee and is known as the Father of the Indian Constitution.',
      },
      {
        level: 21,
        difficulty: 'Medium',
        question: 'How long did it take to frame the Indian Constitution?',
        options: ['1 year', '2 years and 11 months', '5 years', '10 years'],
        correctAnswer: 2,
        explanation:
          'The Constituent Assembly took 2 years, 11 months, and 18 days to frame the Constitution (from December 9, 1946, to November 26, 1949). The Constitution came into effect on January 26, 1950, which is celebrated as Republic Day.',
      },
      {
        level: 22,
        difficulty: 'Easy',
        question: 'What are Fundamental Rights?',
        options: [
          'Rights only for government officials',
          'Basic rights guaranteed to all citizens',
          'Rights that can be easily changed',
          'Rights only for adults',
        ],
        correctAnswer: 2,
        explanation:
          'Fundamental Rights are basic rights guaranteed to all citizens by the Constitution. They include Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, and Right to Constitutional Remedies.',
      },
      {
        level: 23,
        difficulty: 'Medium',
        question:
          "Which article is known as the 'Heart and Soul' of the Constitution?",
        options: ['Article 14', 'Article 19', 'Article 32', 'Article 21'],
        correctAnswer: 3,
        explanation:
          "Article 32 (Right to Constitutional Remedies) is called the 'Heart and Soul' of the Constitution by Dr. B.R. Ambedkar. It allows citizens to directly approach the Supreme Court for enforcement of their Fundamental Rights through writs.",
      },
      {
        level: 24,
        difficulty: 'Easy',
        question: 'What does secularism mean in the Indian context?',
        options: [
          'India has no religions',
          'Only one religion is allowed',
          'The state treats all religions equally',
          'Religion is banned in India',
        ],
        correctAnswer: 3,
        explanation:
          'Secularism in India means the state has no official religion and treats all religions equally. The government cannot favor or discriminate against any religion, and all citizens have the freedom to practice, preach, and propagate their religion.',
      },
      {
        level: 25,
        difficulty: 'Medium',
        question:
          'What is the significance of the Preamble to the Constitution?',
        options: [
          "It's just a decoration",
          'It contains the basic philosophy and objectives of the Constitution',
          'It lists all the laws',
          "It's written in difficult language",
        ],
        correctAnswer: 2,
        explanation:
          'The Preamble declares India as a Sovereign, Socialist, Secular, Democratic Republic and outlines the objectives: Justice (social, economic, political), Liberty (of thought, expression, belief, faith, worship), Equality (of status and opportunity), and Fraternity (assuring dignity of individual and unity of nation).',
      },
      {
        level: 26,
        difficulty: 'Easy',
        question: "What does 'Justice' in the Preamble include?",
        options: [
          'Only punishment for crimes',
          'Social, economic, and political justice',
          'Justice only in courts',
          'Justice for rich people only',
        ],
        correctAnswer: 2,
        explanation:
          'Justice in the Preamble includes: Social justice (equal treatment regardless of caste, religion, gender), Economic justice (equal economic opportunities, fair distribution of wealth), and Political justice (equal political rights and participation).',
      },
      {
        level: 27,
        difficulty: 'Medium',
        question:
          'What is the difference between Fundamental Rights and Directive Principles?',
        options: [
          'There is no difference',
          'Fundamental Rights are enforceable; Directive Principles are guidelines for government',
          'Only Directive Principles are important',
          'Fundamental Rights are only for children',
        ],
        correctAnswer: 2,
        explanation:
          'Fundamental Rights are justiciable (enforceable in courts) and protect individual freedoms. Directive Principles are non-justiciable guidelines for the government to create a welfare state, focusing on socio-economic rights and policies for the greater good.',
      },
      {
        level: 28,
        difficulty: 'Easy',
        question: "What does 'parliamentary system' mean?",
        options: [
          'A system where Parliament building is important',
          'A system where the executive is responsible to the legislature',
          'A system where only MPs can vote',
          'A system without a President',
        ],
        correctAnswer: 2,
        explanation:
          'In a parliamentary system, the executive (Prime Minister and Cabinet) is drawn from and accountable to the legislature (Parliament). The PM remains in power as long as they have the majority support in the Lok Sabha.',
      },
      {
        level: 29,
        difficulty: 'Medium',
        question: 'What is federalism?',
        options: [
          'Rule by the federal government only',
          'Division of powers between central and state governments',
          'A type of democracy',
          'Government by the army',
        ],
        correctAnswer: 2,
        explanation:
          'Federalism is a system of government where power is divided between a central (federal) government and regional (state) governments. Each level has its own sphere of authority and can make laws on subjects assigned to them by the Constitution.',
      },
      {
        level: 30,
        difficulty: 'Easy',
        question: 'How many levels of government exist in India?',
        options: ['Two levels', 'Three levels', 'Four levels', 'Five levels'],
        correctAnswer: 2,
        explanation:
          'India has three levels of government: Central/Union Government (handles national issues), State Government (handles state-specific matters), and Local Government (Panchayati Raj in rural areas and Municipal bodies in urban areas).',
      },
      {
        level: 31,
        difficulty: 'Medium',
        question:
          'What are the three lists in the Constitution that divide powers?',
        options: [
          'Central, State, and Local Lists',
          'Union, State, and Concurrent Lists',
          'Executive, Legislative, and Judicial Lists',
          'Federal, Regional, and Municipal Lists',
        ],
        correctAnswer: 2,
        explanation:
          'The Constitution divides powers through three lists: Union List (subjects for Central government like defense, foreign affairs), State List (subjects for State governments like police, agriculture), and Concurrent List (subjects for both like education, forests).',
      },
      {
        level: 32,
        difficulty: 'Easy',
        question: 'What is the main role of the judiciary?',
        options: [
          'To make laws',
          'To implement laws',
          'To interpret laws and ensure justice',
          'To collect taxes',
        ],
        correctAnswer: 3,
        explanation:
          'The judiciary interprets laws, settles disputes, protects Fundamental Rights, ensures justice, acts as guardian of the Constitution, and provides checks and balances on the executive and legislative branches.',
      },
      {
        level: 33,
        difficulty: 'Medium',
        question: "What is 'separation of powers'?",
        options: [
          'Different political parties in power',
          'Division of government functions among legislature, executive, and judiciary',
          'Separation of central and state governments',
          'Different ministers for different departments',
        ],
        correctAnswer: 2,
        explanation:
          'Separation of powers means dividing government functions among three branches: Legislature (makes laws), Executive (implements laws), and Judiciary (interprets laws). This prevents concentration of power and ensures checks and balances.',
      },
      {
        level: 34,
        difficulty: 'Easy',
        question: "What does 'understanding marginalization' mean?",
        options: [
          'Understanding mathematics',
          'Understanding why certain groups are excluded from mainstream society',
          'Understanding geography',
          'Understanding technology',
        ],
        correctAnswer: 2,
        explanation:
          'Understanding marginalization means recognizing how certain groups (based on caste, religion, gender, economic status, or other factors) are pushed to the edges of society, denied equal opportunities, and excluded from decision-making processes.',
      },
      {
        level: 35,
        difficulty: 'Medium',
        question: 'Which communities are often marginalized in Indian society?',
        options: [
          'Only religious minorities',
          'Dalits, Adivasis, religious minorities, women, and economically disadvantaged groups',
          'Only urban poor',
          'Only elderly people',
        ],
        correctAnswer: 2,
        explanation:
          'Marginalized communities in India include: Scheduled Castes (Dalits), Scheduled Tribes (Adivasis), religious minorities (Muslims, Christians, etc.), women, transgender persons, economically disadvantaged groups, and people with disabilities.',
      },
      {
        level: 36,
        difficulty: 'Easy',
        question: "What does 'stereotype' mean?",
        options: [
          'A type of music system',
          'Fixed ideas about what people are like based on their group',
          'A scientific method',
          'A government policy',
        ],
        correctAnswer: 2,
        explanation:
          'Stereotypes are oversimplified, fixed ideas or beliefs about a particular group of people. They create prejudice and lead to discrimination by assuming all members of a group have the same characteristics.',
      },
      {
        level: 37,
        difficulty: 'Medium',
        question: 'How do stereotypes contribute to marginalization?',
        options: [
          'They help people understand each other better',
          'They create prejudice and discrimination against certain groups',
          'They have no effect on society',
          'They only exist in books',
        ],
        correctAnswer: 2,
        explanation:
          'Stereotypes contribute to marginalization by creating negative prejudices, justifying discrimination, limiting opportunities for affected groups, and perpetuating social inequalities. They prevent fair treatment and equal participation in society.',
      },
      {
        level: 38,
        difficulty: 'Easy',
        question: 'Who are Adivasis?',
        options: [
          'People from cities',
          'Original inhabitants of India, also known as Scheduled Tribes',
          'Government officials',
          'Foreign settlers',
        ],
        correctAnswer: 2,
        explanation:
          "Adivasis (meaning 'original inhabitants') are indigenous communities of India, constitutionally known as Scheduled Tribes. They have distinct cultures, languages, and traditional practices, and often live in forest and hilly regions.",
      },
      {
        level: 39,
        difficulty: 'Medium',
        question: 'What are the main challenges faced by Adivasis?',
        options: [
          'Too much government attention',
          'Loss of land, forests, displacement, and cultural erosion',
          'Too many job opportunities',
          'Excessive wealth',
        ],
        correctAnswer: 2,
        explanation:
          'Adivasis face challenges including: displacement due to development projects, loss of traditional lands and forests, cultural erosion, lack of access to education and healthcare, poverty, and discrimination in mainstream society.',
      },
      {
        level: 40,
        difficulty: 'Easy',
        question: 'What is the Forest Rights Act, 2006?',
        options: [
          'A law to cut more trees',
          'A law recognizing forest rights of Adivasis and forest dwellers',
          'A law to ban forests',
          'A law only for government officials',
        ],
        correctAnswer: 2,
        explanation:
          'The Forest Rights Act, 2006 recognizes the rights of forest-dwelling tribal communities and other traditional forest dwellers to forest resources that they have been traditionally using for their livelihood and habitat.',
      },
      {
        level: 41,
        difficulty: 'Medium',
        question: 'What constitutional provisions protect Adivasi rights?',
        options: [
          'No special provisions exist',
          'Fifth and Sixth Schedules, and various Articles',
          'Only regular laws apply',
          'International laws only',
        ],
        correctAnswer: 2,
        explanation:
          'The Constitution protects Adivasi rights through: Fifth Schedule (for tribal areas in mainland India), Sixth Schedule (for tribal areas in Northeast), Article 342 (defines Scheduled Tribes), reservations in education and employment, and special provisions for their development.',
      },
      {
        level: 42,
        difficulty: 'Easy',
        question: "What does 'confronting marginalization' mean?",
        options: [
          'Ignoring marginalized groups',
          'Fighting against marginalization through laws, policies, and social action',
          'Creating more marginalization',
          'Moving marginalized groups elsewhere',
        ],
        correctAnswer: 2,
        explanation:
          'Confronting marginalization means actively working to address and eliminate the exclusion of marginalized groups through constitutional provisions, affirmative action policies, legal protections, and social reforms to ensure equality and justice.',
      },
      {
        level: 43,
        difficulty: 'Medium',
        question: 'How does the Indian Constitution address marginalization?',
        options: [
          'It ignores marginalized groups',
          'Through Fundamental Rights, reservations, and special provisions',
          'By creating separate countries',
          'Through punishment only',
        ],
        correctAnswer: 2,
        explanation:
          'The Constitution addresses marginalization through: Fundamental Rights (equality, non-discrimination), reservations in education and employment, special provisions (Fifth and Sixth Schedules), Directive Principles for welfare, and Right to Constitutional Remedies.',
      },
      {
        level: 44,
        difficulty: 'Easy',
        question: 'What are civil rights?',
        options: [
          'Rights only for civil servants',
          'Rights that belong to all citizens by virtue of their citizenship',
          'Rights only in civil courts',
          'Rights that can be bought',
        ],
        correctAnswer: 2,
        explanation:
          'Civil rights are basic rights that belong to all citizens, ensuring equal treatment under the law regardless of race, religion, caste, gender, or other characteristics. They include rights to equality, freedom, and protection from discrimination.',
      },
      {
        level: 45,
        difficulty: 'Medium',
        question: 'What was the American Civil Rights Movement?',
        options: [
          'A war between states',
          'A struggle by African Americans for equal rights and an end to racial discrimination',
          'A political party formation',
          'An economic reform',
        ],
        correctAnswer: 2,
        explanation:
          'The American Civil Rights Movement (1950s-1960s) was a struggle by African Americans to end legal segregation and discrimination, secure equal rights, and gain full citizenship. Key figures included Martin Luther King Jr. and Rosa Parks.',
      },
      {
        level: 46,
        difficulty: 'Easy',
        question: 'Who was Martin Luther King Jr.?',
        options: [
          'An American President',
          'A civil rights leader who fought against racial discrimination',
          'A scientist',
          'A business leader',
        ],
        correctAnswer: 2,
        explanation:
          "Martin Luther King Jr. was a prominent leader of the American Civil Rights Movement who advocated for nonviolent resistance to racial discrimination. He is famous for his 'I Have a Dream' speech and won the Nobel Peace Prize in 1964.",
      },
      {
        level: 47,
        difficulty: 'Medium',
        question: 'What can we learn from the American Civil Rights Movement?',
        options: [
          'Violence is the only solution',
          'Organized peaceful struggle can bring about social change',
          'Change is impossible',
          'Only governments can create change',
        ],
        correctAnswer: 2,
        explanation:
          'The American Civil Rights Movement teaches us that: organized peaceful resistance can create social change, unity among affected groups is powerful, legal and constitutional methods can be effective, and persistent struggle for justice can overcome deeply entrenched discrimination.',
      },
      {
        level: 48,
        difficulty: 'Easy',
        question: "What does 'public facilities' mean?",
        options: [
          'Facilities only for government officials',
          'Services and amenities provided by the government for all citizens',
          'Private company services',
          'Facilities only for rich people',
        ],
        correctAnswer: 2,
        explanation:
          'Public facilities are services and amenities provided by the government for the use of all citizens, such as schools, hospitals, parks, roads, public transport, water supply, sanitation, and electricity. They should be accessible to everyone regardless of economic status.',
      },
      {
        level: 49,
        difficulty: 'Medium',
        question: 'Why should public facilities be available to all?',
        options: [
          'To make government look good',
          'Because they are funded by taxpayers and essential for dignified life',
          'To create employment only',
          'To compete with private companies',
        ],
        correctAnswer: 2,
        explanation:
          "Public facilities should be available to all because: they are funded through taxes paid by citizens, they are essential for a dignified life, they ensure equality of opportunity, they fulfill the government's responsibility to provide basic services, and they promote social justice.",
      },
      {
        level: 50,
        difficulty: 'Easy',
        question: 'What is privatization?',
        options: [
          'Making everything private property',
          'Transfer of ownership from government to private companies',
          'Keeping things secret',
          'Personal ownership of houses',
        ],
        correctAnswer: 2,
        explanation:
          'Privatization is the transfer of ownership and control of public services or assets from the government to private companies. Examples include privatization of airlines, telecom services, or water supply systems.',
      },
      {
        level: 51,
        difficulty: 'Medium',
        question:
          'What are the advantages and disadvantages of privatization of public services?',
        options: [
          'Only advantages exist',
          'Advantages: efficiency, quality; Disadvantages: profit motive may exclude poor, higher costs',
          'Only disadvantages exist',
          'No difference from government services',
        ],
        correctAnswer: 2,
        explanation:
          'Advantages of privatization: improved efficiency, better quality, innovation. Disadvantages: profit motive may lead to exclusion of poor people, higher costs, reduced access, potential compromise on universal coverage for essential services.',
      },
      {
        level: 52,
        difficulty: 'Easy',
        question: 'What is the Right to Water?',
        options: [
          'Right to waste water',
          'Right of access to safe and clean drinking water',
          'Right to pollute water bodies',
          'Right to sell water',
        ],
        correctAnswer: 2,
        explanation:
          "The Right to Water means every person has the right to access safe, clean, accessible, and affordable drinking water for personal and domestic use. It's essential for life and dignity and is recognized as a human right.",
      },
      {
        level: 53,
        difficulty: 'Medium',
        question:
          'How does lack of access to public facilities affect different social groups differently?',
        options: [
          'It affects everyone equally',
          'Poor, marginalized communities are disproportionately affected',
          'It only affects rural areas',
          'It only affects urban areas',
        ],
        correctAnswer: 2,
        explanation:
          'Lack of public facilities affects marginalized communities more severely because: they cannot afford private alternatives, they often live in areas with poor infrastructure, they have less political voice to demand services, and they depend more heavily on public services for basic needs.',
      },
      {
        level: 54,
        difficulty: 'Easy',
        question: "What does 'law and social justice' mean?",
        options: [
          'Laws only for lawyers',
          'Using law as a tool to ensure fairness and equality in society',
          'Social laws only',
          'Justice only in courts',
        ],
        correctAnswer: 2,
        explanation:
          'Law and social justice means using legal framework and laws as tools to create a fair and equitable society, protect the rights of all citizens, eliminate discrimination, and ensure that everyone has equal opportunities and access to resources.',
      },
      {
        level: 55,
        difficulty: 'Medium',
        question: 'How can new laws be made to address social problems?',
        options: [
          'Only the Prime Minister can make laws',
          'Through parliamentary process after identifying social issues and public consultation',
          'Laws cannot address social problems',
          'Only courts can make laws',
        ],
        correctAnswer: 2,
        explanation:
          'New laws are made through: identifying social problems and needs, public consultation and debate, drafting bills, introduction in Parliament, committee scrutiny, debate and voting, and presidential assent. Civil society and advocacy groups play important roles in pushing for new laws.',
      },
      {
        level: 56,
        difficulty: 'Easy',
        question: 'What is domestic violence?',
        options: [
          'Violence only outside the home',
          'Physical, emotional, or economic abuse within the household',
          'Violence by strangers',
          'Only physical fighting',
        ],
        correctAnswer: 2,
        explanation:
          'Domestic violence includes physical violence (hitting, slapping), emotional violence (threats, insults), sexual violence, and economic violence (controlling money, preventing work) committed by family members or intimate partners within the home.',
      },
      {
        level: 57,
        difficulty: 'Medium',
        question:
          'What is the Protection of Women from Domestic Violence Act, 2005?',
        options: [
          'A law only for working women',
          'A law providing legal protection and remedies for women facing domestic violence',
          "A law that restricts women's freedom",
          'A law only for urban women',
        ],
        correctAnswer: 2,
        explanation:
          'The Protection of Women from Domestic Violence Act, 2005 provides comprehensive legal protection to women against domestic violence. It includes provisions for protection orders, residence orders, monetary relief, and recognizes various forms of abuse beyond just physical violence.',
      },
      {
        level: 58,
        difficulty: 'Easy',
        question:
          'Why was a Constitution necessary for India at the time of independence?',
        options: [
          'To continue British laws without changes',
          'To provide a framework for governance and protect fundamental rights',
          'To divide the country into smaller states',
          'To establish a monarchy',
        ],
        correctAnswer: 2,
        explanation:
          'India needed a Constitution to set up a democratic government after independence from colonial rule, ensuring justice, liberty, and equality for all citizens. The Constitution was drafted by the Constituent Assembly, which included representatives from diverse backgrounds, and took almost three years to complete, coming into effect on 26 January 1950. It addressed the challenges of a vast, diverse country with a history of inequality under British rule, where Indians had limited rights. Key features include federalism (division of powers between center and states), parliamentary form of government, separation of powers among legislature, executive, and judiciary, and fundamental rights to protect against arbitrary state actions. The Preamble outlines the ideals of justice, liberty, equality, and fraternity, reflecting the vision of leaders like Dr. B.R. Ambedkar, who chaired the Drafting Committee.',
      },
      {
        level: 59,
        difficulty: 'Medium',
        question:
          'What is the significance of Fundamental Rights in the Indian Constitution?',
        options: [
          'They allow the government unlimited power',
          'They protect citizens from state tyranny and ensure equality',
          'They apply only to certain castes',
          'They can be ignored during emergencies',
        ],
        correctAnswer: 2,
        explanation:
          "Fundamental Rights are enshrined in the Constitution to safeguard individual freedoms and prevent misuse of power by the state, including rights to equality, freedom, against exploitation, freedom of religion, cultural and educational rights, and constitutional remedies. These rights emerged from the nationalist movement's demand for equality, countering colonial discrimination. For instance, the right to equality prohibits discrimination and untouchability, while the right to freedom includes speech and expression. Violations can be challenged in court, as seen in cases where laws conflicting with these rights are struck down. The Constitution balances these with Directive Principles of State Policy, which guide the government towards social and economic welfare, though not enforceable, highlighting the document's role in promoting a just society.",
      },
      {
        level: 60,
        difficulty: 'Easy',
        question: 'What does secularism mean in the Indian context?',
        options: [
          'The state promotes one religion',
          'The state is separate from religion and treats all religions equally',
          'Religion is banned in public life',
          'Only majority religions are recognized',
        ],
        correctAnswer: 2,
        explanation:
          "Secularism in India means the state does not have an official religion and ensures freedom of religion while intervening to prevent religious discrimination or oppression. Unlike some countries where secularism strictly separates religion from state affairs, Indian secularism allows the state to support religious institutions equally, such as subsidies for pilgrimages or reforms in religious practices like banning untouchability. This approach addresses India's religious diversity and history of conflicts, like the partition, by protecting minorities and promoting harmony. Examples include the state's role in ensuring equal treatment in education and employment, and laws against forced conversions or discrimination based on religion.",
      },
      {
        level: 61,
        difficulty: 'Medium',
        question: 'How does the Indian state ensure secularism in practice?',
        options: [
          'By enforcing a uniform civil code immediately',
          'By intervening in religious practices that violate dignity and supporting all religions equally',
          'By banning all religious festivals',
          'By favoring the majority religion in laws',
        ],
        correctAnswer: 2,
        explanation:
          "The Indian state maintains secularism by distancing itself from religious institutions while intervening to uphold constitutional values, such as reforming Hindu laws to allow Dalits temple entry or providing equal support to religious schools. It prevents religious domination by not allowing laws based solely on religion and protects religious freedoms through Fundamental Rights. Historical contexts like coercion in other countries (e.g., Saudi Arabia's Islamic state or Israel's Jewish state) contrast with India's model, which evolved from the freedom struggle's emphasis on unity across religions. The chapter discusses threats to secularism, like communalism, and the need for citizens to uphold these principles.",
      },
      {
        level: 62,
        difficulty: 'Easy',
        question: 'Why do we need a Parliament in a democracy?',
        options: [
          'To enforce laws without debate',
          'To represent the people, make laws, and control the government',
          'To appoint judges',
          'To collect taxes directly',
        ],
        correctAnswer: 2,
        explanation:
          "Parliament is essential for representing diverse voices, debating and passing laws, and holding the executive accountable through mechanisms like Question Hour. It consists of the Lok Sabha (directly elected, 543 members) and Rajya Sabha (indirectly elected, 245 members), with the President as part of it. The chapter explains the nationalist movement's push for elected representation against colonial rule. Parliament approves budgets, discusses national issues, and selects the executive from the majority party or coalition. Marginalized groups have reserved seats to ensure inclusion, reflecting the Constitution's commitment to representation.",
      },
      {
        level: 63,
        difficulty: 'Medium',
        question:
          'What is the process of making a law in the Indian Parliament?',
        options: [
          'The President directly makes laws',
          'Bills are introduced, debated in committees, passed by both houses, and assented by the President',
          'Laws are made only by the judiciary',
          'States make all national laws',
        ],
        correctAnswer: 2,
        explanation:
          "Law-making starts with identifying needs through public or executive inputs, drafting bills (ordinary or money), introducing in either house, debating in committees, voting in both houses, and presidential assent. If disagreements occur, joint sessions resolve them. The opposition plays a key role in scrutiny. Examples include laws on domestic violence, arising from women's movements. The chapter highlights how Parliament controls the executive via no-confidence motions and approvals, ensuring democratic accountability.",
      },
      {
        level: 64,
        difficulty: 'Easy',
        question: 'What is the primary role of the judiciary in India?',
        options: [
          'To make laws',
          'To interpret laws, resolve disputes, and protect the Constitution',
          'To execute government policies',
          'To collect revenue',
        ],
        correctAnswer: 2,
        explanation:
          'The judiciary interprets the Constitution and laws, settles disputes between citizens, governments, or center-states, and safeguards Fundamental Rights. It includes the Supreme Court (apex, original and appellate jurisdiction), High Courts (state-level), and District Courts (civil and criminal). Independence is ensured through appointment processes, security of tenure, and separation from executive influence. The chapter discusses colonial-era inequalities in justice and the need for an impartial system post-independence.',
      },
      {
        level: 65,
        difficulty: 'Medium',
        question:
          'What is the significance of Public Interest Litigation (PIL) in the Indian judiciary?',
        options: [
          'It allows only the government to file cases',
          'It enables any citizen to approach courts for public issues, expanding access to justice',
          'It is used only for criminal cases',
          'It restricts judicial powers',
        ],
        correctAnswer: 2,
        explanation:
          "PIL, introduced in the 1980s, allows individuals or groups to file cases on behalf of marginalized sections without being directly affected, addressing issues like environmental protection or human rights violations. This has made justice more accessible, reducing delays and costs. The integrated judiciary ensures uniform law application, with appeals from lower to higher courts. Examples include cases on right to food or clean air, showing the judiciary's role in upholding constitutional values against executive overreach.",
      },
      {
        level: 66,
        difficulty: 'Easy',
        question:
          'What does marginalisation mean in the context of Indian society?',
        options: [
          'Being at the center of power',
          'Being excluded from mainstream society due to social, economic, or cultural reasons',
          'Having equal opportunities',
          'Being part of the majority community',
        ],
        correctAnswer: 2,
        explanation:
          'Marginalisation refers to communities being pushed to the edges of society, facing discrimination and limited access to resources. Examples include Adivasis (8% of population, diverse tribes with unique cultures, displaced by development projects) and Muslims (facing stereotypes and lower socio-economic indicators). Reasons include cultural differences, economic exploitation, and social prejudices, leading to poverty cycles. The chapter uses stories like Rathnam (Dalit facing untouchability) to illustrate multiple layers of exclusion.',
      },
      {
        level: 67,
        difficulty: 'Medium',
        question:
          'How does marginalisation affect Adivasi communities in India?',
        options: [
          'It provides them with better education and jobs',
          'It leads to loss of land, traditions, and livelihoods due to displacement and stereotyping',
          'It integrates them fully into urban life',
          'It has no impact on their culture',
        ],
        correctAnswer: 2,
        explanation:
          "Adivasis face marginalisation through forest laws restricting access, mining and dam projects displacing millions without adequate compensation, and stereotypes portraying them as 'backward.' This results in loss of languages, customs, and economic opportunities, with high illiteracy and poverty rates. The chapter discusses their rich traditions, like oral histories and nature worship, and how development policies often ignore their rights, leading to movements for recognition.",
      },
      {
        level: 68,
        difficulty: 'Easy',
        question:
          'What constitutional provisions help confront marginalisation in India?',
        options: [
          'No provisions exist',
          'Fundamental Rights and specific laws like the SC/ST Prevention of Atrocities Act',
          'Only reservations in jobs',
          'Bans on all communities',
        ],
        correctAnswer: 2,
        explanation:
          "The Constitution provides Fundamental Rights against discrimination and exploitation, and Directive Principles for welfare. Laws like the 1989 SC/ST Act criminalize atrocities, while reservations in education, jobs, and legislatures aim to uplift Scheduled Castes, Tribes, and OBCs. The chapter highlights invoking these rights through courts and movements, like Dalits asserting dignity by adopting 'Dalit' as a term of pride.",
      },
      {
        level: 69,
        difficulty: 'Medium',
        question:
          'How have marginalized groups used the Constitution to seek justice?',
        options: [
          'By ignoring laws',
          'Through movements, invoking rights, and demanding implementation of protective laws',
          'By separating from society',
          'By rejecting reservations',
        ],
        correctAnswer: 2,
        explanation:
          'Groups like Dalits and Adivasis have organized movements, such as the Dalit Panthers in the 1970s, to fight discrimination and demand land rights. Government schemes like scholarships and free hostels support education, while cultural assertions, like Adivasi demands for autonomy, use constitutional provisions. The chapter discusses the Employment of Manual Scavengers Act 1993 (updated 2013) banning hazardous work, showing ongoing struggles for dignity and equality.',
      },
      {
        level: 70,
        difficulty: 'Easy',
        question:
          "What is the government's role in providing public facilities?",
        options: [
          'To privatize all services',
          'To ensure essential services like water, healthcare, and education are accessible to all',
          'To provide only to urban areas',
          'To ignore rural needs',
        ],
        correctAnswer: 2,
        explanation:
          'Public facilities are essential for basic needs and dignity, with the government responsible under the Constitution to provide them equitably. Examples include water supply in Chennai, where shortages affect the poor more, relying on tankers. The chapter contrasts adequate facilities in some areas with deficiencies elsewhere, highlighting the right to life including access to water, healthcare, and education.',
      },
      {
        level: 71,
        difficulty: 'Medium',
        question:
          'What are the challenges in water supply as a public facility in India?',
        options: [
          'Excess supply everywhere',
          'Inequitable distribution, shortages, and privatization leading to higher costs for the poor',
          'No government involvement',
          'Free water for all without issues',
        ],
        correctAnswer: 2,
        explanation:
          "Water supply faces issues like seasonal shortages, unsafe sources causing diseases, and unequal access, with affluent areas getting more than slums. Privatization, as in some cities, increases prices, violating the right to water recognized by courts. The chapter discusses successful public systems like Porto Alegre, Brazil, with community involvement, and India's need for sustainable management to meet constitutional obligations.",
      },
      {
        level: 72,
        difficulty: 'Easy',
        question: 'Why are laws necessary for social justice?',
        options: [
          'To protect only businesses',
          'To ensure fair treatment, protect workers, consumers, and the environment',
          'To allow exploitation',
          'To ban all industries',
        ],
        correctAnswer: 2,
        explanation:
          "Laws provide a framework for justice, addressing power imbalances between workers and employers or consumers and producers. The Bhopal gas tragedy (1984) exemplifies the need for safety laws, where Union Carbide's negligence caused thousands of deaths and ongoing suffering, with inadequate compensation. The chapter stresses government's role in enforcement to prevent such disasters.",
      },
      {
        level: 73,
        difficulty: 'Medium',
        question:
          'What lessons can be learned from the Bhopal gas tragedy regarding law enforcement?',
        options: [
          'Laws are not needed for industries',
          'Strong laws and strict enforcement are crucial to hold foreign companies accountable and protect citizens',
          'Compensation is always sufficient',
          'Disasters are unavoidable',
        ],
        correctAnswer: 2,
        explanation:
          'The tragedy highlighted weak enforcement, allowing hazardous operations in populated areas, leading to the MIC leak. Despite laws, implementation fails due to corruption or pressure. Post-Bhopal, laws were strengthened, but challenges persist, like in worker safety (e.g., child labor bans) and environmental protection (e.g., Clean Ganga failures). The chapter advocates for citizen action to demand better enforcement for social justice.',
      },
      {
        level: 74,
        difficulty: 'Easy',
        question: 'What is the purpose of worker protection laws in India?',
        options: [
          'To reduce business profits',
          'To ensure safe working conditions, fair wages, and prevent exploitation',
          'To allow child labor',
          'To ignore environmental impacts',
        ],
        correctAnswer: 2,
        explanation:
          "Laws like minimum wages, working hours limits, and bans on child labor aim to protect vulnerable workers from exploitation in markets where producers prioritize profits. Examples include textile factories violating safety norms, leading to fires. The chapter discusses how global competition pressures reduce costs, often at workers' expense, necessitating government intervention.",
      },
      {
        level: 75,
        difficulty: 'Medium',
        question: 'How do environmental laws contribute to social justice?',
        options: [
          'By allowing unlimited pollution',
          'By regulating industries to protect the environment and public health',
          'By focusing only on profits',
          'By exempting foreign companies',
        ],
        correctAnswer: 2,
        explanation:
          'Environmental laws mandate safe waste disposal and pollution controls, as seen in cases where courts ordered industries to close for violations. However, enforcement is weak, leading to issues like polluted rivers. The chapter links this to worker and consumer rights, emphasizing that markets alone cannot ensure justice, and strong laws with accountability are essential for a fair society.',
      },
    ],
    9: [
      {
        level: 1,
        difficulty: 'Easy',
        question: 'What is democracy?',
        options: [
          'Rule by the military',
          'Government by the people, of the people, for the people',
          'Rule by religious leaders',
          'Government by the richest people',
        ],
        correctAnswer: 2,
        explanation:
          'Democracy is a form of government where power lies with the people. Citizens participate in decision-making either directly or through elected representatives. The key features include political equality, majority rule with minority rights, and accountability of rulers to the people.',
      },
      {
        level: 2,
        difficulty: 'Medium',
        question:
          'What are the key features that make a government democratic?',
        options: [
          'Only regular elections',
          'Elections, rule of law, respect for rights, and accountability',
          'Only majority rule',
          'Only written constitution',
        ],
        correctAnswer: 2,
        explanation:
          "A democratic government must have: free and fair elections, rule of law (everyone equal before law), fundamental rights protection, accountability to people, separation of powers, independent judiciary, and respect for political opposition. Elections alone don't make a democracy.",
      },
      {
        level: 3,
        difficulty: 'Easy',
        question:
          'Why is democracy considered better than other forms of government?',
        options: [
          "It's always the fastest in decision-making",
          'It promotes equality, protects rights, and allows peaceful change',
          'It always leads to economic prosperity',
          'It eliminates all conflicts',
        ],
        correctAnswer: 2,
        explanation:
          'Democracy is better because it: promotes political equality among citizens, protects individual rights and freedoms, provides methods for resolving conflicts peacefully, allows for correction of mistakes through elections, and ensures government accountability to the people.',
      },
      {
        level: 4,
        difficulty: 'Medium',
        question:
          'What is the difference between direct and indirect democracy?',
        options: [
          'There is no difference',
          'Direct democracy: people decide directly; Indirect democracy: people elect representatives',
          'Direct democracy is always better',
          'Only size of country matters',
        ],
        correctAnswer: 2,
        explanation:
          'Direct democracy: Citizens directly participate in decision-making (like in ancient Athens or Swiss referendums). Indirect democracy: People elect representatives who make decisions on their behalf (like in India). Indirect democracy is more practical for large populations.',
      },
      {
        level: 5,
        difficulty: 'Easy',
        question: 'What is universal adult franchise?',
        options: [
          'Right to vote only for educated people',
          'Right to vote for all adult citizens regardless of caste, religion, gender, or wealth',
          'Right to vote only for men',
          'Right to vote only for property owners',
        ],
        correctAnswer: 2,
        explanation:
          'Universal adult franchise means every adult citizen (18 years and above in India) has the right to vote in elections regardless of their caste, religion, gender, education, or economic status. This ensures political equality and is a cornerstone of democracy.',
      },
      {
        level: 6,
        difficulty: 'Medium',
        question: 'What are the arguments against democracy?',
        options: [
          'Democracy has no disadvantages',
          'Slow decision-making, leaders may not be qualified, corruption, majority tyranny',
          "Only that it's too expensive",
          'Democracy is perfect in all ways',
        ],
        correctAnswer: 2,
        explanation:
          'Arguments against democracy include: leaders elected may not be most knowledgeable, decision-making can be slow due to consultations, corruption and vote-buying possible, elected leaders may not fulfill promises, and majority may oppress minorities. However, these can be addressed through institutional reforms.',
      },
      {
        level: 7,
        difficulty: 'Easy',
        question: 'What is a constitution?',
        options: [
          'A history book about the country',
          'The supreme law that defines government structure and citizen rights',
          'A religious text',
          'A collection of court judgments',
        ],
        correctAnswer: 2,
        explanation:
          'A constitution is the supreme law of a country that: establishes the framework of government, defines powers of different institutions, guarantees fundamental rights of citizens, lays down procedures for governance, and serves as the highest legal authority that all other laws must conform to.',
      },
      {
        level: 8,
        difficulty: 'Medium',
        question: 'Why do countries need a constitution?',
        options: [
          'Just to follow international trends',
          'To provide framework for government, protect rights, and limit power',
          'Only to impress other nations',
          'To make governance complicated',
        ],
        correctAnswer: 2,
        explanation:
          'Countries need a constitution to: establish basic rules for government functioning, define power and responsibilities of institutions, protect fundamental rights of citizens, provide procedures for resolving conflicts, ensure rule of law, and prevent arbitrary use of power by rulers.',
      },
      {
        level: 9,
        difficulty: 'Easy',
        question: 'When did the Indian Constitution come into effect?',
        options: [
          'August 15, 1947',
          'January 26, 1950',
          'November 26, 1949',
          'December 31, 1949',
        ],
        correctAnswer: 2,
        explanation:
          'The Indian Constitution came into effect on January 26, 1950, which is celebrated as Republic Day. Although it was adopted by the Constituent Assembly on November 26, 1949, it was given time for preparation and implementation. This date was chosen to honor the Purna Swaraj declaration of 1930.',
      },
      {
        level: 10,
        difficulty: 'Medium',
        question:
          'What is the significance of the Preamble to the Indian Constitution?',
        options: [
          "It's just an introduction with no importance",
          'It contains the philosophy, objectives, and basic structure of the Constitution',
          'It only mentions the date of adoption',
          "It's written in decorative language",
        ],
        correctAnswer: 2,
        explanation:
          'The Preamble is significant because it: declares India as Sovereign, Socialist, Secular, Democratic Republic, outlines objectives (Justice, Liberty, Equality, Fraternity), reflects the aspirations of the people, serves as a key to interpreting the Constitution, and embodies the basic philosophy and fundamental values.',
      },
      {
        level: 11,
        difficulty: 'Easy',
        question: "What does 'Sovereign' mean in the Preamble?",
        options: [
          'India is ruled by a king',
          'India is independent and not subject to any external authority',
          'India is a rich country',
          'India has a strong army',
        ],
        correctAnswer: 2,
        explanation:
          'Sovereign means India is completely independent and free to make its own decisions. No external power can impose its will on India. The country has supreme authority within its territory and can conduct its internal and external affairs according to its own will.',
      },
      {
        level: 12,
        difficulty: 'Medium',
        question: "What does 'Socialist' mean in the Indian context?",
        options: [
          'Complete government control over economy',
          'Mixed economy with focus on reducing inequalities and social welfare',
          'Only private ownership allowed',
          'Communist system of government',
        ],
        correctAnswer: 2,
        explanation:
          'Socialist in Indian context means: commitment to reducing economic inequalities, ensuring social and economic justice, mixed economy (both public and private sectors), welfare state approach, and providing equal opportunities to all citizens regardless of their economic background.',
      },
      {
        level: 13,
        difficulty: 'Easy',
        question: "What does 'Secular' mean in the Indian Constitution?",
        options: [
          'India is against all religions',
          'The state has no official religion and treats all religions equally',
          'Only Hindu religion is allowed',
          'Religious practices are banned',
        ],
        correctAnswer: 2,
        explanation:
          'Secular means the state has no official religion and maintains equal distance from all religions. The government cannot favor any religion, all citizens have religious freedom, and the state ensures equal respect and protection for all faiths while remaining neutral in religious matters.',
      },
      {
        level: 14,
        difficulty: 'Medium',
        question: 'What are the main features of the Indian Constitution?',
        options: [
          'Only federal structure',
          'Federalism, parliamentary system, fundamental rights, secular nature, adult franchise',
          'Only fundamental rights',
          'Only parliamentary system',
        ],
        correctAnswer: 2,
        explanation:
          'Key features include: Federal system with unitary bias, Parliamentary form of government, Fundamental Rights and Duties, Directive Principles of State Policy, Secular state, Universal Adult Franchise, Independent Judiciary, and detailed written constitution making it one of the longest constitutions in the world.',
      },
      {
        level: 15,
        difficulty: 'Easy',
        question: 'What is an election?',
        options: [
          'A festival celebration',
          'A process of choosing representatives through voting',
          'A government meeting',
          'A court proceeding',
        ],
        correctAnswer: 2,
        explanation:
          "An election is a formal process where citizens choose their representatives for various levels of government through voting. It's the primary mechanism through which people participate in democracy and hold their representatives accountable.",
      },
      {
        level: 16,
        difficulty: 'Medium',
        question: 'What makes an election democratic?',
        options: [
          'Only the presence of multiple candidates',
          'Free, fair, competitive elections with equal opportunity and choice',
          'Only regular timing',
          'Only secret ballot',
        ],
        correctAnswer: 2,
        explanation:
          'Democratic elections must be: Free (no coercion), Fair (equal opportunity for all candidates), Competitive (real choice between alternatives), Regular (held periodically), Inclusive (universal adult franchise), and Transparent (conducted by independent body with proper procedures).',
      },
      {
        level: 17,
        difficulty: 'Easy',
        question: 'Who conducts elections in India?',
        options: [
          'The Prime Minister',
          'The Election Commission of India',
          'State governments only',
          'The Supreme Court',
        ],
        correctAnswer: 2,
        explanation:
          'The Election Commission of India (ECI) is an independent constitutional body that conducts and supervises elections to Parliament, State Legislatures, and offices of President and Vice-President. It ensures free and fair elections and has the power to make rules and enforce the Model Code of Conduct.',
      },
      {
        level: 18,
        difficulty: 'Medium',
        question: 'What is the Model Code of Conduct?',
        options: [
          'Rules for government employees only',
          'Guidelines for political parties and candidates during elections',
          'Rules for voters only',
          'Constitutional provisions for elections',
        ],
        correctAnswer: 2,
        explanation:
          'Model Code of Conduct is a set of guidelines issued by the Election Commission for political parties and candidates during elections. It covers conduct of public meetings, processions, polling day activities, use of government resources, and aims to ensure level playing field for all contestants.',
      },
      {
        level: 19,
        difficulty: 'Easy',
        question: 'What is a constituency?',
        options: [
          'A political party office',
          'A geographical area represented by an elected member',
          'A government building',
          'A voting machine',
        ],
        correctAnswer: 2,
        explanation:
          'A constituency is a specific geographical area whose voters elect one representative to the legislature. India is divided into constituencies for Lok Sabha (543) and State Legislative Assemblies. Each constituency should have roughly equal population to ensure equal representation.',
      },
      {
        level: 20,
        difficulty: 'Medium',
        question:
          'What is the difference between a general election and by-election?',
        options: [
          'No difference exists',
          'General elections held for all constituencies together; by-elections for vacant seats',
          'General elections are more important',
          'Only timing is different',
        ],
        correctAnswer: 2,
        explanation:
          'General elections are held simultaneously for all constituencies when the term of the legislature expires. By-elections are held for specific constituencies when seats become vacant due to death, resignation, or disqualification of the elected representative during the term.',
      },
      {
        level: 21,
        difficulty: 'Easy',
        question: 'What is reservation in elections?',
        options: [
          'Booking seats in advance',
          'Setting aside seats for Scheduled Castes, Scheduled Tribes, and women',
          'Restricting some people from voting',
          'Special voting procedures',
        ],
        correctAnswer: 2,
        explanation:
          'Reservation means setting aside a certain number of constituencies exclusively for candidates from Scheduled Castes, Scheduled Tribes, and (in local bodies) women. This ensures representation of marginalized communities in legislatures and promotes inclusive democracy.',
      },
      {
        level: 22,
        difficulty: 'Medium',
        question: 'Why do we need reserved constituencies?',
        options: [
          'To complicate the election process',
          'To ensure representation of marginalized communities who might otherwise be excluded',
          'To reduce competition',
          'Just to follow constitutional provisions',
        ],
        correctAnswer: 2,
        explanation:
          'Reserved constituencies are needed because: marginalized communities might not get elected in open competition due to social prejudices, it ensures their voice in legislatures, promotes social justice and inclusion, and helps in addressing their specific needs and concerns through political representation.',
      },
      {
        level: 23,
        difficulty: 'Easy',
        question: 'What challenges do elections face in India?',
        options: [
          'No challenges exist',
          'Money power, muscle power, caste and religious appeals, lack of choice',
          'Only administrative issues',
          'Only technical problems',
        ],
        correctAnswer: 2,
        explanation:
          'Major challenges include: excessive use of money in elections, muscle power and violence, appeals to caste and religion, lack of real choice among candidates, criminalization of politics, and unequal access to media and resources among candidates.',
      },
      {
        level: 24,
        difficulty: 'Medium',
        question:
          'What reforms are suggested to improve electoral system in India?',
        options: [
          'No reforms needed',
          'State funding of elections, stricter laws, better candidate information, electoral education',
          'Only electronic voting machines',
          'Only increasing number of constituencies',
        ],
        correctAnswer: 2,
        explanation:
          "Suggested reforms include: state funding of elections to reduce money power, stricter implementation of election laws, mandatory disclosure of candidate's criminal and financial background, voter education, use of technology, and reforms in political party functioning.",
      },
      {
        level: 25,
        difficulty: 'Easy',
        question: 'What are political parties?',
        options: [
          'Social clubs for politicians',
          'Organized groups that seek to control government through elections',
          'Government departments',
          'Voter organizations',
        ],
        correctAnswer: 2,
        explanation:
          'Political parties are organized groups of people who share similar political views and seek to control government by winning elections. They play crucial roles in democracy by representing different viewpoints, forming government, providing opposition, and linking citizens with government.',
      },
      {
        level: 26,
        difficulty: 'Medium',
        question: 'Why do we need political parties in a democracy?',
        options: [
          'They are not necessary',
          'To provide choice to voters, form government, and represent different interests',
          'Only to create competition',
          'To make elections complicated',
        ],
        correctAnswer: 2,
        explanation:
          'Political parties are essential because they: provide organized choice to voters, form and run governments, represent different sections of society, provide opposition and alternative policies, help in making collective decisions, and serve as a link between people and government.',
      },
      {
        level: 27,
        difficulty: 'Easy',
        question: 'What is a political party system?',
        options: [
          'Computer software for parties',
          'The number and nature of political parties in a country',
          'Rules for forming parties',
          'Election procedures',
        ],
        correctAnswer: 2,
        explanation:
          "A party system refers to the number of political parties, their relative strength, and relationships between them in a country's political system. It can be one-party, two-party, or multi-party system, each having different implications for democracy and governance.",
      },
      {
        level: 28,
        difficulty: 'Medium',
        question: 'What type of party system does India have?',
        options: [
          'One-party system',
          'Multi-party system',
          'Two-party system',
          'No-party system',
        ],
        correctAnswer: 2,
        explanation:
          'India has a multi-party system where several political parties compete for power. This includes national parties (like Congress, BJP), state/regional parties (like TMC, DMK), and smaller parties. This system provides more choices to voters but can also lead to coalition governments.',
      },
      {
        level: 29,
        difficulty: 'Easy',
        question: 'What are national political parties?',
        options: [
          'Parties that work internationally',
          'Parties recognized by Election Commission with presence across multiple states',
          'Parties formed by the government',
          'Parties that only contest national elections',
        ],
        correctAnswer: 2,
        explanation:
          'National parties are those recognized by the Election Commission based on their electoral performance across states. They must secure at least 6% votes in four or more states in Lok Sabha or Assembly elections, or win at least 4 seats in Lok Sabha from at least 3 states.',
      },
      {
        level: 30,
        difficulty: 'Medium',
        question: 'What are regional political parties?',
        options: [
          'Parties that are not important',
          'Parties with strong presence in specific states or regions',
          'International parties',
          'Parties formed by regional languages',
        ],
        correctAnswer: 2,
        explanation:
          'Regional parties are those with strong influence in particular states or regions. They focus on state-specific issues, represent regional interests, and often play crucial roles in forming governments at state level and in coalition governments at the center. Examples include DMK, AIADMK, TMC.',
      },
      {
        level: 31,
        difficulty: 'Easy',
        question: 'What challenges do political parties face?',
        options: [
          'No significant challenges',
          'Lack of internal democracy, corruption, muscle power, dynastic politics',
          'Only financial problems',
          'Only legal issues',
        ],
        correctAnswer: 2,
        explanation:
          'Major challenges include: lack of internal democracy and transparent procedures, increasing role of money and muscle power, growing influence of rich and criminal elements, dynastic succession in party leadership, and lack of meaningful choice for ordinary citizens.',
      },
      {
        level: 32,
        difficulty: 'Medium',
        question: 'How can political parties be reformed?',
        options: [
          'Parties cannot be reformed',
          'Through legal reforms, internal democracy, transparency, and citizen participation',
          'Only through government action',
          'Only through international pressure',
        ],
        correctAnswer: 2,
        explanation:
          'Reforms can include: mandatory internal elections in parties, financial transparency and auditing, state funding of elections, stricter laws against corruption, encouraging more participation of women and youth, and strengthening regulatory mechanisms like Election Commission.',
      },
      {
        level: 33,
        difficulty: 'Easy',
        question: 'What are the main institutions of the Indian government?',
        options: [
          'Only Parliament',
          'Legislature, Executive, and Judiciary',
          "Only Prime Minister's office",
          'Only Supreme Court',
        ],
        correctAnswer: 2,
        explanation:
          'The three main institutions are: Legislature (Parliament at center, State Assemblies) - makes laws; Executive (President, PM, Council of Ministers) - implements laws; and Judiciary (Supreme Court, High Courts, lower courts) - interprets laws and ensures justice.',
      },
      {
        level: 34,
        difficulty: 'Medium',
        question: 'What is the role of Parliament in Indian democracy?',
        options: [
          'Only to pass laws',
          'Make laws, control executive, represent people, discuss national issues',
          'Only to elect the President',
          'Only ceremonial functions',
        ],
        correctAnswer: 2,
        explanation:
          "Parliament's roles include: making laws for the country, controlling and guiding the executive through questions and debates, representing people's interests and concerns, approving budgets and financial matters, and serving as a forum for national debate on important issues.",
      },
      {
        level: 35,
        difficulty: 'Easy',
        question: 'What is the composition of the Indian Parliament?',
        options: [
          'Only Lok Sabha',
          'Lok Sabha, Rajya Sabha, and President',
          'Only Rajya Sabha',
          'Only Council of Ministers',
        ],
        correctAnswer: 2,
        explanation:
          'Indian Parliament consists of: Lok Sabha (House of the People) with 543 elected members representing constituencies, Rajya Sabha (Council of States) with 245 members representing states, and the President as the nominal head. Both houses together with President constitute Parliament.',
      },
      {
        level: 36,
        difficulty: 'Medium',
        question: 'What is the difference between Lok Sabha and Rajya Sabha?',
        options: [
          'No difference exists',
          'Lok Sabha: directly elected, more powerful; Rajya Sabha: indirectly elected, represents states',
          'Only names are different',
          'Only number of members is different',
        ],
        correctAnswer: 2,
        explanation:
          'Lok Sabha: directly elected by people, 5-year term, 543 members, more powerful in money matters, can remove government through no-confidence. Rajya Sabha: indirectly elected by state legislatures, 6-year term (1/3 retire every 2 years), 245 members, represents federal character, equal powers except money bills.',
      },
      {
        level: 37,
        difficulty: 'Easy',
        question: 'Who is the head of the Indian government?',
        options: [
          'The President',
          'The Prime Minister',
          'The Speaker of Lok Sabha',
          'The Chief Justice of India',
        ],
        correctAnswer: 2,
        explanation:
          'The Prime Minister is the head of government and the real executive authority. While the President is the constitutional head (nominal), the PM leads the Council of Ministers, heads the government, and is responsible for day-to-day administration and policy implementation.',
      },
      {
        level: 38,
        difficulty: 'Medium',
        question: 'How is the Prime Minister chosen in India?',
        options: [
          'Direct election by people',
          'Leader of majority party/coalition in Lok Sabha appointed by President',
          'Elected by Parliament',
          'Appointed by Supreme Court',
        ],
        correctAnswer: 2,
        explanation:
          'The President appoints the leader of the political party or coalition that has majority support in Lok Sabha as Prime Minister. If no clear majority exists, the President may invite the leader most likely to form a stable government. The PM must prove majority through confidence vote.',
      },
      {
        level: 39,
        difficulty: 'Easy',
        question: 'What is the Council of Ministers?',
        options: [
          'A religious council',
          'The cabinet headed by Prime Minister that runs the government',
          'A advisory body to President',
          'A group of civil servants',
        ],
        correctAnswer: 2,
        explanation:
          'The Council of Ministers is the real executive body headed by the Prime Minister. It includes Cabinet Ministers (senior ministers heading important ministries), Ministers of State (junior ministers), and Deputy Ministers. They are collectively responsible to Lok Sabha.',
      },
      {
        level: 40,
        difficulty: 'Medium',
        question: 'What is the principle of collective responsibility?',
        options: [
          'Ministers work individually',
          'All ministers are collectively responsible to Parliament for government decisions',
          'Only PM is responsible',
          'Ministers are responsible to President',
        ],
        correctAnswer: 2,
        explanation:
          'Collective responsibility means: all ministers collectively responsible to Lok Sabha for government policies and decisions, if Lok Sabha passes no-confidence motion entire Council of Ministers must resign, ministers cannot publicly criticize government decisions, and they must support government policies in Parliament.',
      },
      {
        level: 41,
        difficulty: 'Easy',
        question: 'What is the role of the President in India?',
        options: [
          'Real head of government',
          'Constitutional head with ceremonial powers and some discretionary functions',
          'Religious leader',
          'Military commander only',
        ],
        correctAnswer: 2,
        explanation:
          'The President is constitutional head of state with largely ceremonial powers. Key roles include: giving assent to bills, appointing PM and ministers on advice of PM, appointing judges, governors, and other constitutional functionaries, addressing Parliament, and some discretionary powers during constitutional crises.',
      },
      {
        level: 42,
        difficulty: 'Medium',
        question: 'What is the role of the judiciary in democracy?',
        options: [
          'Only to punish criminals',
          'Interpret laws, protect rights, ensure justice, and check other branches',
          'Only to conduct trials',
          'To make laws',
        ],
        correctAnswer: 2,
        explanation:
          "Judiciary's democratic roles include: interpreting Constitution and laws, protecting fundamental rights of citizens, ensuring justice through fair trials, acting as guardian of Constitution, providing checks and balances on legislature and executive, and resolving disputes between different levels of government.",
      },
      {
        level: 43,
        difficulty: 'Easy',
        question: 'What is judicial review?',
        options: [
          "Review of judge's performance",
          'Power of courts to examine laws and government actions for constitutional validity',
          'Annual court inspection',
          'Review of court decisions',
        ],
        correctAnswer: 2,
        explanation:
          'Judicial review is the power of courts to examine and strike down laws, government actions, or executive decisions that violate the Constitution. This ensures that no law or action goes against constitutional principles and helps maintain supremacy of Constitution.',
      },
      {
        level: 44,
        difficulty: 'Medium',
        question: 'What is the independence of judiciary?',
        options: [
          'Judges can do whatever they want',
          'Judiciary functions free from interference of other branches of government',
          "Courts don't follow any laws",
          'Judges are not accountable to anyone',
        ],
        correctAnswer: 2,
        explanation:
          'Judicial independence means: judges make decisions based on law and constitution without external pressure, security of tenure for judges, fixed salaries that cannot be reduced, appointments through established procedures, and freedom from legislative and executive interference in judicial functions.',
      },
      {
        level: 45,
        difficulty: 'Easy',
        question: 'What are the different levels of courts in India?',
        options: [
          'Only Supreme Court exists',
          'Supreme Court, High Courts, and subordinate courts',
          'Only High Courts',
          'Courts exist only in cities',
        ],
        correctAnswer: 2,
        explanation:
          'Indian court system has: Supreme Court (apex court for entire country), High Courts (for each state/group of states), District Courts (for each district), and various subordinate courts including Sessions Courts, Magistrate Courts, and specialized courts like Family Courts.',
      },
      {
        level: 46,
        difficulty: 'Medium',
        question: 'What is Public Interest Litigation (PIL)?',
        options: [
          'Cases filed only by government',
          'Legal action for public benefit that can be filed by any citizen',
          'Cases about public buildings',
          'Litigation between government departments',
        ],
        correctAnswer: 2,
        explanation:
          "PIL allows any citizen to approach courts on behalf of those who cannot access justice themselves. It's used to protect public interest, environmental issues, human rights violations, and social justice matters. It has made judiciary more accessible to common people and marginalized groups.",
      },
      {
        level: 47,
        difficulty: 'Easy',
        question: 'What are democratic rights?',
        options: [
          'Rights only for government officials',
          'Rights that are essential for democracy to function properly',
          'Rights that change every election',
          'Rights only during elections',
        ],
        correctAnswer: 2,
        explanation:
          'Democratic rights are essential for democracy to function effectively. They include political rights (vote, contest elections), civil liberties (expression, assembly), and fundamental rights that ensure citizens can participate meaningfully in democratic processes and hold government accountable.',
      },
      {
        level: 48,
        difficulty: 'Medium',
        question: 'Why are rights necessary in a democracy?',
        options: [
          'Rights are not necessary',
          'To protect individuals from tyranny, ensure equality, and enable participation',
          'Only to make constitution lengthy',
          'To create problems for government',
        ],
        correctAnswer: 2,
        explanation:
          'Rights are necessary to: protect individuals and minorities from majority tyranny, ensure equal treatment and opportunities, enable meaningful participation in democratic processes, limit government power, provide dignity to all citizens, and create conditions for human development and freedom.',
      },
      {
        level: 49,
        difficulty: 'Easy',
        question: 'What is the Right to Equality?',
        options: [
          'Everyone must be identical',
          'Equal treatment before law and equal opportunities regardless of background',
          'Everyone gets same salary',
          'Everyone must have same opinions',
        ],
        correctAnswer: 2,
        explanation:
          'Right to Equality includes: equality before law and equal protection of laws, prohibition of discrimination based on religion, race, caste, sex, or place of birth, equality of opportunity in public employment, and abolition of untouchability and titles (except military and academic).',
      },
      {
        level: 50,
        difficulty: 'Medium',
        question: 'What does the Right to Freedom include?',
        options: [
          'Freedom to do anything without restrictions',
          'Freedom of speech, movement, assembly, association, profession, and religion',
          'Only freedom of speech',
          'Freedom only for adults',
        ],
        correctAnswer: 2,
        explanation:
          'Right to Freedom includes: freedom of speech and expression, freedom to assemble peacefully, freedom to form associations and unions, freedom to move and reside anywhere in India, freedom to practice any profession or business, and protection of life and personal liberty (Article 21).',
      },
      {
        level: 51,
        difficulty: 'Easy',
        question: 'What is the Right against Exploitation?',
        options: [
          'Right to exploit others',
          'Protection against forced labor, child labor, and human trafficking',
          'Right to complain against anyone',
          'Right to avoid work',
        ],
        correctAnswer: 2,
        explanation:
          'Right against Exploitation prohibits: trafficking in human beings, forced labor (begar), employment of children below 14 years in hazardous industries, and other forms of exploitation. It aims to protect vulnerable sections, especially children and marginalized communities.',
      },
      {
        level: 52,
        difficulty: 'Medium',
        question: 'What is the Right to Freedom of Religion?',
        options: [
          'Right to force religion on others',
          'Freedom to practice, profess, and propagate any religion',
          'Right to criticize all religions',
          'Right to establish religious rule',
        ],
        correctAnswer: 2,
        explanation:
          'Right to Freedom of Religion includes: freedom of conscience and practice of religion, right to manage religious affairs, freedom to propagate religion (subject to order and morality), right to establish and maintain religious institutions, and protection of religious minorities to establish and administer educational institutions.',
      },
      {
        level: 53,
        difficulty: 'Easy',
        question: 'What are Cultural and Educational Rights?',
        options: [
          'Rights only for educated people',
          'Rights of minorities to preserve their culture and establish educational institutions',
          'Rights to get free education only',
          'Rights only for majority community',
        ],
        correctAnswer: 2,
        explanation:
          'Cultural and Educational Rights protect minorities by giving them: right to conserve their distinct language, script, and culture, right to establish and administer educational institutions of their choice, and protection from discrimination in state-aided educational institutions.',
      },
      {
        level: 54,
        difficulty: 'Medium',
        question: 'What is the Right to Constitutional Remedies?',
        options: [
          'Right to change the Constitution',
          'Right to approach courts for enforcement of Fundamental Rights through writs',
          'Right to constitutional medicine',
          'Right to constitutional advice',
        ],
        correctAnswer: 2,
        explanation:
          "Right to Constitutional Remedies (Article 32) empowers citizens to directly approach Supreme Court for enforcement of Fundamental Rights through writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-warranto. Dr. Ambedkar called it the 'heart and soul' of the Constitution.",
      },
      {
        level: 55,
        difficulty: 'Easy',
        question: 'Can Fundamental Rights be suspended?',
        options: [
          'Never under any circumstances',
          'Yes, during National Emergency except Right to Life and Personal Liberty',
          'Yes, whenever government wants',
          'Only during elections',
        ],
        correctAnswer: 2,
        explanation:
          'During National Emergency (Article 352), Fundamental Rights under Articles 19, 21, and 22 can be suspended, but Right to Life and Personal Liberty (Article 21) cannot be suspended. This ensures that even during emergency, basic human dignity is protected.',
      },
      {
        level: 56,
        difficulty: 'Medium',
        question: 'What are the reasonable restrictions on Fundamental Rights?',
        options: [
          'No restrictions are allowed',
          'Restrictions for security, public order, decency, morality, and sovereignty',
          'Government can impose any restrictions',
          'Only during wartime',
        ],
        correctAnswer: 2,
        explanation:
          'Fundamental Rights are not absolute. Reasonable restrictions can be imposed for: security of state, friendly relations with foreign states, public order, decency and morality, protection of interests of minorities, sovereignty and integrity of India, and contempt of court.',
      },
      {
        level: 57,
        difficulty: 'Easy',
        question: 'What is the Right to Information (RTI)?',
        options: [
          'Right to information in newspapers only',
          'Right of citizens to access information from public authorities',
          'Right to spread any information',
          'Right to information only about government salaries',
        ],
        correctAnswer: 2,
        explanation:
          'Right to Information Act, 2005 gives citizens the right to access information from public authorities. It promotes transparency, accountability in governance, and helps citizens participate effectively in democracy by making government functioning more open and accessible.',
      },
      {
        level: 58,
        difficulty: 'Medium',
        question: 'How does RTI strengthen democracy?',
        options: [
          "It doesn't affect democracy",
          'By promoting transparency, accountability, and informed citizen participation',
          'Only by reducing government work',
          'By creating problems for officials',
        ],
        correctAnswer: 2,
        explanation:
          'RTI strengthens democracy by: making government transparent and accountable, reducing corruption through public scrutiny, empowering citizens with information for better decision-making, ensuring responsive governance, and providing a tool to check abuse of power by public authorities.',
      },
      {
        level: 59,
        difficulty: 'Easy',
        question: 'What are the main challenges to democracy in India?',
        options: [
          'No challenges exist',
          'Poverty, illiteracy, caste and religious divisions, corruption, violence',
          'Only economic problems',
          'Only political problems',
        ],
        correctAnswer: 2,
        explanation:
          'Major challenges include: widespread poverty and illiteracy affecting meaningful participation, caste and religious divisions influencing politics, corruption in public life, political violence and use of muscle power, criminalization of politics, and inequality in access to resources and opportunities.',
      },
      {
        level: 60,
        difficulty: 'Medium',
        question: 'How can democratic participation be improved in India?',
        options: [
          'By reducing number of voters',
          'Through education, awareness, institutional reforms, and inclusive policies',
          'By having fewer elections',
          'By restricting political parties',
        ],
        correctAnswer: 2,
        explanation:
          'Improvements can be made through: better civic education and political awareness, electoral reforms to reduce money and muscle power, decentralization of power to local levels, ensuring equal access to education and resources, protecting rights of marginalized groups, and strengthening democratic institutions.',
      },
      {
        level: 61,
        difficulty: 'Easy',
        question: 'What is the importance of local government in democracy?',
        options: [
          'Local government is not important',
          'Brings government closer to people and enables grassroots participation',
          'Only handles municipal services',
          'Just implements central government decisions',
        ],
        correctAnswer: 2,
        explanation:
          'Local government is important because it: brings democracy to grassroots level, enables direct participation of people in governance, addresses local issues more effectively, promotes accountability at local level, and serves as training ground for democratic participation and leadership.',
      },
      {
        level: 62,
        difficulty: 'Medium',
        question: 'What is Panchayati Raj?',
        options: [
          'Rule by five people only',
          'System of local self-government in rural areas with three tiers',
          'Traditional court system',
          'Religious governance system',
        ],
        correctAnswer: 2,
        explanation:
          'Panchayati Raj is a system of local self-governance in rural India with three tiers: Gram Panchayat (village level), Panchayat Samiti (block level), and Zilla Panchayat (district level). The 73rd Amendment (1992) gave constitutional status to this system.',
      },
      {
        level: 63,
        difficulty: 'Easy',
        question:
          'What is the significance of 73rd and 74th Constitutional Amendments?',
        options: [
          'They have no significance',
          'They gave constitutional status to local governments in rural and urban areas',
          'They only changed election procedures',
          'They only dealt with languages',
        ],
        correctAnswer: 2,
        explanation:
          '73rd Amendment (1992) institutionalized Panchayati Raj for rural areas, while 74th Amendment (1992) established constitutional framework for urban local bodies. Both ensured: regular elections, reservation for SC/ST and women, devolution of powers and functions, and state finance commissions.',
      },
      {
        level: 64,
        difficulty: 'Medium',
        question: 'What role do women play in Indian democracy?',
        options: [
          'No significant role',
          'Increasing participation as voters, representatives, and activists despite challenges',
          'Only as voters',
          'Only in women-specific issues',
        ],
        correctAnswer: 2,
        explanation:
          "Women's role in democracy includes: active participation as voters (often higher turnout than men), increasing representation in legislatures, leadership in local governance through reservations, strong presence in civil society movements, and advocacy for gender equality and social justice.",
      },
      {
        level: 65,
        difficulty: 'Easy',
        question: "What is the Women's Reservation Bill?",
        options: [
          "Bill to restrict women's participation",
          'Proposal to reserve 33% seats for women in Parliament and state legislatures',
          'Bill only for local bodies',
          "Bill about women's dress code",
        ],
        correctAnswer: 2,
        explanation:
          "The Women's Reservation Bill proposes to reserve one-third (33%) of seats for women in Lok Sabha and State Legislative Assemblies. While there is 33% reservation in local bodies since 1992, the parliamentary reservation bill has been debated for years but not yet passed.",
      },
      {
        level: 66,
        difficulty: 'Medium',
        question: 'What is the role of media in democracy?',
        options: [
          'Only entertainment',
          'Inform citizens, watchdog on government, platform for debate, shape public opinion',
          'Only government propaganda',
          'Only advertising',
        ],
        correctAnswer: 2,
        explanation:
          'Media plays crucial democratic roles: providing information to citizens for informed decision-making, acting as watchdog on government actions, providing platform for public debate and discussion, exposing corruption and wrongdoing, and helping form public opinion on important issues.',
      },
      {
        level: 67,
        difficulty: 'Easy',
        question: 'What are the challenges faced by media in India?',
        options: [
          'No challenges exist',
          'Government pressure, corporate influence, sensationalism, paid news',
          'Only technical problems',
          'Only language barriers',
        ],
        correctAnswer: 2,
        explanation:
          'Media faces challenges like: government pressure and censorship, corporate influence affecting editorial independence, commercialization leading to sensationalism, paid news compromising credibility, concentration of media ownership, and pressure from advertisers and political parties.',
      },
      {
        level: 68,
        difficulty: 'Medium',
        question: 'What is the role of civil society in democracy?',
        options: [
          'No role in democracy',
          'Bridge between citizens and government, advocacy, awareness, and accountability',
          'Only charity work',
          'Only protests and demonstrations',
        ],
        correctAnswer: 2,
        explanation:
          'Civil society organizations (NGOs, community groups, professional associations) play vital roles: bridging gap between citizens and government, advocating for policy changes, raising awareness on social issues, ensuring accountability of public institutions, and providing services to marginalized communities.',
      },
      {
        level: 69,
        difficulty: 'Easy',
        question: 'What is the importance of constitutional values?',
        options: [
          'They are just written words',
          'They guide governance, protect rights, and maintain unity in diversity',
          'Only for legal professionals',
          'Only during constitutional crises',
        ],
        correctAnswer: 2,
        explanation:
          'Constitutional values like justice, liberty, equality, and fraternity are important because they: guide policy-making and governance, protect individual rights and freedoms, promote social harmony and unity in diversity, provide framework for resolving conflicts, and ensure inclusive development.',
      },
      {
        level: 70,
        difficulty: 'Medium',
        question: 'How can citizens contribute to strengthening democracy?',
        options: [
          'Citizens have no role',
          'Active participation, informed voting, civic engagement, holding representatives accountable',
          'Only by voting',
          'Only by joining political parties',
        ],
        correctAnswer: 2,
        explanation:
          'Citizens can strengthen democracy by: participating actively in electoral process with informed voting, engaging in civic activities and community service, holding elected representatives accountable through RTI and other means, respecting diversity and constitutional values, and promoting democratic culture in society.',
      },
      {
        level: 71,
        difficulty: 'Easy',
        question:
          'Which of the following is the most accurate and accepted definition of democracy?',
        options: [
          'A government run by the military.',
          'A form of government in which the rulers are elected by the people.',
          'A system where the king or queen has absolute power.',
          'A government controlled by a single political party.',
        ],
        correctAnswer: 2,
        explanation:
          "The word democracy comes from the Greek words 'demos' (people) and 'kratia' (rule). At its core, **democracy is a form of government where the supreme power is vested in the people**, who exercise it by electing their representatives. This distinguishes it from monarchy (rule by a monarch), military dictatorship, or one-party rule, where citizens do not have the power to choose their rulers.",
      },
      {
        level: 72,
        difficulty: 'Medium',
        question:
          "General Pervez Musharraf's rule in Pakistan after the 1999 military coup was not considered democratic primarily because:",
        options: [
          'He was not a Pakistani citizen.',
          'He was opposed by all political parties.',
          'The final decision-making power rested with military officers and himself, not with the elected representatives.',
          'He did not hold any elections.',
        ],
        correctAnswer: 3,
        explanation:
          "A key feature of democracy is that **the final decision-making power must rest with those elected by the people**. Although General Musharraf held a referendum and elections, he amended the constitution (through a 'Legal Framework Order') to give himself the power to dismiss the national and provincial assemblies. The work of the civilian cabinet was supervised by a National Security Council dominated by military officers. Therefore, the real power was not with the people's elected representatives, making Pakistan under his rule undemocratic.",
      },
      {
        level: 73,
        difficulty: 'Hard',
        question:
          'Which of the following is the strongest argument IN FAVOR of democracy?',
        options: [
          'Democratic governments are always more efficient and corruption-free.',
          'Democratic leaders never make mistakes.',
          'A democratic government is a more accountable form of government and provides a method to deal with differences and conflicts.',
          'Democracy leads to faster economic development.',
        ],
        correctAnswer: 3,
        explanation:
          "While democracy may have flaws like delays and potential for instability, its greatest strength is that it is **accountable to the people**. If rulers don't perform, citizens can change them in the next election. Furthermore, in a diverse country like India, democracy provides a peaceful way to manage social differences and conflicts through negotiation and public discussion. It enhances the **dignity of citizens** by being based on the principle of political equality. Other options are incorrect because democracies can be inefficient, leaders can make mistakes, and there is no guarantee of faster economic development.",
      },
      {
        level: 74,
        difficulty: 'Easy',
        question:
          'Who was the Chairman of the Drafting Committee of the Indian Constitution?',
        options: [
          'Mahatma Gandhi',
          'Dr. Rajendra Prasad',
          'Jawaharlal Nehru',
          'Dr. B.R. Ambedkar',
        ],
        correctAnswer: 4,
        explanation:
          "**Dr. B.R. Ambedkar** is widely recognized as the 'Father of the Indian Constitution'. He was the Chairman of the Drafting Committee, which was tasked with preparing the draft of the Constitution. His deep knowledge of law and understanding of the social inequalities in India were crucial in shaping a document that aimed to bring about social and political equality. Dr. Rajendra Prasad was the President of the Constituent Assembly.",
      },
      {
        level: 75,
        difficulty: 'Medium',
        question:
          'The introductory statement of the Indian Constitution that contains its ideals and philosophy is called the:',
        options: [
          'Preface',
          'Preamble',
          'Fundamental Rights',
          'Directive Principles',
        ],
        correctAnswer: 2,
        explanation:
          "The **Preamble** is the introduction to the Constitution. It is often called the 'soul of the Constitution' because it lays down the guiding values and principles. It declares India to be a **Sovereign, Socialist, Secular, and Democratic Republic** and aims to secure for all its citizens **Justice, Liberty, Equality, and Fraternity**.",
      },
      {
        level: 76,
        difficulty: 'Hard',
        question:
          'Why did the white minority regime in South Africa decide to change its policies of apartheid?',
        options: [
          'They had a sudden change of heart and realised apartheid was unjust.',
          'A new law was passed in the United Nations to abolish apartheid.',
          'The increasing protests, struggles, international isolation, and the realisation that they could no longer rule through repression.',
          'Nelson Mandela defeated them in a military battle.',
        ],
        correctAnswer: 3,
        explanation:
          'The end of apartheid was not a voluntary act but the result of a long and difficult struggle. The African National Congress (ANC) led a massive movement against segregation. The **internal struggle, combined with strong international pressure** (including economic sanctions and boycotts), made it impossible for the white regime to continue its rule through force. They realized that repression was no longer a viable option, leading to the release of Nelson Mandela and negotiations for a new, democratic constitution.',
      },
      {
        level: 77,
        difficulty: 'Easy',
        question:
          'What is the primary role of the Election Commission of India?',
        options: [
          'To make laws for the country.',
          'To select the Prime Minister.',
          'To conduct free and fair elections.',
          'To resolve disputes between states.',
        ],
        correctAnswer: 3,
        explanation:
          'The **Election Commission of India** is an independent constitutional body responsible for administering all election processes in India. Its primary and most crucial function is to ensure that elections are conducted in a **free and fair** manner. It decides the election schedule, prepares electoral rolls, enforces the Model Code of Conduct, and has the power to postpone or cancel elections if they are not conducted fairly.',
      },
      {
        level: 78,
        difficulty: 'Medium',
        question: "What is meant by 'Reserved Constituencies'?",
        options: [
          'Constituencies reserved for military personnel.',
          'Constituencies where only women can contest elections.',
          'Constituencies in which seats are reserved for the Scheduled Castes (SC) and Scheduled Tribes (ST).',
          'Constituencies reserved for the President and Prime Minister.',
        ],
        correctAnswer: 3,
        explanation:
          'The makers of the Constitution feared that in an open electoral competition, certain weaker sections of society might not get a fair chance to be elected. Therefore, the system of **Reserved Constituencies** was introduced. In these specific constituencies, only someone belonging to the **Scheduled Castes (SC) or Scheduled Tribes (ST)** can contest the election. This ensures that they have a fair representation in the Parliament and State Assemblies.',
      },
      {
        level: 79,
        difficulty: 'Easy',
        question:
          "In India's parliamentary system, who is the head of the government?",
        options: [
          'The President',
          'The Chief Justice of India',
          'The Prime Minister',
          'The Speaker of the Lok Sabha',
        ],
        correctAnswer: 3,
        explanation:
          'In India, there is a distinction between the Head of the State and the Head of the Government.\n- **The President** is the formal Head of the State.\n- **The Prime Minister** is the Head of the Government. The Prime Minister is the leader of the majority party (or coalition) in the Lok Sabha and exercises all governmental powers. He/she is the real executive.',
      },
      {
        level: 80,
        difficulty: 'Medium',
        question:
          'Why is the Lok Sabha considered more powerful than the Rajya Sabha?',
        options: [
          'Its members are more educated.',
          'It has a longer term of five years.',
          'It has more members and, crucially, in matters of a money bill and forming the government, its will prevails.',
          'The Rajya Sabha cannot pass any laws at all.',
        ],
        correctAnswer: 3,
        explanation:
          'The Lok Sabha exercises superior power in several ways:\n1. **Government Formation**: The party or coalition with a majority in the Lok Sabha forms the government. The Prime Minister must have the confidence of the Lok Sabha.\n2. **Money Matters**: Any money-related bill can only be introduced in the Lok Sabha. The Rajya Sabha can only delay it by 14 days or suggest changes, which the Lok Sabha may or may not accept.\n3. **Joint Sitting**: In case of a deadlock over an ordinary bill, a joint sitting is held, but the will of the Lok Sabha is likely to prevail due to its larger number of members.',
      },
      {
        level: 81,
        difficulty: 'Hard',
        question:
          'The group of all the ministers, including the Cabinet Ministers, Ministers of State, and Deputy Ministers, is collectively known as the:',
        options: [
          'The Judiciary',
          'The Permanent Executive',
          'The Council of Ministers',
          'The Cabinet',
        ],
        correctAnswer: 3,
        explanation:
          'There is a hierarchy within the executive.\n- The **Council of Ministers** is the official name for the body that includes all the ministers (usually 60 to 80).\n- The **Cabinet** is the inner ring or core group within the Council of Ministers, consisting of the top-level ministers (about 25) who are in charge of the most important ministries. Most important decisions are taken in Cabinet meetings. So, while the Cabinet is part of the Council of Ministers, the latter is the broader, all-encompassing term.',
      },
      {
        level: 82,
        difficulty: 'Easy',
        question:
          'What are the special claims of a citizen against the state, which are protected by law, called?',
        options: ['Duties', 'Orders', 'Rights', 'Suggestions'],
        correctAnswer: 3,
        explanation:
          '**Rights** are reasonable claims of persons that are recognized by society and sanctioned by law. In a democracy, rights are essential to protect citizens from the arbitrary actions of the government and to ensure that every individual can lead a life of dignity. They are guarantees that the state cannot violate.',
      },
      {
        level: 83,
        difficulty: 'Medium',
        question:
          "Which Fundamental Right did Dr. Ambedkar call the 'heart and soul' of the Constitution?",
        options: [
          'Right to Equality',
          'Right to Freedom',
          'Right against Exploitation',
          'Right to Constitutional Remedies',
        ],
        correctAnswer: 4,
        explanation:
          "The **Right to Constitutional Remedies (Article 32)** is called the 'heart and soul' of the Constitution because it makes all other rights effective. This right gives a citizen the power to move directly to the Supreme Court or a High Court if any of their fundamental rights are violated. The courts can then issue special orders, known as **writs** (like Habeas Corpus, Mandamus), to enforce the rights. Without this right, the other fundamental rights would be meaningless.",
      },
      {
        level: 84,
        difficulty: 'Hard',
        question:
          "What does the 'Right to Freedom of Religion' in India NOT include?",
        options: [
          'Freedom to profess, practice, and propagate any religion.',
          "Freedom to manage one's own religious affairs.",
          "The right to compel another person to convert to one's religion through force or inducement.",
          'The right of the state to intervene to stop social evils practiced in the name of religion.',
        ],
        correctAnswer: 3,
        explanation:
          "The Right to Freedom of Religion guarantees every citizen the liberty to follow their conscience. This includes the freedom to profess (declare one's faith openly), practice (perform rituals), and propagate (share information about) one's religion. However, this right is not absolute. It **does not include the right to forcibly convert another person**. The state can also impose restrictions to maintain public order, morality, and health, and it can intervene to reform social evils like untouchability, sati, or human sacrifice, even if they are claimed to be religious practices.",
      },
      {
        level: 85,
        difficulty: 'Easy',
        question: 'What is the most basic definition of democracy?',
        options: [
          'Rule by a single leader',
          'Rule by the people',
          'Rule by the military',
          'Rule by religious leaders',
        ],
        correctAnswer: 2,
        explanation:
          "Democracy is derived from Greek words 'demos' (people) and 'kratia' (power), meaning a form of government where rulers are elected by the people. This distinguishes it from monarchies, dictatorships, or oligarchies. The chapter explores this through examples like Pakistan under General Musharraf, where a referendum was manipulated, showing it's not truly democratic despite claims. Key features include free and fair elections, public debate on major policies, and access to information about government functioning.",
      },
      {
        level: 86,
        difficulty: 'Medium',
        question:
          'Which of the following is NOT a feature of democracy as defined in broader terms?',
        options: [
          'Major decisions by elected leaders',
          'Free and fair electoral competition',
          'One person, one vote, one value',
          'Rule without limits on power',
        ],
        correctAnswer: 4,
        explanation:
          "In a broader sense, democracy ensures that the government operates within constitutional limits and respects citizens' rights, preventing arbitrary rule. Examples include China, where the Communist Party dominates without competition, Mexico with PRI's rigged elections until 2000, and Zimbabwe under Mugabe, where opposition is harassed. These show non-democratic practices like lack of fair elections or freedom of press. Democracy requires regular elections, multiple parties, and universal adult suffrage.",
      },
      {
        level: 87,
        difficulty: 'Easy',
        question:
          'Why is democracy considered better than dictatorship for accommodating social diversity?',
        options: [
          'It imposes uniformity',
          'It allows peaceful resolution of conflicts',
          'It ignores minority voices',
          'It promotes one culture',
        ],
        correctAnswer: 2,
        explanation:
          'Democracy provides mechanisms like dialogue and negotiation to handle social differences, reducing the possibility of tensions becoming violent. No society is homogeneous, and democracy ensures no permanent winners or losers. Arguments for democracy include better decision-making through consultation, correcting mistakes without revolution, and enhancing citizen dignity through equal treatment. Criticisms include instability from changing leaders, delays in decisions, and potential corruption, but merits outweigh as it aligns with human freedom.',
      },
      {
        level: 88,
        difficulty: 'Medium',
        question:
          'In which country was the ruling party known for winning elections through unfair means until 2000?',
        options: ['China', 'Pakistan', 'Mexico', 'Zimbabwe'],
        correctAnswer: 3,
        explanation:
          "In Mexico, the Institutional Revolutionary Party (PRI) used tactics like government employees campaigning, media bias, and booth capturing to win every election from 1930 to 2000. This illustrates how elections alone don't make a democracy if not free and fair. Other examples: China's single-party rule, Pakistan's military oversight of elected governments, Zimbabwe's suppression of opposition. The chapter debates why democracy, concluding it's superior for accountability, responsiveness, and legitimacy despite flaws.",
      },
      {
        level: 89,
        difficulty: 'Easy',
        question:
          'What was the main challenge faced by South Africa in designing its Constitution after apartheid?',
        options: [
          'Maintaining white supremacy',
          'Creating a system fair to both blacks and whites',
          'Establishing a monarchy',
          'Banning political parties',
        ],
        correctAnswer: 2,
        explanation:
          'Post-1994, South Africa transitioned from apartheid—a system of racial discrimination where blacks were denied rights—to democracy. The Constitution was designed through compromise, recognizing past injustices but protecting all groups. Key figures like Nelson Mandela spent years in prison fighting apartheid. The process involved the African National Congress (ANC) and other parties agreeing on principles to prevent majority domination, ensuring rights and freedoms for all.',
      },
      {
        level: 90,
        difficulty: 'Medium',
        question:
          'Which philosophy guided the makers of the Indian Constitution?',
        options: [
          'Colonial rule',
          'Freedom struggle ideals of justice, liberty, equality, and fraternity',
          'Military dictatorship',
          'Religious supremacy',
        ],
        correctAnswer: 2,
        explanation:
          "The Indian Constitution reflects the nationalist movement's values, with the Preamble declaring India a sovereign, socialist, secular, democratic republic committed to justice (social, economic, political), liberty (thought, expression), equality (status, opportunity), and fraternity (dignity, unity). Motives included dreaming of a free nation, reacting to colonial inequality. The Constituent Assembly, formed in 1946 with 299 members after provincial elections, debated for three years, incorporating global ideas like French Revolution principles while addressing India's diversity.",
      },
      {
        level: 91,
        difficulty: 'Easy',
        question:
          'Who was the chairman of the Drafting Committee of the Indian Constitution?',
        options: [
          'Jawaharlal Nehru',
          'Mahatma Gandhi',
          'Dr. B.R. Ambedkar',
          'Sardar Patel',
        ],
        correctAnswer: 3,
        explanation:
          "Dr. B.R. Ambedkar chaired the Drafting Committee, playing a key role in shaping the document. The Assembly adopted the Constitution on 26 November 1949, effective 26 January 1950. It drew from the 1935 Government of India Act for institutional details like federalism and emergency powers, but transformed them for democracy. Amendments, like adding 'socialist' and 'secular' in 1976, show its evolving nature.",
      },
      {
        level: 92,
        difficulty: 'Medium',
        question: 'What makes the Indian Constitution a living document?',
        options: [
          'It cannot be changed',
          'It can be amended to suit changing needs',
          'It is short and rigid',
          'It ignores diversity',
        ],
        correctAnswer: 2,
        explanation:
          "The Constitution provides a framework for governance, including parliamentary democracy, separation of powers, fundamental rights, and federal structure with a strong center. Its length and detail address India's vast diversity. The making involved compromises, like universal suffrage without property qualifications, influenced by global constitutions (e.g., US Bill of Rights, Irish Directive Principles). South Africa's process inspired transparency in constitution-making.",
      },
      {
        level: 93,
        difficulty: 'Easy',
        question: 'Why do we need elections in a democracy?',
        options: [
          'To appoint rulers without choice',
          'To allow citizens to choose representatives and change them if needed',
          'To limit voter participation',
          'To promote one-party rule',
        ],
        correctAnswer: 2,
        explanation:
          "Elections provide choice, control over leaders, and information about parties' policies. Non-democratic alternatives like nomination or inheritance lack accountability. The chapter discusses merits: sensitizing leaders to needs, giving voice to people. Demerits: expensive, corrupt practices, constant politicking. Yet, regular elections ensure responsiveness, as seen in India's system.",
      },
      {
        level: 94,
        difficulty: 'Medium',
        question: 'What is a constituency in the Indian electoral system?',
        options: [
          'The entire country as one area',
          'Geographical areas divided for electing representatives',
          'Only urban areas',
          'Reserved for specific parties',
        ],
        correctAnswer: 2,
        explanation:
          "India divides into constituencies for Lok Sabha (543, equal population) and state assemblies. Reserved for SC/ST to ensure representation. Electoral process: voters' list (18+ citizens), nomination (security deposit, no serious crimes), campaigning (two weeks, no appeals to caste/religion), polling (EVMs, secrecy), counting (highest votes wins). System is first-past-the-post, not proportional.",
      },
      {
        level: 95,
        difficulty: 'Easy',
        question: 'What ensures free and fair elections in India?',
        options: [
          "The ruling party's control",
          'The Election Commission, an independent body',
          "The President's direct involvement",
          "Party leaders' decisions",
        ],
        correctAnswer: 2,
        explanation:
          "The Election Commission (EC) oversees elections, implements code of conduct (no bribery, spending limits), controls government actions during elections, and can reprimand or reorder polls if unfair. Examples: booth capturing prevention, EPIC for identification. Despite challenges like money/muscle power, criminals in politics, India's elections are largely fair.",
      },
      {
        level: 96,
        difficulty: 'Medium',
        question: 'What are the demerits of electoral competition?',
        options: [
          'It creates unity among parties',
          'It leads to factionalism, dirty tricks, and disunity',
          'It reduces costs',
          'It eliminates level playing field issues',
        ],
        correctAnswer: 2,
        explanation:
          "Competition causes party splits, unethical practices, but merits include motivation for better performance and choice for voters. Voter turnout in India is high (around 60%), but concerns remain: ticket denial to non-moneyed, family dynasties, little real choice among similar parties. Slogans like 'Garibi Hatao', 'Save Democracy' show how elections reflect public mood.",
      },
      {
        level: 97,
        difficulty: 'Easy',
        question:
          'How are major policy decisions taken in the Indian government?',
        options: [
          'By the judiciary alone',
          'Through office memorandums issued by the executive',
          'By Parliament without discussion',
          'By the President single-handedly',
        ],
        correctAnswer: 2,
        explanation:
          'Decisions like reservations for OBCs (Mandal Commission) involve the political executive (ministers) directing the permanent executive (civil servants). Institutions like Parliament debate and approve laws, the Prime Minister leads the cabinet, and the President gives assent. The chapter uses the Mandal example to show interplay.',
      },
      {
        level: 98,
        difficulty: 'Medium',
        question: 'What is the role of the Parliament in India?',
        options: [
          'To execute laws',
          'To make laws, control the executive, and approve budgets',
          'To interpret laws',
          'To appoint the Prime Minister',
        ],
        correctAnswer: 2,
        explanation:
          'Parliament (Lok Sabha and Rajya Sabha) legislates on union/subject lists, oversees executive through questions and motions, represents diversity. Lok Sabha is more powerful in money bills. The executive is accountable to it; coalitions complicate when no majority. Opposition ensures checks.',
      },
      {
        level: 99,
        difficulty: 'Easy',
        question: 'Who is the political head of the executive in India?',
        options: [
          'The President',
          'The Prime Minister',
          'The Chief Justice',
          'The Speaker',
        ],
        correctAnswer: 2,
        explanation:
          'The Prime Minister and Council of Ministers form the political executive, elected and temporary, while civil servants are permanent. The President is nominal head, acting on ministerial advice, but can seek reconsideration. In disputes, like office of profit, President refers to EC.',
      },
      {
        level: 100,
        difficulty: 'Medium',
        question: 'Why is the judiciary independent in India?',
        options: [
          'To be controlled by the executive',
          'To protect the Constitution and resolve disputes impartially',
          'To make political decisions',
          'To favor the ruling party',
        ],
        correctAnswer: 2,
        explanation:
          'Independent judiciary (Supreme Court, High Courts, District Courts) has original, appellate, advisory jurisdiction. It practices judicial review, striking unconstitutional laws, and PILs allow public access. Integrated structure ensures uniformity. Examples: protecting rights against executive overreach.',
      },
      {
        level: 101,
        difficulty: 'Easy',
        question: 'Why are rights essential in a democracy?',
        options: [
          'To limit citizen freedoms',
          'To protect minorities from majority tyranny and ensure dignity',
          'To promote inequality',
          'To ban protests',
        ],
        correctAnswer: 2,
        explanation:
          "Rights safeguard against state abuse, as seen in examples: Guantanamo Bay detentions without trial, Kosovo ethnic cleansing, Saudi Arabia's restricted citizenship. In democracies, rights enable participation and protect from arbitrary actions.",
      },
      {
        level: 102,
        difficulty: 'Medium',
        question:
          'Which Fundamental Right prohibits discrimination on grounds of religion, race, caste, sex, or place of birth?',
        options: [
          'Right to Freedom',
          'Right to Equality',
          'Right against Exploitation',
          'Cultural and Educational Rights',
        ],
        correctAnswer: 2,
        explanation:
          "Right to Equality ensures equal protection of laws, abolishes untouchability, titles. Includes reservations for disadvantaged. Other rights: Freedom (speech, assembly, movement, with reasonable restrictions), Exploitation (bans trafficking, child labor), Religion (practice freely), Cultural/Educational (minorities' institutions), Remedies (approach courts for enforcement).",
      },
      {
        level: 103,
        difficulty: 'Easy',
        question: 'What is the Right to Information (RTI) in India?',
        options: [
          'A law allowing access to government records',
          'A right to free education',
          'A ban on media',
          'A military right',
        ],
        correctAnswer: 1,
        explanation:
          'RTI (2005) expands freedom of speech by enabling citizens to seek information, promoting transparency. Other expansions: right to education (86th Amendment, free for 6-14 years), right to food through court orders on public distribution.',
      },
      {
        level: 104,
        difficulty: 'Medium',
        question:
          'What role does the National Human Rights Commission (NHRC) play in India?',
        options: [
          'To enforce laws directly',
          'To inquire into rights violations and recommend actions',
          'To make laws',
          'To control the army',
        ],
        correctAnswer: 2,
        explanation:
          'NHRC, an independent body, investigates complaints, spreads awareness, but recommendations are advisory. Rights align with international covenants like Universal Declaration of Human Rights. In non-democracies, rights are limited; in India, they are guaranteed but can be restricted during emergencies, except life and personal liberty.',
      },
    ],
    10: [
      {
        level: 1,
        difficulty: 'Easy',
        question: 'What is power sharing?',
        options: [
          'Sharing electricity between states',
          'Distribution of power among different organs and levels of government',
          'Sharing power only with friends',
          'Giving all power to one person',
        ],
        correctAnswer: 2,
        explanation:
          'Power sharing is a system where power is distributed among different organs of government (horizontal) and different levels of government (vertical). It ensures no single institution or group has absolute power, promoting democracy and preventing conflicts.',
      },
      {
        level: 2,
        difficulty: 'Medium',
        question: 'Why is power sharing desirable?',
        options: [
          'It makes government weak',
          'It prevents tyranny, reduces conflicts, and ensures better decisions',
          'It creates confusion',
          'It slows down decision-making',
        ],
        correctAnswer: 2,
        explanation:
          'Power sharing is desirable because: (1) Prudential reason - reduces conflicts between different groups, (2) Moral reason - people have right to be consulted in governance, (3) Prevents tyranny and abuse of power, (4) Accommodates diverse groups in society, (5) Leads to better decision-making through broader consultation.',
      },
      {
        level: 3,
        difficulty: 'Easy',
        question: 'What are the different forms of power sharing?',
        options: [
          'Only horizontal power sharing',
          'Horizontal, vertical, and among different social groups',
          'Only between political parties',
          'Only between states',
        ],
        correctAnswer: 2,
        explanation:
          'Forms of power sharing: (1) Horizontal - among different organs like legislature, executive, judiciary, (2) Vertical - among different levels like central, state, local governments, (3) Among different social groups - community government, reserved constituencies, (4) Among political parties - coalition governments, opposition role.',
      },
      {
        level: 4,
        difficulty: 'Medium',
        question: 'What is the Belgian model of power sharing?',
        options: [
          'Majority rule system',
          'Special arrangements to accommodate different linguistic communities',
          'Military rule',
          'Single party rule',
        ],
        correctAnswer: 2,
        explanation:
          'Belgian model: (1) Equal representation to Dutch and French speakers in central government, (2) State governments have special powers not subordinate to central government, (3) Brussels has separate government with equal representation, (4) Community government for cultural, educational, language-related issues. This prevented ethnic conflicts unlike Sri Lanka.',
      },
      {
        level: 5,
        difficulty: 'Easy',
        question: "What went wrong in Sri Lanka's power sharing?",
        options: [
          'Too much power sharing',
          'Majority Sinhalese dominated and marginalized Tamil minority',
          'Equal treatment of all communities',
          'No government existed',
        ],
        correctAnswer: 2,
        explanation:
          "Sri Lanka's mistakes: (1) Sinhala was made official language ignoring Tamil, (2) Preferential policies for Sinhalese in jobs and education, (3) Buddhism given prime place marginalizing other religions, (4) Denial of autonomy to Tamil-majority regions. This led to civil war and ethnic conflicts.",
      },
      {
        level: 6,
        difficulty: 'Medium',
        question: 'What is federalism?',
        options: [
          'Rule by federal police',
          'System of government where power is divided between central and regional governments',
          'Government by federation of companies',
          'Single level of government',
        ],
        correctAnswer: 2,
        explanation:
          'Federalism is a system where power is constitutionally divided between central government and regional governments. Both levels are independent in their respective spheres, have separate jurisdiction, and neither can unilaterally change the fundamental provisions of constitution.',
      },
      {
        level: 7,
        difficulty: 'Easy',
        question: 'What are the key features of federalism?',
        options: [
          'One level of government only',
          'Two or more levels, constitutional division of power, independent judiciary',
          'Military control',
          'Rule by king',
        ],
        correctAnswer: 2,
        explanation:
          'Key features: (1) Two or more levels of government, (2) Same citizens governed by different levels, (3) Constitutional division of powers, (4) Courts have power to interpret constitution, (5) Revenue sources divided between levels, (6) Fundamental provisions cannot be changed unilaterally.',
      },
      {
        level: 8,
        difficulty: 'Medium',
        question:
          "What is the difference between 'coming together' and 'holding together' federations?",
        options: [
          'No difference exists',
          'Coming together: independent states unite; Holding together: large country divides power',
          'Only names are different',
          'One is democratic, other is not',
        ],
        correctAnswer: 2,
        explanation:
          'Coming together federation: Independent states come together (USA, Australia) - states have equal power. Holding together federation: Large country decides to divide power (India, Belgium, Spain) - central government tends to be more powerful, different states may have different powers.',
      },
      {
        level: 9,
        difficulty: 'Easy',
        question:
          'How many languages are recognized in the Indian Constitution?',
        options: [
          '14 languages',
          '22 languages',
          '18 languages',
          '25 languages',
        ],
        correctAnswer: 2,
        explanation:
          'The Eighth Schedule of Indian Constitution recognizes 22 languages: Assamese, Bengali, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Malayalam, Manipuri, Marathi, Nepali, Oriya, Punjabi, Sanskrit, Sindhi, Tamil, Telugu, Urdu, Bodo, Santhali, Maithili, and Dogri.',
      },
      {
        level: 10,
        difficulty: 'Medium',
        question:
          'What is the three-fold distribution of legislative powers in India?',
        options: [
          'Central, State, District lists',
          'Union, State, and Concurrent lists',
          'Executive, Legislative, Judicial lists',
          'Urban, Rural, Tribal lists',
        ],
        correctAnswer: 2,
        explanation:
          'Union List (97 subjects): Defence, foreign affairs, banking, currency, communications - only Central government can make laws. State List (66 subjects): Police, trade, agriculture, irrigation - only State governments. Concurrent List (47 subjects): Education, forests, adoption - both can make laws, but Central law prevails in conflict.',
      },
      {
        level: 11,
        difficulty: 'Easy',
        question: 'What is the role of the Governor in Indian states?',
        options: [
          'To rule the state independently',
          'To act as representative of Central government in state',
          'To replace Chief Minister',
          'To make all state laws',
        ],
        correctAnswer: 2,
        explanation:
          "Governor is the constitutional head of state, appointed by Central government for 5 years. Roles: nominal executive (like President at center), assents to state bills, can reserve bills for President's consideration, appoints Chief Minister and council of ministers on CM's advice, acts as link between center and state.",
      },
      {
        level: 12,
        difficulty: 'Medium',
        question: 'How has Indian federalism evolved since independence?',
        options: [
          'It has remained exactly the same',
          'From highly centralized to more decentralized with stronger states',
          'States have become weaker',
          'Federal structure was abolished',
        ],
        correctAnswer: 2,
        explanation:
          'Evolution: Initially highly centralized due to partition, wars, unity needs. Later: (1) Linguistic states created, (2) Language policy evolved recognizing diversity, (3) Centre-state relations became more cooperative, (4) Regional parties gained importance, (5) Coalition governments at center made states more powerful, (6) Decentralization to local governments.',
      },
      {
        level: 13,
        difficulty: 'Easy',
        question: 'What are linguistic states?',
        options: [
          'States where only English is spoken',
          'States reorganized on the basis of languages spoken by people',
          'States with no languages',
          'States where all languages are banned',
        ],
        correctAnswer: 2,
        explanation:
          'Linguistic states are states reorganized primarily on the basis of languages spoken by the people. Created to ensure people who speak the same language live in the same state. First linguistic state was Andhra Pradesh (1953) for Telugu speakers. States Reorganization Act (1956) created 14 states and 6 union territories.',
      },
      {
        level: 14,
        difficulty: 'Medium',
        question: 'What is the language policy of India?',
        options: [
          'Only Hindi is the national language',
          'No single national language; Hindi official language with safeguards for other languages',
          'English is the national language',
          'Each state can choose any language',
        ],
        correctAnswer: 2,
        explanation:
          "India's language policy: (1) No single national language declared, (2) Hindi is official language but not imposed, (3) English continues as associate official language, (4) States can have their own official languages, (5) Three-language formula in education (Hindi, English, regional language), (6) 22 scheduled languages get constitutional recognition.",
      },
      {
        level: 15,
        difficulty: 'Easy',
        question: 'What is decentralization?',
        options: [
          'Concentration of power at center',
          'Transfer of power from central and state to local levels',
          'Removing all governments',
          'Creating more states',
        ],
        correctAnswer: 2,
        explanation:
          'Decentralization is the transfer of power and responsibility from central and state governments to local level institutions. It brings government closer to people, ensures participation in decision-making, and makes governance more responsive to local needs and priorities.',
      },
      {
        level: 16,
        difficulty: 'Medium',
        question: 'Why was decentralization needed in India?',
        options: [
          'To reduce government jobs',
          'Large size and diversity made centralized governance ineffective for local issues',
          'To please international organizations',
          'To save money',
        ],
        correctAnswer: 2,
        explanation:
          'Need for decentralization: (1) Large size and diversity of India, (2) Local problems need local solutions, (3) Democratic participation at grassroots level, (4) Implementation of development programs, (5) Reduce burden on state governments, (6) Ensure development reaches marginalized sections, (7) Make governance more responsive and accountable.',
      },
      {
        level: 17,
        difficulty: 'Easy',
        question: 'What is Panchayati Raj?',
        options: [
          'Rule by five kings',
          'System of local self-government in rural areas with three tiers',
          'A type of monarchy',
          'Government by committees only',
        ],
        correctAnswer: 2,
        explanation:
          'Panchayati Raj is a three-tier system of local self-government in rural areas: (1) Gram Panchayat at village level, (2) Panchayat Samiti/Block Panchayat at block level, (3) Zilla Panchayat at district level. It ensures democratic participation and development at grassroots level.',
      },
      {
        level: 18,
        difficulty: 'Medium',
        question:
          'What are the main features of the 73rd Constitutional Amendment?',
        options: [
          'It abolished local governments',
          'It constitutionally recognized Panchayati Raj with mandatory provisions',
          'It created more states',
          'It changed election system',
        ],
        correctAnswer: 2,
        explanation:
          '73rd Amendment (1992) features: (1) Constitutional status to Panchayati Raj institutions, (2) Three-tier structure mandatory, (3) Regular elections every 5 years, (4) Reserved seats for SC/ST and women, (5) State Election Commission for conducting elections, (6) State Finance Commission for fund allocation, (7) Gram Sabha as foundation of system.',
      },
      {
        level: 19,
        difficulty: 'Easy',
        question: 'What is a Gram Sabha?',
        options: [
          'A village school',
          'A body consisting of all adult members of a village',
          'A government office',
          'A type of crop',
        ],
        correctAnswer: 2,
        explanation:
          'Gram Sabha is a body consisting of all adult members (18+ years) of a village or group of villages. It is the foundation of Panchayati Raj system. Functions: approves annual budget, reviews development programs, identifies beneficiaries for government schemes, ensures transparency in Gram Panchayat functioning.',
      },
      {
        level: 20,
        difficulty: 'Medium',
        question: 'What are the functions of Gram Panchayat?',
        options: [
          'Only collecting taxes',
          'Development programs, infrastructure, welfare schemes, maintaining records',
          'Only conducting elections',
          'Military functions',
        ],
        correctAnswer: 2,
        explanation:
          'Gram Panchayat functions: (1) Development programs - roads, wells, schools, (2) Implementation of government schemes, (3) Welfare schemes for poor, (4) Maintaining records - births, deaths, (5) Revenue collection, (6) Sanitation and water supply, (7) Primary education and health care, (8) Dispute resolution at local level.',
      },
      {
        level: 21,
        difficulty: 'Easy',
        question: 'What is the composition of urban local governments?',
        options: [
          'Only mayors',
          'Municipal corporations, municipal councils, and nagar panchayats',
          'Only government officers',
          'Village panchayats',
        ],
        correctAnswer: 2,
        explanation:
          'Urban local government structure: (1) Municipal Corporation - for large cities (Mumbai, Delhi), (2) Municipal Council - for smaller cities, (3) Nagar Panchayat - for areas transitioning from rural to urban. Headed by Mayor/Chairperson with elected councillors.',
      },
      {
        level: 22,
        difficulty: 'Medium',
        question: 'What are the sources of revenue for local governments?',
        options: [
          'Only central government grants',
          'Taxes, government grants, fees, and own income sources',
          'Only donations',
          'Only state government grants',
        ],
        correctAnswer: 2,
        explanation:
          'Revenue sources: (1) Own sources - property tax, water tax, entertainment tax, fees for licenses, (2) Central government grants - through Finance Commission, centrally sponsored schemes, (3) State government grants - as per State Finance Commission recommendations, (4) User charges for services provided.',
      },
      {
        level: 23,
        difficulty: 'Easy',
        question: 'What is democracy?',
        options: [
          'Rule by the military',
          'Government by the people, of the people, for the people',
          'Rule by one person',
          'Government by rich people only',
        ],
        correctAnswer: 2,
        explanation:
          'Democracy is a form of government where power rests with the people. Key principles: rule by majority with respect for minority rights, political equality, political freedom, and rule of law. Citizens choose their representatives through regular, free, and fair elections.',
      },
      {
        level: 24,
        difficulty: 'Medium',
        question: 'What are the different ways of defining democracy?',
        options: [
          'Only one definition exists',
          'Minimal definition (elections) and broader definition (equality, freedom, justice)',
          'Only economic definitions',
          'Only political definitions',
        ],
        correctAnswer: 2,
        explanation:
          'Definitions of democracy: (1) Minimal/Procedural - regular elections, political competition, (2) Substantive - includes equality, freedom, justice, dignity, (3) Political - focuses on government formation, (4) Social - extends to social relations and equality, (5) Economic - includes economic equality and justice.',
      },
      {
        level: 25,
        difficulty: 'Easy',
        question: 'What are the key features of democracy?',
        options: [
          'Rule by one party only',
          'Free elections, political equality, majority rule with minority rights, rule of law',
          'No elections needed',
          'Rule by experts only',
        ],
        correctAnswer: 2,
        explanation:
          'Key features: (1) Regular, free, and fair elections, (2) Universal adult franchise, (3) Political equality - one person, one vote, (4) Majority rule with minority rights, (5) Rule of law, (6) Independent judiciary, (7) Freedom of speech and expression, (8) Right to form associations and parties.',
      },
      {
        level: 26,
        difficulty: 'Medium',
        question: 'Is democracy better than other forms of government?',
        options: [
          'No, dictatorship is always better',
          'Yes, because it promotes equality, freedom, and dignity while being accountable',
          'All governments are the same',
          'Only monarchy is better',
        ],
        correctAnswer: 2,
        explanation:
          "Democracy is better because: (1) Promotes political equality and freedom, (2) Accountable government, (3) Legitimate government with people's consent, (4) Accommodates diversity, (5) Provides method for resolving conflicts, (6) Enhances dignity of citizens, (7) Allows peaceful change of government. However, it may be slower in decision-making.",
      },
      {
        level: 27,
        difficulty: 'Easy',
        question: 'What are the broader meanings of democracy?',
        options: [
          'Democracy only means elections',
          'Democracy includes social equality, economic justice, and respect for diversity',
          'Democracy has no broader meaning',
          'Democracy means only political freedom',
        ],
        correctAnswer: 2,
        explanation:
          'Broader meanings: (1) Social democracy - equality in society, no discrimination, (2) Economic democracy - reducing inequality, equal opportunities, (3) Gender democracy - equal rights for all genders, (4) Global democracy - democratic principles in international relations, (5) Participatory democracy - citizen participation beyond elections.',
      },
      {
        level: 28,
        difficulty: 'Medium',
        question:
          'What challenges does democracy face in the contemporary world?',
        options: [
          'No challenges exist',
          'Inequality, corruption, lack of participation, populism, external influences',
          'Only economic challenges',
          'Only political challenges',
        ],
        correctAnswer: 2,
        explanation:
          'Contemporary challenges: (1) Growing inequality despite democratic equality, (2) Corruption and money power in politics, (3) Low political participation, (4) Rise of populism and majoritarianism, (5) External influences on democracy, (6) Challenge of accommodating diversity, (7) Role of media and technology, (8) Balancing security and freedom.',
      },
      {
        level: 29,
        difficulty: 'Easy',
        question: 'What do you understand by competitive politics?',
        options: [
          'Politics like sports competition',
          'Political competition through elections between parties with different policies',
          'Fighting between politicians',
          'Business competition in politics',
        ],
        correctAnswer: 2,
        explanation:
          "Competitive politics means political competition where different parties compete for power through elections, offering different policies and programs to voters. It ensures choice for voters, accountability of rulers, and peaceful transfer of power based on people's mandate.",
      },
      {
        level: 30,
        difficulty: 'Medium',
        question: 'Why do we need political parties?',
        options: [
          'To create problems in democracy',
          'To aggregate interests, provide choice, form government, and ensure accountability',
          'To waste money',
          'To divide people',
        ],
        correctAnswer: 2,
        explanation:
          'Need for political parties: (1) Aggregate and articulate diverse interests, (2) Provide policy choices to voters, (3) Form and run government, (4) Play opposition role for accountability, (5) Shape public opinion, (6) Provide political education, (7) Link government with people, (8) Ensure democratic competition.',
      },
      {
        level: 31,
        difficulty: 'Easy',
        question: 'What is a political party?',
        options: [
          'A social gathering',
          'An organized group that seeks to capture power through elections',
          'A business organization',
          'A sports club',
        ],
        correctAnswer: 2,
        explanation:
          'A political party is an organized group of people who share similar political views and ideologies, and seek to capture political power through constitutional means, primarily elections. Parties have policies, programs, and work to implement them when in power.',
      },
      {
        level: 32,
        difficulty: 'Medium',
        question: 'What are the components of a political party?',
        options: [
          'Only leaders',
          'Leaders, active members, followers, and party organization',
          'Only voters',
          'Only candidates',
        ],
        correctAnswer: 2,
        explanation:
          'Components: (1) Leaders - top leadership giving direction, (2) Active members - involved in party activities, (3) Followers/sympathizers - support party but not active members, (4) Party organization - structure from local to national level, (5) Ideology and policies, (6) Symbols and identity.',
      },
      {
        level: 33,
        difficulty: 'Easy',
        question: 'What functions do political parties perform?',
        options: [
          'Only win elections',
          'Contest elections, form government, provide opposition, shape opinion, access to welfare',
          'Only make promises',
          'Only criticize others',
        ],
        correctAnswer: 2,
        explanation:
          'Functions: (1) Contest elections and select candidates, (2) Put forward policies and programs, (3) Form and run government, (4) Play opposition role - criticize and check government, (5) Shape public opinion on issues, (6) Provide access to government machinery and welfare schemes for people.',
      },
      {
        level: 34,
        difficulty: 'Medium',
        question: 'How many parties should we have - one, two, or multiple?',
        options: [
          'Only one party is best',
          'Multiple parties provide choice, represent diversity, and prevent monopoly',
          'Two parties are always enough',
          'Parties are not needed',
        ],
        correctAnswer: 2,
        explanation:
          'Multiple parties are better because: (1) Provide choice to voters, (2) Represent diverse interests and ideologies, (3) Prevent monopoly of power, (4) Ensure healthy competition, (5) Accommodate different regions, communities, and classes, (6) Allow for coalition governments reflecting broader consensus. One party leads to dictatorship; two may not represent all diversity.',
      },
      {
        level: 35,
        difficulty: 'Easy',
        question: 'What is a national political party?',
        options: [
          'A party that exists in one state only',
          'A party recognized by Election Commission with presence across states and significant vote share',
          'A party with international connections',
          'A party formed by the government',
        ],
        correctAnswer: 2,
        explanation:
          'A national party is recognized by Election Commission based on: (1) Secures 6% votes in Lok Sabha election or assembly elections in 4 states, and (2) Wins 4 Lok Sabha seats from at least 3 different states, OR (3) Recognized as state party in 4 or more states. Gets reserved symbols and other privileges.',
      },
      {
        level: 36,
        difficulty: 'Medium',
        question: 'What are the major national parties in India?',
        options: [
          'Only one party exists',
          'Congress, BJP, CPI, CPI(M), NCP, BSP and others with national recognition',
          'Only regional parties exist',
          'No parties are national',
        ],
        correctAnswer: 2,
        explanation:
          'Major national parties (as per Election Commission): (1) Indian National Congress - centrist, secular, (2) Bharatiya Janata Party - right-wing, Hindutva, (3) Communist Party of India - left ideology, (4) Communist Party of India (Marxist) - left ideology, (5) Bahujan Samaj Party - Dalit representation, (6) Nationalist Congress Party. Status changes based on electoral performance.',
      },
      {
        level: 37,
        difficulty: 'Easy',
        question: 'What are state/regional parties?',
        options: [
          'Parties that operate internationally',
          'Parties with significant presence in one or few states',
          'Parties without any support',
          'Parties formed by state governments',
        ],
        correctAnswer: 2,
        explanation:
          'State/regional parties have influence in one or few states. Recognition criteria: (1) Secures 6% votes in state assembly election, and (2) Wins 2 assembly seats, OR (3) Secures 6% votes in Lok Sabha election from state and wins 1 Lok Sabha seat. Examples: TMC (West Bengal), DMK (Tamil Nadu), Shiv Sena (Maharashtra).',
      },
      {
        level: 38,
        difficulty: 'Medium',
        question:
          'What is the significance of regional parties in Indian democracy?',
        options: [
          'They weaken democracy',
          'They represent regional interests, force national parties to be responsive, and play crucial role in coalitions',
          'They have no significance',
          'They only create problems',
        ],
        correctAnswer: 2,
        explanation:
          'Significance: (1) Represent regional aspirations and interests, (2) Force national parties to accommodate local concerns, (3) Essential for coalition governments at center, (4) Provide alternative to national parties, (5) Ensure federal character of Indian polity, (6) Represent linguistic, cultural diversity, (7) Often form government in states, bringing different policies and approaches.',
      },
      {
        level: 39,
        difficulty: 'Easy',
        question: 'What are the challenges to political parties?',
        options: [
          'Parties face no challenges',
          'Lack of internal democracy, corruption, money power, and criminalization',
          'Only electoral challenges',
          'Only ideological challenges',
        ],
        correctAnswer: 2,
        explanation:
          'Major challenges: (1) Lack of internal democracy - concentrated leadership, no organizational elections, (2) Money and muscle power in politics, (3) Criminalization - candidates with criminal background, (4) Caste and communal considerations, (5) Lack of ideological clarity, (6) Defection and instability, (7) Personality-based rather than policy-based politics.',
      },
      {
        level: 40,
        difficulty: 'Medium',
        question: 'How can political parties be reformed?',
        options: [
          'Parties cannot be reformed',
          'Through legal reforms, internal democracy, transparency, and citizen participation',
          'By banning all parties',
          'Only through government action',
        ],
        correctAnswer: 2,
        explanation:
          'Reforms needed: (1) Legal reforms - disclosure of criminal records, source of funds, (2) Internal democracy - organizational elections, participatory decision-making, (3) Financial transparency - audit of party accounts, (4) State funding of elections, (5) Voter education and awareness, (6) Strong Election Commission, (7) Civil society pressure, (8) Media role in exposing corrupt practices.',
      },
      {
        level: 41,
        difficulty: 'Easy',
        question: 'What are the outcomes of democracy?',
        options: [
          'Democracy has no outcomes',
          'Accountable government, economic development, reduced inequality, accommodation of diversity',
          'Only negative outcomes',
          'Same as dictatorship',
        ],
        correctAnswer: 2,
        explanation:
          'Democratic outcomes: (1) Accountable, responsive, and legitimate government, (2) Economic growth and development (though not always better than dictatorships), (3) Reduced inequality and poverty (mixed results), (4) Accommodation of social diversity, (5) Dignity and freedom of citizens, (6) Method for resolving conflicts, (7) Transparency and public participation.',
      },
      {
        level: 42,
        difficulty: 'Medium',
        question: "How do we assess democracy's outcomes?",
        options: [
          'Only through economic indicators',
          'Through multiple criteria - political, social, economic, and international comparison',
          'Only through elections',
          'Cannot be assessed',
        ],
        correctAnswer: 2,
        explanation:
          "Assessment criteria: (1) Political - accountability, legitimacy, responsiveness, (2) Economic - growth, development, equality, (3) Social - diversity accommodation, freedom, dignity, (4) Comparison with non-democratic countries, (5) Comparison with democratic ideals and expectations, (6) Citizens' satisfaction and participation levels, (7) International rankings and indices.",
      },
      {
        level: 43,
        difficulty: 'Easy',
        question: 'Does democracy produce accountable government?',
        options: [
          'No, democracy reduces accountability',
          'Yes, through regular elections, opposition role, and citizen participation',
          'Accountability is not important',
          'Only dictatorships are accountable',
        ],
        correctAnswer: 2,
        explanation:
          'Democracy promotes accountability through: (1) Regular elections where government can be changed, (2) Opposition parties scrutinize government, (3) Media and civil society oversight, (4) Right to information, (5) Public participation in decision-making, (6) Transparent procedures, (7) Constitutional checks and balances, (8) Independent judiciary to check executive power.',
      },
      {
        level: 44,
        difficulty: 'Medium',
        question: 'Does democracy produce economic development?',
        options: [
          'Democracy always produces faster growth than dictatorship',
          "Democracy's economic record is mixed - some succeed, others struggle",
          'Democracy never produces economic growth',
          'Economic development is not related to government type',
        ],
        correctAnswer: 2,
        explanation:
          'Mixed economic outcomes: (1) Some democracies (India, Botswana) show good growth, others struggle, (2) Some dictatorships show fast growth (China, Singapore), others fail, (3) Democracy provides better distribution of growth benefits, (4) Long-term sustainability favors democracy, (5) Quality of institutions matters more than regime type, (6) Democracy provides stable framework for investment.',
      },
      {
        level: 45,
        difficulty: 'Easy',
        question: 'Does democracy reduce economic inequality?',
        options: [
          'Democracy eliminates all inequality',
          'Democracy reduces inequality better than dictatorships but challenges remain',
          'Democracy increases inequality',
          'Inequality cannot be reduced',
        ],
        correctAnswer: 2,
        explanation:
          "Democracy's record on inequality: (1) Better than dictatorships in providing equal opportunities, (2) Welfare schemes reach people better, (3) Poor have voice through voting, (4) However, economic inequality persists and sometimes increases, (5) Rich still have more political influence, (6) Need for economic reforms alongside political democracy, (7) Long-term trend favors greater equality.",
      },
      {
        level: 46,
        difficulty: 'Easy',
        question: 'Why is power sharing desirable in a democracy?',
        options: [
          'To concentrate power in one authority',
          'To reduce conflicts and promote stability',
          'To exclude minority groups',
          'To promote dictatorship',
        ],
        correctAnswer: 2,
        explanation:
          "Power sharing is desirable for prudential reasons, as it reduces the possibility of conflict between social groups, ensures stability by preventing one community from dominating others, and strengthens national unity. It is also valuable for moral reasons, as it upholds the spirit of democracy by involving more people in governance and treating power as a shared responsibility rather than a prize. Examples include Belgium's accommodation model, where power is shared among linguistic groups through equal representation in government, community governments, and a federal structure, contrasting with Sri Lanka's majoritarian approach, which led to civil war due to Sinhala dominance over Tamils.",
      },
      {
        level: 47,
        difficulty: 'Medium',
        question:
          'What is the main difference between power sharing in Belgium and Sri Lanka?',
        options: [
          'Belgium adopted majoritarianism, Sri Lanka accommodation',
          'Belgium shared power among linguistic groups, Sri Lanka imposed Sinhala supremacy',
          'Both countries followed the same model',
          'Sri Lanka has a federal system, Belgium unitary',
        ],
        correctAnswer: 2,
        explanation:
          "Belgium, facing linguistic divisions (59% Dutch in Flemish region, 40% French in Wallonia, 1% German), amended its constitution four times between 1970-1993 to enable power sharing: equal ministers in central government, state governments with autonomy, community governments for cultural issues, and equal representation in Brussels. This prevented division. In contrast, Sri Lanka's 1956 Act made Sinhala the official language, prioritized Sinhalese in jobs, and ignored Tamil demands, leading to alienation, LTTE formation, and civil war. Power sharing forms include horizontal (among legislature, executive, judiciary), vertical (federal division), among social groups, and among political parties/pressure groups.",
      },
      {
        level: 48,
        difficulty: 'Easy',
        question: 'What is federalism?',
        options: [
          'A system where power is concentrated at the center',
          'A system with at least two levels of government sharing power',
          'A unitary system with no state governments',
          'A dictatorship with one ruler',
        ],
        correctAnswer: 2,
        explanation:
          "Federalism involves division of power between central and regional governments, each independent in their spheres. Key features: multiple tiers (usually two), written constitution specifying powers, independent judiciary to interpret, separate revenue sources, and constitutional supremacy. Unlike unitary systems (e.g., UK, France) where center can alter regions, federations like USA, India ensure mutual independence. Federations form by 'coming together' (independent states unite, e.g., USA) or 'holding together' (center shares power with regions, e.g., India, Spain).",
      },
      {
        level: 49,
        difficulty: 'Medium',
        question:
          "How is India a federal country despite being called a 'Union of States'?",
        options: [
          'States have no autonomy',
          'Power is divided between center and states via Constitution',
          'Center can dissolve states at will',
          'There are no state lists',
        ],
        correctAnswer: 2,
        explanation:
          "India's Constitution declares it a Union but federal in practice: three lists—Union (97 subjects like defense), State (66 like police), Concurrent (47 like education). Residuary powers with center. Changes to power division require both Parliament houses' approval. Judiciary resolves disputes. States depend on center for finances via taxes and grants. Special provisions for some states (e.g., Article 370 for J&K, revoked 2019). Union Territories like Delhi have partial statehood. Federalism strengthened by coalitions since 1990s, demanding more state autonomy.",
      },
      {
        level: 50,
        difficulty: 'Easy',
        question: 'What led to the decentralization of power in India?',
        options: [
          'To concentrate power at center',
          'To involve local governments in decision-making',
          'To abolish state governments',
          'To promote one-party rule',
        ],
        correctAnswer: 2,
        explanation:
          "Decentralization addresses India's vast diversity and size, making local governance effective. 1992 amendments made Panchayats/Municipalities constitutional: three-tier rural (Gram Panchayat, Panchayat Samiti, Zila Parishad), urban (Municipalities/Corporations). Elections every 5 years, reservations for SC/ST/OBC/women (1/3 seats). State Election Commissions oversee, Finance Commissions allocate funds. Challenges: irregular elections in some states, interference. This third tier handles local issues like water, roads, promoting grassroots democracy.",
      },
      {
        level: 51,
        difficulty: 'Medium',
        question: 'What are the challenges to federalism in India?',
        options: [
          'Too much state autonomy',
          "Center's dominance in finance and disputes",
          'No judicial role',
          'Equal power sharing',
        ],
        correctAnswer: 2,
        explanation:
          "Challenges include center's control over finances (states get 42% taxes via Finance Commission), ability to form new states/re-draw boundaries, and emergency powers under Articles 352, 356 (President's rule, misused historically). Linguistic states formed post-1956 (e.g., Gujarat, Maharashtra) to accommodate diversity. Coalition governments since 1989 have balanced this by giving states more say, as regional parties influence center.",
      },
      {
        level: 52,
        difficulty: 'Easy',
        question: 'What is gender division in society?',
        options: [
          'A natural biological difference',
          'A social division based on roles assigned to men and women',
          'An equal sharing of responsibilities',
          'A political division',
        ],
        correctAnswer: 2,
        explanation:
          'Gender division is social, not biological, where women handle most housework/childcare (unpaid), face discrimination in workforce (lower pay, sexual harassment). Feminist movements demand equality: shared housework, equal pay. Progress: more girls in education, but sex ratio 914/1000, low workforce participation (26%), high domestic violence. Patriarchal society values sons over daughters.',
      },
      {
        level: 53,
        difficulty: 'Medium',
        question:
          "How does women's political representation impact gender equality?",
        options: [
          'It has no impact',
          "Low representation limits addressing women's issues",
          'Women are over-represented',
          'Only men represent women',
        ],
        correctAnswer: 2,
        explanation:
          "Women's representation is low: 14% in Lok Sabha, 11% in state assemblies, vs. global 24%. Panchayats have 1/3 reservation, increasing to 50% in some, empowering over 1 million women. No parliamentary quota yet, despite bills. Movements raise awareness on dowry, violence. Religion in politics: secularism separates state from religion, but politicization leads to communalism, where religion becomes identity basis, causing conflicts (e.g., Hindu-Muslim riots).",
      },
      {
        level: 54,
        difficulty: 'Easy',
        question: 'What is communalism in Indian politics?',
        options: [
          'Promoting unity among religions',
          'Using religion to gain political support, leading to divisions',
          'Banning religious practices',
          'Equal treatment of all religions',
        ],
        correctAnswer: 2,
        explanation:
          "Communalism sees religion as basis of society, promotes own religion's supremacy, uses sacred symbols/votes on religious lines. Extreme form demands separate state (e.g., partition). Constitution prohibits discrimination, no state religion. Family laws differ by religion, but state intervenes for equality (e.g., banning bigamy). Gandhiji believed religion can't be separated from politics if moral.",
      },
      {
        level: 55,
        difficulty: 'Medium',
        question: 'How does caste influence Indian politics?',
        options: [
          'Caste has no role',
          'Political parties appeal to caste sentiments for votes',
          'Caste system is abolished completely',
          'Only upper castes vote',
        ],
        correctAnswer: 2,
        explanation:
          "Casteism: parties choose candidates/tickets based on caste composition, form caste-based alliances. Positive: gives voice to disadvantaged (e.g., BSP for Dalits). Negative: diverts from real issues, causes tensions. Reservations for SC/ST/OBC in jobs/education to remedy past injustices. Caste alone doesn't determine elections; voters have multiple identities. Occupational mobility, urbanization weaken caste, but it persists in marriage/politics.",
      },
      {
        level: 56,
        difficulty: 'Easy',
        question: 'Why are political parties necessary in a democracy?',
        options: [
          'To concentrate power',
          'To contest elections and form governments',
          'To abolish elections',
          'To promote dictatorship',
        ],
        correctAnswer: 2,
        explanation:
          'Parties contest elections, offer policies/choices, form/oppose governments, make laws, shape public opinion. Without them, representatives would be independents, unstable. Functions: nominate candidates, campaign, legislate, run governments, provide opposition accountability, link to citizens.',
      },
      {
        level: 57,
        difficulty: 'Medium',
        question: 'What distinguishes national from state parties in India?',
        options: [
          'National parties operate only in one state',
          'National parties have presence in multiple states, recognized if they meet criteria like 6% votes in Lok Sabha',
          'State parties have national symbols',
          'There is no difference',
        ],
        correctAnswer: 2,
        explanation:
          'National parties (e.g., BJP, Congress, CPI(M)): 7 recognized, need 6% votes in Lok Sabha/4 states or 2% seats. State parties (e.g., SP, TMC): over 60, recognized in specific states with 6% assembly votes/3% seats. Multi-party system due to diversity, leading to coalitions (e.g., UPA, NDA). One-party dominance post-independence with Congress, now multi-party.',
      },
      {
        level: 58,
        difficulty: 'Easy',
        question:
          'What are the challenges faced by political parties in India?',
        options: [
          'Too much internal democracy',
          'Dynastic succession, lack of transparency, money/muscle power',
          'Excessive funding',
          'No criminal involvement',
        ],
        correctAnswer: 2,
        explanation:
          "Challenges: dynastic control (leaders' families dominate), no internal elections, opaque funding, money/criminal influence in elections. Reforms: state funding, EC affidavits on criminal records/assets, RTI on parties, internal democracy mandates, women's quota proposals. EC regulates: symbols, spending limits, code of conduct.",
      },
      {
        level: 59,
        difficulty: 'Medium',
        question: 'How can political parties be reformed to improve democracy?',
        options: [
          'By allowing more criminal candidates',
          'Through laws on internal democracy, funding, and affidavits',
          'By reducing elections',
          'By promoting dynasties',
        ],
        correctAnswer: 2,
        explanation:
          "Reforms include Supreme Court orders for criminal/asset disclosure, EC limits on spending, but parties resist internal changes. Suggestions: quota for women, state funding to reduce money influence. Defection law (1985, 2003 amendment) prevents switching without merger. People's role: pressure via movements, media, form new parties.",
      },
      {
        level: 60,
        difficulty: 'Easy',
        question: 'How is democracy accountable to the people?',
        options: [
          'Leaders rule without checks',
          'Through regular elections and transparency',
          'By ignoring public opinion',
          'Through dictatorship',
        ],
        correctAnswer: 2,
        explanation:
          "Democracy ensures accountability via elections (rulers can be changed), responsiveness (addresses needs or faces defeat), and legitimacy (people's consent). Better than alternatives as decisions are debated, mistakes correctable peacefully.",
      },
      {
        level: 61,
        difficulty: 'Medium',
        question:
          'Why does democracy sometimes lead to slower economic growth?',
        options: [
          'No consultations',
          'Due to deliberations and accommodations for diversity',
          'High corruption always',
          'No economic policies',
        ],
        correctAnswer: 2,
        explanation:
          'Economic outcomes: democracies reduce inequality via welfare, but growth varies (India slower than China). No famines in democracies due to free press/accountability. Poverty reduction mixed; education/health improving but uneven. Democracy not economic panacea, depends on policies.',
      },
      {
        level: 62,
        difficulty: 'Easy',
        question: 'How does democracy promote dignity and freedom?',
        options: [
          'By suppressing rights',
          'Through equal treatment and rights claims',
          'By favoring elites',
          'By banning protests',
        ],
        correctAnswer: 2,
        explanation:
          "Democracy treats all as equal, allows disadvantaged (e.g., women, castes) to demand respect. Examples: women's movements for rights, civil rights in USA. Freedom of expression, though abuses exist.",
      },
      {
        level: 63,
        difficulty: 'Medium',
        question:
          'What are the limitations of democracy in reducing social divisions?',
        options: [
          'It eliminates all conflicts',
          'It accommodates diversity but can lead to disintegration if not managed',
          'It ignores diversity',
          'It promotes uniformity',
        ],
        correctAnswer: 2,
        explanation:
          'Democracy handles conflicts via negotiation, but outcomes depend on leaders/culture. Better at accommodation than non-democracies. Overall, despite delays/corruption, democracy is superior for dignity, freedom, and peaceful change.',
      },
      {
        "level": 64,
        "difficulty": "Medium",
        "question": "How does democracy accommodate social diversity?",
        "options": [
          "Democracy ignores diversity",
          "Through majority rule, minority rights, federalism, and inclusive policies",
          "By suppressing minorities",
          "Diversity creates problems in democracy"
        ],
        "correctAnswer": 2,
        "explanation": "Democracy accommodates diversity through: (1) Majority rule with minority rights protection, (2) Federal structure allowing regional autonomy, (3) Proportional representation, (4) Cultural and educational rights, (5) Anti-discrimination laws, (6) Inclusive institutions, (7) Coalition governments representing different groups, (8) Constitutional safeguards for minorities."
      },
      {
        "level": 65,
        "difficulty": "Easy",
        "question": "Does democracy promote dignity and freedom of citizens?",
        "options": [
          "No, democracy restricts freedom",
          "Yes, democracy enhances individual dignity and provides various freedoms",
          "Only dictatorship provides dignity",
          "Freedom is not important"
        ],
        "correctAnswer": 2,
        "explanation": "Democracy promotes dignity and freedom through: (1) Equal treatment regardless of background, (2) Freedom of expression and speech, (3) Freedom of association and movement, (4) Right to participate in governance, (5) Protection from arbitrary government action, (6) Independent judiciary protecting rights, (7) Constitutional guarantees, (8) Space for dissent and criticism."
      },
      {
        "level": 66,
        "difficulty": "Medium",
        "question": "What are the challenges to democracy in India?",
        "options": [
          "India faces no democratic challenges",
          "Poverty, illiteracy, caste conflicts, corruption, communalism, and terrorism",
          "Only economic challenges",
          "Only external challenges"
        ],
        "correctAnswer": 2,
        "explanation": "Major challenges: (1) Poverty and inequality affecting participation, (2) Illiteracy limiting informed choice, (3) Caste-based discrimination and politics, (4) Communalism and religious conflicts, (5) Corruption in politics and administration, (6) Criminalization of politics, (7) Terrorism and security threats, (8) Regional imbalances, (9) Gender discrimination, (10) Environmental degradation."
      },
      {
        "level": 67,
        "difficulty": "Easy",
        "question": "How can democracy be deepened and strengthened?",
        "options": [
          "Democracy cannot be improved",
          "Through citizen participation, institutional reforms, education, and civil society activism",
          "Only through government action",
          "By reducing democratic institutions"
        ],
        "correctAnswer": 2,
        "explanation": "Deepening democracy requires: (1) Greater citizen participation beyond elections, (2) Strengthening democratic institutions, (3) Political and civic education, (4) Active civil society organizations, (5) Free and responsible media, (6) Transparent and accountable governance, (7) Reducing money power in politics, (8) Ensuring equal opportunities for all, (9) Promoting democratic values in society."
      },
      {
        "level": 68,
        "difficulty": "Medium",
        "question": "What is the role of citizens in democracy?",
        "options": [
          "Citizens have no role after elections",
          "Active participation in elections, governance, and holding government accountable",
          "Only voting is enough",
          "Citizens should not interfere in politics"
        ],
        "correctAnswer": 2,
        "explanation": "Citizen roles: (1) Participating in elections as informed voters, (2) Joining political parties and movements, (3) Monitoring government performance, (4) Using Right to Information, (5) Participating in public debates and discussions, (6) Respecting rights of others, (7) Following rule of law, (8) Contributing to community development, (9) Promoting democratic values, (10) Peaceful protest and dissent when needed."
      },
      {
        "level": 69,
        "difficulty": "Easy",
        "question": "What is the relationship between democracy and development?",
        "options": [
          "Democracy hinders development",
          "Democracy provides framework for sustainable and inclusive development",
          "Development is possible only under dictatorship",
          "No relationship exists"
        ],
        "correctAnswer": 2,
        "explanation": "Democracy-development relationship: (1) Democracy ensures development benefits reach all sections, (2) Provides stable framework for long-term investment, (3) Allows people to choose development priorities, (4) Prevents extreme policies that harm people, (5) Encourages human development alongside economic growth, (6) Creates institutions that support development, (7) May be slower but more sustainable and inclusive."
      },
      {
        "level": 70,
        "difficulty": "Medium",
        "question": "How do social movements contribute to democracy?",
        "options": [
          "Social movements weaken democracy",
          "They raise issues, mobilize people, and expand democratic participation beyond elections",
          "They are not related to democracy",
          "Only political parties can contribute to democracy"
        ],
        "correctAnswer": 2,
        "explanation": "Social movements contribute by: (1) Raising new issues neglected by political parties, (2) Mobilizing people around specific causes, (3) Expanding participation beyond elections, (4) Putting pressure on government for policy changes, (5) Educating people about their rights, (6) Providing alternative forms of political participation, (7) Strengthening civil society, (8) Deepening democratic culture and values."
      },
      {
        "level": 71,
        "difficulty": "Easy",
        "question": "What is the importance of opposition in democracy?",
        "options": [
          "Opposition creates problems only",
          "Opposition provides accountability, alternative policies, and represents different viewpoints",
          "Opposition is not needed",
          "Opposition should be banned"
        ],
        "correctAnswer": 2,
        "explanation": "Opposition importance: (1) Checks and balances government power, (2) Provides alternative policies and vision, (3) Represents those who didn't vote for ruling party, (4) Scrutinizes government decisions and spending, (5) Ensures debates on important issues, (6) Prevents authoritarian tendencies, (7) Keeps democracy alive through competitive politics, (8) Provides alternative leadership option."
      },
      {
        "level": 72,
        "difficulty": "Medium",
        "question": "What is the role of media in democracy?",
        "options": [
          "Media should only entertain people",
          "Inform citizens, scrutinize government, facilitate debate, and act as watchdog",
          "Media should support government always",
          "Media has no political role"
        ],
        "correctAnswer": 2,
        "explanation": "Media roles: (1) Inform citizens about government policies and performance, (2) Investigate corruption and wrongdoing (watchdog role), (3) Provide platform for public debate, (4) Educate people about democratic processes, (5) Give voice to different viewpoints, (6) Hold government accountable, (7) Set public agenda, (8) Connect government with people. However, media should remain independent and responsible."
      },
      {
        "level": 73,
        "difficulty": "Easy",
        "question": "What are democratic rights?",
        "options": [
          "Rights only for government officials",
          "Rights that are essential for the functioning of democracy",
          "Rights that can be easily taken away",
          "Rights only during elections"
        ],
        "correctAnswer": 2,
        "explanation": "Democratic rights are fundamental rights essential for democracy to function properly. They include: Right to vote, Right to contest elections, Right to form political parties, Right to freedom of expression, Right to assembly and association, Right to information, Right to equality, Right to constitutional remedies. These rights ensure people can participate meaningfully in democracy."
      },
      {
        "level": 74,
        "difficulty": "Medium",
        "question": "How are democratic rights different from other rights?",
        "options": [
          "There is no difference",
          "Democratic rights specifically enable political participation and democratic functioning",
          "Democratic rights are less important",
          "Other rights are not needed in democracy"
        ],
        "correctAnswer": 2,
        "explanation": "Democratic rights specifically focus on: (1) Political participation - voting, contesting elections, (2) Political expression - free speech, assembly, (3) Political organization - forming parties, associations, (4) Political accountability - information, petition. While other rights (economic, social, cultural) are also important, democratic rights are specifically designed to make democracy work effectively."
      },
      {
        "level": 75,
        "difficulty": "Easy",
        "question": "What is Right to Information (RTI)?",
        "options": [
          "Right to get information from newspapers only",
          "Right to seek information from government bodies to ensure transparency",
          "Right to spread any information",
          "Right to hide information"
        ],
        "correctAnswer": 2,
        "explanation": "RTI Act 2005 gives citizens the right to: (1) Seek information from any government body, (2) Get copies of documents, (3) Inspect government works and documents, (4) Take certified samples of materials, (5) Get information in electronic format. It promotes transparency, accountability, and helps citizens participate effectively in democracy by accessing government information."
      },
      {
        "level": 76,
        "difficulty": "Medium",
        "question": "How does RTI strengthen democracy?",
        "options": [
          "RTI weakens democracy",
          "By promoting transparency, accountability, and informed citizen participation",
          "RTI has no impact on democracy",
          "Only by creating problems for government"
        ],
        "correctAnswer": 2,
        "explanation": "RTI strengthens democracy by: (1) Making government transparent and accountable, (2) Enabling informed decision-making by citizens, (3) Exposing corruption and malpractices, (4) Empowering citizens to question government, (5) Improving governance quality, (6) Ensuring public participation in policy-making, (7) Making democracy more responsive to people's needs, (8) Building trust between government and citizens."
      },
      {
        "level": 77,
        "difficulty": "Easy",
        "question": "What are the limitations on democratic rights?",
        "options": [
          "Democratic rights have no limitations",
          "Rights can be limited during emergencies, for national security, and public order",
          "All rights can be taken away anytime",
          "Only government decides limitations"
        ],
        "correctAnswer": 2,
        "explanation": "Reasonable limitations on democratic rights: (1) During national emergency declared under Constitution, (2) For maintaining public order and national security, (3) To prevent incitement to violence, (4) To protect rights of others, (5) For maintaining unity and integrity of nation, (6) As provided in Constitution itself. However, limitations must be reasonable, temporary, and subject to judicial review."
      },
      {
        "level": 78,
        "difficulty": "Medium",
        "question": "How can democratic rights be protected?",
        "options": [
          "Rights protect themselves automatically",
          "Through independent judiciary, active citizens, civil society, and constitutional safeguards",
          "Only government can protect rights",
          "Rights cannot be protected"
        ],
        "correctAnswer": 2,
        "explanation": "Protection of democratic rights requires: (1) Independent and impartial judiciary, (2) Active and aware citizens who know their rights, (3) Strong civil society organizations, (4) Free media to expose violations, (5) Constitutional safeguards and remedies, (6) Rule of law, (7) Democratic political culture, (8) International pressure and support, (9) Education about rights and responsibilities, (10) Effective implementation of laws protecting rights."
      },
      {
        "level": 79,
        "difficulty": "Easy",
        "question": "What was the ethnic composition of Belgium?",
        "options": [
          "59% French-speaking, 40% Dutch-speaking",
          "59% Dutch-speaking, 40% French-speaking, 1% German-speaking",
          "74% Sinhala-speaking, 18% Tamil-speaking",
          "50% Dutch-speaking, 50% French-speaking"
        ],
        "correctAnswer": 2,
        "explanation": "Belgium has a complex ethnic composition. In the country as a whole, 59% of the population lives in the Flemish region and speaks Dutch. Another 40% lives in the Wallonia region and speaks French. The remaining 1% speaks German. However, in the capital city, Brussels, 80% of the population is French-speaking, while only 20% is Dutch-speaking."
      },
      {
        "level": 80,
        "difficulty": "Medium",
        "question": "What is 'Majoritarianism', as practiced in Sri Lanka?",
        "options": [
          "A belief that the majority community should be able to rule a country in whichever way it wants, disregarding the wishes of the minority.",
          "A system where power is shared equally among all communities.",
          "A system where the judiciary holds supreme power.",
          "A form of government where the monarch is the head of state."
        ],
        "correctAnswer": 1,
        "explanation": "Majoritarianism is a political philosophy where a majority group (based on religion, language, or ethnicity) holds primary power and believes it has the right to rule without considering the needs of minority groups. In Sri Lanka, after independence in 1948, the Sinhala community, which was in the majority, adopted majoritarian policies. The 1956 Act made Sinhala the only official language and gave preferential treatment to Sinhala applicants for university positions and government jobs, which alienated the Tamil minority and led to a civil war."
      },
      {
        "level": 81,
        "difficulty": "Medium",
        "question": "What is the key difference between the Belgian and Sri Lankan approaches to managing ethnic diversity?",
        "options": [
          "Belgium adopted majoritarianism while Sri Lanka adopted accommodation.",
          "Belgium adopted accommodation by sharing power, while Sri Lanka adopted majoritarianism by concentrating power.",
          "Both countries adopted similar power-sharing models.",
          "Belgium is a federal country, while Sri Lanka is a unitary country with no power sharing."
        ],
        "correctAnswer": 2,
        "explanation": "The key difference lies in their approach. **Belgium chose accommodation**. They amended their constitution to create a power-sharing arrangement that gave equal representation to both Dutch and French-speaking communities in the central government and created community governments to handle cultural issues. **Sri Lanka chose majoritarianism**, where the Sinhala majority imposed its will on the Tamil minority, leading to conflict. Belgium's model preserved unity, while Sri Lanka's led to civil war."
      },
      {
        "level": 82,
        "difficulty": "Easy",
        "question": "What is a 'prudential' reason for power sharing?",
        "options": [
          "It is the very spirit of democracy.",
          "It helps to reduce the possibility of conflict between social groups.",
          "It is morally the right thing to do.",
          "It ensures one group's dominance."
        ],
        "correctAnswer": 2,
        "explanation": "Reasons for power sharing can be categorized into two types: **Prudential** and **Moral**. Prudential reasons are based on practical considerations and a careful calculation of gains and losses. The main prudential reason is that sharing power reduces social conflict, prevents political instability, and ensures the unity of the country. Moral reasons, on the other hand, emphasize that power sharing is valuable in itself because it is the essence of democracy, where citizens have a right to be consulted on how they are governed."
      },
      {
        "level": 83,
        "difficulty": "Medium",
        "question": "What is 'horizontal' power sharing?",
        "options": [
          "Power shared among different levels of government (central, state, local).",
          "Power shared among different social groups.",
          "Power shared among different organs of government (legislature, executive, judiciary).",
          "Power shared among different political parties."
        ],
        "correctAnswer": 3,
        "explanation": "Horizontal power sharing involves the division of power among the different organs of government placed at the same level: the **Legislature** (makes laws), the **Executive** (implements laws), and the **Judiciary** (interprets laws). This system creates **checks and balances**, as each organ can check the power of the others, ensuring that no single organ becomes too powerful. This is different from vertical power sharing, which involves different levels of government."
      },
      {
        "level": 84,
        "difficulty": "Easy",
        "question": "What is Federalism?",
        "options": [
          "A system where all power is concentrated in the central government.",
          "A system of government in which power is divided between a central authority and various constituent units of the country.",
          "A form of monarchy.",
          "A system with only one level of government."
        ],
        "correctAnswer": 2,
        "explanation": "Federalism is a system of government where power is divided between two or more levels of government. Typically, there is a central government for the entire country that is responsible for subjects of common national interest, and state or provincial governments that look after the day-to-day administration of their respective states. Both levels of government enjoy their power independent of the other. Examples include India, the USA, and Canada."
      },
      {
        "level": 85,
        "difficulty": "Medium",
        "question": "Which of the following is a key feature of a federal system?",
        "options": [
          "The central government can order the state government.",
          "The judiciary has no power to interpret the constitution.",
          "The jurisdictions of the respective levels of government are specified in the constitution.",
          "The state governments are subordinate to the central government."
        ],
        "correctAnswer": 3,
        "explanation": "A key feature of federalism is that the powers and responsibilities (jurisdiction) of each level of government (central and state) are clearly defined in the constitution. This ensures that neither level can encroach upon the powers of the other. The constitution is the supreme law, and both governments must operate within its framework. Other features include a rigid constitution, an independent judiciary, and dual objectives (to safeguard national unity and accommodate regional diversity)."
      },
      {
        "level": 86,
        "difficulty": "Easy",
        "question": "Which list contains subjects of national importance like defence and foreign affairs in India?",
        "options": [
          "State List",
          "Concurrent List",
          "Union List",
          "Residuary List"
        ],
        "correctAnswer": 3,
        "explanation": "The Indian Constitution provides a three-fold distribution of legislative powers: \n1. **Union List**: Includes subjects of national importance such as defence, foreign affairs, banking, and currency. Only the Union (Central) Government can make laws on these subjects. \n2. **State List**: Includes subjects of state and local importance such as police, trade, commerce, and agriculture. Only the State Governments can make laws on these subjects. \n3. **Concurrent List**: Includes subjects of common interest to both the Union and State governments, such as education, forests, and marriage. Both governments can make laws, but in case of a conflict, the law made by the Union Government prevails."
      },
      {
        "level": 87,
        "difficulty": "Medium",
        "question": "What is decentralization?",
        "options": [
          "Concentrating all power in the hands of the central government.",
          "When power is taken away from central and state governments and given to local government.",
          "The process of creating new states.",
          "A system of direct democracy."
        ],
        "correctAnswer": 2,
        "explanation": "Decentralization is the process of transferring power and responsibility from the central and state governments to local governing bodies. The basic idea is that there are many problems and issues that are best settled at the local level, as local people have better knowledge of their own problems. In India, a major step towards decentralization was taken in 1992 through the 73rd and 74th Constitutional Amendments, which gave constitutional status and power to Panchayati Raj institutions (in rural areas) and Municipalities (in urban areas)."
      },
      {
        "level": 88,
        "difficulty": "Easy",
        "question": "What is the term for the system of local self-government in rural areas of India?",
        "options": [
          "Municipal Corporation",
          "Panchayati Raj",
          "Zila Parishad",
          "State Assembly"
        ],
        "correctAnswer": 2,
        "explanation": "The system of rural local self-government in India is known as **Panchayati Raj**. It is a three-tier system: \n1. **Gram Panchayat** at the village level. \n2. **Panchayat Samiti** or Block Samiti at the block level. \n3. **Zila Parishad** at the district level. This system was given constitutional status by the 73rd Amendment Act of 1992."
      },
      {
        "level": 89,
        "difficulty": "Easy",
        "question": "What is meant by a 'sexual division of labour'?",
        "options": [
          "A system where men and women are paid equally for the same work.",
          "A system where women are not allowed to work.",
          "A system in which all work inside the home is either done by women or organized by them, while men work outside the home.",
          "A system where jobs are divided based on educational qualifications."
        ],
        "correctAnswer": 3,
        "explanation": "The sexual division of labour is a system based on gender stereotypes where work is divided between men and women based on the belief that certain tasks are more suitable for one gender. Traditionally, this results in women being responsible for domestic chores (cooking, cleaning, childcare) and men being responsible for paid work outside the home. This division is not based on biological differences but on social expectations and stereotypes."
      },
      {
        "level": 90,
        "difficulty": "Medium",
        "question": "What does the term 'Feminist' mean?",
        "options": [
          "A person who believes in the supremacy of women over men.",
          "A person who believes in equal rights and opportunities for women and men.",
          "A person who advocates for a matriarchal society.",
          "A person who studies female biology."
        ],
        "correctAnswer": 2,
        "explanation": "A feminist is a man or a woman who believes in and advocates for social, economic, and political equality for women and men. Feminist movements aim to challenge and dismantle patriarchal structures and stereotypes that lead to discrimination and inequality against women, ensuring they have the same rights and opportunities as men."
      },
      {
        "level": 91,
        "difficulty": "Medium",
        "question": "What is communalism?",
        "options": [
          "The belief that different religions can coexist peacefully.",
          "The belief that religion should not be mixed with politics.",
          "The belief that religion is the principal basis of social community, often leading to political conflict.",
          "The idea of a secular state."
        ],
        "correctAnswer": 3,
        "explanation": "Communalism is a political ideology where religion is seen as the primary identity of a social community. The problem begins when this belief is taken to politics. In its extreme form, communalism leads to the belief that people belonging to different religions cannot live as equal citizens within one nation and that one religion is superior to others. This can lead to political mobilization on religious lines, prejudice, stereotypes, and, ultimately, communal violence."
      },
      {
        "level": 92,
        "difficulty": "Easy",
        "question": "What is a 'Secular State' like India?",
        "options": [
          "A state that has an official religion.",
          "A state that is anti-religion.",
          "A state where there is no official religion and all religions are treated with equal respect.",
          "A state that gives special status to one religion."
        ],
        "correctAnswer": 3,
        "explanation": "A secular state is one that does not have an official state religion. The Indian Constitution embodies this principle. This means: \n1. There is no official religion for the Indian state. \n2. All individuals and communities have the freedom to profess, practice, and propagate any religion, or not to follow any. \n3. The state cannot discriminate against any citizen on the grounds of their religion. \n4. The state can intervene in religious matters to ensure equality within religious communities (e.g., banning untouchability)."
      },
      {
        "level": 93,
        "difficulty": "Medium",
        "question": "How does caste manifest itself in Indian politics?",
        "options": [
          "It has no influence on politics.",
          "Political parties often choose candidates and appeal for votes based on the caste composition of a constituency.",
          "The Constitution officially promotes caste-based politics.",
          "Only one caste is allowed to participate in politics."
        ],
        "correctAnswer": 2,
        "explanation": "Caste plays a significant role in Indian politics. When parties choose candidates, they often keep in mind the caste composition of the electorate to appeal to a majority of voters. Political parties and candidates frequently make appeals to caste sentiment to muster support. Some political parties are even known to favour certain castes. However, it's not a one-way street; politics also influences caste. Political competition has allowed lower-caste groups to assert their identity and demand their share of power."
      },
      {
        "level": 94,
        "difficulty": "Easy",
        "question": "What is the primary function of a political party?",
        "options": [
          "To provide entertainment.",
          "To contest elections and form governments.",
          "To run businesses.",
          "To act as a judicial body."
        ],
        "correctAnswer": 2,
        "explanation": "The most fundamental function of a political party is to contest elections. Parties select their candidates, put forward policies and programs, and try to win elections to form and run the government. Other important functions include shaping public opinion, providing access to government machinery, and playing the role of the opposition if they lose the election."
      },
      {
        "level": 95,
        "difficulty": "Medium",
        "question": "What is a multi-party system?",
        "options": [
          "A system where only one party is allowed to control and run the government.",
          "A system where power usually changes between two main parties.",
          "A system where several parties compete for power, and more than two parties have a reasonable chance of coming to power.",
          "A system with no political parties."
        ],
        "correctAnswer": 3,
        "explanation": "In a multi-party system, several political parties compete for power, and it often results in a coalition government where multiple parties join together to form a government. India is a prime example of a multi-party system. This system allows for a variety of interests and opinions to be represented in government. This contrasts with a one-party system (e.g., China) and a two-party system (e.g., the USA, the UK)."
      },
      {
        "level": 96,
        "difficulty": "Hard",
        "question": "What is the main criterion for a party to be recognized as a 'National Party' by the Election Commission of India?",
        "options": [
          "It must have offices in every state.",
          "It must win a majority of seats in the Lok Sabha.",
          "It must secure at least 6% of total votes in Lok Sabha elections OR Assembly elections in four states, AND win at least four seats in the Lok Sabha.",
          "It must be the oldest political party."
        ],
        "correctAnswer": 3,
        "explanation": "The Election Commission has laid down specific criteria for a party to be recognized as a National Party. A party qualifies if it fulfills any one of these three conditions: \n1. Secures at least six percent (6%) of the valid votes polled in any four or more states in a general election to the Lok Sabha or to the State Legislative Assembly AND wins at least four (4) seats in the Lok Sabha from any state or states. \n2. Wins at least two percent (2%) of the total seats in the Lok Sabha from at least three different states. \n3. Is recognized as a State Party in at least four states."
      },
      {
        "level": 97,
        "difficulty": "Medium",
        "question": "What is meant by 'dynastic succession' as a challenge to political parties?",
        "options": [
          "The lack of open and transparent procedures within the party.",
          "The tendency for leaders to favour people from their own family or close relatives for positions of power.",
          "The increasing role of money and wealthy candidates in politics.",
          "Parties not offering meaningful choices to voters."
        ],
        "correctAnswer": 2,
        "explanation": "Dynastic succession is a major challenge facing many political parties. It refers to a trend where control of the party remains within one family. Top positions are often handed down from one generation to another, which is unfair to other members of the party and bad for democracy, as people who may not have adequate experience or popular support can come to occupy positions of power simply due to their family name."
      },
      {
        "level": 98,
        "difficulty": "Medium",
        "question": "What is the 'role of the opposition' in a democracy?",
        "options": [
          "To support every decision of the government.",
          "To disrupt the functioning of the parliament.",
          "To criticize the government for its failures or wrong policies and keep it in check.",
          "To form a parallel government."
        ],
        "correctAnswer": 3,
        "explanation": "The opposition plays a crucial role in a democracy. Its primary function is to act as a watchdog over the ruling party. It does this by questioning government policies, highlighting its failures, mobilizing opposition to the government, and providing an alternative government-in-waiting. A strong opposition is essential for a healthy democracy as it ensures the government remains accountable to the people."
      },
      {
        "level": 99,
        "difficulty": "Easy",
        "question": "Why is democracy considered better than other forms of government?",
        "options": [
          "It guarantees economic development.",
          "It is the most efficient form of government.",
          "It promotes equality among citizens and enhances the dignity of the individual.",
          "It is free from corruption."
        ],
        "correctAnswer": 3,
        "explanation": "While democracy may not be the most efficient form of government and doesn't guarantee economic prosperity or a corruption-free society, it is considered superior for several reasons. Primarily, it is based on the principles of equality and liberty. It enhances the dignity of every individual by giving them a say in how they are governed (through voting). It also provides a method to resolve conflicts and allows room to correct mistakes, making it a more legitimate and accountable form of government."
      },
      {
        "level": 100,
        "difficulty": "Medium",
        "question": "What is meant by an 'accountable and responsive' government?",
        "options": [
          "A government that makes decisions very fast.",
          "A government that is formed by a single powerful leader.",
          "A government that is answerable to its citizens and attentive to their needs and demands.",
          "A government that ignores public opinion."
        ],
        "correctAnswer": 3,
        "explanation": "An accountable government is one that is answerable to its citizens. In a democracy, this accountability is ensured through regular elections and public debate. A responsive government is one that responds to the needs and expectations of the people. Democratic governments are expected to be attentive to the demands of the people and create policies that benefit them. This makes the government legitimate, as it is the people's own government."
      },
      {
        "level": 101,
        "difficulty": "Medium",
        "question": "How does democracy accommodate social diversity?",
        "options": [
          "By suppressing all differences.",
          "By imposing the will of the majority community on all others.",
          "By developing procedures to negotiate differences and include various social groups.",
          "By dividing the country into smaller nations."
        ],
        "correctAnswer": 3,
        "explanation": "No society can fully and permanently resolve conflicts among different groups. However, democracy is best suited to handle social differences, divisions, and conflicts. It provides a mechanism to negotiate and accommodate these differences. In a democracy, the majority always needs to work with the minority so that the government represents the general view. This ensures that different groups can coexist peacefully and have their voices heard, reducing the possibility of tensions turning violent."
      },
      {
        "level": 102,
        "difficulty": "Hard",
        "question": "What is the relationship between democracy and economic development?",
        "options": [
          "Democracy always guarantees higher economic growth than dictatorships.",
          "Dictatorships have a slightly better record of economic growth, but democracy is preferred for other reasons.",
          "Economic growth is faster in democracies.",
          "There is no relationship between the form of government and economic development."
        ],
        "correctAnswer": 2,
        "explanation": "Evidence shows that there is no guaranteed link between democracy and high economic growth. If we compare the economic growth rates of all dictatorships and all democracies between 1950 and 2000, dictatorships show a slightly higher rate of growth. However, this small difference is not a reason to reject democracy. Democracy is preferred because it offers other positive outcomes that economic growth alone cannot provide, such as political equality, individual dignity, and freedom."
      },
      {
        "level": 103,
        "difficulty": "Medium",
        "question": "How does democracy enhance the dignity and freedom of the citizen?",
        "options": [
          "By giving all power to the state.",
          "By treating all individuals with respect and providing them with equal rights and status.",
          "By restricting personal freedoms.",
          "By prioritizing the needs of the community over the individual."
        ],
        "correctAnswer": 2,
        "explanation": "Democracy stands much superior to any other form of government in promoting the dignity and freedom of the individual. The passion for respect and freedom are the basis of democracy. It achieves this by recognizing that all individuals are equal. This principle has been extended to grant equal status and opportunity to groups that were historically discriminated against, such as women and certain castes. Democratic principles provide the moral and legal force for their struggles for recognition and equality."
      },
      {
        "level": 104,
        "difficulty": "Easy",
        "question": "What is a 'foundational challenge' to democracy?",
        "options": [
          "The challenge of applying democratic principles to all regions and institutions.",
          "The challenge of making the transition to democracy from a non-democratic government.",
          "The challenge of strengthening democratic institutions and practices.",
          "The challenge of keeping military away from controlling government."
        ],
        "correctAnswer": 2,
        "explanation": "Challenges to democracy can be categorized into three types: \n1. **Foundational Challenge**: This is faced by countries that do not yet have a democratic government. It involves making the transition to democracy, bringing down the existing non-democratic regime, and instituting a sovereign and functional democratic state. \n2. **Challenge of Expansion**: Faced by established democracies, this involves applying basic democratic principles across all regions, social groups, and institutions. \n3. **Challenge of Deepening**: This is about strengthening the institutions and practices of democracy to increase citizen participation and control."
      },
      {
        "level": 105,
        "difficulty": "Medium",
        "question": "Which of these is an example of the 'challenge of expansion' of democracy?",
        "options": [
          "Holding the first multiparty elections in a country.",
          "Overthrowing a monarchy.",
          "Ensuring greater power to local governments and including women and minorities in decision-making.",
          "Reducing the influence of the rich and powerful in politics."
        ],
        "correctAnswer": 3,
        "explanation": "The 'challenge of expansion' is about making democracy more inclusive and widespread within a country that is already democratic. This involves applying the core principles of democracy to all spheres of life. Granting more power to local governments (decentralization), ensuring the inclusion of women and minority groups, and making sure that federal principles are fully practiced are all examples of expanding democracy's reach and impact."
      },
      {
        "level": 106,
        "difficulty": "Medium",
        "question": "Why can't democracy be reformed just through new laws?",
        "options": [
          "Because laws are not important for democracy.",
          "Because legal changes alone cannot overcome challenges to democracy; citizens must also act to bring about reform.",
          "Because only the judiciary can reform democracy.",
          "Because politicians are against all reforms."
        ],
        "correctAnswer": 2,
        "explanation": "While legal-constitutional changes have an important role to play in political reform, they cannot be the only solution. Laws can be counter-productive if they are not well-thought-out (e.g., banning politicians with more than two children might not be effective). The main agents of political reform are political parties, movements, and, most importantly, ordinary citizens. True democratic reform happens when citizens become more aware, participate in politics, and demand accountability from their leaders. Therefore, reform is a combination of legal changes and active democratic participation."
      },
      {
        "level": 107,
        "difficulty": "Hard",
        "question": "What is the most common form of democracy in the modern world?",
        "options": [
          "Direct Democracy",
          "Representative Democracy",
          "Monarchical Democracy",
          "Anarchist Democracy"
        ],
        "correctAnswer": 2,
        "explanation": "The most common form is **Representative Democracy**. In modern democracies with large populations, it is physically impossible for all citizens to sit together and make collective decisions (which would be a Direct Democracy). Instead, citizens elect representatives who make decisions on their behalf. These representatives form the legislature and the government. The key feature is that citizens exercise their power through these elected officials."
      },
      {
        "level": 108,
        "difficulty": "Easy",
        "question": "What is a coalition government?",
        "options": [
          "A government formed by a single party with a clear majority.",
          "A government formed by an alliance of two or more political parties.",
          "A government led by the military.",
          "A government where the monarch holds all the power."
        ],
        "correctAnswer": 2,
        "explanation": "A coalition government is formed when no single political party wins a clear majority of seats in an election. In such a situation, two or more parties come together to form a majority and run the government. This is a common feature in countries with a multi-party system, like India. The parties in the coalition usually negotiate a common minimum program to guide their governance."
      }
    ],
    11:[
      {
        "level": 1,
        "difficulty": "Easy",
        "question": "What is the primary function of a Constitution?",
        "options": [
          "To list the names of all citizens.",
          "To provide a set of basic rules that allow for minimal coordination amongst members of a society.",
          "To declare the official religion of the state.",
          "To detail the history of the nation."
        ],
        "correctAnswer": 2,
        "explanation": "A Constitution has several key functions. The first and most fundamental function is to provide a set of basic rules that all members of a society can agree upon. These rules create a framework for how the society will be governed, who will have power to make decisions, and what the limits on that power will be. This ensures a minimal degree of coordination and trust necessary for a society to function together."
      },
      {
        "level": 2,
        "difficulty": "Medium",
        "question": "Who was the Chairman of the Drafting Committee of the Indian Constituent Assembly?",
        "options": [
          "Jawaharlal Nehru",
          "Sardar Vallabhbhai Patel",
          "Dr. B.R. Ambedkar",
          "Dr. Rajendra Prasad"
        ],
        "correctAnswer": 3,
        "explanation": "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee, which was responsible for preparing the draft of the Constitution. Due to his pivotal role in drafting the text and guiding it through the Assembly's debates, he is widely regarded as the 'Father of the Indian Constitution'. Dr. Rajendra Prasad was the President of the Constituent Assembly, Jawaharlal Nehru moved the historic 'Objectives Resolution', and Sardar Patel was the chairman of key committees like the one on fundamental rights."
      },
      {
        "level": 3,
        "difficulty": "Easy",
        "question": "What are Fundamental Rights?",
        "options": [
          "Rights given by the government that can be taken away easily.",
          "Rights listed in the Constitution that are specially protected and guaranteed to all citizens.",
          "Guidelines for the government to make laws.",
          "Rights only available to government officials."
        ],
        "correctAnswer": 2,
        "explanation": "Fundamental Rights, enshrined in Part III of the Indian Constitution, are a set of basic human rights guaranteed to all citizens. They are considered 'fundamental' because they are essential for the intellectual, moral, and spiritual development of citizens. They are protected by the Constitution and are justiciable, meaning a citizen can go to the courts (Supreme Court or High Courts) if their Fundamental Rights are violated."
      },
      {
        "level": 4,
        "difficulty": "Medium",
        "question": "What are 'Directive Principles of State Policy' (DPSP)?",
        "options": [
          "They are legally enforceable rights of citizens.",
          "They are guidelines for the government to create a just society and are not legally enforceable.",
          "They are the powers of the President.",
          "They are restrictions on the powers of the government."
        ],
        "correctAnswer": 2,
        "explanation": "Directive Principles of State Policy, found in Part IV of the Constitution, are guidelines or instructions for the state (central and state governments) to follow while framing laws and policies. They aim to establish a social and economic democracy, creating a 'welfare state'. Unlike Fundamental Rights, DPSPs are **non-justiciable**, which means they cannot be enforced by the courts. However, they are considered fundamental in the governance of the country."
      },
      {
        "level": 5,
        "difficulty": "Hard",
        "question": "Which writ is issued by the court to an official asking them to perform a duty that they have failed or refused to perform?",
        "options": [
          "Habeas Corpus",
          "Mandamus",
          "Prohibition",
          "Quo Warranto"
        ],
        "correctAnswer": 2,
        "explanation": "The right to move the Supreme Court for the enforcement of Fundamental Rights is provided under Article 32. The court can issue several writs: \n- **Habeas Corpus** ('to have the body of'): Protects against illegal detention. \n- **Mandamus** ('we command'): Orders a public official or public body to perform their official duties which they have failed to do. \n- **Prohibition**: Issued by a higher court to a lower court to prevent it from exceeding its jurisdiction. \n- **Certiorari**: Issued by a higher court to quash an order already passed by a lower court. \n- **Quo Warranto** ('by what authority'): Restrains a person from holding a public office which he/she is not entitled to."
      },
      {
        "level": 6,
        "difficulty": "Medium",
        "question": "What is the 'First Past the Post' (FPTP) electoral system used in India's Lok Sabha elections?",
        "options": [
          "A system where parties get seats in proportion to the votes they get.",
          "A system where the country is divided into constituencies, and the candidate with the highest number of votes in a constituency wins.",
          "A system where voters rank candidates in order of preference.",
          "A system where only the President can be elected."
        ],
        "correctAnswer": 2,
        "explanation": "The First Past the Post (FPTP) system, also known as the plurality system, is used for elections to the Lok Sabha and State Legislative Assemblies in India. In this system: \n1. The entire country is divided into electoral districts or constituencies. \n2. Each constituency elects one representative. \n3. Voters vote for a candidate, not a party. \n4. The candidate who secures the highest number of votes in that constituency is declared the winner, even if they do not get an absolute majority (more than 50%) of the votes. This is different from Proportional Representation, where parties get seats based on their overall vote share."
      },
      {
        "level": 7,
        "difficulty": "Easy",
        "question": "Who is the head of the government in India?",
        "options": [
          "The President",
          "The Prime Minister",
          "The Chief Justice of India",
          "The Speaker of the Lok Sabha"
        ],
        "correctAnswer": 2,
        "explanation": "In India's parliamentary system, there is a distinction between the head of the state and the head of the government. The **President** is the formal or ceremonial Head of the State (nominal executive). The **Prime Minister** is the Head of the Government (real executive). The Prime Minister, along with the Council of Ministers, exercises the real executive power and is responsible for running the government."
      },
      {
        "level": 8,
        "difficulty": "Medium",
        "question": "What is a 'No-Confidence Motion'?",
        "options": [
          "A motion to praise the government's policies.",
          "A motion that, if passed by the Lok Sabha, forces the Council of Ministers to resign.",
          "A motion to amend the Constitution.",
          "A procedure for electing the President."
        ],
        "correctAnswer": 2,
        "explanation": "A 'No-Confidence Motion' is a key feature of a parliamentary system that ensures the executive is accountable to the legislature. According to Article 75 of the Constitution, the Council of Ministers is collectively responsible to the Lok Sabha. This means the ministry stays in office as long as it enjoys the confidence of a majority in the Lok Sabha. If a motion of no-confidence is moved and passed by a majority of members, the Prime Minister and the entire Council of Ministers must resign."
      },
      {
        "level": 9,
        "difficulty": "Easy",
        "question": "Which house of the Indian Parliament is a permanent body and cannot be dissolved?",
        "options": [
          "Lok Sabha (House of the People)",
          "Rajya Sabha (Council of States)",
          "Vidhan Sabha (Legislative Assembly)",
          "Both Lok Sabha and Rajya Sabha"
        ],
        "correctAnswer": 2,
        "explanation": "The Rajya Sabha is a permanent house and is not subject to dissolution. Its members are elected for a term of six years, and one-third of its members retire every two years. This ensures continuity. The Lok Sabha, on the other hand, has a fixed term of five years but can be dissolved earlier by the President on the advice of the Prime Minister."
      },
      {
        "level": 10,
        "difficulty": "Medium",
        "question": "What is a 'Money Bill', and which house has more power over it?",
        "options": [
          "A bill concerning any financial matter; Rajya Sabha has more power.",
          "A bill concerning constitutional amendments; both houses have equal power.",
          "A bill dealing with taxation or government expenditure; Lok Sabha has more power.",
          "A bill about creating a new state; Lok Sabha has more power."
        ],
        "correctAnswer": 3,
        "explanation": "A Money Bill is a bill that deals with financial matters like taxation, public expenditure, and borrowing by the government. The Constitution gives the Lok Sabha superior powers in financial matters. A Money Bill can only be introduced in the Lok Sabha. After it is passed by the Lok Sabha, it is sent to the Rajya Sabha, which can only make recommendations and must return the bill within 14 days. The Lok Sabha can either accept or reject the recommendations of the Rajya Sabha. In either case, the bill is considered passed."
      },
      {
        "level": 11,
        "difficulty": "Medium",
        "question": "What is the power of 'Judicial Review' of the Supreme Court?",
        "options": [
          "The power to review its own judgments.",
          "The power to declare any law or action of the legislature or executive as unconstitutional if it violates the Constitution.",
          "The power to advise the President on legal matters.",
          "The power to appoint other judges."
        ],
        "correctAnswer": 2,
        "explanation": "Judicial Review is the power of the judiciary (Supreme Court and High Courts) to examine the constitutionality of laws passed by the legislature and actions taken by the executive. If the judiciary finds that a law or an executive action is in conflict with the provisions of the Constitution, it can declare that law or action null and void. This power makes the judiciary the guardian of the Constitution and fundamental rights."
      },
      {
        "level": 12,
        "difficulty": "Hard",
        "question": "What does the 'Basic Structure Doctrine' of the Indian Constitution imply?",
        "options": [
          "The entire Constitution can be amended by Parliament.",
          "Only the Preamble of the Constitution cannot be amended.",
          "Parliament can amend any part of the Constitution, but it cannot change its 'basic structure'.",
          "The Constitution cannot be amended at all."
        ],
        "correctAnswer": 3,
        "explanation": "The Basic Structure Doctrine is a judicial principle, established by the Supreme Court in the landmark Kesavananda Bharati case (1973). It holds that while Parliament has the power to amend the Constitution (under Article 368), this power is not unlimited. Parliament cannot amend the Constitution in a way that alters its 'basic structure' or fundamental framework. Features considered part of the basic structure include supremacy of the Constitution, federalism, secularism, separation of powers, and judicial review."
      },
      {
        "level": 13,
        "difficulty": "Easy",
        "question": "What is Federalism?",
        "options": [
          "A system with only a central government.",
          "A system where the states are more powerful than the center.",
          "A system of government where power is divided between a central government and state governments.",
          "A form of monarchy."
        ],
        "correctAnswer": 3,
        "explanation": "Federalism is a system of government in which power is constitutionally divided between different levels of government, typically a central or national government and regional or state governments. Both levels of government have their own areas of jurisdiction and derive their authority directly from the Constitution. India is described as a 'Union of States' and has a federal structure with a strong central government."
      },
      {
        "level": 14,
        "difficulty": "Medium",
        "question": "Which constitutional amendments are related to strengthening Local Self-Government in India?",
        "options": [
          "42nd and 44th Amendments",
          "61st and 62nd Amendments",
          "73rd and 74th Amendments",
          "101st and 103rd Amendments"
        ],
        "correctAnswer": 3,
        "explanation": "The 73rd and 74th Constitutional Amendment Acts of 1992 were landmark steps towards decentralization and strengthening grassroots democracy. \n- The **73rd Amendment** gave constitutional status to Panchayati Raj Institutions (PRIs) as the third tier of government in rural areas. \n- The **74th Amendment** gave constitutional status to Urban Local Bodies (Municipalities) in urban areas. These amendments mandated regular elections, reservation of seats for SCs, STs, and women, and created State Finance Commissions to ensure funding."
      },
      {
        "level": 15,
        "difficulty": "Easy",
        "question": "Why is the Indian Constitution called a 'living document'?",
        "options": [
          "Because it is very long.",
          "Because it was written on living paper.",
          "Because it can be changed and modified according to the needs and aspirations of society through a process of amendment.",
          "Because it is kept in a special museum."
        ],
        "correctAnswer": 3,
        "explanation": "The Indian Constitution is called a 'living document' because it is not a static or unalterable text. It is dynamic and can adapt to changing circumstances. The framers of the Constitution provided a mechanism for amendment (Article 368) that is neither too rigid nor too flexible. This allows the Constitution to evolve over time, incorporate new ideas, and respond to the changing needs of society, ensuring its continued relevance."
      },
      {
        "level": 16,
        "difficulty": "Medium",
        "question": "What is the core philosophy of the Indian Constitution, as reflected in the Preamble?",
        "options": [
          "To establish a Hindu Rashtra.",
          "To create a society based on principles of liberty, equality, fraternity, and justice, within a sovereign, socialist, secular, democratic republic.",
          "To promote a capitalist economy above all else.",
          "To give supremacy to the Parliament."
        ],
        "correctAnswer": 2,
        "explanation": "The Preamble acts as the introduction and summary of the Constitution's philosophy. It declares India to be a **Sovereign, Socialist, Secular, and Democratic Republic**. It sets out the core objectives of the Constitution, which are to secure for all its citizens: **Justice** (social, economic, and political); **Liberty** (of thought, expression, belief, faith, and worship); **Equality** (of status and opportunity); and to promote **Fraternity** (assuring the dignity of the individual and the unity and integrity of the Nation)."
      },
      {
        "level": 17,
        "difficulty": "Easy",
        "question": "What is Political Theory?",
        "options": [
          "The study of politicians' biographies.",
          "The study of ideas and principles like freedom, equality, and justice that shape governments and social life.",
          "The process of winning elections.",
          "The history of political events."
        ],
        "correctAnswer": 2,
        "explanation": "Political Theory is a field of study that systematically thinks about the values that inform political life. It examines concepts such as freedom, equality, justice, rights, and democracy to understand their meaning and significance. It helps us analyze political practices, evaluate existing institutions like governments and laws, and consider how to create a better society and a more just political order."
      },
      {
        "level": 18,
        "difficulty": "Medium",
        "question": "What is the difference between 'Negative Liberty' and 'Positive Liberty'?",
        "options": [
          "Negative liberty is bad, and positive liberty is good.",
          "Negative liberty is the absence of external constraints, while positive liberty is the freedom to do something and fulfill one's potential.",
          "Negative liberty applies to states, while positive liberty applies to individuals.",
          "There is no difference between them."
        ],
        "correctAnswer": 2,
        "explanation": "This is a key distinction in political theory: \n- **Negative Liberty** is defined as the absence of external obstacles or constraints. It is about being free *from* interference by others. It emphasizes a sphere of non-interference where an individual can do whatever they want. For example, freedom of speech is a negative liberty as it means no one can stop you from expressing yourself. \n- **Positive Liberty** is about the capacity to act and realize one's potential. It is the freedom *to* be one's own master. It requires the presence of enabling conditions (like education, healthcare, and opportunities) provided by the state or society. For example, the right to education is a positive liberty as it enables an individual to develop their capabilities."
      },
      {
        "level": 19,
        "difficulty": "Medium",
        "question": "What does 'Equality of Opportunity' mean?",
        "options": [
          "Everyone should have the same income and wealth.",
          "All individuals should have an equal and fair chance to access education, employment, and public services, regardless of their background.",
          "Only some sections of society should be given opportunities.",
          "Equality is not an important value."
        ],
        "correctAnswer": 2,
        "explanation": "Equality of Opportunity is a principle that aims to create a level playing field for all individuals. It does not mean 'equality of outcome' (where everyone ends up with the same wealth or status). Instead, it means that social barriers like caste, race, gender, or religion should not prevent someone from accessing opportunities and developing their talents. To ensure true equality of opportunity, the state may need to provide special assistance (like reservations or scholarships) to those who have been historically disadvantaged."
      },
      {
        "level": 20,
        "difficulty": "Hard",
        "question": "What is John Rawls's concept of 'Veil of Ignorance'?",
        "options": [
          "A principle that justice should be blind.",
          "A hypothetical situation where individuals decide on the principles of justice for their society without knowing their own social position or status.",
          "A theory that ignorant people cannot make just decisions.",
          "A legal principle for witness protection."
        ],
        "correctAnswer": 2,
        "explanation": "John Rawls, a prominent political philosopher, proposed a thought experiment to arrive at fair principles of justice. He asked us to imagine ourselves behind a 'veil of ignorance'. In this original position, we do not know our own class, gender, race, talents, or beliefs. Since we don't know where we would end up in society, we would choose principles that are fair to everyone, especially the least advantaged. Rawls argues that from this position, we would choose a system that ensures equal basic liberties for all and permits social and economic inequalities only if they benefit the most disadvantaged members of society."
      },
      {
        "level": 21,
        "difficulty": "Easy",
        "question": "What is a 'Right'?",
        "options": [
          "Whatever a person wants to do.",
          "A privilege granted by a ruler.",
          "An entitlement or a justified claim, recognized by society and often protected by law, that is essential for a dignified life.",
          "A duty that a person must perform."
        ],
        "correctAnswer": 3,
        "explanation": "Rights are not just personal desires; they are justified claims. A right is an entitlement to do something or to be treated in a certain way. For a claim to become a right, it must be recognized by society as a reasonable claim that should be upheld. These rights are considered necessary for individuals to lead a life of dignity and respect and to develop their full potential. They often impose an obligation upon the state and others to act in a certain way."
      },
      {
        "level": 22,
        "difficulty": "Medium",
        "question": "What is the primary difference between the Indian and Western models of secularism?",
        "options": [
          "The Western model is pro-religion, while the Indian model is anti-religion.",
          "The Western model advocates for a strict separation ('wall') between state and religion, while the Indian model allows for 'principled intervention' by the state in religious affairs.",
          "The Indian model has an official state religion, while the Western model does not.",
          "There is no difference; both are identical."
        ],
        "correctAnswer": 2,
        "explanation": "This is a crucial distinction. The **Western model of secularism** (often associated with the USA) emphasizes a strict mutual exclusion of state and religion. There is a metaphorical 'wall of separation' to protect both religion from the state and the state from religion. The state cannot aid any religious institution. The **Indian model of secularism** is different. It does not require a strict separation. The state maintains a 'principled distance' from all religions. It can intervene in religious affairs to stop social evils (like banning untouchability or allowing temple entry for all) and can provide financial aid to educational institutions run by religious communities, provided it does so non-preferentially. The goal is not mutual exclusion but equal respect and treatment for all religions."
      },
      {
        "level": 23,
        "difficulty": "Easy",
        "question": "What is Nationalism?",
        "options": [
          "A feeling of superiority over other countries.",
          "A set of political beliefs and sentiments that give importance to the concept of a 'nation' as a central unit of human social life.",
          "A system of international governance.",
          "The study of different nations' economies."
        ],
        "correctAnswer": 2,
        "explanation": "Nationalism is a powerful political idea centered on the 'nation'. A nation is a collective entity of people who feel they are bound together by shared characteristics, such as a common language, culture, history, or a desire to have their own independent political state. Nationalism inspires a sense of loyalty and devotion to one's nation and has been a driving force behind the formation of modern nation-states, including independence movements against colonial rule."
      },
      {
        "level": 24,
        "difficulty": "Medium",
        "question": "What is meant by 'structural violence' in the context of peace studies?",
        "options": [
          "Violence caused by the collapse of buildings.",
          "Direct physical violence like war or riots.",
          "Harm and suffering caused by unjust social, economic, and political structures, such as poverty, discrimination, and inequality.",
          "Violence depicted in media."
        ],
        "correctAnswer": 3,
        "explanation": "The concept of peace is often defined negatively as the 'absence of war'. However, peace studies scholars argue for a more positive and comprehensive definition of peace. This involves tackling 'structural violence'. Structural violence refers to social structures or institutions that harm people by preventing them from meeting their basic needs. It is an indirect form of violence embedded in the system itself. Examples include extreme poverty, systemic racism, sexism, and lack of access to healthcare and education. Achieving true peace requires not just ending wars but also dismantling these unjust structures."
      },
      {
        "level": 25,
        "difficulty": "Medium",
        "question": "What is the main critique of the dominant 'development' model?",
        "options": [
          "It has been too slow.",
          "It has focused only on agricultural growth.",
          "It has achieved high economic growth at a massive human and environmental cost.",
          "It is not supported by international organizations."
        ],
        "correctAnswer": 3,
        "explanation": "The dominant model of development, which has been pursued by most countries, has focused primarily on achieving high rates of economic growth (measured by GDP). The critique of this model is that it has often led to significant negative consequences. These include high **environmental costs** (pollution, deforestation, climate change) and high **human costs** (displacement of communities for large projects, growing inequality, and erosion of traditional lifestyles). This has led to calls for alternative models like 'sustainable development' and the 'human development' approach, which prioritize environmental sustainability and human well-being over mere economic growth."
      },
            {
        "level": 26,
        "difficulty": "Easy",
        "question": "What is Political Theory?",
        "options": [
          "Study of politics in newspapers",
          "Systematic study of political phenomena, concepts, and ideas",
          "Biography of political leaders",
          "History of political parties"
        ],
        "correctAnswer": 2,
        "explanation": "Political Theory is the systematic study of political phenomena, concepts, ideas, and institutions. It seeks to understand the nature of politics, power, authority, justice, rights, and the state. It combines descriptive analysis (what is) with normative evaluation (what ought to be) and includes both empirical study and philosophical reflection on political life."
      },
      {
        "level": 27,
        "difficulty": "Medium",
        "question": "Why should we study Political Theory?",
        "options": [
          "To become politicians only",
          "To understand political phenomena, develop critical thinking, and engage meaningfully as citizens",
          "To memorize facts about government",
          "To criticize all governments"
        ],
        "correctAnswer": 2,
        "explanation": "We study Political Theory to: (1) Understand complex political phenomena and events, (2) Develop critical thinking about politics and society, (3) Examine our own beliefs and assumptions, (4) Learn about concepts like justice, equality, freedom, (5) Engage meaningfully as informed citizens, (6) Understand different political systems and their merits, (7) Analyze contemporary political problems, (8) Develop capacity for independent political judgment."
      },
      {
        "level": 28,
        "difficulty": "Easy",
        "question": "What are the key features of Political Theory?",
        "options": [
          "Only describes governments",
          "Systematic, analytical, both descriptive and normative, deals with political concepts",
          "Only historical study",
          "Only philosophical speculation"
        ],
        "correctAnswer": 2,
        "explanation": "Key features of Political Theory: (1) Systematic and analytical approach to political phenomena, (2) Both descriptive (what is) and normative (what ought to be), (3) Deals with fundamental political concepts like state, power, authority, (4) Combines empirical observation with philosophical reflection, (5) Interdisciplinary - draws from history, philosophy, sociology, (6) Universal and particular - general principles applied to specific contexts."
      },
      {
        "level": 29,
        "difficulty": "Medium",
        "question": "What is the relationship between Political Theory and other disciplines?",
        "options": [
          "Political Theory is completely independent",
          "It draws insights from history, philosophy, sociology, economics, and psychology",
          "It only relates to law",
          "It has no relationship with other subjects"
        ],
        "correctAnswer": 2,
        "explanation": "Political Theory's interdisciplinary nature: (1) History - provides context and evolution of political ideas, (2) Philosophy - ethical foundations and logical reasoning, (3) Sociology - understanding society and social relations, (4) Economics - material basis of political arrangements, (5) Psychology - individual behavior and motivation, (6) Law - legal frameworks and institutions, (7) Anthropology - cultural dimensions of politics. This integration provides comprehensive understanding of political phenomena."
      },
      {
        "level": 30,
        "difficulty": "Easy",
        "question": "What is freedom in political theory?",
        "options": [
          "Doing whatever one wants without any restrictions",
          "Absence of constraints that allows individuals to realize their potential",
          "Only political rights",
          "Freedom from government only"
        ],
        "correctAnswer": 2,
        "explanation": "Freedom in political theory means the absence of constraints that prevent individuals from realizing their potential and living fulfilling lives. It's not unlimited license but involves: (1) Absence of arbitrary restrictions, (2) Presence of conditions necessary for human development, (3) Balance between individual liberty and social responsibility, (4) Both negative freedom (freedom from) and positive freedom (freedom to), (5) Recognition that individual freedom exists within social relationships."
      },
      {
        "level": 31,
        "difficulty": "Medium",
        "question": "What is the difference between negative and positive freedom?",
        "options": [
          "No difference exists",
          "Negative freedom is 'freedom from' constraints; positive freedom is 'freedom to' realize potential",
          "Negative freedom is bad; positive freedom is good",
          "Only positive freedom is real freedom"
        ],
        "correctAnswer": 2,
        "explanation": "Negative vs Positive Freedom: NEGATIVE FREEDOM (Isaiah Berlin): Freedom FROM external constraints, interference, coercion. Examples: freedom from censorship, arbitrary arrest. POSITIVE FREEDOM: Freedom TO realize one's potential, self-realization, capacity to act. Examples: education enabling career choices, economic resources enabling political participation. Both are necessary - negative freedom creates space for choice, positive freedom provides capacity to use that space meaningfully."
      },
      {
        "level": 32,
        "difficulty": "Easy",
        "question": "Why are constraints on freedom sometimes justified?",
        "options": [
          "Constraints are never justified",
          "To prevent harm to others, maintain social order, and protect everyone's freedom",
          "To help government control people",
          "Because freedom is not important"
        ],
        "correctAnswer": 2,
        "explanation": "Justified constraints on freedom: (1) Harm Principle (J.S. Mill) - prevent harm to others, (2) Protect others' equal freedom - my freedom shouldn't violate yours, (3) Maintain social order necessary for everyone's freedom, (4) Protect vulnerable groups from exploitation, (5) Ensure fair distribution of opportunities, (6) Emergency situations threatening society. However, constraints must be: reasonable, proportionate, temporary where needed, and subject to democratic scrutiny."
      },
      {
        "level": 33,
        "difficulty": "Medium",
        "question": "How does the harm principle work?",
        "options": [
          "Government can restrict anything it considers harmful",
          "Freedom can be restricted only when actions cause definite harm to specific others",
          "Only physical harm counts",
          "Harm principle doesn't apply to freedom"
        ],
        "correctAnswer": 2,
        "explanation": "J.S. Mill's Harm Principle: Individual freedom can be restricted only when actions cause definite harm to specific others. Key aspects: (1) Must be actual harm, not just offense or discomfort, (2) Harm to specific individuals, not society in general, (3) Direct causal connection between action and harm, (4) Self-regarding actions (affecting only oneself) should not be restricted, (5) Other-regarding actions can be regulated if harmful. Limitations: difficulty in defining 'harm', distinguishing self/other-regarding actions, cultural variations in understanding harm."
      },
      {
        "level": 34,
        "difficulty": "Easy",
        "question": "What is equality in political theory?",
        "options": [
          "Everyone should be exactly identical",
          "Equal treatment, equal opportunities, and recognition of human dignity",
          "Only economic equality matters",
          "Equality is impossible to achieve"
        ],
        "correctAnswer": 2,
        "explanation": "Equality means: (1) Equal worth and dignity of all human beings, (2) Equal treatment under law regardless of background, (3) Equal opportunities to develop one's potential, (4) Fair distribution of benefits and burdens in society, (5) No arbitrary discrimination based on irrelevant characteristics. Equality doesn't mean identical treatment but rather appropriate treatment that recognizes both common humanity and legitimate differences."
      },
      {
        "level": 35,
        "difficulty": "Medium",
        "question": "What are the different dimensions of equality?",
        "options": [
          "Only one type of equality exists",
          "Political, economic, social, and legal equality with complex inter-relationships",
          "Only economic equality is real",
          "Only legal equality matters"
        ],
        "correctAnswer": 2,
        "explanation": "Dimensions of Equality: (1) LEGAL EQUALITY - equal treatment under law, same legal rights and procedures, (2) POLITICAL EQUALITY - equal voting rights, equal opportunity to participate in politics, (3) SOCIAL EQUALITY - equal status in society, no discrimination based on caste/race/gender, (4) ECONOMIC EQUALITY - fair distribution of economic resources and opportunities. These dimensions are interconnected - lack of economic equality can undermine political equality, social discrimination affects legal equality."
      },
      {
        "level": 36,
        "difficulty": "Easy",
        "question": "What is the difference between formal and substantive equality?",
        "options": [
          "They are the same thing",
          "Formal equality focuses on equal treatment; substantive equality on equal outcomes",
          "Only formal equality is achievable",
          "Substantive equality is not important"
        ],
        "correctAnswer": 2,
        "explanation": "FORMAL EQUALITY: Equal treatment in rules and procedures, same laws apply to all, no discrimination in legal/formal processes. Example: everyone has right to education. SUBSTANTIVE EQUALITY: Focus on actual outcomes and real equality, recognizes that identical treatment may not produce equal results due to different starting points. Example: providing additional support to disadvantaged groups to achieve actual educational equality. Both are necessary - formal equality ensures fair process, substantive equality ensures fair outcomes."
      },
      {
        "level": 37,
        "difficulty": "Medium",
        "question": "How do we reconcile equality with individual differences?",
        "options": [
          "By ignoring all differences",
          "Through relevant differences principle - treating different situations differently when relevant",
          "By treating everyone identically always",
          "Differences cannot be reconciled with equality"
        ],
        "correctAnswer": 2,
        "explanation": "Reconciling equality with differences: (1) RELEVANT DIFFERENCES PRINCIPLE - treat equals equally, unequals unequally in relevant respects, (2) Distinguish between relevant and irrelevant differences for specific contexts, (3) AFFIRMATIVE ACTION - additional support for disadvantaged groups to achieve substantive equality, (4) PROPORTIONAL TREATMENT - response proportionate to difference, (5) Recognition that equality requires considering context and circumstances, not mechanical identical treatment."
      },
      {
        "level": 38,
        "difficulty": "Easy",
        "question": "What is social justice?",
        "options": [
          "Justice only in courts",
          "Fair distribution of benefits and burdens in society according to accepted principles",
          "Punishment for criminals",
          "Government welfare schemes"
        ],
        "correctAnswer": 2,
        "explanation": "Social Justice involves: (1) Fair distribution of resources, opportunities, and burdens in society, (2) Recognition of equal worth and dignity of all people, (3) Ensuring basic needs are met for everyone, (4) Equal opportunities for development and participation, (5) Addressing structural inequalities and discrimination, (6) Both distributive justice (fair sharing) and corrective justice (addressing past wrongs), (7) Balance between individual rights and collective welfare."
      },
      {
        "level": 39,
        "difficulty": "Medium",
        "question": "What are the different principles of distributive justice?",
        "options": [
          "Only one principle exists",
          "To each according to need, merit, contribution, or equally - context determines appropriate principle",
          "Only merit-based distribution is just",
          "Distribution principles are not important"
        ],
        "correctAnswer": 2,
        "explanation": "Principles of Distributive Justice: (1) TO EACH EQUALLY - equal distribution regardless of differences, (2) TO EACH ACCORDING TO NEED - based on what people require for basic dignity, (3) TO EACH ACCORDING TO MERIT - based on talent, effort, achievement, (4) TO EACH ACCORDING TO CONTRIBUTION - based on what one contributes to society, (5) TO EACH ACCORDING TO ENTITLEMENT - based on existing rights and legitimate expectations. Different contexts may require different principles - basic needs (equality), jobs (merit), emergency aid (need)."
      },
      {
        "level": 40,
        "difficulty": "Easy",
        "question": "What is John Rawls' theory of justice?",
        "options": [
          "Justice based on tradition only",
          "Justice as fairness decided from original position behind veil of ignorance",
          "Justice based on strongest person's wishes",
          "Justice is not possible"
        ],
        "correctAnswer": 2,
        "explanation": "John Rawls' Theory of Justice: (1) JUSTICE AS FAIRNESS - society should be organized fairly, (2) ORIGINAL POSITION - hypothetical situation where people choose principles of justice, (3) VEIL OF IGNORANCE - people don't know their position, talents, or circumstances when choosing, (4) This ensures impartial choice benefiting everyone, (5) Two principles emerge: equal basic liberties for all, social/economic inequalities only if they benefit least advantaged (difference principle)."
      },
      {
        "level": 41,
        "difficulty": "Medium",
        "question": "What are Rawls' two principles of justice?",
        "options": [
          "Freedom and equality only",
          "Equal basic liberties; fair equality of opportunity with difference principle for inequalities",
          "Merit and contribution",
          "Need and desert"
        ],
        "correctAnswer": 2,
        "explanation": "Rawls' Two Principles: (1) FIRST PRINCIPLE - Each person has equal right to most extensive basic liberties compatible with similar liberties for all (priority to liberty), (2) SECOND PRINCIPLE - Social and economic inequalities must satisfy two conditions: (a) Fair equality of opportunity - positions open to all under fair conditions, (b) Difference principle - inequalities permitted only if they benefit worst-off members of society. First principle has lexical priority over second."
      },
      {
        "level": 42,
        "difficulty": "Easy",
        "question": "What are rights?",
        "options": [
          "Whatever government gives to people",
          "Justified claims that individuals have against others and society",
          "Only legal entitlements",
          "Privileges for rich people"
        ],
        "correctAnswer": 2,
        "explanation": "Rights are justified claims that individuals can make against others (individuals, groups, state) based on moral, legal, or political grounds. Key features: (1) Claims backed by justification, not mere desires, (2) Create corresponding duties in others, (3) Can be moral (based on principles) or legal (backed by law), (4) Protect important human interests and dignity, (5) Can be claimed and enforced, (6) Universal in scope but specific in application."
      },
      {
        "level": 43,
        "difficulty": "Medium",
        "question": "What is the difference between legal and moral rights?",
        "options": [
          "No difference exists between them",
          "Legal rights are enforced by law; moral rights are based on ethical principles",
          "Only legal rights are real rights",
          "Moral rights are more important than legal rights"
        ],
        "correctAnswer": 2,
        "explanation": "LEGAL RIGHTS: (1) Created and enforced by legal system, (2) Backed by state power and sanctions, (3) Specific to particular legal systems, (4) Can be enforced through courts, (5) May not always be morally justified. MORAL RIGHTS: (1) Based on ethical principles and human dignity, (2) Universal claims about how people should be treated, (3) Not always legally recognized, (4) Appeal to conscience and moral reasoning, (5) Provide standards for evaluating legal systems. Ideally, legal rights should reflect moral rights."
      },
      {
        "level": 44,
        "difficulty": "Easy",
        "question": "What are the different kinds of rights?",
        "options": [
          "Only political rights exist",
          "Civil, political, economic, social, and cultural rights",
          "Only economic rights matter",
          "Rights cannot be classified"
        ],
        "correctAnswer": 2,
        "explanation": "Classification of Rights: (1) CIVIL RIGHTS - life, liberty, equality, freedom of speech, religion, (2) POLITICAL RIGHTS - vote, contest elections, form parties, participate in governance, (3) ECONOMIC RIGHTS - work, fair wages, property, social security, (4) SOCIAL AND CULTURAL RIGHTS - education, health, participate in cultural life, (5) These rights are interdependent - civil rights enable political participation, economic rights provide foundation for other rights, social rights ensure human development."
      },
      {
        "level": 45,
        "difficulty": "Medium",
        "question": "How are rights justified?",
        "options": [
          "Rights need no justification",
          "Through human dignity, consequences for human flourishing, and democratic participation",
          "Only by government decision",
          "By tradition only"
        ],
        "correctAnswer": 2,
        "explanation": "Rights Justification: (1) HUMAN DIGNITY - all humans have inherent worth deserving respect and protection, (2) HUMAN FLOURISHING - rights protect conditions necessary for people to live fulfilling lives, (3) DEMOCRATIC PARTICIPATION - rights enable meaningful participation in democratic governance, (4) CONSEQUENTIALIST - rights produce better outcomes for society, (5) SOCIAL CONTRACT - rights are terms of agreement for living together in society. Multiple justifications often overlap and reinforce each other."
      },
      {
        "level": 46,
        "difficulty": "Easy",
        "question": "What is citizenship?",
        "options": [
          "Just living in a country",
          "Full membership in a political community with rights and responsibilities",
          "Having a passport only",
          "Paying taxes"
        ],
        "correctAnswer": 2,
        "explanation": "Citizenship means full membership in a political community involving: (1) Legal status with rights and obligations, (2) Political participation in governance, (3) Identity and belonging to political community, (4) Reciprocal relationship between individual and state, (5) Both benefits (protection, services) and duties (following laws, civic participation), (6) Usually involves birth, naturalization, or other legal processes for acquisition."
      },
      {
        "level": 47,
        "difficulty": "Medium",
        "question": "What are the different approaches to citizenship?",
        "options": [
          "Only one approach to citizenship exists",
          "Liberal (rights-focused), republican (participation-focused), and communitarian (community-focused) approaches",
          "Only legal approach matters",
          "All approaches are the same"
        ],
        "correctAnswer": 2,
        "explanation": "Approaches to Citizenship: (1) LIBERAL - emphasizes individual rights, freedoms, and protection from state interference; citizenship as legal status, (2) REPUBLICAN/CIVIC - emphasizes active participation in public life, civic virtue, and common good; citizenship as practice, (3) COMMUNITARIAN - emphasizes belonging to community, shared values, and social bonds; citizenship as identity. Each approach highlights different aspects - rights, participation, or belonging - and they often complement each other in practice."
      },
      {
        "level": 48,
        "difficulty": "Easy",
        "question": "What are the rights of citizens?",
        "options": [
          "Citizens have no special rights",
          "Civil, political, social, and economic rights that enable full participation in society",
          "Only voting rights",
          "Rights decided by government"
        ],
        "correctAnswer": 2,
        "explanation": "Citizens' Rights: (1) CIVIL RIGHTS - life, liberty, equality, freedom of speech, religion, movement, (2) POLITICAL RIGHTS - vote, contest elections, form associations, petition government, (3) SOCIAL RIGHTS - education, healthcare, social security, (4) ECONOMIC RIGHTS - work, fair wages, property, (5) CULTURAL RIGHTS - participate in cultural life, preserve identity. These rights enable citizens to live with dignity, participate meaningfully in democracy, and contribute to society."
      },
      {
        "level": 49,
        "difficulty": "Medium",
        "question": "What are the duties and responsibilities of citizens?",
        "options": [
          "Citizens have no duties",
          "Legal obligations and moral responsibilities to community and fellow citizens",
          "Only paying taxes",
          "Only following orders"
        ],
        "correctAnswer": 2,
        "explanation": "Citizens' Duties: (1) LEGAL DUTIES - obey laws, pay taxes, serve on juries, military service where required, (2) CIVIC RESPONSIBILITIES - vote, stay informed, participate in public life, respect others' rights, (3) MORAL OBLIGATIONS - contribute to common good, help fellow citizens, protect environment, (4) DEMOCRATIC DUTIES - tolerate different viewpoints, engage in reasoned debate, support democratic institutions. Rights and duties are reciprocal - rights create duties in others, enjoying rights creates responsibility to respect others' rights."
      },
      {
        "level": 50,
        "difficulty": "Easy",
        "question": "How does one acquire citizenship?",
        "options": [
          "Citizenship cannot be acquired",
          "Through birth (jus soli/jus sanguinis), naturalization, marriage, or other legal processes",
          "Only by birth",
          "By government appointment only"
        ],
        "correctAnswer": 2,
        "explanation": "Acquisition of Citizenship: (1) JUS SOLI (right of soil) - citizenship by birth in country's territory, (2) JUS SANGUINIS (right of blood) - citizenship through parents' citizenship, (3) NATURALIZATION - legal process for foreigners to acquire citizenship after meeting requirements (residence, language, knowledge tests), (4) MARRIAGE - some countries grant citizenship through marriage to citizen, (5) ADOPTION - children adopted by citizens, (6) SPECIAL PROVISIONS - for refugees, stateless persons, or those with historical connections."
      },
      {
        "level": 51,
        "difficulty": "Medium",
        "question": "What are the challenges to citizenship in the contemporary world?",
        "options": [
          "No challenges exist",
          "Migration, multiculturalism, globalization, and declining civic participation",
          "Only economic challenges",
          "Only political challenges"
        ],
        "correctAnswer": 2,
        "explanation": "Contemporary Challenges: (1) MIGRATION - large population movements create questions about inclusion/exclusion, dual citizenship, (2) MULTICULTURALISM - diverse communities with different values challenge unified citizenship, (3) GLOBALIZATION - weakens national boundaries, creates global citizenship claims, (4) DECLINING PARTICIPATION - voter apathy, reduced civic engagement, (5) INEQUALITY - economic disparities affect meaningful citizenship, (6) TECHNOLOGY - digital divide, online participation vs traditional civic engagement, (7) STATELESSNESS - millions lack any citizenship."
      },
      {
        "level": 52,
        "difficulty": "Easy",
        "question": "What is nationalism?",
        "options": [
          "Hatred of other countries",
          "Ideology emphasizing loyalty and devotion to one's nation",
          "Only government patriotism",
          "Military aggression"
        ],
        "correctAnswer": 2,
        "explanation": "Nationalism is an ideology that emphasizes: (1) Loyalty and devotion to one's nation, (2) Belief that nation is the primary source of political legitimacy, (3) Desire for national unity and independence, (4) Shared identity based on common culture, history, language, or territory, (5) Priority of national interests, (6) Emotional attachment to national community. Can be civic (based on shared political values) or ethnic (based on shared ancestry/culture)."
      },
      {
        "level": 53,
        "difficulty": "Medium",
        "question": "What are the different types of nationalism?",
        "options": [
          "Only one type of nationalism exists",
          "Civic nationalism (based on shared political values) and ethnic nationalism (based on shared ancestry/culture)",
          "Only ethnic nationalism is real",
          "All nationalism is the same"
        ],
        "correctAnswer": 2,
        "explanation": "Types of Nationalism: (1) CIVIC NATIONALISM - based on shared political values, citizenship, and commitment to democratic institutions; inclusive, voluntary membership, (2) ETHNIC NATIONALISM - based on shared ancestry, language, culture, religion; exclusive, often involuntary membership based on birth, (3) LIBERAL NATIONALISM - compatible with individual rights and democratic values, (4) CULTURAL NATIONALISM - emphasizes preserving and promoting national culture, (5) POLITICAL NATIONALISM - focuses on self-determination and sovereignty. Civic nationalism is generally more inclusive and democratic."
      },
      {
        "level": 54,
        "difficulty": "Easy",
        "question": "How did nationalism emerge in Europe?",
        "options": [
          "Nationalism always existed",
          "Through French Revolution, Romanticism, and opposition to foreign rule",
          "By government decree only",
          "Through economic development only"
        ],
        "correctAnswer": 2,
        "explanation": "Emergence of European Nationalism: (1) FRENCH REVOLUTION (1789) - introduced popular sovereignty, 'nation in arms' concept, (2) ROMANTICISM - emphasized folk culture, language, and historical uniqueness, (3) REACTION TO FOREIGN RULE - opposition to Napoleon's empire, Austrian/Ottoman rule, (4) GERMAN AND ITALIAN UNIFICATION - movements for national unity, (5) PRINT CAPITALISM - newspapers, books created national consciousness, (6) EDUCATION - standardized languages and national histories, (7) ECONOMIC INTEGRATION - created national markets and identities."
      },
      {
        "level": 55,
        "difficulty": "Medium",
        "question": "What was the impact of nationalism on European politics?",
        "options": [
          "Nationalism had no political impact",
          "Led to unification movements, democratic revolutions, and redrawing of political boundaries",
          "Only created problems",
          "Only helped monarchies"
        ],
        "correctAnswer": 2,
        "explanation": "Impact on European Politics: (1) UNIFICATION MOVEMENTS - German and Italian unification, creation of new nation-states, (2) DEMOCRATIC REVOLUTIONS - 1848 revolutions combining national and democratic demands, (3) DISSOLUTION OF EMPIRES - Ottoman, Austrian, Russian empires weakened by national movements, (4) REDRAWING BOUNDARIES - new states based on national principles, (5) DEMOCRATIC LEGITIMACY - governments justified by popular will, not divine right, (6) MINORITY PROBLEMS - created new minorities within nation-states, (7) INTERNATIONAL CONFLICTS - competing national claims led to tensions and wars."
      },
      {
        "level": 56,
        "difficulty": "Easy",
        "question": "How did nationalism develop in the colonies?",
        "options": [
          "Colonies had no nationalism",
          "Anti-colonial nationalism emerged through resistance to foreign rule and desire for self-determination",
          "Only copied European nationalism",
          "Developed only after independence"
        ],
        "correctAnswer": 2,
        "explanation": "Colonial Nationalism: (1) ANTI-COLONIAL RESISTANCE - reaction against foreign domination and exploitation, (2) CULTURAL REVIVAL - rediscovering pre-colonial history, traditions, and values, (3) MODERNIZING NATIONALISM - adopting Western ideas of nation-state while asserting distinctiveness, (4) INCLUSIVE VISION - often more inclusive than ethnic nationalism, uniting diverse groups against colonialism, (5) LIBERATION MOVEMENTS - organized struggles for independence, (6) INTELLECTUAL LEADERSHIP - educated elites articulating nationalist ideology, (7) MASS MOBILIZATION - extending beyond elites to popular movements."
      },
      {
        "level": 57,
        "difficulty": "Medium",
        "question": "What are the positive and negative aspects of nationalism?",
        "options": [
          "Nationalism is only positive",
          "Positive: unity, self-determination, cultural preservation; Negative: exclusion, conflict, extremism",
          "Nationalism is only negative",
          "Nationalism has no clear effects"
        ],
        "correctAnswer": 2,
        "explanation": "POSITIVE ASPECTS: (1) Promotes unity and solidarity among people, (2) Basis for self-determination and democratic governance, (3) Preserves cultural heritage and diversity, (4) Motivates sacrifice for common good, (5) Provides identity and belonging. NEGATIVE ASPECTS: (1) Can exclude minorities and outsiders, (2) Leads to conflicts with other nations, (3) Can become extremist and intolerant, (4) May suppress internal diversity, (5) Used to justify aggression and war, (6) Can conflict with universal human rights. The key is developing inclusive, civic nationalism while avoiding extremist, ethnic nationalism."
      },
      {
        "level": 58,
        "difficulty": "Easy",
        "question": "What is secularism?",
        "options": [
          "Hatred of all religions",
          "Principle of separation between religious and political authority",
          "Government control of religion",
          "Abolition of all religions"
        ],
        "correctAnswer": 2,
        "explanation": "Secularism is the principle that religious and political authority should be separate. Key aspects: (1) Government neutrality toward different religions, (2) No official state religion, (3) Protection of religious freedom for all, (4) Public policy based on rational considerations, not religious doctrine, (5) Equal treatment of all religious and non-religious citizens, (6) Religious groups free to practice but don't control state power."
      },
      {
        "level": 59,
        "difficulty": "Medium",
        "question": "What are the different models of secularism?",
        "options": [
          "Only one model of secularism exists",
          "Strict separation (French), accommodation (American), and principled distance (Indian) models",
          "All models are identical",
          "Secularism cannot have different models"
        ],
        "correctAnswer": 2,
        "explanation": "Models of Secularism: (1) STRICT SEPARATION (French Laicité) - complete separation, religion confined to private sphere, state actively secular, (2) ACCOMMODATION (American) - separation with accommodation, 'wall of separation' but religion has public role, (3) PRINCIPLED DISTANCE (Indian) - state maintains distance from religion while intervening for reform and equality, (4) ESTABLISHED CHURCH (British) - official church but religious freedom protected. Each model reflects different historical experiences and constitutional traditions."
      },
      {
        "level": 60,
        "difficulty": "Easy",
        "question": "Why is secularism important in diverse societies?",
        "options": [
          "Secularism is not important",
          "To ensure religious freedom, prevent religious conflicts, and maintain equality among different faith communities",
          "To promote one religion",
          "To eliminate all religions"
        ],
        "correctAnswer": 2,
        "explanation": "Importance in Diverse Societies: (1) RELIGIOUS FREEDOM - protects right to practice, change, or reject religion, (2) PREVENTS RELIGIOUS CONFLICTS - reduces tensions between different communities, (3) EQUALITY - ensures equal treatment regardless of religious belief, (4) DEMOCRATIC GOVERNANCE - public decisions based on reason and debate, not religious authority, (5) PROTECTS MINORITIES - prevents majoritarian religious domination, (6) SOCIAL HARMONY - enables cooperation across religious lines, (7) INDIVIDUAL AUTONOMY - allows personal choice in religious matters."
      },
      {
        "level": 61,
        "difficulty": "Medium",
        "question": "What are the challenges to secularism?",
        "options": [
          "Secularism faces no challenges",
          "Religious fundamentalism, political manipulation of religion, and cultural conflicts over secular values",
          "Only economic challenges",
          "Only legal challenges"
        ],
        "correctAnswer": 2,
        "explanation": "Challenges to Secularism: (1) RELIGIOUS FUNDAMENTALISM - movements rejecting separation of religion and politics, (2) POLITICAL MANIPULATION - politicians using religious appeals for electoral gain, (3) CULTURAL CONFLICTS - tensions between religious traditions and secular values, (4) MAJORITY DOMINANCE - religious majorities imposing their values, (5) MINORITY EXTREMISM - some groups rejecting secular accommodation, (6) GLOBALIZATION - transnational religious movements, (7) IDENTITY POLITICS - religion becoming basis for political mobilization, (8) INSTITUTIONAL WEAKNESS - inability to maintain secular principles in practice."
      },
      {
        "level": 62,
        "difficulty": "Easy",
        "question": "What is the state?",
        "options": [
          "Just the government buildings",
          "Political organization with sovereignty over defined territory and population",
          "Only the police and army",
          "Collection of laws"
        ],
        "correctAnswer": 2,
        "explanation": "The State is a political organization characterized by: (1) DEFINED TERRITORY - specific geographical boundaries, (2) POPULATION - people living within those boundaries, (3) GOVERNMENT - institutions that make and implement decisions, (4) SOVEREIGNTY - supreme authority within territory and independence from external control, (5) MONOPOLY OF LEGITIMATE FORCE - exclusive right to use coercion, (6) LEGAL SYSTEM - framework of laws and institutions. The state is broader than government - government changes, state continues."
      },
       {
        "level": 63,
        "difficulty": "Medium",
        "question": "What are the essential elements of a state?",
        "options": [
          "Only government is needed",
          "Territory, population, government, and sovereignty - all four are essential",
          "Only laws and police",
          "Territory and population only"
        ],
        "correctAnswer": 2,
        "explanation": "Four Essential Elements: (1) TERRITORY - defined geographical area with recognized boundaries, provides physical basis for state authority, (2) POPULATION - people living within territory who are subject to state authority, (3) GOVERNMENT - institutional machinery for making and implementing collective decisions, (4) SOVEREIGNTY - supreme authority within territory and independence in external relations. All four elements must be present - without any one, political organization cannot be considered a state."
      },
      {
        "level": 64,
        "difficulty": "Easy",
        "question": "How did the modern state emerge?",
        "options": [
          "States always existed in current form",
          "Through historical process involving end of feudalism, wars, and centralization of power",
          "By international agreement only",
          "States emerged suddenly"
        ],
        "correctAnswer": 2,
        "explanation": "Emergence of Modern State: (1) DECLINE OF FEUDALISM - end of fragmented medieval authority, (2) CENTRALIZATION - monarchs consolidated power from feudal lords, (3) WARS AND MILITARY - need for standing armies and taxation, (4) BUREAUCRACY - professional administration replacing personal rule, (5) TERRITORY - defined borders replacing overlapping jurisdictions, (6) WESTPHALIAN SYSTEM (1648) - recognition of sovereign equality of states, (7) CAPITALISM - economic changes requiring unified legal and administrative systems."
      },
      {
        "level": 65,
        "difficulty": "Medium",
        "question": "What are the different theories about the origin of the state?",
        "options": [
          "Only one theory about state origin",
          "Divine theory, social contract theory, evolutionary theory, and force theory",
          "All theories say the same thing",
          "No theories exist about state origin"
        ],
        "correctAnswer": 2,
        "explanation": "Theories of State Origin: (1) DIVINE THEORY - state created by God, rulers derive authority from divine will, (2) SOCIAL CONTRACT THEORY - state created by agreement among people for mutual benefit (Hobbes, Locke, Rousseau), (3) EVOLUTIONARY THEORY - state evolved gradually from family/clan to tribe to state, (4) FORCE THEORY - state created through conquest and domination by stronger groups, (5) MARXIST THEORY - state emerged with class divisions to maintain ruling class dominance. Each theory explains different aspects but none alone explains all cases."
      },
      {
        "level": 66,
        "difficulty": "Easy",
        "question": "What is sovereignty?",
        "options": [
          "Government's popularity",
          "Supreme authority of state within its territory and independence from external control",
          "Military strength only",
          "Economic power"
        ],
        "correctAnswer": 2,
        "explanation": "Sovereignty means: (1) INTERNAL SOVEREIGNTY - supreme authority within state territory, no higher authority above state, (2) EXTERNAL SOVEREIGNTY - independence from foreign control, right to conduct own affairs, (3) LEGAL SOVEREIGNTY - highest law-making power, (4) POLITICAL SOVEREIGNTY - ultimate political authority, (5) INDIVISIBLE - cannot be shared with other authorities, (6) ABSOLUTE - unlimited in scope within its sphere. However, in practice sovereignty faces limitations from international law, global interdependence, and internal constraints."
      },
      {
        "level": 67,
        "difficulty": "Medium",
        "question": "What are the functions of the modern state?",
        "options": [
          "Only law and order",
          "Maintain order, provide security, deliver services, regulate economy, and promote welfare",
          "Only collect taxes",
          "Only military functions"
        ],
        "correctAnswer": 2,
        "explanation": "State Functions: (1) LAW AND ORDER - maintain internal peace, enforce laws, administer justice, (2) DEFENSE - protect from external threats, maintain armed forces, (3) ECONOMIC REGULATION - manage economy, control markets, provide infrastructure, (4) WELFARE SERVICES - education, healthcare, social security, poverty alleviation, (5) DIPLOMATIC RELATIONS - conduct foreign policy, international agreements, (6) ENVIRONMENTAL PROTECTION - manage natural resources, address environmental challenges, (7) CULTURAL PRESERVATION - protect heritage, promote arts and culture. Modern state has expanded from minimal functions to extensive welfare role."
      },
      {
        "level": 68,
        "difficulty": "Easy",
        "question": "What is the difference between state and government?",
        "options": [
          "State and government are exactly the same",
          "State is permanent political organization; government is temporary set of office-holders",
          "Only government exists",
          "Only state exists"
        ],
        "correctAnswer": 2,
        "explanation": "State vs Government: STATE: (1) Permanent political organization, (2) Includes all political institutions, (3) Abstract entity representing political community, (4) Continues despite changes in personnel, (5) Broader concept including constitution, laws, institutions. GOVERNMENT: (1) Specific group of people in power at given time, (2) Operates state machinery, (3) Temporary - changes through elections, (4) Concrete set of office-holders, (5) Narrower concept - executive branch. State provides framework; government operates within it."
      },
      {
        "level": 69,
        "difficulty": "Medium",
        "question": "What are the contemporary challenges to the state?",
        "options": [
          "States face no challenges",
          "Globalization, transnational issues, non-state actors, and internal fragmentation",
          "Only economic challenges",
          "Only military challenges"
        ],
        "correctAnswer": 2,
        "explanation": "Contemporary Challenges: (1) GLOBALIZATION - economic integration limits state control over economy, (2) TRANSNATIONAL ISSUES - climate change, terrorism, migration require international cooperation, (3) NON-STATE ACTORS - multinational corporations, NGOs, terrorist groups challenge state authority, (4) INTERNAL FRAGMENTATION - ethnic conflicts, separatist movements, (5) SUPRANATIONAL ORGANIZATIONS - EU, UN limit state sovereignty, (6) TECHNOLOGY - internet, social media transcend state borders, (7) ECONOMIC INTERDEPENDENCE - limits independent policy-making, (8) HUMAN RIGHTS - international standards constrain state actions."
      },
      {
        "level": 70,
        "difficulty": "Easy",
        "question": "What is political obligation?",
        "options": [
          "Fear of punishment only",
          "Moral duty to obey state authority and laws based on legitimate reasons",
          "Automatic obedience to government",
          "Following orders without thinking"
        ],
        "correctAnswer": 2,
        "explanation": "Political Obligation is the moral duty to obey state authority and laws. Key aspects: (1) MORAL DUTY - goes beyond fear of punishment, (2) BASED ON LEGITIMACY - state authority must be justified, (3) NOT ABSOLUTE - may have limits and exceptions, (4) RATIONAL BASIS - citizens should understand why obedience is required, (5) RECIPROCAL - state must fulfill its duties to citizens, (6) VOLUNTARY - ideally based on consent rather than coercion. Question: when and why should citizens obey state authority?"
      },
      {
        "level": 71,
        "difficulty": "Medium",
        "question": "What are the different theories of political obligation?",
        "options": [
          "Only one theory exists",
          "Consent theory, natural duty theory, gratitude theory, and fair play theory",
          "All theories are identical",
          "No theories are needed"
        ],
        "correctAnswer": 2,
        "explanation": "Theories of Political Obligation: (1) CONSENT THEORY - obligation based on voluntary agreement to obey (express or tacit consent), (2) NATURAL DUTY THEORY - moral duty to support just institutions regardless of consent, (3) GRATITUDE THEORY - obligation based on benefits received from state, (4) FAIR PLAY THEORY - obligation to do one's share in cooperative scheme that benefits all, (5) ASSOCIATIVE DUTY - obligations arising from membership in political community. Each theory faces challenges but together provide different grounds for political obligation."
      },
      {
        "level": 72,
        "difficulty": "Easy",
        "question": "When is civil disobedience justified?",
        "options": [
          "Never justified",
          "When laws are unjust, legal channels have been exhausted, and action is public and non-violent",
          "Always justified",
          "Only when government allows it"
        ],
        "correctAnswer": 2,
        "explanation": "Civil Disobedience is justified when: (1) LAW IS UNJUST - violates fundamental moral principles or human rights, (2) LEGAL CHANNELS EXHAUSTED - normal democratic processes have failed, (3) PUBLIC ACTION - open violation to draw attention to injustice, (4) NON-VIOLENT - uses peaceful means only, (5) WILLINGNESS TO FACE CONSEQUENCES - accept legal punishment, (6) LIMITED SCOPE - targets specific unjust laws, not entire legal system, (7) LAST RESORT - other methods of change have failed. Examples: Gandhi's salt march, Civil Rights Movement in US."
      },
      {
        "level": 73,
        "difficulty": "Medium",
        "question": "What is the difference between civil disobedience and revolution?",
        "options": [
          "No difference exists",
          "Civil disobedience accepts legal system while challenging specific laws; revolution seeks to overthrow system",
          "Revolution is always peaceful",
          "Civil disobedience is violent"
        ],
        "correctAnswer": 2,
        "explanation": "Civil Disobedience vs Revolution: CIVIL DISOBEDIENCE: (1) Accepts legitimacy of legal system, (2) Challenges specific unjust laws, (3) Uses non-violent methods, (4) Willing to face legal consequences, (5) Seeks reform within system, (6) Appeals to majority's sense of justice. REVOLUTION: (1) Rejects entire political system, (2) Seeks fundamental change in power structure, (3) May use violent means, (4) Aims to overthrow existing authority, (5) Creates new political order, (6) Usually involves mass uprising. Civil disobedience works within system; revolution seeks to replace it."
      },
      {
        "level": 74,
        "difficulty": "Easy",
        "question": "What is constitution?",
        "options": [
          "Any government document",
          "Supreme law that establishes government structure, defines powers, and protects rights",
          "Collection of all laws",
          "Government's policy document"
        ],
        "correctAnswer": 2,
        "explanation": "Constitution is the supreme law of a country that: (1) ESTABLISHES GOVERNMENT STRUCTURE - creates institutions and defines their roles, (2) DISTRIBUTES POWERS - allocates authority between different organs and levels, (3) PROTECTS RIGHTS - guarantees fundamental rights of citizens, (4) LIMITS GOVERNMENT POWER - prevents arbitrary use of authority, (5) PROVIDES AMENDMENT PROCEDURE - process for constitutional change, (6) SUPREME LAW - overrides ordinary legislation, (7) LEGITIMACY - derives authority from people (written or unwritten)."
      },
      {
        "level": 75,
        "difficulty": "Medium",
        "question": "Why do we need a constitution?",
        "options": [
          "Constitution is not necessary",
          "To limit government power, protect rights, provide stability, and establish rule of law",
          "Only to create government jobs",
          "To make laws complicated"
        ],
        "correctAnswer": 2,
        "explanation": "Need for Constitution: (1) LIMIT GOVERNMENT POWER - prevents arbitrary and tyrannical rule, (2) PROTECT RIGHTS - guarantees fundamental freedoms of citizens, (3) ESTABLISH INSTITUTIONS - creates framework for governance, (4) RULE OF LAW - ensures government operates according to law, (5) POLITICAL STABILITY - provides predictable framework for political change, (6) DEMOCRATIC LEGITIMACY - derives authority from people's will, (7) RESOLVE CONFLICTS - provides mechanisms for dispute resolution, (8) NATIONAL IDENTITY - expresses shared values and aspirations."
      },
      {
        "level": 76,
        "difficulty": "Easy",
        "question": "What are the main features of a constitution?",
        "options": [
          "Only creates government",
          "Supremacy, government structure, fundamental rights, amendment procedure, and federal provisions",
          "Only lists of laws",
          "Only emergency provisions"
        ],
        "correctAnswer": 2,
        "explanation": "Main Features: (1) SUPREMACY - highest law, overrides other laws, (2) GOVERNMENT STRUCTURE - creates legislature, executive, judiciary with defined powers, (3) FUNDAMENTAL RIGHTS - guarantees basic freedoms and protections, (4) AMENDMENT PROCEDURE - method for constitutional change, (5) FEDERAL PROVISIONS - distribution of powers between levels (if federal), (6) EMERGENCY PROVISIONS - special powers during crises, (7) DIRECTIVE PRINCIPLES - guidelines for government policy, (8) FUNDAMENTAL DUTIES - obligations of citizens."
      },
      {
        "level": 77,
        "difficulty": "Medium",
        "question": "What is the difference between written and unwritten constitution?",
        "options": [
          "No difference exists",
          "Written constitution is codified in single document; unwritten consists of various sources and conventions",
          "Unwritten constitutions don't exist",
          "Written constitutions are always better"
        ],
        "correctAnswer": 2,
        "explanation": "WRITTEN CONSTITUTION: (1) Codified in single comprehensive document, (2) Definite and precise provisions, (3) Supreme law clearly identifiable, (4) Examples: India, USA, Canada. UNWRITTEN CONSTITUTION: (1) Not codified in single document, (2) Consists of laws, conventions, judicial decisions, customs, (3) Flexible and evolutionary, (4) Example: United Kingdom. ADVANTAGES OF WRITTEN: clarity, certainty, protection of rights. ADVANTAGES OF UNWRITTEN: flexibility, adaptation to changing circumstances. Both can be effective depending on political culture and history."
      },
      {
        "level": 78,
        "difficulty": "Easy",
        "question": "What is constitutional amendment?",
        "options": [
          "Changing any law",
          "Formal process of changing or adding to constitutional provisions",
          "Government policy change",
          "Court decisions"
        ],
        "correctAnswer": 2,
        "explanation": "Constitutional Amendment is the formal process of changing, adding to, or repealing constitutional provisions. Features: (1) SPECIAL PROCEDURE - more difficult than ordinary law-making, (2) SUPER-MAJORITY - usually requires more than simple majority, (3) RATIFICATION - may require approval by different authorities, (4) ENTRENCHMENT - protects constitution from hasty changes, (5) DEMOCRATIC LEGITIMACY - people's representatives approve changes, (6) ADAPTATION - allows constitution to evolve with changing times while maintaining stability."
      },
      {
        "level": 79,
        "difficulty": "Medium",
        "question": "What are rigid and flexible constitutions?",
        "options": [
          "All constitutions are the same",
          "Rigid constitutions have difficult amendment procedures; flexible constitutions are easier to amend",
          "Rigid constitutions cannot be changed",
          "Flexible constitutions change automatically"
        ],
        "correctAnswer": 2,
        "explanation": "RIGID CONSTITUTION: (1) Difficult amendment procedure, (2) Requires special majority or complex process, (3) Protects constitutional provisions from frequent changes, (4) Examples: USA (2/3 + 3/4 states), India (special majority + ratification for some articles). FLEXIBLE CONSTITUTION: (1) Easy amendment like ordinary laws, (2) Simple parliamentary majority sufficient, (3) Can adapt quickly to changing circumstances, (4) Example: UK Parliament can change constitutional laws easily. BALANCE NEEDED: stability vs adaptability."
      },
      {
        "level": 80,
        "difficulty": "Easy",
        "question": "What is judicial review?",
        "options": [
          "Courts reviewing their own decisions",
          "Power of courts to examine and invalidate unconstitutional laws and actions",
          "Government reviewing judges",
          "Public reviewing court decisions"
        ],
        "correctAnswer": 2,
        "explanation": "Judicial Review is the power of courts to: (1) EXAMINE LAWS - review legislation for constitutional compliance, (2) INVALIDATE UNCONSTITUTIONAL ACTS - strike down laws and government actions that violate constitution, (3) INTERPRET CONSTITUTION - give meaning to constitutional provisions, (4) PROTECT RIGHTS - safeguard fundamental rights against violation, (5) CHECK GOVERNMENT POWER - ensure government operates within constitutional limits, (6) MAINTAIN SUPREMACY - enforce constitutional supremacy over ordinary laws."
      },
      {
        "level": 81,
        "difficulty": "Medium",
        "question": "What are the arguments for and against judicial review?",
        "options": [
          "Only positive aspects exist",
          "For: protects rights, checks tyranny; Against: undemocratic, judicial activism",
          "Only negative aspects exist",
          "No debate exists about judicial review"
        ],
        "correctAnswer": 2,
        "explanation": "ARGUMENTS FOR: (1) Protects fundamental rights from majority tyranny, (2) Maintains constitutional supremacy, (3) Checks arbitrary government power, (4) Ensures rule of law, (5) Protects minorities from majority domination. ARGUMENTS AGAINST: (1) Undemocratic - unelected judges overrule elected representatives, (2) Judicial activism - courts make policy instead of interpreting law, (3) Political questions decided by courts, (4) Slows down government functioning, (5) Judicial oligarchy - rule by few judges. BALANCE: Need judicial independence with judicial restraint."
      },
      {
        "level": 82,
        "difficulty": "Easy",
        "question": "What is separation of powers?",
        "options": [
          "Different political parties",
          "Division of government functions among legislature, executive, and judiciary",
          "Geographical division of power",
          "Separation of central and state governments"
        ],
        "correctAnswer": 2,
        "explanation": "Separation of Powers divides government functions among three branches: (1) LEGISLATURE - makes laws, represents people, controls finances, (2) EXECUTIVE - implements laws, conducts administration, maintains order, (3) JUDICIARY - interprets laws, settles disputes, protects rights. PURPOSE: (1) Prevents concentration of power, (2) Creates checks and balances, (3) Protects individual liberty, (4) Ensures accountable government, (5) Maintains rule of law. However, complete separation is impossible - branches must cooperate while maintaining independence."
      },
      {
        "level": 83,
        "difficulty": "Medium",
        "question": "What is the system of checks and balances?",
        "options": [
          "Banking system only",
          "Each branch of government has powers to check and limit the others",
          "Only executive controls others",
          "No controls between branches"
        ],
        "correctAnswer": 2,
        "explanation": "Checks and Balances: (1) LEGISLATURE CHECKS EXECUTIVE - controls budget, questions government, votes of no confidence, impeachment, (2) LEGISLATURE CHECKS JUDICIARY - impeachment of judges, confirming appointments, (3) EXECUTIVE CHECKS LEGISLATURE - veto power, calling sessions, dissolving legislature, (4) EXECUTIVE CHECKS JUDICIARY - appointing judges, implementing decisions, (5) JUDICIARY CHECKS LEGISLATURE - judicial review of laws, (6) JUDICIARY CHECKS EXECUTIVE - judicial review of actions, protecting rights. This ensures no branch becomes too powerful."
      },
      {
        "level": 84,
        "difficulty": "Easy",
        "question": "What is federalism in constitutional terms?",
        "options": [
          "Rule by federal employees",
          "Constitutional division of powers between central and regional governments",
          "Centralized government only",
          "Local government system"
        ],
        "correctAnswer": 2,
        "explanation": "Constitutional Federalism involves: (1) CONSTITUTIONAL DIVISION - powers distributed by constitution between central and regional governments, (2) DUAL GOVERNMENT - citizens governed by both levels simultaneously, (3) SUPREMACY OF CONSTITUTION - both levels derive authority from constitution, (4) INDEPENDENT SPHERES - each level independent in its jurisdiction, (5) JUDICIAL ARBITRATION - courts resolve disputes between levels, (6) CANNOT BE UNILATERALLY CHANGED - requires constitutional amendment, not ordinary law."
      },
      {
        "level": 85,
        "difficulty": "Medium",
        "question": "How does constitution balance unity and diversity in federal systems?",
        "options": [
          "Constitution only promotes unity",
          "Through division of powers, protection of regional interests, and common citizenship",
          "Constitution only promotes diversity",
          "No balance is possible"
        ],
        "correctAnswer": 2,
        "explanation": "Balancing Unity and Diversity: UNITY: (1) Common citizenship, (2) Central government for national issues, (3) Common constitution and legal system, (4) National symbols and identity, (5) Supreme Court as final arbiter. DIVERSITY: (1) Regional governments for local issues, (2) Protection of regional languages and cultures, (3) State representation in national legislature, (4) Asymmetric federalism for special regions, (5) Local self-government. This allows 'unity in diversity' - maintaining national coherence while respecting regional distinctiveness and autonomy."
      },{
        "level": 86,
        "difficulty": "Easy",
        "question": "What is the primary purpose of a constitution in a modern state?",
        "options": [
            "To provide a set of rules for economic policies only.",
            "To outline the fundamental rules that govern the structure and functioning of government, limit its power, and define the relationship between state and citizens.",
            "To serve as a historical document without legal binding.",
            "To list the names of all government officials."
        ],
        "correctAnswer": 2,
        "explanation": "A constitution is the supreme law of a country that lays down the basic framework for governance. It defines the powers and limitations of different organs of government (legislature, executive, judiciary), allocates powers between different levels of government (in federal systems), and enshrines fundamental rights for citizens to protect them from arbitrary state actions. It also reflects the aspirations and values of the society, such as justice, liberty, and equality. Without a constitution, there would be no clear rules, leading to chaos or authoritarianism. Constitutions can be written (like India's) or unwritten (like the UK's), but in modern democracies, written constitutions are common to ensure clarity and enforceability."
    },
    {
        "level": 87,
        "difficulty": "Medium",
        "question": "How was the Indian Constitution framed?",
        "options": [
            "By a direct referendum of the people.",
            "By the Constituent Assembly, which was elected indirectly by provincial assemblies under British rule and worked from 1946 to 1949.",
            "By the British Parliament before independence.",
            "By a committee appointed by the Prime Minister after independence."
        ],
        "correctAnswer": 2,
        "explanation": "The Indian Constitution was framed by the Constituent Assembly, formed in 1946 under the Cabinet Mission Plan. Members were elected indirectly by provincial legislative assemblies (which were elected on limited franchise under the Government of India Act, 1935). The Assembly had 389 members initially (reduced to 299 after partition), representing diverse regions, communities, and ideologies. Key figures included Dr. B.R. Ambedkar (Chairman of Drafting Committee), Jawaharlal Nehru, Sardar Patel, and Rajendra Prasad (President). It held 11 sessions over 2 years, 11 months, and 18 days, debating extensively and borrowing ideas from various global constitutions (e.g., fundamental rights from USA, parliamentary system from UK). The Constitution was adopted on November 26, 1949, and came into effect on January 26, 1950 (Republic Day)."
    },
    {
        "level": 88,
        "difficulty": "Easy",
        "question": "What is the significance of the Preamble to the Indian Constitution?",
        "options": [
            "It lists all the articles of the Constitution.",
            "It declares India as a sovereign, socialist, secular, democratic republic and outlines the objectives of justice, liberty, equality, and fraternity.",
            "It specifies the salaries of government officials.",
            "It is a non-justiciable part with no legal value."
        ],
        "correctAnswer": 2,
        "explanation": "The Preamble is the introductory statement to the Constitution, encapsulating its philosophy and objectives. It declares India to be a 'Sovereign Socialist Secular Democratic Republic' (words 'socialist' and 'secular' added by 42nd Amendment, 1976). It aims to secure justice (social, economic, political), liberty (of thought, expression, belief, faith, worship), equality (of status and opportunity), and fraternity (assuring dignity of individual and unity of nation). Though initially considered non-justiciable, the Supreme Court in Kesavananda Bharati case (1973) held it as part of the basic structure, guiding interpretation of the Constitution. It reflects the influence of the French Revolution (liberty, equality, fraternity) and American Constitution."
    },
    {
        "level": 89,
        "difficulty": "Medium",
        "question": "What are Fundamental Rights in the Indian Constitution?",
        "options": [
            "Rights that are optional and can be ignored by the government.",
            "Basic human rights guaranteed to all citizens, enforceable by courts, and placed in Part III to protect individuals from state tyranny.",
            "Rights available only to government employees.",
            "Economic privileges for the wealthy."
        ],
        "correctAnswer": 2,
        "explanation": "Fundamental Rights (Articles 12-35) are enshrined in Part III of the Constitution, inspired by the US Bill of Rights. They include: Right to Equality (14-18: equality before law, prohibition of discrimination, equality of opportunity, abolition of untouchability/titles); Right to Freedom (19-22: speech, assembly, association, movement, residence, profession; protection against arbitrary arrest); Right against Exploitation (23-24: prohibition of trafficking, forced labor, child labor); Right to Freedom of Religion (25-28); Cultural and Educational Rights (29-30: protection of minorities' interests); Right to Constitutional Remedies (32: right to approach courts for enforcement, via writs like habeas corpus, mandamus). These are justiciable, but not absolute—can be restricted during emergencies or for public interest. The 44th Amendment made property a legal right (Article 300A), not fundamental."
    },
    {
        "level": 90,
        "difficulty": "Hard",
        "question": "How can Fundamental Rights be suspended or restricted?",
        "options": [
            "By a simple majority in Parliament at any time.",
            "Only during a national emergency under Article 352, except for Articles 20 and 21, which cannot be suspended even then.",
            "By state governments independently.",
            "They can never be restricted."
        ],
        "correctAnswer": 2,
        "explanation": "Fundamental Rights are not absolute and can be restricted by the state for reasons like public order, morality, or national security, but only through laws that pass the test of reasonableness (Article 13 declares inconsistent laws void). During a national emergency (Article 352), rights under Article 19 are automatically suspended, and the President can suspend other rights except Articles 20 (protection in respect of conviction for offenses) and 21 (protection of life and personal liberty), as per the 44th Amendment (1978). In emergencies, the state can impose restrictions, but courts can review them post-emergency. This balance prevents authoritarianism while allowing flexibility in crises, as seen during the 1975 Emergency."
    },
    {
        "level": 91,
        "difficulty": "Easy",
        "question": "What is the Universal Adult Franchise in India?",
        "options": [
            "Voting rights only for educated adults.",
            "The right of every citizen above 18 years to vote in elections, regardless of caste, religion, gender, or economic status.",
            "Franchise limited to property owners.",
            "Voting rights for adults above 21 years."
        ],
        "correctAnswer": 2,
        "explanation": "Universal Adult Franchise (Article 326) grants voting rights to all citizens aged 18 and above (lowered from 21 by 61st Amendment, 1989), without discrimination based on religion, caste, sex, or wealth. This was a bold step at independence, as many countries (e.g., USA, UK) had restricted suffrage. It ensures democratic representation, with the Election Commission overseeing free and fair elections. Exceptions include non-citizens, criminals, and those of unsound mind. This principle promotes political equality and inclusivity, making India's democracy the largest in the world."
    },
    {
        "level": 92,
        "difficulty": "Medium",
        "question": "What is the role of the Election Commission of India?",
        "options": [
            "To make laws on elections.",
            "An independent body responsible for conducting free and fair elections, delimiting constituencies, recognizing parties, and enforcing the Model Code of Conduct.",
            "To appoint the Prime Minister.",
            "To handle foreign affairs during elections."
        ],
        "correctAnswer": 2,
        "explanation": "The Election Commission (ECI) is a constitutional body (Articles 324-329) headed by the Chief Election Commissioner and other commissioners, appointed by the President. Its functions include: superintendence, direction, and control of elections to Parliament, state legislatures, President, and Vice-President; preparation of electoral rolls; delimitation of constituencies; recognition of political parties and allotment of symbols; enforcement of Model Code of Conduct to prevent malpractices; and use of EVMs/VVPAT for transparency. It ensures impartiality, with powers to countermand polls or recommend disqualification. Reforms like voter ID cards and limits on election expenses strengthen democracy."
    },
    {
        "level": 93,
        "difficulty": "Easy",
        "question": "What is the difference between First Past the Post (FPTP) and Proportional Representation (PR) systems?",
        "options": [
            "FPTP elects the candidate with the most votes in a constituency, while PR allocates seats based on the proportion of votes a party receives.",
            "FPTP is used for presidential elections, PR for parliamentary.",
            "Both are the same system.",
            "PR is used in India for Lok Sabha elections."
        ],
        "correctAnswer": 1,
        "explanation": "In FPTP (used in India for Lok Sabha and state assemblies), the country is divided into constituencies, and the candidate with the highest votes (even if not majority) wins the seat. This can lead to disproportionate representation (e.g., a party with 40% votes might win most seats). In PR (used in Israel, Netherlands), seats are allocated based on vote share, ensuring better representation of smaller parties and minorities, often through party lists or larger constituencies. India uses PR for Rajya Sabha (STV method) and President (indirect election). FPTP promotes stable governments but may not reflect vote proportions accurately."
    },
    {
        "level": 94,
        "difficulty": "Medium",
        "question": "What are the functions of the Executive in India?",
        "options": [
            "To make laws.",
            "To interpret laws and deliver justice.",
            "To implement laws, formulate policies, and run day-to-day administration, divided into political (ministers) and permanent (civil servants).",
            "To conduct elections."
        ],
        "correctAnswer": 3,
        "explanation": "The Executive is the organ that enforces laws and runs the government. In India, it's divided into: Political Executive (elected ministers, accountable to legislature, e.g., PM, CM, Cabinet—decide policies); Permanent Executive (civil servants like IAS, IPS—implement policies, selected via UPSC, provide continuity). The President (nominal head) and PM (real head) lead at the center; Governor and CM at states. Functions include policy formulation, budget preparation, international relations, crisis management, and appointments. In parliamentary system, executive is responsible to legislature, ensuring democratic control."
    },
    {
        "level": 95,
        "difficulty": "Hard",
        "question": "What is the doctrine of collective responsibility in the Indian parliamentary system?",
        "options": [
            "Each minister is responsible only for their department.",
            "The entire Council of Ministers is collectively responsible to the Lok Sabha for the government's actions, and if a no-confidence motion passes, all resign.",
            "Only the Prime Minister is responsible.",
            "It applies only during emergencies."
        ],
        "correctAnswer": 2,
        "explanation": "Collective responsibility (Article 75) means the Council of Ministers (headed by PM) is jointly accountable to the Lok Sabha. All ministers must defend government policies publicly; internal disagreements are resolved privately. If Lok Sabha passes a no-confidence motion, the entire government resigns. This ensures unity and parliamentary supremacy. Individual responsibility means ministers are answerable for their departments, but collective overrides. This British-inherited feature promotes cohesive governance but can lead to compromises."
    },
    {
        "level": 96,
        "difficulty": "Easy",
        "question": "What is the role of the Parliament in India?",
        "options": [
            "To execute laws.",
            "The supreme legislative body consisting of Lok Sabha and Rajya Sabha, responsible for making laws, controlling executive, and representing people.",
            "To interpret the Constitution.",
            "To conduct foreign policy."
        ],
        "correctAnswer": 2,
        "explanation": "Parliament (Articles 79-122) is bicameral: Lok Sabha (lower house, 543 elected members + 2 nominated Anglo-Indians, term 5 years, represents people directly); Rajya Sabha (upper house, 250 members—238 elected by state assemblies, 12 nominated by President, term 6 years, represents states). Functions: law-making (ordinary, money, constitutional bills); executive control (questions, motions, budgets); financial oversight (approves taxes, expenditures); electoral (elects President, VP); judicial (impeachment); and deliberative (debates issues). It embodies sovereignty of the people."
    },
    {
        "level": 97,
        "difficulty": "Medium",
        "question": "What is the difference between ordinary bills and money bills?",
        "options": [
            "Ordinary bills deal with finance, money bills with non-finance.",
            "Money bills (Article 110) relate to taxation, borrowing, expenditure from Consolidated Fund, can only be introduced in Lok Sabha, and Rajya Sabha has limited powers (14 days to recommend).",
            "Both are the same.",
            "Money bills require President's assent only."
        ],
        "correctAnswer": 2,
        "explanation": "Ordinary bills can be introduced in either house, require passage in both, and if deadlock, joint sitting (Article 108). Money bills (certified by Speaker) must originate in Lok Sabha; Rajya Sabha can only suggest amendments (not binding), must return in 14 days, or deemed passed. This gives Lok Sabha superiority in finance, reflecting its elected nature. Constitutional bills (amending Constitution, Article 368) need special majority. This classification ensures fiscal discipline and democratic control."
    },
    {
        "level": 98,
        "difficulty": "Easy",
        "question": "What is the primary function of the Judiciary in India?",
        "options": [
            "To make laws.",
            "To implement government policies.",
            "To interpret laws, resolve disputes, protect the Constitution, and ensure justice through an independent hierarchy of courts.",
            "To conduct elections."
        ],
        "correctAnswer": 3,
        "explanation": "The Judiciary (Articles 124-147 for Supreme Court, 214-231 for High Courts) is independent to uphold rule of law. Supreme Court (apex, 34 judges including CJI, appointed by President via collegium) has original ( Centre-state disputes), appellate, advisory jurisdictions, and judicial review (strike down unconstitutional laws). High Courts (state level), District Courts (lower). Functions: dispute resolution (civil, criminal), constitutional interpretation, rights protection (PILs), check on executive/legislature. Independence ensured by security of tenure, salaries from Consolidated Fund, contempt powers."
    },
    {
        "level": 99,
        "difficulty": "Hard",
        "question": "What is judicial review and its significance in India?",
        "options": [
            "Review of judicial appointments.",
            "The power of courts to examine the constitutionality of laws and executive actions, striking them down if violative, as established in cases like Kesavananda Bharati.",
            "Only applicable to state laws.",
            "Not part of the Indian Constitution."
        ],
        "correctAnswer": 2,
        "explanation": "Judicial review (implied in Articles 13, 32, 226) allows courts to invalidate laws/actions contradicting the Constitution. Originated from US (Marbury vs Madison), in India, it's part of basic structure (Kesavananda Bharati, 1973—Parliament can't amend basic features like judicial review, federalism). Significance: protects fundamental rights, maintains federal balance, prevents majoritarian excess. Limitations: can't review on policy merits, only constitutionality. Evolutions include PILs (public interest litigation) for broader access to justice."
    },
    {
        "level": 100,
        "difficulty": "Medium",
        "question": "What is Federalism in the Indian context?",
        "options": [
            "A unitary system with all power at the center.",
            "Division of powers between Union and States as per Schedules VII (Union, State, Concurrent Lists), with a strong center but cooperative features.",
            "Complete independence for states.",
            "Only applicable to local governments."
        ],
        "correctAnswer": 2,
        "explanation": "Indian Federalism (Articles 245-263) is quasi-federal: Union List (97 subjects like defense, foreign affairs—exclusive to center); State List (66 subjects like police, agriculture—states); Concurrent List (47 subjects like education—both, center prevails in conflict). Residuary powers with center. Features: single citizenship, integrated judiciary, all-India services, emergency provisions (center can override states). Cooperative aspects: inter-state councils, finance commission for revenue sharing. It accommodates diversity while ensuring unity, unlike rigid US federalism."
    },
    {
        "level": 101,
        "difficulty": "Easy",
        "question": "What is the role of local governments in India?",
        "options": [
            "To handle international relations.",
            "Decentralized bodies for rural (Panchayats) and urban (Municipalities) areas, empowered by 73rd and 74th Amendments for grassroots democracy.",
            "To make national laws.",
            "Only advisory bodies."
        ],
        "correctAnswer": 2,
        "explanation": "Local governments promote decentralization (Gandhian ideal). 73rd Amendment (1992): three-tier Panchayati Raj—Gram Panchayat (village), Panchayat Samiti (block), Zila Parishad (district); elections every 5 years, reservations for women/SC/ST. 74th Amendment: Urban—Nagar Panchayat (transitional), Municipal Council (small towns), Municipal Corporation (cities); similar features. Functions (11th/12th Schedules): planning, infrastructure, welfare. They enhance participation, efficiency in local issues, but face challenges like fund shortages, state interference."
    },
    {
        "level": 102,
        "difficulty": "Medium",
        "question": "How is the Indian Constitution amended?",
        "options": [
            "By simple majority like ordinary laws.",
            "Under Article 368, by special majority (2/3 present and voting in each house) plus ratification by half the states for certain provisions.",
            "Only by the President.",
            "It cannot be amended."
        ],
        "correctAnswer": 2,
        "explanation": "The Constitution is flexible yet rigid. Amendments: simple majority for non-fundamental matters (e.g., state boundaries); special majority for most (2/3 in Parliament); special + state ratification for federal aspects (e.g., election of President, lists). Basic structure can't be amended (Kesavananda). Over 100 amendments since 1950, e.g., 42nd (Emergency powers), 44th (restored rights). This living document evolves with society while preserving core values."
    },
    {
        "level": 103,
        "difficulty": "Hard",
        "question": "What is the philosophy underlying the Indian Constitution?",
        "options": [
            "Purely capitalist and individualistic.",
            "A blend of liberalism (rights, democracy), socialism (welfare state, DPSP), Gandhian principles (decentralization), and secularism, aiming for a just society.",
            "Theocratic based on one religion.",
            "Military rule."
        ],
        "correctAnswer": 2,
        "explanation": "The Constitution's philosophy draws from multiple sources: Enlightenment (liberty, equality); socialism (DPSP Articles 36-51—economic justice, welfare); Gandhian (village panchayats, cottage industries); secularism (equal respect to religions); federalism with unitary bias for unity in diversity. It promotes transformative justice, affirmative action (reservations), and balances individual rights with community welfare. Critiques include being elitist or borrowed, but it's indigenous in adapting to Indian context."
    },
    {
        "level": 104,
        "difficulty": "Easy",
        "question": "What is Political Theory?",
        "options": [
            "Study of political leaders' biographies.",
            "Systematic reflection on politics, concepts like freedom, equality, justice, and how societies should be organized.",
            "Only about election strategies.",
            "Historical facts without analysis."
        ],
        "correctAnswer": 2,
        "explanation": "Political Theory examines ideas, values, and institutions shaping political life. It asks normative questions (what ought to be) like ideal state (Plato, Aristotle), social contract (Hobbes, Locke, Rousseau), justice (Rawls). In contemporary terms, it critiques power structures, ideologies (liberalism, Marxism, feminism). It helps understand conflicts, propose solutions, and guide policy. Without theory, politics is mere practice; theory provides framework for evaluation."
    },
    {
        "level": 105,
        "difficulty": "Medium",
        "question": "What is the difference between negative and positive liberty?",
        "options": [
            "Negative: absence of external constraints; Positive: capacity to achieve goals through self-mastery and resources.",
            "Negative: freedom for the rich; Positive: for the poor.",
            "Both are the same.",
            "Positive liberty means no freedom."
        ],
        "correctAnswer": 1,
        "explanation": "Isaiah Berlin distinguished: Negative liberty (liberal view)—freedom from interference (e.g., free speech without censorship); Positive liberty (republican/communitarian)—freedom to self-realize, requiring conditions like education, equality (e.g., affirmative action). Negative prevents tyranny but ignores inequalities; positive enables true freedom but risks paternalism. In India, Constitution balances both via rights and DPSP."
    },
    {
        "level": 106,
        "difficulty": "Easy",
        "question": "What is Equality in political theory?",
        "options": [
            "Treating everyone identically regardless of needs.",
            "Equal treatment, opportunities, and outcomes, addressing inequalities through principles like formal equality and affirmative action.",
            "Only economic equality.",
            "Inequality based on merit."
        ],
        "correctAnswer": 2,
        "explanation": "Equality means absence of unjust privileges. Formal (equal before law); Equality of opportunity (merit-based access); Substantive (reducing disparities via redistribution). Theories: Liberal (Rawls' difference principle—inequalities benefit least advantaged); Marxist (classless society); Feminist (gender equality). In practice, it conflicts with liberty; balance via welfare states. India promotes via reservations, progressive taxes."
    },
    {
        "level": 107,
        "difficulty": "Medium",
        "question": "What is Social Justice?",
        "options": [
            "Justice only in courts.",
            "Fair distribution of goods, opportunities, and burdens in society, addressing historical injustices through recognition, redistribution, and representation.",
            "Punishment for crimes.",
            "Economic growth without equity."
        ],
        "correctAnswer": 2,
        "explanation": "Social justice (Ambedkar, Rawls) goes beyond legal justice to ensure dignity for marginalized. Dimensions: Redistribution (wealth transfer); Recognition (cultural respect for identities); Representation (political inclusion). Critiques: merit vs equity. In India, via Constitution (preamble, DPSP), policies like MNREGA, reservations combat caste, gender inequalities."
    },
    {
        "level": 108,
        "difficulty": "Hard",
        "question": "How do rights function in political theory?",
        "options": [
            "As privileges for rulers.",
            "Claims individuals make on society/state for protection of interests, classified as natural, moral, legal; they limit state power and promote human dignity.",
            "Only economic rights.",
            "Rights without duties."
        ],
        "correctAnswer": 2,
        "explanation": "Rights are entitlements (Locke: life, liberty, property). Types: Civil (speech, equality); Political (vote); Social (education, health). Theories: Natural (inherent); Utilitarian (maximize happiness); Human rights (universal, UDHR 1948). They correlate with duties, are limited by others' rights. In global context, rights discourse critiques imperialism, promotes feminism, environmentalism."
    },
    {
        "level": 109,
        "difficulty": "Easy",
        "question": "What is Citizenship?",
        "options": [
            "Only holding a passport.",
            "Membership in a political community with rights (civil, political, social) and duties (taxes, loyalty), often based on birth or naturalization.",
            "Living in a country without rights.",
            "Only for elites."
        ],
        "correctAnswer": 2,
        "explanation": "Citizenship (T.H. Marshall) evolves: civil (18th c.), political (19th), social (20th). Theories: Liberal (individual rights); Republican (active participation); Multicultural (group rights). Issues: migration, dual citizenship. In India (Articles 5-11), jus soli/jus sanguinis; duties in Article 51A. Global citizenship addresses transnational issues."
    },
    {
        "level": 110,
        "difficulty": "Medium",
        "question": "What is Nationalism?",
        "options": [
            "Hatred of other nations.",
            "Sentiment of belonging to a nation, based on shared culture, history, territory; can be civic (inclusive) or ethnic (exclusive).",
            "Only anti-colonial struggles.",
            "Global unity without borders."
        ],
        "correctAnswer": 2,
        "explanation": "Nationalism (19th c. Europe) unifies people into nation-states. Types: Civic (French—citizenship); Ethnic (German—blood). Positive: independence (India's freedom movement); Negative: chauvinism, wars. In post-colonial contexts, it blends with democracy, but faces challenges from globalization, sub-nationalism (e.g., separatism)."
    },
    {
        "level": 111,
        "difficulty": "Easy",
        "question": "What is Secularism?",
        "options": [
            "Atheism promoted by state.",
            "Separation of religion from state, ensuring equal respect and freedom for all religions, with state intervention for reform if needed.",
            "State support for one religion.",
            "Ban on all religions."
        ],
        "correctAnswer": 2,
        "explanation": "Secularism (Western: strict separation; Indian: principled distance—state equidistant, can aid/support reforms like banning triple talaq). Aims: prevent religious domination, promote harmony. In India (Preamble, Articles 25-28), no state religion, freedom of religion, but uniform civil code aspiration (Article 44). Challenges: communalism, majoritarianism."
    },
    {
        "level": 112,
        "difficulty": "Medium",
        "question": "What is Peace in political theory?",
        "options": [
            "Absence of war only.",
            "State of harmony without violence, including negative (no war) and positive (justice, equality) peace; involves conflict resolution.",
            "Military dominance.",
            "Isolation from world."
        ],
        "correctAnswer": 2,
        "explanation": "Peace (Galtung): Negative—cessation of violence; Positive—structural justice. Theories: Realism (power balance); Liberalism (democracy, trade); Feminism (gender peace). Methods: diplomacy, UN, non-violence (Gandhi). Global issues: arms race, terrorism. Peace education promotes tolerance."
    },
    {
        "level": 113,
        "difficulty": "Hard",
        "question": "What are the different models of Development?",
        "options": [
            "Only economic growth via GDP.",
            "Capitalist (market-led), Socialist (state-planned), Mixed (India's); alternative like sustainable (environment), human (capabilities—Amartya Sen).",
            "Military development only.",
            "No development needed."
        ],
        "correctAnswer": 2,
        "explanation": "Development: Modernization (Western model—industrialization); Dependency (critiques exploitation); Sustainable (Brundtland—meets present needs without compromising future); Human (UNDP—health, education). Critiques: environmental costs, inequality. In India, post-1991 liberalization blends growth with welfare, but faces debates on inclusivity."
    },
    {
        "level": 114,
        "difficulty": "Medium",
        "question": "How does political theory address globalization?",
        "options": [
            "By ignoring it.",
            "As interconnectedness in economy, culture, politics; theories debate benefits (liberal—prosperity) vs costs (Marxist—inequality).",
            "Only positive aspects.",
            "As end of nation-states."
        ],
        "correctAnswer": 2,
        "explanation": "Globalization erodes borders via trade (WTO), migration, information. Pros: efficiency, cultural exchange; Cons: job losses, cultural homogenization. Political theory: Cosmopolitanism (global citizenship); Nationalism (resistance). In developing countries, it challenges sovereignty but offers opportunities."
    },
    {
        "level": 115,
        "difficulty": "Easy",
        "question": "What is the importance of Directive Principles of State Policy (DPSP)?",
        "options": [
            "They are justiciable like Fundamental Rights.",
            "Non-justiciable guidelines (Part IV, Articles 36-51) for socio-economic welfare, inspired by Irish Constitution, to create a welfare state.",
            "Only for foreign policy.",
            "They override rights."
        ],
        "correctAnswer": 2,
        "explanation": "DPSP aim for social/economic democracy: equitable distribution, living wage, education, uniform civil code, village panchayats, environment protection. Though not enforceable, they guide legislation (e.g., Right to Education from Article 45). Courts use them for interpretation. They complement rights, balancing liberty with justice."
    }  
  ],
    12:[
           {
        "level": 1,
        "difficulty": "Easy",
        "question": "What is the Cold War?",
        "options": [
          "A war fought in cold weather",
          "Ideological conflict between USA and USSR without direct military confrontation",
          "A trade war between countries",
          "A war between hot and cold countries"
        ],
        "correctAnswer": 2,
        "explanation": "The Cold War (1945-1991) was a period of geopolitical tension between the United States and Soviet Union, characterized by ideological conflict, nuclear arms race, proxy wars, and competition for global influence without direct military confrontation between the superpowers."
      },
      {
        "level": 2,
        "difficulty": "Medium",
        "question": "What were the two major blocs during the Cold War?",
        "options": [
          "Eastern and Western blocs",
          "NATO and Warsaw Pact countries",
          "Capitalist and Communist blocs",
          "All of the above"
        ],
        "correctAnswer": 4,
        "explanation": "The Cold War divided the world into two major blocs: the Western/Capitalist bloc led by USA (including NATO countries) emphasizing democracy and free market, and the Eastern/Communist bloc led by USSR (including Warsaw Pact countries) emphasizing socialism and planned economy."
      },
      {
        "level": 3,
        "difficulty": "Easy",
        "question": "What does NAM stand for?",
        "options": [
          "North American Movement",
          "Non-Aligned Movement",
          "New Age Movement",
          "National Alignment Movement"
        ],
        "correctAnswer": 2,
        "explanation": "NAM stands for Non-Aligned Movement, a group of countries that chose not to align with either the US or USSR during the Cold War. It was founded in 1961 with India playing a leading role under Nehru's leadership."
      },
      {
        "level": 4,
        "difficulty": "Medium",
        "question": "Who were the founding leaders of NAM?",
        "options": [
          "Nehru, Nasser, Tito, Sukarno, and Nkrumah",
          "Gandhi, Churchill, Roosevelt",
          "Stalin, Mao, Castro",
          "Kennedy, Khrushchev, De Gaulle"
        ],
        "correctAnswer": 1,
        "explanation": "The founding leaders of NAM were Jawaharlal Nehru (India), Gamal Abdel Nasser (Egypt), Josip Broz Tito (Yugoslavia), Sukarno (Indonesia), and Kwame Nkrumah (Ghana). They met at the Bandung Conference in 1955 and formally established NAM in Belgrade in 1961."
      },
      {
        "level": 5,
        "difficulty": "Easy",
        "question": "What was India's foreign policy approach during the Cold War?",
        "options": [
          "Alignment with USA",
          "Alignment with USSR",
          "Non-alignment and peaceful coexistence",
          "Isolation from world affairs"
        ],
        "correctAnswer": 3,
        "explanation": "India followed a policy of non-alignment during the Cold War, meaning it refused to join either bloc while maintaining friendly relations with both. This policy was based on Panchsheel (Five Principles of Peaceful Coexistence) and allowed India to focus on domestic development."
      },
      {
        "level": 6,
        "difficulty": "Medium",
        "question": "What were the key features of the Cuban Missile Crisis?",
        "options": [
          "USSR placed missiles in Cuba, bringing world close to nuclear war",
          "Cuba invaded USA",
          "USA invaded Cuba successfully",
          "Cuba became independent"
        ],
        "correctAnswer": 1,
        "explanation": "The Cuban Missile Crisis (1962) occurred when the Soviet Union placed nuclear missiles in Cuba, 90 miles from US coast. This led to a 13-day standoff between Kennedy and Khrushchev, bringing the world closest to nuclear war. It ended with USSR removing missiles in exchange for US promise not to invade Cuba."
      },
      {
        "level": 7,
        "difficulty": "Easy",
        "question": "When did the Cold War end?",
        "options": [
          "1985",
          "1989 with fall of Berlin Wall",
          "1991 with dissolution of USSR",
          "1995"
        ],
        "correctAnswer": 3,
        "explanation": "The Cold War officially ended in 1991 with the dissolution of the Soviet Union. Key events leading to this included Gorbachev's reforms (Glasnost and Perestroika), fall of Berlin Wall in 1989, and the collapse of communist governments in Eastern Europe."
      },
      {
        "level": 8,
        "difficulty": "Medium",
        "question": "What is unipolarity in international relations?",
        "options": [
          "World dominated by multiple equal powers",
          "World system dominated by one superpower",
          "World without any dominant power",
          "World with two superpowers"
        ],
        "correctAnswer": 2,
        "explanation": "Unipolarity refers to a world system dominated by a single superpower. After 1991, the USA emerged as the sole superpower, creating a unipolar world order characterized by American hegemony in military, economic, technological, and cultural spheres."
      },
      {
        "level": 9,
        "difficulty": "Easy",
        "question": "What does 'Operation Desert Storm' refer to?",
        "options": [
          "A natural disaster response",
          "US-led military operation against Iraq in 1991",
          "A space mission",
          "An environmental protection program"
        ],
        "correctAnswer": 2,
        "explanation": "Operation Desert Storm was the US-led military operation against Iraq in 1991 during the Gulf War. It demonstrated America's military superiority with advanced technology, precision bombing, and minimal casualties, establishing US as the dominant global military power."
      },
      {
        "level": 10,
        "difficulty": "Medium",
        "question": "What are the different meanings of 'hegemony'?",
        "options": [
          "Only military dominance",
          "Economic dominance only",
          "Dominance through hard power, soft power, and structural power",
          "Cultural influence only"
        ],
        "correctAnswer": 3,
        "explanation": "Hegemony has three dimensions: Hard Power (military and economic coercion), Soft Power (cultural influence, ideology, diplomacy), and Structural Power (ability to shape global rules, institutions, and agenda). The US exercises hegemony through all three dimensions."
      },
      {
        "level": 11,
        "difficulty": "Easy",
        "question": "What is meant by 'soft power'?",
        "options": [
          "Using less military force",
          "Influence through culture, values, and attraction rather than coercion",
          "Diplomatic negotiations only",
          "Economic sanctions"
        ],
        "correctAnswer": 2,
        "explanation": "Soft power is the ability to influence others through attraction and persuasion rather than coercion. It includes cultural influence (Hollywood, music), values (democracy, human rights), education, technology, and lifestyle that make others want to follow your example."
      },
      {
        "level": 12,
        "difficulty": "Medium",
        "question": "How does US hegemony manifest in the economic sphere?",
        "options": [
          "Only through trade",
          "Control over global financial institutions, dollar as reserve currency, and market capitalism",
          "Through military bases only",
          "Only through technology"
        ],
        "correctAnswer": 2,
        "explanation": "US economic hegemony manifests through: dominance in global financial institutions (World Bank, IMF), US dollar as world's reserve currency, promotion of free market capitalism, control over global trade rules (WTO), and influence over global economic policies."
      },
      {
        "level": 13,
        "difficulty": "Easy",
        "question": "What strategies can countries adopt to deal with US hegemony?",
        "options": [
          "Only resistance",
          "Only cooperation",
          "Bandwagon, hide, or hedge strategies",
          "Only isolation"
        ],
        "correctAnswer": 3,
        "explanation": "Countries can adopt three strategies: Bandwagon (align with the hegemon for benefits), Hide (stay away from hegemon's attention), or Hedge (maintain some cooperation while building capacity to resist). Most countries use a combination of these strategies."
      },
      {
        "level": 14,
        "difficulty": "Medium",
        "question": "What is multipolarity?",
        "options": [
          "World with one superpower",
          "World with multiple centers of power",
          "World without any power centers",
          "World with only two powers"
        ],
        "correctAnswer": 2,
        "explanation": "Multipolarity refers to a world system with several major powers or power centers, no single hegemon. Examples include the rise of China, resurgence of Russia, emergence of India, Brazil, and regional powers, creating multiple poles of influence in different regions."
      },
      {
        "level": 15,
        "difficulty": "Easy",
        "question": "What was the 9/11 incident?",
        "options": [
          "A natural disaster",
          "Terrorist attacks on World Trade Center and Pentagon in 2001",
          "A political scandal",
          "An economic crisis"
        ],
        "correctAnswer": 2,
        "explanation": "The 9/11 attacks occurred on September 11, 2001, when Al-Qaeda terrorists hijacked four commercial aircraft, crashing two into World Trade Center towers in New York and one into Pentagon. Nearly 3,000 people died, leading to major changes in US foreign policy and global security."
      },
      {
        "level": 16,
        "difficulty": "Medium",
        "question": "What is the 'Bush Doctrine'?",
        "options": [
          "Policy of isolationism",
          "Preventive war and regime change policy",
          "Policy of non-interference",
          "Economic cooperation policy"
        ],
        "correctAnswer": 2,
        "explanation": "The Bush Doctrine, formulated after 9/11, emphasized: preventive war (attacking potential threats before they materialize), regime change in hostile states, unilateral action when necessary, and spreading democracy. It justified wars in Afghanistan (2001) and Iraq (2003)."
      },
      {
        "level": 17,
        "difficulty": "Easy",
        "question": "What is the European Union (EU)?",
        "options": [
          "A military alliance",
          "An economic and political union of European countries",
          "A cultural organization",
          "A trade bloc only"
        ],
        "correctAnswer": 2,
        "explanation": "The European Union is a political and economic union of 27 European countries that have integrated their economies, adopted common policies, and share sovereignty in many areas. It represents an alternative model to US hegemony through collective strength and multilateralism."
      },
      {
        "level": 18,
        "difficulty": "Medium",
        "question": "What were the main steps in European integration?",
        "options": [
          "Only economic integration",
          "Coal and Steel Community → EEC → Single Market → Maastricht Treaty → EU",
          "Only political integration",
          "Military integration only"
        ],
        "correctAnswer": 2,
        "explanation": "European integration evolved through: European Coal and Steel Community (1951), European Economic Community (1957), Single European Act (1986), Maastricht Treaty (1992) creating EU, introduction of Euro (1999), and expansion to 27 members with increasing political integration."
      },
      {
        "level": 19,
        "difficulty": "Easy",
        "question": "What is the Euro?",
        "options": [
          "European military force",
          "Common currency of EU member countries",
          "European parliament",
          "European constitution"
        ],
        "correctAnswer": 2,
        "explanation": "The Euro is the common currency adopted by 19 EU member countries (Eurozone) since 1999. It represents deep economic integration, eliminates exchange rate fluctuations within the zone, and serves as an alternative to the US dollar in international transactions."
      },
      {
        "level": 20,
        "difficulty": "Medium",
        "question": "What are the main institutions of the European Union?",
        "options": [
          "Only the European Parliament",
          "European Commission, European Parliament, European Council, and Court of Justice",
          "Only the European Court",
          "Only economic institutions"
        ],
        "correctAnswer": 2,
        "explanation": "Main EU institutions include: European Commission (executive), European Parliament (directly elected legislature), European Council (heads of government), Council of Ministers (national ministers), European Court of Justice (judiciary), and European Central Bank (monetary policy)."
      },
      {
        "level": 21,
        "difficulty": "Easy",
        "question": "What challenges does the EU face?",
        "options": [
          "No challenges exist",
          "Brexit, migration crisis, economic disparities, and democratic deficit",
          "Only economic challenges",
          "Only political challenges"
        ],
        "correctAnswer": 2,
        "explanation": "EU faces several challenges: Brexit (UK's exit), migration and refugee crisis, economic disparities between rich and poor members, democratic deficit (gap between EU institutions and citizens), rise of Eurosceptic parties, and debates over further integration versus national sovereignty."
      },
      {
        "level": 22,
        "difficulty": "Medium",
        "question": "How does the EU influence world politics?",
        "options": [
          "Only through military power",
          "Through economic integration, diplomatic influence, and normative power",
          "Through cultural influence only",
          "It has no global influence"
        ],
        "correctAnswer": 2,
        "explanation": "EU influences world politics through: largest single market economy, major trading partner globally, diplomatic influence through multilateralism, normative power (promoting human rights, democracy, rule of law), development aid, and offering an alternative to US-led unilateralism."
      },
      {
        "level": 23,
        "difficulty": "Easy",
        "question": "What does ASEAN stand for?",
        "options": [
          "Asian Economic Community",
          "Association of Southeast Asian Nations",
          "Alliance of South Asian Nations",
          "Asian Security and Economic Network"
        ],
        "correctAnswer": 2,
        "explanation": "ASEAN stands for Association of Southeast Asian Nations, founded in 1967. It includes 10 member countries: Indonesia, Malaysia, Philippines, Singapore, Thailand, Brunei, Vietnam, Laos, Myanmar, and Cambodia, promoting regional cooperation and integration."
      },
      {
        "level": 24,
        "difficulty": "Medium",
        "question": "What is the 'ASEAN Way'?",
        "options": [
          "Military cooperation only",
          "Consensus-building, non-interference, and informal consultation",
          "Economic integration only",
          "Democratic governance"
        ],
        "correctAnswer": 2,
        "explanation": "The 'ASEAN Way' refers to ASEAN's unique approach to regional cooperation based on: consensus-building rather than voting, non-interference in internal affairs, informal consultation and dialogue, gradualism, and respect for sovereignty. This differs from more institutionalized approaches like the EU."
      },
      {
        "level": 25,
        "difficulty": "Easy",
        "question": "What are ASEAN's main areas of cooperation?",
        "options": [
          "Only economic cooperation",
          "Economic, political-security, and socio-cultural cooperation",
          "Only cultural cooperation",
          "Only security cooperation"
        ],
        "correctAnswer": 2,
        "explanation": "ASEAN cooperation covers three pillars: Economic Community (free trade, investment), Political-Security Community (conflict prevention, peacekeeping), and Socio-Cultural Community (education, environment, disaster management). The goal is comprehensive regional integration."
      },
      {
        "level": 26,
        "difficulty": "Medium",
        "question": "What is the significance of ASEAN Regional Forum (ARF)?",
        "options": [
          "Economic forum only",
          "Security dialogue forum including major powers",
          "Cultural exchange forum",
          "Trade negotiation forum"
        ],
        "correctAnswer": 2,
        "explanation": "ASEAN Regional Forum (ARF), established in 1994, is a security dialogue forum that includes ASEAN members plus major powers like USA, China, Russia, Japan, India. It promotes confidence-building, preventive diplomacy, and conflict resolution in Asia-Pacific region."
      },
      {
        "level": 27,
        "difficulty": "Easy",
        "question": "What does 'Look East' policy refer to?",
        "options": [
          "India's policy to face east while praying",
          "India's policy to strengthen ties with East and Southeast Asia",
          "India's policy to migrate eastward",
          "India's policy to learn eastern languages"
        ],
        "correctAnswer": 2,
        "explanation": "India's 'Look East' policy, launched in 1991 and later upgraded to 'Act East', aims to strengthen economic and strategic relations with East and Southeast Asian countries, particularly ASEAN members, to balance China's influence and integrate with dynamic Asian economies."
      },
      {
        "level": 28,
        "difficulty": "Medium",
        "question": "How has ASEAN's relationship with China evolved?",
        "options": [
          "Always antagonistic",
          "From suspicion to engagement with economic integration despite territorial disputes",
          "No relationship exists",
          "Only military cooperation"
        ],
        "correctAnswer": 2,
        "explanation": "ASEAN-China relations evolved from Cold War suspicion to comprehensive partnership. China became ASEAN's largest trading partner, but tensions exist over South China Sea territorial disputes. ASEAN maintains engagement while seeking to balance China's growing influence."
      },
      {
        "level": 29,
        "difficulty": "Easy",
        "question": "What is the Shanghai Cooperation Organization (SCO)?",
        "options": [
          "A trade organization",
          "A Eurasian political, economic and security organization",
          "An environmental group",
          "A cultural organization"
        ],
        "correctAnswer": 2,
        "explanation": "The Shanghai Cooperation Organization (SCO), founded in 2001, is a Eurasian political, economic, and security organization led by China and Russia. Members include Central Asian states, India, and Pakistan. It focuses on security cooperation and countering Western influence."
      },
      {
        "level": 30,
        "difficulty": "Medium",
        "question": "What are the main objectives of SCO?",
        "options": [
          "Only economic cooperation",
          "Security cooperation against terrorism, separatism, and extremism; economic cooperation",
          "Only cultural exchange",
          "Military alliance against the West"
        ],
        "correctAnswer": 2,
        "explanation": "SCO objectives include: combating terrorism, separatism, and religious extremism; promoting regional security; enhancing economic cooperation; energy cooperation; cultural exchanges; and providing an alternative to Western-dominated international organizations."
      },
      {
        "level": 31,
        "difficulty": "Easy",
        "question": "What does BRICS stand for?",
        "options": [
          "British, Russian, Indian, Chinese, South African alliance",
          "Brazil, Russia, India, China, South Africa",
          "Banking, Resources, Investment, Commerce, Security",
          "Baltic, Russian, Italian, Croatian, Serbian"
        ],
        "correctAnswer": 2,
        "explanation": "BRICS is an acronym for five major emerging economies: Brazil, Russia, India, China, and South Africa. Originally BRIC (2009), South Africa joined in 2010. These countries represent about 40% of world population and 25% of global GDP."
      },
      {
        "level": 32,
        "difficulty": "Medium",
        "question": "What is the significance of BRICS in global governance?",
        "options": [
          "No significance",
          "Alternative to Western-dominated institutions, South-South cooperation, multipolar world",
          "Only economic significance",
          "Military alliance only"
        ],
        "correctAnswer": 2,
        "explanation": "BRICS significance includes: alternative to Western-dominated global institutions, promoting South-South cooperation, advocating for multipolar world order, establishing New Development Bank as alternative to World Bank/IMF, representing emerging economies' interests in global governance."
      },
      {
        "level": 33,
        "difficulty": "Easy",
        "question": "What is the New Development Bank (NDB)?",
        "options": [
          "A private bank",
          "BRICS development bank established as alternative to World Bank",
          "A commercial bank",
          "An investment bank"
        ],
        "correctAnswer": 2,
        "explanation": "The New Development Bank (NDB), established by BRICS in 2014 and headquartered in Shanghai, provides development finance for infrastructure and sustainable development projects in BRICS and other developing countries, offering an alternative to World Bank and IMF."
      },
      {
        "level": 34,
        "difficulty": "Medium",
        "question": "How do regional organizations contribute to world order?",
        "options": [
          "They create conflicts only",
          "Provide alternatives to global hegemony, promote multipolarity, and regional stability",
          "They have no impact",
          "Only economic contribution"
        ],
        "correctAnswer": 2,
        "explanation": "Regional organizations contribute by: providing alternatives to global hegemony, promoting multipolar world order, enhancing regional cooperation and stability, giving smaller states collective bargaining power, promoting different models of governance and integration, and balancing global powers."
      },
      {
        "level": 35,
        "difficulty": "Easy",
        "question": "What is the concept of 'balance of power'?",
        "options": [
          "Equal distribution of wealth",
          "Distribution of power among states to prevent any one from dominating",
          "Balance between different branches of government",
          "Economic equilibrium"
        ],
        "correctAnswer": 2,
        "explanation": "Balance of power is a theory in international relations where stability is maintained through relatively equal distribution of power among major states or alliances, preventing any single state from dominating others. It can be achieved through alliances, arms buildups, or diplomatic means."
      },
      {
        "level": 36,
        "difficulty": "Medium",
        "question": "What is India's approach to contemporary world order?",
        "options": [
          "Alignment with USA only",
          "Strategic autonomy, multipolarity, multilateralism",
          "Alignment with China only",
          "Isolation from world affairs"
        ],
        "correctAnswer": 2,
        "explanation": "India's approach includes: strategic autonomy (independent foreign policy), promoting multipolarity over unipolarity, supporting multilateralism and reformed global institutions, engaging with all major powers while maintaining independence, and advocating for developing world interests."
      },
      {
        "level": 37,
        "difficulty": "Easy",
        "question": "What does 'security' mean in the contemporary world?",
        "options": [
          "Only military security",
          "Comprehensive security including military, economic, environmental, and human security",
          "Only economic security",
          "Only physical safety"
        ],
        "correctAnswer": 2,
        "explanation": "Contemporary security is comprehensive, including: military security (traditional threats), economic security (financial stability), environmental security (climate change), human security (poverty, disease, human rights), cyber security, and energy security. Threats are no longer just military."
      },
      {
        "level": 38,
        "difficulty": "Medium",
        "question": "What is the difference between traditional and non-traditional security threats?",
        "options": [
          "No difference exists",
          "Traditional: military threats from states; Non-traditional: terrorism, climate change, pandemics",
          "Traditional threats are less important",
          "Non-traditional threats are not real"
        ],
        "correctAnswer": 2,
        "explanation": "Traditional security threats involve military threats from other states, wars, nuclear weapons. Non-traditional threats include terrorism, climate change, pandemics, cyber attacks, migration, poverty, drug trafficking - these are often transnational and require cooperative responses."
      },
      {
        "level": 39,
        "difficulty": "Easy",
        "question": "What is terrorism?",
        "options": [
          "Any form of violence",
          "Use of violence by non-state actors to create fear for political goals",
          "State violence only",
          "Criminal activity only"
        ],
        "correctAnswer": 2,
        "explanation": "Terrorism is the deliberate use of violence or threat of violence by non-state actors against civilians to create fear, gain publicity, and achieve political, religious, or ideological objectives. It targets innocent people to influence government policies or public opinion."
      },
      {
        "level": 40,
        "difficulty": "Medium",
        "question": "What are the root causes of terrorism?",
        "options": [
          "Only religious extremism",
          "Political grievances, economic deprivation, ideological extremism, and social alienation",
          "Only poverty",
          "Only foreign intervention"
        ],
        "correctAnswer": 2,
        "explanation": "Root causes of terrorism include: unresolved political grievances, economic deprivation and inequality, ideological or religious extremism, social alienation and marginalization, foreign military interventions, weak governance, and radicalization through propaganda and networks."
      },
      {
        "level": 41,
        "difficulty": "Easy",
        "question": "What is human security?",
        "options": [
          "Security provided by humans",
          "Security of individual human beings from various threats to their well-being",
          "Security for security personnel",
          "Physical security only"
        ],
        "correctAnswer": 2,
        "explanation": "Human security focuses on protecting individuals from various threats including violence, poverty, disease, environmental degradation, and human rights violations. It shifts focus from state security to individual security and emphasizes 'freedom from fear' and 'freedom from want'."
      },
      {
        "level": 42,
        "difficulty": "Medium",
        "question": "What are the components of human security?",
        "options": [
          "Only economic security",
          "Economic, food, health, environmental, personal, community, and political security",
          "Only physical safety",
          "Only political security"
        ],
        "correctAnswer": 2,
        "explanation": "Human security components include: economic security (basic income), food security (access to food), health security (protection from diseases), environmental security (healthy environment), personal security (physical violence), community security (group identity), and political security (human rights)."
      },
      {
        "level": 43,
        "difficulty": "Easy",
        "question": "What is the 'Responsibility to Protect' (R2P) doctrine?",
        "options": [
          "Military's responsibility to protect borders",
          "International community's responsibility to protect populations from genocide and crimes against humanity",
          "Individual's responsibility for self-protection",
          "Government's responsibility to protect property"
        ],
        "correctAnswer": 2,
        "explanation": "R2P doctrine, adopted by UN in 2005, establishes that if a state fails to protect its population from genocide, war crimes, crimes against humanity, and ethnic cleansing, the international community has the responsibility to intervene, including through military force as last resort."
      },
      {
        "level": 44,
        "difficulty": "Medium",
        "question": "What are global commons?",
        "options": [
          "Common markets",
          "Areas beyond national jurisdiction like oceans, Antarctica, atmosphere, outer space",
          "Public parks",
          "Community centers"
        ],
        "correctAnswer": 2,
        "explanation": "Global commons are areas and resources beyond national sovereignty including high seas, Antarctica, atmosphere, outer space, and cyberspace. They belong to all humanity and require international cooperation for governance, but face challenges like overuse and pollution."
      },
      {
        "level": 45,
        "difficulty": "Easy",
        "question": "What is climate change as a security issue?",
        "options": [
          "It's not a security issue",
          "Environmental degradation that can cause conflicts over resources and displacement",
          "Only an environmental issue",
          "Only an economic issue"
        ],
        "correctAnswer": 2,
        "explanation": "Climate change poses security threats through: resource scarcity leading to conflicts, displacement of populations, food and water insecurity, extreme weather events, sea-level rise affecting island nations, and potential for climate wars over diminishing resources."
      },
      {
        "level": 46,
        "difficulty": "Medium",
        "question": "How does cooperation help address security challenges?",
        "options": [
          "Cooperation is not necessary",
          "Through collective action, information sharing, and multilateral institutions",
          "Only bilateral cooperation works",
          "Only military cooperation helps"
        ],
        "correctAnswer": 2,
        "explanation": "Cooperation addresses security challenges through: collective action against common threats, intelligence and information sharing, multilateral institutions and agreements, coordinated responses to transnational threats, burden-sharing, and building trust and confidence among states."
      },
      {
        "level": 47,
        "difficulty": "Easy",
        "question": "What is India's security strategy?",
        "options": [
          "Only military buildup",
          "Comprehensive approach including defense, diplomacy, and development",
          "Alliance with superpowers only",
          "Isolation from neighbors"
        ],
        "correctAnswer": 2,
        "explanation": "India's security strategy includes: military modernization and nuclear deterrence, diplomatic engagement and strategic partnerships, economic development as foundation of security, addressing internal security challenges, neighborhood first policy, and multilateral engagement."
      },
      {
        "level": 48,
        "difficulty": "Medium",
        "question": "What are India's major security challenges?",
        "options": [
          "Only external threats",
          "Cross-border terrorism, border disputes, internal insurgencies, and cyber threats",
          "Only internal threats",
          "No major challenges"
        ],
        "correctAnswer": 2,
        "explanation": "India's major security challenges include: cross-border terrorism from Pakistan, border disputes with China and Pakistan, internal insurgencies (Naxalism, Northeast), communal tensions, cyber security threats, maritime security in Indian Ocean, and nuclear security in volatile neighborhood."
      },
      {
        "level": 49,
        "difficulty": "Easy",
        "question": "What is meant by 'environment' in political context?",
        "options": [
          "Only natural surroundings",
          "Political, social, and natural environment affecting governance and policies",
          "Only pollution",
          "Only climate"
        ],
        "correctAnswer": 2,
        "explanation": "Environment in political context encompasses: natural environment (resources, climate, biodiversity), political environment (institutions, policies, governance), social environment (public opinion, civil society), and their interactions affecting policy-making and implementation."
      },
      {
        "level": 50,
        "difficulty": "Medium",
        "question": "What is the relationship between environment and development?",
        "options": [
          "No relationship exists",
          "Complex relationship involving trade-offs and potential for sustainable development",
          "Always conflicting",
          "Always complementary"
        ],
        "correctAnswer": 2,
        "explanation": "Environment-development relationship involves: potential conflicts (industrialization vs. pollution), trade-offs (economic growth vs. environmental protection), opportunities for sustainable development, need for balance between present needs and future generations, and role of technology and policies."
      },
      {
        "level": 51,
        "difficulty": "Easy",
        "question": "What was the 1972 Stockholm Conference?",
        "options": [
          "A peace conference",
          "First major international conference on environment",
          "An economic summit",
          "A cultural conference"
        ],
        "correctAnswer": 2,
        "explanation": "The 1972 Stockholm Conference (UN Conference on Human Environment) was the first major international conference on environmental issues. It established principles for environmental protection, created UNEP, and marked the beginning of global environmental governance."
      },
         {
        "level": 52,
        "difficulty": "Medium",
        "question": "What is the significance of the 1992 Rio Earth Summit?",
        "options": [
          "Only about climate change",
          "Established sustainable development framework and key environmental conventions",
          "Only about biodiversity",
          "Only about deforestation"
        ],
        "correctAnswer": 2,
        "explanation": "The 1992 Rio Earth Summit was crucial for establishing sustainable development as global framework, adopting Agenda 21 (action plan for sustainable development), creating UN Framework Convention on Climate Change, Convention on Biological Diversity, and promoting integration of environment and development."
      },
      {
        "level": 53,
        "difficulty": "Easy",
        "question": "What is sustainable development?",
        "options": [
          "Development without any growth",
          "Development that meets present needs without compromising future generations",
          "Only environmental protection",
          "Only economic development"
        ],
        "correctAnswer": 2,
        "explanation": "Sustainable development, as defined by Brundtland Commission (1987), is 'development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' It integrates economic, social, and environmental dimensions."
      },
      {
        "level": 54,
        "difficulty": "Medium",
        "question": "What are the three pillars of sustainable development?",
        "options": [
          "Air, water, land",
          "Economic, social, and environmental sustainability",
          "Past, present, future",
          "Local, national, global"
        ],
        "correctAnswer": 2,
        "explanation": "The three pillars of sustainable development are: Economic sustainability (viable economic growth), Social sustainability (equity, justice, human welfare), and Environmental sustainability (ecological integrity, resource conservation). All three must be balanced for true sustainability."
      },
      {
        "level": 55,
        "difficulty": "Easy",
        "question": "What is the Kyoto Protocol?",
        "options": [
          "A trade agreement",
          "International agreement to reduce greenhouse gas emissions",
          "A peace treaty",
          "A cultural exchange program"
        ],
        "correctAnswer": 2,
        "explanation": "The Kyoto Protocol (1997) is an international agreement under the UN Framework Convention on Climate Change that commits industrialized countries to reduce greenhouse gas emissions. It introduced legally binding emission reduction targets for developed countries."
      },
      {
        "level": 56,
        "difficulty": "Medium",
        "question": "What is the principle of 'Common But Differentiated Responsibilities' (CBDR)?",
        "options": [
          "All countries have same responsibilities",
          "Developed countries have greater responsibility for environmental problems due to historical emissions",
          "Only developing countries are responsible",
          "No country has any responsibility"
        ],
        "correctAnswer": 2,
        "explanation": "CBDR principle recognizes that while all countries share responsibility for environmental problems, developed countries bear greater responsibility due to their historical contribution to environmental degradation and their greater capacity to address these problems."
      },
      {
        "level": 57,
        "difficulty": "Easy",
        "question": "What is the Paris Agreement?",
        "options": [
          "A trade deal",
          "2015 climate agreement to limit global warming to below 2°C",
          "A peace treaty",
          "An economic cooperation agreement"
        ],
        "correctAnswer": 2,
        "explanation": "The Paris Agreement (2015) is a global climate accord that aims to limit global warming to well below 2°C above pre-industrial levels, with efforts to limit it to 1.5°C. Unlike Kyoto Protocol, it includes all countries with nationally determined contributions."
      },
      {
        "level": 58,
        "difficulty": "Medium",
        "question": "What are India's environmental challenges?",
        "options": [
          "No environmental challenges",
          "Air pollution, water scarcity, deforestation, waste management, and climate change impacts",
          "Only air pollution",
          "Only water issues"
        ],
        "correctAnswer": 2,
        "explanation": "India faces multiple environmental challenges: severe air pollution in cities, water scarcity and pollution, deforestation and land degradation, solid waste management crisis, climate change impacts (extreme weather, sea level rise), and biodiversity loss."
      },
      {
        "level": 59,
        "difficulty": "Easy",
        "question": "What is the Chipko Movement?",
        "options": [
          "A political movement",
          "Environmental movement to protect forests by hugging trees",
          "An economic protest",
          "A cultural movement"
        ],
        "correctAnswer": 2,
        "explanation": "The Chipko Movement (1970s) was a forest conservation movement in Uttarakhand where villagers, especially women, hugged trees to prevent their felling. It symbolized grassroots environmental activism and sustainable forest management, inspiring global environmental movements."
      },
      {
        "level": 60,
        "difficulty": "Medium",
        "question": "What is India's approach to global environmental governance?",
        "options": [
          "India opposes all environmental agreements",
          "Balancing development needs with environmental protection, advocating for CBDR principle",
          "Only focusing on economic growth",
          "Following developed countries' policies"
        ],
        "correctAnswer": 2,
        "explanation": "India's approach includes: advocating for CBDR principle, balancing development needs with environmental commitments, leading initiatives like International Solar Alliance, promoting South-South cooperation on environmental issues, and emphasizing technology transfer and climate finance."
      },
      {
        "level": 61,
        "difficulty": "Easy",
        "question": "What is meant by 'challenges to democracy'?",
        "options": [
          "Democracy has no challenges",
          "Various threats and problems that can undermine democratic systems",
          "Only external threats",
          "Only economic challenges"
        ],
        "correctAnswer": 2,
        "explanation": "Challenges to democracy include internal threats (corruption, communalism, criminalization of politics, poverty) and external threats (authoritarianism, terrorism, foreign interference) that can undermine democratic institutions, processes, and values."
      },
      {
        "level": 62,
        "difficulty": "Medium",
        "question": "What is the 'deepening of democracy'?",
        "options": [
          "Making democracy more complex",
          "Strengthening democratic institutions and expanding democratic participation",
          "Reducing democratic processes",
          "Only electoral reforms"
        ],
        "correctAnswer": 2,
        "explanation": "Deepening of democracy involves: strengthening democratic institutions, expanding citizen participation, improving transparency and accountability, protecting rights of minorities and marginalized groups, enhancing civil society role, and making democracy more responsive to people's needs."
      },
      {
        "level": 63,
        "difficulty": "Easy",
        "question": "What is corruption in political context?",
        "options": [
          "Only financial irregularities",
          "Abuse of public office for private gain",
          "Any mistake by officials",
          "Only bribery"
        ],
        "correctAnswer": 2,
        "explanation": "Corruption is the abuse of entrusted power for private gain. It includes bribery, embezzlement, nepotism, cronyism, and other forms of misuse of public office. It undermines democracy by distorting decision-making and reducing public trust in institutions."
      },
      {
        "level": 64,
        "difficulty": "Medium",
        "question": "How does corruption challenge democracy?",
        "options": [
          "It doesn't affect democracy",
          "Undermines equality, reduces trust, distorts policy-making, and weakens institutions",
          "Only affects economic growth",
          "Only affects international relations"
        ],
        "correctAnswer": 2,
        "explanation": "Corruption challenges democracy by: undermining principle of equality before law, reducing public trust in institutions, distorting policy-making in favor of corrupt interests, weakening rule of law, creating barriers for honest politicians and citizens, and perpetuating inequality."
      },
      {
        "level": 65,
        "difficulty": "Easy",
        "question": "What is communalism?",
        "options": [
          "Community development",
          "Politics based on religious identity that divides people",
          "Social service",
          "Economic cooperation"
        ],
        "correctAnswer": 2,
        "explanation": "Communalism is a political ideology that uses religious identity as the primary basis for political organization and mobilization. It promotes the interests of one religious community, often in opposition to others, and can lead to social divisions and conflicts."
      },
      {
        "level": 66,
        "difficulty": "Medium",
        "question": "How does communalism threaten secular democracy?",
        "options": [
          "It strengthens democracy",
          "Divides society on religious lines, undermines secularism, and can lead to violence",
          "It has no effect",
          "Only affects minorities"
        ],
        "correctAnswer": 2,
        "explanation": "Communalism threatens secular democracy by: dividing society on religious lines, undermining secular principles of state, polarizing political discourse, marginalizing minorities, creating vote banks based on religion, and potentially leading to communal violence and discrimination."
      },
      {
        "level": 67,
        "difficulty": "Easy",
        "question": "What is meant by 'criminalization of politics'?",
        "options": [
          "Making politics illegal",
          "Increasing participation of people with criminal backgrounds in politics",
          "Criminalizing political activities",
          "Police involvement in politics"
        ],
        "correctAnswer": 2,
        "explanation": "Criminalization of politics refers to the increasing participation of people with criminal backgrounds in electoral politics as candidates or the use of criminal methods (violence, intimidation, illegal funding) in political processes."
      },
      {
        "level": 68,
        "difficulty": "Medium",
        "question": "What are the causes of criminalization of politics?",
        "options": [
          "Only poverty",
          "Weak law enforcement, money power, vote bank politics, and ineffective electoral system",
          "Only illiteracy",
          "Only caste system"
        ],
        "correctAnswer": 2,
        "explanation": "Causes include: weak and delayed law enforcement, role of money power in elections, vote bank politics rewarding divisive leaders, ineffective electoral system, nexus between criminals and politicians, and social acceptance of 'strongmen' who can 'get things done'."
      },
      {
        "level": 69,
        "difficulty": "Easy",
        "question": "What reforms can strengthen democracy?",
        "options": [
          "No reforms needed",
          "Electoral reforms, transparency measures, judicial reforms, and citizen participation",
          "Only economic reforms",
          "Only constitutional amendments"
        ],
        "correctAnswer": 2,
        "explanation": "Democratic reforms include: electoral reforms (campaign finance, candidate disclosure), transparency measures (RTI, e-governance), judicial reforms (fast-track courts), decentralization (local governance), civil society strengthening, and promoting civic education and political awareness."
      },
      {
        "level": 70,
        "difficulty": "Medium",
        "question": "What is the role of civil society in democracy?",
        "options": [
          "No role in democracy",
          "Watchdog function, advocacy, service delivery, and citizen participation",
          "Only service delivery",
          "Only protest and criticism"
        ],
        "correctAnswer": 2,
        "explanation": "Civil society's role includes: watchdog function over government, advocacy for policy changes, service delivery especially to marginalized groups, promoting citizen participation, civic education, protecting rights, and acting as intermediary between state and citizens."
      },
      {
        "level": 71,
        "difficulty": "Easy",
        "question": "What is the Right to Information (RTI) Act?",
        "options": [
          "Right to information from media",
          "Citizens' right to access government information for transparency",
          "Right to free internet",
          "Right to education"
        ],
        "correctAnswer": 2,
        "explanation": "The RTI Act (2005) gives citizens the right to access information held by public authorities, promoting transparency and accountability in governance. It empowers citizens to seek information about government decisions, expenditure, and functioning."
      },
      {
        "level": 72,
        "difficulty": "Medium",
        "question": "How does RTI strengthen democracy?",
        "options": [
          "It doesn't affect democracy",
          "Promotes transparency, accountability, citizen participation, and reduces corruption",
          "Only helps journalists",
          "Only creates problems for government"
        ],
        "correctAnswer": 2,
        "explanation": "RTI strengthens democracy by: promoting transparency in government functioning, ensuring accountability of public officials, enabling informed citizen participation, reducing corruption through scrutiny, empowering citizens to hold government accountable, and improving quality of governance."
      },
      {
        "level": 73,
        "difficulty": "Easy",
        "question": "What are democratic movements?",
        "options": [
          "Only electoral campaigns",
          "Popular struggles to establish, restore, or improve democracy",
          "Government programs",
          "International interventions"
        ],
        "correctAnswer": 2,
        "explanation": "Democratic movements are popular struggles by citizens to establish democracy (anti-colonial movements), restore democracy (anti-authoritarian movements), or improve democracy (movements for rights, reforms, and better governance)."
      },
      {
        "level": 74,
        "difficulty": "Medium",
        "question": "What was the Chipko Movement's impact on democratic participation?",
        "options": [
          "No impact on democracy",
          "Demonstrated grassroots participation, environmental consciousness, and people's power",
          "Only environmental impact",
          "Only economic impact"
        ],
        "correctAnswer": 2,
        "explanation": "Chipko Movement demonstrated: grassroots democratic participation, power of non-violent resistance, environmental consciousness among masses, women's leadership in social movements, and effectiveness of people's movements in influencing policy and protecting local interests."
      },
      {
        "level": 75,
        "difficulty": "Easy",
        "question": "What is the anti-arrack movement?",
        "options": [
          "Movement against foreign goods",
          "Women's movement against alcohol in Andhra Pradesh",
          "Movement against taxes",
          "Movement against corruption"
        ],
        "correctAnswer": 2,
        "explanation": "The anti-arrack movement was a grassroots women's movement in Andhra Pradesh against the sale and consumption of arrack (local liquor). Women organized to close down liquor shops, demonstrating collective action and women's agency in addressing social problems."
      },
      {
        "level": 76,
        "difficulty": "Medium",
        "question": "What lessons do democratic movements teach us?",
        "options": [
          "Only governments can create change",
          "People's participation can bring change, importance of collective action, and need for sustained struggle",
          "Movements always fail",
          "Only violent movements succeed"
        ],
        "correctAnswer": 2,
        "explanation": "Democratic movements teach: people's participation can bring significant change, importance of collective action and solidarity, need for sustained struggle and persistence, power of non-violent resistance, role of leadership and organization, and that democracy is an ongoing process requiring constant vigilance."
      },
      {
        "level": 77,
        "difficulty": "Easy",
        "question": "What is the Narmada Bachao Andolan?",
        "options": [
          "A cultural movement",
          "Movement against large dams on Narmada river",
          "An educational movement",
          "A political party"
        ],
        "correctAnswer": 2,
        "explanation": "Narmada Bachao Andolan (NBA) is a movement against large dams on the Narmada river, particularly the Sardar Sarovar Project. Led by Medha Patkar, it highlights issues of displacement, environmental degradation, and rights of tribal communities affected by development projects."
      },
      {
        "level": 78,
        "difficulty": "Medium",
        "question": "What democratic principles does NBA represent?",
        "options": [
          "No democratic principles",
          "Participation, dissent, environmental justice, and rights of marginalized communities",
          "Only environmental protection",
          "Only opposition to development"
        ],
        "correctAnswer": 2,
        "explanation": "NBA represents: right to participation in decisions affecting people's lives, democratic dissent against government policies, environmental and social justice, rights of marginalized tribal communities, sustainable development, and questioning top-down development models."
      },
      {
        "level": 79,
        "difficulty": "Easy",
        "question": "What is a pressure group?",
        "options": [
          "A violent organization",
          "Organization that seeks to influence government policy without contesting elections",
          "A political party",
          "A government agency"
        ],
        "correctAnswer": 2,
        "explanation": "Pressure groups are organized groups that seek to influence government policy and decision-making without directly contesting elections. They represent specific interests and use methods like lobbying, protests, and advocacy to achieve their goals."
      },
      {
        "level": 80,
        "difficulty": "Medium",
        "question": "How do pressure groups contribute to democracy?",
        "options": [
          "They harm democracy",
          "Represent diverse interests, provide information, ensure accountability, and enhance participation",
          "Only create problems",
          "Replace political parties"
        ],
        "correctAnswer": 2,
        "explanation": "Pressure groups contribute to democracy by: representing diverse sectoral interests, providing specialized information to policymakers, ensuring government accountability, enhancing citizen participation, giving voice to minorities and marginalized groups, and acting as check on government power."
      },
      {
        "level": 81,
        "difficulty": "Easy",
        "question": "What is globalization?",
        "options": [
          "Only economic integration",
          "Interconnectedness of countries through economic, political, and cultural exchange",
          "Only technological advancement",
          "Only trade liberalization"
        ],
        "correctAnswer": 2,
        "explanation": "Globalization is the process of increasing interconnectedness and interdependence among countries through economic integration (trade, investment), political cooperation, cultural exchange, and technological advancement, creating a more integrated world."
      },
      {
        "level": 82,
        "difficulty": "Medium",
        "question": "What are the main features of economic globalization?",
        "options": [
          "Only free trade",
          "Free trade, capital mobility, technology transfer, and global production networks",
          "Only foreign investment",
          "Only multinational corporations"
        ],
        "correctAnswer": 2,
        "explanation": "Economic globalization features include: free trade in goods and services, free movement of capital and investment, technology transfer and innovation diffusion, global production networks and supply chains, emergence of multinational corporations, and integration of financial markets."
      },
      {
        "level": 83,
        "difficulty": "Easy",
        "question": "What is political globalization?",
        "options": [
          "World government",
          "Increasing political cooperation and governance beyond national borders",
          "End of nation-states",
          "Global democracy"
        ],
        "correctAnswer": 2,
        "explanation": "Political globalization involves: increasing political cooperation between nations, emergence of global governance institutions (UN, WTO, etc.), international law and treaties, regional organizations, global civil society, and collective responses to transnational challenges."
      },
      {
        "level": 84,
        "difficulty": "Medium",
        "question": "What is cultural globalization?",
        "options": [
          "Loss of all local cultures",
          "Spread of ideas, values, and cultural practices across borders",
          "Only Western cultural dominance",
          "Uniform global culture"
        ],
        "correctAnswer": 2,
        "explanation": "Cultural globalization involves: spread of ideas, values, and cultural practices across borders, global media and communication, cultural hybridization (mixing of cultures), emergence of global cultural icons, but also cultural resistance and revival of local identities."
      },
      {
        "level": 85,
        "difficulty": "Easy",
        "question": "What are the positive effects of globalization?",
        "options": [
          "No positive effects",
          "Economic growth, technology transfer, cultural exchange, and global cooperation",
          "Only for developed countries",
          "Only economic benefits"
        ],
        "correctAnswer": 2,
        "explanation": "Positive effects include: economic growth and job creation, technology and knowledge transfer, cultural exchange and diversity, global cooperation on common challenges, access to global markets and resources, improved communication and connectivity."
      },
      {
        "level": 86,
        "difficulty": "Medium",
        "question": "What are the criticisms of globalization?",
        "options": [
          "No criticisms exist",
          "Increases inequality, threatens local cultures, environmental degradation, and weakens state sovereignty",
          "Only economic criticisms",
          "Only cultural criticisms"
        ],
        "correctAnswer": 2,
        "explanation": "Criticisms include: increases inequality between and within countries, threatens local cultures and identities, environmental degradation, weakens state sovereignty and democratic control, job losses in certain sectors, and dominance of powerful countries and corporations."
      },
      {
        "level": 87,
        "difficulty": "Easy",
        "question": "How has globalization affected India?",
        "options": [
          "No effect on India",
          "Economic liberalization, IT growth, cultural changes, and increased global integration",
          "Only negative effects",
          "Only positive effects"
        ],
        "correctAnswer": 2,
        "explanation": "Globalization's impact on India includes: economic liberalization since 1991, growth of IT and service sectors, increased foreign investment, cultural changes and consumerism, greater global integration, but also challenges like farmer distress and inequality."
      },
      {
        "level": 88,
        "difficulty": "Medium",
        "question": "What is the debate about globalization and state sovereignty?",
        "options": [
          "No debate exists",
          "Whether globalization weakens state power and democratic control over national policies",
          "States are becoming stronger",
          "Globalization only strengthens states"
        ],
        "correctAnswer": 2,
        "explanation": "The debate centers on whether globalization: weakens state sovereignty by constraining policy choices, reduces democratic control as decisions move to global level, forces states to adopt similar policies, versus arguments that states adapt and retain significant power and autonomy."
      },
      {
        "level": 89,
        "difficulty": "Easy",
        "question": "What is resistance to globalization?",
        "options": [
          "Supporting globalization",
          "Opposition to negative effects of globalization through various movements and policies",
          "Accepting all aspects of globalization",
          "Only government opposition"
        ],
        "correctAnswer": 2,
        "explanation": "Resistance to globalization includes: social movements opposing negative effects, alternative globalization movements promoting fair trade and social justice, government policies to protect domestic interests, cultural movements to preserve local identities, and calls for reformed global governance."
      },
      {
        "level": 90,
        "difficulty": "Medium",
        "question": "What is the future of globalization?",
        "options": [
          "It will completely end",
          "Likely continued evolution with reforms, regulation, and balance between global and local needs",
          "It will remain unchanged",
          "Only economic globalization will continue"
        ],
        "correctAnswer": 2,
        "explanation": "The future likely involves: continued but reformed globalization, better regulation of global markets, greater attention to inequality and sustainability, strengthened global governance institutions, balance between global integration and local autonomy, and more inclusive forms of globalization."
      },
      {
        "level": 91,
        "difficulty": "Easy",
        "question": "What was the 'Cold War'?",
        "options": [
          "A military conflict fought in cold regions.",
          "A series of direct wars between the US and the USSR.",
          "A period of geopolitical tension, ideological conflict, and proxy wars between the US-led Western Bloc and the USSR-led Eastern Bloc.",
          "A trade war between European countries."
        ],
        "correctAnswer": 3,
        "explanation": "The Cold War (approx. 1947–1991) was not a direct 'hot' war between the two superpowers, the USA (representing capitalism and democracy) and the USSR (representing communism). Instead, it was an intense ideological struggle characterized by a nuclear arms race, proxy wars in countries like Korea, Vietnam, and Afghanistan, espionage, and competition for global influence. The world was divided into two major power blocs: the Western Bloc led by the US (forming the NATO military alliance) and the Eastern Bloc led by the USSR (forming the Warsaw Pact)."
      },
      {
        "level": 92,
        "difficulty": "Medium",
        "question": "What was the Cuban Missile Crisis of 1962?",
        "options": [
          "A dispute over sugar trade between the US and Cuba.",
          "A US invasion of Cuba to overthrow Fidel Castro.",
          "A direct military conflict between the US and USSR in Cuba.",
          "A tense confrontation after the USSR placed nuclear missiles in Cuba, bringing the world to the brink of nuclear war."
        ],
        "correctAnswer": 4,
        "explanation": "The Cuban Missile Crisis is considered the high point of the Cold War. In 1962, the Soviet Union, under leader Nikita Khrushchev, began secretly deploying nuclear missiles in Cuba, just 90 miles from the US coast. This was in response to the US placing missiles in Turkey. When US surveillance discovered the sites, US President John F. Kennedy imposed a naval quarantine around Cuba. After a tense 13-day standoff, the crisis was resolved when the USSR agreed to remove the missiles in exchange for a US pledge not to invade Cuba and a secret agreement to remove US missiles from Turkey. It was the closest the world has ever come to a full-scale nuclear war."
      },
      {
        "level": 93,
        "difficulty": "Easy",
        "question": "What was the primary objective of the Non-Aligned Movement (NAM)?",
        "options": [
          "To form a third military bloc to fight both the US and the USSR.",
          "To promote communism worldwide.",
          "To allow newly independent countries of Asia and Africa to stay out of the two major Cold War military alliances.",
          "To create a global free-trade zone."
        ],
        "correctAnswer": 3,
        "explanation": "The Non-Aligned Movement (NAM) was founded in 1961 in Belgrade, with key founding leaders like India's Jawaharlal Nehru, Egypt's Gamal Abdel Nasser, and Yugoslavia's Josip Broz Tito. Its main purpose was to provide a path for newly decolonized countries in Asia, Africa, and Latin America to assert their independence on the world stage without having to join either the US-led NATO or the Soviet-led Warsaw Pact. It was not about isolationism but about maintaining an independent foreign policy and advocating for peace and cooperation."
      },
      {
        "level": 94,
        "difficulty": "Medium",
        "question": "What was 'Shock Therapy' in the post-Soviet era?",
        "options": [
          "A medical procedure developed in Russia.",
          "A gradual transition from communism to capitalism.",
          "An abrupt and radical transition from a state-controlled communist economy to a free-market capitalist economy.",
          "A military doctrine used by Russia."
        ],
        "correctAnswer": 3,
        "explanation": "'Shock Therapy' was the model of economic transition adopted by Russia and many other post-Soviet states in the 1990s, influenced by the IMF and World Bank. It involved a sudden and painful shift from the old authoritarian-socialist system to a democratic-capitalist one. Key features included the immediate deregulation of prices, privatization of state-owned industries, and opening up to foreign trade. The results were disastrous for the general population, leading to the collapse of industries, hyperinflation, rising inequality, and the sale of valuable state assets to private individuals at throwaway prices, creating a new class of oligarchs. This was the 'largest garage sale in history'."
      },
      {
        "level": 95,
        "difficulty": "Medium",
        "question": "Which event is commonly seen as the symbolic end of the Cold War and the beginning of the end of bipolarity?",
        "options": [
          "The victory of the US in the Vietnam War.",
          "The formation of the European Union.",
          "The fall of the Berlin Wall in 1989.",
          "The first Gulf War in 1990."
        ],
        "correctAnswer": 3,
        "explanation": "The fall of the Berlin Wall on November 9, 1989, is the most powerful symbol of the end of the Cold War. The wall had physically and ideologically divided East (communist) and West (capitalist) Berlin since 1961. Its fall, followed by the unification of Germany in 1990 and the subsequent disintegration of the Soviet Union in 1991, marked the definitive end of the bipolar world order dominated by the two superpowers."
      },
      {
        "level": 96,
        "difficulty": "Easy",
        "question": "What is meant by US 'hegemony'?",
        "options": [
          "The cultural diversity of the United States.",
          "The US policy of isolationism.",
          "The dominance of the United States in the political, economic, and cultural spheres of the world.",
          "The US system of federal government."
        ],
        "correctAnswer": 3,
        "explanation": "Hegemony refers to the leadership or dominance of one state over others. After the collapse of the Soviet Union, the world became unipolar, with the US as the sole superpower. US hegemony can be understood in three forms: \n1. **Hegemony as Hard Power**: Unmatched US military capability and the willingness to use it. \n2. **Hegemony as Structural Power**: US control over the global economic structure, including its role in key international economic institutions like the World Bank and IMF, and its promotion of the global public goods like sea lanes of communication (SLOCs) and the Internet. \n3. **Hegemony as Soft Power**: The cultural and ideological appeal of the US 'American dream', which makes others want to emulate its model, thereby shaping their preferences and consent."
      },
      {
        "level": 97,
        "difficulty": "Medium",
        "question": "What is the primary goal of the European Union (EU)?",
        "options": [
          "To act as a military alliance against Russia.",
          "To create a unified political and economic bloc with a common foreign policy, currency, and market.",
          "To promote a single European language.",
          "To manage trade only between European nations."
        ],
        "correctAnswer": 2,
        "explanation": "The European Union evolved from an economic community (EEC, 1957) into a full-fledged political and economic union (Maastricht Treaty, 1992). Its goals are to promote peace, its values, and the well-being of its citizens. It functions as a single market, allowing free movement of goods, services, capital, and people. It has a common currency (the Euro), a parliament, and aims to have a Common Foreign and Security Policy, making it a powerful alternative center of power in world politics."
      },
      {
        "level": 98,
        "difficulty": "Medium",
        "question": "What is the main purpose of ASEAN (Association of Southeast Asian Nations)?",
        "options": [
          "To form a military pact against China.",
          "Primarily to accelerate economic growth, social progress, and cultural development through cooperation, while promoting regional peace and stability.",
          "To establish a common currency for Southeast Asia.",
          "To create a political union similar to the EU."
        ],
        "correctAnswer": 2,
        "explanation": "ASEAN was established in 1967. Unlike the EU, it is not a supranational organization aiming for political integration. Its objectives are primarily economic and social. The 'ASEAN Way' is a form of interaction that is informal, non-confrontationist, and cooperative. ASEAN has established an ASEAN Community comprising three pillars: the ASEAN Security Community, the ASEAN Economic Community, and the ASEAN Socio-Cultural Community, making it a significant regional power."
      },
      {
        "level": 99,
        "difficulty": "Easy",
        "question": "What has been the most contentious issue between India and Pakistan since independence?",
        "options": [
          "River water sharing.",
          "Trade disputes.",
          "The issue of Kashmir.",
          "Cultural exchanges."
        ],
        "correctAnswer": 3,
        "explanation": "The dispute over the former princely state of Jammu and Kashmir has been the central and most persistent conflict between India and Pakistan. It has led to three major wars (1947-48, 1965, 1999) and numerous smaller conflicts. Pakistan's support for cross-border terrorism and separatist movements in the region remains a major point of contention. Other issues like the Siachen glacier, river water sharing (largely managed by the Indus Waters Treaty), and trade exist, but Kashmir remains the core issue."
      },
      {
        "level": 100,
        "difficulty": "Hard",
        "question": "What is the primary function of the UN Security Council (UNSC)?",
        "options": [
          "To manage the UN's budget.",
          "To promote human rights globally.",
          "The maintenance of international peace and security.",
          "To provide loans to developing countries."
        ],
        "correctAnswer": 3,
        "explanation": "The UN Security Council is the most powerful organ of the United Nations. Its primary responsibility is the maintenance of international peace and security. It has 15 members: 5 permanent members (P5) – China, France, Russia, the UK, and the US – and 10 non-permanent members elected for two-year terms. The P5 hold the 'veto power', meaning any one of them can block a resolution. The UNSC can pass binding resolutions, impose sanctions, and authorize the use of military force. Its structure is a major point of debate in UN reform discussions."
      },
      {
        "level": 101,
        "difficulty": "Medium",
        "question": "What is the difference between 'traditional' and 'non-traditional' notions of security?",
        "options": [
          "Traditional security focuses on old weapons, while non-traditional focuses on new weapons.",
          "Traditional security refers to military threats from other states, while non-traditional security refers to threats like terrorism, poverty, and climate change.",
          "Traditional security is about protecting the state, while non-traditional is about protecting the government.",
          "There is no difference."
        ],
        "correctAnswer": 2,
        "explanation": "This is a key concept in security studies: \n- **Traditional Security**: The referent object is the state. The primary threat is military aggression from another state, threatening the state's core values of sovereignty, independence, and territorial integrity. The response is military action, deterrence, and alliances. \n- **Non-Traditional Security**: The referent object is broadened to include individuals, humanity, and the planet. Threats are not just military but include terrorism, human rights violations, global poverty, health epidemics (like AIDS, COVID-19), and environmental degradation. The response requires international cooperation, not just military force."
      },
      {
        "level": 102,
        "difficulty": "Hard",
        "question": "What does the principle of 'common but differentiated responsibilities' mean in the context of environmental protection?",
        "options": [
          "All countries have a common responsibility, and all must bear the same costs.",
          "Developed countries have no responsibility for environmental protection.",
          "All countries share a common responsibility, but developed countries, being historically more responsible for degradation, should bear greater responsibility.",
          "Only developing countries are responsible for protecting the environment."
        ],
        "correctAnswer": 3,
        "explanation": "This principle, accepted at the 1992 Rio Earth Summit, acknowledges that all states have a shared responsibility (common responsibility) to protect the global environment. However, it also recognizes that the historical contribution to environmental problems (like greenhouse gas emissions) has been much greater from developed countries. Therefore, developed countries (the Global North) have a greater responsibility (differentiated responsibilities) to take the lead in addressing these issues and should provide financial and technological support to developing countries (the Global South) to help them transition to sustainable practices."
      },
      {
        "level": 103,
        "difficulty": "Easy",
        "question": "What is globalisation?",
        "options": [
          "The process of making globes.",
          "A political ideology focused on world government.",
          "The increasing flow and integration of ideas, capital, commodities, and people across the globe.",
          "A policy of economic protectionism."
        ],
        "correctAnswer": 3,
        "explanation": "Globalisation is a multidimensional concept referring to the intensification of worldwide social relations which link distant localities in such a way that local happenings are shaped by events occurring many miles away and vice versa. It is characterized by increasing flows and integration across borders. This includes: \n- **Economic Globalisation**: Increased trade and flow of capital. \n- **Political Globalisation**: Diminished role of the state and rise of international institutions. \n- **Cultural Globalisation**: Spread of ideas and cultures (e.g., American fast food, Bollywood films), leading to both cultural homogenisation and heterogenisation."
      },
      {
        "level": 104,
        "difficulty": "Medium",
        "question": "What were the three major challenges facing India immediately after independence in 1947?",
        "options": [
          "Conducting elections, writing a constitution, and building a military.",
          "Fighting the British, forming political parties, and managing the economy.",
          "To shape a united nation, to establish democracy, and to ensure the development and well-being of the entire society.",
          "Building industries, establishing schools, and creating a foreign policy."
        ],
        "correctAnswer": 3,
        "explanation": "Immediately after independence, India faced three monumental challenges: \n1. **The Challenge of Nation-Building**: India was a land of immense diversity. The immediate task was to forge a united nation out of this diversity, especially in the wake of the trauma of Partition and the difficult task of integrating over 565 princely states. \n2. **The Challenge of Establishing Democracy**: The Constitution had granted fundamental rights and universal adult franchise, but the challenge was to develop democratic practices and institutions in a society that was largely poor and illiterate. \n3. **The Challenge of Development**: The government had to devise policies for economic development and poverty alleviation to ensure the well-being of all citizens, not just a select few."
      },
      {
        "level": 105,
        "difficulty": "Easy",
        "question": "Who played the most crucial role in the integration of princely states into the Indian Union?",
        "options": [
          "Jawaharlal Nehru",
          "Mahatma Gandhi",
          "Sardar Vallabhbhai Patel",
          "Dr. B.R. Ambedkar"
        ],
        "correctAnswer": 3,
        "explanation": "Sardar Vallabhbhai Patel, India's first Deputy Prime Minister and Home Minister, played the key role in the integration of the princely states. At independence, the British gave the 565 princely states the choice to join India, join Pakistan, or remain independent. Patel, through masterful diplomacy, negotiation, and firm political persuasion (the 'carrot and stick' approach), successfully integrated almost all of them into India. The integration of states like Junagadh, Hyderabad, and Kashmir proved particularly difficult but was eventually achieved."
      },
      {
        "level": 106,
        "difficulty": "Medium",
        "question": "What was the basis for the reorganisation of states in India, as recommended by the States Reorganisation Commission (SRC) in 1956?",
        "options": [
          "Religion",
          "Geographical size",
          "Language",
          "Economic development"
        ],
        "correctAnswer": 3,
        "explanation": "After independence, there were strong demands from various regions for the creation of states on a linguistic basis. The first was the creation of Andhra Pradesh for Telugu-speaking people in 1952 after a massive agitation. This led to the formation of the States Reorganisation Commission (SRC). In its 1955 report, the SRC accepted language as the primary basis for redrawing the boundaries of states. This led to the States Reorganisation Act of 1956, which created 14 states and 6 union territories, largely on linguistic lines. The leadership initially feared this would lead to disintegration, but it has actually strengthened national unity."
      },
      {
        "level": 107,
        "difficulty": "Easy",
        "question": "What is meant by the 'era of one-party dominance' in India?",
        "options": [
          "India had a one-party system by law.",
          "Only the Congress party was allowed to contest elections.",
          "The Congress party consistently won elections at the national and state levels from 1952 to 1967 due to its popular appeal and legacy.",
          "The opposition parties were banned."
        ],
        "correctAnswer": 3,
        "explanation": "The period from India's first general election in 1952 until the fourth in 1967 is known as the 'era of one-party dominance' or the 'Congress System'. Unlike one-party states like China, India had a multi-party democracy. However, the Congress party, due to its legacy as the primary party of the freedom struggle and its inclusive, catch-all nature, won overwhelming majorities in successive elections. Other parties existed and contested freely, but they were unable to challenge the dominance of Congress at the national level during this period."
      },
      {
        "level": 108,
        "difficulty": "Medium",
        "question": "What was the main objective of India's Five-Year Plans, initiated by the Planning Commission?",
        "options": [
          "To promote a completely free-market economy.",
          "To rapidly increase military spending.",
          "To guide India's economic development through state intervention, focusing on industrialization and poverty alleviation.",
          "To prioritize agricultural exports over domestic needs."
        ],
        "correctAnswer": 3,
        "explanation": "India adopted a model of planned development after independence, establishing the Planning Commission in 1950. The core idea was to use Five-Year Plans to guide economic policy. The primary goals were to boost economic growth, achieve self-reliance, reduce poverty, and build a strong industrial base. The First Five-Year Plan (1951-56) focused on agriculture, while the Second Five-Year Plan (1956-61), based on the Mahalanobis model, emphasized rapid, heavy industrialization under state control. This created a 'mixed economy' with both public and private sectors."
      },
      {
        "level": 109,
        "difficulty": "Easy",
        "question": "What are the 'Panchsheel' principles in India's foreign policy?",
        "options": [
          "Five principles for nuclear disarmament.",
          "Five principles of peaceful coexistence, signed between India and China in 1954.",
          "Five economic goals for South Asia.",
          "Five pillars of the Non-Aligned Movement."
        ],
        "correctAnswer": 2,
        "explanation": "The Panchsheel, or Five Principles of Peaceful Coexistence, were part of an agreement on trade and intercourse between the Tibet region of China and India, signed in 1954 by Prime Minister Nehru and Chinese Premier Zhou Enlai. The five principles were: \n1. Mutual respect for each other's territorial integrity and sovereignty. \n2. Mutual non-aggression. \n3. Mutual non-interference in each other's internal affairs. \n4. Equality and mutual benefit. \n5. Peaceful co-existence. \nThese principles became a cornerstone of India's foreign policy, especially its approach within the Non-Aligned Movement. However, the 1962 border war with China was a major setback to this policy."
      },
      {
        "level": 110,
        "difficulty": "Medium",
        "question": "What was the significance of the 1967 general elections in India?",
        "options": [
          "It marked the beginning of the one-party dominance era.",
          "The Congress party won with an even larger majority.",
          "It marked the end of the Congress party's dominance, as it lost power in many states and its Lok Sabha majority was greatly reduced.",
          "It was the first election held after independence."
        ],
        "correctAnswer": 3,
        "explanation": "The 1967 elections are considered a political 'earthquake' in India. For the first time, the Congress party's dominance was seriously challenged. It managed to form a government at the center but with its lowest-ever tally of seats and vote share. More significantly, it lost power in nine states, where non-Congress coalition governments (Samyukta Vidhayak Dal or SVD) were formed. This election marked the end of the 'Congress System' and the beginning of a more competitive, multi-party political landscape in India. It also brought the phenomenon of 'defections' (Aya Ram, Gaya Ram) to the forefront."
      },
      {
        "level": 111,
        "difficulty": "Hard",
        "question": "What was the main reason for the split in the Congress party in 1969?",
        "options": [
          "A disagreement over foreign policy.",
          "A power struggle between Indira Gandhi and the older party leadership known as the 'Syndicate'.",
          "A dispute over the linguistic reorganisation of states.",
          "The party's poor performance in the 1962 elections."
        ],
        "correctAnswer": 2,
        "explanation": "The 1969 split was the culmination of a growing rift between Prime Minister Indira Gandhi and a group of powerful, established Congress leaders known as the 'Syndicate' (which included K. Kamaraj, S. Nijalingappa, etc.). The Syndicate had helped make her Prime Minister, expecting to control her from behind the scenes. However, Indira Gandhi sought to assert her own authority. The conflict came to a head over the 1969 Presidential election. The Syndicate nominated the official Congress candidate, N. Sanjeeva Reddy, while Indira Gandhi supported the independent candidate, V.V. Giri, and called for a 'conscience vote'. Giri's victory was a direct defeat for the Syndicate, leading the Congress President to expel Indira Gandhi from the party, which then formally split into Congress (Organisation) led by the Syndicate and Congress (Requisitionist) led by Indira Gandhi."
      },
      {
        "level": 112,
        "difficulty": "Medium",
        "question": "What was the main slogan of Indira Gandhi's campaign in the 1971 elections?",
        "options": [
          "Jai Jawan, Jai Kisan",
          "India Shining",
          "Garibi Hatao (Remove Poverty)",
          "Indira Hatao (Remove Indira)"
        ],
        "correctAnswer": 3,
        "explanation": "The 1971 elections were fought in the backdrop of the Congress split. The opposition alliance (Grand Alliance) had one main slogan: 'Indira Hatao' (Remove Indira). In response, Indira Gandhi launched a powerful and positive campaign centered on the slogan 'Garibi Hatao' (Remove Poverty). This slogan, combined with her pro-poor policies like the abolition of the privy purse and bank nationalization, resonated deeply with the masses. It helped her project a socialist and pro-poor image, leading to a landslide victory for her faction of the Congress and establishing her as the undisputed leader of the country."
      },
      {
        "level": 113,
        "difficulty": "Medium",
        "question": "What were the main reasons cited by the government for imposing the National Emergency in 1975?",
        "options": [
          "The war with Pakistan.",
          "A threat of foreign invasion.",
          "The threat of 'internal disturbances' arising from student protests, the JP movement, and a railway strike.",
          "A major economic collapse."
        ],
        "correctAnswer": 3,
        "explanation": "On June 25, 1975, the government of Indira Gandhi declared a state of National Emergency under Article 352 of the Constitution. The official reason given was a threat to national security from 'internal disturbances'. This was in response to a period of massive political unrest, including: \n1. The Nav Nirman Andolan (student movement) in Gujarat. \n2. The Bihar Movement led by Jayaprakash Narayan (JP), which called for 'Total Revolution' and Indira Gandhi's resignation. \n3. A nationwide railway strike in 1974. \nThe immediate trigger was the Allahabad High Court judgment which declared Indira Gandhi's 1971 election invalid. The Emergency led to the suspension of fundamental rights, press censorship, and the arrest of thousands of opposition leaders."
      },
      {
        "level": 114,
        "difficulty": "Easy",
        "question": "What was the main focus of the Chipko Movement?",
        "options": [
          "Demanding reservations for women in politics.",
          "Protesting against the construction of large dams.",
          "Preventing deforestation by hugging trees, asserting community rights over forests.",
          "Campaigning for the rights of industrial workers."
        ],
        "correctAnswer": 3,
        "explanation": "The Chipko Movement, which began in the early 1970s in the Himalayan region of Uttarakhand, was a unique environmental movement. To protest commercial logging that threatened their livelihoods, local villagers, especially women, would hug the trees to prevent them from being cut down. The movement was not just about saving trees; it was also about asserting the local community's rights over forest resources and questioning the prevailing model of development that caused environmental destruction."
      },
      {
        "level": 115,
        "difficulty": "Medium",
        "question": "What was the Anandpur Sahib Resolution of 1973?",
        "options": [
          "A resolution demanding the creation of a separate sovereign state of Khalistan.",
          "A resolution passed by the Akali Dal demanding greater state autonomy for Punjab.",
          "A peace treaty between India and Pakistan.",
          "A document outlining agricultural reforms in Punjab."
        ],
        "correctAnswer": 2,
        "explanation": "The Anandpur Sahib Resolution was a document adopted by the Akali Dal, a major political party in Punjab. It sought to redefine Centre-State relations and demanded greater autonomy for the state of Punjab within the Indian Union. While the resolution itself spoke of autonomy, not secession, it was later misinterpreted and used by extremist elements to justify the demand for a separate Sikh nation, 'Khalistan'. The resolution and the subsequent political developments led to a period of turmoil in Punjab, culminating in Operation Blue Star in 1984."
      },
      {
        "level": 116,
        "difficulty": "Hard",
        "question": "What was the significance of the Mandal Commission's recommendations?",
        "options": [
          "It recommended economic liberalisation.",
          "It recommended the creation of new states in the North-East.",
          "It recommended reserving 27% of jobs in central government and public sector units for Other Backward Classes (OBCs).",
          "It recommended changes to India's foreign policy."
        ],
        "correctAnswer": 3,
        "explanation": "The Mandal Commission was set up in 1979 to identify the 'socially and educationally backward classes' (OBCs). In its 1980 report, its key recommendation was to reserve 27% of government jobs for OBCs. For a decade, the report was not implemented. In 1990, the V.P. Singh government decided to implement this recommendation. This decision led to a massive political controversy, with widespread protests against the reservations ('anti-Mandal' protests) and counter-protests in support of them. The implementation of the Mandal report fundamentally changed the nature of Indian politics, leading to the rise of OBC-based political parties and making caste a central element of political mobilization."
      },
      {
        "level": 117,
        "difficulty": "Medium",
        "question": "What major shift occurred in Indian politics after the 1989 elections?",
        "options": [
          "The return of the Congress party's one-party dominance.",
          "The beginning of the era of coalition governments at the Centre.",
          "The dissolution of all regional parties.",
          "The introduction of a presidential system."
        ],
        "correctAnswer": 2,
        "explanation": "The 1989 general election marked a watershed moment in Indian politics. No single party won a clear majority, leading to a hung parliament. The Congress was the largest party but could not form a government. This led to the formation of a minority National Front government led by V.P. Singh, which was supported from the outside by both the BJP and the Left Front. This election signaled the end of the 'Congress System' and ushered in an era of multi-party competition and coalition governments at the national level, a trend that would dominate Indian politics for the next two decades."
      },
      {
        "level": 118,
        "difficulty": "Medium",
        "question": "What was the Shah Bano case and why was it controversial?",
        "options": [
          "A case about property dispute.",
          "A case where the Supreme Court ruled in favour of giving maintenance to a divorced Muslim woman, a decision which was later overturned by the government through legislation.",
          "A case about religious conversion.",
          "A corruption case involving a politician."
        ],
        "correctAnswer": 2,
        "explanation": "In 1985, in the case of Mohammad Ahmed Khan v. Shah Bano Begum, the Supreme Court ruled that Shah Bano, a 62-year-old divorced Muslim woman, was entitled to alimony from her former husband under Indian law (Section 125 of the Criminal Procedure Code). This judgment was seen by many orthodox Muslim leaders as an interference in Muslim Personal Law. Facing pressure, the Rajiv Gandhi government passed the Muslim Women (Protection of Rights on Divorce) Act, 1986, which effectively overturned the Supreme Court's judgment. This move was widely criticized by women's groups and liberals as a politically motivated appeasement of religious fundamentalists and a setback for women's rights."
      },
      {
        "level": 119,
        "difficulty": "Easy",
        "question": "What were the New Economic Reforms of 1991?",
        "options": [
          "A policy to increase government control over the economy.",
          "A series of policies that moved India towards a more liberalised, market-oriented economy.",
          "A set of agricultural reforms.",
          "A change in the tax system only."
        ],
        "correctAnswer": 2,
        "explanation": "In 1991, facing a severe economic crisis, India launched a comprehensive program of New Economic Reforms. This marked a major shift from the earlier state-controlled economic model. The reforms, often referred to as LPG (Liberalisation, Privatisation, Globalisation), involved: \n- **Liberalisation**: Reducing government regulations and opening up various sectors to private companies. \n- **Privatisation**: Selling off public sector undertakings (PSUs) to the private sector. \n- **Globalisation**: Integrating the Indian economy with the global economy by reducing tariffs and encouraging foreign investment. These reforms were initiated by the Narasimha Rao government, with Manmohan Singh as the Finance Minister."
      },
      {
        "level": 120,
        "difficulty": "Medium",
        "question": "What event on December 6, 1992, became a symbol of communal politics in India?",
        "options": [
          "The signing of a peace accord.",
          "A major general election.",
          "The demolition of the Babri Masjid in Ayodhya.",
          "The implementation of the Mandal Commission report."
        ],
        "correctAnswer": 3,
        "explanation": "On December 6, 1992, a large crowd of kar sevaks (volunteers) organized by the Vishva Hindu Parishad (VHP) and supported by the Bharatiya Janata Party (BJP) demolished the 16th-century Babri Masjid in Ayodhya. The site was contentious as many Hindus believe it to be the birthplace of Lord Ram and that a temple was destroyed to build the mosque. The demolition triggered widespread communal riots across the country, led to a debate about secularism in India, and became a central event that shaped the trajectory of Indian politics in the 1990s and beyond."
      },
      {
        "level": 121,
        "difficulty": "Easy",
        "question": "What were the three main challenges faced by India at the time of independence in 1947?",
        "options": [
            "Economic development, military strength, and cultural revival.",
            "Nation-building: integrating princely states, Partition and refugee rehabilitation, and establishing democracy.",
            "Foreign policy alignment, industrial growth, and urban planning.",
            "Educational reform, health improvements, and transportation infrastructure."
        ],
        "correctAnswer": 2,
        "explanation": "At independence, India faced three key challenges in nation-building. First, integrating over 565 princely states, achieved through diplomacy (Sardar Patel's role) and military action (e.g., Hyderabad, Junagadh). Instruments of Accession and merger agreements were used, with states like Kashmir acceding under special conditions (Article 370). Second, handling the Partition's aftermath: communal violence killed millions, displaced 15 million refugees; rehabilitation involved land allocation, camps, and policies like the Delhi Pact. Third, establishing democracy in a diverse, illiterate society via the Constitution (1950), universal suffrage, and federal structure. These challenges were met with a commitment to unity in diversity, avoiding ethnic nationalism, unlike Pakistan."
    },
    {
        "level": 122,
        "difficulty": "Medium",
        "question": "How did the Congress Party dominate Indian politics in the early post-independence years?",
        "options": [
            "Through military alliances and foreign aid.",
            "By inheriting the freedom struggle's legacy, inclusive ideology, and winning successive elections under Nehru.",
            "By suppressing opposition parties through emergency powers.",
            "Via economic monopolies and business control."
        ],
        "correctAnswer": 2,
        "explanation": "The Era of One-Party Dominance (1952-1967) saw Congress winning three general elections under Nehru, securing majority due to its role in independence, broad social base (accommodating diverse ideologies), and leaders like Nehru, Patel. It faced opposition from parties like Socialist Party, Communist Party of India (CPI), Bharatiya Jana Sangh (BJS), but they were fragmented. Congress's internal factions acted as a 'system of factions,' providing intra-party democracy. This dominance was democratic, not authoritarian, as elections were free and fair, fostering a multi-party system in practice. It ended with 1967 elections, leading to coalitions and defections."
    },
    {
        "level": 123,
        "difficulty": "Easy",
        "question": "What was the main objective of India's planned development post-independence?",
        "options": [
            "Promoting free-market capitalism.",
            "Achieving self-reliance through Five-Year Plans, focusing on heavy industries and agrarian reforms.",
            "Relying on foreign investments exclusively.",
            "Prioritizing luxury goods production."
        ],
        "correctAnswer": 2,
        "explanation": "Politics of Planned Development involved adopting a mixed economy model, inspired by Soviet planning but with private sector role. Planning Commission (1950) oversaw Five-Year Plans: First (1951-56) focused on agriculture (success post-famines); Second (1956-61) on heavy industries (steel plants like Bhilai, Rourkela via public sector). Debates: agriculture vs industry, public vs private. Land reforms (abolition of zamindari, tenancy reforms, land ceilings) aimed at equity but were unevenly implemented due to state variations. Green Revolution (1960s) boosted food production via HYV seeds, fertilizers, but led to regional disparities (Punjab, Haryana success; environmental issues). It aimed at self-reliance (import substitution) but faced criticisms for bureaucratic inefficiencies."
    },
    {
        "level": 124,
        "difficulty": "Medium",
        "question": "What were the key principles of India's foreign policy during the Cold War era?",
        "options": [
            "Alignment with the US-led Western bloc.",
            "Non-alignment, peaceful coexistence, and support for decolonization.",
            "Joining the Soviet bloc for military aid.",
            "Isolationism and avoiding international organizations."
        ],
        "correctAnswer": 2,
        "explanation": "India's External Relations under Nehru emphasized Non-Aligned Movement (NAM, co-founded 1961 with Tito, Nasser), avoiding Cold War blocs to maintain independence. Principles: Panchsheel (1954 with China—mutual respect, non-aggression); support for African-Asian decolonization (Bandung Conference 1955); mediation in conflicts (Korea 1953). Relations: with US (aid but criticism over Pakistan alliance); USSR (support in Kashmir, economic aid); China (initial friendship, but 1962 war over border disputes); Pakistan (wars 1947, 1965 over Kashmir; Indus Water Treaty 1960). Post-Nehru, shifts under Shastri (Tashkent Agreement 1966) and Indira (1971 Bangladesh War, Soviet treaty). Policy balanced idealism with realism."
    },
    {
        "level": 125,
        "difficulty": "Hard",
        "question": "How did the Congress Party face challenges and restore its position in the late 1960s and early 1970s?",
        "options": [
            "By forming alliances with opposition parties.",
            "Through Indira Gandhi's populist measures like bank nationalization and 'Garibi Hatao', leading to 1971 victory, but internal splits occurred.",
            "By imposing martial law.",
            "Via economic liberalization."
        ],
        "correctAnswer": 2,
        "explanation": "Challenges to Congress System: 1967 elections saw losses in states, rise of coalitions (SVDs), defections. Syndicate vs Indira faction led to 1969 split (Congress (R) vs (O)). Restoration: Indira's left-leaning policies—bank nationalization (1969), abolition of privy purses (1971), 'Garibi Hatao' slogan—appealed to poor, leading to landslide 1971 win. Bangladesh liberation boosted image. However, economic crises (oil shock, inflation) and JP Movement (1974 Bihar protests against corruption) challenged her, leading to Emergency (1975). This period marked shift from consensus to confrontation in politics."
    },
    {
        "level": 126,
        "difficulty": "Medium",
        "question": "What were the causes and consequences of the Emergency imposed in 1975?",
        "options": [
            "Caused by external war; led to economic boom.",
            "Caused by Allahabad HC judgment invalidating Indira's election, JP Movement; consequences included suspension of rights, press censorship, but ended with 1977 elections and Janata Party victory.",
            "Imposed for cultural reforms; strengthened democracy.",
            "Due to natural disasters; no major political impact."
        ],
        "correctAnswer": 2,
        "explanation": "Crisis of Democratic Order: Causes—economic stagnation, unemployment, Gujarat/Bihar student protests (Navnirman, JP's 'Total Revolution' calling for removal of corrupt leaders), railway strike (1974), Allahabad verdict (1975) on electoral malpractices. Emergency (Article 352) suspended fundamental rights, imposed censorship, arrested opposition (including JP, Morarji). Excesses: forced sterilizations (Sanjay Gandhi), demolitions. Consequences: Public backlash led to 1977 elections—Congress defeated, Janata Party (coalition of anti-Congress groups) formed government, but internal rifts caused fall in 1979. Restored democracy, 44th Amendment limited emergency powers."
    },
    {
        "level": 127,
        "difficulty": "Easy",
        "question": "What were some key popular movements that emerged in India during the 1970s and 1980s?",
        "options": [
            "Movements for industrialization and urbanization.",
            "Chipko (environment), Anti-Arrack (women's rights), Dalit Panthers (caste equality), BKU (farmers' rights).",
            "Pro-business lobbies.",
            "Military reform campaigns."
        ],
        "correctAnswer": 2,
        "explanation": "Rise of Popular Movements: Post-Emergency, civil society strengthened. Chipko (1973 Uttarakhand)—women hugged trees against logging, led to forest policy changes. Anti-Arrack (1990s Andhra)—women protested alcohol-related violence, led to prohibition. Dalit Panthers (1970s Maharashtra)—inspired by Black Panthers, fought caste atrocities via literature, agitation. Bharatiya Kisan Union (BKU, 1980s)—farmers demanded better prices, loan waivers (e.g., 1988 Delhi siege). These were non-party, issue-based, involving NGOs, highlighting democracy's responsiveness to marginalized voices, but some turned violent or co-opted."
    },
    {
        "level": 128,
        "difficulty": "Medium",
        "question": "How did India address regional aspirations in Punjab, Northeast, and Kashmir?",
        "options": [
            "By centralizing power and suppressing demands.",
            "Through accords and autonomy: Punjab Accord (1985), Assam Accord (1985), but Kashmir remained contentious with insurgency.",
            "Via military invasions.",
            "Ignoring them completely."
        ],
        "correctAnswer": 2,
        "explanation": "Regional Aspirations: Punjab—Akali demands for autonomy led to militancy (Khalistan), Operation Blue Star (1984), Indira's assassination, anti-Sikh riots; resolved via Rajiv-Longowal Accord (1985). Northeast—Assam movement (1979-85) against 'foreigners' (Bangladeshis) ended with Accord (deportation, voters' list revision); Mizoram insurgency to statehood (1987); Nagaland ongoing. Kashmir—Article 370 provided autonomy, but rigged elections (1987) sparked insurgency, militancy (Pakistan-backed); AFSPA imposed. Approach: democratic negotiation where possible, force when needed, emphasizing federal accommodation."
    },
    {
        "level": 129,
        "difficulty": "Hard",
        "question": "What were the major recent developments in Indian politics since the 1990s?",
        "options": [
            "Return to one-party dominance.",
            "Era of coalitions (1989-2014), Mandal implementation (OBC reservations), economic reforms (1991), rise of BJP (Ayodhya, NDA), decline of Congress.",
            "Abolition of reservations.",
            "Shift to presidential system."
        ],
        "correctAnswer": 2,
        "explanation": "Recent Developments: 1989 elections ended Congress dominance, leading to coalitions (National Front, United Front, NDA, UPA). Mandal Commission (1990)—27% OBC reservations sparked protests but implemented, boosting regional parties (SP, RJD). Babri Masjid demolition (1992) polarized politics, BJP's rise. Economic liberalization (1991 under Narasimha Rao)—LPG (Liberalization, Privatization, Globalization) reduced state control. NDA (1999-2004, Vajpayee)—nuclear tests, Kargil; UPA (2004-14, Manmohan)—RTI, NREGA, but corruption scandals. 2014 onwards: BJP majority (Modi), Article 370 abrogation (2019), CAA, reflecting Hindutva, centralization."
    },
    {
        "level": 130,
        "difficulty": "Easy",
        "question": "What was the Cold War, and how did it shape global politics?",
        "options": [
            "A direct war between US and USSR.",
            "Ideological rivalry (capitalism vs communism) without direct conflict, leading to alliances (NATO, Warsaw Pact) and proxy wars.",
            "A period of global peace.",
            "Economic cooperation between superpowers."
        ],
        "correctAnswer": 2,
        "explanation": "Cold War Era (1945-1991): Post-WWII, US (capitalist, democratic) vs USSR (communist) rivalry divided world into blocs. Alliances: NATO (1949, Western); Warsaw Pact (1955, Eastern). Arms race (nuclear, space—Sputnik 1957, Moon landing 1969). Proxy wars: Korea (1950-53), Vietnam (1955-75), Afghanistan (1979-89). Cuba Missile Crisis (1962) brinkmanship. Third World: NAM emerged. Impact: bipolar world, decolonization influenced, but ended with USSR collapse (1991), leading to unipolar US dominance."
    },
    {
        "level": 131,
        "difficulty": "Medium",
        "question": "What led to the end of bipolarity and the disintegration of the USSR?",
        "options": [
            "Military victory by the US.",
            "Economic stagnation, Gorbachev's reforms (Glasnost, Perestroika), nationalist movements in republics.",
            "Natural disasters.",
            "Alliance with China."
        ],
        "correctAnswer": 2,
        "explanation": "End of Bipolarity: USSR's issues—command economy inefficiencies, corruption, arms race burden. Gorbachev (1985): Glasnost (openness—political freedoms), Perestroika (restructuring—market elements). Led to unrest: Baltic republics independence (1990-91), August 1991 coup failed, Yeltsin rose. USSR dissolved December 1991 into 15 republics (Russia successor). Consequences: unipolar world, end of Cold War, shock therapy in Russia (rapid privatization—oligarchs, inequality), rise of CIS, NATO expansion eastward."
    },
    {
        "level": 132,
        "difficulty": "Easy",
        "question": "How has US hegemony manifested in world politics post-Cold War?",
        "options": [
            "Through cultural isolation.",
            "Military (Iraq wars), economic (IMF, WTO dominance), cultural (Hollywood, McDonald's) superiority.",
            "By withdrawing from global affairs.",
            "Equal partnership with Russia."
        ],
        "correctAnswer": 2,
        "explanation": "US Hegemony: Post-1991, US as sole superpower. Military: Operation Desert Storm (1991 Iraq), Afghan War (2001), Iraq Invasion (2003—WMD pretext). Economic: 15% global GDP, Bretton Woods institutions control. Cultural: soft power via media, consumer culture (Americanization). Constraints: institutional (UN vetoes), domestic (public opinion), international (resistance e.g., Iraq protests). Hegemony debated—hard (military) vs soft (consent); declining with rise of China, multipolarity."
    },
    {
        "level": 133,
        "difficulty": "Medium",
        "question": "What are the alternative centres of power challenging US hegemony?",
        "options": [
            "Africa and Latin America.",
            "European Union (economic integration), China (economic rise), Russia (military revival).",
            "Middle Eastern countries only.",
            "No challenges exist."
        ],
        "correctAnswer": 2,
        "explanation": "Alternative Centres: EU—formed 1992 Maastricht, Euro currency, common foreign policy; economic powerhouse rivaling US. ASEAN—1967, economic community (2015), Vision 2020 for integration. China—post-1978 reforms, GDP growth (world's second largest), BRI initiative. Russia—post-Soviet recovery under Putin, energy exports, military (Syria intervention). These promote multipolarity, with BRICS (Brazil, Russia, India, China, South Africa) as platform for cooperation against Western dominance."
    },
    {
        "level": 134,
        "difficulty": "Hard",
        "question": "What are the key political issues in Contemporary South Asia?",
        "options": [
            "Economic unity and free trade.",
            "Democracy struggles (Pakistan military rule, Bangladesh coups), conflicts (Indo-Pak, Sri Lanka Tamils), SAARC efforts.",
            "Environmental cooperation only.",
            "Cultural homogenization."
        ],
        "correctAnswer": 2,
        "explanation": "Contemporary South Asia: Diverse regimes—India (democracy since 1947), Pakistan (military dictatorships e.g., Musharraf, civilian now unstable), Bangladesh (1971 independence, alternates between democracy/military), Nepal (2008 republic from monarchy), Sri Lanka (democracy but civil war), Bhutan/Maldives (transitions). Conflicts: Indo-Pak (Kashmir, wars 1947/65/71/99, terrorism); Sri Lanka LTTE vs government (1983-2009 war over Tamil autonomy). Cooperation: SAARC (1985)—free trade (SAFTA), but hindered by tensions. Regional disparities, poverty, but growing economies."
    },
    {
        "level": 135,
        "difficulty": "Easy",
        "question": "What is the role of the United Nations in international politics?",
        "options": [
            "A military alliance.",
            "Promote peace, human rights, development via organs like General Assembly, Security Council, specialized agencies (WHO, UNESCO).",
            "Economic control only.",
            "Cultural organization."
        ],
        "correctAnswer": 2,
        "explanation": "International Organisations: UN (1945, Charter)—193 members, aims: peace (peacekeeping e.g., Suez 1956), disarmament, human rights (UDHR 1948). Organs: General Assembly (all members, one vote), Security Council (15 members, 5 permanent with veto—US, Russia, UK, France, China), Secretariat (Secretary-General), ECOSOC, ICJ. Reforms needed: expand SC (India's bid), democratize. Others: WTO (1995, trade rules), IMF/World Bank (loans, development), IAEA (nuclear). IOs limit sovereignty but provide global governance."
    },
    {
        "level": 136,
        "difficulty": "Medium",
        "question": "How has the concept of security evolved in the contemporary world?",
        "options": [
            "Only military threats.",
            "Traditional (state-centric, military) vs non-traditional (human security: terrorism, health, climate, migration).",
            "Economic security only.",
            "No evolution."
        ],
        "correctAnswer": 2,
        "explanation": "Security in Contemporary World: Traditional—external (wars, alliances), internal (secession). Non-traditional—human security (UNDP 1994: freedom from want/fear), global threats (terrorism post-9/11, pandemics like COVID, climate change). Approaches: cooperative (arms control treaties like NPT 1968, CTBT), human rights-based. Disarmament vs deterrence (nuclear). India: balanced approach, no first use nuclear policy, advocates global disarmament."
    },
    {
        "level": 137,
        "difficulty": "Easy",
        "question": "What are the major environmental concerns in global politics?",
        "options": [
            "Cultural pollution.",
            "Climate change, resource depletion, biodiversity loss, addressed via treaties like Kyoto (1997), Paris Agreement (2015).",
            "Only air pollution.",
            "No global concerns."
        ],
        "correctAnswer": 2,
        "explanation": "Environment and Natural Resources: Issues—global warming (IPCC), ozone depletion (Montreal Protocol 1987), deforestation, water scarcity. North-South divide: developed nations historical polluters, demand cuts from developing (common but differentiated responsibilities). Indigenous rights over resources. Treaties: Earth Summit (1992 Rio—Agenda 21), UNFCCC. Commons (Antarctica, oceans) governance. India: advocates equity, participates in Paris (NDCs for emissions reduction)."
    },
    {
        "level": 138,
        "difficulty": "Medium",
        "question": "What is globalisation, and what are its manifestations?",
        "options": [
            "Isolation of economies.",
            "Interconnectedness via trade, technology, culture; economic (FDI, MNCs), political (IOs), cultural (Westernization).",
            "Only military alliances.",
            "National self-sufficiency."
        ],
        "correctAnswer": 2,
        "explanation": "Globalisation: Post-Cold War acceleration, driven by technology (internet), liberalization (WTO). Manifestations: economic (global supply chains, outsourcing), cultural (McDonaldization, hybrid cultures), political (global governance, NGOs like Amnesty). Debates: pros (growth, democracy), cons (inequality, cultural loss, sovereignty erosion). Resistance: anti-globalisation movements (WTO protests), protectionism. India: post-1991 opened economy, benefits (IT boom) but challenges (job losses, farmer suicides)."
    },
    {
        "level": 139,
        "difficulty": "Hard",
        "question": "How did the Non-Aligned Movement (NAM) influence Third World countries during the Cold War?",
        "options": [
            "By aligning them with superpowers.",
            "Provided independence in foreign policy, platform for decolonization, economic cooperation (e.g., Bandung 1955, Belgrade 1961).",
            "Focused on military pacts.",
            "Irrelevant to global politics."
        ],
        "correctAnswer": 2,
        "explanation": "NAM: Emerged from Afro-Asian solidarity, key leaders Nehru, Nasser, Tito, Sukarno. Principles: non-alignment, anti-imperialism, disarmament. Influence: mediated conflicts (Congo 1960), supported liberation (Algeria, Palestine), economic demands (NIEO 1970s for fair trade). Post-Cold War, relevance debated but continues (120 members), focusing on development, terrorism, climate. For India, NAM was cornerstone, allowing strategic autonomy."
    },
    {
        "level": 140,
        "difficulty": "Medium",
        "question": "What role did India play in the liberation of Bangladesh in 1971?",
        "options": [
            "Neutral observer.",
            "Supported East Pakistan's independence through diplomatic efforts, refugee aid, and military intervention (Indo-Pak War).",
            "Allied with Pakistan.",
            "Economic sanctions only."
        ],
        "correctAnswer": 2,
        "explanation": "India's role: Pakistan's West-East divide, 1970 elections (Awami League win, suppressed), genocide in East led to 10 million refugees in India. India provided training to Mukti Bahini, diplomatic lobbying (UN, superpowers—Soviet support via 1971 treaty), war (December 1971) led to Dhaka surrender, Bangladesh independence. Simla Agreement (1972) with Bhutto. Strengthened India's regional position but strained Indo-Pak ties."
    },
    {
        "level": 141,
        "difficulty": "Easy",
        "question": "What was the significance of the Green Revolution in India?",
        "options": [
            "Environmental movement.",
            "Agricultural transformation in 1960s using HYV seeds, fertilizers, irrigation, leading to food self-sufficiency but regional inequalities.",
            "Industrial policy.",
            "Political reform."
        ],
        "correctAnswer": 2,
        "explanation": "Green Revolution: Addressed food shortages (1960s droughts). Introduced in Punjab, Haryana, UP—wheat/rice yields doubled. Positives: surplus, exports. Negatives: water depletion, soil degradation, benefited rich farmers (subsidies), widened disparities (East India lagged), led to farmer movements. White Revolution (milk, Operation Flood) similar cooperative model."
    },
    {
        "level": 142,
        "difficulty": "Medium",
        "question": "How did economic liberalization in 1991 change India's development path?",
        "options": [
            "Increased state control.",
            "Shift to market-oriented reforms: reduced licenses, FDI, privatization, integrating with global economy.",
            "Focused on agriculture only.",
            "No changes."
        ],
        "correctAnswer": 2,
        "explanation": "1991 Crisis: forex reserves low, IMF bailout conditioned on reforms (Finance Minister Manmohan Singh). New Economic Policy: liberalization (deregulation), globalization (trade openness), privatization (disinvestment). Impacts: growth (8%+), services boom (IT), middle class rise; but inequality, jobless growth, agrarian distress. Debates: pro-reform vs critics (loss of sovereignty, WTO issues)."
    },
    {
        "level": 143,
        "difficulty": "Hard",
        "question": "What were the implications of the nuclear tests by India in 1998?",
        "options": [
            "International applause.",
            "Pokhran-II tests declared India nuclear state, led to sanctions (US), but boosted national pride, shifted global perceptions.",
            "Abandonment of nuclear program.",
            "Alliance with Pakistan."
        ],
        "correctAnswer": 2,
        "explanation": "1998 Tests (Vajpayee): Response to CTBT pressure, Pakistan tests followed. Doctrine: no first use, minimum deterrence. International: sanctions lifted gradually, Indo-US Nuclear Deal (2008) ended isolation. Strengthened security vs China/Pakistan, but arms race concerns in South Asia."
    },
    {
        "level": 144,
        "difficulty": "Easy",
        "question": "What is the significance of SAARC in South Asian politics?",
        "options": [
            "Military alliance.",
            "Regional organization for cooperation in trade, development, peace; but limited by Indo-Pak tensions.",
            "Cultural only.",
            "Global superpower group."
        ],
        "correctAnswer": 2,
        "explanation": "SAARC (1985, 8 members): Aims—economic/social progress, confidence building. Achievements: SAFTA (2006), conventions on terrorism, environment. Challenges: bilateral issues (Kashmir) hinder progress, no dispute resolution. Alternatives: BIMSTEC, BBIN for sub-regional cooperation."
    },
    {
        "level": 145,
        "difficulty": "Medium",
        "question": "How has terrorism become a global security threat?",
        "options": [
            "State-sponsored only.",
            "Non-state actors (Al-Qaeda, ISIS), using asymmetric warfare, cyber; post-9/11, global war on terror.",
            "Declining issue.",
            "Economic threat only."
        ],
        "correctAnswer": 2,
        "explanation": "Terrorism: Transnational, ideological (jihadist, separatist). Responses: UN resolutions, coalitions (Afghanistan). India: faces cross-border (Pakistan-sponsored in Kashmir), advocates CCIT (Comprehensive Convention on International Terrorism)."
    },
    {
        "level": 146,
        "difficulty": "Easy",
        "question": "What is the Paris Agreement on climate change?",
        "options": [
            "Trade deal.",
            "2015 accord to limit warming to 1.5-2°C, via NDCs, finance for developing countries.",
            "Nuclear treaty.",
            "Peace agreement."
        ],
        "correctAnswer": 2,
        "explanation": "Paris (COP21): Bottom-up approach, unlike Kyoto (top-down). India: ratified, aims 40% non-fossil energy by 2030, critiques insufficient funding from developed nations."
    },
    {
        "level": 147,
        "difficulty": "Medium",
        "question": "What are the debates around globalization's impact on culture?",
        "options": [
            "No impact.",
            "Homogenization (Western dominance) vs hybridization (local-global mix, e.g., Bollywood).",
            "Only positive.",
            "Economic only."
        ],
        "correctAnswer": 2,
        "explanation": "Cultural Globalisation: Flows via media, migration. Fears: loss of diversity. Positives: global awareness, fusion (glocalization). India: resists via cultural policies, exports yoga, cuisine."
    },
    {
        "level": 148,
        "difficulty": "Hard",
        "question": "How has the rise of China affected global politics?",
        "options": [
            "No effect.",
            "Economic superpower, military assertiveness (South China Sea), challenging US via BRI, AIIB.",
            "Alliance with US.",
            "Decline in influence."
        ],
        "correctAnswer": 2,
        "explanation": "China's Rise: Post-1978, GDP growth, world's factory. Geopolitics: Taiwan tensions, border disputes (India 2020 Galwan). Alternatives to Western institutions (Shanghai Cooperation Organisation). Potential for new Cold War with US."
    },
    {
        "level": 149,
        "difficulty": "Medium",
        "question": "What reforms are needed in the UN Security Council?",
        "options": [
            "Reduce members.",
            "Expand permanent seats (G4: India, Japan, Germany, Brazil), end veto or limit it, better representation for Africa/Asia.",
            "Abolish it.",
            "No reforms."
        ],
        "correctAnswer": 2,
        "explanation": "UN Reforms: SC reflects 1945 power, not current (e.g., no India despite contributions). Proposals: increase to 25 members, categories for new permanents without veto. Resistance from P5."
    },
    {
        "level": 150,
        "difficulty": "Easy",
        "question": "What is human security?",
        "options": [
            "Military defense.",
            "Protection from threats to human dignity: poverty, disease, violence, beyond state security.",
            "Economic growth.",
            "Cultural preservation."
        ],
        "correctAnswer": 2,
        "explanation": "Human Security: UNDP concept, includes economic, food, health, environmental, personal, community, political securities. Policies: SDGs (2030), focus on vulnerable groups."
    }
    ]
  },
  History: {
    6: [
      {
        level: 1,
        difficulty: 'Easy',
        question:
          'Where did early humans in India first begin to domesticate animals and grow crops?',
        options: ['Mehrgarh', 'Harappa', 'Nalanda', 'Pataliputra'],
        correctAnswer: 1,
        explanation:
          'Mehrgarh (in present-day Pakistan) is one of the earliest sites where farming and herding began.',
      },
      {
        level: 2,
        difficulty: 'Easy',
        question:
          'Which river valley civilization is known as the Harappan Civilization?',
        options: ['Nile Valley', 'Indus Valley', 'Ganga Valley', 'Mesopotamia'],
        correctAnswer: 2,
        explanation:
          'The Harappan Civilization developed along the Indus River and is also called the Indus Valley Civilization.',
      },
    ],
  },
};

// SUBJECT_KEYS.forEach((subject) => {
//   NCERT_DATA[subject] = {};
//   CLASSES.forEach((klass) => {
//     NCERT_DATA[subject][klass] = Array.from({ length: 5 }).map((_, idx) => {
//       const level = idx + 1;
//       return {
//         level,
//         difficulty: level <= 2 ? 'Easy' : level <= 4 ? 'Medium' : 'Hard',
//         question: `${subject} • Class ${klass} • Level ${level}: Sample question?`,
//         options: ['Option A', 'Option B', 'Option C', 'Option D'],
//         correctAnswer: 1,
//         explanation: `Mock explanation for ${subject} Class ${klass} Level ${level}.`,
//       };
//     });
//   });
// });

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
    return arr.find(q => q.level === Number(level));
  } catch (e) {
    return null;
  }
};

export const getNCERTSubjects = () => SUBJECT_KEYS.slice();
export const getNCERTClasses = () => CLASSES.slice();

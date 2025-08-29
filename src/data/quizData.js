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
    explanation: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.",
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
      "Bengaluru",
      "Hyderabad"
    ],
    correctAnswer: 3,
    explanation: "Bengaluru (formerly Bangalore) is known as the 'Silicon Valley of India' due to its role as the nation's leading information technology (IT) exporter.",
    difficulty: "Easy",
    hint: "Think about IT companies"
  },

  // 8.1: Information Technology & AI (20 Questions)
  {
    level: 3,
    mainsubject: "Technology & Development",
    question: "What is the primary goal of the 'Digital India' programme?",
    options: [
      "To provide free laptops to all citizens",
      "To transform India into a digitally empowered society and knowledge economy",
      "To replace all physical currency with digital currency",
      "To develop a government-owned social media platform"
    ],
    correctAnswer: 2,
    explanation: "The Digital India programme was launched to improve online infrastructure and increase Internet connectivity, making government services available to citizens electronically.",
    difficulty: "Easy",
    hint: "Focus on empowerment and economy."
  },
  {
    level: 4,
    mainsubject: "Technology & Development",
    question: "Which of the following is a key initiative under the 'Startup India' scheme?",
    options: [
      "Providing free office space to all startups",
      "Offering a 10-year tax exemption for all new businesses",
      "Simplification and Handholding, Funding Support and Incentives, and Industry-Academia Partnership",
      "Mandating that all startups must be in the technology sector"
    ],
    correctAnswer: 3,
    explanation: "Startup India focuses on three main pillars: Simplification and Handholding, Funding Support and Incentives, and Industry-Academia Partnership and Incubation.",
    difficulty: "Medium",
    hint: "Think about the pillars of support for new businesses."
  },
  {
    level: 5,
    mainsubject: "Technology & Development",
    question: "In the context of AI, what is 'Machine Learning'?",
    options: [
      "The process of manually coding every possible decision in a machine",
      "A field of study that gives computers the ability to learn without being explicitly programmed",
      "The hardware components that make up an AI system",
      "A type of computer virus that learns and adapts"
    ],
    correctAnswer: 2,
    explanation: "Machine Learning is a subset of AI that focuses on building systems that can learn from and make decisions based on data, rather than being explicitly programmed for a specific task.",
    difficulty: "Easy",
    hint: "The name itself suggests learning from experience."
  },
  {
    level: 6,
    mainsubject: "Technology & Development",
    question: "What does UPI stand for in the Indian digital payment ecosystem?",
    options: [
      "Unified Payment Interface",
      "Universal Payment Identity",
      "Unique Payment Infrastructure",
      "Uniform Payer Information"
    ],
    correctAnswer: 1,
    explanation: "UPI (Unified Payment Interface) is an instant real-time payment system developed by the National Payments Corporation of India (NPCI).",
    difficulty: "Easy",
    hint: "It's an 'interface' for payments."
  },
  {
    level: 7,
    mainsubject: "Technology & Development",
    question: "The Atal Innovation Mission (AIM) is a flagship initiative of which organization?",
    options: [
      "Ministry of Finance",
      "ISRO",
      "NITI Aayog",
      "Ministry of Education"
    ],
    correctAnswer: 3,
    explanation: "The Atal Innovation Mission (AIM) is the Government of India’s flagship initiative under NITI Aayog to promote a culture of innovation and entrepreneurship in the country.",
    difficulty: "Medium",
    hint: "Think about the government's policy think tank."
  },
  {
    level: 8,
    mainsubject: "Technology & Development",
    question: "What is a 'Neural Network' in the context of Artificial Intelligence?",
    options: [
      "A computer network designed for biological research",
      "A network of human brains connected via technology",
      "A series of algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates",
      "A physical network cable made from organic materials"
    ],
    correctAnswer: 3,
    explanation: "Inspired by the human brain, neural networks are a key component of deep learning, a subfield of machine learning, and are used for tasks like image recognition and natural language processing.",
    difficulty: "Hard",
    hint: "It's modeled after the brain's structure."
  },
  {
    level: 9,
    mainsubject: "Technology & Development",
    question: "India's first AI-powered supercomputer, 'AIRAWAT', is located at which institution?",
    options: [
      "IIT Madras",
      "IISc Bangalore",
      "C-DAC, Pune",
      "TIFR, Mumbai"
    ],
    correctAnswer: 3,
    explanation: "AIRAWAT is installed at C-DAC (Centre for Development of Advanced Computing), Pune, and is part of the National Program on AI by the Government of India.",
    difficulty: "Medium",
    hint: "The institution is a leader in advanced computing in India."
  },
  {
    level: 10,
    mainsubject: "Technology & Development",
    question: "What is 'Deep Learning'?",
    options: [
      "A type of learning that involves deep meditation",
      "A subfield of machine learning based on artificial neural networks with many layers",
      "A method of storing data deep underground",
      "A computer programming language"
    ],
    correctAnswer: 2,
    explanation: "Deep Learning uses multi-layered neural networks (hence 'deep') to learn from vast amounts of data. It is the technology behind driverless cars and voice control in consumer devices.",
    difficulty: "Hard",
    hint: "It involves 'deep' layers of neural networks."
  },
  {
    level: 11,
    mainsubject: "Technology & Development",
    question: "The 'DigiLocker' service is an initiative under which program?",
    options: [
      "Startup India",
      "Make in India",
      "Digital India",
      "Skill India"
    ],
    correctAnswer: 3,
    explanation: "DigiLocker is a key initiative under Digital India, aimed at providing a secure cloud-based platform for storage, sharing, and verification of documents & certificates.",
    difficulty: "Easy",
    hint: "The name 'Digi' is a clue."
  },
  {
    level: 12,
    mainsubject: "Technology & Development",
    question: "Which term describes a startup company valued at over $1 billion?",
    options: [
      "Soonicorn",
      "Unicorn",
      "Decacorn",
      "Centicorn"
    ],
    correctAnswer: 2,
    explanation: "A 'Unicorn' is a privately held startup company with a value of over $1 billion. A 'Decacorn' is valued at over $10 billion.",
    difficulty: "Easy",
    hint: "Think of a mythical creature."
  },
  {
    level: 13,
    mainsubject: "Technology & Development",
    question: "What is the primary function of the GeM (Government e-Marketplace) portal?",
    options: [
      "To sell government bonds to the public",
      "To provide a platform for government departments to procure goods and services",
      "To auction off confiscated goods",
      "An e-learning platform for civil servants"
    ],
    correctAnswer: 2,
    explanation: "GeM is an online market platform established to facilitate online procurement of common use goods & services required by various government departments, organizations, and PSUs.",
    difficulty: "Medium",
    hint: "The name includes 'e-Marketplace'."
  },
  {
    level: 14,
    mainsubject: "Technology & Development",
    question: "The term 'Natural Language Processing' (NLP) in AI refers to what?",
    options: [
      "Computers processing geological data",
      "Computers' ability to understand and interpret human language",
      "A method to create natural-sounding computer-generated music",
      "The processing of natural, unprocessed data"
    ],
    correctAnswer: 2,
    explanation: "NLP is a branch of AI that helps computers understand, interpret, and manipulate human language. It's the technology behind virtual assistants like Siri and Alexa.",
    difficulty: "Medium",
    hint: "Focus on 'Natural Language'."
  },
  {
    level: 15,
    mainsubject: "Technology & Development",
    question: "What is the 'Turing Test' designed to measure?",
    options: [
      "A computer's processing speed",
      "A machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human",
      "The efficiency of a computer algorithm",
      "The security of a computer network"
    ],
    correctAnswer: 2,
    explanation: "Developed by Alan Turing, the Turing Test is a test of a machine's ability to exhibit intelligent behavior. A human evaluator judges natural language conversations between a human and a machine designed to generate human-like responses.",
    difficulty: "Hard",
    hint: "It tests if a machine can 'think' like a human."
  },
  {
    level: 16,
    mainsubject: "Technology & Development",
    question: "Which of these is NOT one of the three core pillars of the Digital India programme?",
    options: [
      "Digital Infrastructure as a Core Utility to Every Citizen",
      "Governance & Services on Demand",
      "Digital Empowerment of Citizens",
      "Manufacturing of Electronic Goods in India"
    ],
    correctAnswer: 4,
    explanation: "While manufacturing is supported by other initiatives like 'Make in India', the three core pillars of Digital India are creating digital infrastructure, delivering services digitally, and digital literacy/empowerment.",
    difficulty: "Medium",
    hint: "Focus on infrastructure, services, and citizen empowerment."
  },
  {
    level: 17,
    mainsubject: "Technology & Development",
    question: "In Machine Learning, what is 'Supervised Learning'?",
    options: [
      "Learning without any pre-existing data",
      "Learning from data that has been manually labeled with the correct output",
      "Learning by trial and error based on rewards and punishments",
      "Learning that is supervised in-person by a human"
    ],
    correctAnswer: 2,
    explanation: "In supervised learning, the algorithm learns from a labeled dataset, which is a dataset where each data point is tagged with the correct label or outcome. For example, images of cats labeled 'cat'.",
    difficulty: "Medium",
    hint: "The data acts as a 'supervisor' or teacher."
  },
  {
    level: 18,
    mainsubject: "Technology & Development",
    question: "The 'Startup India Seed Fund Scheme' (SISFS) was launched by which ministry?",
    options: [
      "Ministry of Finance",
      "Ministry of Commerce and Industry",
      "Ministry of Science and Technology",
      "Ministry of Micro, Small and Medium Enterprises"
    ],
    correctAnswer: 2,
    explanation: "The scheme was launched by the Department for Promotion of Industry and Internal Trade (DPIIT), which falls under the Ministry of Commerce and Industry, to provide financial assistance to startups for proof of concept, prototype development, etc.",
    difficulty: "Hard",
    hint: "This ministry deals with industry and trade promotion."
  },
  {
    level: 19,
    mainsubject: "Technology & Development",
    question: "What does 'GAN' stand for in the context of AI?",
    options: [
      "Global Area Network",
      "General Access Node",
      "Generative Adversarial Network",
      "Geospatial Analytics Nucleus"
    ],
    correctAnswer: 3,
    explanation: "Generative Adversarial Networks (GANs) are a class of machine learning frameworks where two neural networks (the 'generator' and the 'discriminator') contest with each other. They are known for creating realistic images, so-called 'deepfakes'.",
    difficulty: "Hard",
    hint: "It involves two networks in an 'adversarial' relationship."
  },
  {
    level: 20,
    mainsubject: "Technology & Development",
    question: "The 'MyGov.in' platform was launched to promote what?",
    options: [
      "Online education",
      "Citizen engagement in governance",
      "Digital payments",
      "Cybersecurity awareness"
    ],
    correctAnswer: 2,
    explanation: "MyGov is a citizen engagement platform that allows citizens to contribute their ideas and suggestions to the central government and associated organizations.",
    difficulty: "Easy",
    hint: "The name suggests a connection between 'My' and 'Government'."
  },
  {
    level: 21,
    mainsubject: "Technology & Development",
    question: "The concept of 'Internet of Things' (IoT) is a key part of which Indian government initiative?",
    options: [
        "Swachh Bharat Mission",
        "Smart Cities Mission",
        "Ayushman Bharat",
        "PM-Kisan Samman Nidhi"
    ],
    correctAnswer: 2,
    explanation: "The Smart Cities Mission heavily relies on IoT devices for collecting real-time data to manage assets, resources, and services efficiently; for example, smart traffic lights, waste management, and water supply.",
    difficulty: "Medium",
    hint: "Which initiative focuses on using technology to manage urban areas?"
  },
  {
    level: 22,
    mainsubject: "Technology & Development",
    question: "Which type of AI is focused on performing a specific task, such as playing chess or voice recognition?",
    options: [
        "Artificial General Intelligence (AGI)",
        "Artificial Superintelligence (ASI)",
        "Artificial Narrow Intelligence (ANI)",
        "Reactive Machines"
    ],
    correctAnswer: 3,
    explanation: "Artificial Narrow Intelligence (ANI), also known as Weak AI, is designed and trained for a particular task. Most of the AI we use today, like virtual assistants and image recognition software, is ANI.",
    difficulty: "Medium",
    hint: "The AI's scope is 'narrow'."
  },

  // 8.2: Biotechnology & Healthcare (20 Questions)
  {
    level: 23,
    mainsubject: "Technology & Development",
    question: "India's first indigenously developed COVID-19 vaccine, Covaxin, was developed by Bharat Biotech in collaboration with which organization?",
    options: [
      "Serum Institute of India (SII)",
      "Indian Council of Medical Research (ICMR)",
      "Dr. Reddy's Laboratories",
      "World Health Organization (WHO)"
    ],
    correctAnswer: 2,
    explanation: "Covaxin was developed by Bharat Biotech in partnership with the Indian Council of Medical Research (ICMR) – National Institute of Virology (NIV).",
    difficulty: "Easy",
    hint: "Think about India's top medical research body."
  },
  {
    level: 24,
    mainsubject: "Technology & Development",
    question: "What does 'CRISPR-Cas9' refer to in the field of biotechnology?",
    options: [
      "A new type of vaccine",
      "A powerful tool for editing genomes",
      "A computer algorithm for analyzing DNA",
      "A protein used in dietary supplements"
    ],
    correctAnswer: 2,
    explanation: "CRISPR-Cas9 is a unique technology that enables geneticists and medical researchers to edit parts of the genome by removing, adding or altering sections of the DNA sequence.",
    difficulty: "Medium",
    hint: "It's often described as 'genetic scissors'."
  },
  {
    level: 25,
    mainsubject: "Technology & Development",
    question: "The Ayushman Bharat Digital Mission (ABDM) aims to create what?",
    options: [
      "A network of government-owned hospitals",
      "A free health insurance scheme for all citizens",
      "A seamless online platform creating a digital health ecosystem for India",
      "A program to manufacture medical devices in India"
    ],
    correctAnswer: 3,
    explanation: "ABDM aims to develop the backbone necessary to support the integrated digital health infrastructure of the country, linking patients, hospitals, labs, and pharmacies digitally.",
    difficulty: "Medium",
    hint: "The key word is 'Digital Mission'."
  },
  {
    level: 26,
    mainsubject: "Technology & Development",
    question: "What type of vaccine is 'Covishield', which was widely used in India?",
    options: [
      "mRNA vaccine",
      "Inactivated virus vaccine",
      "Viral vector vaccine",
      "Subunit vaccine"
    ],
    correctAnswer: 3,
    explanation: "Covishield, developed by Oxford-AstraZeneca and manufactured by the Serum Institute of India, uses a modified chimpanzee adenovirus (a common cold virus) as a vector to deliver the coronavirus spike protein gene.",
    difficulty: "Medium",
    hint: "It uses a harmless virus as a 'vector' or carrier."
  },
  {
    level: 27,
    mainsubject: "Technology & Development",
    question: "In genetic engineering, what is a 'Genetically Modified Organism' (GMO)?",
    options: [
      "An organism grown in a laboratory",
      "An organism whose genetic material has been altered using genetic engineering techniques",
      "A fossilized organism whose DNA has been sequenced",
      "A newly discovered species of organism"
    ],
    correctAnswer: 2,
    explanation: "A GMO is any organism whose genetic makeup has been modified in a laboratory using genetic engineering or transgenic technology. This creates combinations of plant, animal, bacterial and virus genes that do not occur in nature.",
    difficulty: "Easy",
    hint: "The name 'Genetically Modified' is a direct clue."
  },
  {
    level: 28,
    mainsubject: "Technology & Development",
    question: "The 'eSanjeevani' platform is a government initiative for what purpose?",
    options: [
      "Tracking vaccine distribution",
      "Online medical record storage",
      "Telemedicine services",
      "Booking hospital appointments"
    ],
    correctAnswer: 3,
    explanation: "eSanjeevani is a national telemedicine service that offers tele-consultations, enabling patient-to-doctor consultations from the confines of their homes.",
    difficulty: "Easy",
    hint: "Sanjeevani is a mythical life-restoring herb; 'e' implies electronic."
  },
  {
    level: 29,
    mainsubject: "Technology & Development",
    question: "What is the primary advantage of mRNA vaccines (like those from Pfizer and Moderna)?",
    options: [
      "They can be stored at room temperature",
      "They can be developed and manufactured more quickly than traditional vaccines",
      "They provide lifelong immunity with a single dose",
      "They are made from a weakened form of the actual virus"
    ],
    correctAnswer: 2,
    explanation: "mRNA vaccines have the advantage of rapid development because they do not require culturing viruses. The mRNA can be synthesized quickly in a lab.",
    difficulty: "Hard",
    hint: "Think about the speed of response during a pandemic."
  },
  {
    level: 30,
    mainsubject: "Technology & Development",
    question: "Bt cotton, a genetically modified crop grown in India, is engineered to be resistant to what?",
    options: [
      "Drought",
      "Bollworms",
      "Herbicides",
      "High temperatures"
    ],
    correctAnswer: 2,
    explanation: "Bt cotton contains a gene from the bacterium Bacillus thuringiensis (Bt) which produces a protein that is toxic to bollworms, a major pest for cotton crops.",
    difficulty: "Medium",
    hint: "The 'Bt' comes from a bacterium that kills a specific type of pest."
  },
  {
    level: 31,
    mainsubject: "Technology & Development",
    question: "What is 'Bio-fortification'?",
    options: [
      "The process of adding fertilizers to soil",
      "The use of bacteria to create medicines",
      "The process of increasing the nutritional value of crops through breeding or genetic modification",
      "The creation of artificial biological environments"
    ],
    correctAnswer: 3,
    explanation: "Bio-fortification is the idea of breeding crops to increase their nutritional value. This can be done either through conventional selective breeding, or through genetic engineering.",
    difficulty: "Medium",
    hint: "'Bio' refers to life, and 'fortification' means strengthening."
  },
  {
    level: 32,
    mainsubject: "Technology & Development",
    question: "What is the main purpose of the 'Co-WIN' portal, launched by the Indian government?",
    options: [
      "To provide information about COVID-19 symptoms",
      "To manage and monitor the COVID-19 vaccination drive",
      "To facilitate online doctor consultations for COVID-19",
      "To track the spread of the coronavirus in real-time"
    ],
    correctAnswer: 2,
    explanation: "The Co-WIN (Covid Vaccine Intelligence Network) platform was created for real-time monitoring of vaccine delivery, tracking, and for people to register for their vaccination slots.",
    difficulty: "Easy",
    hint: "The name combines 'Co' for Covid and 'WIN' for Winning over the virus."
  },
  {
    level: 33,
    mainsubject: "Technology & Development",
    question: "What are 'stem cells'?",
    options: [
        "Cells that form the stem of a plant",
        "The most common type of cell in the human body",
        "Special human cells that can develop into many different cell types",
        "Cells that have been genetically modified"
    ],
    correctAnswer: 3,
    explanation: "Stem cells are undifferentiated or partially differentiated cells that can differentiate into various cell types and proliferate indefinitely to produce more of the same stem cell. They are a key area of medical research.",
    difficulty: "Medium",
    hint: "They are the 'stem' from which other cells branch out."
  },
  {
    level: 34,
    mainsubject: "Technology & Development",
    question: "India's first indigenously developed Human Papillomavirus (HPV) vaccine, 'CERVAVAC', is designed to protect against which disease?",
    options: [
        "Tuberculosis",
        "Polio",
        "Cervical Cancer",
        "Malaria"
    ],
    correctAnswer: 3,
    explanation: "CERVAVAC, developed by the Serum Institute of India, is a quadrivalent HPV vaccine designed to protect against cervical cancer, which is primarily caused by the Human Papillomavirus.",
    difficulty: "Medium",
    hint: "The 'CERVA' in the name is a clue."
  },
  {
    level: 35,
    mainsubject: "Technology & Development",
    question: "The 'Golden Rice' is a genetically engineered variety of rice developed to produce which nutrient?",
    options: [
        "Vitamin C",
        "Iron",
        "Protein",
        "Beta-carotene (a precursor of Vitamin A)"
    ],
    correctAnswer: 4,
    explanation: "Golden Rice is genetically engineered to produce beta-carotene, which the body converts into Vitamin A. It was developed to combat Vitamin A deficiency in populations that rely heavily on rice as a staple food.",
    difficulty: "Medium",
    hint: "The 'Golden' color comes from the nutrient it produces."
  },
  {
    level: 36,
    mainsubject: "Technology & Development",
    question: "What is 'telemedicine'?",
    options: [
        "A special type of medicine for television actors",
        "The remote diagnosis and treatment of patients by means of telecommunications technology",
        "A medical procedure involving telescopes",
        "A branch of medicine dealing with long-distance travel health"
    ],
    correctAnswer: 2,
    explanation: "Telemedicine allows healthcare professionals to evaluate, diagnose, and treat patients at a distance using technology like video conferencing, smartphones, and wireless tools.",
    difficulty: "Easy",
    hint: "'Tele' means 'at a distance'."
  },
  {
    level: 37,
    mainsubject: "Technology & Development",
    question: "In the context of healthcare, what does a 'stent' do?",
    options: [
        "It measures blood pressure",
        "It's a tiny tube inserted into a blocked passageway in the body to keep it open",
        "It's a device for monitoring heart rate",
        "It is used for filtering blood during dialysis"
    ],
    correctAnswer: 2,
    explanation: "A stent is most commonly inserted into arteries as part of a procedure called angioplasty. It helps to keep the artery open and prevent it from narrowing again, ensuring blood flow.",
    difficulty: "Easy",
    hint: "It acts as a scaffold inside a blood vessel."
  },
  {
    level: 38,
    mainsubject: "Technology & Development",
    question: "Mission Indradhanush, a health mission of the Government of India, is associated with what?",
    options: [
        "Eye care",
        "Cancer treatment",
        "Vaccination of children and pregnant women",
        "Malnutrition"
    ],
    correctAnswer: 3,
    explanation: "Mission Indradhanush aims to ensure full immunization with all available vaccines for children up to two years of age and pregnant women. The seven colors of the rainbow (Indradhanush) represent seven preventable diseases.",
    difficulty: "Easy",
    hint: "Indradhanush means rainbow, representing a spectrum of vaccines."
  },
  {
    level: 39,
    mainsubject: "Technology & Development",
    question: "The term 'Bioinformatics' refers to the application of computer technology to manage and analyze what kind of data?",
    options: [
        "Astronomical data",
        "Geological data",
        "Biological data",
        "Financial data"
    ],
    correctAnswer: 3,
    explanation: "Bioinformatics is an interdisciplinary field that develops methods and software tools for understanding biological data, particularly when the data sets are large and complex, such as in genomics and proteomics.",
    difficulty: "Medium",
    hint: "The name combines 'Bio' and 'informatics'."
  },
  {
    level: 40,
    mainsubject: "Technology & Development",
    question: "Which of the following diseases has been declared eradicated from India due to a successful vaccination program?",
    options: [
        "Tuberculosis",
        "Polio",
        "Malaria",
        "Dengue"
    ],
    correctAnswer: 2,
    explanation: "India was declared polio-free by the World Health Organization (WHO) in March 2014 after a massive and sustained Pulse Polio vaccination campaign.",
    difficulty: "Easy",
    hint: "Amitabh Bachchan was a famous brand ambassador for this campaign."
  },
  {
    level: 41,
    mainsubject: "Technology & Development",
    question: "The study of the complete set of DNA, including all of its genes, in an organism is called:",
    options: [
        "Proteomics",
        "Metabolomics",
        "Genomics",
        "Cytology"
    ],
    correctAnswer: 3,
    explanation: "Genomics is the field of biology focusing on the structure, function, evolution, mapping, and editing of genomes. A genome is an organism's complete set of DNA.",
    difficulty: "Easy",
    hint: "It is related to the word 'gene'."
  },
  {
    level: 42,
    mainsubject: "Technology & Development",
    question: "What is 'cloning' in biotechnology?",
    options: [
        "The process of creating a backup of computer data",
        "The process of producing genetically identical individuals of an organism",
        "The process of cleaning laboratory equipment",
        "The process of identifying new species"
    ],
    correctAnswer: 2,
    explanation: "Cloning is the process of creating a 'clone', which is an organism or cell, or group of organisms or cells, produced asexually from one ancestor or stock to which they are genetically identical. Dolly the sheep was a famous example.",
    difficulty: "Easy",
    hint: "Think of creating an exact copy."
  },

  // 8.3: Space & Defence Technology (20 Questions)
  {
    level: 43,
    mainsubject: "Technology & Development",
    question: "What does ISRO stand for?",
    options: [
      "Indian Space Research Organization",
      "International Space Research Organization",
      "Indian Satellite Research Organization",
      "Institute of Space and Rocketry"
    ],
    correctAnswer: 1,
    explanation: "The Indian Space Research Organization is the national space agency of India, headquartered in Bengaluru.",
    difficulty: "Easy",
    hint: "It is India's national space agency."
  },
  {
    level: 44,
    mainsubject: "Technology & Development",
    question: "India's Mars Orbiter Mission is also popularly known as what?",
    options: [
      "Chandrayaan",
      "Gaganyaan",
      "Mangalyaan",
      "Aditya-L1"
    ],
    correctAnswer: 3,
    explanation: "Mangalyaan, from the Sanskrit words 'Mangala' (Mars) and 'Yana' (craft, vehicle), was India's first interplanetary mission, making ISRO the fourth space agency to reach Mars.",
    difficulty: "Easy",
    hint: "'Mangal' is the Hindi word for Mars."
  },
  {
    level: 45,
    mainsubject: "Technology & Development",
    question: "The Agni series of missiles, developed by DRDO, are what type of missiles?",
    options: [
      "Air-to-Air Missiles",
      "Surface-to-Air Missiles",
      "Ballistic Missiles",
      "Cruise Missiles"
    ],
    correctAnswer: 3,
    explanation: "The Agni missiles are a family of medium to intercontinental range ballistic missiles developed by India's Defence Research and Development Organisation (DRDO).",
    difficulty: "Medium",
    hint: "These missiles follow a high, arching trajectory."
  },
  {
    level: 46,
    mainsubject: "Technology & Development",
    question: "The Chandrayaan-3 mission successfully soft-landed its Vikram lander near which region of the Moon?",
    options: [
      "The North Pole",
      "The Equator",
      "The South Pole",
      "The Sea of Tranquility"
    ],
    correctAnswer: 3,
    explanation: "India became the first country to successfully land a spacecraft near the lunar south pole with its Chandrayaan-3 mission in August 2023.",
    difficulty: "Easy",
    hint: "India was the first nation to land in this specific polar region."
  },
  {
    level: 47,
    mainsubject: "Technology & Development",
    question: "What is the name of India's planned human spaceflight mission?",
    options: [
      "Vyommitra",
      "Gaganyaan",
      "Shukrayaan",
      "Aditya"
    ],
    correctAnswer: 2,
    explanation: "The Gaganyaan project aims to demonstrate human spaceflight capability by launching a crew of 3 members to an orbit of 400 km for a 3-day mission and bring them back safely to Earth.",
    difficulty: "Easy",
    hint: "'Gagan' means sky in Sanskrit."
  },
  {
    level: 48,
    mainsubject: "Technology & Development",
    question: "Which launch vehicle is known as the 'workhorse' of ISRO?",
    options: [
      "GSLV MkIII",
      "SSLV",
      "PSLV",
      "ASLV"
    ],
    correctAnswer: 3,
    explanation: "The Polar Satellite Launch Vehicle (PSLV) is known as ISRO's 'workhorse' due to its high reliability and numerous successful launches of Indian and foreign satellites.",
    difficulty: "Medium",
    hint: "It's known for its reliability and frequent use."
  },
  {
    level: 49,
    mainsubject: "Technology & Development",
    question: "DRDO (Defence Research and Development Organisation) operates under which ministry?",
    options: [
      "Ministry of Science and Technology",
      "Ministry of Defence",
      "Prime Minister's Office",
      "Ministry of Home Affairs"
    ],
    correctAnswer: 2,
    explanation: "DRDO is the R&D wing of the Ministry of Defence, Govt of India, with a vision to empower India with cutting-edge defence technologies.",
    difficulty: "Easy",
    hint: "Its purpose is related to the country's defence."
  },
  {
    level: 50,
    mainsubject: "Technology & Development",
    question: "What is 'INS Vikrant'?",
    options: [
      "A nuclear submarine",
      "India's first indigenously-built aircraft carrier",
      "A destroyer ship",
      "A stealth frigate"
    ],
    correctAnswer: 2,
    explanation: "INS Vikrant is the first aircraft carrier to be designed and built in India, a significant milestone for the country's naval capabilities and 'Aatmanirbhar Bharat' initiative.",
    difficulty: "Medium",
    hint: "It carries fighter jets."
  },
  {
    level: 51,
    mainsubject: "Technology & Development",
    question: "India's Aditya-L1 mission is dedicated to the study of what?",
    options: [
      "Jupiter",
      "Black Holes",
      "The Sun",
      "Asteroids"
    ],
    correctAnswer: 3,
    explanation: "Aditya-L1 is the first Indian space-based observatory-class mission to study the Sun from a halo orbit around the first Sun-Earth Lagrangian point (L1).",
    difficulty: "Easy",
    hint: "'Aditya' is a name for the Sun God."
  },
  {
    level: 52,
    mainsubject: "Technology & Development",
    question: "The BrahMos missile is a joint venture between India's DRDO and which other country?",
    options: [
      "USA",
      "France",
      "Israel",
      "Russia"
    ],
    correctAnswer: 4,
    explanation: "BrahMos is a supersonic cruise missile developed as a joint venture between India's DRDO and Russia's NPO Mashinostroyeniya. The name is a portmanteau of the Brahmaputra and Moskva rivers.",
    difficulty: "Medium",
    hint: "The name is a blend of two rivers, one Indian and one from the partner country."
  },
  {
    level: 53,
    mainsubject: "Technology & Development",
    question: "What is the primary difference between a ballistic missile and a cruise missile?",
    options: [
        "Ballistic missiles are faster than cruise missiles",
        "Ballistic missiles follow an unpowered, arching trajectory after burnout, while cruise missiles are self-propelled and fly at low altitudes",
        "Cruise missiles can only be launched from ships",
        "Ballistic missiles cannot carry nuclear warheads"
    ],
    correctAnswer: 2,
    explanation: "A ballistic missile is launched on a sub-orbital flight path and its trajectory is largely determined by gravity. A cruise missile is a self-propelled guided vehicle that flies within the atmosphere and uses jet engine technology.",
    difficulty: "Hard",
    hint: "Think of one as a thrown rock and the other as a small airplane."
  },
  {
    level: 54,
    mainsubject: "Technology & Development",
    question: "What is NavIC, developed by ISRO?",
    options: [
        "A weather forecasting satellite system",
        "An independent regional navigation satellite system",
        "A telecommunication satellite",
        "A space telescope"
    ],
    correctAnswer: 2,
    explanation: "Navigation with Indian Constellation (NavIC) is India's own regional satellite navigation system, designed to provide accurate real-time positioning and timing services over India and the region extending 1,500 km around it.",
    difficulty: "Medium",
    hint: "It's India's alternative to GPS."
  },
  {
    level: 55,
    mainsubject: "Technology & Development",
    question: "Who is known as the 'Father of the Indian Space Program'?",
    options: [
        "C. V. Raman",
        "Homi J. Bhabha",
        "Vikram Sarabhai",
        "A. P. J. Abdul Kalam"
    ],
    correctAnswer: 3,
    explanation: "Dr. Vikram Sarabhai is internationally regarded as the Father of the Indian Space Program. He was instrumental in establishing the Indian National Committee for Space Research (INCOSPAR) in 1962, which was later renamed ISRO.",
    difficulty: "Easy",
    hint: "The lander of the Chandrayaan missions is named after him."
  },
  {
    level: 56,
    mainsubject: "Technology & Development",
    question: "The 'Prithvi' series of missiles developed under the Integrated Guided Missile Development Programme (IGMDP) are:",
    options: [
        "Long-range intercontinental ballistic missiles",
        "Short-range surface-to-surface ballistic missiles",
        "Anti-tank guided missiles",
        "Submarine-launched ballistic missiles"
    ],
    correctAnswer: 2,
    explanation: "The Prithvi missile is a tactical surface-to-surface short-range ballistic missile (SRBM). It was the first missile to be developed under India's prestigious IGMDP.",
    difficulty: "Medium",
    hint: "'Prithvi' means Earth, suggesting a surface-to-surface role."
  },
  {
    level: 57,
    mainsubject: "Technology & Development",
    question: "What is a 'geosynchronous orbit'?",
    options: [
        "A low Earth orbit that passes over the poles",
        "An orbit around a planet where the orbital period is equal to the planet's rotational period",
        "A highly elliptical orbit used for spy satellites",
        "An orbit very close to the Sun"
    ],
    correctAnswer: 2,
    explanation: "A satellite in a geosynchronous orbit returns to the exact same position in the sky after one sidereal day. A geostationary orbit is a special type of geosynchronous orbit where the satellite is always in the same position from the Earth's surface.",
    difficulty: "Medium",
    hint: "The name implies it is 'synchronized' with the Earth's rotation."
  },
  {
    level: 58,
    mainsubject: "Technology & Development",
    question: "ISRO's launch centre, the Satish Dhawan Space Centre, is located in which state?",
    options: [
        "Kerala",
        "Karnataka",
        "Andhra Pradesh",
        "Tamil Nadu"
    ],
    correctAnswer: 3,
    explanation: "The Satish Dhawan Space Centre is located at Sriharikota in the Tirupati district of Andhra Pradesh. Its location on the east coast is ideal for launching satellites into eastward orbits.",
    difficulty: "Easy",
    hint: "It's on the east coast of India."
  },
  {
    level: 59,
    mainsubject: "Technology & Development",
    question: "Which aircraft is the frontline multi-role fighter of the Indian Air Force, procured from France?",
    options: [
        "Sukhoi Su-30MKI",
        "Tejas",
        "MiG-29",
        "Rafale"
    ],
    correctAnswer: 4,
    explanation: "The Dassault Rafale is a French twin-engine, canard delta wing, multirole fighter aircraft. The Indian Air Force has inducted these jets to enhance its combat capabilities.",
    difficulty: "Easy",
    hint: "There was significant media coverage of its procurement."
  },
  {
    level: 60,
    mainsubject: "Technology & Development",
    question: "The rover that was part of the Chandrayaan-3 mission is named:",
    options: [
        "Pragyan",
        "Vikram",
        "Dhruv",
        "Aditya"
    ],
    correctAnswer: 1,
    explanation: "The rover's name is Pragyan, which means 'wisdom' in Sanskrit. The lander was named Vikram after Dr. Vikram Sarabhai.",
    difficulty: "Easy",
    hint: "The name means 'wisdom' in Sanskrit."
  },
  {
    level: 61,
    mainsubject: "Technology & Development",
    question: "India's Anti-Satellite (ASAT) missile test conducted in 2019 was codenamed:",
    options: [
        "Operation Shakti",
        "Mission Shakti",
        "Operation Vijay",
        "Mission Gagan"
    ],
    correctAnswer: 2,
    explanation: "Mission Shakti was a military operation where India successfully tested an anti-satellite weapon, demonstrating its capability to intercept and destroy satellites in low Earth orbit.",
    difficulty: "Medium",
    hint: "'Shakti' means power."
  },
  {
    level: 62,
    mainsubject: "Technology & Development",
    question: "What type of engine is used in the upper stage of India's GSLV Mk-II launch vehicle?",
    options: [
        "Solid fuel engine",
        "Vikas liquid fuel engine",
        "Scramjet engine",
        "Indigenously developed Cryogenic engine"
    ],
    correctAnswer: 4,
    explanation: "The GSLV (Geosynchronous Satellite Launch Vehicle) uses an indigenously developed cryogenic upper stage (CUS), which uses liquid hydrogen and liquid oxygen as propellants. This technology is complex and mastered by only a few nations.",
    difficulty: "Hard",
    hint: "This type of engine uses super-cooled propellants."
  },
  
  // 8.4: Infrastructure Development (18 Questions)
  {
    level: 63,
    mainsubject: "Technology & Development",
    question: "The 'Smart Cities Mission' in India was launched with the primary objective of:",
    options: [
      "Building 100 new cities from scratch",
      "Providing free Wi-Fi in all cities",
      "Promoting cities that provide core infrastructure, a clean and sustainable environment, and a decent quality of life to their citizens through 'smart' solutions",
      "Connecting all cities with high-speed rail"
    ],
    correctAnswer: 3,
    explanation: "The mission focuses on sustainable and inclusive development to create a replicable model which will act as a lighthouse to other aspiring cities. It is about improving existing cities, not building new ones from scratch.",
    difficulty: "Easy",
    hint: "It focuses on improving quality of life using technology."
  },
  {
    level: 64,
    mainsubject: "Technology & Development",
    question: "What is the main focus of the 'Bharatmala Pariyojana'?",
    options: [
      "Development of inland waterways",
      "Development of a network of roads, highways, and expressways",
      "Modernization of Indian Railways",
      "Construction of new airports"
    ],
    correctAnswer: 2,
    explanation: "Bharatmala Pariyojana is a centrally-sponsored and funded road and highways project of the Government of India, focusing on optimizing the efficiency of freight and passenger movement across the country.",
    difficulty: "Easy",
    hint: "'Mala' can mean garland, suggesting a network connecting the country."
  },
  {
    level: 65,
    mainsubject: "Technology & Development",
    question: "The 'Sagarmala' Programme is aimed at the development of what infrastructure?",
    options: [
      "River interlinking",
      "Rural road networks",
      "Ports and coastal shipping",
      "Urban metro rail systems"
    ],
    correctAnswer: 3,
    explanation: "The Sagarmala Programme aims to promote port-led development in the country by harnessing India's 7,500 km long coastline, 14,500 km of potentially navigable waterways, and strategic location on key international maritime trade routes.",
    difficulty: "Easy",
    hint: "'Sagar' means sea or ocean."
  },
  {
    level: 66,
    mainsubject: "Technology & Development",
    question: "The 'UDAN' scheme launched by the government is aimed at what?",
    options: [
      "Developing urban green spaces",
      "Improving national highways",
      "Making air travel affordable and widespread for the common man",
      "Providing electricity to all villages"
    ],
    correctAnswer: 3,
    explanation: "UDAN (Ude Desh ka Aam Naagrik) is a regional airport development and 'Regional Connectivity Scheme' (RCS) with the objective of letting the common citizen of the country fly.",
    difficulty: "Easy",
    hint: "The full form is 'Ude Desh ka Aam Naagrik'."
  },
  {
    level: 67,
    mainsubject: "Technology & Development",
    question: "What is the primary goal of the 'AMRUT' mission?",
    options: [
      "To provide housing for all in urban areas",
      "To ensure that every household has access to a tap with an assured supply of water and a sewerage connection",
      "To develop 100 smart cities",
      "To create a national gas grid"
    ],
    correctAnswer: 2,
    explanation: "The Atal Mission for Rejuvenation and Urban Transformation (AMRUT) focuses on establishing infrastructure that could ensure robust sewage networks and water supply for urban transformation.",
    difficulty: "Medium",
    hint: "It focuses on basic urban amenities like water and sewerage."
  },
  {
    level: 68,
    mainsubject: "Technology & Development",
    question: "India's longest sea bridge, the Atal Setu (Mumbai Trans Harbour Sea Link), connects Mumbai with which area?",
    options: [
      "Goa",
      "Pune",
      "Navi Mumbai",
      "Thane"
    ],
    correctAnswer: 3,
    explanation: "The Atal Bihari Vajpayee Sewri–Nhava Sheva Atal Setu connects Mumbai with its satellite city, Navi Mumbai, significantly reducing travel time between the two.",
    difficulty: "Easy",
    hint: "It connects the island city to its planned satellite city."
  },
  {
    level: 69,
    mainsubject: "Technology & Development",
    question: "The 'Golden Quadrilateral' is a network of highways connecting which four major Indian cities?",
    options: [
      "Srinagar, Kanyakumari, Porbandar, Silchar",
      "Mumbai, Kolkata, Hyderabad, Bengaluru",
      "Delhi, Mumbai, Chennai, Kolkata",
      "Jaipur, Bhopal, Lucknow, Patna"
    ],
    correctAnswer: 3,
    explanation: "The Golden Quadrilateral is a highway network connecting most of the major industrial, agricultural and cultural centres of India. It forms a quadrilateral connecting the four major metro cities.",
    difficulty: "Easy",
    hint: "It connects the four main metro cities in a quadrilateral shape."
  },
  {
    level: 70,
    mainsubject: "Technology & Development",
    question: "The 'Dedicated Freight Corridor' (DFC) project is being implemented to primarily improve the transportation of what?",
    options: [
      "Passengers",
      "Goods and raw materials",
      "Military equipment",
      "Perishable food items"
    ],
    correctAnswer: 2,
    explanation: "The DFC project involves constructing a high-speed, high-capacity railway corridor exclusively for the transportation of freight, or goods. This aims to decongest the existing railway network and speed up freight movement.",
    difficulty: "Medium",
  hint: "The name includes the word 'Freight'."
  },
  {
    level: 71,
    mainsubject: "Technology & Development",
    question: "Under the Smart Cities Mission, what does an 'Integrated Command and Control Centre' (ICCC) do?",
    options: [
        "It's a city's main entertainment hub",
        "It acts as a central 'nerve center' for managing city operations and services",
        "It's a training facility for municipal workers",
        "It is the main office of the city's mayor"
    ],
    correctAnswer: 2,
    explanation: "The ICCC serves as the brain of the city, collecting and analyzing real-time data from various sensors and systems (like traffic cameras, water sensors) to monitor and manage city services like traffic, water, waste, and security.",
    difficulty: "Medium",
    hint: "It 'commands and controls' city services."
  },
  {
    level: 72,
    mainsubject: "Technology & Development",
    question: "The Pradhan Mantri Gram Sadak Yojana (PMGSY) is a nationwide plan to provide good all-weather road connectivity to what?",
    options: [
        "Major cities",
        "State capitals",
        "Unconnected habitations",
        "Ports and airports"
    ],
    correctAnswer: 3,
    explanation: "The primary objective of the PMGSY is to provide all-weather road connectivity to eligible unconnected habitations in rural areas of the country.",
    difficulty: "Easy",
    hint: "'Gram' means village and 'Sadak' means road."
  },
  {
    level: 73,
    mainsubject: "Technology & Development",
    question: "The Chenani-Nashri Tunnel, renamed as Dr. Syama Prasad Mookerjee Tunnel, is located on which National Highway?",
    options: [
        "NH 1",
        "NH 8",
        "NH 44",
        "NH 2"
    ],
    correctAnswer: 3,
    explanation: "It is located on NH 44 in Jammu and Kashmir. This all-weather tunnel bypasses the snow-prone upper reaches and has reduced the distance between Jammu and Srinagar.",
    difficulty: "Medium",
    hint: "This highway is the longest in India, running from Srinagar to Kanyakumari."
  },
  {
    level: 74,
    mainsubject: "Technology & Development",
    question: "What is the primary objective of the 'Jal Marg Vikas Project'?",
    options: [
        "To provide clean drinking water to all villages",
        "To develop National Waterways for commercial navigation",
        "To interlink major rivers in India",
        "To promote rainwater harvesting"
    ],
    correctAnswer: 2,
    explanation: "The Jal Marg Vikas Project (JMVP) aims to enhance the transport capacity and reliability of National Waterway-1 (the Ganga river) for commercial navigation, providing an alternative, more environmentally friendly mode of transport.",
    difficulty: "Medium",
    hint: "'Jal Marg' means 'Water Way'."
  },
  {
    level: 75,
    mainsubject: "Technology & Development",
    question: "The concept of 'Transit-Oriented Development' (TOD) in urban planning focuses on:",
    options: [
        "Building more car parking facilities",
        "Creating compact, walkable, mixed-use communities centered around high-quality train systems",
        "Developing cities in a circular shape",
        "Prioritizing road construction over public transport"
    ],
    correctAnswer: 2,
    explanation: "TOD is an urban planning strategy that aims to concentrate jobs, housing, and services around public transport stations to reduce reliance on private vehicles and promote sustainable urban growth.",
    difficulty: "Hard",
    hint: "It is oriented around 'transit' hubs."
  },
  {
    level: 76,
    mainsubject: "Technology & Development",
    question: "The 'Setu Bharatam' programme was launched to make all National Highways free of what by 2019?",
    options: [
        "Toll booths",
        "Potholes",
        "Railway level crossings",
        "Advertisements"
    ],
    correctAnswer: 3,
    explanation: "The Setu Bharatam programme was launched with the aim of making all National Highways free of railway level crossings by building over-bridges and under-bridges to ensure safe and seamless travel.",
    difficulty: "Medium",
    hint: "'Setu' means bridge."
  },
  {
    level: 77,
    mainsubject: "Technology & Development",
    question: "India's first 'Vande Bharat Express' train was launched between which two cities?",
    options: [
        "Mumbai and Ahmedabad",
        "Delhi and Varanasi",
        "Bengaluru and Chennai",
        "Kolkata and Patna"
    ],
    correctAnswer: 2,
    explanation: "The first Vande Bharat Express, also known as Train 18, was flagged off between New Delhi and Varanasi in February 2019.",
    difficulty: "Medium",
    hint: "It connected the national capital with a major religious city."
  },
  {
    level: 78,
    mainsubject: "Technology & Development",
    question: "What does 'FASTag', seen on vehicle windshields, enable?",
    options: [
        "GPS tracking of the vehicle",
        "Automatic toll payment without stopping",
        "Measurement of the vehicle's speed",
        "Access to in-car Wi-Fi"
    ],
    correctAnswer: 2,
    explanation: "FASTag is an electronic toll collection system operated by the NHAI. It employs Radio Frequency Identification (RFID) technology for making toll payments directly from the prepaid or savings account linked to it.",
    difficulty: "Easy",
    hint: "It makes crossing toll plazas 'fast'."
  },
  {
    level: 79,
    mainsubject: "Technology & Development",
    question: "The Zoji La tunnel project will provide all-weather connectivity between which two regions?",
    options: [
        "Jammu and Kashmir Valley",
        "Srinagar and Leh (Ladakh)",
        "Manali and Leh",
        "Himachal Pradesh and Uttarakhand"
    ],
    correctAnswer: 2,
    explanation: "The Zoji La tunnel will provide strategic, all-weather connectivity between Srinagar, Kargil, and Leh. The Zoji La pass is currently snow-bound for a large part of the year, cutting off Ladakh from the rest of the country.",
    difficulty: "Medium",
    hint: "It connects the Kashmir Valley with Ladakh."
  },
  {
    level: 80,
    mainsubject: "Technology & Development",
    question: "Which of the following is a key component of the 'National Infrastructure Pipeline' (NIP)?",
    options: [
        "A list of all manufacturing companies in India",
        "A government-owned construction company",
        "A first-of-its-kind, whole-of-government exercise to provide world-class infrastructure projects",
        "A plan to privatize all national highways"
    ],
    correctAnswer: 3,
    explanation: "The National Infrastructure Pipeline (NIP) is a forward-looking plan that outlines infrastructure projects worth over ₹102 lakh crore to be implemented between 2020 and 2025 across various sectors like energy, roads, railways, and urban infrastructure.",
    difficulty: "Hard",
    hint: "It is a 'pipeline' of future projects."
  },

  // 8.5: Sustainable Development (20 Questions)
  {
    level: 81,
    mainsubject: "Technology & Development",
    question: "The headquarters of the International Solar Alliance (ISA) is located in which Indian city?",
    options: [
      "New Delhi",
      "Gurugram",
      "Mumbai",
      "Bengaluru"
    ],
    correctAnswer: 2,
    explanation: "The International Solar Alliance is a treaty-based inter-governmental organization whose headquarters is located in Gurugram, Haryana, India.",
    difficulty: "Easy",
    hint: "It's a major satellite city of Delhi."
  },
  {
    level: 82,
    mainsubject: "Technology & Development",
    question: "What is 'Green Technology'?",
    options: [
      "Technology that uses the color green in its design",
      "Technology whose use is intended to mitigate or reverse the effects of human activity on the environment",
      "The use of technology in agriculture",
      "A brand of consumer electronics"
    ],
    correctAnswer: 2,
    explanation: "Green technology, or clean technology, is the application of environmental science to conserve the natural environment and resources, and to curb the negative impacts of human involvement.",
    difficulty: "Easy",
    hint: "It's technology that is environmentally friendly or 'green'."
  },
  {
    level: 83,
    mainsubject: "Technology & Development",
    question: "The 'National Solar Mission', also known as Jawaharlal Nehru National Solar Mission, is part of which larger plan?",
    options: [
      "The National Action Plan on Climate Change (NAPCC)",
      "The Smart Cities Mission",
      "The Make in India initiative",
      "The Digital India programme"
    ],
    correctAnswer: 1,
    explanation: "The National Solar Mission is one of the eight key national missions comprising India's National Action Plan on Climate Change (NAPCC).",
    difficulty: "Medium",
    hint: "It's a mission related to climate."
  },
  {
    level: 84,
    mainsubject: "Technology & Development",
    question: "Which of the following is considered a source of renewable energy?",
    options: [
      "Coal",
      "Natural Gas",
      "Petroleum",
      "Wind"
    ],
    correctAnswer: 4,
    explanation: "Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight, wind, rain, tides, waves, and geothermal heat are common sources.",
    difficulty: "Easy",
    hint: "Which resource will not run out with use?"
  },
  {
    level: 85,
    mainsubject: "Technology & Development",
    question: "What is 'Green Hydrogen'?",
    options: [
      "Hydrogen that is colored green for identification",
      "Hydrogen produced using renewable energy sources, like solar or wind power, to split water",
      "Hydrogen extracted from plants",
      "A type of natural gas"
    ],
    correctAnswer: 2,
    explanation: "Green hydrogen is produced through electrolysis powered by renewable energy, making it a clean fuel with no carbon emissions during its production.",
    difficulty: "Medium",
    hint: "Its 'green' credential comes from how it's produced."
  },
  {
    level: 86,
    mainsubject: "Technology & Development",
    question: "The 'Kusum Scheme' by the Government of India is primarily aimed at helping whom?",
    options: [
      "Urban residents to install solar rooftops",
      "Farmers to install solar pumps and solar power plants",
      "Industrial factories to switch to renewable energy",
      "Electric vehicle manufacturers"
    ],
    correctAnswer: 2,
    explanation: "The Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) scheme is aimed at ensuring energy security for farmers, along with honouring India's commitment to increase the share of installed capacity of electric power from non-fossil-fuel sources.",
    difficulty: "Medium",
    hint: "The 'K' in KUSUM stands for 'Kisan' (farmer)."
  },
  {
    level: 87,
    mainsubject: "Technology & Development",
    question: "What does 'E-waste' primarily refer to?",
    options: [
      "Waste from power plants",
      "Food waste that can be composted",
      "Discarded electronic devices",
      "Waste paper from offices"
    ],
    correctAnswer: 3,
    explanation: "E-waste, or electronic waste, describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered e-waste.",
    difficulty: "Easy",
    hint: "The 'E' stands for electronic."
  },
  {
    level: 88,
    mainsubject: "Technology & Development",
    question: "The Paris Agreement, to which India is a signatory, is a landmark international accord on what issue?",
    options: [
      "Nuclear disarmament",
      "Global trade",
      "Climate change",
      "Cybersecurity"
    ],
    correctAnswer: 3,
    explanation: "The Paris Agreement is a legally binding international treaty on climate change. Its goal is to limit global warming to well below 2, preferably to 1.5 degrees Celsius, compared to pre-industrial levels.",
    difficulty: "Easy",
    hint: "It's about reducing global warming."
  },
  {
    level: 89,
    mainsubject: "Technology & Development",
    question: "In India, the 'PAT Scheme' is a flagship program of the Bureau of Energy Efficiency (BEE) aimed at what?",
    options: [
      "Promoting tourism",
      "Improving road safety",
      "Enhancing energy efficiency in large industries",
      "Providing patents for new inventions"
    ],
    correctAnswer: 3,
    explanation: "The Perform, Achieve and Trade (PAT) scheme is a market-based mechanism to enhance energy efficiency in large, energy-intensive industries by allowing them to trade energy-saving certificates.",
    difficulty: "Hard",
    hint: "The name suggests 'Performing' better in energy use, 'Achieving' targets, and 'Trading' the results."
  },
  {
    level: 90,
    mainsubject: "Technology & Development",
    question: "Which of these is a major challenge associated with solar and wind power?",
    options: [
      "They produce a lot of air pollution",
      "The fuel for them is very expensive",
      "They are not available continuously (intermittency)",
      "They require a very small area of land"
    ],
    correctAnswer: 3,
    explanation: "The biggest challenge for solar and wind power is intermittency – solar power is not available at night, and wind power is not available when the wind isn't blowing. This requires backup power sources or energy storage solutions.",
    difficulty: "Medium",
    hint: "What happens to solar panels at night or wind turbines on a calm day?"
  },
  {
    level: 91,
    mainsubject: "Technology & Development",
    question: "The term 'Net Zero Emissions' means:",
    options: [
        "Completely stopping all emissions of greenhouse gases",
        "Achieving a balance between the greenhouse gases put into the atmosphere and those taken out",
        "Planting enough trees to cover the entire country",
        "Switching entirely to nuclear power"
    ],
    correctAnswer: 2,
    explanation: "Net zero means not adding new emissions to the atmosphere. This can be achieved by a combination of reducing emissions (like switching to renewable energy) and removing greenhouse gases from the atmosphere (like through forests or carbon capture technology).",
    difficulty: "Medium",
    hint: "The 'net' result is zero, not the initial emission itself."
  },
  {
    level: 92,
    mainsubject: "Technology & Development",
    question: "What is the primary function of a catalytic converter in a vehicle?",
    options: [
        "To improve the engine's fuel efficiency",
        "To cool the engine",
        "To convert toxic pollutants in exhaust gas to less toxic pollutants",
        "To silence the engine noise"
    ],
    correctAnswer: 3,
    explanation: "A catalytic converter is an exhaust emission control device that converts toxic gases and pollutants in exhaust gas from an internal combustion engine into less-toxic pollutants by catalyzing a redox reaction.",
    difficulty: "Medium",
    hint: "It acts as a 'catalyst' for a chemical reaction to clean the exhaust."
  },
  {
    level: 93,
    mainsubject: "Technology & Development",
    question: "The 'FAME India' Scheme is associated with promoting what?",
    options: [
        "Organic farming",
        "The use of electric and hybrid vehicles",
        "The construction of green buildings",
        "Exports of Indian handicrafts"
    ],
    correctAnswer: 2,
    explanation: "FAME stands for Faster Adoption and Manufacturing of (Hybrid &) Electric Vehicles in India. It is a scheme under the National Electric Mobility Mission Plan to encourage the adoption of electric vehicles.",
    difficulty: "Easy",
    hint: "Think about 'Faster Adoption' of a new type of vehicle."
  },
  {
    level: 94,
    mainsubject: "Technology & Development",
    question: "What is 'carbon sequestration'?",
    options: [
        "The process of burning fossil fuels",
        "The long-term storage of carbon dioxide to mitigate global warming",
        "The measurement of a product's carbon footprint",
        "A method for producing carbon fibre"
    ],
    correctAnswer: 2,
    explanation: "Carbon sequestration is the process of capturing and storing atmospheric carbon dioxide. It is one method of reducing the amount of CO2 in the atmosphere with the goal of reducing global climate change. Natural forests are a major form of carbon sequestration.",
    difficulty: "Hard",
    hint: "To 'sequester' means to isolate or hide away."
  },
  {
    level: 95,
    mainsubject: "Technology & Development",
    question: "The Bhadla Solar Park, one of the largest solar parks in the world, is located in which Indian state?",
    options: [
        "Gujarat",
        "Rajasthan",
        "Andhra Pradesh",
        "Madhya Pradesh"
    ],
    correctAnswer: 2,
    explanation: "Bhadla Solar Park is located in the Jodhpur district of Rajasthan. The region is known for its high solar irradiation, making it ideal for solar power generation.",
    difficulty: "Medium",
    hint: "It's located in a desert state."
  },
  {
    level: 96,
    mainsubject: "Technology & Development",
    question: "What does the 'GRIHA' rating system in India evaluate?",
    options: [
        "The nutritional value of food products",
        "The energy efficiency of electronic appliances",
        "The environmental performance of a building",
        "The safety of automobiles"
    ],
    correctAnswer: 3,
    explanation: "GRIHA (Green Rating for Integrated Habitat Assessment) is a national rating system for green buildings in India. It evaluates the environmental performance of a building holistically over its entire life cycle.",
    difficulty: "Hard",
    hint: "'Griha' means house or habitat."
  },
  {
    level: 97,
    mainsubject: "Technology & Development",
    question: "Which of the following is a 'biodegradable' material?",
    options: [
        "Plastic bag",
        "Glass bottle",
        "Jute bag",
        "Aluminum can"
    ],
    correctAnswer: 3,
    explanation: "Biodegradable materials can be broken down into natural materials in the environment by microorganisms. Jute is a natural plant fibre and is biodegradable, while plastic, glass, and aluminum are not (or take an extremely long time to degrade).",
    difficulty: "Easy",
    hint: "Which one comes from a plant?"
  },
  {
    level: 98,
    mainsubject: "Technology & Development",
    question: "The National Green Tribunal (NGT) in India was established to handle cases related to what?",
    options: [
        "Consumer rights",
        "Cybercrime",
        "Financial fraud",
        "Environmental protection and conservation"
    ],
    correctAnswer: 4,
    explanation: "The NGT is a specialized body equipped with the necessary expertise to handle environmental disputes involving multi-disciplinary issues. It was established for effective and expeditious disposal of cases relating to environmental protection.",
    difficulty: "Easy",
    hint: "The name includes 'Green'."
  },
  {
    level: 99,
    mainsubject: "Technology & Development",
    question: "What is 'Ethanol Blending'?",
    options: [
        "A technique for making alcohol stronger",
        "A process for water purification",
        "The practice of mixing ethanol with petrol to reduce crude oil import and emissions",
        "A method to preserve food"
    ],
    correctAnswer: 3,
    explanation: "The Ethanol Blended Petrol (EBP) programme aims to promote the use of alternative and environmentally friendly fuels. Ethanol is a biofuel derived from sources like sugarcane, and blending it with petrol helps reduce the consumption of fossil fuels.",
    difficulty: "Medium",
    hint: "It involves mixing a biofuel with a fossil fuel."
  },
  {
    level: 100,
    mainsubject: "Technology & Development",
    question: "The concept of 'Sustainable Development Goals' (SDGs) was formally adopted by which organization?",
    options: [
        "World Bank",
        "World Trade Organization (WTO)",
        "United Nations (UN)",
        "G20"
    ],
    correctAnswer: 3,
    explanation: "The 17 Sustainable Development Goals (SDGs) were adopted by all United Nations Member States in 2015 as a universal call to action to end poverty, protect the planet, and ensure that all people enjoy peace and prosperity by 2030.",
    difficulty: "Easy",
    hint: "It's the primary international body for global cooperation."
  },
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

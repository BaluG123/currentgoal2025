// Sample quiz data structure - you can replace this with your actual JSON files
export const QUIZ_DATA = {
  History: [
    {
      level: 1,
      mainsubject: 'History',
      question:
        "Which civilization is known as the 'Indus Valley Civilization'?",
      options: [
        'Harappan Civilization',
        'Mesopotamian Civilization',
        'Egyptian Civilization',
        'Chinese Civilization',
      ],
      correctAnswer: 1,
      explanation:
        'The Indus Valley Civilization is also known as the Harappan Civilization, named after the first site discovered at Harappa.',
      difficulty: 'Easy',
      hint: 'Think about the first archaeological site discovered',
    },
    {
      level: 2,
      mainsubject: 'History',
      question: 'Who was the founder of the Mauryan Empire?',
      options: ['Ashoka', 'Chandragupta Maurya', 'Bindusara', 'Samprati'],
      correctAnswer: 2,
      explanation:
        'Chandragupta Maurya founded the Mauryan Empire in 322 BCE with the help of his mentor Chanakya.',
      difficulty: 'Medium',
      hint: 'He was guided by a famous teacher',
    },
    {
      level: 3,
      mainsubject: 'History',
      question: 'Which emperor is known for spreading Buddhism?',
      options: ['Chandragupta Maurya', 'Ashoka', 'Bindusara', 'Samprati'],
      correctAnswer: 2,
      explanation:
        'Ashoka is known for spreading Buddhism after the Kalinga war and his conversion to Buddhism.',
      difficulty: 'Medium',
      hint: 'Think about the emperor who changed after a war',
    },
    {
      level: 4,
      mainsubject: 'History',
      question: 'Which dynasty ruled during the Golden Age of India?',
      options: [
        'Mauryan Dynasty',
        'Gupta Dynasty',
        'Kushan Dynasty',
        'Satavahana Dynasty',
      ],
      correctAnswer: 2,
      explanation:
        'The Gupta Dynasty ruled during the Golden Age of India, known for advancements in art, science, and literature.',
      difficulty: 'Easy',
      hint: 'Think about the period of great cultural achievements',
    },
    {
      level: 5,
      mainsubject: 'History',
      question: 'Who was the first Mughal emperor of India?',
      options: ['Akbar', 'Babur', 'Humayun', 'Jahangir'],
      correctAnswer: 2,
      explanation:
        'Babur was the first Mughal emperor who established the Mughal Empire in India in 1526.',
      difficulty: 'Easy',
      hint: 'Think about the founder of the Mughal Empire',
    },
    {
      level: 6,
      mainsubject: 'History',
      question:
        'Which of the following is a major site of the Indus Valley Civilization located in modern-day Pakistan?',
      options: ['Kalibangan', 'Dholavira', 'Harappa', 'Lothal'],
      correctAnswer: 3,
      explanation:
        'Harappa is one of the two largest cities of the Indus Valley Civilization, located in present-day Punjab, Pakistan. It was discovered in 1921 and gives the civilization its alternative name, Harappan Civilization. The site features advanced urban planning, including granaries and drainage systems, highlighting the sophistication of the culture. Archaeological evidence shows a well-organized grid layout and evidence of craft specialization, making it a key example of early urban development in South Asia.',
      difficulty: 'Easy',
      hint: 'This site shares its name with the civilization',
    },
    {
      level: 7,
      mainsubject: 'History',
      question:
        'What was the primary material used for building houses in the Indus Valley Civilization?',
      options: ['Mud', 'Wood', 'Baked bricks', 'Stone'],
      correctAnswer: 3,
      explanation:
        'The Indus Valley people used standardized baked bricks for construction, which ensured uniformity and durability. This is evident in sites like Mohenjo-Daro and Harappa, where brick houses with advanced drainage systems were built. The use of baked bricks indicates a high level of technological advancement in urban planning and architecture, allowing structures to withstand floods and time, unlike perishable materials used in other contemporary cultures.',
      difficulty: 'Easy',
      hint: 'It was uniform and fire-treated',
    },
    {
      level: 8,
      mainsubject: 'History',
      question:
        'The Great Bath discovered at Mohenjo-Daro was likely used for:',
      options: ['Swimming', 'Ritual bathing', 'Water storage', 'Irrigation'],
      correctAnswer: 2,
      explanation:
        "The Great Bath at Mohenjo-Daro is a large waterproof pool, suggesting it was used for religious or ritualistic purposes, possibly purification rites. Its sophisticated design with steps and surrounding rooms indicates its importance in the social and religious life of the Harappan people, reflecting their emphasis on cleanliness and possibly spiritual practices. The structure's size and location in the citadel area point to communal ceremonies rather than everyday use.",
      difficulty: 'Medium',
      hint: 'It involved ceremonial purposes',
    },
    {
      level: 9,
      mainsubject: 'History',
      question:
        'Which of the following statements about the Indus Valley Civilization script is correct?',
      options: [
        'It has been fully translated',
        'It was used only for religious texts',
        'It is alphabetic like Greek',
        'It remains undeciphered',
      ],
      correctAnswer: 4,
      explanation:
        "The Harappan script, found on seals and pottery, consists of pictographic symbols and has not been deciphered yet. Over 400 signs have been identified, but the short length of inscriptions and lack of bilingual texts make it challenging. This mystery adds to the intrigue of the civilization's communication and record-keeping systems, with ongoing debates among scholars about whether it represents a proto-Dravidian language or something else.",
      difficulty: 'Medium',
      hint: 'Scholars still debate its meaning',
    },
    {
      level: 10,
      mainsubject: 'History',
      question:
        'The economy of the Indus Valley Civilization was primarily based on:',
      options: [
        'Fishing and herding',
        'Hunting and gathering',
        'Mining and metallurgy',
        'Agriculture and trade',
      ],
      correctAnswer: 4,
      explanation:
        'The Harappans cultivated wheat, barley, peas, and cotton, using advanced irrigation techniques. They traded with Mesopotamia, exporting goods like beads, shells, and metals. Evidence from granaries and seals supports a surplus economy driven by farming and commerce, which sustained urban centers and craft specialization. This economic model allowed for long-distance trade networks and population growth in major cities.',
      difficulty: 'Easy',
      hint: 'It involved farming and exchange',
    },
    {
      level: 11,
      mainsubject: 'History',
      question:
        'Which artifact from the Indus Valley Civilization is famous for depicting a bearded man?',
      options: [
        'Terracotta mask',
        'Bull seal',
        'Priest-King statue',
        'Dancing Girl figurine',
      ],
      correctAnswer: 3,
      explanation:
        'The Priest-King statue from Mohenjo-Daro shows a seated figure with a beard, possibly representing a leader or deity. Made of steatite, it features intricate details like a trefoil-patterned robe and headband, suggesting social hierarchy and possibly religious authority in Harappan society. This artifact provides insights into the governance and spiritual beliefs of the time.',
      difficulty: 'Medium',
      hint: 'Often called a religious leader figure',
    },
    {
      level: 12,
      mainsubject: 'History',
      question:
        'The Indus Valley Civilization is also known as the Harappan Civilization because:',
      options: [
        'All sites were near Harappa',
        'Harappa was the first site discovered',
        'Harappan script was found there',
        'It was ruled by King Harappa',
      ],
      correctAnswer: 2,
      explanation:
        "Harappa was excavated in 1921 by Daya Ram Sahni, revealing the civilization's urban features. This discovery led to naming the culture after the site, as it was the first major excavation that uncovered the extent and sophistication of this Bronze Age society. Subsequent digs at other sites confirmed its widespread nature across the Indus River basin.",
      difficulty: 'Easy',
      hint: 'Named after the initial excavation site',
    },
    {
      level: 13,
      mainsubject: 'History',
      question:
        'Which of the following was NOT a cause for the decline of the Indus Valley Civilization?',
      options: [
        'Floods',
        'Decline in trade',
        'Climatic changes',
        'Invasion by Aryans',
      ],
      correctAnswer: 4,
      explanation:
        'While Aryan invasion was once theorized, current evidence suggests environmental factors like river shifts, droughts, and floods led to abandonment of cities. Trade decline with Mesopotamia and internal issues also contributed, but no conclusive proof of widespread invasion exists. Modern archaeology favors gradual ecological changes over sudden conquests.',
      difficulty: 'Hard',
      hint: 'A debated theory without strong evidence',
    },
    {
      level: 14,
      mainsubject: 'History',
      question: 'The drainage system of the Indus Valley Civilization was:',
      options: [
        'Open and unplanned',
        'Advanced with covered drains',
        'Absent in most cities',
        'Based on natural slopes only',
      ],
      correctAnswer: 2,
      explanation:
        "Harappan cities had sophisticated drainage with brick-lined channels connected to houses, preventing flooding and maintaining hygiene. This system, including soak pits and manholes, demonstrates advanced engineering and urban planning for sanitation. Such features were unparalleled in other ancient civilizations, underscoring the Harappans' focus on public health.",
      difficulty: 'Easy',
      hint: 'It prevented waterlogging in cities',
    },
    {
      level: 15,
      mainsubject: 'History',
      question:
        'Lothal, a site of the Indus Valley Civilization, is famous for:',
      options: ['Granaries', 'Citadel', 'A dockyard', 'Fire altars'],
      correctAnswer: 3,
      explanation:
        "Lothal in Gujarat had an artificial brick dock, indicating maritime trade. It facilitated connections with Mesopotamia, showcasing the civilization's seafaring capabilities and economic reliance on overseas commerce. The site's warehouse and bead factory further highlight its role as a commercial hub.",
      difficulty: 'Medium',
      hint: 'Related to maritime activities',
    },
    {
      level: 16,
      mainsubject: 'History',
      question: 'The Indus Valley people worshipped a figure resembling:',
      options: ['Tree spirit', 'Proto-Shiva', 'Mother Goddess', 'Bull deity'],
      correctAnswer: 2,
      explanation:
        'A seal from Mohenjo-Daro shows a horned figure surrounded by animals, similar to later Hindu god Shiva as Pashupati. This suggests early forms of yogic or meditative practices and animal worship in Harappan religion. Such depictions indicate continuity with later Indian spiritual traditions.',
      difficulty: 'Medium',
      hint: 'Linked to later Hindu deities',
    },
    {
      level: 17,
      mainsubject: 'History',
      question: 'Which crop was first cultivated by the Indus Valley people?',
      options: ['Barley', 'Cotton', 'Wheat', 'Rice'],
      correctAnswer: 2,
      explanation:
        "The Harappans were the first to grow cotton, called 'sindon' by Greeks. Evidence from Mehrgarh shows early domestication, supporting textile production and trade, a key economic activity. This innovation influenced global textile history through trade routes.",
      difficulty: 'Hard',
      hint: "Known as 'sindon' to ancient Greeks",
    },
    {
      level: 18,
      mainsubject: 'History',
      question: 'The standard weights in the Indus Valley were based on:',
      options: ['Decimal system', 'Octal', 'Hexadecimal', 'Binary system'],
      correctAnswer: 4,
      explanation:
        'Harappan weights followed ratios like 1:2:4:8:16, made of chert. This system ensured accurate trade measurements, reflecting standardized commerce across the civilization. The precision in weights points to a regulated economy and mathematical knowledge.',
      difficulty: 'Medium',
      hint: 'Multiples of two',
    },
    {
      level: 19,
      mainsubject: 'History',
      question: 'Kalibangan site is known for:',
      options: ['Granary', 'Dockyard', 'Fire altars', 'Great Bath'],
      correctAnswer: 3,
      explanation:
        "In Rajasthan, Kalibangan revealed ploughed fields and fire altars, indicating ritual practices and advanced agriculture with furrows for irrigation. The site's layout and artifacts provide evidence of religious ceremonies and early farming techniques in the Harappan culture.",
      difficulty: 'Medium',
      hint: 'Evidence of ritual fires',
    },
    {
      level: 20,
      mainsubject: 'History',
      question: 'The Harappan civilization lacked:',
      options: ['Drainage systems', 'Brick buildings', 'Iron tools', 'Seals'],
      correctAnswer: 3,
      explanation:
        'As a Bronze Age culture, Harappans used copper and bronze but not iron. This technological gap may have contributed to their decline when iron-using peoples arrived. The absence of iron limited their tool durability compared to later civilizations.',
      difficulty: 'Hard',
      hint: 'They were Bronze Age, not Iron Age',
    },
    {
      level: 21,
      mainsubject: 'History',
      question: 'Dholavira is unique for its:',
      options: [
        'Dockyard',
        'Water conservation system',
        'Great Bath',
        'Fire altars',
      ],
      correctAnswer: 2,
      explanation:
        'In Gujarat, Dholavira had reservoirs and dams for water management in an arid region, showcasing engineering for sustainability. This system included large tanks and channels, highlighting adaptation to environmental challenges in the Rann of Kutch.',
      difficulty: 'Medium',
      hint: 'Advanced hydrology in desert area',
    },
    {
      level: 22,
      mainsubject: 'History',
      question: 'The Indus Valley Civilization traded with:',
      options: ['Mesopotamia', 'China', 'Greece', 'Egypt'],
      correctAnswer: 1,
      explanation:
        'Harappan artifacts in Sumerian sites indicate trade in carnelian, lapis lazuli, and metals. Seals and weights suggest commercial exchanges between the two civilizations, with goods transported via sea routes through the Persian Gulf.',
      difficulty: 'Easy',
      hint: 'Ancient Sumer and Babylon',
    },
    {
      level: 23,
      mainsubject: 'History',
      question:
        'Which of the following statements is true about Indus Valley social structure?',
      options: [
        'Matriarchal society',
        'No clear evidence of kings or priests ruling',
        'Strict caste system like Vedas',
        'Warrior class dominated',
      ],
      correctAnswer: 2,
      explanation:
        'Absence of palaces or temples suggests a more egalitarian society without centralized royalty or priesthood, differing from other ancient civilizations. Artifacts like seals may indicate merchants or elites, but no monumental structures glorify rulers.',
      difficulty: 'Hard',
      hint: 'Lack of monuments to rulers',
    },
    {
      level: 24,
      mainsubject: 'History',
      question: 'The Harappan city planning was:',
      options: ['Irregular', 'Circular', 'Linear', 'Grid pattern'],
      correctAnswer: 4,
      explanation:
        'Cities like Mohenjo-Daro had streets in a grid layout, with north-south and east-west orientations, facilitating efficient movement and drainage. This planned design reflects centralized authority and engineering prowess.',
      difficulty: 'Easy',
      hint: 'Like modern urban grids',
    },
    {
      level: 25,
      mainsubject: 'History',
      question: 'Rakhigarhi is notable as:',
      options: [
        'Port city',
        'Largest Harappan site',
        'Mining town',
        'Religious center',
      ],
      correctAnswer: 2,
      explanation:
        'In Haryana, Rakhigarhi is the biggest excavated site, larger than Mohenjo-Daro, providing insights into rural Harappan life and craft specialization. Recent digs have revealed jewelry and pottery workshops.',
      difficulty: 'Medium',
      hint: 'Bigger than Mohenjo-Daro',
    },
    {
      level: 26,
      mainsubject: 'History',
      question: 'The Vedic Age is divided into:',
      options: [
        'Rigvedic and Samavedic',
        'Brahmana and Upanishadic',
        'Early and Later Vedic Periods',
        'Pre and Post Vedic',
      ],
      correctAnswer: 3,
      explanation:
        'Early Vedic (1500-1000 BCE) focuses on Rig Veda, nomadic life; Later Vedic (1000-600 BCE) sees settled agriculture, iron use, and societal complexity in other Vedas. This division marks the transition from pastoral to agrarian society.',
      difficulty: 'Easy',
      hint: 'Based on Rig Veda and later texts',
    },
    {
      level: 27,
      mainsubject: 'History',
      question: 'The Rig Veda is a collection of:',
      options: [
        'Spells and charms',
        'Melodies',
        'Ritual formulas',
        'Hymns to gods',
      ],
      correctAnswer: 4,
      explanation:
        'Rig Veda contains 1028 hymns praising deities like Indra, Agni, praising nature, battles, and early Aryan life, composed by rishis. It is the oldest religious text in the world, offering glimpses into Indo-Aryan migration and culture.',
      difficulty: 'Easy',
      hint: 'Oldest Veda with praises',
    },
    {
      level: 28,
      mainsubject: 'History',
      question: 'In Early Vedic society, the basic unit was:',
      options: [
        'Vis (clan)',
        'Jana (tribe)',
        'Kula (family)',
        'Grama (village)',
      ],
      correctAnswer: 3,
      explanation:
        'Society was kin-based, starting with family (kula), then village (grama), clan (vis), and tribe (jana), led by rajan. This structure emphasized familial ties and collective decision-making in tribal assemblies.',
      difficulty: 'Medium',
      hint: 'Smallest social group',
    },
    {
      level: 29,
      mainsubject: 'History',
      question: 'The Vedic Aryans were primarily:',
      options: ['Hunters', 'Pastoralists', 'Agriculturists', 'Traders'],
      correctAnswer: 2,
      explanation:
        'Early Vedics were semi-nomadic herders, valuing cattle (gavishti wars for cows), with limited agriculture, focusing on livestock for wealth. Cattle were a measure of prosperity and often the cause of conflicts.',
      difficulty: 'Easy',
      hint: 'Cattle were central to economy',
    },
    {
      level: 30,
      mainsubject: 'History',
      question: 'Which assembly was prominent in Early Vedic period?',
      options: [
        'Sabha and Samiti',
        'Gana Sangha',
        'Vidatha only',
        'Rajya Sabha',
      ],
      correctAnswer: 1,
      explanation:
        "Sabha (elders' assembly) and Samiti (folk assembly) advised the rajan on decisions, reflecting tribal democracy. These bodies discussed warfare, cattle distribution, and governance, showing participatory elements in early Aryan society.",
      difficulty: 'Medium',
      hint: 'Tribal councils',
    },
    {
      level: 31,
      mainsubject: 'History',
      question: 'The god Indra was associated with:',
      options: ['Fire', 'Sun', 'War and rain', 'Wind'],
      correctAnswer: 3,
      explanation:
        'Indra, the most invoked god in Rig Veda, was the warrior deity bringing rain and victory in battles against dasyus. He is depicted with a thunderbolt, symbolizing strength and fertility through storms.',
      difficulty: 'Easy',
      hint: 'Thunderbolt wielder',
    },
    {
      level: 32,
      mainsubject: 'History',
      question: 'In Later Vedic period, society became:',
      options: [
        'More hierarchical with varnas',
        'Nomadic again',
        'Matriarchal',
        'Egalitarian',
      ],
      correctAnswer: 1,
      explanation:
        "Varna system rigidified into brahmana, kshatriya, vaishya, shudra; patriarchal families, restricted women's rights. This shift accompanied territorial expansion and agricultural settlement.",
      difficulty: 'Medium',
      hint: 'Caste beginnings',
    },
    {
      level: 33,
      mainsubject: 'History',
      question: 'Iron was introduced in Vedic India during:',
      options: ['Post-Vedic', 'Later Vedic period', 'Pre-Vedic', 'Early Vedic'],
      correctAnswer: 2,
      explanation:
        'Around 1000 BCE, iron (shyama ayas) enabled forest clearing for agriculture, leading to settled life and surplus. This technological advance facilitated the expansion into the Ganges plain.',
      difficulty: 'Medium',
      hint: 'Black metal for tools',
    },
    {
      level: 34,
      mainsubject: 'History',
      question: 'The Later Vedic texts include:',
      options: [
        'Only Rig Veda',
        'Brahmanas, Aranyakas, Upanishads',
        'Epics',
        'Puranas',
      ],
      correctAnswer: 2,
      explanation:
        'Brahmanas explain rituals, Aranyakas are forest texts, Upanishads philosophical, shifting from ritual to knowledge. These texts mark the evolution of Vedic thought toward metaphysics.',
      difficulty: 'Easy',
      hint: 'Attached to Vedas',
    },
    {
      level: 35,
      mainsubject: 'History',
      question: "The concept of 'gotra' appeared in:",
      options: [
        'Sangam age',
        'Later Vedic period',
        'Early Vedic',
        'Gupta period',
      ],
      correctAnswer: 2,
      explanation:
        'Gotra regulated marriage, exogamy, indicating social organization based on descent from common ancestor. It became important for avoiding incest and maintaining lineage purity.',
      difficulty: 'Hard',
      hint: 'Lineage for exogamy',
    },
    {
      level: 36,
      mainsubject: 'History',
      question: 'Vedic economy transitioned to:',
      options: [
        'Agriculture in Later Vedic',
        'Industry in Gupta',
        'Trade in Post',
        'Pastoral in Early',
      ],
      correctAnswer: 1,
      explanation:
        'From pastoralism to settled farming with iron ploughs, growing barley, rice, wheat; cattle still wealth symbol. This change supported population growth and urbanization.',
      difficulty: 'Medium',
      hint: 'Settled farming',
    },
    {
      level: 37,
      mainsubject: 'History',
      question: "The 'Purusha Sukta' in Rig Veda describes:",
      options: [
        'Battle of ten kings',
        'River praises',
        'Creation hymn',
        'Origin of varnas',
      ],
      correctAnswer: 4,
      explanation:
        "It explains varnas from Purusha's body: brahmanas from mouth, kshatriyas arms, vaishyas thighs, shudras feet. This hymn is a foundational text for the caste system in Hinduism.",
      difficulty: 'Medium',
      hint: 'Social classes from cosmic man',
    },
    {
      level: 38,
      mainsubject: 'History',
      question: 'Women in Early Vedic society:',
      options: [
        'Had access to assemblies',
        'Were warriors',
        'Could not own property',
        'Were secluded',
      ],
      correctAnswer: 1,
      explanation:
        'Women attended sabha/samiti, composed hymns (Lopamudra), had education; status declined in Later Vedic. This indicates a relatively higher position compared to later periods.',
      difficulty: 'Hard',
      hint: 'Participated in tribal meetings',
    },
    {
      level: 39,
      mainsubject: 'History',
      question: 'The Vedic Aryans spoke:',
      options: [
        'Austro-Asiatic',
        'Sino-Tibetan',
        'Dravidian',
        'Indo-Aryan language',
      ],
      correctAnswer: 4,
      explanation:
        'Sanskrit is Indo-Aryan, part of Indo-European family, brought by migrants, evolving into Vedic Sanskrit. Linguistic similarities link it to languages like Latin and Greek.',
      difficulty: 'Easy',
      hint: 'Related to European languages',
    },
    {
      level: 40,
      mainsubject: 'History',
      question: 'The Battle of Ten Kings was fought on:',
      options: ['Saraswati', 'Yamuna', 'Ganga', 'River Parushni (Ravi)'],
      correctAnswer: 4,
      explanation:
        'Bharatas under Sudas defeated Puru-led confederacy, consolidating Aryan tribes in Punjab region. Described in Rig Veda, it highlights early tribal rivalries.',
      difficulty: 'Medium',
      hint: 'Tribal conflict in Rig Veda',
    },
    {
      level: 41,
      mainsubject: 'History',
      question: 'Varuna in Vedas is god of:',
      options: ['Cosmic order and waters', 'Thunder', 'Fire', 'Wind'],
      correctAnswer: 1,
      explanation:
        'Varuna upholds rta (cosmic law), associated with oceans, rivers, morality; paired with Mitra. He represents ethical order and punishment for sins.',
      difficulty: 'Medium',
      hint: 'Upholder of moral law',
    },
    {
      level: 42,
      mainsubject: 'History',
      question: 'In Later Vedic, kings performed:',
      options: [
        'Simple ceremonies',
        'No rituals',
        'Rajasuya and Ashvamedha',
        'Only yajnas',
      ],
      correctAnswer: 3,
      explanation:
        "Rajasuya for consecration, Ashvamedha for supremacy, enhancing king's divine status and power. These rituals legitimized rule and expanded territory.",
      difficulty: 'Medium',
      hint: 'Royal sacrifices',
    },
    {
      level: 43,
      mainsubject: 'History',
      question: "The term 'Bali' in Vedic times refers to:",
      options: [
        'Forced tax',
        'Gift to priests',
        'Voluntary offering to king',
        'Sacrifice',
      ],
      correctAnswer: 3,
      explanation:
        'In Early Vedic, bali was voluntary tribute; later became regular tax in Later Vedic as state strengthened. It evolved into a form of revenue for the king.',
      difficulty: 'Hard',
      hint: 'Tribute to leader',
    },
    {
      level: 44,
      mainsubject: 'History',
      question: 'Upanishads focus on:',
      options: ['Hymns', 'Rituals', 'Philosophical knowledge', 'Melodies'],
      correctAnswer: 3,
      explanation:
        'Upanishads discuss atman, brahman, karma, moksha; shift from external rituals to internal realization. They form the basis of Vedanta philosophy.',
      difficulty: 'Easy',
      hint: 'Jnana path',
    },
    {
      level: 45,
      mainsubject: 'History',
      question: 'The Aryan homeland theory suggests they came from:',
      options: ['Africa', 'Central Asia', 'South India', 'America'],
      correctAnswer: 2,
      explanation:
        'Linguistic similarities with Indo-European languages point to steppe migrations around 1500 BCE into India. Archaeological and genetic evidence supports this migration theory.',
      difficulty: 'Medium',
      hint: 'Steppe migrants',
    },
    {
      level: 46,
      mainsubject: 'History',
      question: 'Vedic religion was:',
      options: [
        'Animistic only',
        'Polytheistic with nature gods',
        'Monotheistic',
        'Atheistic',
      ],
      correctAnswer: 2,
      explanation:
        'Gods like Indra (rain/war), Agni (fire), Varuna (order), personifying natural forces, worshipped through yajnas. Rituals involved offerings to maintain cosmic balance.',
      difficulty: 'Easy',
      hint: 'Multiple deities',
    },
    {
      level: 47,
      mainsubject: 'History',
      question: "The 'Shatapatha Brahmana' belongs to:",
      options: ['Rig Veda', 'Atharva Veda', 'Yajur Veda', 'Sama Veda'],
      correctAnswer: 3,
      explanation:
        'It explains Yajur Veda rituals, including philosophical discussions on creation and society. As the largest Brahmana, it provides detailed commentary on sacrificial practices.',
      difficulty: 'Hard',
      hint: 'Largest Brahmana text',
    },
    {
      level: 48,
      mainsubject: 'History',
      question: "In Vedic times, 'gavishti' means:",
      options: ['Cattle raids', 'Agriculture', 'Ritual', 'Trade'],
      correctAnswer: 1,
      explanation:
        'Tribal wars for cattle (go), central to pastoral economy, mentioned in Rig Veda. These raids were a source of wealth and prestige among tribes.',
      difficulty: 'Medium',
      hint: 'Search for cows',
    },
    {
      level: 49,
      mainsubject: 'History',
      question: "The Vedic 'purohita' was:",
      options: ['Warrior', 'Merchant', 'Farmer', 'Chief priest'],
      correctAnswer: 4,
      explanation:
        'Purohita advised the rajan, performed rituals; Vasistha for Sudas in Dasarajna. He played a key role in religious and political affairs.',
      difficulty: 'Easy',
      hint: 'Royal chaplain',
    },
    {
      level: 50,
      mainsubject: 'History',
      question: 'Later Vedic period saw the rise of:',
      options: [
        'Tribal assemblies only',
        'City-states',
        'Republics',
        'Territorial kingdoms',
      ],
      correctAnswer: 4,
      explanation:
        'From janas to janapadas and mahajanapadas, with kings like in Kurus, Panchalas. This marked the formation of larger states with standing armies.',
      difficulty: 'Medium',
      hint: 'From tribes to states',
    },
    {
      level: 51,
      mainsubject: 'History',
      question: 'The 24th Tirthankara of Jainism was:',
      options: [
        'Vardhamana Mahavira',
        'Rishabhanatha',
        'Neminatha',
        'Parshvanatha',
      ],
      correctAnswer: 1,
      explanation:
        'Mahavira, born 599 BCE, reformed Jainism, teaching ahimsa, satya, asteya, brahmacharya, aparigraha for liberation. His teachings emphasized asceticism and non-violence as paths to spiritual freedom.',
      difficulty: 'Easy',
      hint: 'Founder of modern Jainism',
    },
    {
      level: 52,
      mainsubject: 'History',
      question: 'The Triratna in Jainism are:',
      options: [
        'Buddha, dhamma, sangha',
        'Ahimsa, satya, asteya',
        'Right knowledge, faith, conduct',
        'Karma, dharma, moksha',
      ],
      correctAnswer: 3,
      explanation:
        'Samayak darshana (faith), jnana (knowledge), charitra (conduct) are the three jewels for attaining moksha. They guide followers toward ethical living and enlightenment.',
      difficulty: 'Easy',
      hint: 'Three jewels of Jainism',
    },
    {
      level: 53,
      mainsubject: 'History',
      question: 'Jainism believes in:',
      options: [
        'Reincarnation without soul',
        'No creator god, eternal universe',
        'Single god Brahma',
        'Heaven and hell only',
      ],
      correctAnswer: 2,
      explanation:
        'Jain cosmology posits an eternal universe without a creator, governed by laws, with souls reincarnating based on karma. This atheistic view emphasizes individual responsibility for salvation.',
      difficulty: 'Medium',
      hint: 'Atheistic philosophy',
    },
    {
      level: 54,
      mainsubject: 'History',
      question: 'The first Jain council was held at:',
      options: ['Vaishali', 'Rajagriha', 'Valabhi', 'Pataliputra'],
      correctAnswer: 4,
      explanation:
        "After Mahavira's death, the first council at Pataliputra compiled teachings into 12 angas. It aimed to preserve oral traditions in a canonical form.",
      difficulty: 'Medium',
      hint: 'Mauryan capital',
    },
    {
      level: 55,
      mainsubject: 'History',
      question:
        'The split in Jainism into Digambara and Svetambara occurred due to:',
      options: [
        'Geographical separation',
        'Clothing practices',
        'Scriptural differences',
        'Leadership dispute',
      ],
      correctAnswer: 2,
      explanation:
        "Digambara (sky-clad) monks nude, Svetambara (white-clad) wear white robes; schism formalized at Valabhi council. Differences also extend to texts and women's salvation.",
      difficulty: 'Medium',
      hint: 'Naked vs clothed monks',
    },
    {
      level: 56,
      mainsubject: 'History',
      question: 'Mahavira attained nirvana at:',
      options: ['Vaishali', 'Pavapuri', 'Kundagrama', 'Kashi'],
      correctAnswer: 2,
      explanation:
        'At age 72, Mahavira achieved kaivalya at Pavapuri, Bihar, marking Diwali for Jains. This event symbolizes ultimate liberation from the cycle of birth and death.',
      difficulty: 'Easy',
      hint: 'Place of final liberation',
    },
    {
      level: 57,
      mainsubject: 'History',
      question: 'Jainism spread mainly in:',
      options: [
        'Northern India',
        'Central Asia',
        'Eastern India',
        'Western and southern India',
      ],
      correctAnswer: 4,
      explanation:
        'Patronized by kings in Deccan, Gujarat, Rajasthan; texts like Kalpasutra spread teachings. Migration of monks helped establish communities in these regions.',
      difficulty: 'Medium',
      hint: 'Magadha to Deccan',
    },
    {
      level: 58,
      mainsubject: 'History',
      question: 'The principle of Anekantavada in Jainism means:',
      options: [
        'Asceticism',
        'Karma theory',
        'Non-violence',
        'Multi-sided reality',
      ],
      correctAnswer: 4,
      explanation:
        'Truth is relative, multiple viewpoints (syadvada), promoting tolerance and non-absolutism. It encourages understanding diverse perspectives in debates.',
      difficulty: 'Hard',
      hint: 'Many-sided truth',
    },
    {
      level: 59,
      mainsubject: 'History',
      question: 'Jain texts are written in:',
      options: ['Pali', 'Tamil', 'Sanskrit', 'Prakrit'],
      correctAnswer: 4,
      explanation:
        "Angas and Purvas in Ardhamagadhi Prakrit, accessible to common people. This choice reflected Jainism's appeal to non-elite classes.",
      difficulty: 'Medium',
      hint: 'Language like Pali',
    },
    {
      level: 60,
      mainsubject: 'History',
      question: 'The 23rd Tirthankara was:',
      options: ['Parshvanatha', 'Neminatha', 'Mahavira', 'Rishabhanatha'],
      correctAnswer: 1,
      explanation:
        'Parshvanatha taught four vows (ahimsa, satya, asteya, aparigraha); Mahavira added brahmacharya. He lived in the 8th century BCE and influenced Jain ethics.',
      difficulty: 'Medium',
      hint: 'Predecessor to Mahavira',
    },
    {
      level: 61,
      mainsubject: 'History',
      question: 'Siddhartha Gautama attained enlightenment under:',
      options: ['Bodhi tree', 'Sal tree', 'Peepal tree', 'Banyan tree'],
      correctAnswer: 1,
      explanation:
        'At Bodh Gaya, under ficus religiosa, becoming Buddha after meditation on suffering. The tree symbolizes wisdom and is revered in Buddhist tradition.',
      difficulty: 'Easy',
      hint: 'Tree of awakening',
    },
    {
      level: 62,
      mainsubject: 'History',
      question: 'The Four Noble Truths are:',
      options: [
        'Suffering, cause, cessation, path',
        'Ahimsa, satya, asteya, aparigraha',
        'Yama, niyama, asana, pranayama',
        'Karma, dharma, artha, moksha',
      ],
      correctAnswer: 1,
      explanation:
        'Dukkha (suffering exists), samudaya (craving causes it), nirodha (it can end), magga (eightfold path ends it). These truths form the foundation of Buddhist philosophy on human existence.',
      difficulty: 'Easy',
      hint: 'Core Buddhist teachings',
    },
    {
      level: 63,
      mainsubject: 'History',
      question: 'The Eightfold Path includes:',
      options: [
        'Three jewels',
        'Right view, intention, speech, action, livelihood, effort, mindfulness, concentration',
        'Four yamas',
        'Five vows',
      ],
      correctAnswer: 2,
      explanation:
        'Middle way to nirvana: wisdom (1-2), ethics (3-5), meditation (6-8). It provides a practical guide for ethical and mental development.',
      difficulty: 'Medium',
      hint: 'Path to end suffering',
    },
    {
      level: 64,
      mainsubject: 'History',
      question: "Buddha's first sermon was at:",
      options: ['Bodh Gaya', 'Kushinagar', 'Sarnath', 'Lumbini'],
      correctAnswer: 3,
      explanation:
        'Dhammacakkappavattana Sutta at Deer Park, teaching Four Truths to five ascetics. This event marks the beginning of the Buddhist sangha.',
      difficulty: 'Easy',
      hint: 'Deer Park discourse',
    },
    {
      level: 65,
      mainsubject: 'History',
      question: 'The Buddhist sangha consisted of:',
      options: ['Kings', 'Priests', 'Monks and nuns', 'Lay followers only'],
      correctAnswer: 3,
      explanation:
        'Bhikkhus and bhikkhunis following vinaya rules, supported by upasakas/upasikas. The sangha was a democratic community focused on spiritual practice.',
      difficulty: 'Medium',
      hint: 'Monastic community',
    },
    {
      level: 66,
      mainsubject: 'History',
      question: 'Tripitaka means:',
      options: ['Three baskets', 'Four truths', 'Eight paths', 'Five precepts'],
      correctAnswer: 1,
      explanation:
        "Vinaya (discipline), Sutta (discourses), Abhidhamma (philosophy) in Pali canon. These collections preserve Buddha's teachings for posterity.",
      difficulty: 'Easy',
      hint: 'Buddhist scriptures',
    },
    {
      level: 67,
      mainsubject: 'History',
      question: 'Buddhism split into Mahayana and Hinayana at:',
      options: [
        'First council',
        'Second council',
        'Fourth council',
        'Third council',
      ],
      correctAnswer: 3,
      explanation:
        "Under Kanishka in Kashmir, Mahayana (great vehicle) emphasized bodhisattvas, Hinayana (lesser) stuck to original teachings. The split reflected differing interpretations of Buddha's role.",
      difficulty: 'Medium',
      hint: "Kanishka's council",
    },
    {
      level: 68,
      mainsubject: 'History',
      question: 'Ashoka embraced Buddhism after:',
      options: ['Birth', 'Kalinga war', 'Death', 'Enlightenment'],
      correctAnswer: 2,
      explanation:
        'Horror of Kalinga violence led Ashoka to dhamma, promoting non-violence through edicts. This transformation influenced his policies toward welfare and tolerance.',
      difficulty: 'Easy',
      hint: 'Bloody conquest',
    },
    {
      level: 69,
      mainsubject: 'History',
      question: 'The Middle Path in Buddhism avoids:',
      options: [
        'All emotions',
        'Social life',
        'Extremes of indulgence and asceticism',
        'Knowledge',
      ],
      correctAnswer: 3,
      explanation:
        "Buddha's path balances sensory pleasures and self-denial for enlightenment. It promotes moderation in all aspects of life.",
      difficulty: 'Medium',
      hint: 'Balanced life',
    },
    {
      level: 70,
      mainsubject: 'History',
      question: 'Buddha rejected:',
      options: [
        'Kingship',
        'Monastic life',
        'Caste system and Vedic rituals',
        'All religions',
      ],
      correctAnswer: 3,
      explanation:
        'Emphasized equality, karma over birth, simple ethics over elaborate ceremonies. This rejection appealed to lower castes and promoted social reform.',
      difficulty: 'Medium',
      hint: 'Social equality',
    },
    {
      level: 71,
      mainsubject: 'History',
      question: 'The first Buddhist council was at:',
      options: ['Pataliputra', 'Kashmir', 'Vaishali', 'Rajagriha'],
      correctAnswer: 4,
      explanation:
        "After Buddha's death, under Mahakassapa, compiled Vinaya and Sutta Pitakas. It aimed to preserve teachings orally.",
      difficulty: 'Medium',
      hint: 'Immediately after parinirvana',
    },
    {
      level: 72,
      mainsubject: 'History',
      question: 'Nirvana means:',
      options: [
        'Heaven',
        'Extinction of desire and suffering',
        'Enlightenment under tree',
        'Rebirth',
      ],
      correctAnswer: 2,
      explanation:
        'End of cycle of rebirth, state of peace beyond suffering. It is the ultimate goal in Buddhism, achieved through insight.',
      difficulty: 'Easy',
      hint: 'Blowing out',
    },
    {
      level: 73,
      mainsubject: 'History',
      question: 'Buddhism spread to:',
      options: ['Europe', 'Asia and beyond', 'Middle East', 'Only India'],
      correctAnswer: 2,
      explanation:
        "Through missionaries, trade, became major religion in China, Japan, Southeast Asia. Ashoka's efforts accelerated its global reach.",
      difficulty: 'Easy',
      hint: 'Global religion',
    },
    {
      level: 74,
      mainsubject: 'History',
      question: "The symbol of Buddha's birth is:",
      options: ['Wheel', 'Lotus', 'Horse', 'Tree'],
      correctAnswer: 2,
      explanation:
        'Lotus represents purity; symbols mark life events in art. It signifies rising above worldly attachments.',
      difficulty: 'Hard',
      hint: 'Flower of purity',
    },
    {
      level: 75,
      mainsubject: 'History',
      question: 'Theravada is another name for:',
      options: ['Vajrayana', 'Hinayana', 'Zen', 'Mahayana'],
      correctAnswer: 2,
      explanation:
        'Elder school, focuses on original teachings, prevalent in Sri Lanka, Southeast Asia. It emphasizes monastic discipline and meditation.',
      difficulty: 'Medium',
      hint: 'Southern Buddhism',
    },
    {
      level: 76,
      mainsubject: 'History',
      question: 'Buddha died at:',
      options: ['Sarnath', 'Kushinagar', 'Lumbini', 'Bodh Gaya'],
      correctAnswer: 2,
      explanation:
        'Parinirvana at 80, under sal trees, marking final liberation. His last words encouraged diligence in practice.',
      difficulty: 'Easy',
      hint: 'Final nirvana place',
    },
    {
      level: 77,
      mainsubject: 'History',
      question: 'The Jatakas are:',
      options: [
        'Philosophical treatises',
        "Stories of Buddha's previous lives",
        'Ritual texts',
        'Hymns',
      ],
      correctAnswer: 2,
      explanation:
        "500+ tales illustrating moral lessons from Buddha's past incarnations as animals or humans. They are part of the Sutta Pitaka and popular in Buddhist art.",
      difficulty: 'Medium',
      hint: 'Birth stories',
    },
    {
      level: 78,
      mainsubject: 'History',
      question: 'Buddhism declined in India due to:',
      options: [
        'Internal splits only',
        'Hindu revival and invasions',
        'Too many councils',
        'Lack of texts',
      ],
      correctAnswer: 2,
      explanation:
        'Bhakti movement, Shaivism/Vaishnavism resurgence, Muslim invasions destroying monasteries. Assimilation into Hinduism also played a role.',
      difficulty: 'Hard',
      hint: 'External pressures',
    },
    {
      level: 79,
      mainsubject: 'History',
      question: 'The Three Refuges in Buddhism are:',
      options: [
        'Ahimsa, Karuna, Maitri',
        'Triratna of Jainism',
        'Buddha, Dhamma, Sangha',
        'Vedas',
      ],
      correctAnswer: 3,
      explanation:
        'Taking refuge in Buddha (teacher), Dhamma (teachings), Sangha (community) for guidance. It is a foundational commitment for Buddhists.',
      difficulty: 'Medium',
      hint: 'Triple gem',
    },
    {
      level: 80,
      mainsubject: 'History',
      question: 'Mahayana Buddhism emphasizes:',
      options: [
        'Individual salvation only',
        'Strict asceticism',
        'Bodhisattvas and compassion',
        'Vedic rituals',
      ],
      correctAnswer: 3,
      explanation:
        'Great vehicle, bodhisattvas delay nirvana to help others, popular in North Asia. It introduced concepts like emptiness and universal salvation.',
      difficulty: 'Medium',
      hint: 'Altruistic path',
    },
    {
      level: 81,
      mainsubject: 'History',
      question: 'The 16 Mahajanapadas were mentioned in:',
      options: ['Upanishads', 'Puranas', 'Anguttara Nikaya', 'Rig Veda'],
      correctAnswer: 3,
      explanation:
        "Buddhist text lists 16 states like Magadha, Kosala, emerging in 6th century BCE. It reflects the political landscape of northern India during Buddha's time.",
      difficulty: 'Easy',
      hint: 'Buddhist canon',
    },
    {
      level: 82,
      mainsubject: 'History',
      question: 'The capital of Magadha was:',
      options: ['Ujjain', 'Vaishali', 'Rajagriha then Pataliputra', 'Taxila'],
      correctAnswer: 3,
      explanation:
        'Initially Rajagriha, shifted to Pataliputra for strategic location on Ganges. Pataliputra became a major center under the Mauryas.',
      difficulty: 'Easy',
      hint: 'Two capitals',
    },
    {
      level: 83,
      mainsubject: 'History',
      question: 'Vajji was a:',
      options: [
        'Republican mahajanapada',
        'Monarchy',
        'Theocracy',
        'Oligarchy',
      ],
      correctAnswer: 1,
      explanation:
        'Gana-sangha with confederacy of clans like Lichchhavis, ruled by assembly. It exemplified early republican governance in India.',
      difficulty: 'Medium',
      hint: 'Non-monarchical',
    },
    {
      level: 84,
      mainsubject: 'History',
      question: 'The rise of Magadha was due to:',
      options: [
        'Foreign alliances',
        'Weak neighbors',
        'Religious support only',
        'Strategic location and resources',
      ],
      correctAnswer: 4,
      explanation:
        'Fertile plains, iron mines, rivers for transport, forests for timber/elephants. These advantages enabled military and economic dominance.',
      difficulty: 'Medium',
      hint: 'Geographical advantages',
    },
    {
      level: 85,
      mainsubject: 'History',
      question: 'Bimbisara was ruler of:',
      options: ['Maurya', 'Haryanka dynasty', 'Shishunaga', 'Nanda'],
      correctAnswer: 2,
      explanation:
        'Expanded Magadha through conquests, alliances; contemporary of Buddha. His policies laid the foundation for Magadhan empire.',
      difficulty: 'Easy',
      hint: 'First Magadhan empire builder',
    },
    {
      level: 86,
      mainsubject: 'History',
      question: 'Ajatashatru annexed:',
      options: ['Avanti', 'Kashi', 'Vajji and Kosala', 'Anga'],
      correctAnswer: 3,
      explanation:
        "Used war engines against Lichchhavis, strengthened Magadha's dominance. He also built fortifications and patronized Buddhism.",
      difficulty: 'Medium',
      hint: 'Conquered republics',
    },
    {
      level: 87,
      mainsubject: 'History',
      question: 'The Nanda dynasty was founded by:',
      options: ['Kalasoka', 'Bimbisara', 'Dhana Nanda', 'Mahapadma Nanda'],
      correctAnswer: 4,
      explanation:
        'Shudra origin, built large army, conquered many territories. Known for wealth accumulation and centralization.',
      difficulty: 'Easy',
      hint: 'Low-born conqueror',
    },
    {
      level: 88,
      mainsubject: 'History',
      question: "Magadha's administration included:",
      options: [
        'Tribal assemblies',
        'Large standing army and bureaucracy',
        'Feudal lords',
        'Merchant guilds',
      ],
      correctAnswer: 2,
      explanation:
        'Centralized with ministers, taxes, spies; first imperial structure. This system influenced later empires like the Mauryas.',
      difficulty: 'Medium',
      hint: 'Professional military',
    },
    {
      level: 89,
      mainsubject: 'History',
      question: 'The capital of Avanti was:',
      options: ['Sravasti', 'Kaushambi', 'Vaishali', 'Ujjain'],
      correctAnswer: 4,
      explanation:
        'Strategic trade center, rival to Magadha until annexed. It was a hub for commerce and culture in western India.',
      difficulty: 'Easy',
      hint: 'Malwa capital',
    },
    {
      level: 90,
      mainsubject: 'History',
      question: 'The economy in mahajanapadas was based on:',
      options: [
        'Iron plough agriculture and trade',
        'Hunting',
        'Pastoralism',
        'Fishing',
      ],
      correctAnswer: 1,
      explanation:
        'Iron tools boosted farming, surplus led to urbanization, coinage, guilds. This period saw the second urbanization in India.',
      difficulty: 'Medium',
      hint: 'Second urbanization',
    },
    {
      level: 91,
      mainsubject: 'History',
      question: 'Punch-marked coins were introduced in:',
      options: [
        'Harappan era',
        'Vedic age',
        'Gupta period',
        'Mahajanapada period',
      ],
      correctAnswer: 4,
      explanation:
        'Silver and copper coins facilitated trade, standardized economy. They were marked by authorities to ensure authenticity.',
      difficulty: 'Medium',
      hint: 'Early money',
    },
    {
      level: 92,
      mainsubject: 'History',
      question: 'The Battle of Hydaspes was fought by Alexander against:',
      options: ['Porus of Paurava', 'Ambhi', 'Darius', 'Xerxes'],
      correctAnswer: 1,
      explanation:
        "On Jhelum river, Porus defeated but reinstated; marked Alexander's eastern limit. The battle showcased Indian war elephants.",
      difficulty: 'Easy',
      hint: 'Indian king vs Macedonian',
    },
    {
      level: 93,
      mainsubject: 'History',
      question: 'Magadha under Nandas had a large:',
      options: ['Infantry', 'Cavalry only', 'Navy', 'Army with elephants'],
      correctAnswer: 4,
      explanation:
        '200,000 infantry, 20,000 cavalry, 2,000 chariots, 3,000 elephants deterred Alexander. This force was described by Greek historians.',
      difficulty: 'Medium',
      hint: 'Deterrent to invaders',
    },
    {
      level: 94,
      mainsubject: 'History',
      question: 'The Shishunaga dynasty shifted capital to:',
      options: ['Pataliputra', 'Vaishali', 'Rajagriha', 'Ujjain'],
      correctAnswer: 1,
      explanation:
        "From Girivraja, for better control over Ganges trade routes. Pataliputra's location aided defense and commerce.",
      difficulty: 'Hard',
      hint: 'New Magadhan capital',
    },
    {
      level: 95,
      mainsubject: 'History',
      question: 'Which mahajanapada was a republic?',
      options: ['Avanti', 'Vajji', 'Kosala', 'Magadha'],
      correctAnswer: 2,
      explanation:
        'Confederacy of clans like Lichchhavis, governed by assembly. Buddha praised its democratic principles.',
      difficulty: 'Easy',
      hint: 'Gana-sangha',
    },
    {
      level: 96,
      mainsubject: 'History',
      question: "The title 'Devaputra' was used by:",
      options: [
        'Mauryan kings',
        'Gupta emperors',
        'Kushana rulers',
        'Chola kings',
      ],
      correctAnswer: 3,
      explanation:
        'Kanishka and others claimed divine status, influenced by Persian/Chinese traditions. It legitimized their rule among diverse subjects.',
      difficulty: 'Medium',
      hint: 'Son of god',
    },
    {
      level: 97,
      mainsubject: 'History',
      question: 'The Satavahanas were rulers of:',
      options: ['North India', 'South India', 'Deccan', 'West India'],
      correctAnswer: 3,
      explanation:
        'Andhra region, capital Pratishthana, traded with Romans, issued lead coins. They bridged northern and southern Indian cultures.',
      difficulty: 'Easy',
      hint: 'Andhra dynasty',
    },
    {
      level: 98,
      mainsubject: 'History',
      question: 'Kanishka was a:',
      options: ['Kushana king', 'Sunga', 'Kanva', 'Satavahana'],
      correctAnswer: 1,
      explanation:
        'Patron of Buddhism, convened fourth council, issued gold coins, promoted Gandhara art. His reign saw cultural syncretism in Central Asia.',
      difficulty: 'Easy',
      hint: 'Buddhist patron',
    },
    {
      level: 99,
      mainsubject: 'History',
      question: 'The Saka era began in:',
      options: ['320 CE', '550 BCE', '78 CE', '185 BCE'],
      correctAnswer: 3,
      explanation:
        'Used by Kushanas, still in use as Vikram Samvat calendar. It marks the victory of a Saka king and influences Indian chronology.',
      difficulty: 'Medium',
      hint: 'National calendar start',
    },
    {
      level: 100,
      mainsubject: 'History',
      question: 'Gautamiputra Satakarni was a:',
      options: ['Satavahana king', 'Indo-Greek', 'Kushana', 'Shaka'],
      correctAnswer: 1,
      explanation:
        'Defeated Shakas, restored Satavahana power in Deccan. His inscriptions highlight matrilineal influences and military prowess.',
      difficulty: 'Medium',
      hint: 'Deccan reviver',
    },
    {
      level: 101,
      mainsubject: 'History',
      question: 'The Gandhara school of art was a fusion of:',
      options: [
        'Indo-Chinese',
        'Greek and Indian styles',
        'Chinese and Persian',
        'Roman and Egyptian',
      ],
      correctAnswer: 2,
      explanation:
        'Greco-Buddhist, realistic Buddha statues with Hellenistic features. It flourished under Kushanas in northwest India.',
      difficulty: 'Easy',
      hint: 'Hellenistic influence',
    },
    {
      level: 102,
      mainsubject: 'History',
      question: 'Rudradaman was a:',
      options: ['Indo-Greek', 'Satavahana', 'Shaka ruler', 'Kushana'],
      correctAnswer: 3,
      explanation:
        'Western Kshatrapa, Junagadh inscription in Sanskrit, defeated Satavahanas. The inscription records lake repair and cultural patronage.',
      difficulty: 'Medium',
      hint: 'Sanskrit inscription',
    },
    {
      level: 103,
      mainsubject: 'History',
      question: 'The Kushanas issued:',
      options: ['Paper currency', 'Lead coins', 'Bronze seals', 'Gold coins'],
      correctAnswer: 4,
      explanation:
        'Dinars based on Roman denarii, promoted trade, depicted kings and deities. They standardized currency along the Silk Road.',
      difficulty: 'Easy',
      hint: 'High value currency',
    },
    {
      level: 104,
      mainsubject: 'History',
      question: 'Vasudeva I was the last:',
      options: ['Shaka', 'Satavahana', 'Indo-Greek', 'Kushana king'],
      correctAnswer: 4,
      explanation:
        'After him, Kushana empire fragmented into small kingdoms. His reign saw continued Buddhist support.',
      difficulty: 'Hard',
      hint: 'End of Yuezhi rule',
    },
    {
      level: 105,
      mainsubject: 'History',
      question: 'The Mathura school of art flourished under:',
      options: ['Satavahanas', 'Kushanas', 'Mauryas', 'Guptas'],
      correctAnswer: 2,
      explanation:
        'Produced Buddha images in red sandstone, indigenous style. It blended local traditions with foreign influences.',
      difficulty: 'Medium',
      hint: 'Northern art center',
    },
    {
      level: 106,
      mainsubject: 'History',
      question: 'The founder of Mauryan empire was:',
      options: ['Bimbisara', 'Bindusara', 'Chandragupta Maurya', 'Ashoka'],
      correctAnswer: 3,
      explanation:
        "With Chanakya's help, overthrew Nandas, unified north India, repelled Seleucus. His empire stretched from Afghanistan to Bengal.",
      difficulty: 'Easy',
      hint: 'Mentored by Kautilya',
    },
    {
      level: 107,
      mainsubject: 'History',
      question: 'The Mauryan capital was:',
      options: ['Ujjain', 'Pataliputra', 'Taxila', 'Kalinga'],
      correctAnswer: 2,
      explanation:
        'Modern Patna, administrative center described by Megasthenes as fortified city. It was a hub of politics and trade.',
      difficulty: 'Easy',
      hint: 'Ganges confluence',
    },
    {
      level: 108,
      mainsubject: 'History',
      question: "Chanakya's Arthashastra deals with:",
      options: ['Medicine', 'Statecraft and economy', 'Poetry', 'Religion'],
      correctAnswer: 2,
      explanation:
        'Treatise on governance, espionage, military, taxes for empire building. It is a comprehensive guide to realpolitik in ancient India.',
      difficulty: 'Easy',
      hint: 'Machiavelli of India',
    },
    {
      level: 109,
      mainsubject: 'History',
      question: 'Bindusara was known as:',
      options: ['Devapriya', 'Amitraghata', 'Ajatashatru', 'Priyadarshi'],
      correctAnswer: 2,
      explanation:
        'Slayer of enemies, maintained relations with Hellenistic kings. He expanded the empire southward and corresponded with Antiochus.',
      difficulty: 'Medium',
      hint: 'Enemy slayer',
    },
    {
      level: 110,
      mainsubject: 'History',
      question: "Ashoka's dhamma was:",
      options: [
        'Buddhist doctrine',
        'Moral law promoting tolerance',
        'Jain vows',
        'Hindu rituals',
      ],
      correctAnswer: 2,
      explanation:
        'Post-Kalinga, promoted non-violence, respect, welfare through edicts. Dhamma was secular, focusing on ethical conduct across religions.',
      difficulty: 'Easy',
      hint: 'Ethical policy',
    },
    {
      level: 111,
      mainsubject: 'History',
      question: 'The Kalinga war was in:',
      options: ['550 BCE', '321 BCE', '261 BCE', '185 BCE'],
      correctAnswer: 3,
      explanation:
        "Ashoka's conquest led to remorse, turn to Buddhism. The war caused massive casualties, prompting his policy shift.",
      difficulty: 'Medium',
      hint: 'Turning point for Ashoka',
    },
    {
      level: 112,
      mainsubject: 'History',
      question: 'Mauryan administration had:',
      options: [
        'Tribal chiefs',
        'Centralized bureaucracy',
        'Merchant guilds',
        'Feudal lords',
      ],
      correctAnswer: 2,
      explanation:
        'Mantriparishad, provinces under kumara, spies, taxes. It was highly organized with a vast network of officials.',
      difficulty: 'Medium',
      hint: 'Efficient governance',
    },
    {
      level: 113,
      mainsubject: 'History',
      question: "Ashoka's rock edicts are in:",
      options: ['Sanskrit only', 'Prakrit, Greek, Aramaic', 'Tamil', 'Pali'],
      correctAnswer: 2,
      explanation:
        'Multilingual to reach diverse subjects, promoting dhamma. They provide primary sources on his reign and policies.',
      difficulty: 'Easy',
      hint: 'Bilingual in northwest',
    },
    {
      level: 114,
      mainsubject: 'History',
      question: 'The Mauryan army included:',
      options: [
        'Navy only',
        'Only infantry',
        'Archers',
        'Elephants and chariots',
      ],
      correctAnswer: 4,
      explanation:
        'Large force with six committees managing branches. Described by Greek ambassadors as formidable.',
      difficulty: 'Medium',
      hint: "Pliny's description",
    },
    {
      level: 115,
      mainsubject: 'History',
      question: 'Sarnath pillar has:',
      options: [
        'Horse capital',
        'Lion capital',
        'Bull capital',
        'Elephant capital',
      ],
      correctAnswer: 2,
      explanation:
        "Ashoka's emblem, now national symbol, originally topped pillar. It features four lions back-to-back, symbolizing power.",
      difficulty: 'Easy',
      hint: 'National emblem',
    },
    {
      level: 116,
      mainsubject: 'History',
      question: 'Mauryan economy was based on:',
      options: ['Agriculture and trade', 'Mining', 'Hunting', 'Pastoralism'],
      correctAnswer: 1,
      explanation:
        'State farms, taxes, tolls, punch-marked coins. The economy supported a vast empire through land revenue and commerce.',
      difficulty: 'Easy',
      hint: 'Land revenue',
    },
    {
      level: 117,
      mainsubject: 'History',
      question: 'The last Mauryan emperor was:',
      options: ['Brihadratha', 'Kunala', 'Dasaratha', 'Ashoka'],
      correctAnswer: 1,
      explanation:
        'Assassinated by Pushyamitra Shunga in 185 BCE. His death ended the Mauryan dynasty.',
      difficulty: 'Medium',
      hint: 'Killed by general',
    },
    {
      level: 118,
      mainsubject: 'History',
      question: 'Megasthenes was ambassador from:',
      options: [
        'Darius to India',
        'Alexander to Porus',
        'Ptolemy to Ashoka',
        'Seleucus to Chandragupta',
      ],
      correctAnswer: 4,
      explanation:
        'Wrote Indika describing Mauryan society, caste, administration. His account is a valuable foreign perspective on ancient India.',
      difficulty: 'Easy',
      hint: 'Greek envoy',
    },
    {
      level: 119,
      mainsubject: 'History',
      question: 'Ashoka sent missionaries to:',
      options: ['Europe', 'Sri Lanka and Southeast Asia', 'China', 'Africa'],
      correctAnswer: 2,
      explanation:
        'Son Mahinda to Lanka, spreading Buddhism abroad. These missions established the religion in new regions.',
      difficulty: 'Medium',
      hint: 'Dhamma mahamattas',
    },
    {
      level: 120,
      mainsubject: 'History',
      question: 'The Arthashastra mentions:',
      options: ['No taxes', 'Democratic rule', 'Espionage system', 'Feudalism'],
      correctAnswer: 3,
      explanation:
        'Extensive spy network for internal security and intelligence. It details methods for covert operations and state control.',
      difficulty: 'Medium',
      hint: 'Secret agents',
    },
    {
      level: 121,
      mainsubject: 'History',
      question: 'Decline of Mauryas was due to:',
      options: [
        'Centralized control',
        'Religious unity',
        'Weak successors and invasions',
        'Strong economy',
      ],
      correctAnswer: 3,
      explanation:
        'Post-Ashoka, partition, financial strain, Brahmanical reaction, foreign attacks. Overextension and internal revolts contributed.',
      difficulty: 'Hard',
      hint: 'Multiple factors',
    },
    {
      level: 122,
      mainsubject: 'History',
      question: 'Mauryan art is known for:',
      options: ['Coins', 'Paintings', 'Temples', 'Pillars and stupas'],
      correctAnswer: 4,
      explanation:
        'Ashokan pillars with capitals, rock-cut caves, Sanchi stupa. The polished sandstone pillars exemplify Mauryan craftsmanship.',
      difficulty: 'Easy',
      hint: 'Polished stone',
    },
    {
      level: 123,
      mainsubject: 'History',
      question: 'The Third Buddhist Council was at:',
      options: ['Vaishali', 'Pataliputra under Ashoka', 'Rajagriha', 'Kashmir'],
      correctAnswer: 2,
      explanation:
        'Compiled Abhidhamma Pitaka, sent missionaries. Chaired by Moggaliputta Tissa, it purified the sangha.',
      difficulty: 'Medium',
      hint: "Ashoka's patronage",
    },
    {
      level: 124,
      mainsubject: 'History',
      question: 'Mauryan society had:',
      options: [
        'Rigid castes',
        'Varna system but fluid',
        'No social divisions',
        'Slavery absent',
      ],
      correctAnswer: 2,
      explanation:
        'Four varnas, but Megasthenes noted 7 classes based on occupation. Society was stratified but allowed some mobility.',
      difficulty: 'Hard',
      hint: "Megasthenes' 7 classes",
    },
    {
      level: 125,
      mainsubject: 'History',
      question: 'The Sanchi stupa was enlarged by:',
      options: ['Ashoka', 'Harsha', 'Kanishka', 'Akbar'],
      correctAnswer: 1,
      explanation:
        "Originally brick, Ashoka added stone casing, railings, gateways. It houses Buddha's relics and features intricate carvings.",
      difficulty: 'Medium',
      hint: 'Buddhist monument',
    },
    {
      level: 126,
      mainsubject: 'History',
      question: 'Chandragupta Maurya abdicated for:',
      options: ['Jainism', 'Hinduism', 'Buddhism', 'Christianity'],
      correctAnswer: 1,
      explanation:
        'Became Jain ascetic, starved at Sravana Belgola. This act followed Jain tradition of sallekhana.',
      difficulty: 'Easy',
      hint: 'Sallekhana death',
    },
    {
      level: 127,
      mainsubject: 'History',
      question: 'The Mauryan espionage system was:',
      options: [
        'Extensive with gudhapurushas',
        'Absent',
        'Limited to borders',
        'Only military',
      ],
      correctAnswer: 1,
      explanation:
        'Spies in various guises reported to king, maintaining control. Arthashastra details their training and roles.',
      difficulty: 'Medium',
      hint: 'Secret police',
    },
    {
      level: 128,
      mainsubject: 'History',
      question: "Ashoka's wife Devi was from:",
      options: ['Kalinga', 'Vidisha', 'Taxila', 'Ujjain'],
      correctAnswer: 2,
      explanation:
        'Buddhist, influenced his conversion; mother of Mahinda, Sanghamitta. She played a role in spreading Buddhism.',
      difficulty: 'Hard',
      hint: 'Buddhist influence',
    },
    {
      level: 129,
      mainsubject: 'History',
      question: 'The Mauryan revenue was:',
      options: [
        'Only on trade',
        'No taxes',
        '1/4 to 1/6 of produce',
        'Fixed at 1/2',
      ],
      correctAnswer: 3,
      explanation:
        'Bhaga land tax, bali tribute, hiranya cash, varied by region. Revenue supported infrastructure and army.',
      difficulty: 'Medium',
      hint: 'Agricultural share',
    },
    {
      level: 130,
      mainsubject: 'History',
      question: 'Pushyamitra Shunga overthrew:',
      options: ['Bindusara', 'Brihadratha Maurya', 'Chandragupta', 'Ashoka'],
      correctAnswer: 2,
      explanation:
        'Founded Shunga dynasty, performed ashvamedha, patronized Brahmanism. His coup marked a Brahmanical revival.',
      difficulty: 'Medium',
      hint: 'Post-Mauryan dynasty',
    },
    {
      level: 131,
      mainsubject: 'History',
      question: 'The founder of Gupta empire was:',
      options: ['Chandragupta I', 'Samudragupta', 'Skandagupta', 'Sri Gupta'],
      correctAnswer: 4,
      explanation:
        'Around 275 CE, possibly feudatory of Kushanas, started small kingdom in Magadha. His descendants expanded it into an empire.',
      difficulty: 'Easy',
      hint: 'Namesake founder',
    },
    {
      level: 132,
      mainsubject: 'History',
      question: 'Chandragupta I married a princess from:',
      options: ['Shaka', 'Huna', 'Lichchhavi', 'Kushana'],
      correctAnswer: 3,
      explanation:
        'Kumaradevi, strengthened position, started Gupta era 320 CE. The alliance brought prestige and resources.',
      difficulty: 'Easy',
      hint: 'Matrimonial alliance',
    },
    {
      level: 133,
      mainsubject: 'History',
      question: "Samudragupta is called 'Indian Napoleon' because:",
      options: [
        'Administrative reforms',
        'Extensive conquests',
        'Coinage',
        'Patronage of arts',
      ],
      correctAnswer: 2,
      explanation:
        'Allahabad prasasti describes victories over 9 northern kings, 12 southern, tributaries. His campaigns unified much of India.',
      difficulty: 'Medium',
      hint: 'Military campaigns',
    },
    {
      level: 134,
      mainsubject: 'History',
      question: 'The Gupta era started in:',
      options: ['78 CE', '320 CE', '185 BCE', '550 BCE'],
      correctAnswer: 2,
      explanation:
        "With Chandragupta I's accession, marked Gupta rise. It is used for dating Gupta inscriptions.",
      difficulty: 'Easy',
      hint: 'Golden age begin',
    },
    {
      level: 135,
      mainsubject: 'History',
      question: 'Chandragupta II defeated:',
      options: ['Kushanas', 'Shakas of western India', 'Pallavas', 'Hunas'],
      correctAnswer: 2,
      explanation:
        'Assumed Vikramaditya, controlled ports, promoted trade. His victory opened western trade routes.',
      difficulty: 'Medium',
      hint: 'Udayagiri inscription',
    },
    {
      level: 136,
      mainsubject: 'History',
      question: 'Fa-Hien visited during:',
      options: [
        'Chandragupta II',
        'Kumaragupta',
        'Skandagupta',
        'Samudragupta',
      ],
      correctAnswer: 1,
      explanation:
        'Chinese pilgrim described prosperity, Buddhism, administration. His travelogue highlights Gupta golden age.',
      difficulty: 'Easy',
      hint: 'Vikramaditya reign',
    },
    {
      level: 137,
      mainsubject: 'History',
      question: 'The Nine Gems were in court of:',
      options: ['Akbar', 'Ashoka', 'Chandragupta II', 'Harsha'],
      correctAnswer: 3,
      explanation:
        'Scholars like Kalidasa, Amarasimha, Varahamihira. This court fostered arts and sciences.',
      difficulty: 'Easy',
      hint: 'Navaratnas',
    },
    {
      level: 138,
      mainsubject: 'History',
      question: 'Gupta administration was:',
      options: [
        'Highly centralized',
        'Decentralized with feudatories',
        'Tribal',
        'Republican',
      ],
      correctAnswer: 2,
      explanation:
        'Provinces (bhuktis), districts (vishayas), villages; land grants to brahmanas. This system introduced feudal elements.',
      difficulty: 'Medium',
      hint: 'Feudal elements',
    },
    {
      level: 139,
      mainsubject: 'History',
      question: 'Guptas issued many:',
      options: ['Gold coins', 'Paper notes', 'Bronze seals', 'Lead coins'],
      correctAnswer: 1,
      explanation:
        'Dinars with king images, goddesses, reflecting prosperity. They depict various aspects of royal life.',
      difficulty: 'Easy',
      hint: 'High purity currency',
    },
    {
      level: 140,
      mainsubject: 'History',
      question: 'The iron pillar at Mehrauli is from:',
      options: ['British', 'Mauryan', 'Mughal', 'Gupta period'],
      correctAnswer: 4,
      explanation:
        'Rust-resistant, dedicated to Vishnu, metallurgical marvel. It demonstrates advanced ironworking techniques.',
      difficulty: 'Medium',
      hint: 'Delhi pillar',
    },
    {
      level: 141,
      mainsubject: 'History',
      question: 'Nalanda University flourished under:',
      options: ['Pallavas', 'Mauryas', 'Guptas', 'Harsha'],
      correctAnswer: 3,
      explanation:
        'Buddhist learning center, attracted students from abroad. It offered courses in various subjects and had a large library.',
      difficulty: 'Easy',
      hint: 'Ancient varsity',
    },
    {
      level: 142,
      mainsubject: 'History',
      question: 'Kalidasa lived in:',
      options: ['Gupta court', 'Mughal', 'Chola', 'Mauryan'],
      correctAnswer: 1,
      explanation:
        'Wrote Meghaduta, Raghuvamsa, Shakuntala; navaratna. His works represent the pinnacle of Sanskrit literature.',
      difficulty: 'Easy',
      hint: 'Sanskrit poet',
    },
    {
      level: 143,
      mainsubject: 'History',
      question: 'Aryabhata was a:',
      options: ['Mathematician and astronomer', 'Poet', 'General', 'King'],
      correctAnswer: 1,
      explanation:
        'Aryabhatiya: earth rotates, solar system, pi approximation. His contributions influenced Islamic and European science.',
      difficulty: 'Medium',
      hint: 'Zero inventor',
    },
    {
      level: 144,
      mainsubject: 'History',
      question: 'Gupta society had:',
      options: [
        'Rigid varna system',
        'No castes',
        'Equality',
        'Slavery absent',
      ],
      correctAnswer: 1,
      explanation:
        'Brahmanas dominant, shudras agriculturists, women subordinate. Society was hierarchical with increasing caste rigidity.',
      difficulty: 'Medium',
      hint: 'Caste solidification',
    },
    {
      level: 145,
      mainsubject: 'History',
      question: 'The Huna invasions began during:',
      options: [
        'Chandragupta II',
        'Kumaragupta I',
        'Samudragupta',
        'Sri Gupta',
      ],
      correctAnswer: 2,
      explanation:
        'Weakened empire, Skandagupta repelled but drain on resources. The Hunas were Central Asian nomads.',
      difficulty: 'Hard',
      hint: 'Central Asian invaders',
    },
    {
      level: 146,
      mainsubject: 'History',
      question: 'Gupta art is known for:',
      options: [
        'Animal sculptures only',
        'Geometric designs',
        'Buddha statues in Mathura/Sarnath',
        'Abstract paintings',
      ],
      correctAnswer: 3,
      explanation:
        'Serene Buddha images, cave paintings at Ajanta. It represents the classical phase of Indian art.',
      difficulty: 'Medium',
      hint: 'Classical Indian art',
    },
    {
      level: 147,
      mainsubject: 'History',
      question: 'The decimal system was known to:',
      options: ['Valmiki', 'Vatsyayana', 'Panini', 'Aryabhata'],
      correctAnswer: 4,
      explanation:
        'Place value, zero in mathematics, astronomy calculations. This system revolutionized global numeracy.',
      difficulty: 'Easy',
      hint: 'Indian numeral system',
    },
    {
      level: 148,
      mainsubject: 'History',
      question: 'Fa-Hien noted:',
      options: [
        'Prosperity and Buddhist practice',
        'Wars',
        'Poverty',
        'Famines',
      ],
      correctAnswer: 1,
      explanation:
        'Peaceful kingdom, vegetarianism, no capital punishment. His observations depict a tolerant society.',
      difficulty: 'Medium',
      hint: "Chinese traveler's account",
    },
    {
      level: 149,
      mainsubject: 'History',
      question: 'Gupta economy featured:',
      options: [
        'Slavery dominant',
        'No agriculture',
        'Barter only',
        'Land grants and trade guilds',
      ],
      correctAnswer: 4,
      explanation:
        'Brahmadeya to brahmanas, shrenis for crafts, silk trade. This fostered economic growth and feudalism.',
      difficulty: 'Medium',
      hint: 'Feudal beginnings',
    },
    {
      level: 150,
      mainsubject: 'History',
      question: 'The last Gupta ruler was:',
      options: ['Vishnugupta', 'Skandagupta', 'Budhagupta', 'Kumaragupta'],
      correctAnswer: 1,
      explanation:
        'Empire fragmented by 550 CE due to invasions, weak successors. Regional powers rose in its wake.',
      difficulty: 'Hard',
      hint: 'End of golden age',
    },
    {
      level: 151,
      mainsubject: 'History',
      question: 'The founder of Pallava dynasty was:',
      options: [
        'Aparajitavarman',
        'Narasimhavarman I',
        'Simhavishnu',
        'Mahendravarman I',
      ],
      correctAnswer: 3,
      explanation:
        'Revived Pallava power, defeated Kalabhras, extended to Kaveri. His reign marked the beginning of Pallava dominance in south India.',
      difficulty: 'Easy',
      hint: 'Early Kanchi ruler',
    },
    {
      level: 152,
      mainsubject: 'History',
      question: 'Mahendravarman I was initially a:',
      options: [
        'Vaishnava',
        'Jain, converted to Shaivism',
        'Atheist',
        'Buddhist',
      ],
      correctAnswer: 2,
      explanation:
        'Influenced by Appar, built cave temples, composed plays. His conversion boosted Shaiva bhakti movement.',
      difficulty: 'Medium',
      hint: 'Religious conversion',
    },
    {
      level: 153,
      mainsubject: 'History',
      question: 'Narasimhavarman I defeated:',
      options: [
        'Cholas',
        'Pandyas',
        'Rashtrakutas',
        'Pulakesin II of Chalukyas',
      ],
      correctAnswer: 4,
      explanation:
        "Took Vatapi, title Vatapikonda, sent navy to Lanka. This victory avenged his father's defeat and expanded Pallava influence.",
      difficulty: 'Easy',
      hint: "Avenged father's defeat",
    },
    {
      level: 154,
      mainsubject: 'History',
      question: 'Pallava architecture evolved from:',
      options: [
        'Cave paintings',
        'Brick stupas',
        'Wooden huts',
        'Rock-cut to structural temples',
      ],
      correctAnswer: 4,
      explanation:
        'Mahendravarman caves, Rajasimha rathas, shore temple. This evolution laid the foundation for Dravidian architecture.',
      difficulty: 'Medium',
      hint: 'Dravidian style beginnings',
    },
    {
      level: 155,
      mainsubject: 'History',
      question: 'The Shore Temple at Mamallapuram was built by:',
      options: [
        'Narasimhavarman II',
        'Simhavishnu',
        'Aparajita',
        'Mahendravarman',
      ],
      correctAnswer: 1,
      explanation:
        'UNESCO site, dedicated to Shiva and Vishnu, rock-cut. It withstands sea erosion and exemplifies Pallava craftsmanship.',
      difficulty: 'Medium',
      hint: 'Rajasimha style',
    },
    {
      level: 156,
      mainsubject: 'History',
      question: 'Pallavas patronized:',
      options: [
        'Only Prakrit',
        'Pali texts',
        'Sanskrit and Tamil literature',
        'Greek works',
      ],
      correctAnswer: 3,
      explanation:
        "Bharavi's Kiratarjuniya, Dandin's Dashakumaracharita; Kanchi university. This dual patronage enriched both languages.",
      difficulty: 'Easy',
      hint: 'Learning center Kanchi',
    },
    {
      level: 157,
      mainsubject: 'History',
      question: 'The Pallava-Chalukya conflict was over:',
      options: [
        'Water resources',
        'Religious supremacy',
        'Control of Vengi',
        'Trade routes',
      ],
      correctAnswer: 3,
      explanation:
        'Ongoing wars, Pulakesin II defeated Mahendravarman, Narasimha retaliated. Vengi was a fertile delta region.',
      difficulty: 'Medium',
      hint: 'Deccan rivalry',
    },
    {
      level: 158,
      mainsubject: 'History',
      question: 'Pallava society was:',
      options: [
        'Egalitarian',
        'Matriarchal',
        'Divided into castes, Aryan influence',
        'Tribal',
      ],
      correctAnswer: 3,
      explanation:
        'Brahmins dominant, land grants, Vedic rituals. Society blended northern Aryan and southern Dravidian elements.',
      difficulty: 'Hard',
      hint: 'Brahmadeya grants',
    },
    {
      level: 159,
      mainsubject: 'History',
      question: 'The Dravida style of architecture began with:',
      options: ['Cheras', 'Pallavas', 'Cholas', 'Pandyas'],
      correctAnswer: 2,
      explanation:
        'Cave temples, rathas, structural vimanas, gopurams prototype. It influenced later south Indian temples.',
      difficulty: 'Easy',
      hint: 'South Indian temple style',
    },
    {
      level: 160,
      mainsubject: 'History',
      question: 'Hiuen Tsang visited during:',
      options: [
        'Mahendravarman',
        'Rajasimha',
        'Narasimhavarman I',
        'Aparajita',
      ],
      correctAnswer: 3,
      explanation:
        'Described Kanchi as prosperous, with Buddhist monasteries and temples. His account notes religious harmony.',
      difficulty: 'Medium',
      hint: 'Chinese traveler',
    },
    {
      level: 161,
      mainsubject: 'History',
      question: 'Pallavas were defeated by:',
      options: [
        'Pandyas',
        'Chalukyas',
        'Cholas under Aditya I',
        'Rashtrakutas',
      ],
      correctAnswer: 3,
      explanation:
        'Aparajita killed, end of Pallava rule in 897 CE. Cholas then dominated Tamil region.',
      difficulty: 'Medium',
      hint: 'Chola resurgence',
    },
    {
      level: 162,
      mainsubject: 'History',
      question: 'The Kailasanatha temple was built by:',
      options: ['Rajasimha', 'Mahendra', 'Mamalla', 'Simhavishnu'],
      correctAnswer: 1,
      explanation:
        'At Kanchipuram, structural temple with sculptures. It is one of the oldest structural temples in south India.',
      difficulty: 'Hard',
      hint: 'Vishnu temple',
    },
    {
      level: 163,
      mainsubject: 'History',
      question: 'Pallava economy was based on:',
      options: ['Hunting', 'Agriculture and trade', 'Mining', 'Pastoralism'],
      correctAnswer: 2,
      explanation:
        'Irrigated rice, ports like Mamallapuram for overseas trade. Revenue from agriculture supported temple building.',
      difficulty: 'Easy',
      hint: 'Ports and farms',
    },
    {
      level: 164,
      mainsubject: 'History',
      question: 'The rathas at Mamallapuram are:',
      options: [
        'Cave temples',
        'Structural',
        'Stupas',
        'Monolithic rock-cut temples',
      ],
      correctAnswer: 4,
      explanation:
        'Five rathas, each carved from single stone, representing chariot shapes. They experiment with temple forms.',
      difficulty: 'Medium',
      hint: 'Pancha Rathas',
    },
    {
      level: 165,
      mainsubject: 'History',
      question: 'Pallavas promoted:',
      options: [
        'Christianity',
        'Buddhism only',
        'Jainism',
        'Shaivism and Vaishnavism',
      ],
      correctAnswer: 4,
      explanation:
        'Temples for Shiva/Vishnu, bhakti saints Nayanars/Alvars. This patronage fueled the bhakti movement.',
      difficulty: 'Easy',
      hint: 'Hindu sects',
    },
    {
      level: 166,
      mainsubject: 'History',
      question: 'The Chalukya capital was:',
      options: ['Kanchi', 'Manyakheta', 'Badami (Vatapi)', 'Madurai'],
      correctAnswer: 3,
      explanation:
        'Pulakesin I founded, rock-cut temples. It was a center of art and power in the Deccan.',
      difficulty: 'Easy',
      hint: 'Deccan kingdom',
    },
    {
      level: 167,
      mainsubject: 'History',
      question: 'Pulakesin II defeated:',
      options: ['Pallavas', 'Cholas', 'Harsha at Narmada', 'Rashtrakutas'],
      correctAnswer: 3,
      explanation:
        'Stopped northern advance, Aihole inscription. This victory secured Chalukya southern dominance.',
      difficulty: 'Medium',
      hint: 'Vs Harshavardhana',
    },
    {
      level: 168,
      mainsubject: 'History',
      question: 'The Vesara style is a blend of:',
      options: [
        'Indo-Islamic',
        'Nagara and Vesara',
        'Dravida and Nagara',
        'Only Dravida',
      ],
      correctAnswer: 3,
      explanation:
        'Chalukyan architecture, temples at Aihole, Badami, Pattadakal. It combines southern and northern temple features.',
      difficulty: 'Medium',
      hint: 'Deccan hybrid',
    },
    {
      level: 169,
      mainsubject: 'History',
      question: 'Vikramaditya II conquered:',
      options: ['Madurai', 'Vengi', 'Badami', 'Kanchi from Pallavas'],
      correctAnswer: 4,
      explanation:
        'Avenged defeats, inscribed victory at Kailasanatha. He sacked Kanchi three times.',
      difficulty: 'Hard',
      hint: 'Pallava capital thrice',
    },
    {
      level: 170,
      mainsubject: 'History',
      question: 'Chalukyas were overthrown by:',
      options: [
        'Hoysalas',
        'Pandyas',
        'Cholas',
        'Rashtrakutas under Dantidurga',
      ],
      correctAnswer: 4,
      explanation:
        'Former feudatories, ended Badami line in 753 CE. Dantidurga founded the Rashtrakuta empire.',
      difficulty: 'Medium',
      hint: 'Internal rebellion',
    },
    {
      level: 171,
      mainsubject: 'History',
      question: 'The Virupaksha temple at Pattadakal was built by:',
      options: ['Pulakesin I', 'Vikramaditya II', 'Mangalesha', 'Kirtivarman'],
      correctAnswer: 2,
      explanation:
        'UNESCO site, Dravida style, celebrates victory. It mirrors Pallava influences captured in wars.',
      difficulty: 'Hard',
      hint: 'Victory monument',
    },
    {
      level: 172,
      mainsubject: 'History',
      question: 'Chalukya society was:',
      options: ['Matriarchal', 'Caste-based, Vedic', 'Tribal', 'Egalitarian'],
      correctAnswer: 2,
      explanation:
        'Brahmins prominent, sati mentioned, devadasis. Society followed Vedic norms with regional variations.',
      difficulty: 'Medium',
      hint: 'Hindu norms',
    },
    {
      level: 173,
      mainsubject: 'History',
      question: 'Aihole inscription praises:',
      options: ['Krishna I', 'Pulakesin II', 'Dantidurga', 'Vikramaditya'],
      correctAnswer: 2,
      explanation:
        'By Ravikirti, details conquests, Harsha defeat. It is a poetic eulogy in Sanskrit.',
      difficulty: 'Medium',
      hint: 'Poet-courtier',
    },
    {
      level: 174,
      mainsubject: 'History',
      question: 'Chalukyas patronized:',
      options: ['Prakrit', 'Sanskrit only', 'Tamil', 'Kannada literature'],
      correctAnswer: 4,
      explanation:
        'Vikramaditya Satyashraya, early Kannada works. This helped develop regional literature.',
      difficulty: 'Easy',
      hint: 'Regional language',
    },
    {
      level: 175,
      mainsubject: 'History',
      question: 'The founder of Rashtrakuta dynasty was:',
      options: ['Krishna I', 'Dantidurga', 'Amoghavarsha', 'Govinda III'],
      correctAnswer: 2,
      explanation:
        'Overthrew Chalukyas, performed hiranyagarbha ritual. He established rule in the Deccan.',
      difficulty: 'Easy',
      hint: 'Chalukya feudatory rebel',
    },
    {
      level: 176,
      mainsubject: 'History',
      question: 'Krishna I built:',
      options: [
        'Shore temple',
        'Kailasa temple at Ellora',
        'Virupaksha',
        'Brihadeeswara',
      ],
      correctAnswer: 2,
      explanation:
        'Monolithic rock-cut, Dravida style, engineering marvel. Carved from a single rock, it took years to complete.',
      difficulty: 'Easy',
      hint: 'Ellora monolith',
    },
    {
      level: 177,
      mainsubject: 'History',
      question: 'Amoghavarsha I was:',
      options: [
        'Buddhist',
        'Vaishnava',
        'Shaiva',
        'Jain patron, wrote Kavirajamarga',
      ],
      correctAnswer: 4,
      explanation:
        'First Kannada poetics, built Manyakheta, tolerant ruler. He abdicated twice for spiritual pursuits.',
      difficulty: 'Medium',
      hint: 'Literary king',
    },
    {
      level: 178,
      mainsubject: 'History',
      question: 'Rashtrakutas fought the tripartite struggle with:',
      options: [
        'Cholas and Pandyas',
        'Palas and Pratiharas for Kanauj',
        'Gangas and Kadambas',
        'Chalukyas and Pallavas',
      ],
      correctAnswer: 2,
      explanation:
        'Control over north India, symbolic supremacy. Govinda III and others led campaigns.',
      difficulty: 'Medium',
      hint: 'Kanauj control',
    },
    {
      level: 179,
      mainsubject: 'History',
      question: 'The capital of Rashtrakutas was:',
      options: ['Madurai', 'Kanchi', 'Manyakheta', 'Badami'],
      correctAnswer: 3,
      explanation:
        'Modern Malkhed, built by Amoghavarsha. It was a cultural and administrative center.',
      difficulty: 'Easy',
      hint: 'New city',
    },
    {
      level: 180,
      mainsubject: 'History',
      question: 'Rashtrakutas were overthrown by:',
      options: ['Pandyas', 'Tailapa II of Chalukyas', 'Cholas', 'Pallavas'],
      correctAnswer: 2,
      explanation:
        'Revived Chalukya power at Kalyani. This marked the end of Rashtrakuta dominance in 973 CE.',
      difficulty: 'Medium',
      hint: 'Former vassal',
    },
    {
      level: 181,
      mainsubject: 'History',
      question: 'Ellora caves represent:',
      options: [
        'Only Buddhist',
        'Only Hindu',
        'Islamic',
        'Hindu, Buddhist, Jain',
      ],
      correctAnswer: 4,
      explanation:
        'Rashtrakuta patronage, religious tolerance. The 34 caves showcase architectural diversity.',
      difficulty: 'Easy',
      hint: 'Multi-faith site',
    },
    {
      level: 182,
      mainsubject: 'History',
      question: 'Dhruva defeated:',
      options: ['Harsha', 'Vatsaraja and Dharmapala', 'Pulakesin', 'Ashoka'],
      correctAnswer: 2,
      explanation:
        'Pratihara and Pala kings in tripartite struggle. His victories expanded Rashtrakuta influence northward.',
      difficulty: 'Hard',
      hint: 'Northern victories',
    },
    {
      level: 183,
      mainsubject: 'History',
      question: 'Rashtrakuta economy included:',
      options: ['Only agriculture', 'Trade with Arabs', 'Hunting', 'Mining'],
      correctAnswer: 2,
      explanation:
        'Ports, Muslim settlements, religious tolerance. Trade brought wealth and cultural exchanges.',
      difficulty: 'Medium',
      hint: 'Islamic contacts',
    },
    {
      level: 184,
      mainsubject: 'History',
      question: 'Kavirajamarga is:',
      options: [
        'Tamil text',
        'Sanskrit epic',
        'Kannada poetics by Amoghavarsha',
        'Prakrit work',
      ],
      correctAnswer: 3,
      explanation:
        'First Kannada literary work, on rhetoric. It discusses poetry styles and kingship.',
      difficulty: 'Medium',
      hint: "Royal author's book",
    },
    {
      level: 185,
      mainsubject: 'History',
      question: 'The three kingdoms in south India were:',
      options: [
        'Cholas, Cheras, Pandyas',
        'Vijayanagara, Bahmani, Golconda',
        'Gangas, Kadambas, Hoysalas',
        'Pallavas, Chalukyas, Rashtrakutas',
      ],
      correctAnswer: 1,
      explanation:
        'Sangam age Tamil dynasties, mentioned in Ashoka edicts. They controlled Tamilakam and traded extensively.',
      difficulty: 'Easy',
      hint: 'Muvendar',
    },
    {
      level: 186,
      mainsubject: 'History',
      question: 'The Chola capital was:',
      options: ['Uraiyur then Puhar', 'Madurai', 'Vanji', 'Kanchi'],
      correctAnswer: 1,
      explanation:
        'Karikala founded Puhar, major port. It was a center for trade and culture in Sangam age.',
      difficulty: 'Easy',
      hint: 'Cotton trade center',
    },
    {
      level: 187,
      mainsubject: 'History',
      question: 'Chera emblem was:',
      options: ['Elephant', 'Bow', 'Tiger', 'Carp'],
      correctAnswer: 2,
      explanation:
        'Ruled Kerala, ports Musiri, Tondi. The bow symbolized military strength.',
      difficulty: 'Medium',
      hint: 'Weapon symbol',
    },
    {
      level: 188,
      mainsubject: 'History',
      question: 'Pandya kingdom was famous for:',
      options: ['Silk', 'Cotton', 'Pearls', 'Spices'],
      correctAnswer: 3,
      explanation:
        'Madurai capital, traded with Romans. Pearls were a major export commodity.',
      difficulty: 'Easy',
      hint: 'Marine wealth',
    },
    {
      level: 189,
      mainsubject: 'History',
      question: 'Sangam literature is:',
      options: [
        'Prakrit texts',
        'Pali canons',
        'Sanskrit epics',
        'Tamil poetry anthologies',
      ],
      correctAnswer: 4,
      explanation:
        'Ettutokai, Pattuppattu, grammar Tolkappiyam. Compiled in assemblies, it depicts love and war.',
      difficulty: 'Easy',
      hint: 'Tamil assemblies',
    },
    {
      level: 190,
      mainsubject: 'History',
      question: 'The Sangam age economy was:',
      options: [
        'Only pastoral',
        'Agriculture, trade, crafts',
        'Hunting',
        'Fishing',
      ],
      correctAnswer: 2,
      explanation:
        'Rice, spices export to Romans, guilds. Trade balanced with Rome caused economic prosperity.',
      difficulty: 'Medium',
      hint: 'Roman contacts',
    },
    {
      level: 191,
      mainsubject: 'History',
      question: 'Karikala was a:',
      options: ['Pandya', 'Chera', 'Pallava', 'Chola king'],
      correctAnswer: 4,
      explanation:
        'Defeated Chera-Pandya alliance at Venni, built Kallanai dam. The dam is still in use today.',
      difficulty: 'Easy',
      hint: 'Grand anicut builder',
    },
    {
      level: 192,
      mainsubject: 'History',
      question: 'The port of Puhar was destroyed by:',
      options: ['Earthquake', 'Sea erosion', 'Flood', 'War'],
      correctAnswer: 2,
      explanation:
        'Chola capital submerged, mentioned in Silappatikaram. Archaeological evidence confirms coastal changes.',
      difficulty: 'Hard',
      hint: 'Natural calamity',
    },
    {
      level: 193,
      mainsubject: 'History',
      question: 'Sangam society had:',
      options: [
        'Nuclear families only',
        'Tinai divisions of landscape',
        'Rigid castes',
        'Slavery',
      ],
      correctAnswer: 2,
      explanation:
        'Kurinci (hills), mullai (forests), marudam (fields), neydal (coast), palai (desert), each with occupations. This classification influenced poetry themes.',
      difficulty: 'Medium',
      hint: 'Eco-zones',
    },
    {
      level: 194,
      mainsubject: 'History',
      question: 'The Kalabhras overthrew:',
      options: ['Pallavas', 'Sangam kingdoms', 'Rashtrakutas', 'Chalukyas'],
      correctAnswer: 2,
      explanation:
        'Dark age 3rd-6th CE, suppressed Brahmanism, supported Jainism/Buddhism. Little is known due to lack of records.',
      difficulty: 'Hard',
      hint: 'Interregnum in Tamil history',
    },
    {
      level: 195,
      mainsubject: 'History',
      question: 'Nedunjeliyan was a:',
      options: ['Chera', 'Pandya king', 'Pallava', 'Chola'],
      correctAnswer: 2,
      explanation:
        'Defeated Chola-Chera alliance, protagonist in Maduraikkanji. His rule saw Pandya prosperity.',
      difficulty: 'Medium',
      hint: 'Victor at Talaiyalanganam',
    },
    {
      level: 196,
      mainsubject: 'History',
      question: 'The Chera king who conquered Kadambas was:',
      options: ['Simhavishnu', 'Senguttuvan', 'Nedunjeliyan', 'Karikala'],
      correctAnswer: 2,
      explanation:
        'Gajabahu synchronicity, northern expedition for Kannagi stone. Celebrated in Silappatikaram.',
      difficulty: 'Hard',
      hint: 'Silappatikaram hero',
    },
    {
      level: 197,
      mainsubject: 'History',
      question: 'Sangam polity was:',
      options: ['Theocracy', 'Hereditary monarchy', 'Republic', 'Oligarchy'],
      correctAnswer: 2,
      explanation:
        'King with ministers, assemblies; Chera had manram. Power was centralized but advised by councils.',
      difficulty: 'Medium',
      hint: 'Royal emblems',
    },
    {
      level: 198,
      mainsubject: 'History',
      question: 'Roman trade with south India is evidenced by:',
      options: [
        'Silk route',
        'Ivory carvings',
        'Spice islands',
        'Amphorae and coins at Arikamedu',
      ],
      correctAnswer: 4,
      explanation:
        'Pondicherry site, Rouletted ware, Mediterranean imports. It shows extensive maritime contacts.',
      difficulty: 'Medium',
      hint: 'Puducherry excavation',
    },
    {
      level: 199,
      mainsubject: 'History',
      question: 'The epic Silappatikaram is from:',
      options: ['Sangam age', 'Mughal', 'Gupta', 'Mauryan'],
      correctAnswer: 1,
      explanation:
        'By Ilango Adigal, story of Kovalan-Kannagi, justice theme. It portrays Sangam society vividly.',
      difficulty: 'Easy',
      hint: 'Tamil epic',
    },
    {
      level: 200,
      mainsubject: 'History',
      question: 'The end of Sangam age is marked by:',
      options: [
        'Chola revival',
        'Kalabhra invasion',
        'Pandya dominance',
        'Pallava rise',
      ],
      correctAnswer: 2,
      explanation:
        '3rd century CE, dark age until 6th century. The Kalabhras disrupted traditional kingdoms.',
      difficulty: 'Medium',
      hint: 'Mysterious interregnum',
    },
    {
      level: 201,
      mainsubject: 'History',
      question: "The capital of Karnataka's Chalukya dynasty was:",
      options: ['Manyakheta', 'Badami', 'Madurai', 'Kanchi'],
      correctAnswer: 2,
      explanation:
        'Vatapi, rock-cut caves, rivalry with Pallavas. It was strategically located in the Deccan.',
      difficulty: 'Easy',
      hint: 'Deccan capital',
    },
    {
      level: 202,
      mainsubject: 'History',
      question: 'The famous Aihole prasasti is related to:',
      options: ['Krishna I', 'Amoghavarsha', 'Pulakesin II', 'Dantidurga'],
      correctAnswer: 3,
      explanation:
        "Composed by Ravikirti, details Chalukya victories. It is inscribed in a temple and praises the king's feats.",
      difficulty: 'Medium',
      hint: 'Chalukya eulogy',
    },
    {
      level: 203,
      mainsubject: 'History',
      question: 'The Rashtrakuta king who wrote Kavirajamarga was:',
      options: ['Dhruva', 'Krishna I', 'Amoghavarsha I', 'Govinda III'],
      correctAnswer: 3,
      explanation:
        'First Kannada work on poetics, Jain scholar-king. The book discusses literary theory and examples.',
      difficulty: 'Medium',
      hint: 'Literary monarch',
    },
    {
      level: 204,
      mainsubject: 'History',
      question: 'The Ellora Kailasa temple was carved under:',
      options: ['Rajasimha', 'Krishna I', 'Vikramaditya II', 'Pulakesin II'],
      correctAnswer: 2,
      explanation:
        'Monolithic rock-cut, top-down excavation. Dedicated to Shiva, it is a UNESCO site.',
      difficulty: 'Easy',
      hint: 'Rashtrakuta masterpiece',
    },
    {
      level: 205,
      mainsubject: 'History',
      question: 'The tripartite struggle was for control of:',
      options: ['Kanauj', 'Badami', 'Kanchi', 'Madurai'],
      correctAnswer: 1,
      explanation:
        'Symbolic capital, involving Palas, Pratiharas, Rashtrakutas. It lasted over a century without a clear winner.',
    },
    {
      level: 206,
      mainsubject: 'History',
      question:
        'Statement I: The Indus Valley Civilization is known for its well-planned cities divided into a citadel and lower town.\nStatement II: The Great Bath at Mohenjo-Daro was used primarily for swimming competitions.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct as Harappan cities like Mohenjo-Daro had a citadel on the west and lower town on the east with advanced planning. Statement II is incorrect; the Great Bath was likely used for ritual bathing, lined with bricks and made waterproof with tar.',
      difficulty: 'Medium',
      hint: 'Consider the religious or ceremonial purpose of structures in Harappan cities',
    },
    {
      level: 207,
      mainsubject: 'History',
      question:
        'Statement I: Harappan seals were used for stamping bags of goods during trade.\nStatement II: The Harappan script has been fully deciphered by scholars.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; seals and sealings ensured secure trade. Statement II is incorrect; the script remains undeciphered despite efforts.',
      difficulty: 'Easy',
      hint: 'Think about ongoing mysteries of the Harappan civilization',
    },
    {
      level: 208,
      mainsubject: 'History',
      question:
        'Statement I: Cotton was cultivated at Mehrgarh about 7000 years ago.\nStatement II: The Harappans did not use metals like copper and bronze.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct as evidence shows early cotton growth at Mehrgarh. Statement II is incorrect; Harappans used copper, bronze, gold, and silver for tools and ornaments.',
      difficulty: 'Medium',
      hint: 'Recall the technological advancements of the Bronze Age civilization',
    },
    {
      level: 209,
      mainsubject: 'History',
      question:
        'Statement I: Fire altars were found in all Harappan cities.\nStatement II: Dholavira was divided into three parts with massive stone walls.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 3,
      explanation:
        'Statement I is incorrect; fire altars were only in some sites like Kalibangan and Lothal. Statement II is correct; Dholavira had a unique three-part division.',
      difficulty: 'Hard',
      hint: 'Not all Harappan sites had identical features',
    },
    {
      level: 210,
      mainsubject: 'History',
      question:
        'Statement I: The Rigveda is the oldest Veda, composed about 3500 years ago.\nStatement II: The Rigveda was written down immediately after composition.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; it contains over 1000 hymns. Statement II is incorrect; it was recited orally and written centuries later.',
      difficulty: 'Easy',
      hint: 'Think about oral traditions in ancient societies',
    },
    {
      level: 211,
      mainsubject: 'History',
      question:
        'Statement I: Megalithic burials began around 3000 years ago and often contained Black and Red Ware pots.\nStatement II: Jewelry found with skeletons always indicates a female burial.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; megaliths marked burials with artifacts. Statement II is incorrect; men also wore ornaments, bone structure determines sex.',
      difficulty: 'Medium',
      hint: 'Skeletal studies provide better evidence than artifacts alone',
    },
    {
      level: 212,
      mainsubject: 'History',
      question:
        "Statement I: Charaka wrote the Charaka Samhita about 2000 years ago, stating the body has 360 bones.\nStatement II: Modern anatomy agrees with Charaka's count of 360 bones.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; it included teeth and cartilage. Statement II is incorrect; modern count is 206 bones.',
      difficulty: 'Medium',
      hint: 'Ancient counts included non-bone elements',
    },
    {
      level: 213,
      mainsubject: 'History',
      question:
        'Statement I: Siddhartha Gautama attained enlightenment under a peepal tree at Bodh Gaya.\nStatement II: The Buddha taught in Sanskrit to reach the elite classes.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; he became the Buddha there. Statement II is incorrect; he used Prakrit for ordinary people.',
      difficulty: 'Easy',
      hint: 'Consider the language for wider accessibility',
    },
    {
      level: 214,
      mainsubject: 'History',
      question:
        'Statement I: Mahavira was the 24th tirthankara of Jainism and taught ahimsa.\nStatement II: Jaina texts were written down about 2500 years ago at Valabhi.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; he emphasized non-violence. Statement II is incorrect; texts were written 1500 years ago at Valabhi.',
      difficulty: 'Medium',
      hint: 'Jaina teachings were initially oral',
    },
    {
      level: 215,
      mainsubject: 'History',
      question:
        'Statement I: Both Buddha and Mahavira formed sanghas for monks and nuns.\nStatement II: Viharas were permanent monasteries built with donations.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both are correct; sanghas had rules in Vinaya Pitaka, viharas started as temporary but became permanent.',
      difficulty: 'Easy',
      hint: 'Think about monastic life in ancient India',
    },
    {
      level: 216,
      mainsubject: 'History',
      question:
        'Statement I: Mahajanapadas were large territorial states around 2500 years ago.\nStatement II: All mahajanapadas were monarchies without any republics.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; there were 16 mahajanapadas. Statement II is incorrect; some like Vajji were republics (ganas or sanghas).',
      difficulty: 'Medium',
      hint: 'Recall ganas like Vajji',
    },
    {
      level: 217,
      mainsubject: 'History',
      question:
        'Statement I: Magadha became powerful due to iron mines and elephant forests.\nStatement II: Bimbisara and Ajatasattu were early rulers of Magadha.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both are correct; resources aided military, rulers expanded the kingdom.',
      difficulty: 'Easy',
      hint: 'Natural resources and leadership in Magadha',
    },
    {
      level: 218,
      mainsubject: 'History',
      question:
        "Statement I: Alexander's soldiers refused to march beyond the Beas river.\nStatement II: Magadha was ruled by the Nandas when Alexander invaded.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both are correct; troops were tired, Nandas were powerful in Magadha.',
      difficulty: 'Medium',
      hint: "Timing of Alexander's campaign",
    },
    {
      level: 219,
      mainsubject: 'History',
      question:
        "Statement I: Chandragupta Maurya founded the Mauryan Empire with Chanakya's help.\nStatement II: The Mauryan capital was Taxila.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; overthrew Nandas. Statement II is incorrect; capital was Pataliputra.',
      difficulty: 'Easy',
      hint: 'Location of Mauryan administration',
    },
    {
      level: 220,
      mainsubject: 'History',
      question:
        "Statement I: Ashoka was the only king to give up conquest after winning a war.\nStatement II: Ashoka's dhamma was strictly Buddhist doctrine.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; after Kalinga. Statement II is incorrect; dhamma was moral teachings, not exclusively Buddhist.',
      difficulty: 'Medium',
      hint: "Ashoka's edicts promoted general ethics",
    },
    {
      level: 221,
      mainsubject: 'History',
      question:
        'Statement I: Mauryan provinces were ruled by princes as governors.\nStatement II: Espionage was not used in Mauryan administration.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; like Taxila, Ujjain. Statement II is incorrect; spies reported on officials.',
      difficulty: 'Hard',
      hint: 'Arthashastra mentions spies',
    },
    {
      level: 222,
      mainsubject: 'History',
      question:
        'Statement I: The Mauryan Empire declined due to financial crisis and invasions.\nStatement II: Pushyamitra Shunga was the last Mauryan emperor.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; post-Ashoka issues. Statement II is incorrect; he overthrew the last Mauryan, Brihadratha.',
      difficulty: 'Medium',
      hint: 'Shunga dynasty founder',
    },
    {
      level: 223,
      mainsubject: 'History',
      question:
        'Statement I: Kushanas issued gold coins and controlled the Silk Route.\nStatement II: Satavahanas ruled in northern India.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; Kanishka famous. Statement II is incorrect; Satavahanas in Deccan.',
      difficulty: 'Easy',
      hint: 'Post-Mauryan regional powers',
    },
    {
      level: 224,
      mainsubject: 'History',
      question:
        'Statement I: Sri Gupta founded the Gupta Empire around 275 CE.\nStatement II: The Gupta era started in 320 CE with Chandragupta I.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both are correct; Sri Gupta started, Chandragupta I initiated the era.',
      difficulty: 'Medium',
      hint: 'Golden Age beginnings',
    },
    {
      level: 225,
      mainsubject: 'History',
      question:
        'Statement I: Samudragupta annexed all conquered kingdoms.\nStatement II: Samudragupta performed the ashvamedha sacrifice.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 3,
      explanation:
        'Statement I is incorrect; different policies for regions. Statement II is correct; shown on coins.',
      difficulty: 'Hard',
      hint: 'Allahabad prasasti details policies',
    },
    {
      level: 226,
      mainsubject: 'History',
      question:
        "Statement I: Chandragupta II defeated the Shakas and assumed Vikramaditya.\nStatement II: Fa-Hien visited during Samudragupta's reign.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; western expansion. Statement II is incorrect; during Chandragupta II.',
      difficulty: 'Medium',
      hint: "Chinese pilgrim's timing",
    },
    {
      level: 227,
      mainsubject: 'History',
      question:
        'Statement I: Kalidasa was one of the nine gems in Gupta court.\nStatement II: Aryabhata invented the decimal system.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        "Statement I is correct; poet in Vikramaditya's court. Statement II is incorrect; he used it in astronomy, but it's earlier.",
      difficulty: 'Easy',
      hint: 'Gupta scientific contributions',
    },
    {
      level: 228,
      mainsubject: 'History',
      question:
        'Statement I: Huna invasions weakened the Gupta Empire.\nStatement II: The iron pillar at Mehrauli is rust-resistant from Mauryan period.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        "Statement I is correct; during Kumaragupta. Statement II is incorrect; it's Gupta.",
      difficulty: 'Medium',
      hint: 'Metallurgy in Golden Age',
    },
    {
      level: 229,
      mainsubject: 'History',
      question:
        'Statement I: Simhavishnu founded the Pallava dynasty.\nStatement II: Pallavas evolved from rock-cut to structural temples.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both are correct; defeated Kalabhras, architecture progressed.',
      difficulty: 'Medium',
      hint: 'Dravidian style origins',
    },
    {
      level: 230,
      mainsubject: 'History',
      question:
        'Statement I: Mahendravarman I converted from Jainism to Shaivism.\nStatement II: Narasimhavarman I defeated Pulakesin II and took Vatapi.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both are correct; influenced by Appar, Vatapikonda title.',
      difficulty: 'Hard',
      hint: 'Pallava-Chalukya conflicts',
    },
    {
      level: 231,
      mainsubject: 'History',
      question:
        'Statement I: The Shore Temple at Mamallapuram was built by Narasimhavarman II.\nStatement II: Pallavas were defeated by Chalukyas under Vikramaditya II.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; Rajasimha. Statement II is incorrect; by Cholas under Aditya I.',
      difficulty: 'Medium',
      hint: 'End of Pallava rule',
    },
    {
      level: 232,
      mainsubject: 'History',
      question:
        'Statement I: Pulakesin II defeated Harsha at the Narmada.\nStatement II: Chalukya capital was Kanchi.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; stopped northern advance. Statement II is incorrect; capital was Badami (Vatapi).',
      difficulty: 'Easy',
      hint: 'Deccan kingdom location',
    },
    {
      level: 233,
      mainsubject: 'History',
      question:
        'Statement I: Vikramaditya II conquered Kanchi from Pallavas.\nStatement II: Vesara style is a blend of Dravida and Nagara.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both are correct; avenged defeats, Chalukyan architecture.',
      difficulty: 'Medium',
      hint: 'Hybrid Deccan style',
    },
    {
      level: 234,
      mainsubject: 'History',
      question:
        'Statement I: Chalukyas were overthrown by Pallavas.\nStatement II: Aihole inscription praises Pulakesin II.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 3,
      explanation:
        'Statement I is incorrect; by Rashtrakutas under Dantidurga. Statement II is correct; by Ravikirti.',
      difficulty: 'Hard',
      hint: 'Internal rebellion in Deccan',
    },
    {
      level: 235,
      mainsubject: 'History',
      question:
        'Statement I: Dantidurga founded the Rashtrakuta dynasty by overthrowing Chalukyas.\nStatement II: Krishna I built the Kailasa temple at Ellora.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both are correct; performed hiranyagarbha, monolithic rock-cut.',
      difficulty: 'Easy',
      hint: 'Rashtrakuta achievements',
    },
    {
      level: 236,
      mainsubject: 'History',
      question:
        'Statement I: Amoghavarsha I was a Jain patron and wrote Kavirajamarga.\nStatement II: Rashtrakutas were defeated by Pratiharas in tripartite struggle.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; first Kannada poetics. Statement II is incorrect; involved but overthrown by Chalukyas of Kalyani.',
      difficulty: 'Medium',
      hint: 'Tripartite for Kanauj',
    },
    {
      level: 237,
      mainsubject: 'History',
      question:
        'Statement I: Ellora caves represent only Hindu traditions.\nStatement II: Rashtrakutas traded with Arabs.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 3,
      explanation:
        'Statement I is incorrect; Hindu, Buddhist, Jain. Statement II is correct; ports and Muslim settlements.',
      difficulty: 'Medium',
      hint: 'Religious tolerance in Rashtrakuta rule',
    },
    {
      level: 238,
      mainsubject: 'History',
      question:
        "Statement I: Cholas, Cheras, Pandyas were mentioned in Ashoka's edicts.\nStatement II: Sangam literature is in Sanskrit.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; muvendar. Statement II is incorrect; Tamil poetry.',
      difficulty: 'Easy',
      hint: 'Tamilakam kingdoms',
    },
    {
      level: 239,
      mainsubject: 'History',
      question:
        'Statement I: Karikala built the Kallanai dam.\nStatement II: Chola capital was Madurai.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; grand anicut. Statement II is incorrect; Uraiyur then Puhar.',
      difficulty: 'Medium',
      hint: 'Chola engineering',
    },
    {
      level: 240,
      mainsubject: 'History',
      question:
        'Statement I: Chera emblem was the bow.\nStatement II: Pandyas were famous for spices export.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; ruled Kerala. Statement II is incorrect; famous for pearls.',
      difficulty: 'Hard',
      hint: 'Marine wealth of Pandyas',
    },
    {
      level: 241,
      mainsubject: 'History',
      question:
        'Statement I: Sangam age economy included Roman trade.\nStatement II: Arikamedu has evidence of Roman amphorae.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both are correct; spices, cotton exported, imports found.',
      difficulty: 'Medium',
      hint: 'Indo-Roman contacts',
    },
    {
      level: 242,
      mainsubject: 'History',
      question:
        'Statement I: Kalabhras overthrew Sangam kingdoms.\nStatement II: Sangam society had rigid castes like later periods.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; dark age. Statement II is incorrect; tinai divisions based on landscape.',
      difficulty: 'Hard',
      hint: 'Eco-zones in Tamilakam',
    },
    {
      level: 243,
      mainsubject: 'History',
      question:
        'Statement I: Vijayalaya founded the imperial Chola line.\nStatement II: Cholas developed a navy for Southeast Asian raids.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both are correct; captured Kaveri delta, under Rajaraja and Rajendra.',
      difficulty: 'Medium',
      hint: 'Chola expansion',
    },
    {
      level: 244,
      mainsubject: 'History',
      question:
        "Statement I: Rajaraja I built the Rajarajeshvara temple.\nStatement II: The temple's shikhara was lifted using elephants.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; in Thanjavur. Statement II is incorrect; using inclined path.',
      difficulty: 'Easy',
      hint: 'Construction techniques',
    },
    {
      level: 245,
      mainsubject: 'History',
      question:
        'Statement I: Chola bronze statues used the lost wax technique.\nStatement II: Temples were only religious sites in Chola period.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; wax models. Statement II is incorrect; economic hubs too.',
      difficulty: 'Medium',
      hint: 'Multi-role of temples',
    },
    {
      level: 246,
      mainsubject: 'History',
      question:
        'Statement I: Rashtrakutas were initially subordinates to Chalukyas.\nStatement II: Dantidurga performed hiranya-garbha to become Kshatriya.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both are correct; overthrew overlords, ritual for status.',
      difficulty: 'Medium',
      hint: 'Social mobility in medieval India',
    },
    {
      level: 247,
      mainsubject: 'History',
      question:
        'Statement I: Capital of Rashtrakutas was Badami.\nStatement II: Amoghavarsha I built Manyakheta.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 3,
      explanation:
        'Statement I is incorrect; Manyakheta (Malkhed). Statement II is correct; new capital.',
      difficulty: 'Hard',
      hint: 'Karnataka capitals',
    },
    {
      level: 248,
      mainsubject: 'History',
      question:
        'Statement I: Kailasa temple at Ellora is monolithic.\nStatement II: Ellora represents only Jain traditions.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; carved by Krishna I. Statement II is incorrect; Hindu, Buddhist, Jain.',
      difficulty: 'Easy',
      hint: 'Multi-faith site',
    },
    {
      level: 249,
      mainsubject: 'History',
      question:
        'Statement I: Chalukyas patronized Kannada literature.\nStatement II: Virupaksha temple at Pattadakal was built by Pulakesin II.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; early works. Statement II is incorrect; by Vikramaditya II.',
      difficulty: 'Medium',
      hint: 'Victory monuments',
    },
    {
      level: 250,
      mainsubject: 'History',
      question:
        'Statement I: Pallavas promoted Shaivism and Vaishnavism.\nStatement II: Rathas at Mamallapuram are structural temples.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; temples for deities. Statement II is incorrect; monolithic rock-cut.',
      difficulty: 'Hard',
      hint: 'Pancha Rathas type',
    },
    {
      level: 251,
      mainsubject: 'History',
      question:
        'Statement I: Harappan drainage was advanced with covered drains.\nStatement II: Lothal had a dockyard for maritime trade.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both are correct; brick-lined channels, artificial dock.',
      difficulty: 'Easy',
      hint: 'Urban planning features',
    },
    {
      level: 252,
      mainsubject: 'History',
      question:
        'Statement I: Harappans worshipped a proto-Shiva figure.\nStatement II: Decline was due solely to Aryan invasion.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; Pashupati seal. Statement II is incorrect; environmental factors like floods.',
      difficulty: 'Medium',
      hint: 'Debated decline theories',
    },
    {
      level: 253,
      mainsubject: 'History',
      question:
        'Statement I: Vedic society was pastoral in early period.\nStatement II: Iron was introduced in early Vedic age.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; cattle central. Statement II is incorrect; in later Vedic.',
      difficulty: 'Medium',
      hint: 'Technological transition',
    },
    {
      level: 254,
      mainsubject: 'History',
      question:
        'Statement I: Upanishads focus on philosophical knowledge.\nStatement II: Women composed some Vedic hymns.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both are correct; jnana path, like Lopamudra.',
      difficulty: 'Easy',
      hint: 'Gender in Vedic times',
    },
    {
      level: 255,
      mainsubject: 'History',
      question:
        'Statement I: Buddha rejected caste system.\nStatement II: Jainism believes in creator god.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Statement I is correct; equality emphasis. Statement II is incorrect; atheistic.',
      difficulty: 'Easy',
      hint: 'Core philosophies',
    },
  ],
  Geography: [
    {
      level: 1,
      mainsubject: 'Geography',
      question: 'Which is the highest peak in India?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Nanda Devi'],
      correctAnswer: 2,
      explanation:
        'K2 (Godwin-Austen) is the highest peak in India at 8,611 meters, located in the Karakoram range.',
      difficulty: 'Easy',
      hint: "It's in the northernmost part of India",
    },
    {
      level: 2,
      mainsubject: 'Geography',
      question: "Which river is known as the 'Sorrow of Bengal'?",
      options: ['Ganga', 'Brahmaputra', 'Damodar', 'Hooghly'],
      correctAnswer: 3,
      explanation:
        "The Damodar River is called the 'Sorrow of Bengal' due to its frequent flooding in the region.",
      difficulty: 'Medium',
      hint: 'Think about natural disasters',
    },
  ],
  'Political Science': [
    {
      level: 1,
      mainsubject: 'Political Science',
      question:
        'Statement I: The President of India is the Supreme Commander of the Armed Forces. \nStatement II: The Prime Minister is directly elected by the people of India.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. The Prime Minister is indirectly elected.',
      difficulty: 'Medium',
      hint: 'Check the election process for Prime Minister',
    },
    {
      level: 2,
      mainsubject: 'Political Science',
      question:
        'How many fundamental rights are guaranteed by the Indian Constitution?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 2,
      explanation:
        'Originally there were 7 fundamental rights, but after the 44th Amendment, Right to Property was removed from fundamental rights.',
      difficulty: 'Easy',
      hint: 'Count the basic rights every citizen has',
    },
  ],
  Economics: [
    {
      level: 1,
      mainsubject: 'Economics',
      question: 'What does GDP stand for?',
      options: [
        'Gross Domestic Product',
        'Gross Development Plan',
        'General Domestic Policy',
        'Global Development Program',
      ],
      correctAnswer: 1,
      explanation:
        'GDP stands for Gross Domestic Product, which measures the total value of goods and services produced in a country.',
      difficulty: 'Easy',
      hint: 'Think about economic measurement',
    },
    {
      level: 2,
      mainsubject: 'Economics',
      question: 'Which of the following is NOT a function of RBI?',
      options: [
        'Monetary Policy',
        'Banker to Government',
        'Printing Currency Notes',
        'Direct Lending to Public',
      ],
      correctAnswer: 4,
      explanation:
        'RBI does not directly lend to the public. It regulates banks and provides banking services to the government.',
      difficulty: 'Medium',
      hint: 'RBI is a central bank, not a commercial bank',
    },
  ],
  Science: [
    {
      level: 1,
      mainsubject: 'Science',
      question:
        'Statement I: Photosynthesis in plants mainly takes place in the chloroplasts of leaf cells.\nStatement II: Chlorophyll absorbs green light most efficiently for photosynthesis.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Photosynthesis occurs in chloroplasts, but chlorophyll absorbs red and blue light most efficiently, not green light.',
      difficulty: 'Medium',
      hint: 'Remember which colors of light chlorophyll absorbs best.',
    },
    {
      level: 2,
      mainsubject: 'Science',
      question:
        'Statement I: The cell is the basic structural and functional unit of all living organisms.\nStatement II: All cells can be seen with the naked eye.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. The cell is the basic unit of life, but most cells are microscopic and require a microscope to be seen.',
      difficulty: 'Easy',
      hint: 'Think about the size of cells and tools needed to observe them.',
    },
    {
      level: 3,
      mainsubject: 'Science',
      question:
        'Statement I: Force is a push or pull that can change the motion of an object.\nStatement II: Balanced forces always cause an object to move.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Balanced forces do not cause a change in motion; they result in no net force.',
      difficulty: 'Easy',
      hint: 'Consider what happens when forces are equal and opposite.',
    },
    {
      level: 4,
      mainsubject: 'Science',
      question:
        'Statement I: Elements are substances made up of only one type of atom.\nStatement II: Compounds are formed by the physical mixture of elements.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Compounds are formed by chemical bonding of elements, not physical mixture.',
      difficulty: 'Medium',
      hint: 'Recall the difference between mixtures and compounds.',
    },
    {
      level: 5,
      mainsubject: 'Science',
      question:
        'Statement I: Ecology is the study of interactions between organisms and their environment.\nStatement II: Pollution is always caused by natural events.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Pollution is primarily caused by human activities, though some natural events can contribute.',
      difficulty: 'Easy',
      hint: 'Think about human impact on the environment.',
    },
    {
      level: 6,
      mainsubject: 'Science',
      question:
        "Statement I: ISRO is responsible for India's space research and satellite launches.\nStatement II: DRDO develops military technologies including missiles.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. ISRO handles space programs, while DRDO focuses on defense research.',
      difficulty: 'Easy',
      hint: 'Recall the roles of major Indian scientific organizations.',
    },
    {
      level: 7,
      mainsubject: 'Science',
      question:
        'Statement I: Work is done when a force causes displacement in its direction.\nStatement II: Energy is the capacity to do work.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Work involves force and displacement, and energy enables work.',
      difficulty: 'Medium',
      hint: 'Consider the definitions in physics.',
    },
    {
      level: 8,
      mainsubject: 'Science',
      question:
        'Statement I: Light travels in straight lines.\nStatement II: Sound can travel through vacuum.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Sound requires a medium to travel, unlike light.',
      difficulty: 'Easy',
      hint: 'Think about how sound and light behave in space.',
    },
    {
      level: 9,
      mainsubject: 'Science',
      question:
        'Statement I: Acids turn blue litmus red.\nStatement II: Bases are sour in taste.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Bases are bitter in taste, while acids are sour.',
      difficulty: 'Easy',
      hint: 'Recall the properties of acids and bases.',
    },
    {
      level: 10,
      mainsubject: 'Science',
      question:
        'Statement I: The human heart has four chambers.\nStatement II: Lungs are responsible for digestion.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Lungs are for respiration, digestion occurs in the stomach and intestines.',
      difficulty: 'Easy',
      hint: 'Think about the functions of body organs.',
    },
    {
      level: 11,
      mainsubject: 'Science',
      question:
        'Statement I: Renewable energy sources include solar and wind.\nStatement II: Fossil fuels are renewable.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Fossil fuels are non-renewable.',
      difficulty: 'Medium',
      hint: 'Consider the replenishment time of energy sources.',
    },
    {
      level: 12,
      mainsubject: 'Science',
      question:
        'Statement I: Satellites are used for communication and weather forecasting.\nStatement II: Nuclear programs in India are managed by ISRO.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Nuclear programs are under the Department of Atomic Energy, not ISRO.',
      difficulty: 'Medium',
      hint: 'Recall the organizations involved in different scientific fields in India.',
    },
    {
      level: 13,
      mainsubject: 'Science',
      question:
        'Statement I: Magnetism is the property of attracting iron.\nStatement II: Electricity can produce magnetism.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Electromagnets demonstrate this.',
      difficulty: 'Medium',
      hint: 'Think about electromagnets.',
    },
    {
      level: 14,
      mainsubject: 'Science',
      question:
        'Statement I: The periodic table arranges elements by atomic number.\nStatement II: All elements in the periodic table are metals.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. The periodic table includes metals, non-metals, and metalloids.',
      difficulty: 'Easy',
      hint: 'Recall the categories of elements.',
    },
    {
      level: 15,
      mainsubject: 'Science',
      question:
        'Statement I: Nutrition is essential for growth and repair in the body.\nStatement II: Vitamins are produced by the body in large quantities.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Vitamins are obtained from diet, not produced by the body.',
      difficulty: 'Medium',
      hint: 'Think about sources of vitamins.',
    },
    {
      level: 16,
      mainsubject: 'Science',
      question:
        'Statement I: Conservation helps in protecting biodiversity.\nStatement II: Deforestation increases biodiversity.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Deforestation decreases biodiversity.',
      difficulty: 'Easy',
      hint: 'Consider the effects of habitat loss.',
    },
    {
      level: 17,
      mainsubject: 'Science',
      question:
        'Statement I: DRDO develops defense technologies for India.\nStatement II: Agni is a satellite launched by ISRO.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Agni is a missile developed by DRDO.',
      difficulty: 'Medium',
      hint: 'Distinguish between missiles and satellites.',
    },
    {
      level: 18,
      mainsubject: 'Science',
      question:
        'Statement I: Motion is a change in position with time.\nStatement II: Speed is a vector quantity.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Speed is scalar, velocity is vector.',
      difficulty: 'Medium',
      hint: 'Recall scalar and vector quantities.',
    },
    {
      level: 19,
      mainsubject: 'Science',
      question:
        'Statement I: Chemical reactions involve breaking and forming bonds.\nStatement II: Physical changes alter the chemical composition.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Physical changes do not alter chemical composition.',
      difficulty: 'Medium',
      hint: 'Think about melting ice vs burning paper.',
    },
    {
      level: 20,
      mainsubject: 'Science',
      question:
        'Statement I: Reproduction is essential for the continuation of species.\nStatement II: All organisms reproduce asexually.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Organisms can reproduce sexually or asexually.',
      difficulty: 'Easy',
      hint: 'Consider plants and animals reproduction methods.',
    },
    {
      level: 21,
      mainsubject: 'Science',
      question:
        'Statement I: Non-renewable energy sources are limited.\nStatement II: Coal is a renewable energy source.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Coal is non-renewable.',
      difficulty: 'Easy',
      hint: 'Think about formation time of fossil fuels.',
    },
    {
      level: 22,
      mainsubject: 'Science',
      question:
        'Statement I: Nuclear programs in India include power generation.\nStatement II: Pokhran tests were for satellite launches.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Pokhran tests were nuclear tests.',
      difficulty: 'Medium',
      hint: "Recall India's nuclear history.",
    },
    {
      level: 23,
      mainsubject: 'Science',
      question:
        'Statement I: Electricity is the flow of electrons.\nStatement II: Insulators conduct electricity well.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Insulators do not conduct electricity.',
      difficulty: 'Easy',
      hint: 'Think about materials like rubber vs copper.',
    },
    {
      level: 24,
      mainsubject: 'Science',
      question:
        'Statement I: Everyday chemistry includes soaps and detergents.\nStatement II: Soaps are made from synthetic chemicals.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Soaps are from natural fats, detergents are synthetic.',
      difficulty: 'Medium',
      hint: 'Recall the origin of soaps.',
    },
    {
      level: 25,
      mainsubject: 'Science',
      question:
        'Statement I: Diseases can be caused by bacteria or viruses.\nStatement II: All diseases are contagious.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Some diseases are non-contagious, like genetic ones.',
      difficulty: 'Medium',
      hint: 'Think about cancer or diabetes.',
    },
    {
      level: 26,
      mainsubject: 'Science',
      question:
        'Statement I: Pollution affects air, water, and soil.\nStatement II: Recycling helps in conservation.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Recycling reduces waste and conserves resources.',
      difficulty: 'Easy',
      hint: 'Consider environmental practices.',
    },
    {
      level: 27,
      mainsubject: 'Science',
      question:
        'Statement I: Chandrayaan is an ISRO moon mission.\nStatement II: BrahMos is a DRDO missile.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Chandrayaan is lunar exploration, BrahMos is supersonic missile.',
      difficulty: 'Medium',
      hint: 'Recall famous Indian missions.',
    },
    {
      level: 28,
      mainsubject: 'Science',
      question:
        'Statement I: Energy can be converted from one form to another.\nStatement II: Energy can be created from nothing.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Law of conservation of energy states energy cannot be created or destroyed.',
      difficulty: 'Medium',
      hint: 'Recall conservation laws.',
    },
    {
      level: 29,
      mainsubject: 'Science',
      question:
        'Statement I: Sound is a longitudinal wave.\nStatement II: Light is a transverse wave.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Sound waves compress air, light oscillates perpendicular to direction.',
      difficulty: 'Medium',
      hint: 'Think about wave types.',
    },
    {
      level: 30,
      mainsubject: 'Science',
      question:
        'Statement I: The periodic table has 118 elements.\nStatement II: Elements are arranged by atomic mass only.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Arranged by atomic number.',
      difficulty: 'Medium',
      hint: 'Recall Mendeleev vs modern table.',
    },
    {
      level: 31,
      mainsubject: 'Science',
      question:
        'Statement I: Human body systems include circulatory and respiratory.\nStatement II: The brain is part of the digestive system.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Brain is part of nervous system.',
      difficulty: 'Easy',
      hint: 'Body systems functions.',
    },
    {
      level: 32,
      mainsubject: 'Science',
      question:
        'Statement I: Biodiversity is the variety of life on Earth.\nStatement II: Conservation is not necessary for biodiversity.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Conservation is essential to maintain biodiversity.',
      difficulty: 'Easy',
      hint: 'Think about endangered species.',
    },
    {
      level: 33,
      mainsubject: 'Science',
      question:
        'Statement I: Satellites orbit the Earth due to gravity.\nStatement II: Nuclear weapons are part of defense science.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Satellites balance gravity with velocity, nuclear in defense.',
      difficulty: 'Medium',
      hint: 'Orbital mechanics and defense tech.',
    },
    {
      level: 34,
      mainsubject: 'Science',
      question:
        'Statement I: Friction opposes motion.\nStatement II: Friction is always harmful.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Friction is useful for walking, braking.',
      difficulty: 'Medium',
      hint: 'Pros and cons of friction.',
    },
    {
      level: 35,
      mainsubject: 'Science',
      question:
        'Statement I: Chemical reactions can be exothermic or endothermic.\nStatement II: All reactions release heat.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Endothermic absorb heat.',
      difficulty: 'Medium',
      hint: 'Think about photosynthesis.',
    },
    {
      level: 36,
      mainsubject: 'Science',
      question:
        'Statement I: Plant reproduction can be sexual or asexual.\nStatement II: Flowers are involved in asexual reproduction.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Flowers for sexual reproduction.',
      difficulty: 'Medium',
      hint: 'Vegetative propagation vs pollination.',
    },
    {
      level: 37,
      mainsubject: 'Science',
      question:
        'Statement I: Solar energy is renewable.\nStatement II: Wind energy is non-renewable.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Wind is renewable.',
      difficulty: 'Easy',
      hint: 'Natural replenishment.',
    },
    {
      level: 38,
      mainsubject: 'Science',
      question:
        "Statement I: India's nuclear program started in 1948.\nStatement II: BARC is part of ISRO.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. BARC is under DAE.',
      difficulty: 'Hard',
      hint: 'Atomic research organizations.',
    },
    {
      level: 39,
      mainsubject: 'Science',
      question:
        'Statement I: Magnets have north and south poles.\nStatement II: Like poles attract each other.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Like poles repel.',
      difficulty: 'Easy',
      hint: 'Magnet behavior.',
    },
    {
      level: 40,
      mainsubject: 'Science',
      question:
        'Statement I: Acids and bases react to form salt and water.\nStatement II: pH of 7 is acidic.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. pH 7 is neutral.',
      difficulty: 'Easy',
      hint: 'pH scale.',
    },
    {
      level: 41,
      mainsubject: 'Science',
      question:
        'Statement I: The digestive system breaks down food.\nStatement II: The circulatory system transports oxygen.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Digestive for food, circulatory for blood and oxygen.',
      difficulty: 'Easy',
      hint: 'Body systems.',
    },
    {
      level: 42,
      mainsubject: 'Science',
      question:
        'Statement I: Ecology studies food chains and webs.\nStatement II: Producers are at the top of the food chain.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Producers are at the bottom.',
      difficulty: 'Medium',
      hint: 'Food chain levels.',
    },
    {
      level: 43,
      mainsubject: 'Science',
      question:
        'Statement I: PSLV is a launch vehicle by ISRO.\nStatement II: Prithvi is a satellite.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Prithvi is a missile by DRDO.',
      difficulty: 'Medium',
      hint: 'Launch vehicles vs missiles.',
    },
    {
      level: 44,
      mainsubject: 'Science',
      question:
        'Statement I: Potential energy is stored energy.\nStatement II: Kinetic energy is energy of motion.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Examples: height for potential, moving car for kinetic.',
      difficulty: 'Medium',
      hint: 'Energy forms.',
    },
    {
      level: 45,
      mainsubject: 'Science',
      question:
        'Statement I: Elements are classified as metals and non-metals.\nStatement II: Hydrogen is a metal.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Hydrogen is a non-metal.',
      difficulty: 'Medium',
      hint: 'Properties of hydrogen.',
    },
    {
      level: 46,
      mainsubject: 'Science',
      question:
        'Statement I: Health is a state of complete physical, mental, and social well-being.\nStatement II: Diseases are always inherited.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Many diseases are infectious or lifestyle-related.',
      difficulty: 'Medium',
      hint: 'WHO definition and disease causes.',
    },
    {
      level: 47,
      mainsubject: 'Science',
      question:
        'Statement I: Renewable energy reduces pollution.\nStatement II: Hydro power is non-renewable.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Hydro is renewable.',
      difficulty: 'Medium',
      hint: 'Water cycle.',
    },
    {
      level: 48,
      mainsubject: 'Science',
      question:
        'Statement I: India has a no-first-use nuclear policy.\nStatement II: DRDO developed the INS Arihant submarine.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. No-first-use policy, Arihant is nuclear submarine.',
      difficulty: 'Hard',
      hint: 'Indian defense policy.',
    },
    {
      level: 49,
      mainsubject: 'Science',
      question:
        'Statement I: Reflection of light occurs on smooth surfaces.\nStatement II: Refraction occurs when light changes medium.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Mirror for reflection, lens for refraction.',
      difficulty: 'Medium',
      hint: 'Light phenomena.',
    },
    {
      level: 50,
      mainsubject: 'Science',
      question:
        'Statement I: Combustion is a chemical reaction with oxygen.\nStatement II: Rusting is a physical change.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Rusting is chemical.',
      difficulty: 'Medium',
      hint: 'Iron oxide formation.',
    },
    {
      level: 51,
      mainsubject: 'Science',
      question:
        'Statement I: The respiratory system exchanges gases.\nStatement II: The skeletal system protects organs.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Lungs for gases, bones for protection.',
      difficulty: 'Easy',
      hint: 'System functions.',
    },
    {
      level: 52,
      mainsubject: 'Science',
      question:
        'Statement I: Pollution can cause acid rain.\nStatement II: Acid rain is beneficial for plants.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Acid rain harms plants and soil.',
      difficulty: 'Medium',
      hint: 'Effects of acid rain.',
    },
    {
      level: 53,
      mainsubject: 'Science',
      question:
        'Statement I: GSLV is used for geostationary satellites.\nStatement II: NIRBHAY is a DRDO drone.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Nirbhay is a cruise missile.',
      difficulty: 'Hard',
      hint: 'Indian launch vehicles and weapons.',
    },
    {
      level: 54,
      mainsubject: 'Science',
      question:
        'Statement I: Gravity is a force of attraction.\nStatement II: Mass and weight are the same.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Weight is force due to gravity, mass is amount of matter.',
      difficulty: 'Medium',
      hint: 'Moon vs Earth weight.',
    },
    {
      level: 55,
      mainsubject: 'Science',
      question:
        'Statement I: Catalysts speed up reactions without being consumed.\nStatement II: Enzymes are biological catalysts.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Enzymes in living organisms.',
      difficulty: 'Medium',
      hint: 'Reaction rates.',
    },
    {
      level: 56,
      mainsubject: 'Science',
      question:
        'Statement I: Pollination is necessary for plant reproduction.\nStatement II: All plants have flowers.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        "Only Statement I is correct. Gymnosperms don't have flowers.",
      difficulty: 'Hard',
      hint: 'Conifers.',
    },
    {
      level: 57,
      mainsubject: 'Science',
      question:
        'Statement I: Biomass is a renewable energy source.\nStatement II: Nuclear energy is renewable.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Nuclear uses finite uranium.',
      difficulty: 'Medium',
      hint: 'Fuel sources.',
    },
    {
      level: 58,
      mainsubject: 'Science',
      question:
        "Statement I: India's first nuclear test was in 1974.\nStatement II: Smiling Buddha was the code name.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. Pokhran-I, code Smiling Buddha.',
      difficulty: 'Hard',
      hint: 'Historical events.',
    },
    {
      level: 59,
      mainsubject: 'Science',
      question:
        'Statement I: Echo is reflection of sound.\nStatement II: Sonar uses light waves.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Sonar uses sound waves.',
      difficulty: 'Medium',
      hint: 'Underwater detection.',
    },
    {
      level: 60,
      mainsubject: 'Science',
      question:
        'Statement I: Detergents are used in hard water.\nStatement II: Soaps work well in hard water.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Soaps form scum in hard water.',
      difficulty: 'Medium',
      hint: 'Cleaning agents.',
    },
    {
      level: 61,
      mainsubject: 'Science',
      question:
        'Statement I: Vaccines prevent diseases.\nStatement II: Antibiotics cure viral infections.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Antibiotics for bacterial, not viral.',
      difficulty: 'Medium',
      hint: 'Medicine types.',
    },
    {
      level: 62,
      mainsubject: 'Science',
      question:
        'Statement I: Ozone layer protects from UV rays.\nStatement II: CFC causes ozone depletion.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation:
        'Both statements are correct. CFC banned for ozone protection.',
      difficulty: 'Medium',
      hint: 'Environmental issues.',
    },
    {
      level: 63,
      mainsubject: 'Science',
      question:
        "Statement I: Mangalyaan is India's Mars mission.\nStatement II: It was launched by DRDO.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. Launched by ISRO.',
      difficulty: 'Medium',
      hint: 'Space missions.',
    },
    {
      level: 64,
      mainsubject: 'Science',
      question:
        "Statement I: Inertia is resistance to change in motion.\nStatement II: Newton's first law is law of force.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. First law is inertia.',
      difficulty: 'Hard',
      hint: "Newton's laws.",
    },
    {
      level: 65,
      mainsubject: 'Science',
      question:
        'Statement I: Oxidation is loss of electrons.\nStatement II: Reduction is gain of electrons.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Redox reactions.',
      difficulty: 'Hard',
      hint: 'LEO GER.',
    },
    {
      level: 66,
      mainsubject: 'Science',
      question:
        'Statement I: Stomata are pores in leaves for gas exchange.\nStatement II: Roots absorb carbon dioxide.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Roots absorb water and minerals.',
      difficulty: 'Medium',
      hint: 'Plant parts functions.',
    },
    {
      level: 67,
      mainsubject: 'Science',
      question:
        "Statement I: Geothermal energy is from Earth's heat.\nStatement II: It is renewable.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Sustainable heat from Earth.',
      difficulty: 'Hard',
      hint: 'Volcanic areas.',
    },
    {
      level: 68,
      mainsubject: 'Science',
      question:
        "Statement I: India's nuclear reactors use uranium.\nStatement II: Thorium is also used in some.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. India has thorium reserves.',
      difficulty: 'Hard',
      hint: 'Fuel types.',
    },
    {
      level: 69,
      mainsubject: 'Science',
      question:
        'Statement I: Current is rate of flow of charge.\nStatement II: Voltage is work per charge.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Basic definitions.',
      difficulty: 'Hard',
      hint: "Ohm's law components.",
    },
    {
      level: 70,
      mainsubject: 'Science',
      question:
        'Statement I: Baking soda is sodium bicarbonate.\nStatement II: It is used in fire extinguishers.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Releases CO2.',
      difficulty: 'Medium',
      hint: 'Everyday uses.',
    },
    {
      level: 71,
      mainsubject: 'Science',
      question:
        'Statement I: Balanced diet includes all nutrients.\nStatement II: Malnutrition causes diseases.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Deficiency diseases.',
      difficulty: 'Medium',
      hint: 'Scurvy, rickets.',
    },
    {
      level: 72,
      mainsubject: 'Science',
      question:
        'Statement I: Eutrophication is nutrient enrichment in water.\nStatement II: It leads to algal blooms.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Pollution effect.',
      difficulty: 'Hard',
      hint: 'Water pollution.',
    },
    {
      level: 73,
      mainsubject: 'Science',
      question:
        'Statement I: Aditya-L1 is solar mission by ISRO.\nStatement II: It studies the Sun.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Lagrangian point.',
      difficulty: 'Hard',
      hint: 'Recent missions.',
    },
    {
      level: 74,
      mainsubject: 'Science',
      question:
        'Statement I: Acceleration is change in velocity.\nStatement II: Uniform motion has acceleration.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Uniform motion has zero acceleration.',
      difficulty: 'Hard',
      hint: 'Constant speed.',
    },
    {
      level: 75,
      mainsubject: 'Science',
      question:
        'Statement I: Isotopes have same atomic number but different mass.\nStatement II: Isobars have same mass but different atomic number.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Nuclear chemistry.',
      difficulty: 'Hard',
      hint: 'Atomic structure.',
    },
    {
      level: 76,
      mainsubject: 'Science',
      question:
        'Statement I: Transpiration is loss of water from plants.\nStatement II: It helps in cooling the plant.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Plant physiology.',
      difficulty: 'Medium',
      hint: 'Water cycle in plants.',
    },
    {
      level: 77,
      mainsubject: 'Science',
      question:
        'Statement I: Tidal energy is from ocean tides.\nStatement II: It is predictable and renewable.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Moon gravity.',
      difficulty: 'Hard',
      hint: 'Coastal energy.',
    },
    {
      level: 78,
      mainsubject: 'Science',
      question:
        'Statement I: India is part of NPT.\nStatement II: India signed CTBT.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 4,
      explanation: 'Both are incorrect. India not signatory to NPT or CTBT.',
      difficulty: 'Hard',
      hint: 'Nuclear treaties.',
    },
    {
      level: 79,
      mainsubject: 'Science',
      question:
        'Statement I: Doppler effect is for sound frequency change.\nStatement II: It is used in radar.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Speed detection.',
      difficulty: 'Hard',
      hint: 'Sirens and speed guns.',
    },
    {
      level: 80,
      mainsubject: 'Science',
      question:
        'Statement I: Vinegar is acetic acid.\nStatement II: It is used in pickling.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Preservation.',
      difficulty: 'Medium',
      hint: 'Food chemistry.',
    },
    {
      level: 81,
      mainsubject: 'Science',
      question:
        "Statement I: Immunity is the body's defense.\nStatement II: Vaccination provides immunity.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Preventive medicine.',
      difficulty: 'Medium',
      hint: 'Polio vaccine.',
    },
    {
      level: 82,
      mainsubject: 'Science',
      question:
        'Statement I: Greenhouse effect warms the Earth.\nStatement II: CO2 is a greenhouse gas.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Climate change.',
      difficulty: 'Medium',
      hint: 'Global warming.',
    },
    {
      level: 83,
      mainsubject: 'Science',
      question:
        'Statement I: RISAT is a radar satellite by ISRO.\nStatement II: It is for weather only.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Used for earth observation, defense.',
      difficulty: 'Hard',
      hint: 'All-weather imaging.',
    },
    {
      level: 84,
      mainsubject: 'Science',
      question:
        'Statement I: Power is rate of work done.\nStatement II: Unit is watt.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. P = W/t.',
      difficulty: 'Medium',
      hint: 'James Watt.',
    },
    {
      level: 85,
      mainsubject: 'Science',
      question:
        'Statement I: Noble gases are inert.\nStatement II: They have complete outer shells.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Group 18.',
      difficulty: 'Hard',
      hint: 'Helium, neon.',
    },
    {
      level: 86,
      mainsubject: 'Science',
      question:
        'Statement I: Hormones are chemical messengers.\nStatement II: Insulin regulates blood sugar.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Endocrine system.',
      difficulty: 'Hard',
      hint: 'Diabetes.',
    },
    {
      level: 87,
      mainsubject: 'Science',
      question:
        'Statement I: Conservation laws protect endangered species.\nStatement II: National parks are for conservation.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Protected areas.',
      difficulty: 'Medium',
      hint: 'Wildlife sanctuaries.',
    },
    {
      level: 88,
      mainsubject: 'Science',
      question:
        'Statement I: Akash is a DRDO missile.\nStatement II: It is surface to air.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Air defense.',
      difficulty: 'Hard',
      hint: 'Missile types.',
    },
    {
      level: 89,
      mainsubject: 'Science',
      question:
        'Statement I: Lenses can be convex or concave.\nStatement II: Convex lens diverges light.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation:
        'Only Statement I is correct. Convex converges, concave diverges.',
      difficulty: 'Medium',
      hint: 'Glasses for vision.',
    },
    {
      level: 90,
      mainsubject: 'Science',
      question:
        'Statement I: Polymers are long chain molecules.\nStatement II: Plastic is a polymer.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Synthetic materials.',
      difficulty: 'Hard',
      hint: 'Nylon, PVC.',
    },
    {
      level: 91,
      mainsubject: 'Science',
      question:
        'Statement I: Nervous system controls body activities.\nStatement II: Neurons are basic units.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Brain and nerves.',
      difficulty: 'Medium',
      hint: 'Signal transmission.',
    },
    {
      level: 92,
      mainsubject: 'Science',
      question:
        'Statement I: Bio-diversity hotspots have high species diversity.\nStatement II: India is a hotspot.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Western Ghats, Himalayas.',
      difficulty: 'Hard',
      hint: 'Endemic species.',
    },
    {
      level: 93,
      mainsubject: 'Science',
      question:
        'Statement I: Cartosat is an earth observation satellite.\nStatement II: It is by DRDO.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 2,
      explanation: 'Only Statement I is correct. By ISRO.',
      difficulty: 'Hard',
      hint: 'Mapping satellite.',
    },
    {
      level: 94,
      mainsubject: 'Science',
      question:
        'Statement I: Simple machines make work easier.\nStatement II: Lever is a simple machine.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Mechanical advantage.',
      difficulty: 'Easy',
      hint: 'Pulley, wheel.',
    },
    {
      level: 95,
      mainsubject: 'Science',
      question:
        'Statement I: Alloys are mixtures of metals.\nStatement II: Brass is copper and zinc.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Improved properties.',
      difficulty: 'Medium',
      hint: 'Steel is iron carbon.',
    },
    {
      level: 96,
      mainsubject: 'Science',
      question:
        'Statement I: Mitosis is for growth.\nStatement II: Meiosis is for reproduction.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Cell division types.',
      difficulty: 'Hard',
      hint: 'Chromosome number.',
    },
    {
      level: 97,
      mainsubject: 'Science',
      question:
        'Statement I: Biofuel is from organic matter.\nStatement II: It is carbon neutral.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Ethanol, biodiesel.',
      difficulty: 'Hard',
      hint: 'Plant based fuel.',
    },
    {
      level: 98,
      mainsubject: 'Science',
      question:
        'Statement I: Kalpakkam is a nuclear power plant.\nStatement II: It uses fast breeder reactor.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Tamil Nadu.',
      difficulty: 'Hard',
      hint: 'Indian reactors.',
    },
    {
      level: 99,
      mainsubject: 'Science',
      question:
        "Statement I: Ohm's law is V=IR.\nStatement II: Resistance depends on material.",
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Conductivity.',
      difficulty: 'Hard',
      hint: 'Circuit laws.',
    },
    {
      level: 100,
      mainsubject: 'Science',
      question:
        'Statement I: Fertilizers are used in agriculture.\nStatement II: They can cause pollution if overused.',
      options: [
        'Both statements are correct',
        'Only Statement I is correct',
        'Only Statement II is correct',
        'Both are incorrect',
      ],
      correctAnswer: 1,
      explanation: 'Both statements are correct. Eutrophication from runoff.',
      difficulty: 'Medium',
      hint: 'Agricultural chemistry.',
    },
    {
      level: 101,
      mainsubject: 'Science',
      question: 'What is the basic unit of life?',
      options: ['Molecule', 'Organ', 'Atom', 'Cell'],
      correctAnswer: 4,
      explanation:
        'The cell is the basic structural and functional unit of all living organisms. It was discovered by Robert Hooke in 1665, and all organisms are composed of cells, which perform essential functions like metabolism and reproduction.',
      difficulty: 'Easy',
      hint: 'Think about what makes up tissues and organs.',
    },
    {
      level: 102,
      mainsubject: 'Science',
      question:
        'Which organ in the human body is responsible for pumping blood?',
      options: ['Lungs', 'Liver', 'Heart', 'Kidneys'],
      correctAnswer: 3,
      explanation:
        'The heart is a muscular organ that pumps blood throughout the body via the circulatory system. It has four chambers: two atria and two ventricles, and beats approximately 72 times per minute in adults.',
      difficulty: 'Easy',
      hint: "It's the organ that beats.",
    },
    {
      level: 103,
      mainsubject: 'Science',
      question: 'What is the process by which plants make their food?',
      options: ['Transpiration', 'Respiration', 'Photosynthesis', 'Digestion'],
      correctAnswer: 3,
      explanation:
        'Photosynthesis is the process where plants use sunlight, carbon dioxide, and water to produce glucose and oxygen. It occurs in chloroplasts containing chlorophyll, and the equation is 6CO2 + 6H2O → C6H12O6 + 6O2.',
      difficulty: 'Easy',
      hint: 'It involves sunlight and leaves.',
    },
    {
      level: 104,
      mainsubject: 'Science',
      question: 'Which gas do plants absorb from the atmosphere?',
      options: ['Nitrogen', 'Oxygen', 'Hydrogen', 'Carbon dioxide'],
      correctAnswer: 4,
      explanation:
        'Plants absorb carbon dioxide during photosynthesis to produce food. This gas is essential for the carbon fixation phase, and plants release oxygen as a byproduct.',
      difficulty: 'Easy',
      hint: "It's used in photosynthesis.",
    },
    {
      level: 105,
      mainsubject: 'Science',
      question: 'What is the main source of energy for the Earth?',
      options: ['Stars', 'Wind', 'Sun', 'Moon'],
      correctAnswer: 3,
      explanation:
        'The Sun is the primary source of energy for Earth, providing heat and light that drive weather, photosynthesis, and life processes. Solar energy is harnessed through various renewable technologies.',
      difficulty: 'Easy',
      hint: 'It rises in the east.',
    },
    {
      level: 106,
      mainsubject: 'Science',
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Jupiter', 'Saturn', 'Mars'],
      correctAnswer: 4,
      explanation:
        'Mars is called the Red Planet due to its reddish appearance from iron oxide (rust) on its surface. It has two moons, Phobos and Deimos, and is the fourth planet from the Sun.',
      difficulty: 'Easy',
      hint: 'It has a color like rust.',
    },
    {
      level: 107,
      mainsubject: 'Science',
      question: 'What is the chemical symbol for water?',
      options: ['CO2', 'O2', 'H2O', 'NaCl'],
      correctAnswer: 3,
      explanation:
        "Water is represented by H2O, consisting of two hydrogen atoms and one oxygen atom. It is essential for life and covers about 71% of Earth's surface.",
      difficulty: 'Easy',
      hint: 'Two hydrogens and one oxygen.',
    },
    {
      level: 108,
      mainsubject: 'Science',
      question: 'Which is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Silver', 'Diamond'],
      correctAnswer: 4,
      explanation:
        'Diamond is the hardest natural substance, ranked 10 on the Mohs scale. It is composed of carbon atoms in a crystal lattice and is used in jewelry and cutting tools.',
      difficulty: 'Easy',
      hint: "It's a girl's best friend.",
    },
    {
      level: 109,
      mainsubject: 'Science',
      question: 'What force keeps us on the ground?',
      options: ['Tension', 'Friction', 'Magnetism', 'Gravity'],
      correctAnswer: 4,
      explanation:
        "Gravity is the force of attraction between masses, keeping us on Earth's surface. Discovered by Newton, it's described by F = G(m1m2)/r².",
      difficulty: 'Easy',
      hint: 'It pulls things down.',
    },
    {
      level: 110,
      mainsubject: 'Science',
      question: 'Which instrument measures temperature?',
      options: ['Hydrometer', 'Anemometer', 'Barometer', 'Thermometer'],
      correctAnswer: 4,
      explanation:
        'A thermometer measures temperature using mercury or alcohol expansion. Common types include clinical and laboratory thermometers, with scales in Celsius or Fahrenheit.',
      difficulty: 'Easy',
      hint: "Used when you're sick.",
    },
    {
      level: 111,
      mainsubject: 'Science',
      question: 'What is the boiling point of water in Celsius?',
      options: ['212', '0', '32', '100'],
      correctAnswer: 4,
      explanation:
        'Water boils at 100°C at standard atmospheric pressure. This is the temperature where liquid water turns to vapor, and it freezes at 0°C.',
      difficulty: 'Easy',
      hint: "It's a round number.",
    },
    {
      level: 112,
      mainsubject: 'Science',
      question: 'Which gas is used in balloons to make them float?',
      options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'],
      correctAnswer: 4,
      explanation:
        "Helium is lighter than air, causing balloons to float. It's a noble gas, inert, and obtained from natural gas deposits.",
      difficulty: 'Easy',
      hint: "It's lighter than air.",
    },
    {
      level: 113,
      mainsubject: 'Science',
      question: 'What is the unit of electric current?',
      options: ['Watt', 'Ohm', 'Volt', 'Ampere'],
      correctAnswer: 4,
      explanation:
        'Ampere (A) is the SI unit of electric current, defined as the flow of one coulomb per second. Named after André-Marie Ampère.',
      difficulty: 'Medium',
      hint: 'Named after a French physicist.',
    },
    {
      level: 114,
      mainsubject: 'Science',
      question: 'Which metal is liquid at room temperature?',
      options: ['Iron', 'Gold', 'Silver', 'Mercury'],
      correctAnswer: 4,
      explanation:
        'Mercury is the only metal liquid at room temperature, with a melting point of -38.83°C. Used in thermometers but toxic.',
      difficulty: 'Medium',
      hint: 'Used in old thermometers.',
    },
    {
      level: 115,
      mainsubject: 'Science',
      question: 'What is the pH value of pure water?',
      options: ['1', '0', '14', '7'],
      correctAnswer: 4,
      explanation:
        'Pure water has a pH of 7, indicating neutrality. pH measures hydrogen ion concentration, below 7 is acidic, above is basic.',
      difficulty: 'Medium',
      hint: "It's neutral.",
    },
    {
      level: 116,
      mainsubject: 'Science',
      question: 'Which vitamin is produced by the skin in sunlight?',
      options: ['Vitamin B', 'Vitamin C', 'Vitamin A', 'Vitamin D'],
      correctAnswer: 4,
      explanation:
        'Vitamin D is synthesized in the skin upon UVB exposure. It helps in calcium absorption and bone health.',
      difficulty: 'Medium',
      hint: 'Known as the sunshine vitamin.',
    },
    {
      level: 117,
      mainsubject: 'Science',
      question: 'What is the largest organ in the human body?',
      options: ['Brain', 'Liver', 'Heart', 'Skin'],
      correctAnswer: 4,
      explanation:
        'The skin is the largest organ, covering about 2 square meters. It protects against pathogens, regulates temperature, and provides sensation.',
      difficulty: 'Medium',
      hint: "It's on the outside.",
    },
    {
      level: 118,
      mainsubject: 'Science',
      question: 'Which layer of the atmosphere contains the ozone layer?',
      options: ['Mesosphere', 'Troposphere', 'Thermosphere', 'Stratosphere'],
      correctAnswer: 4,
      explanation:
        "The stratosphere contains the ozone layer, which absorbs harmful UV radiation. It's between 10-50 km altitude.",
      difficulty: 'Medium',
      hint: "It's above the weather layer.",
    },
    {
      level: 119,
      mainsubject: 'Science',
      question: 'What is the chemical formula for table salt?',
      options: ['KCl', 'MgCl2', 'CaCl2', 'NaCl'],
      correctAnswer: 4,
      explanation:
        "Table salt is sodium chloride, NaCl. It's an ionic compound essential for life, used in food and preservation.",
      difficulty: 'Medium',
      hint: 'Sodium and chlorine.',
    },
    {
      level: 120,
      mainsubject: 'Science',
      question: 'Which type of energy is stored in a stretched spring?',
      options: ['Thermal', 'Kinetic', 'Chemical', 'Potential'],
      correctAnswer: 4,
      explanation:
        "Potential energy is stored in a stretched spring due to its position or configuration. It's elastic potential energy, released when the spring returns to shape.",
      difficulty: 'Medium',
      hint: "It's not moving yet.",
    },
    {
      level: 121,
      mainsubject: 'Science',
      question: 'What is the speed of light in vacuum?',
      options: [
        '3 x 10^6 m/s',
        '3 x 10^4 m/s',
        '3 x 10^10 m/s',
        '3 x 10^8 m/s',
      ],
      correctAnswer: 4,
      explanation:
        "The speed of light is 3 x 10^8 m/s, a constant in vacuum. It's fundamental in physics, denoted by c in E=mc².",
      difficulty: 'Medium',
      hint: "It's very fast, about 300,000 km/s.",
    },
    {
      level: 122,
      mainsubject: 'Science',
      question: 'Which acid is present in lemon?',
      options: ['Lactic acid', 'Tartaric acid', 'Acetic acid', 'Citric acid'],
      correctAnswer: 4,
      explanation:
        "Citric acid gives lemons their sour taste. It's a weak organic acid used in food, cleaning, and as a preservative.",
      difficulty: 'Medium',
      hint: 'Named after citrus fruits.',
    },
    {
      level: 123,
      mainsubject: 'Science',
      question: 'What is the function of the root in a plant?',
      options: [
        'Produce flowers',
        'Photosynthesis',
        'Store food',
        'Absorb water and minerals',
      ],
      correctAnswer: 4,
      explanation:
        'Roots anchor the plant and absorb water and minerals from soil. They also store nutrients in some plants like carrots.',
      difficulty: 'Easy',
      hint: 'Underground part.',
    },
    {
      level: 124,
      mainsubject: 'Science',
      question: "Which is the most abundant gas in Earth's atmosphere?",
      options: ['Carbon dioxide', 'Argon', 'Oxygen', 'Nitrogen'],
      correctAnswer: 4,
      explanation:
        "Nitrogen comprises 78% of the atmosphere. It's inert and essential for life through the nitrogen cycle.",
      difficulty: 'Medium',
      hint: 'Not oxygen.',
    },
    {
      level: 125,
      mainsubject: 'Science',
      question: 'What is the powerhouse of the cell?',
      options: ['Golgi apparatus', 'Nucleus', 'Ribosome', 'Mitochondria'],
      correctAnswer: 4,
      explanation:
        "Mitochondria produce ATP through cellular respiration. They have their own DNA and are known as the cell's energy factory.",
      difficulty: 'Medium',
      hint: 'Produces energy.',
    },
    {
      level: 126,
      mainsubject: 'Science',
      question: 'Which law states that force equals mass times acceleration?',
      options: [
        'Third law of motion',
        'Law of gravitation',
        'First law of motion',
        'Second law of motion',
      ],
      correctAnswer: 4,
      explanation:
        "Newton's second law: F = ma. It quantifies force as the product of mass and acceleration.",
      difficulty: 'Medium',
      hint: "Newton's laws.",
    },
    {
      level: 127,
      mainsubject: 'Science',
      question: 'What is the atomic number of carbon?',
      options: ['12', '8', '14', '6'],
      correctAnswer: 4,
      explanation:
        "Carbon has atomic number 6, with 6 protons. It's the basis of organic chemistry and has isotopes like C-12 and C-14.",
      difficulty: 'Medium',
      hint: "It's in group 14.",
    },
    {
      level: 128,
      mainsubject: 'Science',
      question: 'Which disease is caused by vitamin C deficiency?',
      options: ['Pellagra', 'Rickets', 'Beriberi', 'Scurvy'],
      correctAnswer: 4,
      explanation:
        "Scurvy is caused by lack of vitamin C, leading to bleeding gums and weakness. It's prevented by citrus fruits.",
      difficulty: 'Medium',
      hint: 'Sailors suffered from it.',
    },
    {
      level: 129,
      mainsubject: 'Science',
      question: 'What is the unit of power?',
      options: ['Newton', 'Joule', 'Pascal', 'Watt'],
      correctAnswer: 4,
      explanation:
        'Watt (W) is the unit of power, equal to one joule per second. Named after James Watt.',
      difficulty: 'Medium',
      hint: 'Light bulbs are rated in it.',
    },
    {
      level: 130,
      mainsubject: 'Science',
      question: 'Which type of lens is used in a magnifying glass?',
      options: ['Concave', 'Plano-concave', 'Plano-convex', 'Convex'],
      correctAnswer: 4,
      explanation:
        'Convex lens converges light to form magnified images. It has a positive focal length.',
      difficulty: 'Medium',
      hint: 'It bulges outward.',
    },
    {
      level: 131,
      mainsubject: 'Science',
      question: 'What is ecology?',
      options: [
        'Study of weather',
        'Study of rocks',
        'Study of stars',
        'Study of interactions between organisms and environment',
      ],
      correctAnswer: 4,
      explanation:
        'Ecology examines relationships in ecosystems, including biotic and abiotic factors. Coined by Ernst Haeckel.',
      difficulty: 'Medium',
      hint: 'Environment and living things.',
    },
    {
      level: 132,
      mainsubject: 'Science',
      question: 'Which is a renewable energy source?',
      options: ['Coal', 'Natural gas', 'Oil', 'Solar'],
      correctAnswer: 4,
      explanation:
        "Solar energy is renewable, harnessed from the Sun via panels. It's sustainable and reduces carbon emissions.",
      difficulty: 'Medium',
      hint: 'From the Sun.',
    },
    {
      level: 133,
      mainsubject: 'Science',
      question: 'What does ISRO stand for?',
      options: [
        'Indian Scientific Research Organisation',
        'International Space Research Organisation',
        'Indian Satellite Research Organisation',
        'Indian Space Research Organisation',
      ],
      correctAnswer: 4,
      explanation:
        "ISRO is India's space agency, founded in 1969. It launches satellites and missions like Chandrayaan.",
      difficulty: 'Easy',
      hint: "India's space agency.",
    },
    {
      level: 134,
      mainsubject: 'Science',
      question: 'Which organization develops missiles in India?',
      options: ['DAE', 'ISRO', 'BARC', 'DRDO'],
      correctAnswer: 4,
      explanation:
        'DRDO (Defence Research and Development Organisation) develops defense technologies, including missiles like Agni and Prithvi.',
      difficulty: 'Medium',
      hint: 'Defence research.',
    },
    {
      level: 135,
      mainsubject: 'Science',
      question: 'What is pollution?',
      options: [
        'Rainfall',
        'Clean air',
        'Plant growth',
        'Contamination of environment',
      ],
      correctAnswer: 4,
      explanation:
        'Pollution is the introduction of harmful substances into the environment, causing adverse effects. Types include air, water, soil.',
      difficulty: 'Easy',
      hint: 'Harmful to environment.',
    },
    {
      level: 136,
      mainsubject: 'Science',
      question: 'Which is a non-renewable energy source?',
      options: ['Geothermal', 'Wind', 'Hydro', 'Coal'],
      correctAnswer: 4,
      explanation:
        'Coal is fossil fuel, non-renewable, formed over millions of years. Its burning contributes to CO2 emissions.',
      difficulty: 'Medium',
      hint: 'Fossil fuel.',
    },
    {
      level: 137,
      mainsubject: 'Science',
      question: 'What is conservation?',
      options: [
        'Destruction of nature',
        'Pollution',
        'Urbanization',
        'Protection of natural resources',
      ],
      correctAnswer: 4,
      explanation:
        'Conservation involves sustainable use and protection of resources to prevent depletion. Includes wildlife and forest conservation.',
      difficulty: 'Medium',
      hint: 'Saving nature.',
    },
    {
      level: 138,
      mainsubject: 'Science',
      question: 'Which satellite is used for weather forecasting?',
      options: ['Rohini', 'Aryabhata', 'Bhaskara', 'INSAT'],
      correctAnswer: 4,
      explanation:
        'INSAT series by ISRO provides meteorological data for weather forecasting, communication, and broadcasting.',
      difficulty: 'Medium',
      hint: 'Indian National Satellite.',
    },
    {
      level: 139,
      mainsubject: 'Science',
      question: "What is India's nuclear policy?",
      options: [
        'Proliferation',
        'Complete disarmament',
        'First use',
        'No first use',
      ],
      correctAnswer: 4,
      explanation:
        "India follows a 'no first use' policy, committing not to initiate nuclear attacks. It maintains credible minimum deterrence.",
      difficulty: 'Hard',
      hint: 'Defensive stance.',
    },
    {
      level: 140,
      mainsubject: 'Science',
      question: 'Which is the first Indian satellite?',
      options: ['INSAT-1A', 'Chandrayaan-1', 'Mangalyaan', 'Aryabhata'],
      correctAnswer: 4,
      explanation:
        "Aryabhata, launched in 1975, was India's first satellite, built by ISRO and launched by Soviet Union.",
      difficulty: 'Medium',
      hint: 'Named after mathematician.',
    },
    {
      level: 141,
      mainsubject: 'Science',
      question: 'What causes acid rain?',
      options: [
        'Global warming',
        'Ozone depletion',
        'Deforestation',
        'Sulfur and nitrogen oxides',
      ],
      correctAnswer: 4,
      explanation:
        'Acid rain is caused by SO2 and NOx emissions reacting with water to form acids. It harms ecosystems and buildings.',
      difficulty: 'Medium',
      hint: 'From pollution.',
    },
    {
      level: 142,
      mainsubject: 'Science',
      question: 'Which is a greenhouse gas?',
      options: ['Nitrogen', 'Oxygen', 'Helium', 'Carbon dioxide'],
      correctAnswer: 4,
      explanation:
        'CO2 traps heat in the atmosphere, contributing to global warming. Sources include burning fossil fuels.',
      difficulty: 'Medium',
      hint: 'Causes warming.',
    },
    {
      level: 143,
      mainsubject: 'Science',
      question: 'What is biodiversity?',
      options: [
        'Variety of soils',
        'Variety of rocks',
        'Variety of weather',
        'Variety of life forms',
      ],
      correctAnswer: 4,
      explanation:
        "Biodiversity is the variety of species, ecosystems, and genes. It's essential for ecosystem stability and human well-being.",
      difficulty: 'Medium',
      hint: 'Living diversity.',
    },
    {
      level: 144,
      mainsubject: 'Science',
      question: 'Which missile is developed by DRDO?',
      options: ['PSLV', 'Chandrayaan', 'GSLV', 'Agni'],
      correctAnswer: 4,
      explanation:
        'Agni is a series of ballistic missiles developed by DRDO, capable of carrying nuclear warheads.',
      difficulty: 'Medium',
      hint: 'Ballistic missile.',
    },
    {
      level: 145,
      mainsubject: 'Science',
      question: 'What is the function of chlorophyll?',
      options: [
        'Nutrient storage',
        'Respiration',
        'Water absorption',
        'Absorb light for photosynthesis',
      ],
      correctAnswer: 4,
      explanation:
        'Chlorophyll absorbs sunlight, mainly red and blue wavelengths, for energy conversion in photosynthesis.',
      difficulty: 'Medium',
      hint: 'Green pigment.',
    },
    {
      level: 146,
      mainsubject: 'Science',
      question: 'Which is the largest planet in the solar system?',
      options: ['Saturn', 'Earth', 'Neptune', 'Jupiter'],
      correctAnswer: 4,
      explanation:
        "Jupiter is the largest, with mass 318 times Earth. It's a gas giant with the Great Red Spot storm.",
      difficulty: 'Easy',
      hint: 'Gas giant.',
    },
    {
      level: 147,
      mainsubject: 'Science',
      question: "What is Ohm's law?",
      options: ['F = ma', 'P = VI', 'E = mc²', 'V = IR'],
      correctAnswer: 4,
      explanation:
        "Ohm's law states voltage equals current times resistance (V = IR). It applies to ohmic conductors.",
      difficulty: 'Hard',
      hint: 'Voltage, current, resistance.',
    },
    {
      level: 148,
      mainsubject: 'Science',
      question: 'Which element has the symbol Fe?',
      options: ['Francium', 'Fluorine', 'Fermium', 'Iron'],
      correctAnswer: 4,
      explanation:
        "Fe is iron, from Latin 'ferrum'. It's essential for hemoglobin and used in steel production.",
      difficulty: 'Medium',
      hint: 'Metal in blood.',
    },
    {
      level: 149,
      mainsubject: 'Science',
      question: 'What is the role of vaccines?',
      options: [
        'Increase pain',
        'Cause disease',
        'Reduce appetite',
        'Provide immunity',
      ],
      correctAnswer: 4,
      explanation:
        'Vaccines stimulate immune response to provide protection against diseases without causing illness.',
      difficulty: 'Medium',
      hint: 'Prevent diseases.',
    },
    {
      level: 150,
      mainsubject: 'Science',
      question: "Which is the brain's function?",
      options: [
        'Filter waste',
        'Pump blood',
        'Digest food',
        'Control body activities',
      ],
      correctAnswer: 4,
      explanation:
        'The brain controls thoughts, movements, sensations, and organ functions via the nervous system.',
      difficulty: 'Easy',
      hint: 'Thinking organ.',
    },
    {
      level: 151,
      mainsubject: 'Science',
      question: 'What is eutrophication?',
      options: [
        'Air pollution',
        'Soil erosion',
        'Deforestation',
        'Nutrient enrichment in water',
      ],
      correctAnswer: 4,
      explanation:
        'Eutrophication is excessive nutrients leading to algal blooms and oxygen depletion in water bodies.',
      difficulty: 'Hard',
      hint: 'Algal blooms.',
    },
    {
      level: 152,
      mainsubject: 'Science',
      question: "Which is India's moon mission?",
      options: ['Aditya-L1', 'Mangalyaan', 'Gaganyaan', 'Chandrayaan'],
      correctAnswer: 4,
      explanation:
        'Chandrayaan series explores the Moon, with Chandrayaan-3 achieving soft landing in 2023.',
      difficulty: 'Medium',
      hint: 'Lunar mission.',
    },
    {
      level: 153,
      mainsubject: 'Science',
      question: 'What is nuclear fission?',
      options: [
        'Electron emission',
        'Combining nuclei',
        'Proton addition',
        'Splitting nucleus',
      ],
      correctAnswer: 4,
      explanation:
        'Fission is splitting heavy nucleus like uranium into lighter ones, releasing energy used in power plants.',
      difficulty: 'Hard',
      hint: 'Atomic bomb.',
    },
    {
      level: 154,
      mainsubject: 'Science',
      question: 'Which wave is used in radar?',
      options: ['Ultraviolet', 'Sound', 'Infrared', 'Microwave'],
      correctAnswer: 4,
      explanation:
        'Radar uses microwaves to detect objects by reflection. Used in aviation and weather.',
      difficulty: 'Hard',
      hint: 'Electromagnetic.',
    },
    {
      level: 155,
      mainsubject: 'Science',
      question: 'What is a catalyst?',
      options: [
        'Slows reaction',
        'Increases reaction rate',
        'Stops reaction',
        'Speeds up reaction without being consumed',
      ],
      correctAnswer: 4,
      explanation:
        'Catalyst lowers activation energy, speeding reactions without consumption. Enzymes are biological catalysts.',
      difficulty: 'Hard',
      hint: 'Not used up.',
    },
    {
      level: 156,
      mainsubject: 'Science',
      question: 'Which hormone regulates blood sugar?',
      options: ['Estrogen', 'Adrenaline', 'Thyroxine', 'Insulin'],
      correctAnswer: 4,
      explanation:
        'Insulin lowers blood glucose by facilitating uptake into cells. Deficiency causes diabetes.',
      difficulty: 'Hard',
      hint: 'Diabetes related.',
    },
    {
      level: 157,
      mainsubject: 'Science',
      question: 'What is geothermal energy?',
      options: ['From water', 'From wind', 'From sun', "From Earth's heat"],
      correctAnswer: 4,
      explanation:
        "Geothermal energy uses heat from Earth's interior for power. Renewable in volcanic areas.",
      difficulty: 'Hard',
      hint: 'Underground heat.',
    },
    {
      level: 158,
      mainsubject: 'Science',
      question: "Which is India's first nuclear test code name?",
      options: ['Fat Man', 'Shakti', 'Trinity', 'Smiling Buddha'],
      correctAnswer: 4,
      explanation:
        "Smiling Buddha was the 1974 Pokhran test, India's first peaceful nuclear explosion.",
      difficulty: 'Hard',
      hint: '1974 test.',
    },
    {
      level: 159,
      mainsubject: 'Science',
      question: 'What is the Doppler effect?',
      options: [
        'Sound reflection',
        'Light bending',
        'Magnetic attraction',
        'Change in frequency due to motion',
      ],
      correctAnswer: 4,
      explanation:
        'Doppler effect is apparent change in wave frequency due to relative motion, like siren pitch changing.',
      difficulty: 'Hard',
      hint: 'Siren sound.',
    },
    {
      level: 160,
      mainsubject: 'Science',
      question: 'Which is used in baking soda?',
      options: [
        'Sodium sulfate',
        'Sodium chloride',
        'Sodium carbonate',
        'Sodium bicarbonate',
      ],
      correctAnswer: 4,
      explanation:
        'Baking soda is NaHCO3, used in cooking and as antacid. Decomposes to CO2 for leavening.',
      difficulty: 'Medium',
      hint: 'Releases CO2.',
    },
    {
      level: 161,
      mainsubject: 'Science',
      question: 'What is malaria caused by?',
      options: ['Virus', 'Bacteria', 'Fungus', 'Parasite'],
      correctAnswer: 4,
      explanation:
        'Malaria is caused by Plasmodium parasite, transmitted by Anopheles mosquitoes. Symptoms include fever.',
      difficulty: 'Medium',
      hint: 'Mosquito borne.',
    },
    {
      level: 162,
      mainsubject: 'Science',
      question: 'What protects from UV rays?',
      options: ['Exosphere', 'Troposphere', 'Ionosphere', 'Ozone layer'],
      correctAnswer: 4,
      explanation:
        'Ozone layer in stratosphere absorbs UV radiation, preventing skin cancer and cataracts.',
      difficulty: 'Medium',
      hint: 'Hole in it is a problem.',
    },
    {
      level: 163,
      mainsubject: 'Science',
      question: "Which is India's Mars mission?",
      options: ['Aditya', 'Chandrayaan', 'Gaganyaan', 'Mangalyaan'],
      correctAnswer: 4,
      explanation:
        'Mangalyaan (Mars Orbiter Mission) entered Mars orbit in 2014, studying surface and atmosphere.',
      difficulty: 'Medium',
      hint: 'Mars orbiter.',
    },
    {
      level: 164,
      mainsubject: 'Science',
      question: 'What is inertia?',
      options: [
        'Energy conservation',
        'Acceleration due to gravity',
        'Force of friction',
        'Tendency to resist change in motion',
      ],
      correctAnswer: 4,
      explanation:
        "Inertia is property of matter to resist motion changes, as per Newton's first law.",
      difficulty: 'Hard',
      hint: "Newton's first law.",
    },
    {
      level: 165,
      mainsubject: 'Science',
      question: 'What is oxidation?',
      options: [
        'Gain of protons',
        'Gain of electrons',
        'Loss of protons',
        'Loss of electrons',
      ],
      correctAnswer: 4,
      explanation:
        'Oxidation is loss of electrons in reactions, opposite of reduction. Part of redox.',
      difficulty: 'Hard',
      hint: 'Rust is an example.',
    },
    {
      level: 166,
      mainsubject: 'Science',
      question: 'What are stomata?',
      options: [
        'Fruits',
        'Roots',
        'Flowers',
        'Pores in leaves for gas exchange',
      ],
      correctAnswer: 4,
      explanation:
        'Stomata are tiny openings on leaves for CO2 intake and O2 release, also transpiration.',
      difficulty: 'Medium',
      hint: 'Leaf pores.',
    },
    {
      level: 167,
      mainsubject: 'Science',
      question: 'Which energy is from tides?',
      options: ['Solar', 'Wind', 'Biomass', 'Tidal'],
      correctAnswer: 4,
      explanation:
        "Tidal energy harnesses ocean tides caused by moon's gravity, using barrages or turbines.",
      difficulty: 'Hard',
      hint: 'Ocean movement.',
    },
    {
      level: 168,
      mainsubject: 'Science',
      question: "Which fuel is used in India's nuclear reactors?",
      options: ['Deuterium', 'Thorium', 'Plutonium', 'Uranium'],
      correctAnswer: 4,
      explanation:
        'Uranium-235 is primary fuel, with India developing thorium-based reactors due to reserves.',
      difficulty: 'Hard',
      hint: 'Fissile material.',
    },
    {
      level: 169,
      mainsubject: 'Science',
      question: 'What is sonar?',
      options: [
        'Radio waves',
        'Light detection',
        'Magnetic field',
        'Sound navigation and ranging',
      ],
      correctAnswer: 4,
      explanation:
        'Sonar uses sound waves for underwater detection, like submarines and fish finding.',
      difficulty: 'Hard',
      hint: 'Like radar but sound.',
    },
    {
      level: 170,
      mainsubject: 'Science',
      question: 'What is vinegar chemically?',
      options: ['Citric acid', 'Lactic acid', 'Sulfuric acid', 'Acetic acid'],
      correctAnswer: 4,
      explanation:
        'Vinegar is dilute acetic acid, used in food and cleaning. Produced by fermentation.',
      difficulty: 'Medium',
      hint: 'Sour in salads.',
    },
    {
      level: 171,
      mainsubject: 'Science',
      question: 'Which deficiency causes night blindness?',
      options: ['Vitamin B1', 'Vitamin C', 'Vitamin D', 'Vitamin A'],
      correctAnswer: 4,
      explanation:
        'Vitamin A deficiency leads to night blindness, affecting rod cells in eyes.',
      difficulty: 'Medium',
      hint: 'Carrots help.',
    },
    {
      level: 172,
      mainsubject: 'Science',
      question: 'What is global warming?',
      options: [
        'Ozone depletion',
        'Cooling of Earth',
        'Acid rain',
        "Increase in Earth's temperature",
      ],
      correctAnswer: 4,
      explanation:
        'Global warming is rise in average temperature due to greenhouse gases, leading to climate change.',
      difficulty: 'Medium',
      hint: 'Climate change.',
    },
    {
      level: 173,
      mainsubject: 'Science',
      question: "Which is ISRO's solar mission?",
      options: ['GSLV', 'Chandrayaan', 'Mangalyaan', 'Aditya-L1'],
      correctAnswer: 4,
      explanation:
        'Aditya-L1 studies the Sun from Lagrange point 1, launched in 2023.',
      difficulty: 'Hard',
      hint: 'Sun observer.',
    },
    {
      level: 174,
      mainsubject: 'Science',
      question: 'What is acceleration?',
      options: [
        'Force applied',
        'Change in position',
        'Constant speed',
        'Change in velocity over time',
      ],
      correctAnswer: 4,
      explanation:
        'Acceleration is rate of change of velocity, vector quantity, a = Δv/Δt.',
      difficulty: 'Hard',
      hint: 'Not speed.',
    },
    {
      level: 175,
      mainsubject: 'Science',
      question: 'What are isotopes?',
      options: [
        'Different protons same neutrons',
        'Different elements same mass',
        'Same protons different electrons',
        'Same element different mass',
      ],
      correctAnswer: 4,
      explanation:
        'Isotopes have same atomic number but different mass numbers due to neutrons.',
      difficulty: 'Hard',
      hint: 'Same protons.',
    },
    {
      level: 176,
      mainsubject: 'Science',
      question: 'What is transpiration?',
      options: [
        'Nutrient uptake',
        'Food production',
        'Gas exchange',
        'Water loss from plants',
      ],
      correctAnswer: 4,
      explanation:
        'Transpiration is evaporation of water from leaves, aiding nutrient transport and cooling.',
      difficulty: 'Medium',
      hint: 'Plant sweating.',
    },
    {
      level: 177,
      mainsubject: 'Science',
      question: 'What is biofuel?',
      options: [
        'Nuclear fuel',
        'Fossil fuel',
        'Synthetic fuel',
        'From organic matter',
      ],
      correctAnswer: 4,
      explanation:
        'Biofuel is derived from biomass like plants or waste, renewable alternative to fossil fuels.',
      difficulty: 'Hard',
      hint: 'Plant based.',
    },
    {
      level: 178,
      mainsubject: 'Science',
      question: 'India is signatory to NPT?',
      options: ['Partially', 'Yes', 'Observer', 'No'],
      correctAnswer: 4,
      explanation:
        'India has not signed the Nuclear Non-Proliferation Treaty, maintaining its nuclear program outside it.',
      difficulty: 'Hard',
      hint: 'Not signed.',
    },
    {
      level: 179,
      mainsubject: 'Science',
      question: 'What is echo?',
      options: [
        'Diffraction of sound',
        'Refraction of sound',
        'Absorption of sound',
        'Reflection of sound',
      ],
      correctAnswer: 4,
      explanation:
        'Echo is sound reflection from surfaces, heard if delay is over 0.1 seconds.',
      difficulty: 'Medium',
      hint: 'Sound bounce.',
    },
    {
      level: 180,
      mainsubject: 'Science',
      question: 'Which is a polymer?',
      options: ['Sugar', 'Salt', 'Water', 'Plastic'],
      correctAnswer: 4,
      explanation:
        'Plastics are polymers, long chains of monomers like polyethylene.',
      difficulty: 'Hard',
      hint: 'Long chains.',
    },
    {
      level: 181,
      mainsubject: 'Science',
      question: 'What is the nervous system?',
      options: [
        'Respiratory',
        'Digestive',
        'Circulatory',
        'Controls body functions',
      ],
      correctAnswer: 4,
      explanation:
        'Nervous system coordinates actions via signals, including brain, spinal cord, nerves.',
      difficulty: 'Medium',
      hint: 'Brain and nerves.',
    },
    {
      level: 182,
      mainsubject: 'Science',
      question: 'India is a biodiversity hotspot?',
      options: ['Only partially', 'No', 'Not recognized', 'Yes'],
      correctAnswer: 4,
      explanation:
        'India has four hotspots: Himalayas, Western Ghats, Indo-Burma, Sundaland.',
      difficulty: 'Hard',
      hint: 'Rich in species.',
    },
    {
      level: 183,
      mainsubject: 'Science',
      question: 'Which is an earth observation satellite?',
      options: ['Brahmos', 'Agni', 'Prithvi', 'Cartosat'],
      correctAnswer: 4,
      explanation:
        'Cartosat provides high-resolution imagery for cartography and urban planning.',
      difficulty: 'Hard',
      hint: 'Mapping.',
    },
    {
      level: 184,
      mainsubject: 'Science',
      question: 'What is a lever?',
      options: [
        'Complex machine',
        'Electrical device',
        'Chemical tool',
        'Simple machine',
      ],
      correctAnswer: 4,
      explanation:
        'Lever is simple machine with fulcrum, effort, load. Types: first, second, third class.',
      difficulty: 'Medium',
      hint: 'Seesaw.',
    },
    {
      level: 185,
      mainsubject: 'Science',
      question: 'What is an alloy?',
      options: ['Pure metal', 'Non-metal', 'Compound', 'Mixture of metals'],
      correctAnswer: 4,
      explanation:
        'Alloy is homogeneous mixture of metals, like brass (copper+zinc) for better properties.',
      difficulty: 'Medium',
      hint: 'Brass or steel.',
    },
    {
      level: 186,
      mainsubject: 'Science',
      question: 'What is mitosis?',
      options: [
        'Gamete formation',
        'Sexual reproduction',
        'Fertilization',
        'Cell division for growth',
      ],
      correctAnswer: 4,
      explanation:
        'Mitosis is somatic cell division, producing two identical daughter cells for growth and repair.',
      difficulty: 'Hard',
      hint: 'Identical cells.',
    },
    {
      level: 187,
      mainsubject: 'Science',
      question: 'What is national park for?',
      options: [
        'Urban development',
        'Agriculture',
        'Mining',
        'Wildlife conservation',
      ],
      correctAnswer: 4,
      explanation:
        'National parks protect ecosystems and biodiversity, like Jim Corbett in India.',
      difficulty: 'Medium',
      hint: 'Protected areas.',
    },
    {
      level: 188,
      mainsubject: 'Science',
      question: "Which is DRDO's surface to air missile?",
      options: ['Nag', 'Prithvi', 'Trishul', 'Akash'],
      correctAnswer: 4,
      explanation:
        'Akash is medium-range SAM, inducted into Indian armed forces.',
      difficulty: 'Hard',
      hint: 'Air defense.',
    },
    {
      level: 189,
      mainsubject: 'Science',
      question: 'Which lens diverges light?',
      options: ['Plano-convex', 'Convex', 'Biconvex', 'Concave'],
      correctAnswer: 4,
      explanation:
        'Concave lens spreads light rays, used for myopia correction.',
      difficulty: 'Medium',
      hint: 'For nearsightedness.',
    },
    {
      level: 190,
      mainsubject: 'Science',
      question: 'What is combustion?',
      options: [
        'Evaporation',
        'Physical change',
        'Condensation',
        'Chemical reaction with oxygen',
      ],
      correctAnswer: 4,
      explanation:
        'Combustion is rapid oxidation releasing heat and light, like burning fuel.',
      difficulty: 'Medium',
      hint: 'Burning.',
    },
    {
      level: 191,
      mainsubject: 'Science',
      question: 'What are neurons?',
      options: ['Skin cells', 'Muscle cells', 'Blood cells', 'Nerve cells'],
      correctAnswer: 4,
      explanation:
        'Neurons transmit electrical and chemical signals in the nervous system.',
      difficulty: 'Medium',
      hint: 'Brain cells.',
    },
    {
      level: 192,
      mainsubject: 'Science',
      question: 'What is deforestation?',
      options: [
        'Water conservation',
        'Planting trees',
        'Soil protection',
        'Removal of forests',
      ],
      correctAnswer: 4,
      explanation:
        'Deforestation is clearing forests for agriculture or urban use, leading to biodiversity loss.',
      difficulty: 'Easy',
      hint: 'Tree cutting.',
    },
    {
      level: 193,
      mainsubject: 'Science',
      question: 'Which launch vehicle is by ISRO?',
      options: ['Akash', 'Agni', 'Brahmos', 'PSLV'],
      correctAnswer: 4,
      explanation:
        'Polar Satellite Launch Vehicle (PSLV) launches satellites into polar orbits.',
      difficulty: 'Medium',
      hint: 'For satellites.',
    },
    {
      level: 194,
      mainsubject: 'Science',
      question: 'What is kinetic energy?',
      options: [
        'Chemical energy',
        'Stored energy',
        'Heat energy',
        'Energy of motion',
      ],
      correctAnswer: 4,
      explanation: 'Kinetic energy is 1/2 mv², possessed by moving objects.',
      difficulty: 'Medium',
      hint: 'Moving.',
    },
    {
      level: 195,
      mainsubject: 'Science',
      question: 'Which group are noble gases?',
      options: ['Group 17', 'Group 1', 'Group 2', 'Group 18'],
      correctAnswer: 4,
      explanation:
        'Group 18 elements are inert due to full electron shells, like helium, neon.',
      difficulty: 'Hard',
      hint: 'Inert gases.',
    },
    {
      level: 196,
      mainsubject: 'Science',
      question: 'What is meiosis?',
      options: [
        'Budding',
        'Growth division',
        'Binary fission',
        'Reproductive division',
      ],
      correctAnswer: 4,
      explanation:
        'Meiosis produces gametes with half chromosomes, ensuring genetic diversity.',
      difficulty: 'Hard',
      hint: 'Half chromosomes.',
    },
    {
      level: 197,
      mainsubject: 'Science',
      question: 'What is sustainable development?',
      options: [
        'Industrial growth only',
        'Rapid resource use',
        'Pollution increase',
        'Meeting needs without compromising future',
      ],
      correctAnswer: 4,
      explanation:
        'Sustainable development balances economic, social, environmental needs for future generations.',
      difficulty: 'Hard',
      hint: 'Future generations.',
    },
    {
      level: 198,
      mainsubject: 'Science',
      question: 'Which nuclear plant is in Kalpakkam?',
      options: ['Tarapur', 'Narora', 'Kakrapar', 'Madras Atomic Power Station'],
      correctAnswer: 4,
      explanation: 'MAPS in Kalpakkam uses pressurized heavy water reactors.',
      difficulty: 'Hard',
      hint: 'Tamil Nadu.',
    },
    {
      level: 199,
      which: 'What is the name of the?',
      options: ['Power dissipation', 'Voltage drop', 'Voltage', 'Opposition'],
      options: ['Wait, what? This is a', 'Wait, what? This is a'],
      correctAnswer: 4,
      explanation:
        'Resistance opposes electric current, measured in ohms, R = V/I.',
      difficulty: 'Hard',
      hint: 'Ohms.',
    },
    {
      level: 200,
      mainsubject: 'Science',
      question: 'What are fertilizers?',
      options: [
        'Soil eroders',
        'Pesticides',
        'Weed killers',
        'Nutrients for plants',
      ],
      correctAnswer: 4,
      explanation:
        'Fertilizers provide essential nutrients like NPK for plant growth, but overuse causes pollution.',
      difficulty: 'Medium',
      hint: 'Plant food.',
    },
  ],
  'Current Affairs': [
    {
      level: 1,
      mainsubject: 'Current Affairs',
      question: 'Which country hosted the G20 Summit in 2023?',
      options: ['India', 'Indonesia', 'Italy', 'Japan'],
      correctAnswer: 1,
      explanation:
        "India hosted the G20 Summit in 2023, with the theme 'Vasudhaiva Kutumbakam' (One Earth, One Family, One Future).",
      difficulty: 'Easy',
      hint: 'Think about recent international events',
    },
    {
      level: 2,
      mainsubject: 'Current Affairs',
      question: "What is the name of India's first solar mission?",
      options: ['Chandrayaan', 'Mangalyaan', 'Aditya-L1', 'Gaganyaan'],
      correctAnswer: 3,
      explanation:
        "Aditya-L1 is India's first solar mission launched by ISRO to study the Sun.",
      difficulty: 'Medium',
      hint: 'Aditya means Sun in Sanskrit',
    },
  ],
  'Culture & Society': [
    {
      level: 1,
      mainsubject: 'Culture & Society',
      question: 'Which classical dance form originated in Kerala?',
      options: ['Bharatanatyam', 'Kathakali', 'Odissi', 'Kuchipudi'],
      correctAnswer: 2,
      explanation:
        'Kathakali is a classical dance form that originated in Kerala, known for its elaborate costumes and makeup.',
      difficulty: 'Easy',
      hint: 'Think about the southern state',
    },
    {
      level: 2,
      mainsubject: 'Culture & Society',
      question: "Who wrote the famous Kannada poem 'Vachana'?",
      options: ['Kuvempu', 'Basavanna', 'Bendre', 'Pampa'],
      correctAnswer: 2,
      explanation:
        'Basavanna was a 12th-century philosopher and poet who wrote Vachanas, a form of Kannada poetry.',
      difficulty: 'Medium',
      hint: 'He was a social reformer',
    },
    {
      level: 3,
      mainsubject: 'Culture & Society',
      question:
        "The 'Garbhagriha' is the most important part of a Hindu temple. What does it house?",
      options: [
        'A large hall for congregations',
        'The main deity of the temple',
        'A reservoir for sacred water',
        "The temple's treasury and jewels",
      ],
      correctAnswer: 2,
      explanation:
        "The 'Garbhagriha', literally meaning 'womb-house', is the sanctum sanctorum, the innermost shrine of a Hindu temple where the primary idol or 'Murti' of the deity is housed. It is typically a small, dark chamber. Other parts of a temple include the 'Mandapa' (congregation hall), 'Shikhara' or 'Vimana' (the tower above the Garbhagriha), and 'Antarala' (an antechamber between the Garbhagriha and the Mandapa).",
      difficulty: 'Easy',
      hint: 'It is the spiritual center of the temple.',
    },
    {
      level: 4,
      mainsubject: 'Culture & Society',
      question:
        'Which of these UNESCO World Heritage Sites in Karnataka is famous for its unique blend of Chalukyan architectural styles, featuring both Nagara and Dravida temple forms?',
      options: ['Hampi', 'Belur-Halebidu', 'Mysore Palace', 'Pattadakal'],
      correctAnswer: 4,
      explanation:
        "Pattadakal is renowned as a 'laboratory' of temple architecture. The Chalukya dynasty built temples here that experimented with different styles. You can see the northern 'Nagara' style (e.g., Papanatha temple) and the southern 'Dravida' style (e.g., Virupaksha temple) side-by-side. Hampi was the capital of the Vijayanagara Empire, and the Belur-Halebidu temples are masterpieces of Hoysala architecture.",
      difficulty: 'Easy',
      hint: "This site is often called the 'cradle of Indian temple architecture'.",
    },
    {
      level: 5,
      mainsubject: 'Culture & Society',
      question:
        'Yakshagana, a traditional theatre form, is predominantly associated with which region of Karnataka?',
      options: [
        'Coastal districts (Karavali)',
        'Northern plains (Bayaluseeme)',
        'Hilly regions (Malenadu)',
        'Southern Mysore region',
      ],
      correctAnswer: 1,
      explanation:
        'Yakshagana is a vibrant and elaborate dance-drama form native to the coastal and Malenadu regions of Karnataka, primarily the districts of Dakshina Kannada, Udupi, Uttara Kannada, and Shivamogga. It combines dance, music, dialogue, costume, and make-up in a unique style, often depicting stories from Hindu epics. Dollu Kunitha is more associated with the Kuruba community across Karnataka, while Kamsale is linked to the devotees of Male Mahadeshwara in the southern regions.',
      difficulty: 'Easy',
      hint: 'Think of the regions near the Arabian Sea.',
    },
    {
      level: 6,
      mainsubject: 'Culture & Society',
      question:
        "The Indian Constitution's Preamble was amended once to include the word 'Secular'. Which amendment was this?",
      options: [
        '44th Amendment',
        '1st Amendment',
        '42nd Amendment',
        '61st Amendment',
      ],
      correctAnswer: 3,
      explanation:
        "The 42nd Amendment Act of 1976, enacted during the Emergency, made significant changes to the Constitution. It added three new words to the Preamble: 'Socialist', 'Secular', and 'Integrity'. The 44th Amendment (1978) reversed many of the changes made by the 42nd Amendment. The 1st Amendment (1951) dealt with land reforms, and the 61st Amendment (1989) lowered the voting age from 21 to 18.",
      difficulty: 'Easy',
      hint: "This amendment is also known as the 'Mini-Constitution'.",
    },
    {
      level: 7,
      mainsubject: 'Culture & Society',
      question:
        "Who among the following is revered as 'Adikavi' (the first poet) of Kannada literature for his work 'Vikramarjuna Vijaya'?",
      options: ['Ranna', 'Janna', 'Kuvempu', 'Pampa'],
      correctAnswer: 4,
      explanation:
        "Pampa, a 10th-century Jain poet, is celebrated as the 'Adikavi' of Kannada. His epic 'Vikramarjuna Vijaya' (also known as Pampa Bharata) is a retelling of the Mahabharata with his patron, the Chalukya king Arikesari, as the hero Arjuna. Pampa, along with Ranna and Ponna, form the 'three gems' (Ratnatraya) of early Kannada literature.",
      difficulty: 'Easy',
      hint: "His name is one of the 'three gems' of old Kannada literature.",
    },
    {
      level: 8,
      mainsubject: 'Culture & Society',
      question:
        'The Sattriya dance form, recognized as a classical dance in 2000, originates from which Indian state?',
      options: ['Manipur', 'Odisha', 'Assam', 'Andhra Pradesh'],
      correctAnswer: 3,
      explanation:
        'Sattriya is a classical dance-drama performance art with origins in the Krishna-centered Vaishnavism monasteries (Sattras) of Assam. It was introduced in the 15th century by the great saint and social reformer Mahapurusha Sankaradeva. The other options are famous for their own classical dances: Manipur for Manipuri, Odisha for Odissi, and Andhra Pradesh for Kuchipudi.',
      difficulty: 'Easy',
      hint: 'This state is famous for its tea gardens and the one-horned rhinoceros.',
    },
    {
      level: 9,
      mainsubject: 'Culture & Society',
      question:
        "Which article of the Indian Constitution abolishes 'untouchability' and forbids its practice in any form?",
      options: ['Article 14', 'Article 17', 'Article 21', 'Article 25'],
      correctAnswer: 2,
      explanation:
        "Article 17 of the Indian Constitution explicitly abolishes the practice of untouchability, making it a punishable offense. This is a fundamental right under the 'Right to Equality'. Article 14 ensures equality before the law. Article 21 guarantees the right to life and personal liberty. Article 25 grants freedom of conscience and the right to profess, practice, and propagate religion.",
      difficulty: 'Easy',
      hint: 'This fundamental right deals with a major historical social evil.',
    },
    {
      level: 10,
      mainsubject: 'Culture & Society',
      question:
        'The famous rock-cut temples of Ellora, a UNESCO World Heritage Site, are unique because they represent which three religions?',
      options: [
        'Hinduism, Islam, Christianity',
        'Jainism, Sikhism, Zoroastrianism',
        'Buddhism, Hinduism, Jainism',
        'Hinduism, Buddhism, Sikhism',
      ],
      correctAnswer: 3,
      explanation:
        "The Ellora Caves in Maharashtra are a spectacular example of Indian rock-cut architecture, showcasing remarkable religious harmony. The 34 caves feature monuments and artwork of Buddhism (Caves 1-12), Hinduism (Caves 13-29), and Jainism (Caves 30-34), all built in close proximity to each other. The Kailasa temple (Cave 16) is the world's largest monolithic sculpture, carved from a single rock.",
      difficulty: 'Easy',
      hint: 'These caves showcase the religious tolerance of ancient India.',
    },
    {
      level: 11,
      mainsubject: 'Culture & Society',
      question:
        'Kuvempu, the celebrated Kannada writer, received the Jnanpith Award for which literary work?',
      options: [
        'Kanakaangi',
        'Naku Tanti',
        'Mookajjiya Kanasugalu',
        'Sri Ramayana Darshanam',
      ],
      correctAnswer: 4,
      explanation:
        "Kuppali Venkatappa Puttappa, popularly known by his pen name Kuvempu, was the first Kannada writer to receive the Jnanpith Award in 1967. He was honored for his magnum opus 'Sri Ramayana Darshanam', a modern rendition of the epic Ramayana from the perspective of various characters. 'Naku Tanti' was written by Da Ra Bendre and 'Mookajjiya Kanasugalu' by Shivaram Karanth, both of whom also won the Jnanpith Award.",
      difficulty: 'Medium',
      hint: 'This work reinterprets a famous Hindu epic.',
    },
    {
      level: 12,
      mainsubject: 'Culture & Society',
      question:
        'The architectural style that combines elements of both Indian and Islamic architecture, which flourished during the Delhi Sultanate and Mughal era, is known as?',
      options: [
        'Dravidian style',
        'Indo-Saracenic style',
        'Nagara style',
        'Gothic style',
      ],
      correctAnswer: 2,
      explanation:
        'The Indo-Saracenic style (also known as Indo-Islamic architecture) is a blend of features like domes, arches, and minarets from Islamic tradition with decorative elements and craftsmanship from Indian architecture. Prominent examples include the Qutub Minar, Taj Mahal, and Gol Gumbaz. Dravidian and Nagara are styles of Hindu temple architecture, while Gothic architecture was introduced to India by the British.',
      difficulty: 'Medium',
      hint: 'Think of the style of monuments like the Taj Mahal.',
    },
    {
      level: 13,
      mainsubject: 'Culture & Society',
      question:
        'The Vachana literary movement of the 12th century was a form of devotional poetry that challenged social and religious norms. Which language were the Vachanas written in?',
      options: ['Tamil', 'Telugu', 'Kannada', 'Sanskrit'],
      correctAnswer: 3,
      explanation:
        'The Vachana movement was a pivotal part of Kannada literature and the Veerashaiva/Lingayat movement. Vachanas are rhythmic prose poems written in simple Kannada, making them accessible to the common person. They rejected complex Sanskrit rituals and the caste system. Prominent Vachanakaras include Basavanna, Akka Mahadevi, and Allama Prabhu.',
      difficulty: 'Medium',
      hint: 'This movement was led by social reformers like Basavanna.',
    },
    {
      level: 14,
      mainsubject: 'Culture & Society',
      question:
        "The 'Trinity of Carnatic music' refers to three revered composers who revolutionized the art form. Who are they?",
      options: [
        'Tansen, Baiju Bawra, Amir Khusrau',
        'Thyagaraja, Muthuswami Dikshitar, Syama Sastri',
        'Purandara Dasa, Annamacharya, Bhadrachala Ramadasu',
        'Ravi Shankar, Zakir Hussain, Hariprasad Chaurasia',
      ],
      correctAnswer: 2,
      explanation:
        "Thyagaraja, Muthuswami Dikshitar, and Syama Sastri are collectively known as the Trinity of Carnatic music. They lived in the late 18th and early 19th centuries in Tiruvarur, Tamil Nadu, and their compositions form the bedrock of modern Carnatic music. Purandara Dasa is revered as the 'Pitamaha' (grandfather) of Carnatic music for codifying its fundamental lessons. Tansen and Amir Khusrau are legendary figures in Hindustani classical music.",
      difficulty: 'Medium',
      hint: 'All three composers were contemporaries from the Thanjavur region.',
    },
    {
      level: 15,
      mainsubject: 'Culture & Society',
      question:
        "The intricate carvings and star-shaped platforms ('stellate' plans) are defining features of which architectural style, exemplified by the temples at Belur and Halebidu?",
      options: [
        'Vijayanagara Architecture',
        'Chalukya Architecture',
        'Pallava Architecture',
        'Hoysala Architecture',
      ],
      correctAnswer: 4,
      explanation:
        'Hoysala architecture, which flourished from the 11th to 14th centuries in Karnataka, is renowned for its attention to intricate detail. Key features include the use of soft soapstone (chloritic schist) which allowed for fine carving, stellate (star-shaped) temple plans, and lavishly decorated walls and pillars. The Chennakesava temple at Belur and the Hoysaleswara temple at Halebidu are prime examples.',
      difficulty: 'Medium',
      hint: 'This dynasty ruled from its capital, Dwarasamudra (present-day Halebidu).',
    },
    {
      level: 16,
      mainsubject: 'Culture & Society',
      question:
        'The Mandal Commission was established in 1979 to address which major social issue in India?',
      options: [
        'Centre-State relations',
        'Electoral reforms',
        'Reservation for Socially and Educationally Backward Classes (SEBCs)',
        "Women's safety and empowerment",
      ],
      correctAnswer: 3,
      explanation:
        'The Mandal Commission was set up to identify the Socially and Educationally Backward Classes (SEBCs) and recommend steps for their advancement, including reservations in government jobs and educational institutions. Its recommendation to provide 27% reservation for Other Backward Classes (OBCs) was implemented in 1990, leading to significant political and social debates. The Sarkaria Commission dealt with Centre-State relations, and various committees like Tarkunde and Dinesh Goswami worked on electoral reforms.',
      difficulty: 'Medium',
      hint: 'Its recommendations led to the implementation of reservations for OBCs.',
    },
    {
      level: 17,
      mainsubject: 'Culture & Society',
      question:
        'Which of the following literary forms is primarily associated with the Sangam period of ancient South Indian history?',
      options: ['Vedas', 'Puranas', 'Vachanas', 'Ettuthokai and Pattupattu'],
      correctAnswer: 4,
      explanation:
        "Sangam literature refers to a body of classical Tamil poetry created between c. 300 BCE and 300 CE. The main works are categorized into 'Ettuthokai' (Eight Anthologies) and 'Pattupattu' (Ten Idylls). This literature provides a rich source of information about the society, economy, and culture of the Tamilakam region during that era. Vedas and Puranas are key Sanskrit texts of Hinduism, while Vachanas are from 12th century Karnataka.",
      difficulty: 'Medium',
      hint: 'This body of literature is in the Tamil language.',
    },
    {
      level: 18,
      mainsubject: 'Culture & Society',
      question:
        "'Dollu Kunitha' is a popular and energetic drum dance of Karnataka. It is primarily performed by men of which community?",
      options: [
        'The Brahmin community',
        'The Vokkaliga community',
        'The Kuruba community',
        'The Kodava community',
      ],
      correctAnswer: 3,
      explanation:
        'Dollu Kunitha is a powerful drum dance performed by the men of the shepherd (Kuruba) community. It is characterized by vigorous drumming, quick movements, and synchronized group formations. The dance is performed to honor their deity, Beereshwara. It is a major folk art form of Karnataka, often showcased in official celebrations and festivals.',
      difficulty: 'Medium',
      hint: 'This community is traditionally associated with shepherding.',
    },
    {
      level: 19,
      mainsubject: 'Culture & Society',
      question: 'What is the primary theme of the Ajanta Caves paintings?',
      options: [
        'Scenes from the Ramayana',
        'Daily life of Mughal emperors',
        'Jataka tales and life of the Buddha',
        'Stories of Hindu deities like Shiva and Vishnu',
      ],
      correctAnswer: 3,
      explanation:
        'The paintings in the Ajanta Caves, a UNESCO World Heritage Site in Maharashtra, primarily depict the Jataka tales, which are stories about the previous births of the Buddha. These murals and sculptures, dating from the 2nd century BCE to about 480 CE, are masterpieces of Buddhist religious art and provide a vivid picture of ancient Indian life. The Ellora caves, in contrast, feature Hindu and Jain themes alongside Buddhist ones.',
      difficulty: 'Medium',
      hint: 'The art is centered around a major religion that originated in India.',
    },
    {
      level: 20,
      mainsubject: 'Culture & Society',
      question:
        "Which social reformer and his wife founded the first school for girls in Pune in 1848, marking a significant step for women's education in India?",
      options: [
        'Raja Ram Mohan Roy and Devi Chaudhurani',
        'Dayananda Saraswati and his followers',
        'Ishwar Chandra Vidyasagar and his associates',
        'Jyotiba Phule and Savitribai Phule',
      ],
      correctAnswer: 4,
      explanation:
        "Jyotiba Phule and his wife, Savitribai Phule, were pioneers of women's education in India. They started the first school for girls in Bhide Wada, Pune, in 1848, facing immense social opposition. Savitribai Phule is widely regarded as India's first female teacher. Their work also focused on eradicating caste discrimination and untouchability through their organization, the Satyashodhak Samaj.",
      difficulty: 'Medium',
      hint: "His wife is celebrated as India's first female teacher.",
    },
    {
      level: 21,
      mainsubject: 'Culture & Society',
      question:
        "The 'Kamsale' performance art of Karnataka is deeply associated with the worship of which deity?",
      options: [
        'Lord Ganesha',
        'Lord Male Mahadeshwara',
        'Goddess Chamundeshwari',
        'Lord Virupaksha',
      ],
      correctAnswer: 2,
      explanation:
        'Kamsale is a unique folk art performed by male devotees of Lord Male Mahadeshwara. The performers, dressed in traditional attire, sing praises of the deity while rhythmically playing a pair of brass cymbals, also called Kamsale. It is prevalent in the Mysuru, Mandya, and Chamarajanagar districts of Karnataka. Lord Virupaksha is the main deity at Hampi, and Goddess Chamundeshwari is the presiding deity of Mysuru.',
      difficulty: 'Medium',
      hint: "The deity's main temple is located in the hills of Chamarajanagar district.",
    },
    {
      level: 22,
      mainsubject: 'Culture & Society',
      question:
        "Consider the following statements about Buddhist architecture:\n1. A 'Stupa' is a mound-like structure containing Buddhist relics.\n2. A 'Chaitya' is a prayer hall, often with a stupa at one end.\n3. A 'Vihara' is a monastery or living quarters for monks.\nWhich of the above statements is/are correct?",
      options: ['Only 1 and 2', 'Only 2 and 3', 'Only 3', 'All 1, 2, and 3'],
      correctAnswer: 4,
      explanation:
        'All three statements are correct and describe the fundamental components of Buddhist architecture. The Stupa (like the Great Stupa at Sanchi) is a hemispherical structure for veneration. The Chaitya is the main prayer or assembly hall, often apsidal in plan, with rock-cut pillars. The Vihara consists of cells for monks to live and meditate, typically arranged around a central courtyard. These three elements are often found together in ancient Buddhist sites like Ajanta and Ellora.',
      difficulty: 'Hard',
      hint: 'All three terms are fundamental to early Buddhist monastic complexes.',
    },
    {
      level: 23,
      mainsubject: 'Culture & Society',
      question:
        'Which of the following is NOT one of the eight Jnanpith awardees for Kannada literature?',
      options: ['Kuvempu', 'Da Ra Bendre', 'Girish Karnad', 'S. L. Bhyrappa'],
      correctAnswer: 4,
      explanation:
        'Kannada literature has the second-highest number of Jnanpith Awards (8). The recipients are: Kuvempu (1967), Da Ra Bendre (1973), Shivaram Karanth (1977), Masti Venkatesha Iyengar (1983), V. K. Gokak (1990), U. R. Ananthamurthy (1994), Girish Karnad (1998), and Chandrashekhara Kambara (2010). S. L. Bhyrappa is a highly acclaimed contemporary Kannada novelist but has not received the Jnanpith Award.',
      difficulty: 'Hard',
      hint: "The person in question is a famous contemporary novelist known for works like 'Parva'.",
    },
    {
      level: 24,
      mainsubject: 'Culture & Society',
      question:
        'The famous Stone Chariot, a prominent feature of Vijayanagara architecture, is located within the temple complex of which deity at Hampi?',
      options: [
        'Virupaksha Temple',
        'Hazara Rama Temple',
        'Vittala Temple',
        'Krishna Temple',
      ],
      correctAnswer: 3,
      explanation:
        'The iconic Stone Chariot is situated in the courtyard of the Vittala Temple at Hampi. It is actually a shrine dedicated to Garuda, the mount of Lord Vishnu (Vittala). This monolithic sculpture is one of the most famous and artistically accomplished structures of the Vijayanagara Empire and is depicted on the Indian fifty-rupee note. The Virupaksha Temple is the main functioning temple at Hampi, dedicated to Lord Shiva.',
      difficulty: 'Medium',
      hint: 'This temple is dedicated to a form of Lord Vishnu.',
    },
    {
      level: 25,
      mainsubject: 'Culture & Society',
      question:
        'Which of the following is a key difference between the Gandhara and Mathura schools of art?',
      options: [
        'Mathura school used red sandstone, while Gandhara school used grey sandstone.',
        'Gandhara school was purely indigenous, while Mathura school had Greek influence.',
        'Mathura school only created Hindu art, while Gandhara school only created Buddhist art.',
        'Gandhara school predates the Mathura school by several centuries.',
      ],
      correctAnswer: 1,
      explanation:
        'A primary distinguishing feature is the material used. The Mathura school, centered in Mathura, predominantly used local red-spotted sandstone. The Gandhara school, located in the northwestern frontier, used grey or bluish-grey sandstone and stucco. Contrary to option 2, the Gandhara school is known for its strong Greco-Roman (Hellenistic) influence, while the Mathura school was more indigenous. Both schools produced art for Buddhist, Jain, and Hindu traditions.',
      difficulty: 'Hard',
      hint: 'Think about the color of the stone used in sculptures from these regions.',
    },
    {
      level: 26,
      mainsubject: 'Culture & Society',
      question:
        "The 'Devadasi' system, a social issue in parts of India, refers to what practice?",
      options: [
        'A matrilineal system of inheritance',
        'The practice of dedicating young girls to the service of a deity in a temple',
        'A tradition of women warriors in medieval kingdoms',
        'A system of governance led by a council of women',
      ],
      correctAnswer: 2,
      explanation:
        "The Devadasi system was a religious practice where parents would marry their daughter to a deity or a temple. The woman, known as a Devadasi ('servant of God'), would then spend her life in service to the temple, performing music and dance. Over time, the system degenerated, leading to the exploitation of these women. Several states, including Karnataka (Karnataka Devadasis Prohibition of Dedication Act, 1982), have passed laws to abolish this practice.",
      difficulty: 'Medium',
      hint: "The term literally translates to 'female servant of God'.",
    },
    {
      level: 27,
      mainsubject: 'Culture & Society',
      question:
        'Match the following classical dances with their state of origin:\n(A) Mohiniyattam   (1) Andhra Pradesh\n(B) Kuchipudi       (2) Odisha\n(C) Odissi          (3) Uttar Pradesh\n(D) Kathak          (4) Kerala\n',
      options: [
        'A-4, B-1, C-2, D-3',
        'A-1, B-4, C-3, D-2',
        'A-4, B-2, C-1, D-3',
        'A-3, B-1, C-4, D-2',
      ],
      correctAnswer: 1,
      explanation:
        'The correct matches are:\n- Mohiniyattam is a graceful, feminine dance from Kerala.\n- Kuchipudi originates from a village of the same name in Andhra Pradesh.\n- Odissi is an ancient dance form from the temples of Odisha.\n- Kathak is the primary classical dance of North India, with major schools in Lucknow, Jaipur, and Benares (Uttar Pradesh and Rajasthan).',
      difficulty: 'Medium',
      hint: 'Mohiniyattam and Kathakali are both from the same state.',
    },
    {
      level: 28,
      mainsubject: 'Culture & Society',
      question:
        "The concept of 'Social Justice' as enshrined in the Indian Constitution primarily aims to:",
      options: [
        'Provide equal economic opportunities for all citizens, irrespective of their current wealth.',
        'Create a society where discrimination on the basis of caste, religion, gender, or birth is eliminated.',
        'Ensure that all religions are treated with equal respect by the state.',
        'Promote the cultural heritage of minority communities.',
      ],
      correctAnswer: 2,
      explanation:
        'Social Justice is a foundational principle of the Indian Constitution, aiming to rectify historical injustices and create an egalitarian society. It seeks to remove social imbalances and inequalities by ending discrimination against backward and marginalized sections of society (like SCs, STs, OBCs, and women). This is achieved through Fundamental Rights (e.g., Articles 15, 17) and Directive Principles of State Policy, including provisions like reservations (affirmative action).',
      difficulty: 'Medium',
      hint: 'It focuses on removing historical inequalities and discrimination.',
    },
    {
      level: 29,
      mainsubject: 'Culture & Society',
      question:
        "Da Ra Bendre, one of Karnataka's most celebrated poets, wrote under which pen name?",
      options: ['Srinivasa', 'Kuvempu', 'Anakru', 'Ambikatanayadatta'],
      correctAnswer: 4,
      explanation:
        "Dattatreya Ramachandra Bendre, popularly known as Da Ra Bendre, used the pen name 'Ambikatanayadatta' ('son of Ambika'). He was a recipient of the Jnanpith Award for his poetry collection 'Naku Tanti' (Four Strings). 'Srinivasa' was the pen name of Masti Venkatesha Iyengar, 'Kuvempu' was K.V. Puttappa's, and 'Anakru' was A. N. Krishna Rao's.",
      difficulty: 'Hard',
      hint: "The name translates to 'Datta, son of Ambika'.",
    },
    {
      level: 30,
      mainsubject: 'Culture & Society',
      question: "What is 'Pietra Dura'?",
      options: [
        'A style of mural painting found in the caves of Ajanta.',
        'The use of a pointed arch in Indo-Islamic architecture.',
        'An inlay technique of using cut and polished colored stones to create images.',
        'A form of raised relief sculpture used in Hoysala temples.',
      ],
      correctAnswer: 3,
      explanation:
        'Pietra Dura (or Parchin kari) is a decorative art form where highly polished semi-precious stones like lapis lazuli, onyx, and jasper are cut and inlaid into stone to create intricate images. This technique was extensively used in Mughal architecture, with the most famous example being the delicate floral designs on the Taj Mahal. It is distinct from mosaic work, as the stones are so finely fitted that the joints are barely visible.',
      difficulty: 'Medium',
      hint: 'This decorative technique is famously seen on the Taj Mahal.',
    },
    {
      level: 31,
      mainsubject: 'Culture & Society',
      question:
        "The 'Navaratnas' or 'Nine Gems' were a group of extraordinary scholars and artists in the court of which famous king?",
      options: [
        'Ashoka',
        'Harshavardhana',
        'Chandragupta II (Vikramaditya)',
        'Krishnadevaraya',
      ],
      correctAnswer: 3,
      explanation:
        "The 'Navaratnas' adorned the court of the Gupta emperor Chandragupta II Vikramaditya. This esteemed group included luminaries such as the great poet and playwright Kalidasa, the astronomer Varahamihira, the physician Dhanvantari, and the lexicographer Amarasimha. This period is often considered the 'Golden Age' of ancient India due to its remarkable achievements in arts, literature, and science. Krishnadevaraya's court had the 'Ashtadiggajas' (Eight Elephants), a group of eight Telugu poets.",
      difficulty: 'Medium',
      hint: 'The poet Kalidasa was a member of this group.',
    },
    {
      level: 32,
      mainsubject: 'Culture & Society',
      question:
        'Which of these temple complexes is NOT a UNESCO World Heritage Site?',
      options: [
        'Sun Temple, Konark',
        'Khajuraho Group of Monuments',
        'Brihadeeswarar Temple, Thanjavur',
        'Meenakshi Temple, Madurai',
      ],
      correctAnswer: 4,
      explanation:
        "While the Meenakshi Amman Temple in Madurai is an architectural marvel and a major pilgrimage site, it is currently on UNESCO's tentative list, not the final World Heritage list. The Sun Temple at Konark (Odisha), the Khajuraho temples (Madhya Pradesh) famous for their nagara-style architecture and erotic sculptures, and the Brihadeeswarar Temple (part of the 'Great Living Chola Temples' in Tamil Nadu) are all designated UNESCO World Heritage Sites.",
      difficulty: 'Medium',
      hint: 'This temple is located in the city of Madurai.',
    },
    {
      level: 33,
      mainsubject: 'Culture & Society',
      question:
        'Consider the following statements regarding the Vachana movement:\n1. It was a purely literary movement with no social reform agenda.\n2. It promoted the use of complex Sanskrit over vernacular languages.\nWhich of the statement(s) is/are correct?',
      options: ['Only 1', 'Only 2', 'Both 1 and 2', 'Neither 1 nor 2'],
      correctAnswer: 4,
      explanation:
        'Both statements are incorrect. The Vachana movement was fundamentally a socio-religious reform movement. It strongly opposed the caste system, ritualism, and gender inequality. Its leaders, like Basavanna, actively used simple, spoken Kannada (a vernacular language) to make their teachings accessible to everyone, deliberately rejecting the elitism associated with Sanskrit. This was a key aspect of its revolutionary character.',
      difficulty: 'Hard',
      hint: "The movement was known for its progressive social ideals and use of common people's language.",
    },
    {
      level: 34,
      mainsubject: 'Culture & Society',
      question: 'The National Commission for Women (NCW) in India is a:',
      options: [
        'Constitutional body',
        'Statutory body',
        'Executive body established by a cabinet resolution',
        'Non-governmental organization (NGO)',
      ],
      correctAnswer: 2,
      explanation:
        'The National Commission for Women is a statutory body. This means it was established by an Act of Parliament, specifically the National Commission for Women Act, 1990. It is not a constitutional body (like the Election Commission or UPSC, which are mentioned in the Constitution itself). Its mandate is to review the legal and constitutional safeguards for women, recommend remedial legislative measures, and facilitate redressal of grievances.',
      difficulty: 'Medium',
      hint: 'It was created by an Act of Parliament.',
    },
    {
      level: 35,
      mainsubject: 'Culture & Society',
      question:
        "Which of the 'four great historical sites' of Buddhism in India, marking major events in Buddha's life, is located in present-day Bihar and is where he attained enlightenment?",
      options: ['Lumbini', 'Bodh Gaya', 'Sarnath', 'Kushinagar'],
      correctAnswer: 2,
      explanation:
        'Bodh Gaya in Bihar is the site where Siddhartha Gautama attained enlightenment under the Bodhi tree and became the Buddha. The other three important sites are: Lumbini (in modern-day Nepal) where he was born; Sarnath (near Varanasi, UP) where he gave his first sermon; and Kushinagar (UP) where he attained Mahaparinirvana (passed away). These four sites are the most important pilgrimage destinations for Buddhists.',
      difficulty: 'Easy',
      hint: 'This site is famous for the Mahabodhi Temple and the Bodhi Tree.',
    },
    {
      level: 36,
      mainsubject: 'Culture & Society',
      question:
        "The 'Gopuram', a monumental ornate tower at the entrance of a temple, is a characteristic feature of which style of temple architecture?",
      options: [
        'Nagara style',
        'Vesara style',
        'Dravidian style',
        'Kalinga style',
      ],
      correctAnswer: 3,
      explanation:
        "The Gopuram is a signature element of the Dravidian style of temple architecture, which is prevalent in Southern India. These towering gateways are often more elaborately decorated and taller than the main temple tower (Vimana) itself, especially in later periods like under the Nayaka rulers. Temples like the Meenakshi Temple in Madurai are famous for their magnificent gopurams. Nagara style temples of North India typically have a 'Shikhara' over the sanctum but lack massive gateways.",
      difficulty: 'Easy',
      hint: 'Think of the temples in Tamil Nadu.',
    },
    {
      level: 37,
      mainsubject: 'Culture & Society',
      question:
        "Who is the author of the ancient Indian treatise on statecraft, economic policy, and military strategy, the 'Arthashastra'?",
      options: ['Kalidasa', 'Panini', 'Patanjali', 'Kautilya (Chanakya)'],
      correctAnswer: 4,
      explanation:
        "The Arthashastra is attributed to Kautilya, also known as Chanakya or Vishnugupta, who was the chief advisor to the Mauryan emperor Chandragupta Maurya. This Sanskrit text is a comprehensive manual on how to run a state, covering topics from law and administration to espionage and warfare. Panini wrote the 'Ashtadhyayi', a seminal work on Sanskrit grammar, and Patanjali is credited with the 'Yoga Sutras'.",
      difficulty: 'Easy',
      hint: 'He was the advisor to Chandragupta Maurya.',
    },
    {
      level: 38,
      mainsubject: 'Culture & Society',
      question: "The state emblem of Karnataka, the 'Gandaberunda', is a:",
      options: [
        "A mythical lion with an elephant's trunk",
        'A two-headed mythical bird possessing immense strength',
        'A celestial horse with wings',
        'A divine bull associated with Lord Shiva',
      ],
      correctAnswer: 2,
      explanation:
        'The Gandaberunda is a mythical two-headed bird, imagined to have magical strength. It was the royal insignia of the Wodeyar dynasty of Mysore and was later adopted as the official emblem of the state of Karnataka. It can be seen in various temples and historical structures in Karnataka, notably as a sculpture in the Chennakesava temple at Belur.',
      difficulty: 'Medium',
      hint: 'This emblem was used by the Mysore Maharajas.',
    },
    {
      level: 39,
      mainsubject: 'Culture & Society',
      question:
        "What does the term 'Reservation' in the Indian context refer to?",
      options: [
        'The process of booking tickets for travel.',
        'A form of affirmative action where a percentage of seats are reserved for marginalized communities.',
        'Land set aside for environmental conservation.',
        'The power of the President to withhold assent to a bill.',
      ],
      correctAnswer: 2,
      explanation:
        "In the Indian context, 'Reservation' is a policy of affirmative action. It involves reserving a certain percentage of seats in government jobs, educational institutions, and legislatures for historically disadvantaged and under-represented communities, primarily the Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs). This is enabled by provisions like Articles 15(4) and 16(4) of the Constitution.",
      difficulty: 'Easy',
      hint: 'It is a form of affirmative action for SC, ST, and OBC communities.',
    },
    {
      level: 40,
      mainsubject: 'Culture & Society',
      question:
        'Gol Gumbaz in Vijayapura (Bijapur), Karnataka, is famous for which architectural feature?',
      options: [
        'Its intricate latticework (jali) screens',
        "Being the world's largest monolithic statue",
        "Its massive central dome and 'whispering gallery'",
        'Its construction from pure white marble',
      ],
      correctAnswer: 3,
      explanation:
        "Gol Gumbaz is the mausoleum of Mohammed Adil Shah and is renowned for its colossal dome, which is one of the largest unsupported domes in the world. Its most fascinating feature is the 'whispering gallery', an acoustic marvel where even the softest sound can be heard across the opposite side of the dome. It is a prime example of Deccan Indo-Islamic architecture.",
      difficulty: 'Easy',
      hint: "Its name literally means 'circular dome'.",
    },
    {
      level: 41,
      mainsubject: 'Culture & Society',
      question:
        "'Sufism' is primarily associated with which aspect of religion?",
      options: [
        'The ritualistic aspect of Jainism',
        'The mystical and ascetic dimension of Islam',
        'A reform movement within Christianity',
        'The philosophical school of Vedanta in Hinduism',
      ],
      correctAnswer: 2,
      explanation:
        'Sufism, or Tasawwuf, is the mystical dimension of Islam. Sufis seek to find the truth of divine love and knowledge through direct personal experience of God. It involves practices like meditation (dhikr), music (qawwali), and veneration of saints. It played a significant role in the social and cultural life of medieval India, promoting ideals of love, peace, and harmony.',
      difficulty: 'Medium',
      hint: 'Think of musical forms like Qawwali and saints like Moinuddin Chishti.',
    },
    {
      level: 42,
      mainsubject: 'Culture & Society',
      question:
        "The 'Panchatantra', a collection of ancient Indian animal fables, was written by whom?",
      options: ['Vishnu Sharma', 'Valmiki', 'Tulsidas', 'Vyasa'],
      correctAnswer: 1,
      explanation:
        "The Panchatantra is an ancient Sanskrit collection of interrelated animal fables arranged within a frame story. It is attributed to Vishnu Sharma. The fables are meant to impart 'niti' or the wise conduct of life and statecraft. Vyasa is traditionally credited with composing the Mahabharata, Valmiki with the Ramayana, and Tulsidas with the Ramcharitmanas.",
      difficulty: 'Easy',
      hint: 'The stories were originally meant to teach principles of statecraft to princes.',
    },
    {
      level: 43,
      mainsubject: 'Culture & Society',
      question:
        'Consider the following statements:\n1. The Virupaksha Temple at Hampi is dedicated to a form of Lord Vishnu.\n2. The temple was built during the Hoysala period.\nWhich of the statement(s) is/are correct?',
      options: ['Only 1', 'Only 2', 'Both 1 and 2', 'Neither 1 nor 2'],
      correctAnswer: 4,
      explanation:
        'Both statements are incorrect. The Virupaksha Temple is dedicated to Lord Virupaksha, a form of Lord Shiva, not Vishnu. While parts of the temple predate the Vijayanagara Empire, it was significantly expanded and became the main center of pilgrimage at Hampi during the Vijayanagara rule, not the Hoysala period. It is one of the few temples at Hampi that is still in continuous use for worship.',
      difficulty: 'Hard',
      hint: 'The deity is a form of Shiva, and the temple is the centerpiece of the Vijayanagara capital.',
    },
    {
      level: 44,
      mainsubject: 'Culture & Society',
      question:
        "The 'Chipko Movement' in the 1970s was a significant social movement related to:",
      options: [
        "Women's empowerment and rights",
        'Anti-caste activism',
        'Environmental conservation and forest protection',
        'Land reforms for farmers',
      ],
      correctAnswer: 3,
      explanation:
        "The Chipko Movement was a non-violent social and ecological movement by rural villagers, particularly women, in the Garhwal Himalayas (now in Uttarakhand). The movement's name comes from the Hindi word 'embrace', as the villagers hugged trees to prevent them from being cut down by loggers. It was a landmark event in the history of environmentalism, led by figures like Sunderlal Bahuguna and Chandi Prasad Bhatt.",
      difficulty: 'Medium',
      hint: "The name of the movement means 'to stick' or 'to hug'.",
    },
    {
      level: 45,
      mainsubject: 'Culture & Society',
      question:
        "Who among the following was a prominent female Vachana poet (Vachanakarti) of the 12th century, known for her devotion to 'Chennamallikarjuna'?",
      options: [
        'Sule Sunkavva',
        'Gangambike',
        'Akka Mahadevi',
        'Molige Mahadevi',
      ],
      correctAnswer: 3,
      explanation:
        "Akka Mahadevi was one of the earliest and most celebrated female poets in Kannada literature and a prominent figure in the Veerashaiva Bhakti movement. She renounced worldly pleasures at a young age in her devotion to Lord Shiva, whom she addressed as 'Chennamallikarjuna' (Beautiful Lord, white as jasmine) in her Vachanas. Her poetry expresses deep spiritual longing and challenges patriarchal norms.",
      difficulty: 'Medium',
      hint: 'She considered Lord Shiva as her divine husband.',
    },
    {
      level: 46,
      mainsubject: 'Culture & Society',
      question:
        "The 'Great Indian Bustard', a critically endangered bird, is a key species protected in a sanctuary which is also a proposed UNESCO Heritage site. This indicates that UNESCO sites can be:",
      options: [
        'Only cultural sites like monuments and temples.',
        'Only natural sites like national parks and sanctuaries.',
        'Both cultural and natural sites, and sometimes a mix of both.',
        'Only sites located in capital cities.',
      ],
      correctAnswer: 3,
      explanation:
        "This question highlights the scope of UNESCO World Heritage Sites. The list is not limited to man-made structures. UNESCO recognizes three types of sites: Cultural (like Hampi, Taj Mahal), Natural (like Kaziranga National Park, Western Ghats), and Mixed (like Khangchendzonga National Park, which has both cultural and natural significance). This diversity ensures the protection of the world's most valuable heritage, both man-made and natural.",
      difficulty: 'Medium',
      hint: 'Think about sites like national parks and mountain ranges on the list.',
    },
    {
      level: 47,
      mainsubject: 'Culture & Society',
      question:
        "The concept of 'Fundamental Duties' was added to the Indian Constitution by the 42nd Amendment based on the recommendations of which committee?",
      options: [
        'Sarkaria Committee',
        'Balwant Rai Mehta Committee',
        'Swaran Singh Committee',
        'Mandal Commission',
      ],
      correctAnswer: 3,
      explanation:
        'The Swaran Singh Committee was set up in 1976 to make recommendations on constitutional amendments. Based on its report, Article 51-A, containing ten Fundamental Duties for citizens, was added to the Constitution. The 11th duty (regarding education for children) was added later by the 86th Amendment in 2002. The Balwant Rai Mehta Committee recommended the three-tier Panchayati Raj system.',
      difficulty: 'Medium',
      hint: 'This committee was set up during the Internal Emergency of 1975-77.',
    },
    {
      level: 48,
      mainsubject: 'Culture & Society',
      question:
        "The 'Charminar' in Hyderabad is a classic example of which architectural style?",
      options: [
        'Mughal Architecture',
        'Qutb Shahi Architecture',
        'Vijayanagara Architecture',
        'Colonial Architecture',
      ],
      correctAnswer: 2,
      explanation:
        'The Charminar was built in 1591 by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty. It is a quintessential example of the distinct Indo-Islamic architectural style that developed in the Deccan under this dynasty. While it shares features with Mughal architecture, it has its own unique regional characteristics.',
      difficulty: 'Medium',
      hint: 'It was built by the dynasty that founded the city of Hyderabad.',
    },
    {
      level: 49,
      mainsubject: 'Culture & Society',
      question:
        'Hindustani and Carnatic are the two main sub-genres of Indian classical music. Which of the following is a feature that primarily distinguishes Hindustani from Carnatic music?',
      options: [
        'Carnatic music is purely instrumental, while Hindustani music is purely vocal.',
        'Hindustani music has significant Persian and Arabic influences.',
        'Carnatic music uses the tabla, while Hindustani music uses the mridangam.',
        'Hindustani music has a fixed set of compositions, while Carnatic music is improvised.',
      ],
      correctAnswer: 2,
      explanation:
        'While both systems have a common origin, Hindustani music, which evolved in North India, absorbed significant influences from Persian and Arabic music traditions due to centuries of Turko-Persian rule. This is reflected in its ragas, genres (like Khayal, Ghazal), and instruments. Carnatic music, from South India, remained largely uninfluenced. Both systems have vocal and instrumental forms, and both involve improvisation. The primary percussion instrument in Hindustani is the Tabla, while in Carnatic it is the Mridangam.',
      difficulty: 'Hard',
      hint: 'Think about the historical influences on North India versus South India.',
    },
    {
      level: 50,
      mainsubject: 'Culture & Society',
      question:
        "The 'Preamble' to the Indian Constitution is based on the 'Objectives Resolution' moved in the Constituent Assembly by whom?",
      options: [
        'Dr. B.R. Ambedkar',
        'Sardar Vallabhbhai Patel',
        'Dr. Rajendra Prasad',
        'Jawaharlal Nehru',
      ],
      correctAnswer: 4,
      explanation:
        "Jawaharlal Nehru moved the historic 'Objectives Resolution' in the Constituent Assembly on December 13, 1946. This resolution laid down the fundamental principles and philosophy that should guide the framing of the Constitution. It was later modified and adopted as the Preamble of the Indian Constitution. Dr. B.R. Ambedkar was the Chairman of the Drafting Committee, and Dr. Rajendra Prasad was the President of the Constituent Assembly.",
      difficulty: 'Medium',
      hint: 'He was the first Prime Minister of India.',
    },
    {
      level: 51,
      mainsubject: 'Culture & Society',
      question: 'Which of these is NOT a Dravidian language?',
      options: ['Kannada', 'Malayalam', 'Marathi', 'Telugu'],
      correctAnswer: 3,
      explanation:
        'Marathi is an Indo-Aryan language, belonging to the same family as Hindi, Bengali, and Gujarati. Kannada, Malayalam, Telugu, and Tamil are the four major Dravidian languages, which form a distinct language family primarily spoken in Southern India. Other Dravidian languages include Tulu, Gondi, and Brahui (spoken in Pakistan).',
      difficulty: 'Easy',
      hint: 'This language is the official language of Maharashtra.',
    },
    {
      level: 52,
      mainsubject: 'Culture & Society',
      question:
        "The 'Nalanda Mahavihara' (ancient Nalanda University), a UNESCO World Heritage site, was a renowned centre of learning primarily for which religion?",
      options: ['Jainism', 'Buddhism', 'Hinduism (Vedic studies)', 'Sikhism'],
      correctAnswer: 2,
      explanation:
        'Nalanda, located in modern-day Bihar, was a celebrated Mahavihara, or a large Buddhist monastery, and a famous center for higher learning. From the 5th to the 12th century, it was a major hub for Buddhist studies, attracting scholars and students from across Asia, including the famous Chinese traveler Xuanzang. While other subjects were taught, its primary focus was Mahayana Buddhism.',
      difficulty: 'Easy',
      hint: 'The Chinese traveler Xuanzang famously studied here.',
    },
    {
      level: 53,
      mainsubject: 'Culture & Society',
      question:
        "The Karnataka government confers the 'Karnataka Ratna' award for lifetime contribution to a chosen field. Who was the first recipient of this prestigious award?",
      options: ['Dr. Rajkumar', 'Kuvempu', 'S. Nijalingappa', 'C. N. R. Rao'],
      correctAnswer: 2,
      explanation:
        'The Karnataka Ratna, the highest civilian honor of the State of Karnataka, was first awarded in 1992. The first two recipients were the national poet Kuvempu and the iconic actor Dr. Rajkumar. S. Nijalingappa, a former Chief Minister, received it in 1999, and the renowned scientist C. N. R. Rao received it in 2000.',
      difficulty: 'Hard',
      hint: 'The first award was given jointly to a poet and an actor.',
    },
    {
      level: 54,
      mainsubject: 'Culture & Society',
      question:
        "The 'Khilafat Movement' in the early 1920s was a significant social-religious movement started by Indian Muslims to:",
      options: [
        'Demand a separate state for Muslims.',
        'Protest against the Jallianwala Bagh massacre.',
        'Restore the Caliph (Khalifa) of the Ottoman Empire as the spiritual leader of all Muslims.',
        'Promote modern education among the Muslim community.',
      ],
      correctAnswer: 3,
      explanation:
        'The Khilafat Movement was launched by Indian Muslims to protest against the harsh treatment meted out to the Ottoman Empire by the Allied powers after World War I. The Ottoman Sultan was also regarded as the Caliph, the religious head of Sunni Muslims worldwide. The movement aimed to pressure the British government to preserve the authority of the Caliph. Mahatma Gandhi supported this movement as a way to forge Hindu-Muslim unity against British rule.',
      difficulty: 'Medium',
      hint: 'It was related to the status of the ruler of the Ottoman Empire after World War I.',
    },
    {
      level: 55,
      mainsubject: 'Culture & Society',
      question:
        'The Victoria Memorial in Kolkata is a prime example of which style of colonial architecture?',
      options: [
        'Gothic Revival',
        'Art Deco',
        'Indo-Saracenic Revival',
        'Neoclassical',
      ],
      correctAnswer: 3,
      explanation:
        'The Victoria Memorial is a classic example of the Indo-Saracenic Revival architectural style. This style, favored by British architects in India, blended elements of British and Mughal/Indian architecture. The Victoria Memorial combines a European-style plan with Mughal features like the large dome, chhatris (domed pavilions), and intricate jali work. It was built to commemorate Queen Victoria.',
      difficulty: 'Medium',
      hint: 'This style combines British and Indian architectural elements.',
    },
    {
      level: 56,
      mainsubject: 'Culture & Society',
      question:
        "The practice of 'Santhara' or 'Sallekhana', a religious ritual of fasting unto death, is associated with which religion?",
      options: ['Buddhism', 'Sikhism', 'Jainism', 'Zoroastrianism'],
      correctAnswer: 3,
      explanation:
        'Sallekhana (also known as Santhara) is a Jain religious vow of voluntary and systematic fasting to death. It is undertaken by ascetics and householders who feel they have fulfilled all their duties and wish to detach from the body to purify the soul. It is considered a highly spiritual act, not suicide. The practice has been a subject of legal debate in India regarding its validity under the law.',
      difficulty: 'Hard',
      hint: 'Chandragupta Maurya is said to have performed a similar ritual at Shravanabelagola.',
    },
    {
      level: 57,
      mainsubject: 'Culture & Society',
      question:
        'Which of the following sites in Karnataka is famous for its monolithic statue of Gommateshwara (Bahubali)?',
      options: ['Hampi', 'Aihole', 'Badami', 'Shravanabelagola'],
      correctAnswer: 4,
      explanation:
        'Shravanabelagola is a major pilgrimage center for Jains. It is renowned for the 57-foot-tall monolithic statue of Gommateshwara, also known as Bahubali. The statue was commissioned by the Ganga dynasty minister and commander Chavundaraya around 981 AD. The Mahamastakabhisheka ceremony, where the statue is anointed, is held once every 12 years and attracts millions of devotees.',
      difficulty: 'Easy',
      hint: 'A grand head-anointing ceremony called Mahamastakabhisheka is held here.',
    },
    {
      level: 58,
      mainsubject: 'Culture & Society',
      question:
        "The 'Beti Bachao, Beti Padhao' (Save the Girl Child, Educate the Girl Child) scheme launched by the Government of India primarily addresses which social issue?",
      options: [
        'Child labor',
        'Declining Child Sex Ratio and women empowerment',
        'Malnutrition among children',
        'Juvenile delinquency',
      ],
      correctAnswer: 2,
      explanation:
        "The 'Beti Bachao, Beti Padhao' scheme was launched in 2015 to address the issue of the declining Child Sex Ratio (CSR) in India, which is indicative of gender-biased sex selection and post-birth discrimination against girls. The scheme aims to prevent female foeticide, ensure the survival and protection of the girl child, and guarantee her education and participation.",
      difficulty: 'Easy',
      hint: 'The name of the scheme explicitly states its two main goals.',
    },
    {
      level: 59,
      mainsubject: 'Culture & Society',
      question:
        'Match the author with their famous literary work:\n(A) Kalidasa       (1) Mudrarakshasa\n(B) Vishakhadatta  (2) Abhijnanasakuntalam\n(C) Bhasa          (3) Mrichchhakatika\n(D) Shudraka       (4) Svapnavasavadattam',
      options: [
        'A-2, B-1, C-4, D-3',
        'A-3, B-4, C-1, D-2',
        'A-2, B-3, C-4, D-1',
        'A-4, B-1, C-2, D-3',
      ],
      correctAnswer: 1,
      explanation:
        "The correct matches of these famous Sanskrit playwrights and their works are:\n- (A) Kalidasa wrote the celebrated play 'Abhijnanasakuntalam'.\n- (B) Vishakhadatta is the author of 'Mudrarakshasa', a play about the politics of Chandragupta Maurya's rise to power.\n- (C) Bhasa, an early Sanskrit dramatist, wrote 'Svapnavasavadattam'.\n- (D) Shudraka is credited with writing 'Mrichchhakatika' (The Little Clay Cart).",
      difficulty: 'Hard',
      hint: "Kalidasa's work is arguably the most famous Sanskrit play.",
    },
    {
      level: 60,
      mainsubject: 'Culture & Society',
      question:
        "The 'Vesara' style of temple architecture is considered a hybrid of which two styles?",
      options: [
        'Gandhara and Mathura styles',
        'Nagara and Dravida styles',
        'Mughal and Rajput styles',
        'Buddhist and Jain styles',
      ],
      correctAnswer: 2,
      explanation:
        'The Vesara style is a distinct style of temple architecture that emerged in the Deccan region, primarily under the Later Chalukyas and Hoysalas. It combines features of the North Indian Nagara style (like the curvilinear shikhara) and the South Indian Dravida style (like the tiered vimana). Temples at sites like Aihole and Pattadakal show the early evolution of this hybrid style.',
      difficulty: 'Medium',
      hint: 'This hybrid style is found predominantly in the Deccan, especially in Karnataka.',
    },
    {
      level: 61,
      mainsubject: 'Culture & Society',
      question:
        'The legal age of marriage for women and men in India is currently set at:',
      options: [
        '16 years for women, 18 years for men',
        '18 years for women, 18 years for men',
        '18 years for women, 21 years for men',
        '21 years for women, 21 years for men',
      ],
      correctAnswer: 3,
      explanation:
        'As per the Prohibition of Child Marriage Act, 2006, the minimum legal age for marriage is 18 years for females and 21 years for males. A marriage where either the bride or groom is below this age is considered a child marriage and is illegal. There have been recent proposals and discussions to raise the minimum age for women to 21 to ensure gender parity.',
      difficulty: 'Easy',
      hint: 'The age is different for men and women.',
    },
    {
      level: 62,
      mainsubject: 'Culture & Society',
      question:
        "Which ancient Indian physician is known as the 'Father of Surgery' and authored the 'Sushruta Samhita', a foundational text on surgery and medicine?",
      options: ['Charaka', 'Dhanvantari', 'Patanjali', 'Sushruta'],
      correctAnswer: 4,
      explanation:
        "Sushruta, who lived around the 6th century BCE, is revered as the 'Father of Surgery'. His work, the 'Sushruta Samhita', describes complex surgical procedures, including plastic surgery (rhinoplasty), cataract surgery, and fracture management, in remarkable detail. Charaka authored the 'Charaka Samhita', a key text on internal medicine, while Dhanvantari is the mythological Hindu god of medicine.",
      difficulty: 'Medium',
      hint: 'His name is part of the title of his famous medical text.',
    },
    {
      level: 63,
      mainsubject: 'Culture & Society',
      question:
        "Consider the following statements regarding Hoysala architecture:\n1. It exclusively used hard granite, which was difficult to carve.\n2. Temples were often built on a raised platform called 'jagati'.\n3. The temple walls were typically kept plain and unadorned.\nWhich of the above statement(s) is/are correct?",
      options: ['Only 2', 'Only 1 and 3', 'Only 2 and 3', 'All 1, 2, and 3'],
      correctAnswer: 1,
      explanation:
        "Only statement 2 is correct. Hoysala temples are characteristically built on a raised platform or 'jagati', which follows the star-shaped plan of the temple and serves as a 'pradakshinapatha' (circumambulatory path). Statement 1 is incorrect; they used soft soapstone (chloritic schist), which enabled their famously intricate carvings. Statement 3 is also incorrect; Hoysala temple walls are known for being lavishly decorated with bands of detailed sculptures depicting gods, goddesses, and scenes from epics.",
      difficulty: 'Hard',
      hint: 'Think about the material and decorative style of Belur and Halebidu temples.',
    },
    {
      level: 64,
      mainsubject: 'Culture & Society',
      question:
        "The principle of 'equality before the law' enshrined in Article 14 of the Indian Constitution is borrowed from the constitution of which country?",
      options: ['United States of America', 'Canada', 'Britain', 'Ireland'],
      correctAnswer: 3,
      explanation:
        "Article 14 contains two concepts: 'equality before the law' and 'equal protection of the laws'. The concept of 'equality before the law' is of British origin and implies that no person is above the law. The concept of 'equal protection of the laws' is taken from the American Constitution and means that the law should be applied equally to all people in similar circumstances. The Indian Constitution incorporates both.",
      difficulty: 'Hard',
      hint: "This concept is a key feature of the 'Rule of Law' in its country of origin.",
    },
    {
      level: 65,
      mainsubject: 'Culture & Society',
      question:
        "The 'Nagamandala' is a ritualistic theatre form performed in coastal Karnataka primarily to appease whom?",
      options: [
        'The rain gods',
        'The forest spirits',
        'The serpent spirit',
        'The village deities',
      ],
      correctAnswer: 3,
      explanation:
        "Nagamandala is an elaborate, all-night ritual performed to appease the serpent spirit (Naga). It is prevalent in the coastal districts (Dakshina Kannada and Udupi) of Karnataka. The ritual involves the drawing of a large, intricate mandala on the ground and performances by two groups of priests, the 'Páтри' and the 'Vaidya', who dance and sing to invoke the spirit.",
      difficulty: 'Hard',
      hint: "The first part of the name, 'Naga', refers to a specific type of being.",
    },
    {
      level: 66,
      mainsubject: 'Culture & Society',
      question:
        'Which Constitutional Amendment Act is related to the establishment of Panchayati Raj Institutions (PRIs) in India, giving them constitutional status?',
      options: [
        '73rd Amendment Act',
        '42nd Amendment Act',
        '44th Amendment Act',
        '74th Amendment Act',
      ],
      correctAnswer: 1,
      explanation:
        "The 73rd Constitutional Amendment Act of 1992 granted constitutional status and protection to the Panchayati Raj Institutions. It added a new Part IX to the Constitution titled 'The Panchayats' and a new Eleventh Schedule containing 29 functional items for the panchayats. The 74th Amendment Act, passed at the same time, did the same for urban local bodies (Municipalities).",
      difficulty: 'Medium',
      hint: 'Its counterpart, the 74th Amendment, deals with urban local bodies.',
    },
    {
      level: 67,
      mainsubject: 'Culture & Society',
      question:
        'Who was the first woman to preside over a session of the Indian National Congress?',
      options: [
        'Sarojini Naidu',
        'Nellie Sengupta',
        'Indira Gandhi',
        'Annie Besant',
      ],
      correctAnswer: 4,
      explanation:
        "Annie Besant, an Irish socialist and women's rights activist, was the first woman to be elected as the President of the Indian National Congress. She presided over the Calcutta session in 1917. Sarojini Naidu was the first Indian woman to become the President of the INC, presiding over the Kanpur session in 1925.",
      difficulty: 'Medium',
      hint: 'She was not of Indian origin but was a key figure in the Home Rule League.',
    },
    {
      level: 68,
      mainsubject: 'Culture & Society',
      question:
        "The literary trio known as 'Ratnatraya' (Three Gems) of ancient Kannada literature were Pampa, Ponna, and who else?",
      options: ['Janna', 'Nagavarma', 'Ranna', 'Harihara'],
      correctAnswer: 3,
      explanation:
        "The 'Ratnatraya' or Three Gems of 10th-century Kannada literature are Adikavi Pampa ('Vikramarjuna Vijaya'), Ponna ('Shantipurana'), and Ranna ('Gadayuddha'). They were all Jain poets who wrote in the 'Champu' style (a mix of prose and verse) and made immense contributions to the language under the patronage of the Rashtrakuta and Western Chalukya kings.",
      difficulty: 'Medium',
      hint: "His most famous work is 'Gadayuddha' (The Duel of Maces).",
    },
    {
      level: 69,
      mainsubject: 'Culture & Society',
      question:
        "In the context of Indian classical dance, what does 'Abhinaya' refer to?",
      options: [
        'Pure dance movements with a focus on rhythm and form.',
        'The elaborate costume and makeup worn by the artist.',
        'The art of expressive acting, gestures, and facial expressions to convey a story.',
        'The musical composition that accompanies the dance.',
      ],
      correctAnswer: 3,
      explanation:
        "Abhinaya is the art of expression in Indian classical dance and drama. It is the use of facial expressions (mukhaja), hand gestures (mudras), and body movements (angika) to convey the narrative and emotions (rasa) of a story to the audience. It is contrasted with 'Nritta', which is abstract, pure dance focused on rhythm and movement without a specific narrative meaning.",
      difficulty: 'Medium',
      hint: "It is about the 'acting' and storytelling aspect of dance.",
    },
    {
      level: 70,
      mainsubject: 'Culture & Society',
      question:
        "The 'Directive Principles of State Policy' in the Indian Constitution are non-justiciable. What does this mean?",
      options: [
        'They are not legally enforceable by the courts.',
        'They are superior to Fundamental Rights.',
        'They can be amended only by a special majority.',
        'They apply only to the central government, not the states.',
      ],
      correctAnswer: 1,
      explanation:
        "'Non-justiciable' means that these principles cannot be enforced through a court of law if the government fails to implement them. Unlike Fundamental Rights, a citizen cannot go to court to demand their implementation. However, Article 37 states that these principles are 'fundamental in the governance of the country' and it shall be the duty of the State to apply these principles in making laws.",
      difficulty: 'Medium',
      hint: 'You cannot go to court if the government violates a Directive Principle.',
    },
    {
      level: 71,
      mainsubject: 'Culture & Society',
      question:
        "The famous Mysore Dasara festival culminates on the tenth day, known as 'Vijayadashami'. What is the grand finale event called that features a procession with the idol of Goddess Chamundeshwari?",
      options: [
        'Panjina Kavayatthu (Torchlight Parade)',
        'Jamboo Savari (Elephant Procession)',
        'Ayudha Puja (Worship of Implements)',
        'Vajra Mushti Kalaga (Wrestling Contest)',
      ],
      correctAnswer: 2,
      explanation:
        "The highlight of the Mysore Dasara is the 'Jamboo Savari' on Vijayadashami day. It is a grand procession of decorated elephants, horses, and cultural troupes that winds its way through the streets of Mysore. The main attraction is the lead elephant carrying the idol of Goddess Chamundeshwari in a golden howdah weighing over 750 kg. The 'Panjina Kavayatthu' takes place in the evening after the procession.",
      difficulty: 'Easy',
      hint: 'The name of the event involves elephants.',
    },
    {
      level: 72,
      mainsubject: 'Culture & Society',
      question:
        'Which of the following UNESCO World Heritage sites is known for its prehistoric rock shelters and paintings dating back to the Paleolithic and Mesolithic ages?',
      options: [
        'Elephanta Caves',
        'Ajanta Caves',
        'Rock Shelters of Bhimbetka',
        'Ellora Caves',
      ],
      correctAnswer: 3,
      explanation:
        'The Rock Shelters of Bhimbetka, located in Madhya Pradesh, contain the earliest traces of human life in India. The caves and rock shelters feature paintings that are approximately 30,000 years old, depicting scenes of hunting, dancing, and daily life from the Stone Age to the historic period. Ajanta, Ellora, and Elephanta are also rock-cut cave sites but are from much later historical periods and are associated with Buddhism, Hinduism, and Jainism.',
      difficulty: 'Medium',
      hint: 'This site provides a glimpse into the life of Stone Age humans in India.',
    },
    {
      level: 73,
      mainsubject: 'Culture & Society',
      question:
        "The 'Self-Respect Movement' was a major social movement in South India that challenged the Brahminical social order and promoted rationalism. Who was its founder?",
      options: [
        'C. N. Annadurai',
        'E. V. Ramasamy (Periyar)',
        'C. Rajagopalachari',
        'K. Kamaraj',
      ],
      correctAnswer: 2,
      explanation:
        "E. V. Ramasamy, respectfully known as 'Periyar', was a Dravidian social reformer who founded the Self-Respect Movement in 1925 in Tamil Nadu. The movement aimed to create a society where backward castes had equal human rights and to encourage them to have self-respect in a caste-based society. It advocated for rationalism, women's rights, and the rejection of caste-based rituals and hierarchy.",
      difficulty: 'Hard',
      hint: "He is famously known as 'Periyar'.",
    },
    {
      level: 74,
      mainsubject: 'Culture & Society',
      question: "The 'Vimana' in a Dravidian style temple refers to:",
      options: [
        'The main entrance gateway.',
        'The assembly hall for devotees.',
        'The tower built over the Garbhagriha (sanctum sanctorum).',
        'The water tank or reservoir of the temple.',
      ],
      correctAnswer: 3,
      explanation:
        "In Dravidian architecture, the 'Vimana' is the tower structure that rises above the Garbhagriha. It is typically pyramidal in shape, consisting of stepped tiers that diminish in size as they ascend. This is different from the North Indian 'Shikhara', which is more curvilinear. The entrance gateway is the 'Gopuram', and the assembly hall is the 'Mandapa'.",
      difficulty: 'Medium',
      hint: "It is the equivalent of the 'Shikhara' in North Indian temples.",
    },
    {
      level: 75,
      mainsubject: 'Culture & Society',
      question:
        "The 'Ashtadiggajas' (Eight Elephants) were a collective of eight renowned Telugu poets in the court of which famous emperor?",
      options: [
        'Chandragupta Maurya',
        'Akbar',
        'Samudragupta',
        'Krishnadevaraya',
      ],
      correctAnswer: 4,
      explanation:
        "The 'Ashtadiggajas' were eight eminent Telugu poets who adorned the court of the Vijayanagara Emperor Krishnadevaraya. This period is considered the golden age of Telugu literature. The most famous among them was Allasani Peddana. This is distinct from the 'Navaratnas' (Nine Gems) who were in the court of Chandragupta II Vikramaditya.",
      difficulty: 'Medium',
      hint: 'He was the most powerful ruler of the Vijayanagara Empire.',
    },
    {
      level: 76,
      mainsubject: 'Culture & Society',
      question:
        'Consider the following statements regarding the Right to Information (RTI) Act, 2005:\n1. It applies to all private companies as well as public authorities.\n2. It provides a legal framework for citizens to obtain information under the control of public authorities.\nWhich of the statement(s) is/are correct?',
      options: ['Only 1', 'Only 2', 'Both 1 and 2', 'Neither 1 nor 2'],
      correctAnswer: 2,
      explanation:
        "Statement 2 is correct. The RTI Act, 2005, empowers Indian citizens to seek information from a 'public authority' (a body of Government or 'instrumentality of State'), promoting transparency and accountability. Statement 1 is incorrect. The Act does not directly apply to private bodies, although information about private entities that is held by a public authority can be sought.",
      difficulty: 'Medium',
      hint: 'The Act is designed to promote transparency in government bodies.',
    },
    {
      level: 77,
      mainsubject: 'Culture & Society',
      question:
        "The 'Iron Pillar of Delhi', located in the Qutub Minar complex, is famous for its high resistance to rust. It is believed to have been erected in honour of which king?",
      options: ['Ashoka', 'Chandragupta II', 'Samudragupta', 'Harshavardhana'],
      correctAnswer: 2,
      explanation:
        "The Iron Pillar of Delhi, a testament to ancient Indian metallurgical skill, has a Sanskrit inscription in Brahmi script. The inscription identifies a powerful king named 'Chandra', who is generally identified by historians as the Gupta Emperor Chandragupta II Vikramaditya. The pillar was originally erected at a different location (likely Udayagiri in Madhya Pradesh) and was moved to its current location in Delhi much later.",
      difficulty: 'Hard',
      hint: "He was a great Gupta emperor who also had 'Vikramaditya' as a title.",
    },
    {
      level: 78,
      mainsubject: 'Culture & Society',
      question:
        "The practice of 'Jauhar', witnessed in medieval Rajput kingdoms, was:",
      options: [
        'A ceremony to crown a new king.',
        'A form of ritual combat to settle disputes.',
        'The mass self-immolation of women to avoid capture and dishonour by enemy forces.',
        'A special tax levied on non-Muslim subjects.',
      ],
      correctAnswer: 3,
      explanation:
        "Jauhar was the practice of mass self-immolation by women in parts of the Indian subcontinent, most notably among Rajput kingdoms, to avoid capture, enslavement, and rape by invading armies when facing certain defeat. It was typically followed by the men committing 'Saka' - fighting to the death. The most famous accounts of Jauhar are from the sieges of Chittorgarh.",
      difficulty: 'Medium',
      hint: 'It was a practice to avoid dishonor in the face of military defeat.',
    },
    {
      level: 79,
      mainsubject: 'Culture & Society',
      question: "The 'Nada Habba' (state festival) of Karnataka is:",
      options: [
        'Ugadi',
        'Makar Sankranti',
        'Mysore Dasara',
        'Kannada Rajyotsava',
      ],
      correctAnswer: 3,
      explanation:
        "Mysore Dasara (Navaratri) is celebrated as the 'Nada Habba' or state festival of Karnataka. It is a 10-day festival with a rich history of over 400 years, originally started by the Vijayanagara kings. While Ugadi is the new year and Kannada Rajyotsava is the state formation day, Dasara holds the official designation of the state festival.",
      difficulty: 'Easy',
      hint: 'It is famously celebrated in the city of Mysore.',
    },
    {
      level: 80,
      mainsubject: 'Culture & Society',
      question:
        'Which of the following dramas was NOT written by the famous Sanskrit playwright Kalidasa?',
      options: [
        'Abhijnanasakuntalam',
        'Malavikagnimitram',
        'Vikramorvasiyam',
        'Uttararamacharita',
      ],
      correctAnswer: 4,
      explanation:
        "'Uttararamacharita' was written by Bhavabhuti, another major Sanskrit playwright who lived in the 8th century CE. The other three—'Abhijnanasakuntalam', 'Malavikagnimitram', and 'Vikramorvasiyam'—are the three famous plays written by Kalidasa. He also wrote epic poems like 'Raghuvamsha' and 'Kumarasambhava'.",
      difficulty: 'Hard',
      hint: 'The author of this play is Bhavabhuti.',
    },
    {
      level: 81,
      mainsubject: 'Culture & Society',
      question:
        "The 'Silent Valley Movement' in Kerala in the 1970s and 80s was a social movement aimed at:",
      options: [
        'Protecting a tropical evergreen forest from being submerged by a hydroelectric project.',
        'Demanding land rights for tribal communities.',
        'Protesting against noise pollution in urban areas.',
        'Advocating for the use of sign language for the hearing impaired.',
      ],
      correctAnswer: 1,
      explanation:
        "The Silent Valley Movement was a successful environmental struggle to protect the Silent Valley, an area of rich biodiversity and pristine tropical evergreen forest in Kerala. The protest was against the state government's plan to build a hydroelectric dam on the Kunthipuzha river, which would have flooded a large portion of the valley. The campaign led to the project being scrapped and the area being declared as a National Park in 1984.",
      difficulty: 'Medium',
      hint: "The movement's goal was to save a forest from a dam project.",
    },
    {
      level: 82,
      mainsubject: 'Culture & Society',
      question:
        'In the context of Indian philosophy, which of the following is NOT one of the six orthodox schools (astika) of Hinduism?',
      options: ['Nyaya', 'Samkhya', 'Lokayata (Charvaka)', 'Vaisheshika'],
      correctAnswer: 3,
      explanation:
        'The six orthodox (astika) schools of Hindu philosophy, which accept the authority of the Vedas, are Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, and Vedanta. The Lokayata school, also known as Charvaka, is a heterodox (nastika) school. It is characterized by its philosophical skepticism and materialism, rejecting concepts like reincarnation, soul, and deities.',
      difficulty: 'Hard',
      hint: 'This school is known for its materialist philosophy.',
    },
    {
      level: 83,
      mainsubject: 'Culture & Society',
      question:
        'The colonial architectural style that features large verandas, high ceilings, and sloping roofs, designed for ventilation in a tropical climate, is often called the:',
      options: [
        'Gothic style',
        'Bungalow style',
        'Art Deco style',
        'Indo-Saracenic style',
      ],
      correctAnswer: 2,
      explanation:
        "The Bungalow style originated in Bengal and was adapted and popularized by the British across India. The word 'bungalow' itself derives from 'bangla', meaning 'of Bengal'. These single-story houses with their characteristic verandas and large, airy rooms were perfectly suited for the Indian climate and became a defining feature of colonial residential architecture in cantonments and civil lines.",
      difficulty: 'Medium',
      hint: "The name of the style comes from a word meaning 'of Bengal'.",
    },
    {
      level: 84,
      mainsubject: 'Culture & Society',
      question:
        "What is the primary difference between the 'Shaiva' and 'Vaishnava' traditions within Hinduism?",
      options: [
        'Their geographical origin, with one from the North and the other from the South.',
        'The principal deity they worship.',
        'Their sacred texts, with one following the Vedas and the other the Puranas.',
        'Their social structure, with one being caste-based and the other casteless.',
      ],
      correctAnswer: 2,
      explanation:
        'The fundamental difference lies in the principal deity. Shaivism centers on the worship of Lord Shiva as the supreme being, while Vaishnavism focuses on Lord Vishnu (and his avatars like Rama and Krishna) as the supreme being. Both traditions are pan-Indian, accept the authority of the Vedas and Puranas, and generally operate within the broader Hindu social structure. Shaktism, which focuses on the Goddess (Devi), is another major tradition.',
      difficulty: 'Easy',
      hint: 'The names themselves provide a clue to the deity.',
    },
    {
      level: 85,
      mainsubject: 'Culture & Society',
      question:
        'Masti Venkatesha Iyengar, a celebrated Kannada writer and Jnanpith awardee, wrote under the pen name:',
      options: ['Ambikatanayadatta', 'Kuvempu', 'Tejaswi', 'Srinivasa'],
      correctAnswer: 4,
      explanation:
        "Masti Venkatesha Iyengar, often referred to as 'Masti Kannadada Aasti' (Masti is Karnataka's Treasure), used the pen name 'Srinivasa'. He was the fourth Kannada writer to be honored with the Jnanpith Award (1983). He is particularly acclaimed for his short stories. 'Tejaswi' was the pen name of Poornachandra Tejaswi, son of Kuvempu.",
      difficulty: 'Hard',
      hint: 'His pen name is a popular name for Lord Vishnu.',
    },
    {
      level: 86,
      mainsubject: 'Culture & Society',
      question:
        "The 'Nirbhaya Fund' was established by the Government of India for what purpose?",
      options: [
        'To provide scholarships for underprivileged girls.',
        'To fund infrastructure projects in rural areas.',
        'To implement initiatives aimed at enhancing the safety and security of women.',
        'To provide financial aid to victims of natural disasters.',
      ],
      correctAnswer: 3,
      explanation:
        'The Nirbhaya Fund was announced in the 2013 Union Budget following the nationwide outrage over the 2012 Delhi gang rape case. It is a dedicated fund for projects specifically designed to improve the safety and security of women in India. Various ministries and state governments can propose and receive funding for schemes under this framework, such as setting up one-stop centers for women, helpline numbers, and improving street lighting.',
      difficulty: 'Medium',
      hint: 'The fund is named after the pseudonym given to the victim of the 2012 Delhi gang rape case.',
    },
    {
      level: 87,
      mainsubject: 'Culture & Society',
      question:
        "The 'Therigatha', a collection of poems, is a unique ancient text because it was authored by:",
      options: [
        'Early Buddhist nuns',
        'Gupta-era court poets',
        'Sufi saints of the Delhi Sultanate',
        'Vachana poets of Karnataka',
      ],
      correctAnswer: 1,
      explanation:
        "The 'Therigatha' (Verses of the Elder Nuns) is a collection of short poems within the Pali Canon of Buddhism. It is significant as it contains verses attributed to the earliest Buddhist nuns, recounting their struggles and spiritual awakenings. It is one of the earliest known collections of women's literature in the world and provides a rare insight into their experiences.",
      difficulty: 'Very Hard',
      hint: "The name translates to 'Verses of the Elder Nuns'.",
    },
    {
      level: 88,
      mainsubject: 'Culture & Society',
      question:
        'In the context of Indo-Islamic architecture, the technique of using arches and domes on a large scale, which was not prominent in pre-Sultanate Indian architecture, is known as the:',
      options: [
        'Trabeate style',
        'Arcuate style',
        'Stellate style',
        'Panchayatana style',
      ],
      correctAnswer: 2,
      explanation:
        'The Arcuate style is an architectural method that uses arches, domes, and vaults to create spaces. This was a key feature introduced and popularized by the Delhi Sultanate and the Mughals. It contrasts with the indigenous Indian Trabeate style, which relied on pillars and beams (lintels) to support roofs. The Panchayatana is a style of Hindu temple layout, and Stellate refers to the star-shaped plans of Hoysala temples.',
      difficulty: 'Hard',
      hint: 'This style is based on the use of arches.',
    },
    {
      level: 89,
      mainsubject: 'Culture & Society',
      question:
        "Which social reformer is credited with the 'Temple Entry Movement' in Travancore, which culminated in the Temple Entry Proclamation of 1936 allowing lower castes to enter Hindu temples?",
      options: [
        'Sree Narayana Guru',
        'Ayyankali',
        'Chattampi Swamikal',
        'T. K. Madhavan',
      ],
      correctAnswer: 4,
      explanation:
        'While Sree Narayana Guru and Ayyankali were monumental figures in fighting caste discrimination in Kerala, it was T. K. Madhavan who was the primary leader of the Vaikom Satyagraha (1924-25), a pivotal struggle for the right of lower castes to use roads near temples. This movement laid the groundwork and created the political pressure that eventually led to the historic Temple Entry Proclamation issued by the Maharaja of Travancore, Chithira Thirunal Balarama Varma.',
      difficulty: 'Very Hard',
      hint: 'He was the main organizer of the Vaikom Satyagraha.',
    },
    {
      level: 90,
      mainsubject: 'Culture & Society',
      question:
        "The 'Kailasa Temple' at Ellora (Cave 16) is an architectural marvel because it is:",
      options: [
        'Constructed entirely of imported white marble.',
        'The tallest temple structure in ancient India.',
        'A monolithic structure, carved top-down from a single massive rock.',
        'Built underground, with several subterranean levels.',
      ],
      correctAnswer: 3,
      explanation:
        "The Kailasa Temple is the world's largest monolithic structure. Unlike other temples which are built by assembling stones from the bottom up, the Kailasa temple was created by carving it out of a single, solid basalt rock cliff. The sculptors started from the top of the rock and excavated downwards, chiseling out the courtyards, halls, pillars, and shrines. It was built during the reign of the Rashtrakuta king Krishna I in the 8th century.",
      difficulty: 'Hard',
      hint: "It wasn't built, it was excavated from a single piece of rock.",
    },
    {
      level: 91,
      mainsubject: 'Culture & Society',
      question:
        "The concept of 'creamy layer' in the context of reservation in India refers to:",
      options: [
        'A special quota reserved for the economically weakest sections.',
        'The exclusion of the more affluent members of a backward class from the benefits of reservation.',
        'The uppermost tier of the caste hierarchy.',
        'A category of government jobs with higher pay scales.',
      ],
      correctAnswer: 2,
      explanation:
        "The term 'creamy layer' was introduced by the Supreme Court in the Indra Sawhney & Others v. Union of India case (1992). It refers to the principle that the benefits of reservation, particularly for Other Backward Classes (OBCs), should not be extended to the socially and economically advanced members of that class. The government sets specific income and status criteria to identify the 'creamy layer' who are then excluded from reservation quotas, ensuring that the benefits reach the most deserving.",
      difficulty: 'Hard',
      hint: 'This principle aims to ensure that reservation benefits go to the truly disadvantaged within a caste group.',
    },
    {
      level: 92,
      mainsubject: 'Culture & Society',
      question:
        "The 'Koodiyattam' of Kerala, recognized by UNESCO as a Masterpiece of the Oral and Intangible Heritage of Humanity, is a form of:",
      options: [
        'Martial art',
        'Ritualistic folk dance',
        'Traditional Sanskrit theatre',
        'Mural painting',
      ],
      correctAnswer: 3,
      explanation:
        "Koodiyattam is a traditional form of Sanskrit theatre from Kerala. It has a history of over 2000 years, making it one of the oldest living theatrical traditions in the world. It is known for its highly stylized acting, detailed gestures (mudras), and elaborate costumes. It was the first Indian art form to be recognized by UNESCO in the 'Intangible Heritage' category, even before the list was formally established.",
      difficulty: 'Very Hard',
      hint: 'It is considered the oldest living form of theatre in India.',
    },
    {
      level: 93,
      mainsubject: 'Culture & Society',
      question:
        'Consider the following pairs:\n1. Da Ra Bendre    : Naku Tanti\n2. Shivaram Karanth : Mookajjiya Kanasugalu\n3. U.R. Ananthamurthy: Chikaveera Rajendra\nWhich of the above pairs (Jnanpith Award winner and their award-winning work) is/are correctly matched?',
      options: ['1 and 2 only', '2 and 3 only', '1 only', 'All 1, 2 and 3'],
      correctAnswer: 1,
      explanation:
        "Pairs 1 and 2 are correctly matched. Da Ra Bendre won the Jnanpith for his poetry collection 'Naku Tanti'. Kota Shivaram Karanth won it for his novel 'Mookajjiya Kanasugalu'. Pair 3 is incorrect. U.R. Ananthamurthy received the Jnanpith for his overall contribution to literature, not for a single work (though 'Samskara' is his most famous novel). The novel 'Chikaveera Rajendra' was written by Masti Venkatesha Iyengar, who also won the Jnanpith for his overall contribution.",
      difficulty: 'Very Hard',
      hint: 'Some Jnanpith awards are for a specific work, while others are for lifetime contribution.',
    },
    {
      level: 94,
      mainsubject: 'Culture & Society',
      question:
        "The 'Srivilliputhur Megamalai Tiger Reserve', a recently designated UNESCO heritage candidate, highlights the cultural significance of the Grizzled Giant Squirrel. This demonstrates that UNESCO recognition criteria can include:",
      options: [
        'Only man-made architectural wonders.',
        'The relationship between human culture and its natural environment.',
        'Only sites of major historical battles.',
        'Only places mentioned in ancient religious texts.',
      ],
      correctAnswer: 2,
      explanation:
        "This question illustrates a deeper aspect of UNESCO's criteria. While monumental sites are common, UNESCO also recognizes 'cultural landscapes'. These are areas that represent the 'combined works of nature and of man'. The Srivilliputhur reserve is not just about the tiger; its heritage value is tied to the unique ecosystem (home to the Grizzled Giant Squirrel) and the long-standing relationship of local communities with this environment. This shows an integrated view of cultural and natural heritage.",
      difficulty: 'Very Hard',
      hint: 'UNESCO often considers how nature has shaped culture and vice-versa.',
    },
    {
      level: 95,
      mainsubject: 'Culture & Society',
      question:
        "Article 25 of the Indian Constitution guarantees freedom of religion. However, it allows the state to regulate or restrict any 'economic, financial, political or other secular activity associated with religious practice'. What does this clause signify?",
      options: [
        'The state can ban any religion it deems unsuitable.',
        'Religious practices are completely immune from state intervention.',
        'The right to freedom of religion is absolute and cannot be restricted.',
        'The state can intervene in the secular aspects of religious practices for social welfare and reform.',
      ],
      correctAnswer: 4,
      explanation:
        'This clause represents a crucial balance in Indian secularism. While citizens have the right to practice their religion, this right is not absolute. The state retains the power to intervene in matters that, while associated with religion, are fundamentally secular in nature. This allows the government to make laws for social reform, such as temple entry for all castes, abolishing practices like Sati, or regulating the administration of religious properties, without violating the core freedom of religion.',
      difficulty: 'Very Hard',
      hint: "It reflects the balance between religious freedom and the state's power for social reform.",
    },
    {
      level: 96,
      mainsubject: 'Culture & Society',
      question:
        "The 'Halmidi inscription' is of great significance to the history of Karnataka. Why?",
      options: [
        'It is the oldest known inscription in the Kannada language.',
        'It describes the victory of Pulakeshin II over Harshavardhana.',
        'It is the first edict issued by the Hoysala dynasty.',
        'It records the donation of land by Basavanna.',
      ],
      correctAnswer: 1,
      explanation:
        'The Halmidi inscription, discovered in Halmidi village near Hassan, is widely considered the earliest known full-length inscription in the Kannada language and script. Dated to 450 CE, it is written in Purvada-halegannada (pre-old Kannada). It records a land grant to a warrior and provides crucial evidence for the antiquity and development of the Kannada language. The victory of Pulakeshin II is described in the Aihole inscription.',
      difficulty: 'Very Hard',
      hint: "It is related to the antiquity of the state's official language.",
    },
    {
      level: 97,
      mainsubject: 'Culture & Society',
      question:
        "The 'Shah Bano Begum case' (1985) was a landmark legal case in India that brought which social and legal issue to the forefront?",
      options: [
        'The legality of child marriage.',
        'The right to property for women.',
        'The issue of maintenance for a divorced Muslim woman.',
        'The validity of triple talaq.',
      ],
      correctAnswer: 3,
      explanation:
        "In the Mohd. Ahmed Khan v. Shah Bano Begum case, the Supreme Court ruled in favor of Shah Bano, a divorced Muslim woman, granting her the right to alimony (maintenance) from her husband under Section 125 of the Criminal Procedure Code. The judgment sparked a major political controversy and debates about the uniformity of civil law versus religious personal laws. In response, the government passed the Muslim Women (Protection of Rights on Divorce) Act, 1986, which diluted the Supreme Court's judgment.",
      difficulty: 'Hard',
      hint: 'The case dealt with alimony for a divorced woman and led to a major political controversy.',
    },
    {
      level: 98,
      mainsubject: 'Culture & Society',
      question:
        "The ancient university of Taxila (Takshashila), though not a UNESCO site in India (it's in Pakistan), was a famous centre of learning. Who among these historical figures is NOT typically associated with having studied or taught there?",
      options: [
        'Panini (the grammarian)',
        'Chanakya (Kautilya)',
        'Charaka (the physician)',
        'Aryabhata (the astronomer)',
      ],
      correctAnswer: 4,
      explanation:
        "Panini, Chanakya, and Charaka are all traditionally associated with Taxila, which was a renowned hub for higher education in ancient India. However, Aryabhata, the great astronomer and mathematician of the Gupta period (5th century CE), is associated with Pataliputra (modern Patna) and is believed to have been the head of the university at Nalanda, which was flourishing during his time. Taxila's prominence had declined by the Gupta era.",
      difficulty: 'Very Hard',
      hint: 'This person is more closely associated with the Gupta period and Nalanda University.',
    },
    {
      level: 99,
      mainsubject: 'Culture & Society',
      question:
        "What is the 'Panchayatana' style in the context of Indian temple architecture?",
      options: [
        'A temple with five towering gopurams.',
        'A hybrid architectural style with features from five different regions.',
        'A temple layout where the main shrine is surrounded by four subsidiary shrines.',
        'A five-storied vimana over the main sanctum.',
      ],
      correctAnswer: 3,
      explanation:
        "The Panchayatana layout is a common design in Hindu temple architecture where the main central shrine is surrounded by four smaller, subsidiary shrines at the corners of a square or rectangular plinth, making a total of five shrines. 'Pancha' means five. This layout is found in many Nagara style temples, such as the Kandariya Mahadeva Temple at Khajuraho and the Dashavatara temple at Deogarh.",
      difficulty: 'Hard',
      hint: "The name of the style literally means 'five shrines'.",
    },
    {
      level: 100,
      mainsubject: 'Culture & Society',
      question:
        "The 'POSH Act' (Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013) was enacted based on guidelines laid down by the Supreme Court in which landmark case?",
      options: [
        'Maneka Gandhi v. Union of India',
        'Vishaka v. State of Rajasthan',
        'Kesavananda Bharati v. State of Kerala',
        'Indra Sawhney v. Union of India',
      ],
      correctAnswer: 2,
      explanation:
        "The POSH Act is based on the 'Vishaka Guidelines' which were laid down by the Supreme Court of India in the 1997 case of Vishaka and others v. State of Rajasthan. The case was brought by women's rights groups following the gang rape of a social worker, Bhanwari Devi. In its judgment, the court provided a set of guidelines to deal with sexual harassment at the workplace, which remained in force until the Parliament enacted the POSH Act in 2013, giving them legislative backing.",
      difficulty: 'Hard',
      hint: "The case is named after the lead petitioner, a women's rights group.",
    },
    {
      level: 101,
      mainsubject: 'Culture & Society',
      question:
        "The 'Apatani' cultural landscape in Arunachal Pradesh is on UNESCO's tentative list. What is its most unique feature that blends culture and ecology?",
      options: [
        'Building houses on stilts over water bodies.',
        'An intricate valley-wide system of integrated rice and fish farming.',
        'A matrilineal society where property passes through the female line.',
        'The practice of sky burials for the deceased.',
      ],
      correctAnswer: 2,
      explanation:
        'The Apatani people have developed a highly efficient and sustainable agro-ecosystem in the Ziro valley. They practice a unique form of integrated farming where they cultivate rice and raise fish simultaneously in the same wet paddy fields. This system, combined with their intricate water management networks and traditional forest conservation practices, represents a remarkable example of a harmonious relationship between a community and its environment, making it a strong candidate for a UNESCO Cultural Landscape designation.',
      difficulty: 'Very Hard',
      hint: "It's a unique agricultural practice involving two different types of food in the same field.",
    },
    {
      level: 102,
      mainsubject: 'Culture & Society',
      question:
        "The concept of 'Basic Structure' of the Constitution, which holds that certain fundamental features cannot be amended by Parliament, was laid down by the Supreme Court in which case?",
      options: [
        'Golaknath v. State of Punjab',
        'A.K. Gopalan v. State of Madras',
        'S.R. Bommai v. Union of India',
        'Kesavananda Bharati v. State of Kerala',
      ],
      correctAnswer: 4,
      explanation:
        "The 'Basic Structure Doctrine' is a landmark judicial principle that was established by the Supreme Court in the historic Kesavananda Bharati case of 1973. The Court held that while Parliament has the power to amend any part of the Constitution, it cannot alter or destroy its 'basic structure' or fundamental features. These features include supremacy of the Constitution, secular character, federalism, separation of powers, and judicial review, among others. This doctrine serves as a check on the amending power of the Parliament.",
      difficulty: 'Hard',
      hint: 'This is often considered the most important judgment in the history of the Indian Supreme Court.',
    },
        {
      "level": 103,
      "mainsubject": "Culture & Society",
      "question": "Which classical dance form originated in Kerala?",
      "options": [
        "Bharatanatyam",
        "Kathakali",
        "Odissi",
        "Kuchipudi"
      ],
      "correctAnswer": 2,
      "explanation": "Kathakali is a classical dance form that originated in Kerala, known for its elaborate costumes, facial makeup, and strong facial expressions. It combines dance, drama, and music with themes from Hindu epics like Ramayana and Mahabharata. Kerala also has another classical dance form called Mohiniyattam, known for its graceful, feminine movements.",
      "difficulty": "Easy",
      "hint": "Think about the southern state known for backwaters"
    },
    {
      "level": 104,
      "mainsubject": "Culture & Society",
      "question": "Who was the pioneer of the Vachana movement in Karnataka?",
      "options": [
        "Kuvempu",
        "Basavanna",
        "Bendre",
        "Pampa"
      ],
      "correctAnswer": 2,
      "explanation": "Basavanna (12th century) was the central figure and pioneer of the Veerashaiva movement and Vachana literature. He was a social reformer who questioned orthodox religious practices and promoted equality. The Vachana movement was a socio-religious reform movement that used simple Kannada poetry to criticize social inequalities and promote inclusive spirituality. Other prominent Vachana poets included Allama Prabhu and Akka Mahadevi.",
      "difficulty": "Medium",
      "hint": "He was a 12th-century social reformer and philosopher"
    },
    {
      "level": 105,
      "mainsubject": "Culture & Society",
      "question": "Which UNESCO World Heritage site in Karnataka represents the Hoysala architectural style?",
      "options": [
        "Hampi",
        "Pattadakal",
        "Belur-Halebidu",
        "Aihole"
      ],
      "correctAnswer": 3,
      "explanation": "The Hoysala temples of Belur, Halebidu, and Somanathapura were inscribed as UNESCO World Heritage Sites in 2023. These temples showcase the pinnacle of Hoysala architecture with intricate stone carvings, star-shaped layouts, and soapstone sculptures. The Chennakesava Temple at Belur and Hoysaleswara Temple at Halebidu represent the finest examples of this architectural style that flourished in the 12th-13th centuries.",
      "difficulty": "Medium",
      "hint": "These temples are famous for intricate stone carvings"
    },
    {
      "level": 106,
      "mainsubject": "Culture & Society",
      "question": "The Ajanta Caves primarily represent which form of Buddhist architecture?",
      "options": [
        "Stupas",
        "Viharas and Chaityas",
        "Pillared halls",
        "Monolithic temples"
      ],
      "correctAnswer": 2,
      "explanation": "The Ajanta Caves primarily consist of Viharas (monasteries) and Chaityas (prayer halls) representing Buddhist rock-cut architecture. Built between 2nd century BCE and 6th century CE, these caves contain some of the finest examples of ancient Indian art. The caves served as residence for Buddhist monks and places for prayer and meditation. They are famous for their frescoes depicting Jataka tales and the life of Buddha.",
      "difficulty": "Medium",
      "hint": "These are residential and prayer structures for monks"
    },
    {
      "level": 107,
      "mainsubject": "Culture & Society",
      "question": "Which architectural style is characterized by curvilinear shikharas and is found in North India?",
      "options": [
        "Vesara",
        "Dravida",
        "Nagara",
        "Indo-Islamic"
      ],
      "correctAnswer": 3,
      "explanation": "Nagara style temple architecture is characterized by curvilinear shikharas (towers) that curve inward to a point at the top. This style is prevalent in North India and includes temples built on elevated platforms without boundary walls. Examples include the Sun Temple at Konark and Kandariya Mahadeva Temple at Khajuraho. The style originated during the Gupta period and features elaborate sculptural decoration.",
      "difficulty": "Medium",
      "hint": "This style has beehive-shaped towers"
    },
    {
      "level": 108,
      "mainsubject": "Culture & Society",
      "question": "Yakshagana is a traditional dance-drama form primarily performed in which region of Karnataka?",
      "options": [
        "North Karnataka",
        "South Karnataka",
        "Coastal Karnataka",
        "Central Karnataka"
      ],
      "correctAnswer": 3,
      "explanation": "Yakshagana is a traditional folk dance-drama form popular in Coastal Karnataka, particularly in Dakshina Kannada, Udupi, and Uttara Kannada districts. It combines dance, music, dialogue, costume, and makeup. The term means 'song of the celestials' and performances are usually held in open-air theaters during the dry season. There are two main styles: Tenkuthittu (southern) and Badaguthittu (northern coastal style).",
      "difficulty": "Easy",
      "hint": "Think about the region near the Arabian Sea"
    },
    {
      "level": 109,
      "mainsubject": "Culture & Society",
      "question": "Which Kannada poet was awarded the first Jnanpith Award for Kannada literature?",
      "options": [
        "D.R. Bendre",
        "Kuvempu",
        "U.R. Ananthamurthy",
        "Girish Karnad"
      ],
      "correctAnswer": 2,
      "explanation": "Kuvempu (Kuppali Venkatappa Puttappa) was the first Kannada writer to receive the Jnanpith Award in 1967 for his epic work 'Sri Ramayana Darshanam'. He was also known as 'Rashtrakavi' and promoted the philosophy of 'Vishwa Manava' (Universal Humanism). His other notable works include 'Kanooru Heggadati' and various poetry collections. He served as Vice-Chancellor of Mysore University and was instrumental in promoting Kannada as a medium of higher education.",
      "difficulty": "Medium",
      "hint": "He wrote 'Sri Ramayana Darshanam'"
    },
    {
      "level": 110,
      "mainsubject": "Culture & Society",
      "question": "The Dollu Kunitha folk dance of Karnataka is associated with the worship of which deity?",
      "options": [
        "Lord Krishna",
        "Lord Beeralingeshwara",
        "Lord Ganesha",
        "Goddess Durga"
      ],
      "correctAnswer": 2,
      "explanation": "Dollu Kunitha is a traditional drum dance associated with the worship of Sree Beeralingeshwara, considered a form of Lord Shiva. It originated in the rituals of the Kuruba Gowda community of North Karnataka. The dance symbolizes Shiva's fierce dance (Bhairava Tandava) when upset. Performers carry heavy drums (Dollu) and dance in circular formations with high energy, requiring great stamina and endurance.",
      "difficulty": "Medium",
      "hint": "This deity is considered a form of Lord Shiva"
    },
    {
      "level": 111,
      "mainsubject": "Culture & Society",
      "question": "Which statement about the Women's Reservation Act, 2023 is correct?",
      "options": [
        "It reserves 25% seats for women",
        "It applies only to Lok Sabha",
        "It reserves 33% seats for women in Parliament and State Assemblies",
        "It has no provisions for SC/ST women"
      ],
      "correctAnswer": 3,
      "explanation": "The Women's Reservation Act, 2023 reserves 33% of seats for women in both Parliament (Lok Sabha) and State Legislative Assemblies. It includes provisions for SC, ST, and OBC women within this quota through a rotational system. The Act is temporary for 15 years and aims to address gender inequality while ensuring representation from diverse backgrounds. This legislation represents a significant step toward women's political empowerment in India.",
      "difficulty": "Hard",
      "hint": "Think about the one-third reservation"
    },
    {
      "level": 112,
      "mainsubject": "Culture & Society",
      "question": "The Indo-Islamic architecture in India is best exemplified by which structure?",
      "options": [
        "Sun Temple, Konark",
        "Taj Mahal",
        "Brihadeeswarar Temple",
        "Ajanta Caves"
      ],
      "correctAnswer": 2,
      "explanation": "The Taj Mahal is considered the finest example of Indo-Islamic architecture, built by Mughal emperor Shah Jahan as a mausoleum for his wife Mumtaz Mahal (1631-1648). It combines Persian, Turkish, and Indian architectural elements with features like the central dome, four minarets, geometric patterns, and extensive use of white marble inlaid with precious stones. Indo-Islamic architecture represents the fusion of Islamic architectural traditions with local Indian elements.",
      "difficulty": "Easy",
      "hint": "This monument is called the 'Crown of Palaces'"
    },
    {
      "level": 113,
      "mainsubject": "Culture & Society",
      "question": "Which folk dance of Karnataka involves the use of brass instruments held in pairs?",
      "options": [
        "Dollu Kunitha",
        "Kamsale",
        "Pata Kunitha",
        "Somana Kunitha"
      ],
      "correctAnswer": 2,
      "explanation": "Kamsale is a religious folk dance where performers hold brass instruments called 'Kamsale' in pairs, one in each hand. It is performed by followers of Mahadeshwara, a 15th-century Sidda saint, mainly by the Kuruba community. The dance is performed as a religious offering with devotional songs and involves rhythmic movements creating musical sounds with the brass cymbals. It's popular in regions around Male Mahadeshwara Hills.",
      "difficulty": "Medium",
      "hint": "The dance gets its name from the musical instrument used"
    },
    {
      "level": 114,
      "mainsubject": "Culture & Society",
      "question": "The Vesara style of temple architecture is a synthesis of which two styles?",
      "options": [
        "Buddhist and Jain",
        "Nagara and Dravida",
        "Indo-Islamic and Hindu",
        "Gupta and Mauryan"
      ],
      "correctAnswer": 2,
      "explanation": "Vesara style is a hybrid architectural style that combines elements from both Nagara (North Indian) and Dravida (South Indian) temple architecture. It developed under the Chalukyas and reached its pinnacle during the Hoysala period in Karnataka. Vesara temples feature star-shaped layouts, stepped pyramidal towers, and intricate sculptural decoration. The style represents a harmonious fusion of northern curvilinear elements with southern structural features.",
      "difficulty": "Medium",
      "hint": "It's a fusion of North and South Indian styles"
    },
    {
      "level": 115,
      "mainsubject": "Culture & Society",
      "question": "D.R. Bendre, the renowned Kannada poet, was awarded the Jnanpith Award for which work?",
      "options": [
        "Gari",
        "Naku Tanti",
        "Krishna",
        "Sakhya"
      ],
      "correctAnswer": 2,
      "explanation": "D.R. Bendre was awarded the Jnanpith Award in 1973 for his poetry collection 'Naaku Tanti' (Four Strings), published in 1964. Bendre was a pioneering poet of Kannada's Navodaya movement and is considered the greatest Kannada lyric poet of the 20th century. He was known for his original use of Dharwad Kannada and his charismatic personality earned him the title 'Varakavi' (boon-gifted poet-seer). His poetry spans almost 70 years and represents continuous engagement with 'Kavyodyoga' or 'The High Yoga of Poetry'.",
      "difficulty": "Hard",
      "hint": "The title means 'Four Strings'"
    },
    {
      "level": 116,
      "mainsubject": "Culture & Society",
      "question": "Which UNESCO World Heritage Site represents the earliest Buddhist architecture in India?",
      "options": [
        "Ellora Caves",
        "Ajanta Caves",
        "Sanchi Stupa",
        "Nalanda University"
      ],
      "correctAnswer": 3,
      "explanation": "The Sanchi Stupa complex, particularly the Great Stupa, represents one of the earliest and most important examples of Buddhist architecture in India. Originally built by Emperor Ashoka in the 3rd century BCE and later expanded during the Shunga, Satavahana, and Gupta periods, it features the classic stupa design with a hemispherical dome, circumambulatory path, and four ornately carved toranas (gateways) depicting scenes from Buddha's life and Jataka tales.",
      "difficulty": "Medium",
      "hint": "This site has the famous ornate gateways called toranas"
    },
    {
      "level": 117,
      "mainsubject": "Culture & Society",
      "question": "The term 'Vachana' in Kannada literature literally means:",
      "options": [
        "Poetry",
        "Words or utterances",
        "Philosophy",
        "Devotion"
      ],
      "correctAnswer": 2,
      "explanation": "The term 'Vachana' literally means 'words' or 'utterances' in Kannada. Vachanas are prose-like poems that represent simple yet profound expressions of philosophical ideas, spiritual experiences, and social criticisms. They were composed in spoken dialect of the time, making them accessible to a wider audience. The Vachana movement used this literary form as a tool for social reform, spiritual enlightenment, and challenging orthodox religious practices during the 12th century.",
      "difficulty": "Easy",
      "hint": "It refers to spoken expressions"
    },
    {
      "level": 118,
      "mainsubject": "Culture & Society",
      "question": "Which classical dance form is known for its 'sculpturesque poses' and originated in Tamil Nadu?",
      "options": [
        "Bharatanatyam",
        "Kuchipudi",
        "Kathak",
        "Odissi"
      ],
      "correctAnswer": 1,
      "explanation": "Bharatanatyam, originating from Tamil Nadu, is known for its sculpturesque poses, expressive hand gestures (mudras), and devotional themes. It is considered the oldest classical dance form and is characterized by fixed upper torso, bent legs, sophisticated footwork, and a sophisticated vocabulary of sign language based on gestures of hands, eyes, and face muscles. The dance form has its roots in the ancient Natya Shastra and was traditionally performed in temples.",
      "difficulty": "Easy",
      "hint": "This is the oldest classical dance form of India"
    },
    {
      "level": 119,
      "mainsubject": "Culture & Society",
      "question": "The Pattadakal Group of Monuments represents which dynasty's architectural achievements?",
      "options": [
        "Hoysala",
        "Vijayanagara",
        "Chalukya",
        "Rashtrakuta"
      ],
      "correctAnswer": 3,
      "explanation": "The Pattadakal Group of Monuments represents the architectural achievements of the Chalukya dynasty (7th-8th centuries). This UNESCO World Heritage Site comprises nine Hindu temples and one Jain temple built in the Badami Chalukya style, which blends influences from northern and southern India. The site served as a ceremonial center where Chalukya kings were crowned. The Virupaksha Temple, built to commemorate Vikramaditya II's victory over the Pallavas, is the most prominent structure.",
      "difficulty": "Medium",
      "hint": "This dynasty ruled from Badami"
    },
    {
      "level": 120,
      "mainsubject": "Culture & Society",
      "question": "Which social reform was central to the Vachana movement in Karnataka?",
      "options": [
        "Women's education",
        "Abolition of caste system",
        "Economic equality",
        "Political representation"
      ],
      "correctAnswer": 2,
      "explanation": "The abolition of the caste system was central to the Vachana movement. Led by Basavanna and other Sharanas, the movement strongly criticized caste discrimination and promoted social equality. The Vachana poets used their writings to challenge orthodox brahmanical practices, ritual hierarchies, and caste-based discrimination. They emphasized 'Kayaka' (work as worship) and promoted the concept that devotion to God was more important than birth-based social status.",
      "difficulty": "Medium",
      "hint": "The movement strongly opposed birth-based social hierarchy"
    },
    {
      "level": 121,
      "mainsubject": "Culture & Society",
      "question": "The Elephanta Caves are primarily dedicated to which Hindu deity?",
      "options": [
        "Vishnu",
        "Shiva",
        "Brahma",
        "Ganesha"
      ],
      "correctAnswer": 2,
      "explanation": "The Elephanta Caves, located on Elephanta Island in Mumbai Harbour, are primarily dedicated to Lord Shiva. Built mainly in the 5th-6th centuries, these rock-cut temples feature magnificent sculptures of Shiva in various forms. The most famous sculpture is the Trimurti (three-headed Shiva) representing Shiva as creator, preserver, and destroyer. The caves showcase the excellence of ancient Indian rock-cut architecture and sculpture.",
      "difficulty": "Easy",
      "hint": "The famous Trimurti sculpture is found here"
    },
    {
      "level": 122,
      "mainsubject": "Culture & Society",
      "question": "Kathak classical dance primarily originated from which Indian state?",
      "options": [
        "Rajasthan",
        "Uttar Pradesh",
        "Madhya Pradesh",
        "Bihar"
      ],
      "correctAnswer": 2,
      "explanation": "Kathak originated from Uttar Pradesh, particularly flourishing in the royal courts of Lucknow and Faizabad during the Mughal era (16th-17th centuries). The name 'Kathak' comes from 'Katha' meaning stories, as performers were originally storytellers (Kathakars) who narrated tales from Hindu epics. The dance form received significant patronage from Mughal rulers like Emperor Akbar and incorporated Persian and Islamic cultural influences while retaining its core Indian elements.",
      "difficulty": "Medium",
      "hint": "This state was the center of Mughal culture"
    },
    {
      "level": 123,
      "mainsubject": "Culture & Society",
      "question": "Which architectural feature is characteristic of Dravida style temples?",
      "options": [
        "Curvilinear shikhara",
        "Pyramidal gopuram",
        "Flat rooftops",
        "Circular layout"
      ],
      "correctAnswer": 2,
      "explanation": "Pyramidal gopurams (towering gateways) are characteristic features of Dravida style temples found in South India. These temples also feature pyramidal vimanas (towers over the sanctum) with multiple stories, each smaller than the one below. Other characteristics include elaborate boundary walls, pillared mandapas, and extensive sculptural decoration. The style evolved under dynasties like the Pallavas, Cholas, and Pandyas, with examples including the Brihadeeswarar Temple at Thanjavur.",
      "difficulty": "Medium",
      "hint": "These are towering entrance gateways"
    },
    {
      "level": 124,
      "mainsubject": "Culture & Society",
      "question": "Akka Mahadevi was a prominent figure in which literary movement?",
      "options": [
        "Navodaya movement",
        "Navya movement",
        "Vachana movement",
        "Bandaya movement"
      ],
      "correctAnswer": 3,
      "explanation": "Akka Mahadevi was a prominent 12th-century saint-poet and one of the leading figures of the Vachana movement along with Basavanna and Allama Prabhu. She was known for her mystical poetry expressing devotion to Lord Shiva (whom she called Chennamallikarjuna). Her vachanas dealt with themes of spiritual love, social reform, and women's liberation. She challenged social conventions and is remembered as one of the earliest feminist voices in Kannada literature.",
      "difficulty": "Medium",
      "hint": "She was a contemporary of Basavanna"
    },
    {
      "level": 125,
      "mainsubject": "Culture & Society",
      "question": "The Gateway of India in Mumbai represents which architectural style?",
      "options": [
        "Gothic Revival",
        "Neo-classical",
        "Indo-Saracenic",
        "Art Deco"
      ],
      "correctAnswer": 3,
      "explanation": "The Gateway of India represents Indo-Saracenic architecture, a fusion of Indian, Islamic, and European architectural styles that emerged during the British colonial period. Built in 1924 and designed by George Wittet, it commemorates the visit of King George V and Queen Mary to India in 1911. The monument features Islamic architectural elements like pointed arches and domes combined with Indian decorative motifs, standing as a prime example of colonial architectural synthesis.",
      "difficulty": "Medium",
      "hint": "This style combines Indian, Islamic, and European elements"
    },
    {
      "level": 126,
      "mainsubject": "Culture & Society",
      "question": "Which Hoysala king was instrumental in the construction of Belur and Halebidu temples?",
      "options": [
        "Vishnuvardhana",
        "Veera Ballala II",
        "Narasimha I",
        "Someshwara"
      ],
      "correctAnswer": 1,
      "explanation": "King Vishnuvardhana (c. 1108-1152 CE) was instrumental in the construction of the magnificent temples at Belur and Halebidu. He commissioned the Chennakesava Temple at Belur to commemorate his victory over the Cholas. The Hoysaleswara Temple at Halebidu was also built during his reign and named after him, with twin shrines dedicated to 'Hoysaleswara' and 'Shantaleswara' (after his queen Shantala Devi). Under his patronage, Hoysala architecture reached its zenith.",
      "difficulty": "Hard",
      "hint": "He converted from Jainism to Vaishnavism"
    },
    {
      "level": 127,
      "mainsubject": "Culture & Society",
      "question": "The reservation policy for women in Panchayati Raj institutions was introduced through which constitutional amendment?",
      "options": [
        "71st Amendment",
        "72nd Amendment",
        "73rd Amendment",
        "74th Amendment"
      ],
      "correctAnswer": 3,
      "explanation": "The 73rd Constitutional Amendment Act of 1992 introduced mandatory reservation of 33% seats for women in Panchayati Raj institutions (rural local governance). The 74th Amendment similarly provided for women's reservation in urban local bodies. These amendments were landmark legislations that significantly enhanced women's political participation at the grassroots level and served as a precursor to demands for reservation in higher legislative bodies.",
      "difficulty": "Medium",
      "hint": "This amendment deals with Panchayati Raj"
    },
    {
      "level": 128,
      "mainsubject": "Culture & Society",
      "question": "Manipuri classical dance is primarily associated with which religious tradition?",
      "options": [
        "Shaivism",
        "Vaishnavism",
        "Shaktism",
        "Buddhism"
      ],
      "correctAnswer": 2,
      "explanation": "Manipuri classical dance is primarily associated with Vaishnavism and devotion to Lord Krishna. The dance form features soft, graceful movements with themes predominantly drawn from Krishna Leela and Radha-Krishna stories. The most famous Manipuri dance is Ras Lila, depicting the divine love of Radha and Krishna. The dance style is characterized by its spiritual content, subtle expressions, and lack of sharp movements, reflecting the gentle devotional tradition of Vaishnavism in Manipur.",
      "difficulty": "Medium",
      "hint": "This tradition worships Lord Krishna"
    },
    {
      "level": 129,
      "mainsubject": "Culture & Society",
      "question": "Which cave complex represents the synthesis of Buddhist, Hindu, and Jain architectural traditions?",
      "options": [
        "Ajanta",
        "Ellora",
        "Elephanta",
        "Karla"
      ],
      "correctAnswer": 2,
      "explanation": "Ellora Caves represent the synthesis of Buddhist, Hindu, and Jain architectural traditions, spanning from the 5th to 13th centuries CE. The complex has 34 caves: 12 Buddhist (5th-7th centuries), 17 Hindu (6th-8th centuries), and 5 Jain (8th-13th centuries). The site illustrates the religious tolerance of ancient India and features the magnificent Kailasa Temple, a monolithic structure carved from a single rock. This diversity makes Ellora unique in demonstrating the coexistence of different religious traditions.",
      "difficulty": "Medium",
      "hint": "This site has the famous Kailasa Temple"
    },
    {
      "level": 130,
      "mainsubject": "Culture & Society",
      "question": "The philosophy of 'Vishwa Manava' was promoted by which Kannada literary figure?",
      "options": [
        "Basavanna",
        "Kuvempu",
        "D.R. Bendre",
        "Pampa"
      ],
      "correctAnswer": 2,
      "explanation": "'Vishwa Manava' (Universal Humanism) was the philosophical concept promoted by Kuvempu. This philosophy emphasizes that all human beings belong to a single global family beyond barriers of caste, religion, and nationality. Kuvempu believed in unity, equality, and universal brotherhood. His literary works, particularly 'Sri Ramayana Darshanam,' reflect this humanistic ideology that transcends narrow social boundaries and promotes inclusive thinking.",
      "difficulty": "Medium",
      "hint": "This philosophy promotes universal brotherhood"
    },
    {
      "level": 131,
      "mainsubject": "Culture & Society",
      "question": "Sattriya classical dance originated in which Indian state?",
      "options": [
        "West Bengal",
        "Assam",
        "Tripura",
        "Meghalaya"
      ],
      "correctAnswer": 2,
      "explanation": "Sattriya classical dance originated in Assam and is based on the Bhakti movement. It was created by the great Vaishnavite saint Srimanta Sankaradeva in the 15th century as part of the cultural and religious reform in Assam. The dance form is performed in Satras (Vaishnavite monasteries) and emphasizes devotional themes related to Lord Krishna. It was recognized as a classical dance form by the Sangeet Natak Akademi in 2000, making it the eighth classical dance of India.",
      "difficulty": "Medium",
      "hint": "This state is known for tea gardens and Brahmaputra river"
    },
    {
      "level": 132,
      "mainsubject": "Culture & Society",
      "question": "The colonial-era Victoria Memorial in Kolkata was designed by which architect?",
      "options": [
        "Edwin Lutyens",
        "Herbert Baker",
        "William Emerson",
        "George Wittet"
      ],
      "correctAnswer": 3,
      "explanation": "The Victoria Memorial in Kolkata was designed by British architect William Emerson, with contributions from Vincent Esch. Completed in 1921, it was proposed by Lord Curzon as a memorial to Queen Victoria, Empress of India. The structure combines British and Mughal architectural elements, inspired by the Taj Mahal. Built with white Makrana marble, it features a central dome 184 feet tall supported by four smaller domes, representing the grandeur of British colonial architecture in India.",
      "difficulty": "Hard",
      "hint": "He also designed the Crawford Market in Mumbai"
    },
    {
      "level": 133,
      "mainsubject": "Culture & Society",
      "question": "Which folk dance of Karnataka uses bamboo poles as props?",
      "options": [
        "Dollu Kunitha",
        "Pata Kunitha",
        "Kamsale",
        "Somana Kunitha"
      ],
      "correctAnswer": 2,
      "explanation": "Pata Kunitha uses bamboo poles measuring 10-12 feet as props, known as 'Pata,' hence the name. The poles are colorfully decorated with multi-colored ribbons, and dancers perform with high energy while balancing these tall bamboo poles. This dance is specific to the Mysore region of Karnataka and requires great skill and coordination. The performance involves rhythmic movements and formations that showcase the dancers' agility and balance.",
      "difficulty": "Easy",
      "hint": "The name comes from the bamboo pole used"
    },
    {
      "level": 134,
      "mainsubject": "Culture & Society",
      "question": "The Hampi monuments primarily represent which architectural style?",
      "options": [
        "Hoysala",
        "Vijayanagara",
        "Chalukya",
        "Chola"
      ],
      "correctAnswer": 2,
      "explanation": "Hampi represents Vijayanagara architecture, a vibrant combination of Chalukya, Hoysala, Pandya, and Chola styles that prospered during the Vijayanagara Empire (14th-16th centuries). The architectural style features ornate pillared Kalyanamantapas (marriage halls), Vasanthamantapas (open pillared halls), and Rajagopuras (towers). The Vittala Temple with its musical pillars and stone chariot is the most famous example. This UNESCO World Heritage Site showcases the empire's grandeur before its fall in 1565.",
      "difficulty": "Easy",
      "hint": "This empire's capital was at Hampi"
    },
    {
      "level": 135,
      "mainsubject": "Culture & Society",
      "question": "Which social issue is primarily addressed by the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act?",
      "options": [
        "Economic inequality",
        "Educational backwardness",
        "Caste-based discrimination",
        "Political underrepresentation"
      ],
      "correctAnswer": 3,
      "explanation": "The Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989, primarily addresses caste-based discrimination and violence against Dalits and Adivasis. The Act provides legal protection against various forms of atrocities including social boycott, physical violence, sexual assault, and economic exploitation. It establishes special courts for speedy trials and includes provisions for rehabilitation of victims. The Act recognizes that ordinary legal provisions are insufficient to address the systemic discrimination faced by these communities.",
      "difficulty": "Medium",
      "hint": "This Act deals with violence against marginalized communities"
    },
    {
      "level": 136,
      "mainsubject": "Culture & Society",
      "question": "Kuchipudi classical dance originated in which Indian state?",
      "options": [
        "Karnataka",
        "Tamil Nadu",
        "Andhra Pradesh",
        "Telangana"
      ],
      "correctAnswer": 3,
      "explanation": "Kuchipudi classical dance originated in Andhra Pradesh, specifically in the village of Kuchipudi in Krishna district. This dance form combines classical dance with drama and music, often including dialogue delivery and group performances. Traditionally performed by men who played both male and female roles, it now includes women dancers. Kuchipudi is known for its graceful movements, intricate footwork, and the unique technique of dancing on a brass plate (tarangam).",
      "difficulty": "Easy",
      "hint": "This state is known as the 'Rice Bowl of India'"
    },
    {
      "level": 137,
      "mainsubject": "Culture & Society",
      "question": "The concept of 'Kayaka' was central to which philosophical movement?",
      "options": [
        "Advaita Vedanta",
        "Vachana movement",
        "Bhakti movement",
        "Arya Samaj"
      ],
      "correctAnswer": 2,
      "explanation": "'Kayaka' (work as worship) was a central concept of the Vachana movement led by Basavanna. This philosophy emphasized that honest labor and productive work are forms of devotion to God, challenging the traditional caste-based division of labor and the supremacy of ritualistic practices. Kayaka promoted dignity of labor regardless of caste and established that spiritual merit comes from sincere work rather than birth or ritual observance, making it a revolutionary social reform concept.",
      "difficulty": "Medium",
      "hint": "This concept means 'work as worship'"
    },
    {
      "level": 138,
      "mainsubject": "Culture & Society",
      "question": "Which UNESCO World Heritage site in Maharashtra represents Buddhist rock-cut architecture?",
      "options": [
        "Ajanta and Ellora Caves",
        "Elephanta Caves",
        "Lonar Crater",
        "Chhatrapati Shivaji Terminus"
      ],
      "correctAnswer": 1,
      "explanation": "The Ajanta and Ellora Caves in Maharashtra represent the pinnacle of Buddhist rock-cut architecture. Ajanta (2nd century BCE - 6th century CE) consists of 30 caves with magnificent frescoes and sculptures depicting Buddhist themes. Ellora (5th-13th century CE) has 34 caves representing Buddhist, Hindu, and Jain traditions. Both sites showcase the evolution of rock-cut architecture and are renowned for their artistic and architectural excellence, making them UNESCO World Heritage Sites.",
      "difficulty": "Easy",
      "hint": "These caves are famous for their ancient paintings and sculptures"
    },
    {
      "level": 139,
      "mainsubject": "Culture & Society",
      "question": "The term 'Rashtrakavi' was conferred upon which Kannada poet?",
      "options": [
        "D.R. Bendre",
        "Kuvempu",
        "Gopalakrishna Adiga",
        "K.S. Narasimhaswamy"
      ],
      "correctAnswer": 2,
      "explanation": "The title 'Rashtrakavi' (National Poet) was conferred upon Kuvempu in 1964, making him the first Kannada National Poet. This honor was given in recognition of his outstanding contribution to Kannada literature and his philosophy of universal humanism. Kuvempu's works transcended regional boundaries and promoted unity among all humanity. His epic 'Sri Ramayana Darshanam' and other literary works established him as a towering figure in Indian literature, worthy of this national recognition.",
      "difficulty": "Medium",
      "hint": "This title means 'National Poet'"
    },
    {
      "level": 140,
      "mainsubject": "Culture & Society",
      "question": "Somana Kunitha folk dance is characterized by the use of:",
      "options": [
        "Brass instruments",
        "Bamboo poles",
        "Large masks",
        "Decorated drums"
      ],
      "correctAnswer": 3,
      "explanation": "Somana Kunitha is characterized by the use of large masks worn by dancers during performances. This traditional dance was performed as part of ritualistic worship in temples during festivals and is associated with the worship of local village deities. The huge masks are the most striking aspect of this dance form, creating a dramatic visual impact. Somana Kunitha is prevalent in parts of Southern Karnataka including Mysore, Hassan, and Mandya districts.",
      "difficulty": "Medium",
      "hint": "This dance creates dramatic visual impact through face coverings"
    },
    {
      "level": 141,
      "mainsubject": "Culture & Society",
      "question": "The colonial architecture style that combines European and Mughal elements is known as:",
      "options": [
        "Gothic Revival",
        "Neo-classical",
        "Indo-Saracenic",
        "Victorian"
      ],
      "correctAnswer": 3,
      "explanation": "Indo-Saracenic architecture is the colonial style that combines European and Mughal elements. This style emerged during the British Raj and represents a fusion of Indian, Islamic, and European architectural traditions. It features domes, arches, minarets, and decorative elements from Mughal architecture combined with European structural techniques. Notable examples include the Gateway of India, Chhatrapati Shivaji Terminus (formerly Victoria Terminus), and various government buildings constructed during the colonial period.",
      "difficulty": "Medium",
      "hint": "This style is a fusion of multiple architectural traditions"
    },
    {
      "level": 142,
      "mainsubject": "Culture & Society",
      "question": "Odissi classical dance originated in which Indian state?",
      "options": [
        "West Bengal",
        "Odisha",
        "Jharkhand",
        "Bihar"
      ],
      "correctAnswer": 2,
      "explanation": "Odissi classical dance originated in Odisha and is one of the eight recognized classical dance forms of India. It is characterized by fluid torso movements, sculptural poses inspired by temple sculptures, and tribhangi (three-bend pose of the body). The dance form has its roots in the temple traditions of Odisha and was traditionally performed by Maharis (temple dancers) and later by Gotipuas (boy dancers). Odissi depicts stories from Hindu mythology, particularly those related to Lord Krishna and Jagannath.",
      "difficulty": "Easy",
      "hint": "This state is famous for the Jagannath Temple"
    },
    {
      "level": 143,
      "mainsubject": "Culture & Society",
      "question": "Which emperor was instrumental in the spread of Buddhist architecture in India?",
      "options": [
        "Chandragupta Maurya",
        "Ashoka",
        "Harsha",
        "Kanishka"
      ],
      "correctAnswer": 2,
      "explanation": "Emperor Ashoka (273-236 BCE) was instrumental in the spread of Buddhist architecture in India. After his conversion to Buddhism following the Kalinga War, Ashoka patronized Buddhism extensively and commissioned numerous stupas, pillars, and monasteries throughout his empire. He is credited with building 84,000 stupas, including the original structure of the Great Stupa at Sanchi. His rock and pillar edicts spread Buddhist principles, and his architectural patronage established the foundation of Buddhist art and architecture in India.",
      "difficulty": "Easy",
      "hint": "This emperor converted to Buddhism after the Kalinga War"
    },
    {
      "level": 144,
      "mainsubject": "Culture & Society",
      "question": "The literary work 'Kanooru Heggadati' was written by which Kannada author?",
      "options": [
        "D.R. Bendre",
        "Kuvempu",
        "Masti Venkatesha Iyengar",
        "T.R. Subba Rao"
      ],
      "correctAnswer": 2,
      "explanation": "'Kanooru Heggadati' (The Outcast of the Village) is a famous novel written by Kuvempu, published in 1951. This work is considered one of the greatest novels in Kannada literature and deals with themes of social reform, caste discrimination, and human dignity. The novel portrays the struggle of an untouchable woman and her fight for social acceptance and equality. It reflects Kuvempu's philosophy of universal humanism and his commitment to social justice.",
      "difficulty": "Hard",
      "hint": "This novel deals with caste discrimination"
    },
    {
      "level": 145,
      "mainsubject": "Culture & Society",
      "question": "The Mahabalipuram monuments were built during which dynasty?",
      "options": [
        "Chola",
        "Pallava",
        "Pandya",
        "Chera"
      ],
      "correctAnswer": 2,
      "explanation": "The Mahabalipuram (Mamallapuram) monuments were built during the Pallava dynasty in the 7th and 8th centuries CE. These UNESCO World Heritage Sites include rathas (chariot-shaped temples), mandapas (rock-cut temples), rock reliefs including the giant 'Descent of the Ganges,' and the famous Shore Temple. The architectural style influenced temple construction throughout South India and Southeast Asia, demonstrating the Pallavas' significant contribution to Dravidian architecture.",
      "difficulty": "Medium",
      "hint": "This dynasty had their capital at Kanchipuram"
    },
    {
      "level": 146,
      "mainsubject": "Culture & Society",
      "question": "Which social movement in India focuses specifically on the rights of Dalits?",
      "options": [
        "Chipko Movement",
        "Self-Respect Movement",
        "Dalit Panthers",
        "Telangana Movement"
      ],
      "correctAnswer": 3,
      "explanation": "The Dalit Panthers movement, founded in 1972 by Namdeo Dhasal, J.V. Pawar, and Arjun Dangle in Maharashtra, specifically focused on Dalit rights and empowerment. Inspired by the Black Panthers movement in the United States, it aimed to organize Dalits against caste-based oppression and discrimination. The movement used literature, activism, and political organization to raise awareness about Dalit issues and fight for social justice, dignity, and equal rights.",
      "difficulty": "Medium",
      "hint": "This movement was inspired by a similar movement in the United States"
    },
    {
      "level": 147,
      "mainsubject": "Culture & Society",
      "question": "The Chhatrapati Shivaji Terminus in Mumbai represents which architectural style?",
      "options": [
        "Gothic Revival",
        "Indo-Saracenic",
        "Neo-classical",
        "Art Deco"
      ],
      "correctAnswer": 1,
      "explanation": "The Chhatrapati Shivaji Terminus (formerly Victoria Terminus) represents Gothic Revival architecture, a Victorian-era architectural style. Built in 1888 and designed by Frederick William Stevens, it features pointed arches, ribbed vaults, flying buttresses, and ornate stone carvings characteristic of Gothic architecture. This UNESCO World Heritage Site blends Gothic Revival with traditional Indian architectural elements, making it an outstanding example of Victorian Gothic Revival architecture adapted to Indian conditions.",
      "difficulty": "Medium",
      "hint": "This style is characterized by pointed arches and ribbed vaults"
    },
    {
      "level": 148,
      "mainsubject": "Culture & Society",
      "question": "Which classical dance form is known for its 'lasya' aspect emphasizing grace and elegance?",
      "options": [
        "Kathak",
        "Mohiniyattam",
        "Bharatanatyam",
        "Kuchipudi"
      ],
      "correctAnswer": 2,
      "explanation": "Mohiniyattam, the classical dance form from Kerala, is particularly known for its 'lasya' aspect, emphasizing grace, elegance, and feminine charm. The name 'Mohiniyattam' means 'dance of the enchantress,' referring to the feminine aspect of Lord Vishnu as Mohini. This dance form is characterized by slow, graceful, swaying movements and expressive eye gestures. It focuses on the softer, more subtle expressions of Indian classical dance, making it distinct from other more vigorous forms.",
      "difficulty": "Medium",
      "hint": "This dance represents the feminine aspect of divinity"
    },
    {
      "level": 149,
      "mainsubject": "Culture & Society",
      "question": "The Sun Temple at Konark represents which architectural style?",
      "options": [
        "Nagara",
        "Dravida",
        "Vesara",
        "Indo-Islamic"
      ],
      "correctAnswer": 1,
      "explanation": "The Sun Temple at Konark represents the Nagara style of temple architecture. Built in the 13th century during the reign of King Narasimhadeva I of the Eastern Ganga dynasty, it is designed as a colossal chariot of the sun god Surya with 24 intricately carved stone wheels and seven horses. The temple showcases the finest example of Kalinga architecture, a regional variant of the Nagara style, with its towering shikhara and elaborate sculptural decoration.",
      "difficulty": "Medium",
      "hint": "This temple is designed as a chariot"
    },
    {
      "level": 150,
      "mainsubject": "Culture & Society",
      "question": "Allama Prabhu was associated with which literary and spiritual movement?",
      "options": [
        "Bhakti movement",
        "Vachana movement",
        "Sufi movement",
        "Tantra movement"
      ],
      "correctAnswer": 2,
      "explanation": "Allama Prabhu was a prominent 12th-century mystic and poet associated with the Vachana movement in Karnataka. Along with Basavanna and Akka Mahadevi, he was one of the trinity of the Veerashaiva movement. Known for his profound philosophical insights and mystical poetry, Allama Prabhu served as the spiritual head (prabhu) of the Anubhava Mantapa, an academy of mystics, saints, and philosophers. His vachanas dealt with advanced spiritual concepts and metaphysical questions.",
      "difficulty": "Medium",
      "hint": "He was the spiritual head of Anubhava Mantapa"
    },
    {
      "level": 151,
      "mainsubject": "Culture & Society",
      "question": "The concept of 'reservations' in the Indian Constitution was primarily inspired by which principle?",
      "options": [
        "Economic efficiency",
        "Social justice",
        "Political stability",
        "Administrative convenience"
      ],
      "correctAnswer": 2,
      "explanation": "The concept of reservations in the Indian Constitution was primarily inspired by the principle of social justice. The founding fathers recognized that centuries of discrimination and social exclusion had created deep inequalities, particularly for Scheduled Castes, Scheduled Tribes, and other backward classes. Reservations were designed as a temporary measure to provide equal opportunities and compensate for historical injustices, ensuring substantive equality rather than just formal equality.",
      "difficulty": "Easy",
      "hint": "This principle aims to correct historical wrongs"
    },
    {
      "level": 152,
      "mainsubject": "Culture & Society",
      "question": "Which architectural element is unique to Buddhist stupas?",
      "options": [
        "Shikhara",
        "Gopuram",
        "Harmika and Yasti",
        "Mandapa"
      ],
      "correctAnswer": 3,
      "explanation": "Harmika (square railing) and Yasti (central mast) are architectural elements unique to Buddhist stupas. The harmika is a square railing at the top of the stupa's dome, representing the abode of gods, while the yasti is the central mast that passes through the stupa, symbolizing the cosmic axis. Together with the chattra (umbrella-like structure), these elements distinguish stupas from other religious architectural forms and carry deep Buddhist symbolism representing the path to enlightenment.",
      "difficulty": "Hard",
      "hint": "These elements are found at the top of the stupa"
    },
    {
      "level": 153,
      "mainsubject": "Culture & Society",
      "question": "The Natya Shastra, which forms the foundation of Indian classical dances, was written by:",
      "options": [
        "Bharata Muni",
        "Panini",
        "Kalidasa",
        "Abhinavagupta"
      ],
      "correctAnswer": 1,
      "explanation": "The Natya Shastra, which forms the foundation of Indian classical dances, was written by Bharata Muni between 2nd century BCE and 2nd century CE. This comprehensive treatise on performing arts covers dance, music, and drama, defining the theory and practice of Indian classical dance forms. It describes the nine rasas (emotions), mudras (hand gestures), and various aspects of stage craft. All eight classical dance forms of India trace their theoretical foundation to this ancient text.",
      "difficulty": "Medium",
      "hint": "This ancient sage codified the rules of performing arts"
    },
    {
      "level": 154,
      "mainsubject": "Culture & Society",
      "question": "Which Karnataka folk art form involves storytelling through painted scrolls?",
      "options": [
        "Yakshagana",
        "Chittara",
        "Leather puppetry",
        "Channapatna toys"
      ],
      "correctAnswer": 3,
      "explanation": "Leather puppetry (Togalu Gombeyata) in Karnataka involves storytelling through painted leather puppets, though not scrolls per se. However, Chittara is the folk art form that involves painted decorative patterns. The closest answer relating to painted storytelling would be the traditional leather puppet shows where stories from epics are narrated using painted leather puppets. These performances combine visual art with narrative, maintaining the oral tradition of storytelling in Karnataka's rural communities.",
      "difficulty": "Hard",
      "hint": "This art form uses painted figures to tell stories"
    },
    {
      "level": 155,
      "mainsubject": "Culture & Society",
      "question": "The Great Living Chola Temples are examples of which architectural style?",
      "options": [
        "Nagara",
        "Dravida",
        "Vesara",
        "Indo-Islamic"
      ],
      "correctAnswer": 2,
      "explanation": "The Great Living Chola Temples represent the pinnacle of Dravida architectural style. These UNESCO World Heritage Sites include the Brihadisvara Temple at Thanjavur, Brihadisvara Temple at Gangaikondacholisvaram, and Airavatesvara Temple at Darasuram. Built during the 11th and 12th centuries under the Chola dynasty, they showcase the finest examples of Dravidian architecture with their towering vimanas, elaborate sculptures, and sophisticated bronze work.",
      "difficulty": "Medium",
      "hint": "These temples were built by the Chola dynasty"
    },
    {
      "level": 156,
      "mainsubject": "Culture & Society",
      "question": "Which social reformer was known as the 'Father of the Indian Renaissance'?",
      "options": [
        "Raja Ram Mohan Roy",
        "Ishwar Chandra Vidyasagar",
        "Dayananda Saraswati",
        "Jyotirao Phule"
      ],
      "correctAnswer": 1,
      "explanation": "Raja Ram Mohan Roy (1772-1833) is known as the 'Father of the Indian Renaissance' for his pioneering role in social and educational reforms. He founded the Brahmo Samaj, advocated for the abolition of sati, promoted women's education, and fought against social evils like child marriage and the caste system. His efforts to modernize Indian society while preserving its cultural heritage earned him this title. He was instrumental in bringing Western education and rational thinking to India.",
      "difficulty": "Easy",
      "hint": "He founded the Brahmo Samaj"
    },
    {
      "level": 157,
      "mainsubject": "Culture & Society",
      "question": "The Badami Caves represent which period of Indian architecture?",
      "options": [
        "Gupta period",
        "Mauryan period",
        "Chalukya period",
        "Pallava period"
      ],
      "correctAnswer": 3,
      "explanation": "The Badami Caves represent the Chalukya period of Indian architecture (6th-8th centuries CE). These four rock-cut caves in Karnataka were carved during the rule of the Chalukyas of Vatapi (Badami). The caves showcase a blend of Nagara and Dravida styles, featuring Hindu, Jain, and Buddhist themes. They are significant for their architectural innovations and sculptural excellence, representing the early development of Deccan architecture under Chalukya patronage.",
      "difficulty": "Medium",
      "hint": "These caves are located in Karnataka"
    },
    {
      "level": 158,
      "mainsubject": "Culture & Society",
      "question": "The Women's Reservation Bill aims to provide what percentage of reservation for women in legislatures?",
      "options": [
        "25%",
        "30%",
        "33%",
        "50%"
      ],
      "correctAnswer": 3,
      "explanation": "The Women's Reservation Bill (now Act, 2023) aims to provide 33% reservation for women in the Lok Sabha and State Legislative Assemblies. This legislation also ensures that within this quota, seats are reserved for women belonging to Scheduled Castes and Scheduled Tribes in proportion to their population. The Act includes a rotational system to ensure women from diverse constituencies get opportunities and is initially implemented for a period of 15 years.",
      "difficulty": "Easy",
      "hint": "This is the same percentage as in Panchayati Raj institutions"
    },
    {
      "level": 159,
      "mainsubject": "Culture & Society",
      "question": "Khajuraho temples are famous for which aspect of temple architecture?",
      "options": [
        "Astronomical alignment",
        "Erotic sculptures",
        "Musical pillars",
        "Underground chambers"
      ],
      "correctAnswer": 2,
      "explanation": "Khajuraho temples are famous for their erotic sculptures, which form part of a comprehensive sculptural program depicting various aspects of human life. Built during the Chandela dynasty (9th-12th centuries), these Nagara style temples showcase not only erotic art but also religious, social, and cultural themes. The erotic sculptures represent the tantric philosophy and the celebration of life in all its forms. These UNESCO World Heritage Sites are considered masterpieces of Indian temple architecture.",
      "difficulty": "Easy",
      "hint": "These sculptures depict various aspects of human life"
    },
    {
      "level": 160,
      "mainsubject": "Culture & Society",
      "question": "Which movement in Karnataka promoted the use of Kannada in administration and education?",
      "options": [
        "Gokak Chaluvali",
        "Kaveri Movement",
        "Unification Movement",
        "Ekikarana Movement"
      ],
      "correctAnswer": 1,
      "explanation": "The Gokak Chaluvali (Gokak Movement) in Karnataka promoted the use of Kannada in administration and education. Named after the Gokak Committee report of 1981, this movement demanded the implementation of Kannada as the medium of instruction in schools and its greater use in government administration. The movement saw massive participation from people across Karnataka and led to significant policy changes promoting the Kannada language in various spheres of public life.",
      "difficulty": "Medium",
      "hint": "This movement was named after a committee report"
    },
    {
      "level": 161,
      "mainsubject": "Culture & Society",
      "question": "The architectural style of Fatehpur Sikri represents which period?",
      "options": [
        "Delhi Sultanate",
        "Mughal",
        "Vijayanagara",
        "Maratha"
      ],
      "correctAnswer": 2,
      "explanation": "Fatehpur Sikri represents Mughal architecture of the late 16th century. Built by Emperor Akbar as his capital (1571-1585), it showcases the synthesis of Indian, Persian, and Islamic architectural elements. The complex includes the Jama Masjid with its impressive Buland Darwaza, the Panch Mahal palace, and the Tomb of Salim Chishti. This UNESCO World Heritage Site demonstrates the architectural innovations of the early Mughal period and Akbar's syncretic approach to culture.",
      "difficulty": "Medium",
      "hint": "This was built by Emperor Akbar"
    },
    {
      "level": 162,
      "mainsubject": "Culture & Society",
      "question": "Which constitutional provision deals with the protection of interests of minorities?",
      "options": [
        "Article 29-30",
        "Article 25-28",
        "Article 14-18",
        "Article 19-22"
      ],
      "correctAnswer": 1,
      "explanation": "Articles 29-30 of the Indian Constitution deal with the protection of interests of minorities. Article 29 protects the interests of minorities by ensuring the right of any section of citizens to conserve their distinct language, script, or culture. Article 30 gives minorities the right to establish and administer educational institutions of their choice. These provisions are part of the Cultural and Educational Rights and aim to preserve the diversity and plurality of Indian society.",
      "difficulty": "Medium",
      "hint": "These articles fall under Cultural and Educational Rights"
    },
    {
      "level": 163,
      "mainsubject": "Culture & Society",
      "question": "The Lingaraj Temple in Bhubaneswar represents which architectural style?",
      "options": [
        "Kalinga",
        "Dravida",
        "Vesara",
        "Gupta"
      ],
      "correctAnswer": 1,
      "explanation": "The Lingaraj Temple in Bhubaneswar represents the Kalinga architectural style, a regional variant of the Nagara style. Built in the 11th century during the reign of King Jajati Keshari, it is dedicated to Lord Shiva. The temple features the characteristic Kalinga elements including the tall curvilinear shikhara (deula), the jagamohana (assembly hall), and intricate sculptural decoration. It represents the mature phase of Odishan temple architecture and is considered one of the finest examples of Kalinga style.",
      "difficulty": "Medium",
      "hint": "This style is specific to Odisha"
    },
    {
      "level": 164,
      "mainsubject": "Culture & Society",
      "question": "Pampa, known as the first poet of Kannada literature, wrote which famous work?",
      "options": [
        "Vikramarjuna Vijaya",
        "Adipurana",
        "Both A and B",
        "Jaimini Bharata"
      ],
      "correctAnswer": 3,
      "explanation": "Pampa (902-975 CE), known as the 'Adikavi' (first poet) of Kannada literature, wrote both 'Vikramarjuna Vijaya' (also known as Pampa Bharata) and 'Adipurana.' The Vikramarjuna Vijaya is based on the Mahabharata, focusing on Arjuna's story, while Adipurana deals with the life of the first Jain Tirthankara, Rishabhanatha. Pampa is considered one of the 'ratnatraya' (three gems) of ancient Kannada literature along with Ponna and Ranna.",
      "difficulty": "Hard",
      "hint": "He is called 'Adikavi' of Kannada"
    },
    {
      "level": 165,
      "mainsubject": "Culture & Society",
      "question": "The Konark Sun Temple is designed in the form of a:",
      "options": [
        "Lotus",
        "Chariot",
        "Mountain",
        "Tree"
      ],
      "correctAnswer": 2,
      "explanation": "The Konark Sun Temple is designed in the form of a colossal chariot dedicated to the sun god Surya. The temple has 24 intricately carved stone wheels representing the 24 hours of a day, and is pulled by seven horses representing the days of the week. This 13th-century architectural marvel in Odisha symbolizes the passage of time and Surya's journey across the sky. The wheels are not merely decorative but also function as sundials, showing the precise time of day.",
      "difficulty": "Easy",
      "hint": "This represents Surya's vehicle"
    },
    {
      "level": 166,
      "mainsubject": "Culture & Society",
      "question": "Which social reform movement was led by Jyotirao Phule in Maharashtra?",
      "options": [
        "Prarthana Samaj",
        "Satyashodhak Samaj",
        "Arya Samaj",
        "Brahmo Samaj"
      ],
      "correctAnswer": 2,
      "explanation": "Jyotirao Phule led the Satyashodhak Samaj (Truth-seekers' Society) founded in 1873 in Maharashtra. This social reform movement aimed to achieve equal rights for people from lower castes and worked against Brahmanical orthodoxy. Phule advocated for education of women and lower castes, opposed caste-based discrimination, and promoted rational thinking. The movement played a significant role in creating social awareness and laid the foundation for later social reform movements in Maharashtra.",
      "difficulty": "Medium",
      "hint": "This society was founded to seek truth and equality"
    },
    {
      "level": 167,
      "mainsubject": "Culture & Society",
      "question": "The Brihadeeswarar Temple at Thanjavur was built during which dynasty?",
      "options": [
        "Pallava",
        "Chola",
        "Pandya",
        "Chera"
      ],
      "correctAnswer": 2,
      "explanation": "The Brihadeeswarar Temple at Thanjavur was built during the Chola dynasty by Raja Raja Chola I and completed in 1010 CE. This UNESCO World Heritage Site is one of the largest temples in India and represents the pinnacle of Dravidian architecture. The temple is famous for its massive vimana (tower) reaching 216 feet, the huge Nandi statue, and the architectural feat of its construction without using any binding material. It demonstrates the Cholas' architectural genius and devotional fervor.",
      "difficulty": "Easy",
      "hint": "This dynasty was known for maritime trade"
    },
    {
      "level": 168,
      "mainsubject": "Culture & Society",
      "question": "Which Article of the Indian Constitution prohibits discrimination on grounds of religion, race, caste, sex, or place of birth?",
      "options": [
        "Article 14",
        "Article 15",
        "Article 16",
        "Article 17"
      ],
      "correctAnswer": 2,
      "explanation": "Article 15 of the Indian Constitution prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. This article ensures that the State cannot discriminate against any citizen and also prevents discrimination in places of public accommodation. However, it allows for special provisions for women, children, and socially and educationally backward classes. Article 15 is a cornerstone of equality and non-discrimination in the Indian Constitution.",
      "difficulty": "Medium",
      "hint": "This article deals with prohibition of discrimination"
    },
    {
      "level": 169,
      "mainsubject": "Culture & Society",
      "question": "The Kailasa Temple at Ellora is dedicated to which Hindu deity?",
      "options": [
        "Vishnu",
        "Shiva",
        "Brahma",
        "Devi"
      ],
      "correctAnswer": 2,
      "explanation": "The Kailasa Temple at Ellora is dedicated to Lord Shiva and represents Mount Kailash, his abode. This 8th-century monolithic temple carved from a single rock is considered one of the most remarkable architectural achievements in the world. Built during the Rashtrakuta period, it features intricate sculptures depicting Shiva in various forms, scenes from Hindu epics, and elaborate architectural details. The temple complex includes the main shrine, Nandi mandapa, and various subsidiary shrines.",
      "difficulty": "Easy",
      "hint": "This temple represents the abode of this deity"
    },
    {
      "level": 170,
      "mainsubject": "Culture & Society",
      "question": "The Anubhava Mantapa was an academy of mystics established during which movement?",
      "options": [
        "Bhakti movement",
        "Vachana movement",
        "Sufi movement",
        "Advaita movement"
      ],
      "correctAnswer": 2,
      "explanation": "Anubhava Mantapa was an academy of mystics, saints, and philosophers established during the Vachana movement in 12th century Karnataka. It was founded by Basavanna and served as a platform for spiritual discussions and social reform. Allama Prabhu served as its spiritual head, and it attracted saints like Akka Mahadevi and other Sharanas. The Mantapa functioned as a parliament of mystics where questions of religion, philosophy, and social reform were discussed through the medium of vachanas.",
      "difficulty": "Medium",
      "hint": "This was a parliament of mystics"
    },
    {
      "level": 171,
      "mainsubject": "Culture & Society",
      "question": "Which classical dance form is known for its martial arts elements?",
      "options": [
        "Kathakali",
        "Kalarippayattu",
        "Kuchipudi",
        "Manipuri"
      ],
      "correctAnswer": 1,
      "explanation": "Kathakali is known for incorporating martial arts elements in its training and performance. This classical dance-drama from Kerala requires extensive physical training similar to martial arts, including rigorous exercises for flexibility, stamina, and muscle control. The dance form draws from Kalarippayattu (Kerala's martial art) for its physical training methods. Kathakali performers undergo years of training to master the complex choreography, facial expressions, and the physical demands of the elaborate costumes.",
      "difficulty": "Medium",
      "hint": "This Kerala dance form requires martial arts training"
    },
    {
      "level": 172,
      "mainsubject": "Culture & Society",
      "question": "The Vidhana Soudha in Bangalore represents which architectural style?",
      "options": [
        "Neo-Dravidian",
        "Indo-Saracenic",
        "Gothic Revival",
        "Modernist"
      ],
      "correctAnswer": 1,
      "explanation": "The Vidhana Soudha in Bangalore represents Neo-Dravidian architecture combined with Indo-Saracenic elements. Completed in 1956 and designed by Kengal Hanumanthaiah, it serves as the seat of the Karnataka State Legislature. The building incorporates traditional South Indian architectural elements like pillared halls, courtyards, and decorative features while using modern construction techniques. It's often called the 'Taj Mahal of South India' for its grandeur and architectural significance.",
      "difficulty": "Medium",
      "hint": "This style revives traditional South Indian elements"
    },
    {
      "level": 173,
      "mainsubject": "Culture & Society",
      "question": "Dr. B.R. Ambedkar is known as the father of which important document?",
      "options": [
        "Indian Constitution",
        "Hindu Code Bill",
        "Government of India Act",
        "Poona Pact"
      ],
      "correctAnswer": 1,
      "explanation": "Dr. B.R. Ambedkar is known as the 'Father of the Indian Constitution' for his pivotal role as the Chairman of the Drafting Committee of the Constituent Assembly. He played a crucial role in framing the Constitution, ensuring provisions for equality, justice, and protection of minorities and marginalized communities. His legal expertise and commitment to social justice shaped many fundamental rights and directive principles in the Constitution, making it a document that promotes equality and human dignity.",
      "difficulty": "Easy",
      "hint": "He chaired the Drafting Committee"
    },
    {
      "level": 174,
      "mainsubject": "Culture & Society",
      "question": "The Chennakesava Temple at Belur took how many years to complete?",
      "options": [
        "50 years",
        "75 years",
        "103 years",
        "150 years"
      ],
      "correctAnswer": 3,
      "explanation": "The Chennakesava Temple at Belur took 103 years to complete. Construction began during the reign of King Vishnuvardhana in the early 12th century and continued through successive generations of Hoysala rulers. This extended construction period allowed for the incredibly intricate and detailed stone carvings that make the temple one of the finest examples of Hoysala architecture. The long construction period also explains the temple's architectural perfection and the unique sculptural details that cover its walls.",
      "difficulty": "Hard",
      "hint": "It took more than a century to build"
    },
    {
      "level": 175,
      "mainsubject": "Culture & Society",
      "question": "Which UNESCO World Heritage site showcases the coexistence of three major religions?",
      "options": [
        "Ajanta Caves",
        "Ellora Caves",
        "Elephanta Caves",
        "Sanchi Stupa"
      ],
      "correctAnswer": 2,
      "explanation": "Ellora Caves showcase the coexistence of three major religions - Buddhism, Hinduism, and Jainism. The 34 caves were carved between the 5th and 13th centuries and represent the religious tolerance of ancient India. The complex includes 12 Buddhist caves (5th-7th centuries), 17 Hindu caves (6th-8th centuries), and 5 Jain caves (8th-13th centuries). This unique representation of religious diversity in a single site makes Ellora exceptional in demonstrating India's pluralistic spiritual heritage.",
      "difficulty": "Easy",
      "hint": "This site has Buddhist, Hindu, and Jain caves"
    },
    {
      "level": 176,
      "mainsubject": "Culture & Society",
      "question": "The Self-Respect Movement was primarily associated with which region of India?",
      "options": [
        "Tamil Nadu",
        "Kerala",
        "Andhra Pradesh",
        "Karnataka"
      ],
      "correctAnswer": 1,
      "explanation": "The Self-Respect Movement was primarily associated with Tamil Nadu and was led by E.V. Ramasamy (Periyar). Founded in 1925, this movement aimed to achieve social equality and self-respect for non-Brahmins, particularly those from lower castes. The movement advocated rational thinking, opposed caste-based discrimination, promoted women's rights, and encouraged education for all sections of society. It had a significant impact on Tamil Nadu's social and political landscape.",
      "difficulty": "Medium",
      "hint": "This movement was led by Periyar"
    },
    {
      "level": 177,
      "mainsubject": "Culture & Society",
      "question": "Which Kannada literary work is considered the first novel in the language?",
      "options": [
        "Indira Bai",
        "Suryakanta",
        "Indulekha",
        "Muddana"
      ],
      "correctAnswer": 1,
      "explanation": "'Indira Bai' by Gulvadi Venkata Rao, published in 1899, is considered the first novel in Kannada literature. This work marked the beginning of modern Kannada prose fiction and dealt with social issues of the time. The novel addressed themes of social reform, education, and women's empowerment, reflecting the influence of the social reform movements of the late 19th century. It established the foundation for the development of the novel as a literary form in Kannada.",
      "difficulty": "Hard",
      "hint": "This 1899 work began modern Kannada fiction"
    },
    {
      "level": 178,
      "mainsubject": "Culture & Society",
      "question": "The Group of Monuments at Hampi was the capital of which empire?",
      "options": [
        "Bahmani Sultanate",
        "Vijayanagara Empire",
        "Mysore Kingdom",
        "Maratha Empire"
      ],
      "correctAnswer": 2,
      "explanation": "The Group of Monuments at Hampi was the capital of the Vijayanagara Empire from the 14th to 16th centuries. This UNESCO World Heritage Site contains the ruins of the last great Hindu kingdom in South India, which was destroyed in 1565 by the Deccan sultanates. The monuments showcase Vijayanagara architecture with temples, palaces, market streets, and fortifications. The Vitthala Temple with its musical pillars and stone chariot is the most famous structure representing the empire's architectural achievements.",
      "difficulty": "Easy",
      "hint": "This empire was the last great Hindu kingdom of South India"
    },
    {
      "level": 179,
      "mainsubject": "Culture & Society",
      "question": "Which fundamental right allows citizens to practice and propagate their religion?",
      "options": [
        "Right to Freedom",
        "Right to Equality",
        "Right to Freedom of Religion",
        "Cultural and Educational Rights"
      ],
      "correctAnswer": 3,
      "explanation": "The Right to Freedom of Religion (Articles 25-28) allows citizens to practice and propagate their religion. Article 25 specifically guarantees the freedom of conscience and the right to freely profess, practice, and propagate religion. Article 26 provides the right to manage religious affairs, Article 27 prohibits taxation for promoting any religion, and Article 28 deals with freedom from religious instruction in educational institutions. These provisions ensure religious liberty and secular governance.",
      "difficulty": "Easy",
      "hint": "Articles 25-28 deal with this right"
    },
    {
      "level": 180,
      "mainsubject": "Culture & Society",
      "question": "The 'Ganga-Jamuni Tehzeeb' refers to which cultural synthesis?",
      "options": [
        "Hindu-Buddhist",
        "Hindu-Islamic",
        "Buddhist-Jain",
        "Christian-Hindu"
      ],
      "correctAnswer": 2,
      "explanation": "'Ganga-Jamuni Tehzeeb' refers to the Hindu-Islamic cultural synthesis that developed in North India, particularly in the Gangetic plains where the Ganga and Yamuna (Jamuna) rivers flow. This composite culture represents the harmonious blending of Hindu and Islamic traditions in art, architecture, music, literature, language, and social customs. It reflects the cultural integration that occurred over centuries of coexistence, creating a unique Indo-Islamic civilization that enriched both traditions.",
      "difficulty": "Medium",
      "hint": "This synthesis is named after two sacred rivers"
    },
    {
      "level": 181,
      "mainsubject": "Culture & Society",
      "question": "Purandara Dasa is considered the father of which musical tradition?",
      "options": [
        "Hindustani music",
        "Carnatic music",
        "Dhrupad",
        "Thumri"
      ],
      "correctAnswer": 2,
      "explanation": "Purandara Dasa (1484-1564) is considered the father of Carnatic music. This saint-composer from Karnataka systematized the method of Carnatic music instruction, created the basic lesson structure (sarali varisai, janta varisai, etc.), and composed numerous devotional songs in Kannada. He established the pedagogy of Carnatic music that is still followed today and is credited with composing over 475,000 songs, though only a few hundred survive. His contributions laid the foundation for the systematic teaching and learning of South Indian classical music.",
      "difficulty": "Medium",
      "hint": "He systematized South Indian classical music"
    },
    {
      "level": 182,
      "mainsubject": "Culture & Society",
      "question": "The Mandal Commission Report primarily dealt with which social issue?",
      "options": [
        "Women's rights",
        "Minority rights",
        "OBC reservation",
        "Tribal welfare"
      ],
      "correctAnswer": 3,
      "explanation": "The Mandal Commission Report, submitted in 1980 by the Socially and Educationally Backward Classes Commission headed by B.P. Mandal, primarily dealt with OBC (Other Backward Classes) reservation. The report recommended 27% reservation for OBCs in government jobs and educational institutions. Its implementation in 1990 led to significant social and political changes, expanding the scope of affirmative action beyond SCs and STs to include a broader section of socially and educationally backward communities.",
      "difficulty": "Medium",
      "hint": "This report expanded reservation beyond SC/ST"
    },
    {
      "level": 183,
      "mainsubject": "Culture & Society",
      "question": "The Red Fort in Delhi represents which architectural style?",
      "options": [
        "Mughal",
        "Indo-Islamic",
        "Persian",
        "All of the above"
      ],
      "correctAnswer": 4,
      "explanation": "The Red Fort (Lal Qila) in Delhi represents all these architectural styles - Mughal, Indo-Islamic, and Persian - as they are interconnected. Built by Shah Jahan (1638-1648), it showcases Mughal architecture, which is essentially a synthesis of Indo-Islamic elements with Persian influences. The fort features characteristic Mughal elements like red sandstone construction, Persian gardens (charbagh), intricate inlay work, and the fusion of Indian craftsmanship with Islamic architectural principles and Persian aesthetic sensibilities.",
      "difficulty": "Medium",
      "hint": "Mughal architecture combines multiple influences"
    },
    {
      "level": 184,
      "mainsubject": "Culture & Society",
      "question": "Which social reformer was known for founding the Widow Remarriage Association?",
      "options": [
        "Ishwar Chandra Vidyasagar",
        "Dayananda Saraswati",
        "Keshab Chandra Sen",
        "Raja Ram Mohan Roy"
      ],
      "correctAnswer": 1,
      "explanation": "Ishwar Chandra Vidyasagar founded the Widow Remarriage Association and was instrumental in the passage of the Widow Remarriage Act of 1856. A social reformer, educationist, and writer from Bengal, Vidyasagar campaigned vigorously for widow remarriage, women's education, and against child marriage. He used ancient Sanskrit texts to argue that widow remarriage was sanctioned by Hindu scriptures, thus challenging orthodox Hindu society while staying within the framework of traditional texts.",
      "difficulty": "Medium",
      "hint": "He was known for his work on widow remarriage"
    },
    {
      "level": 185,
      "mainsubject": "Culture & Society",
      "question": "The Jataka tales, depicted in Buddhist art, primarily narrate stories about:",
      "options": [
        "Buddha's teachings",
        "Buddha's previous births",
        "Buddhist monks",
        "Buddhist kingdoms"
      ],
      "correctAnswer": 2,
      "explanation": "The Jataka tales primarily narrate stories about Buddha's previous births and the moral lessons from his various incarnations before attaining enlightenment. These stories, numbering over 500, depict the Bodhisattva's journey through different lives as animals, humans, and divine beings, emphasizing virtues like compassion, wisdom, and self-sacrifice. Jataka tales are extensively depicted in Buddhist art, including the famous frescoes at Ajanta Caves, and serve both as entertainment and moral instruction.",
      "difficulty": "Easy",
      "hint": "These stories show Buddha's journey across many lives"
    },
    {
      "level": 186,
      "mainsubject": "Culture & Society",
      "question": "The concept of 'Sarvodaya' was associated with which leader?",
      "options": [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Vinoba Bhave",
        "Jayaprakash Narayan"
      ],
      "correctAnswer": 1,
      "explanation": "'Sarvodaya' (welfare of all) was a concept associated with Mahatma Gandhi, though it was later actively promoted by Vinoba Bhave and Jayaprakash Narayan. Gandhi adapted this term from John Ruskin's 'Unto This Last' and used it to describe his vision of an ideal society based on truth, non-violence, and social justice. The Sarvodaya movement aimed at the upliftment of all sections of society, particularly the weakest, and emphasized moral and spiritual transformation alongside socio-economic development.",
      "difficulty": "Medium",
      "hint": "This concept means 'welfare of all'"
    },
    {
      "level": 187,
      "mainsubject": "Culture & Society",
      "question": "Which temple architecture style is characterized by star-shaped ground plans?",
      "options": [
        "Nagara",
        "Dravida",
        "Vesara",
        "Kalinga"
      ],
      "correctAnswer": 3,
      "explanation": "Vesara temple architecture style is characterized by star-shaped ground plans, particularly seen in Hoysala temples. This unique stellate (star-shaped) plan creates multiple angles and projections, allowing for elaborate sculptural decoration on the exterior walls. The Hoysala temples at Belur, Halebidu, and Somnathpura are prime examples of this architectural innovation. The star-shaped design not only enhances the aesthetic appeal but also provides more surface area for intricate stone carvings that are the hallmark of Hoysala architecture.",
      "difficulty": "Medium",
      "hint": "This style is especially seen in Hoysala temples"
    },
    {
      "level": 188,
      "mainsubject": "Culture & Society",
      "question": "The Chipko Movement was primarily concerned with:",
      "options": [
        "Forest conservation",
        "Women's rights",
        "Tribal rights",
        "Water conservation"
      ],
      "correctAnswer": 1,
      "explanation": "The Chipko Movement was primarily concerned with forest conservation and the protection of trees from indiscriminate felling. Started in the 1970s in the hill regions of Uttarakhand (then part of Uttar Pradesh), this environmental movement involved villagers, particularly women, hugging trees to prevent their cutting. Led by activists like Sunderlal Bahuguna and Chandi Prasad Bhatt, the movement highlighted the ecological importance of forests and the rights of local communities over forest resources.",
      "difficulty": "Easy",
      "hint": "People hugged trees to save them"
    },
    {
      "level": 189,
      "mainsubject": "Culture & Society",
      "question": "Which Jain Tirthankara is associated with the concept of Ahimsa?",
      "options": [
        "Rishabhanatha",
        "Mahavira",
        "Parsva",
        "All of the above"
      ],
      "correctAnswer": 4,
      "explanation": "All Jain Tirthankaras are associated with the concept of Ahimsa (non-violence), which is the fundamental principle of Jainism. However, Mahavira (24th Tirthankara) is most prominently known for systematizing and emphasizing Ahimsa. Parsva (23rd Tirthankara) also preached non-violence, and Rishabhanatha (1st Tirthankara) is traditionally credited with establishing the principle. Ahimsa in Jainism extends to all living beings and forms the core of Jain ethics and philosophy.",
      "difficulty": "Medium",
      "hint": "Ahimsa is central to all Jain teachings"
    },
    {
      "level": 190,
      "mainsubject": "Culture & Society",
      "question": "The Asiatic Society was founded by which British scholar?",
      "options": [
        "William Jones",
        "Max Mueller",
        "James Prinsep",
        "Alexander Cunningham"
      ],
      "correctAnswer": 1,
      "explanation": "The Asiatic Society was founded by Sir William Jones in 1784 in Calcutta (now Kolkata). Also known as the Asiatic Society of Bengal, it was established to promote Oriental research and the study of Asian cultures, languages, and history. Jones, a linguist and jurist, made significant contributions to understanding Sanskrit and Indian culture. The society played a crucial role in documenting and preserving Indian heritage and was instrumental in the development of Indology as an academic discipline.",
      "difficulty": "Medium",
      "hint": "He was a linguist who studied Sanskrit"
    },
    {
      "level": 191,
      "mainsubject": "Culture & Society",
      "question": "The Somnath Temple is located in which Indian state?",
      "options": [
        "Rajasthan",
        "Gujarat",
        "Maharashtra",
        "Madhya Pradesh"
      ],
      "correctAnswer": 2,
      "explanation": "The Somnath Temple is located in Gujarat, on the western coast near Veraval. Dedicated to Lord Shiva, it is one of the twelve Jyotirlinga shrines and holds great religious significance in Hinduism. The temple has been destroyed and rebuilt several times throughout history. The current structure was reconstructed after India's independence and represents the resilience of Indian cultural and religious traditions. It stands as a symbol of faith and the continuity of Hindu temple architecture.",
      "difficulty": "Easy",
      "hint": "This temple is located on the western coast"
    },
    {
      "level": 192,
      "mainsubject": "Culture & Society",
      "question": "Which Article of the Constitution abolishes untouchability?",
      "options": [
        "Article 15",
        "Article 16",
        "Article 17",
        "Article 18"
      ],
      "correctAnswer": 3,
      "explanation": "Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form. It declares that 'untouchability' is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of untouchability shall be an offense punishable in accordance with law. This article is a significant step toward ensuring dignity and equality for all citizens, particularly those who were historically discriminated against based on caste.",
      "difficulty": "Easy",
      "hint": "This article specifically deals with untouchability"
    },
    {
      "level": 193,
      "mainsubject": "Culture & Society",
      "question": "The Thanjavur painting style originated during which period?",
      "options": [
        "Chola period",
        "Vijayanagara period",
        "Maratha period",
        "British period"
      ],
      "correctAnswer": 3,
      "explanation": "The Thanjavur painting style originated during the Maratha period in the late 16th to early 18th centuries when the Marathas ruled Thanjavur under the Bhonsle dynasty. This classical South Indian painting style is characterized by rich colors, surface richness, compact composition, and the use of gold foil. The paintings typically depict Hindu gods and goddesses, saints, and mythological characters. The style combines Deccani, Vijayanagara, and European influences, creating a unique artistic tradition.",
      "difficulty": "Hard",
      "hint": "This style developed under the Bhonsle rulers"
    },
    {
      "level": 194,
      "mainsubject": "Culture & Society",
      "question": "Which movement aimed at the political unification of all Kannada-speaking areas?",
      "options": [
        "Gokak Chaluvali",
        "Ekikarana Movement",
        "Kaveri Protest",
        "Cauvery Movement"
      ],
      "correctAnswer": 2,
      "explanation": "The Ekikarana Movement (Unification Movement) aimed at the political unification of all Kannada-speaking areas into a single state. This movement, active from the early 20th century, sought to bring together Kannada-speaking regions scattered across different princely states and British provinces. The movement succeeded when Karnataka was formed in 1956 by uniting the Kannada-speaking areas from the erstwhile Mysore state, Bombay Presidency, Madras Presidency, and Hyderabad state. November 1st is celebrated as Karnataka Rajyotsava to commemorate this unification.",
      "difficulty": "Medium",
      "hint": "This movement led to the formation of Karnataka"
    },
    {
      "level": 195,
      "mainsubject": "Culture & Society",
      "question": "The classical dance form Mohiniyattam is performed predominantly by:",
      "options": [
        "Male dancers",
        "Female dancers",
        "Both male and female dancers",
        "Children only"
      ],
      "correctAnswer": 2,
      "explanation": "Mohiniyattam is performed predominantly by female dancers. This classical dance form from Kerala embodies the feminine aspect (lasya) of dance and is traditionally associated with women. The name 'Mohiniyattam' means 'dance of the enchantress,' referring to the feminine form (Mohini) that Lord Vishnu assumed. The dance emphasizes grace, elegance, and subtle expressions, making it particularly suited to feminine presentation, though contemporary practice may include male dancers in some contexts.",
      "difficulty": "Easy",
      "hint": "This dance represents feminine grace"
    },
    {
      "level": 196,
      "mainsubject": "Culture & Society",
      "question": "Which Sikh Guru compiled the Adi Granth?",
      "options": [
        "Guru Nanak",
        "Guru Angad",
        "Guru Arjan Dev",
        "Guru Gobind Singh"
      ],
      "correctAnswer": 3,
      "explanation": "Guru Arjan Dev, the fifth Sikh Guru, compiled the Adi Granth in 1604. This sacred scripture contained hymns of the first five Sikh Gurus along with selected writings of Hindu and Muslim saints like Kabir, Namdev, and others. The compilation was done at Amritsar and represented the inclusive philosophy of Sikhism. Later, Guru Gobind Singh added the hymns of Guru Tegh Bahadur, and this final version became known as the Guru Granth Sahib, the eternal Guru of the Sikhs.",
      "difficulty": "Medium",
      "hint": "He was the fifth Sikh Guru"
    },
    {
      "level": 197,
      "mainsubject": "Culture & Society",
      "question": "The practice of Sati was abolished by which Act?",
      "options": [
        "Bengal Sati Regulation, 1829",
        "Hindu Widow Remarriage Act, 1856",
        "Age of Consent Act, 1891",
        "Special Marriage Act, 1954"
      ],
      "correctAnswer": 1,
      "explanation": "The practice of Sati was abolished by the Bengal Sati Regulation, 1829, enacted by Governor-General Lord William Bentinck. This legislation was the result of sustained campaign by social reformers, particularly Raja Ram Mohan Roy, who used scriptural arguments to prove that Sati was not mandated by Hindu religion. The Act declared the practice of Sati as illegal and punishable by courts as culpable homicide, marking a significant step in social reform during the colonial period.",
      "difficulty": "Medium",
      "hint": "This Act was passed by Lord William Bentinck"
    },
    {
      "level": 198,
      "mainsubject": "Culture & Society",
      "question": "The Ajanta Caves primarily belong to which Buddhist school?",
      "options": [
        "Theravada and Mahayana",
        "Hinayana only",
        "Mahayana only",
        "Vajrayana"
      ],
      "correctAnswer": 1,
      "explanation": "The Ajanta Caves primarily belong to both Theravada (also called Hinayana) and Mahayana schools of Buddhism. The earlier caves (2nd-1st centuries BCE) were created by Theravada Buddhists and focus on the Buddha's life and teachings. The later caves (5th-6th centuries CE) were created during the Vakataka period by Mahayana Buddhists and include elaborate paintings and sculptures depicting Bodhisattvas and various Buddhist deities. This evolution reflects the transformation of Buddhist philosophy and artistic expression over time.",
      "difficulty": "Medium",
      "hint": "These caves show the evolution of Buddhist schools"
    },
    {
      "level": 199,
      "mainsubject": "Culture & Society",
      "question": "Which Karnataka ruler was known for his patronage of arts and literature and called 'Abhinava Bharata'?",
      "options": [
        "Tipu Sultan",
        "Krishnaraja Wodeyar IV",
        "Hyder Ali",
        "Chikka Devaraja Wodeyar"
      ],
      "correctAnswer": 2,
      "explanation": "Krishnaraja Wodeyar IV (1884-1940), the Maharaja of Mysore, was known for his patronage of arts and literature and was called 'Abhinava Bharata' (Modern India). He was a great patron of music, arts, and literature, and under his rule, Mysore became a center of cultural renaissance. He supported the Kannada language and literature, established educational institutions, and promoted various art forms. His court attracted musicians, artists, and scholars from across India, making Mysore a cultural hub in South India.",
      "difficulty": "Hard",
      "hint": "He was called 'Modern India' for his progressive outlook"
    },
    {
      "level": 200,
      "mainsubject": "Culture & Society",
      "question": "The Buddhist concept of 'Middle Path' refers to:",
      "options": [
        "A moderate approach to meditation",
        "The path between extreme asceticism and indulgence",
        "The middle section of Buddhist scriptures",
        "A geographical route"
      ],
      "correctAnswer": 2,
      "explanation": "The Buddhist concept of 'Middle Path' (Madhyama Pratipad) refers to the path between extreme asceticism and sensual indulgence. Buddha discovered this approach after experiencing both extreme luxury as a prince and severe austerities as an ascetic, finding that neither led to enlightenment. The Middle Path advocates moderation in all aspects of life and is embodied in the Noble Eightfold Path, which provides a balanced approach to spiritual development without falling into extremes of self-mortification or self-indulgence.",
      "difficulty": "Medium",
      "hint": "Buddha found this path after rejecting extremes"
    },
    {
      "level": 201,
      "mainsubject": "Culture & Society",
      "question": "Which social evil was the primary target of the Arya Samaj movement?",
      "options": [
        "Child marriage",
        "Idol worship and caste system",
        "Sati practice",
        "Widow remarriage prohibition"
      ],
      "correctAnswer": 2,
      "explanation": "Idol worship and the caste system were the primary targets of the Arya Samaj movement founded by Dayananda Saraswati in 1875. The movement advocated a return to the vedic religion and opposed idol worship, ritualistic practices, caste-based discrimination, and the authority of Brahmins as intermediaries. Arya Samaj promoted the slogan 'Back to the Vedas' and emphasized the worship of one formless God. The movement also supported education for all, women's rights, and social equality based on merit rather than birth.",
      "difficulty": "Medium",
      "hint": "This movement advocated 'Back to the Vedas'"
    },
    {
      "level": 202,
      "mainsubject": "Culture & Society",
      "question": "The Natyashastra describes how many types of classical dance?",
      "options": [
        "Four major types",
        "Eight classical forms",
        "General principles applicable to all",
        "Twelve regional styles"
      ],
      "correctAnswer": 3,
      "explanation": "The Natyashastra describes general principles applicable to all forms of classical dance rather than specifying a particular number of distinct dance types. This ancient treatise by Bharata Muni provides the theoretical foundation for Indian performing arts, including detailed descriptions of movements, expressions, rhythms, and emotions (rasas) that form the basis of all Indian classical dance forms. The eight classical dance forms recognized today (Bharatanatyam, Kathak, Kathakali, Kuchipudi, Manipuri, Mohiniyattam, Odissi, Sattriya) all derive their principles from this foundational text.",
      "difficulty": "Hard",
      "hint": "This text provides universal principles for dance"
    },
     {
    "level": 203,
    "mainsubject": "Culture & Society",
    "question": "The 'Navodaya' literary movement in Kannada literature, which marked a renaissance period, was heavily influenced by:",
    "options": [
      "French Surrealism",
      "Russian Realism",
      "English Romanticism",
      "Latin American Magical Realism"
    ],
    "correctAnswer": 3,
    "explanation": "The **Navodaya** (meaning 'renaissance' or 'new birth') movement in the early 20th century was profoundly influenced by **English Romanticism**. Writers like B. M. Srikantayya (B. M. Sri), considered the father of the movement, and Kuvempu drew inspiration from poets like Wordsworth, Shelley, and Keats. Their works emphasized emotion, nature, individualism, and a glorification of Karnataka's past. This was a shift from the older, more classical and religious forms of literature.",
    "difficulty": "Hard",
    "hint": "Think about the European literary movement that celebrated nature and emotion."
  },
  {
    "level": 204,
    "mainsubject": "Culture & Society",
    "question": "What is 'Togalu Gombeyaata', a traditional art form from Karnataka?",
    "options": [
      "A form of ritualistic martial art",
      "A vibrant folk dance performed during harvests",
      "A type of string puppetry",
      "An ancient form of leather shadow puppetry"
    ],
    "correctAnswer": 4,
    "explanation": "**Togalu Gombeyaata** is a unique and ancient form of **leather shadow puppetry**. 'Togalu' means leather and 'Gombeyaata' means puppet dance. Artisans create intricate puppets from deer or goat skin, which are then colored and projected onto a backlit screen. The puppeteers narrate stories from epics like the Ramayana and Mahabharata, making it a complete audio-visual experience. It is one of the most cherished folk theatre forms of the region.",
    "difficulty": "Medium",
    "hint": "The name literally translates to 'leather puppet dance'."
  },
  {
    "level": 205,
    "mainsubject": "Culture & Society",
    "question": "The Provisions of the Panchayats (Extension to Scheduled Areas) Act, 1996, or PESA, is a crucial law that aims to:",
    "options": [
      "Provide reservation for tribal communities in the Parliament.",
      "Ensure self-governance through traditional Gram Sabhas for tribal populations.",
      "Allocate special funds for the economic development of Scheduled Areas.",
      "Create a separate judicial system for tribal communities."
    ],
    "correctAnswer": 2,
    "explanation": "The **PESA Act** is a landmark piece of legislation that legally recognizes the right of tribal communities in 'Scheduled Areas' to govern themselves through their own systems of self-government. It acknowledges the **Gram Sabha** (village assembly) as the ultimate authority on matters concerning their traditions, resources, and disputes. The act empowers them to manage community resources like land, water, and forests, thereby preserving their cultural identity and preventing exploitation.",
    "difficulty": "Hard",
    "hint": "This act empowers the Gram Sabha in tribal areas."
  },
  {
    "level": 206,
    "mainsubject": "Culture & Society",
    "question": "The 'Gharana' system is a distinctive feature of which form of Indian classical music?",
    "options": [
      "Carnatic Vocal",
      "Hindustani Classical",
      "Sopana Sangeetham",
      "Rabindra Sangeet"
    ],
    "correctAnswer": 2,
    "explanation": "The **Gharana** system is a cornerstone of **Hindustani classical music**. A gharana is a community of performers who share a distinct musical style that is passed down through generations in a guru-shishya parampara (teacher-disciple tradition). Each gharana, like the Gwalior, Agra, Kirana, and Jaipur gharanas, has its unique approach to raga interpretation, voice production, and rhythm. Carnatic music does not have a similar gharana system, focusing more on individual composer lineages.",
    "difficulty": "Medium",
    "hint": "This musical tradition is prevalent in North India."
  },
  {
    "level": 207,
    "mainsubject": "Culture & Society",
    "question": "Kittur Rani Chennamma, a celebrated figure in Karnataka's history, led one of the earliest armed rebellions against whom?",
    "options": [
      "The Mughal Empire",
      "The Maratha Confederacy",
      "The British East India Company",
      "The Nizam of Hyderabad"
    ],
    "correctAnswer": 3,
    "explanation": "**Kittur Rani Chennamma** was the queen of the princely state of Kittur in Karnataka. In 1824, she led an armed rebellion against the **British East India Company** in defiance of the **Doctrine of Lapse**. This was three decades before the famous Revolt of 1857, making her one of the first Indian rulers to resist British rule. Her bravery and leadership have made her an icon of the Indian independence movement, especially in Karnataka.",
    "difficulty": "Medium",
    "hint": "Her rebellion was against the implementation of the Doctrine of Lapse."
  },
  {
    "level": 208,
    "mainsubject": "Culture & Society",
    "question": "Which of the following has been accorded a Geographical Indication (GI) tag for its unique floral aroma and is famously associated with the city of Mysuru?",
    "options": [
      "Mysore Mallige (Jasmine)",
      "Udupi Mallige (Jasmine)",
      "Hadagali Mallige (Jasmine)",
      "Bangalore Rose Onion"
    ],
    "correctAnswer": 1,
    "explanation": "**Mysore Mallige** is the variety of jasmine that has received a GI tag for its distinct, long-lasting fragrance. It is grown primarily in and around the Mysuru district. The GI tag recognizes its unique qualities derived from the specific agro-climatic conditions of the region. While **Udupi Mallige** and **Hadagali Mallige** are also famous GI-tagged jasmine varieties from Karnataka, it is the Mysore Mallige that is most famously linked with the city of Mysuru.",
    "difficulty": "Medium",
    "hint": "This flower is integral to the cultural and religious life of the 'City of Palaces'."
  },
  {
    "level": 209,
    "mainsubject": "Culture & Society",
    "question": "The 'Sharia' law, often mentioned in discussions on religion and society, is the legal framework of which religion?",
    "options": [
      "Judaism",
      "Christianity",
      "Zoroastrianism",
      "Islam"
    ],
    "correctAnswer": 4,
    "explanation": "**Sharia** is the religious law forming part of the Islamic tradition. It is derived from the religious precepts of Islam, particularly the **Quran** (the holy book) and the **Hadith** (sayings and actions of the Prophet Muhammad). It provides guidance on all aspects of life, from rituals and worship to civil matters like marriage, inheritance, and contracts. Its application and interpretation vary significantly across different Muslim communities and countries.",
    "difficulty": "Easy",
    "hint": "This legal system is based on the teachings of the Quran."
  },
  {
    "level": 210,
    "mainsubject": "Culture & Society",
    "question": "Which ancient Indian script is the ancestor of most modern Indian scripts, including Kannada, Devanagari, and Tamil?",
    "options": [
      "Kharosthi Script",
      "Brahmi Script",
      "Sharada Script",
      "Grantha Script"
    ],
    "correctAnswer": 2,
    "explanation": "The **Brahmi script** is the mother of almost all scripts used in India, Southeast Asia, and Tibet today. The Ashokan edicts from the 3rd century BCE were written in Brahmi, providing some of the earliest examples. Over centuries, Brahmi evolved into numerous regional variants, which then developed into the modern scripts we know today. **Kharosthi** was another ancient script used in the northwest, written from right to left, but it did not give rise to later Indian scripts.",
    "difficulty": "Hard",
    "hint": "The edicts of Emperor Ashoka were predominantly written in this script."
  },
  {
    "level": 211,
    "mainsubject": "Culture & Society",
    "question": "Consider the following statements about 'Veeragase', a folk dance in Karnataka:\n1. It is a vigorous dance performed exclusively by women.\n2. The performance primarily depicts stories from the life of Lord Vishnu.\nWhich of the above statement(s) is/are correct?",
    "options": [
      "Only 1",
      "Only 2",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 4,
    "explanation": "**Both statements are incorrect.** **Veeragase** is an intense and energetic folk dance performed by **men**, primarily during the months of Shravana and Kartika and at Dasara processions. The dance is performed in honor of **Lord Shiva** and narrates stories of the Hindu deity **Veerabhadra**. It is a highly ritualistic dance that involves dancers carrying swords and large wooden plaques with the figure of Veerabhadra.",
    "difficulty": "Hard",
    "hint": "This dance form is dedicated to Lord Shiva's fierce form, Veerabhadra."
  },
  {
    "level": 212,
    "mainsubject": "Culture & Society",
    "question": "The 'Nari Shakti Puraskar' is an annual award given by the Government of India to recognize:",
    "options": [
      "The highest-achieving female athletes.",
      "Women scientists for their contribution to research.",
      "Individuals and institutions for their outstanding work towards women's empowerment.",
      "Female entrepreneurs in the startup ecosystem."
    ],
    "correctAnswer": 3,
    "explanation": "The **Nari Shakti Puraskar** (Woman Power Award) is India's highest civilian honor for women. It is conferred annually by the President of India on International Women's Day (March 8). The award recognizes the exceptional contributions of **individuals, groups, and institutions** in various fields that advance the cause of **women's empowerment**, challenge gender stereotypes, and create a positive impact on women's lives.",
    "difficulty": "Medium",
    "hint": "It is India's highest civilian honor specifically for contributions to women's empowerment."
  },
  {
    "level": 213,
    "mainsubject": "Culture & Society",
    "question": "'Sankirtana', a ritual singing, drumming, and dancing art form, is an Intangible Cultural Heritage of Humanity recognized by UNESCO. It is native to which state?",
    "options": [
      "West Bengal",
      "Assam",
      "Manipur",
      "Odisha"
    ],
    "correctAnswer": 3,
    "explanation": "**Sankirtana** is a vibrant performing art indigenous to **Manipur**. It is central to the Vaishnava community of the state and is performed to narrate the life and deeds of Lord Krishna. The performances, which take place in temples and community spaces, bring together artists who sing, drum (on the Pung), and dance. It was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in 2013.",
    "difficulty": "Very Hard",
    "hint": "This state is also famous for its classical dance form which shares its name."
  },
  {
    "level": 214,
    "mainsubject": "Culture & Society",
    "question": "The Ajanta and Ellora caves are both UNESCO World Heritage sites in Maharashtra, but they differ significantly. What is a key difference?",
    "options": [
      "Ajanta caves are structural temples, while Ellora caves are rock-cut.",
      "Ajanta is exclusively Buddhist, while Ellora represents Buddhism, Hinduism, and Jainism.",
      "Ajanta paintings are from the Mughal era, while Ellora's are from the Mauryan era.",
      "Ellora caves have no sculptures, only paintings."
    ],
    "correctAnswer": 2,
    "explanation": "The most significant difference is their religious scope. The **Ajanta caves** are a collection of rock-cut caves dedicated solely to **Buddhism**, famous for their exquisite mural paintings depicting Jataka tales. In contrast, the **Ellora caves** are a testament to religious harmony, featuring rock-cut monasteries and temples dedicated to all three major ancient Indian religions: **Buddhism, Hinduism, and Jainism**. Both sites are rock-cut, not structural.",
    "difficulty": "Medium",
    "hint": "One site represents a single religion, while the other showcases three."
  },
  {
    "level": 215,
    "mainsubject": "Culture & Society",
    "question": "Who is the author of the monumental Kannada novel 'Parva', which retells the Mahabharata from a modern, sociological perspective?",
    "options": [
      "Kuvempu",
      "U. R. Ananthamurthy",
      "S. L. Bhyrappa",
      "Girish Karnad"
    ],
    "correctAnswer": 3,
    "explanation": "**S. L. Bhyrappa**, one of modern India's most acclaimed novelists, is the author of **'Parva'**. The novel is celebrated for its realistic and humanistic portrayal of the characters of the Mahabharata, stripping away the divine elements to explore their psychological and ethical dilemmas. It's a cornerstone of modern Kannada literature. Kuvempu wrote 'Sri Ramayana Darshanam', and U.R. Ananthamurthy wrote 'Samskara'.",
    "difficulty": "Medium",
    "hint": "He is a contemporary novelist known for his deeply philosophical and character-driven works."
  },
  {
    "level": 216,
    "mainsubject": "Culture & Society",
    "question": "The 'Integrated Child Development Services' (ICDS) is a flagship government program that provides a package of services to:",
    "options": [
      "Secondary school students for skill development.",
      "Juvenile offenders for rehabilitation.",
      "Children up to 6 years of age, pregnant women, and lactating mothers.",
      "Orphaned children for adoption services."
    ],
    "correctAnswer": 3,
    "explanation": "The **ICDS program**, operating through Anganwadi Centers, is one of the world's largest initiatives for early childhood development. It provides a comprehensive package of six services: **supplementary nutrition, immunization, health check-ups, referral services, pre-school non-formal education, and nutrition & health education**. These services are targeted at **children below 6 years, pregnant women, and lactating mothers** to combat malnutrition and improve health outcomes.",
    "difficulty": "Medium",
    "hint": "This program operates through Anganwadi centers."
  },
  {
    "level": 217,
    "mainsubject": "Culture & Society",
    "question": "The Dadasaheb Phalke Award, India's highest honor in cinema, is presented annually by which organization?",
    "options": [
      "The Film and Television Institute of India (FTII)",
      "The National Film Development Corporation (NFDC)",
      "The Central Board of Film Certification (CBFC)",
      "The Directorate of Film Festivals (under the Ministry of Information and Broadcasting)"
    ],
    "correctAnswer": 4,
    "explanation": "The **Dadasaheb Phalke Award** is awarded for 'outstanding contribution to the growth and development of Indian cinema'. It is presented annually at the **National Film Awards** ceremony by the **Directorate of Film Festivals**, an organization set up by the Ministry of Information and Broadcasting. The award commemorates Dadasaheb Phalke, the 'father of Indian cinema', who directed India's first full-length feature film, 'Raja Harishchandra'.",
    "difficulty": "Medium",
    "hint": "It is presented as part of the National Film Awards ceremony."
  },
  {
    "level": 218,
    "mainsubject": "Culture & Society",
    "question": "In the context of the Indian caste system, the term 'Scheduled Castes' was first officially used in:",
    "options": [
      "The Manusmriti",
      "The Constitution of India, 1950",
      "The Government of India Act, 1935",
      "The Poona Pact, 1932"
    ],
    "correctAnswer": 3,
    "explanation": "While the term 'Depressed Classes' was used earlier, the term **'Scheduled Castes'** was given legal and official status for the first time in the **Government of India Act, 1935**. This Act provided for a list or 'schedule' of castes that were entitled to special provisions, including political representation. This framework was later adopted and expanded in the **Constitution of India**.",
    "difficulty": "Hard",
    "hint": "This pre-independence British legislation provided a framework for the future Indian constitution."
  },
  {
    "level": 219,
    "mainsubject": "Culture & Society",
    "question": "The 'Lalitha Mahal' in Mysuru, known for its striking white architecture, was built in a style inspired by which famous European landmark?",
    "options": [
      "The Buckingham Palace, London",
      "St. Paul's Cathedral, London",
      "The Palace of Versailles, France",
      "The Colosseum, Rome"
    ],
    "correctAnswer": 2,
    "explanation": "The **Lalitha Mahal**, the second largest palace in Mysuru, was built in 1921 by Maharaja Krishnaraja Wodeyar IV. Its architecture, designed by E. W. Fritchley, was inspired by **St. Paul's Cathedral in London**, particularly its central dome. It was initially built to host the Viceroy of India and is now a luxury heritage hotel.",
    "difficulty": "Hard",
    "hint": "Think of a famous cathedral in London with a large dome."
  },
  {
    "level": 220,
    "mainsubject": "Culture & Society",
    "question": "The philosophical school of 'Advaita Vedanta', which posits the non-dualistic reality of 'Brahman', was consolidated and popularized by which great philosopher?",
    "options": [
      "Ramanujacharya",
      "Madhvacharya",
      "Adi Shankaracharya",
      "Basavanna"
    ],
    "correctAnswer": 3,
    "explanation": "**Adi Shankaracharya**, an 8th-century philosopher, was the foremost exponent of **Advaita Vedanta**. His core teaching is 'Brahma Satyam, Jagan Mithya, Jivo Brahmaiva Naparah' (Brahman alone is real, the world is unreal, and the individual self is non-different from Brahman). In contrast, **Ramanujacharya** proposed **Vishishtadvaita** (qualified non-dualism), and **Madhvacharya** (from Karnataka) proposed **Dvaita** (dualism).",
    "difficulty": "Medium",
    "hint": "He established four major 'mathas' (monasteries) in the four corners of India."
  },
  {
    "level": 221,
    "mainsubject": "Culture & Society",
    "question": "Which of the following is NOT a classical language of India?",
    "options": [
      "Sanskrit",
      "Tamil",
      "Pali",
      "Kannada"
    ],
    "correctAnswer": 3,
    "explanation": "Currently, the Government of India has recognized six languages as 'Classical Languages': **Tamil** (2004), **Sanskrit** (2005), **Kannada** (2008), **Telugu** (2008), **Malayalam** (2013), and **Odia** (2014). **Pali**, an ancient Prakrit language in which the early Buddhist scriptures were written, does not have this official status, although it is of immense historical and literary importance.",
    "difficulty": "Medium",
    "hint": "The early Buddhist scriptures are written in this language, but it lacks the official 'classical' tag."
  },
  {
    "level": 222,
    "mainsubject": "Culture & Society",
    "question": "The 'Durga temple' at Aihole is architecturally significant for its:",
    "options": [
      "Towering Dravidian Vimana",
      "Apsidal (semi-circular) plan, resembling a Buddhist Chaitya hall",
      "Massive monolithic Nandi statue",
      "Star-shaped platform, typical of Hoysala architecture"
    ],
    "correctAnswer": 2,
    "explanation": "The Durga temple at Aihole, a masterpiece of Chalukyan architecture, is unique for its **apsidal or semi-circular shape**. This design is reminiscent of earlier **Buddhist Chaitya halls**. It is not a star-shaped Hoysala design, nor does it have a towering Dravidian vimana (its tower is more of a nascent Nagara style). Its unusual plan makes it a key monument in the study of Indian temple evolution.",
    "difficulty": "Very Hard",
    "hint": "Its shape is similar to early Buddhist prayer halls."
  },
  {
    "level": 223,
    "mainsubject": "Culture & Society",
    "question": "The Protection of Women from Domestic Violence Act, 2005, provides a broad definition of 'domestic violence'. It includes not only physical abuse but also:",
    "options": [
      "Only verbal abuse",
      "Only economic abuse",
      "Only emotional abuse",
      "Verbal, emotional, sexual, and economic abuse"
    ],
    "correctAnswer": 4,
    "explanation": "The **Domestic Violence Act, 2005** is a civil law that provides a comprehensive definition of domestic violence. It goes beyond just physical harm to include **sexual abuse** (any conduct of a sexual nature), **verbal and emotional abuse** (insults, humiliation), and **economic abuse** (deprivation of financial resources, not paying maintenance). This broad definition helps protect women from all forms of abuse within a domestic relationship.",
    "difficulty": "Medium",
    "hint": "The act was designed to be comprehensive and cover all forms of abuse."
  },
  {
    "level": 224,
    "mainsubject": "Culture & Society",
    "question": "The 'Navagraha Jain Temple' at Varur near Hubballi, Karnataka, is famous for its:",
    "options": [
      "Ancient rock-cut caves",
      "Intricate ivory carvings",
      "61-foot tall monolithic statue of Parshvanatha",
      "Unique circular architectural design"
    ],
    "correctAnswer": 3,
    "explanation": "The Navagraha Teertha is a major Jain pilgrimage center in Karnataka. Its main attraction is a colossal **61-foot monolithic statue of the 23rd Tirthankara, Shri Parshvanatha**. Weighing 185 tons, it is the tallest monolithic statue of Parshvanatha in India. The temple complex also includes smaller statues of the other Tirthankaras and the Navagrahas (nine celestial bodies).",
    "difficulty": "Hard",
    "hint": "Its main attraction is a colossal statue of the 23rd Tirthankara."
  },
  {
    "level": 225,
    "mainsubject": "Culture & Society",
    "question": "The 'Tanjore painting' style, known for its vibrant colors, gold foil work, and inlay of semi-precious stones, originated in which kingdom?",
    "options": [
      "Vijayanagara Empire",
      "Hoysala Kingdom",
      "Pandyan Kingdom",
      "Maratha Kingdom of Thanjavur"
    ],
    "correctAnswer": 4,
    "explanation": "The iconic **Tanjore painting** style flourished in the South Indian city of Thanjavur (Tanjore) under the patronage of the **Maratha rulers** who governed the region from the 17th to the 19th century. While it has roots in earlier artistic traditions, it was during the Maratha period that it developed its characteristic features: rich colors, gilded relief work (gesso work), and inlay of glass beads or gems, typically depicting Hindu deities.",
    "difficulty": "Hard",
    "hint": "This art form flourished under Maratha rulers in a Tamil city."
  },
  {
    "level": 226,
    "mainsubject": "Culture & Society",
    "question": "Article 46 of the Indian Constitution, a Directive Principle, directs the State to:",
    "options": [
      "Promote international peace and security.",
      "Provide free and compulsory education for all children up to age 14.",
      "Organize village panchayats.",
      "Promote the educational and economic interests of Scheduled Castes, Scheduled Tribes, and other weaker sections."
    ],
    "correctAnswer": 4,
    "explanation": "**Article 46** is a crucial Directive Principle of State Policy that guides the government's actions towards social justice. It explicitly states that 'The State shall promote with special care the educational and economic interests of the weaker sections of the people, and, in particular, of the **Scheduled Castes and the Scheduled Tribes**, and shall protect them from social injustice and all forms of exploitation.' This article forms the philosophical basis for many affirmative action policies.",
    "difficulty": "Hard",
    "hint": "This article is a cornerstone for policies related to the welfare of weaker sections."
  },
  {
    "level": 227,
    "mainsubject": "Culture & Society",
    "question": "The 'Ibrahim Rauza' in Vijayapura (Bijapur) is a mausoleum complex often called the 'Taj Mahal of the Deccan'. It is the tomb of:",
    "options": [
      "Mohammed Adil Shah",
      "Yusuf Adil Shah",
      "Ibrahim Adil Shah II",
      "Ali Adil Shah I"
    ],
    "correctAnswer": 3,
    "explanation": "The **Ibrahim Rauza** complex contains the tomb of **Ibrahim Adil Shah II**, the fifth king of the Adil Shahi dynasty, and his queen, Taj Sultana. It is renowned for its architectural symmetry and exquisite detail, with a tomb and a mosque facing each other on a raised platform. Its delicate and graceful design has earned it the comparison to the Taj Mahal. The tomb of Mohammed Adil Shah is the famous Gol Gumbaz.",
    "difficulty": "Hard",
    "hint": "The name of the ruler is in the name of the monument."
  },
  {
    "level": 228,
    "mainsubject": "Culture & Society",
    "question": "In the context of women's empowerment, what are Self-Help Groups (SHGs)?",
    "options": [
      "Political lobbying groups for women's reservation.",
      "Formal financial institutions like banks run by women.",
      "Informal groups of women who pool savings and provide loans to members.",
      "Government-run vocational training centers."
    ],
    "correctAnswer": 3,
    "explanation": "**Self-Help Groups (SHGs)** are typically small, informal associations of 10-20 women from similar socio-economic backgrounds. They come together to **save small amounts of money regularly**. This pooled money is then used to give out small loans to members in times of need. SHGs are a powerful tool for financial inclusion, poverty alleviation, and women's empowerment, as they build financial discipline, provide access to credit, and foster community support.",
    "difficulty": "Easy",
    "hint": "They are a key component of microfinance initiatives in India."
  },
  {
    "level": 229,
    "mainsubject": "Culture & Society",
    "question": "Sangolli Rayanna, a revered freedom fighter from Karnataka, was the chief of the army of which kingdom?",
    "options": [
      "The Kingdom of Mysore",
      "The Keladi Nayakas",
      "The Kingdom of Kittur",
      "The Western Ganga Dynasty"
    ],
    "correctAnswer": 3,
    "explanation": "**Sangolli Rayanna** was the army chief or 'Senapati' of the **Kingdom of Kittur**, ruled by Rani Chennamma. After the Rani's arrest by the British, Rayanna continued the rebellion with guerrilla warfare, becoming a symbol of resistance and folk hero. He was eventually captured and executed by the British in 1831. His valor and sacrifice are celebrated in folk songs and theatre across Karnataka.",
    "difficulty": "Medium",
    "hint": "He fought alongside Rani Chennamma against the British."
  },
  {
    "level": 230,
    "mainsubject": "Culture & Society",
    "question": "Which of these is NOT one of the 'Four Noble Truths' of Buddhism?",
    "options": [
      "The truth of suffering (Dukkha)",
      "The truth of the cause of suffering (Samudāya)",
      "The truth of the path to the cessation of suffering (Magga)",
      "The truth of attaining eternal life in heaven (Svarga)"
    ],
    "correctAnswer": 4,
    "explanation": "The Four Noble Truths form the foundation of Buddhist teachings. They are: 1) There is suffering (**Dukkha**). 2) There is a cause for suffering, which is craving and attachment (**Samudāya**). 3) There is an end to suffering (**Nirodha**). 4) There is a path to end suffering, the Noble Eightfold Path (**Magga**). The concept of attaining an eternal heaven is not a central tenet of the Four Noble Truths; the goal is Nirvana, the cessation of suffering and the cycle of rebirth.",
    "difficulty": "Medium",
    "hint": "The core of Buddhism is about understanding and ending suffering, not about an afterlife in heaven."
  },
  {
    "level": 231,
    "mainsubject": "Culture & Society",
    "question": "The 'BandGala' or 'Jodhpuri Suit', a formal suit for men, is a cultural contribution from which Indian state?",
    "options": [
      "Punjab",
      "Rajasthan",
      "Gujarat",
      "Uttar Pradesh"
    ],
    "correctAnswer": 2,
    "explanation": "The **Bandhgala** (meaning 'closed neck') suit originated in the princely state of **Jodhpur, Rajasthan**, during the late 19th century. It is a blend of traditional Indian angarkha and Western formal wear. Also known as the Jodhpuri suit, it was popularized by the Maharaja of Jodhpur and has since become a globally recognized style of formal and semi-formal attire.",
    "difficulty": "Easy",
    "hint": "The alternative name of the suit points directly to its city of origin."
  },
  {
    "level": 232,
    "mainsubject": "Culture & Society",
    "question": "The 'Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006' is a landmark legislation that primarily aims to:",
    "options": [
      "Nationalize all forest land in India.",
      "Grant ownership of forest land to private corporations for industrial use.",
      "Recognize and vest forest rights and occupation in forest-dwelling communities.",
      "Declare all forests as protected areas and prohibit human entry."
    ],
    "correctAnswer": 3,
    "explanation": "The **Forest Rights Act (FRA), 2006** is a historic law enacted to correct the 'historical injustice' done to forest-dwelling communities. Its primary objective is to **recognize and formalize the rights** of Scheduled Tribes and Other Traditional Forest Dwellers over the forest land they have been living on and cultivating for generations. It grants them rights to land ownership (individual rights) and the right to manage and use community forest resources (community rights).",
    "difficulty": "Hard",
    "hint": "This act seeks to correct the 'historical injustice' done to forest dwellers."
  },
  {
    "level": 233,
    "mainsubject": "Culture & Society",
    "question": "The magnificent 'Gomateshwara statue' at Shravanabelagola was consecrated in 981 AD under the patronage of Chavundaraya, who was a minister and commander for which dynasty?",
    "options": [
      "Hoysala Dynasty",
      "Rashtrakuta Dynasty",
      "Kadamba Dynasty",
      "Western Ganga Dynasty"
    ],
    "correctAnswer": 4,
    "explanation": "**Chavundaraya** was a minister and commander in the court of the **Western Ganga Dynasty** of Talakad. He served King Rachamalla IV and commissioned the colossal monolithic statue of Gomateshwara (Bahubali) atop the Vindhyagiri Hill at Shravanabelagola. This masterpiece stands as a testament to the artistic and religious fervor of the Ganga period in Karnataka.",
    "difficulty": "Hard",
    "hint": "This dynasty ruled parts of southern Karnataka before the Hoysalas."
  },
  {
    "level": 234,
    "mainsubject": "Culture & Society",
    "question": "Which of the following is an example of an 'Intangible Cultural Heritage' as defined by UNESCO?",
    "options": [
      "The Taj Mahal",
      "The ritual theatre of 'Mudiyettu' in Kerala",
      "The ruins of Hampi",
      "The Great Wall of China"
    ],
    "correctAnswer": 2,
    "explanation": "UNESCO's concept of **Intangible Cultural Heritage** refers to traditions, living expressions, and knowledge passed down from generation to generation. This includes performing arts, social practices, rituals, and traditional craftsmanship. **'Mudiyettu'**, a ritual theatre and dance drama from Kerala, is on this list. The Taj Mahal, Hampi, and the Great Wall are all examples of **Tangible Cultural Heritage**—physical, man-made sites.",
    "difficulty": "Medium",
    "hint": "Think about heritage that is performed or practiced, rather than built."
  },
  {
    "level": 235,
    "mainsubject": "Culture & Society",
    "question": "The 'Anubhava Mantapa' established by Basavanna in the 12th century is considered one of the world's earliest parliaments. What was its primary purpose?",
    "options": [
      "To collect taxes for the kingdom.",
      "To serve as a military command center.",
      "To be a spiritual academy and public assembly for discussing social and religious reforms.",
      "To function as a court for criminal justice."
    ],
    "correctAnswer": 3,
    "explanation": "The **Anubhava Mantapa** ('hall of spiritual experience') was a revolutionary institution established in Basavakalyan by Basavanna and other Sharanas. It served as a **public assembly and spiritual academy** where mystics, saints, and philosophers from all walks of life, including women and people from lower castes, gathered to discuss theology, social reforms, and personal spiritual experiences. It promoted democratic ideals and social equality, making it a unique institution for its time.",
    "difficulty": "Medium",
    "hint": "It was a 'hall of spiritual experience' for social reformers."
  },
  {
    "level": 236,
    "mainsubject": "Culture & Society",
    "question": "The term 'Fourth Estate' is often used to refer to which pillar of modern society?",
    "options": [
      "The Judiciary",
      "The Executive",
      "The Legislature",
      "The Press (Media)"
    ],
    "correctAnswer": 4,
    "explanation": "The term **'Fourth Estate'** refers to the **press and news media**. The traditional three estates of the realm are the legislature, the executive, and the judiciary. The press is called the 'fourth estate' because of its significant indirect influence on society and politics. It plays a crucial role as a watchdog, holding the other three estates accountable and informing the public, thereby upholding democracy.",
    "difficulty": "Easy",
    "hint": "It acts as a watchdog for the other three pillars of democracy."
  },
  {
    "level": 237,
    "mainsubject": "Culture & Society",
    "question": "The 'Chittara' art is a unique form of traditional mural and floor painting practiced by the women of which community in Karnataka?",
    "options": [
      "The Kodava community in Kodagu",
      "The Deevaru community in the Malenadu region",
      "The Lambani community across Karnataka",
      "The Siddi community in Uttara Kannada"
    ],
    "correctAnswer": 2,
    "explanation": "**Chittara art** is an intricate folk art form practiced by the women of the **Deevaru community**, primarily in the Shivamogga and Sagara regions of Malenadu, Karnataka. These paintings are made on the walls and floors of their homes using natural materials like rice paste, red earth, and charcoal. The designs are geometric and symbolic, representing aspects of their daily life, nature, and rituals.",
    "difficulty": "Very Hard",
    "hint": "This art form is from the Malenadu region and uses natural pigments."
  },
  {
    "level": 238,
    "mainsubject": "Culture & Society",
    "question": "The 'National Commission for Protection of Child Rights' (NCPCR) is a statutory body established to:",
    "options": [
      "Provide mid-day meals in schools.",
      "Run adoption agencies across the country.",
      "Ensure that all laws and policies are in consonance with the child rights perspective.",
      "Conduct board examinations for Class 10 and 12."
    ],
    "correctAnswer": 3,
    "explanation": "The **NCPCR** was set up in 2007 under the Commissions for Protection of Child Rights (CPCR) Act, 2005. Its primary mandate is to **protect, promote, and defend child rights** in the country. It reviews legal safeguards, inquires into complaints of violations of child rights, and recommends policy changes to ensure that all laws and government programs align with the principles of child rights as enshrined in the Constitution and the UN Convention on the Rights of the Child.",
    "difficulty": "Medium",
    "hint": "Its role is to be a watchdog for child rights."
  },
  {
    "level": 239,
    "mainsubject": "Culture & Society",
    "question": "The 'Warli Painting' is a traditional art form characterized by its use of basic geometric shapes like circles, triangles, and squares. It belongs to which state?",
    "options": [
      "Rajasthan",
      "Bihar",
      "Maharashtra",
      "Kerala"
    ],
    "correctAnswer": 3,
    "explanation": "**Warli painting** is the traditional art of the Warli tribe, who live in the mountainous and coastal regions of **Maharashtra** and Gujarat. These paintings use a very simple graphic vocabulary—a circle (sun, moon), a triangle (mountains, trees), and a square (sacred enclosure)—to depict scenes of social life, hunting, farming, and festivals. They are traditionally painted on mud walls with a white pigment made from rice paste.",
    "difficulty": "Medium",
    "hint": "This tribal art form comes from the state whose capital is Mumbai."
  },
  {
    "level": 240,
    "mainsubject": "Culture & Society",
    "question": "Which article of the Indian Constitution empowers the President to establish a 'Commission to investigate the conditions of backward classes'?",
    "options": [
      "Article 338",
      "Article 340",
      "Article 341",
      "Article 356"
    ],
    "correctAnswer": 2,
    "explanation": "**Article 340** of the Constitution provides the power to the President to appoint a Commission to investigate the conditions of socially and educationally backward classes (SEBCs) and the difficulties under which they labor and to make recommendations to improve their condition. The **Mandal Commission** was appointed under this very article. Article 338 deals with the National Commission for SCs, and Article 341 empowers the President to specify the SCs.",
    "difficulty": "Hard",
    "hint": "The Mandal Commission was appointed under this article."
  },
  {
    "level": 241,
    "mainsubject": "Culture & Society",
    "question": "The 'Bidriware' is a famous metal handicraft known for its striking silver inlay work on a blackened alloy. It gets its name from its place of origin, which is:",
    "options": [
      "Bidar, Karnataka",
      "Bijapur, Karnataka",
      "Bellary, Karnataka",
      "Belgaum, Karnataka"
    ],
    "correctAnswer": 1,
    "explanation": "**Bidriware** is a renowned metal craft that originated in the city of **Bidar, Karnataka**, during the Bahmani Sultanate in the 14th century. The craft involves casting an alloy of zinc and copper, which is then inlaid with intricate designs using pure silver wire or sheets. The final step involves treating the artifact with soil from the Bidar fort, which has special properties that turn the alloy a lustrous black while leaving the silver inlay sparkling.",
    "difficulty": "Easy",
    "hint": "The name of the craft is the same as its city of origin."
  },
  {
    "level": 242,
    "mainsubject": "Culture & Society",
    "question": "The Hindu Widows' Remarriage Act, which legalized the remarriage of Hindu widows, was passed in 1856 largely due to the efforts of which social reformer?",
    "options": [
      "Raja Ram Mohan Roy",
      "Swami Vivekananda",
      "Dayananda Saraswati",
      "Ishwar Chandra Vidyasagar"
    ],
    "correctAnswer": 4,
    "explanation": "**Ishwar Chandra Vidyasagar**, a great scholar and reformer from Bengal, was the key figure behind the Hindu Widows' Remarriage Act, 1856. He launched a powerful campaign, citing scriptural evidence and humanitarian principles to argue for the right of widows to remarry, a practice that was forbidden at the time. While Raja Ram Mohan Roy was instrumental in the abolition of Sati, Vidyasagar championed the cause of widow remarriage.",
    "difficulty": "Medium",
    "hint": "He was a great scholar and reformer from Bengal."
  },
  {
    "level": 243,
    "mainsubject": "Culture & Society",
    "question": "Which of the following is a key feature of the 'Dravidian' style of temple architecture, as seen in the Brihadeeswarar Temple?",
    "options": [
      "A curvilinear shikhara that tapers towards the top.",
      "A pyramidal vimana consisting of stepped storeys.",
      "The absence of a boundary wall or gateway.",
      "The use of a raised platform or 'jagati' as the base."
    ],
    "correctAnswer": 2,
    "explanation": "A defining feature of the **Dravidian style** is the **vimana**, the tower over the main sanctum, which is **pyramidal** in shape and consists of multiple diminishing storeys ('talas'). The Brihadeeswarar Temple in Thanjavur is a perfect example. In contrast, the North Indian 'Nagara' style has a curvilinear tower called a 'shikhara'. Dravidian temples are also characterized by enclosed courtyards and monumental gateways called 'gopurams'.",
    "difficulty": "Hard",
    "hint": "The tower over the sanctum is shaped like a pyramid with multiple levels."
  },
  {
    "level": 244,
    "mainsubject": "Culture & Society",
    "question": "U. R. Ananthamurthy, a Jnanpith awardee from Karnataka, was a leading figure in which literary movement that focused on existentialism and modern sensibilities?",
    "options": [
      "Navodaya (Renaissance)",
      "Pragathisheela (Progressive)",
      "Dalita (Dalit)",
      "Navya (Modernist)"
    ],
    "correctAnswer": 4,
    "explanation": "**U. R. Ananthamurthy** was a pioneer of the **Navya (Modernist)** movement in Kannada literature. This movement, which emerged in the 1950s, was influenced by European modernism and existentialist philosophy. Navya writers like Ananthamurthy ('Samskara') and Girish Karnad explored themes of alienation, psychological conflict, and the individual's search for identity in a rapidly changing society, using complex narratives and symbolism.",
    "difficulty": "Hard",
    "hint": "His novel 'Samskara' is a classic of this modernist movement."
  },
  {
    "level": 245,
    "mainsubject": "Culture & Society",
    "question": "The 'Juvenile Justice (Care and Protection of Children) Act, 2015' defines a 'child' as any person below the age of:",
    "options": [
      "14 years",
      "16 years",
      "18 years",
      "21 years"
    ],
    "correctAnswer": 3,
    "explanation": "The **Juvenile Justice Act, 2015** defines a 'child' as a person who has not completed **eighteen years of age**. The Act deals with two categories of children: 'child in conflict with law' and 'child in need of care and protection'. A significant amendment in the 2015 Act allows for juveniles between 16 and 18 years of age, who have committed heinous crimes, to be tried as adults under certain circumstances, following a preliminary assessment.",
    "difficulty": "Easy",
    "hint": "This age is the internationally recognized standard for childhood."
  },
  {
    "level": 246,
    "mainsubject": "Culture & Society",
    "question": "The 'Madhubani Painting', characterized by its intricate line drawings and bright colors, is a traditional folk art from which Indian state?",
    "options": [
      "Odisha",
      "West Bengal",
      "Bihar",
      "Uttar Pradesh"
    ],
    "correctAnswer": 3,
    "explanation": "**Madhubani painting**, also known as Mithila art, is a famous style of folk painting that originated in the Mithila region of **Bihar**. Traditionally, it was done by women on the walls and floors of their homes during festivals and ceremonies. The paintings are known for their complex geometric patterns and depictions of nature and mythological figures. It is now a popular art form on paper and cloth as well.",
    "difficulty": "Medium",
    "hint": "This art form is also known as Mithila painting."
  },
  {
    "level": 247,
    "mainsubject": "Culture & Society",
    "question": "What does the term 'Patriarchy' refer to in a sociological context?",
    "options": [
      "A society where the elderly are held in the highest regard.",
      "A social system where men hold primary power and authority.",
      "A system of inheritance where property passes through the female line.",
      "A form of government ruled by religious leaders."
    ],
    "correctAnswer": 2,
    "explanation": "**Patriarchy** is a social system in which **men hold primary power** and predominate in roles of political leadership, moral authority, social privilege, and control of property. In a patriarchal system, the father or eldest male is the head of the family, and descent and inheritance are traced through the male line. It is a key concept in sociology and feminist theory for analyzing gender inequality. The opposite system is 'Matriarchy'.",
    "difficulty": "Easy",
    "hint": "It is a social system where power is held by men."
  },
  {
    "level": 248,
    "mainsubject": "Culture & Society",
    "question": "The 'Kasuti' is a traditional form of intricate embroidery that has been granted a GI tag. It is a craft native to which state?",
    "options": [
      "Gujarat",
      "Rajasthan",
      "Punjab",
      "Karnataka"
    ],
    "correctAnswer": 4,
    "explanation": "**Kasuti embroidery** is a traditional craft from **Karnataka**, practiced mainly in districts like Dharwad, Hubballi, and Kalaburagi. It involves intricate hand-stitching on handloom sarees, typically Ilkal sarees. The embroidery is done without knots, so the design looks the same on both sides of the fabric. Common motifs include temple gopurams, chariots, palanquins, and animals, all created with great skill and precision.",
    "difficulty": "Hard",
    "hint": "This embroidery is often done on Ilkal sarees."
  },
  {
    "level": 249,
    "mainsubject": "Culture & Society",
    "question": "Match the following Indian philosophical schools with their founders:\n(A) Samkhya        (1) Gautama\n(B) Yoga           (2) Jaimini\n(C) Nyaya          (3) Kapila\n(D) Mimamsa        (4) Patanjali",
    "options": [
      "A-3, B-4, C-1, D-2",
      "A-4, B-3, C-2, D-1",
      "A-1, B-2, C-3, D-4",
      "A-3, B-1, C-4, D-2"
    ],
    "correctAnswer": 1,
    "explanation": "The correct matches for these orthodox (astika) schools of Hindu philosophy are:\n- (A) **Samkhya**, a school of dualism, is attributed to the sage **Kapila**.\n- (B) **Yoga**, which focuses on meditation and liberation, was systematized by **Patanjali** in his Yoga Sutras.\n- (C) **Nyaya**, the school of logic, was founded by **Gautama**.\n- (D) **Purva Mimamsa**, which focuses on the exegesis of the Vedas, was founded by **Jaimini**.",
    "difficulty": "Very Hard",
    "hint": "Patanjali's Yoga Sutras are world-famous."
  },
  {
    "level": 250,
    "mainsubject": "Culture & Society",
    "question": "The 'Siddhis' of Karnataka are a unique ethnic group who are primarily descendants of:",
    "options": [
      "Merchants from ancient Rome",
      "Bantu peoples from Southeast Africa",
      "Mongol warriors from Central Asia",
      "Tibetan refugees"
    ],
    "correctAnswer": 2,
    "explanation": "The **Siddhis** of Karnataka are an ethnic community primarily descended from the **Bantu peoples of Southeast Africa**. Their ancestors were brought to India as slaves, merchants, or sailors by the Portuguese and Arabs, starting from as early as the 7th century. They are mainly found in the districts of Uttara Kannada, Belagavi, and Dharwad. They have retained some of their ancestral African traditions while also assimilating into the local culture, creating a unique syncretic identity.",
    "difficulty": "Hard",
    "hint": "This community has African roots."
  },
  {
    "level": 251,
    "mainsubject": "Culture & Society",
    "question": "The 'Right of Children to Free and Compulsory Education (RTE) Act, 2009' makes education a fundamental right for every child in which age group?",
    "options": [
      "3 to 8 years",
      "6 to 14 years",
      "5 to 15 years",
      "6 to 18 years"
    ],
    "correctAnswer": 2,
    "explanation": "The **RTE Act, 2009** operationalized the fundamental right to education enshrined in **Article 21-A** of the Constitution. It mandates free and compulsory education for every child in the age group of **6 to 14 years** in a neighborhood school till the completion of elementary education. The Act also specifies norms for teacher-pupil ratios, school infrastructure, and prohibits practices like donation fees and screening procedures for admission.",
    "difficulty": "Easy",
    "hint": "This right corresponds to Article 21-A of the Constitution."
  },
  {
    "level": 252,
    "mainsubject": "Culture & Society",
    "question": "Consider the following statements:\n1. The Virupaksha Temple at Pattadakal is built in the Northern Nagara style.\n2. The Papanatha Temple at Pattadakal is built in the Southern Dravida style.\nWhich of the above statement(s) is/are correct?",
    "options": [
      "Only 1",
      "Only 2",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 4,
    "explanation": "**Both statements are incorrect**, they are interchanged. The UNESCO World Heritage site of Pattadakal is famous for its fusion of architectural styles. The magnificent **Virupaksha Temple** is a classic example of the **Southern Dravida style**, built by Queen Lokamahadevi. The **Papanatha Temple**, on the other hand, shows a clear influence of the **Northern Nagara style**, though with some Dravidian elements mixed in, showcasing the experimental nature of Chalukyan architecture.",
    "difficulty": "Very Hard",
    "hint": "The statements have interchanged the styles of the two temples."
  }
  ],
  'Technology & Development': [
    {
      level: 1,
      mainsubject: 'Technology & Development',
      question: 'What does AI stand for in technology?',
      options: [
        'Artificial Intelligence',
        'Advanced Internet',
        'Automated Information',
        'Applied Innovation',
      ],
      correctAnswer: 1,
      explanation:
        'AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.',
      difficulty: 'Easy',
      hint: 'Think about smart machines',
    },
    {
      level: 2,
      mainsubject: 'Technology & Development',
      question: "Which Indian city is known as the 'Silicon Valley of India'?",
      options: ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad'],
      correctAnswer: 3,
      explanation:
        "Bengaluru (formerly Bangalore) is known as the 'Silicon Valley of India' due to its role as the nation's leading information technology (IT) exporter.",
      difficulty: 'Easy',
      hint: 'Think about IT companies',
    },

    // 8.1: Information Technology & AI (20 Questions)
    {
      level: 3,
      mainsubject: 'Technology & Development',
      question: "What is the primary goal of the 'Digital India' programme?",
      options: [
        'To provide free laptops to all citizens',
        'To transform India into a digitally empowered society and knowledge economy',
        'To replace all physical currency with digital currency',
        'To develop a government-owned social media platform',
      ],
      correctAnswer: 2,
      explanation:
        'The Digital India programme was launched to improve online infrastructure and increase Internet connectivity, making government services available to citizens electronically.',
      difficulty: 'Easy',
      hint: 'Focus on empowerment and economy.',
    },
    {
      level: 4,
      mainsubject: 'Technology & Development',
      question:
        "Which of the following is a key initiative under the 'Startup India' scheme?",
      options: [
        'Providing free office space to all startups',
        'Offering a 10-year tax exemption for all new businesses',
        'Simplification and Handholding, Funding Support and Incentives, and Industry-Academia Partnership',
        'Mandating that all startups must be in the technology sector',
      ],
      correctAnswer: 3,
      explanation:
        'Startup India focuses on three main pillars: Simplification and Handholding, Funding Support and Incentives, and Industry-Academia Partnership and Incubation.',
      difficulty: 'Medium',
      hint: 'Think about the pillars of support for new businesses.',
    },
    {
      level: 5,
      mainsubject: 'Technology & Development',
      question: "In the context of AI, what is 'Machine Learning'?",
      options: [
        'The process of manually coding every possible decision in a machine',
        'A field of study that gives computers the ability to learn without being explicitly programmed',
        'The hardware components that make up an AI system',
        'A type of computer virus that learns and adapts',
      ],
      correctAnswer: 2,
      explanation:
        'Machine Learning is a subset of AI that focuses on building systems that can learn from and make decisions based on data, rather than being explicitly programmed for a specific task.',
      difficulty: 'Easy',
      hint: 'The name itself suggests learning from experience.',
    },
    {
      level: 6,
      mainsubject: 'Technology & Development',
      question:
        'What does UPI stand for in the Indian digital payment ecosystem?',
      options: [
        'Unified Payment Interface',
        'Universal Payment Identity',
        'Unique Payment Infrastructure',
        'Uniform Payer Information',
      ],
      correctAnswer: 1,
      explanation:
        'UPI (Unified Payment Interface) is an instant real-time payment system developed by the National Payments Corporation of India (NPCI).',
      difficulty: 'Easy',
      hint: "It's an 'interface' for payments.",
    },
    {
      level: 7,
      mainsubject: 'Technology & Development',
      question:
        'The Atal Innovation Mission (AIM) is a flagship initiative of which organization?',
      options: [
        'Ministry of Finance',
        'ISRO',
        'NITI Aayog',
        'Ministry of Education',
      ],
      correctAnswer: 3,
      explanation:
        'The Atal Innovation Mission (AIM) is the Government of India’s flagship initiative under NITI Aayog to promote a culture of innovation and entrepreneurship in the country.',
      difficulty: 'Medium',
      hint: "Think about the government's policy think tank.",
    },
    {
      level: 8,
      mainsubject: 'Technology & Development',
      question:
        "What is a 'Neural Network' in the context of Artificial Intelligence?",
      options: [
        'A computer network designed for biological research',
        'A network of human brains connected via technology',
        'A series of algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates',
        'A physical network cable made from organic materials',
      ],
      correctAnswer: 3,
      explanation:
        'Inspired by the human brain, neural networks are a key component of deep learning, a subfield of machine learning, and are used for tasks like image recognition and natural language processing.',
      difficulty: 'Hard',
      hint: "It's modeled after the brain's structure.",
    },
    {
      level: 9,
      mainsubject: 'Technology & Development',
      question:
        "India's first AI-powered supercomputer, 'AIRAWAT', is located at which institution?",
      options: ['IIT Madras', 'IISc Bangalore', 'C-DAC, Pune', 'TIFR, Mumbai'],
      correctAnswer: 3,
      explanation:
        'AIRAWAT is installed at C-DAC (Centre for Development of Advanced Computing), Pune, and is part of the National Program on AI by the Government of India.',
      difficulty: 'Medium',
      hint: 'The institution is a leader in advanced computing in India.',
    },
    {
      level: 10,
      mainsubject: 'Technology & Development',
      question: "What is 'Deep Learning'?",
      options: [
        'A type of learning that involves deep meditation',
        'A subfield of machine learning based on artificial neural networks with many layers',
        'A method of storing data deep underground',
        'A computer programming language',
      ],
      correctAnswer: 2,
      explanation:
        "Deep Learning uses multi-layered neural networks (hence 'deep') to learn from vast amounts of data. It is the technology behind driverless cars and voice control in consumer devices.",
      difficulty: 'Hard',
      hint: "It involves 'deep' layers of neural networks.",
    },
    {
      level: 11,
      mainsubject: 'Technology & Development',
      question:
        "The 'DigiLocker' service is an initiative under which program?",
      options: [
        'Startup India',
        'Make in India',
        'Digital India',
        'Skill India',
      ],
      correctAnswer: 3,
      explanation:
        'DigiLocker is a key initiative under Digital India, aimed at providing a secure cloud-based platform for storage, sharing, and verification of documents & certificates.',
      difficulty: 'Easy',
      hint: "The name 'Digi' is a clue.",
    },
    {
      level: 12,
      mainsubject: 'Technology & Development',
      question:
        'Which term describes a startup company valued at over $1 billion?',
      options: ['Soonicorn', 'Unicorn', 'Decacorn', 'Centicorn'],
      correctAnswer: 2,
      explanation:
        "A 'Unicorn' is a privately held startup company with a value of over $1 billion. A 'Decacorn' is valued at over $10 billion.",
      difficulty: 'Easy',
      hint: 'Think of a mythical creature.',
    },
    {
      level: 13,
      mainsubject: 'Technology & Development',
      question:
        'What is the primary function of the GeM (Government e-Marketplace) portal?',
      options: [
        'To sell government bonds to the public',
        'To provide a platform for government departments to procure goods and services',
        'To auction off confiscated goods',
        'An e-learning platform for civil servants',
      ],
      correctAnswer: 2,
      explanation:
        'GeM is an online market platform established to facilitate online procurement of common use goods & services required by various government departments, organizations, and PSUs.',
      difficulty: 'Medium',
      hint: "The name includes 'e-Marketplace'.",
    },
    {
      level: 14,
      mainsubject: 'Technology & Development',
      question:
        "The term 'Natural Language Processing' (NLP) in AI refers to what?",
      options: [
        'Computers processing geological data',
        "Computers' ability to understand and interpret human language",
        'A method to create natural-sounding computer-generated music',
        'The processing of natural, unprocessed data',
      ],
      correctAnswer: 2,
      explanation:
        "NLP is a branch of AI that helps computers understand, interpret, and manipulate human language. It's the technology behind virtual assistants like Siri and Alexa.",
      difficulty: 'Medium',
      hint: "Focus on 'Natural Language'.",
    },
    {
      level: 15,
      mainsubject: 'Technology & Development',
      question: "What is the 'Turing Test' designed to measure?",
      options: [
        "A computer's processing speed",
        "A machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human",
        'The efficiency of a computer algorithm',
        'The security of a computer network',
      ],
      correctAnswer: 2,
      explanation:
        "Developed by Alan Turing, the Turing Test is a test of a machine's ability to exhibit intelligent behavior. A human evaluator judges natural language conversations between a human and a machine designed to generate human-like responses.",
      difficulty: 'Hard',
      hint: "It tests if a machine can 'think' like a human.",
    },
    {
      level: 16,
      mainsubject: 'Technology & Development',
      question:
        'Which of these is NOT one of the three core pillars of the Digital India programme?',
      options: [
        'Digital Infrastructure as a Core Utility to Every Citizen',
        'Governance & Services on Demand',
        'Digital Empowerment of Citizens',
        'Manufacturing of Electronic Goods in India',
      ],
      correctAnswer: 4,
      explanation:
        "While manufacturing is supported by other initiatives like 'Make in India', the three core pillars of Digital India are creating digital infrastructure, delivering services digitally, and digital literacy/empowerment.",
      difficulty: 'Medium',
      hint: 'Focus on infrastructure, services, and citizen empowerment.',
    },
    {
      level: 17,
      mainsubject: 'Technology & Development',
      question: "In Machine Learning, what is 'Supervised Learning'?",
      options: [
        'Learning without any pre-existing data',
        'Learning from data that has been manually labeled with the correct output',
        'Learning by trial and error based on rewards and punishments',
        'Learning that is supervised in-person by a human',
      ],
      correctAnswer: 2,
      explanation:
        "In supervised learning, the algorithm learns from a labeled dataset, which is a dataset where each data point is tagged with the correct label or outcome. For example, images of cats labeled 'cat'.",
      difficulty: 'Medium',
      hint: "The data acts as a 'supervisor' or teacher.",
    },
    {
      level: 18,
      mainsubject: 'Technology & Development',
      question:
        "The 'Startup India Seed Fund Scheme' (SISFS) was launched by which ministry?",
      options: [
        'Ministry of Finance',
        'Ministry of Commerce and Industry',
        'Ministry of Science and Technology',
        'Ministry of Micro, Small and Medium Enterprises',
      ],
      correctAnswer: 2,
      explanation:
        'The scheme was launched by the Department for Promotion of Industry and Internal Trade (DPIIT), which falls under the Ministry of Commerce and Industry, to provide financial assistance to startups for proof of concept, prototype development, etc.',
      difficulty: 'Hard',
      hint: 'This ministry deals with industry and trade promotion.',
    },
    {
      level: 19,
      mainsubject: 'Technology & Development',
      question: "What does 'GAN' stand for in the context of AI?",
      options: [
        'Global Area Network',
        'General Access Node',
        'Generative Adversarial Network',
        'Geospatial Analytics Nucleus',
      ],
      correctAnswer: 3,
      explanation:
        "Generative Adversarial Networks (GANs) are a class of machine learning frameworks where two neural networks (the 'generator' and the 'discriminator') contest with each other. They are known for creating realistic images, so-called 'deepfakes'.",
      difficulty: 'Hard',
      hint: "It involves two networks in an 'adversarial' relationship.",
    },
    {
      level: 20,
      mainsubject: 'Technology & Development',
      question: "The 'MyGov.in' platform was launched to promote what?",
      options: [
        'Online education',
        'Citizen engagement in governance',
        'Digital payments',
        'Cybersecurity awareness',
      ],
      correctAnswer: 2,
      explanation:
        'MyGov is a citizen engagement platform that allows citizens to contribute their ideas and suggestions to the central government and associated organizations.',
      difficulty: 'Easy',
      hint: "The name suggests a connection between 'My' and 'Government'.",
    },
    {
      level: 21,
      mainsubject: 'Technology & Development',
      question:
        "The concept of 'Internet of Things' (IoT) is a key part of which Indian government initiative?",
      options: [
        'Swachh Bharat Mission',
        'Smart Cities Mission',
        'Ayushman Bharat',
        'PM-Kisan Samman Nidhi',
      ],
      correctAnswer: 2,
      explanation:
        'The Smart Cities Mission heavily relies on IoT devices for collecting real-time data to manage assets, resources, and services efficiently; for example, smart traffic lights, waste management, and water supply.',
      difficulty: 'Medium',
      hint: 'Which initiative focuses on using technology to manage urban areas?',
    },
    {
      level: 22,
      mainsubject: 'Technology & Development',
      question:
        'Which type of AI is focused on performing a specific task, such as playing chess or voice recognition?',
      options: [
        'Artificial General Intelligence (AGI)',
        'Artificial Superintelligence (ASI)',
        'Artificial Narrow Intelligence (ANI)',
        'Reactive Machines',
      ],
      correctAnswer: 3,
      explanation:
        'Artificial Narrow Intelligence (ANI), also known as Weak AI, is designed and trained for a particular task. Most of the AI we use today, like virtual assistants and image recognition software, is ANI.',
      difficulty: 'Medium',
      hint: "The AI's scope is 'narrow'.",
    },

    // 8.2: Biotechnology & Healthcare (20 Questions)
    {
      level: 23,
      mainsubject: 'Technology & Development',
      question:
        "India's first indigenously developed COVID-19 vaccine, Covaxin, was developed by Bharat Biotech in collaboration with which organization?",
      options: [
        'Serum Institute of India (SII)',
        'Indian Council of Medical Research (ICMR)',
        "Dr. Reddy's Laboratories",
        'World Health Organization (WHO)',
      ],
      correctAnswer: 2,
      explanation:
        'Covaxin was developed by Bharat Biotech in partnership with the Indian Council of Medical Research (ICMR) – National Institute of Virology (NIV).',
      difficulty: 'Easy',
      hint: "Think about India's top medical research body.",
    },
    {
      level: 24,
      mainsubject: 'Technology & Development',
      question:
        "What does 'CRISPR-Cas9' refer to in the field of biotechnology?",
      options: [
        'A new type of vaccine',
        'A powerful tool for editing genomes',
        'A computer algorithm for analyzing DNA',
        'A protein used in dietary supplements',
      ],
      correctAnswer: 2,
      explanation:
        'CRISPR-Cas9 is a unique technology that enables geneticists and medical researchers to edit parts of the genome by removing, adding or altering sections of the DNA sequence.',
      difficulty: 'Medium',
      hint: "It's often described as 'genetic scissors'.",
    },
    {
      level: 25,
      mainsubject: 'Technology & Development',
      question:
        'The Ayushman Bharat Digital Mission (ABDM) aims to create what?',
      options: [
        'A network of government-owned hospitals',
        'A free health insurance scheme for all citizens',
        'A seamless online platform creating a digital health ecosystem for India',
        'A program to manufacture medical devices in India',
      ],
      correctAnswer: 3,
      explanation:
        'ABDM aims to develop the backbone necessary to support the integrated digital health infrastructure of the country, linking patients, hospitals, labs, and pharmacies digitally.',
      difficulty: 'Medium',
      hint: "The key word is 'Digital Mission'.",
    },
    {
      level: 26,
      mainsubject: 'Technology & Development',
      question:
        "What type of vaccine is 'Covishield', which was widely used in India?",
      options: [
        'mRNA vaccine',
        'Inactivated virus vaccine',
        'Viral vector vaccine',
        'Subunit vaccine',
      ],
      correctAnswer: 3,
      explanation:
        'Covishield, developed by Oxford-AstraZeneca and manufactured by the Serum Institute of India, uses a modified chimpanzee adenovirus (a common cold virus) as a vector to deliver the coronavirus spike protein gene.',
      difficulty: 'Medium',
      hint: "It uses a harmless virus as a 'vector' or carrier.",
    },
    {
      level: 27,
      mainsubject: 'Technology & Development',
      question:
        "In genetic engineering, what is a 'Genetically Modified Organism' (GMO)?",
      options: [
        'An organism grown in a laboratory',
        'An organism whose genetic material has been altered using genetic engineering techniques',
        'A fossilized organism whose DNA has been sequenced',
        'A newly discovered species of organism',
      ],
      correctAnswer: 2,
      explanation:
        'A GMO is any organism whose genetic makeup has been modified in a laboratory using genetic engineering or transgenic technology. This creates combinations of plant, animal, bacterial and virus genes that do not occur in nature.',
      difficulty: 'Easy',
      hint: "The name 'Genetically Modified' is a direct clue.",
    },
    {
      level: 28,
      mainsubject: 'Technology & Development',
      question:
        "The 'eSanjeevani' platform is a government initiative for what purpose?",
      options: [
        'Tracking vaccine distribution',
        'Online medical record storage',
        'Telemedicine services',
        'Booking hospital appointments',
      ],
      correctAnswer: 3,
      explanation:
        'eSanjeevani is a national telemedicine service that offers tele-consultations, enabling patient-to-doctor consultations from the confines of their homes.',
      difficulty: 'Easy',
      hint: "Sanjeevani is a mythical life-restoring herb; 'e' implies electronic.",
    },
    {
      level: 29,
      mainsubject: 'Technology & Development',
      question:
        'What is the primary advantage of mRNA vaccines (like those from Pfizer and Moderna)?',
      options: [
        'They can be stored at room temperature',
        'They can be developed and manufactured more quickly than traditional vaccines',
        'They provide lifelong immunity with a single dose',
        'They are made from a weakened form of the actual virus',
      ],
      correctAnswer: 2,
      explanation:
        'mRNA vaccines have the advantage of rapid development because they do not require culturing viruses. The mRNA can be synthesized quickly in a lab.',
      difficulty: 'Hard',
      hint: 'Think about the speed of response during a pandemic.',
    },
    {
      level: 30,
      mainsubject: 'Technology & Development',
      question:
        'Bt cotton, a genetically modified crop grown in India, is engineered to be resistant to what?',
      options: ['Drought', 'Bollworms', 'Herbicides', 'High temperatures'],
      correctAnswer: 2,
      explanation:
        'Bt cotton contains a gene from the bacterium Bacillus thuringiensis (Bt) which produces a protein that is toxic to bollworms, a major pest for cotton crops.',
      difficulty: 'Medium',
      hint: "The 'Bt' comes from a bacterium that kills a specific type of pest.",
    },
    {
      level: 31,
      mainsubject: 'Technology & Development',
      question: "What is 'Bio-fortification'?",
      options: [
        'The process of adding fertilizers to soil',
        'The use of bacteria to create medicines',
        'The process of increasing the nutritional value of crops through breeding or genetic modification',
        'The creation of artificial biological environments',
      ],
      correctAnswer: 3,
      explanation:
        'Bio-fortification is the idea of breeding crops to increase their nutritional value. This can be done either through conventional selective breeding, or through genetic engineering.',
      difficulty: 'Medium',
      hint: "'Bio' refers to life, and 'fortification' means strengthening.",
    },
    {
      level: 32,
      mainsubject: 'Technology & Development',
      question:
        "What is the main purpose of the 'Co-WIN' portal, launched by the Indian government?",
      options: [
        'To provide information about COVID-19 symptoms',
        'To manage and monitor the COVID-19 vaccination drive',
        'To facilitate online doctor consultations for COVID-19',
        'To track the spread of the coronavirus in real-time',
      ],
      correctAnswer: 2,
      explanation:
        'The Co-WIN (Covid Vaccine Intelligence Network) platform was created for real-time monitoring of vaccine delivery, tracking, and for people to register for their vaccination slots.',
      difficulty: 'Easy',
      hint: "The name combines 'Co' for Covid and 'WIN' for Winning over the virus.",
    },
    {
      level: 33,
      mainsubject: 'Technology & Development',
      question: "What are 'stem cells'?",
      options: [
        'Cells that form the stem of a plant',
        'The most common type of cell in the human body',
        'Special human cells that can develop into many different cell types',
        'Cells that have been genetically modified',
      ],
      correctAnswer: 3,
      explanation:
        'Stem cells are undifferentiated or partially differentiated cells that can differentiate into various cell types and proliferate indefinitely to produce more of the same stem cell. They are a key area of medical research.',
      difficulty: 'Medium',
      hint: "They are the 'stem' from which other cells branch out.",
    },
    {
      level: 34,
      mainsubject: 'Technology & Development',
      question:
        "India's first indigenously developed Human Papillomavirus (HPV) vaccine, 'CERVAVAC', is designed to protect against which disease?",
      options: ['Tuberculosis', 'Polio', 'Cervical Cancer', 'Malaria'],
      correctAnswer: 3,
      explanation:
        'CERVAVAC, developed by the Serum Institute of India, is a quadrivalent HPV vaccine designed to protect against cervical cancer, which is primarily caused by the Human Papillomavirus.',
      difficulty: 'Medium',
      hint: "The 'CERVA' in the name is a clue.",
    },
    {
      level: 35,
      mainsubject: 'Technology & Development',
      question:
        "The 'Golden Rice' is a genetically engineered variety of rice developed to produce which nutrient?",
      options: [
        'Vitamin C',
        'Iron',
        'Protein',
        'Beta-carotene (a precursor of Vitamin A)',
      ],
      correctAnswer: 4,
      explanation:
        'Golden Rice is genetically engineered to produce beta-carotene, which the body converts into Vitamin A. It was developed to combat Vitamin A deficiency in populations that rely heavily on rice as a staple food.',
      difficulty: 'Medium',
      hint: "The 'Golden' color comes from the nutrient it produces.",
    },
    {
      level: 36,
      mainsubject: 'Technology & Development',
      question: "What is 'telemedicine'?",
      options: [
        'A special type of medicine for television actors',
        'The remote diagnosis and treatment of patients by means of telecommunications technology',
        'A medical procedure involving telescopes',
        'A branch of medicine dealing with long-distance travel health',
      ],
      correctAnswer: 2,
      explanation:
        'Telemedicine allows healthcare professionals to evaluate, diagnose, and treat patients at a distance using technology like video conferencing, smartphones, and wireless tools.',
      difficulty: 'Easy',
      hint: "'Tele' means 'at a distance'.",
    },
    {
      level: 37,
      mainsubject: 'Technology & Development',
      question: "In the context of healthcare, what does a 'stent' do?",
      options: [
        'It measures blood pressure',
        "It's a tiny tube inserted into a blocked passageway in the body to keep it open",
        "It's a device for monitoring heart rate",
        'It is used for filtering blood during dialysis',
      ],
      correctAnswer: 2,
      explanation:
        'A stent is most commonly inserted into arteries as part of a procedure called angioplasty. It helps to keep the artery open and prevent it from narrowing again, ensuring blood flow.',
      difficulty: 'Easy',
      hint: 'It acts as a scaffold inside a blood vessel.',
    },
    {
      level: 38,
      mainsubject: 'Technology & Development',
      question:
        'Mission Indradhanush, a health mission of the Government of India, is associated with what?',
      options: [
        'Eye care',
        'Cancer treatment',
        'Vaccination of children and pregnant women',
        'Malnutrition',
      ],
      correctAnswer: 3,
      explanation:
        'Mission Indradhanush aims to ensure full immunization with all available vaccines for children up to two years of age and pregnant women. The seven colors of the rainbow (Indradhanush) represent seven preventable diseases.',
      difficulty: 'Easy',
      hint: 'Indradhanush means rainbow, representing a spectrum of vaccines.',
    },
    {
      level: 39,
      mainsubject: 'Technology & Development',
      question:
        "The term 'Bioinformatics' refers to the application of computer technology to manage and analyze what kind of data?",
      options: [
        'Astronomical data',
        'Geological data',
        'Biological data',
        'Financial data',
      ],
      correctAnswer: 3,
      explanation:
        'Bioinformatics is an interdisciplinary field that develops methods and software tools for understanding biological data, particularly when the data sets are large and complex, such as in genomics and proteomics.',
      difficulty: 'Medium',
      hint: "The name combines 'Bio' and 'informatics'.",
    },
    {
      level: 40,
      mainsubject: 'Technology & Development',
      question:
        'Which of the following diseases has been declared eradicated from India due to a successful vaccination program?',
      options: ['Tuberculosis', 'Polio', 'Malaria', 'Dengue'],
      correctAnswer: 2,
      explanation:
        'India was declared polio-free by the World Health Organization (WHO) in March 2014 after a massive and sustained Pulse Polio vaccination campaign.',
      difficulty: 'Easy',
      hint: 'Amitabh Bachchan was a famous brand ambassador for this campaign.',
    },
    {
      level: 41,
      mainsubject: 'Technology & Development',
      question:
        'The study of the complete set of DNA, including all of its genes, in an organism is called:',
      options: ['Proteomics', 'Metabolomics', 'Genomics', 'Cytology'],
      correctAnswer: 3,
      explanation:
        "Genomics is the field of biology focusing on the structure, function, evolution, mapping, and editing of genomes. A genome is an organism's complete set of DNA.",
      difficulty: 'Easy',
      hint: "It is related to the word 'gene'.",
    },
    {
      level: 42,
      mainsubject: 'Technology & Development',
      question: "What is 'cloning' in biotechnology?",
      options: [
        'The process of creating a backup of computer data',
        'The process of producing genetically identical individuals of an organism',
        'The process of cleaning laboratory equipment',
        'The process of identifying new species',
      ],
      correctAnswer: 2,
      explanation:
        "Cloning is the process of creating a 'clone', which is an organism or cell, or group of organisms or cells, produced asexually from one ancestor or stock to which they are genetically identical. Dolly the sheep was a famous example.",
      difficulty: 'Easy',
      hint: 'Think of creating an exact copy.',
    },

    // 8.3: Space & Defence Technology (20 Questions)
    {
      level: 43,
      mainsubject: 'Technology & Development',
      question: 'What does ISRO stand for?',
      options: [
        'Indian Space Research Organization',
        'International Space Research Organization',
        'Indian Satellite Research Organization',
        'Institute of Space and Rocketry',
      ],
      correctAnswer: 1,
      explanation:
        'The Indian Space Research Organization is the national space agency of India, headquartered in Bengaluru.',
      difficulty: 'Easy',
      hint: "It is India's national space agency.",
    },
    {
      level: 44,
      mainsubject: 'Technology & Development',
      question: "India's Mars Orbiter Mission is also popularly known as what?",
      options: ['Chandrayaan', 'Gaganyaan', 'Mangalyaan', 'Aditya-L1'],
      correctAnswer: 3,
      explanation:
        "Mangalyaan, from the Sanskrit words 'Mangala' (Mars) and 'Yana' (craft, vehicle), was India's first interplanetary mission, making ISRO the fourth space agency to reach Mars.",
      difficulty: 'Easy',
      hint: "'Mangal' is the Hindi word for Mars.",
    },
    {
      level: 45,
      mainsubject: 'Technology & Development',
      question:
        'The Agni series of missiles, developed by DRDO, are what type of missiles?',
      options: [
        'Air-to-Air Missiles',
        'Surface-to-Air Missiles',
        'Ballistic Missiles',
        'Cruise Missiles',
      ],
      correctAnswer: 3,
      explanation:
        "The Agni missiles are a family of medium to intercontinental range ballistic missiles developed by India's Defence Research and Development Organisation (DRDO).",
      difficulty: 'Medium',
      hint: 'These missiles follow a high, arching trajectory.',
    },
    {
      level: 46,
      mainsubject: 'Technology & Development',
      question:
        'The Chandrayaan-3 mission successfully soft-landed its Vikram lander near which region of the Moon?',
      options: [
        'The North Pole',
        'The Equator',
        'The South Pole',
        'The Sea of Tranquility',
      ],
      correctAnswer: 3,
      explanation:
        'India became the first country to successfully land a spacecraft near the lunar south pole with its Chandrayaan-3 mission in August 2023.',
      difficulty: 'Easy',
      hint: 'India was the first nation to land in this specific polar region.',
    },
    {
      level: 47,
      mainsubject: 'Technology & Development',
      question:
        "What is the name of India's planned human spaceflight mission?",
      options: ['Vyommitra', 'Gaganyaan', 'Shukrayaan', 'Aditya'],
      correctAnswer: 2,
      explanation:
        'The Gaganyaan project aims to demonstrate human spaceflight capability by launching a crew of 3 members to an orbit of 400 km for a 3-day mission and bring them back safely to Earth.',
      difficulty: 'Easy',
      hint: "'Gagan' means sky in Sanskrit.",
    },
    {
      level: 48,
      mainsubject: 'Technology & Development',
      question: "Which launch vehicle is known as the 'workhorse' of ISRO?",
      options: ['GSLV MkIII', 'SSLV', 'PSLV', 'ASLV'],
      correctAnswer: 3,
      explanation:
        "The Polar Satellite Launch Vehicle (PSLV) is known as ISRO's 'workhorse' due to its high reliability and numerous successful launches of Indian and foreign satellites.",
      difficulty: 'Medium',
      hint: "It's known for its reliability and frequent use.",
    },
    {
      level: 49,
      mainsubject: 'Technology & Development',
      question:
        'DRDO (Defence Research and Development Organisation) operates under which ministry?',
      options: [
        'Ministry of Science and Technology',
        'Ministry of Defence',
        "Prime Minister's Office",
        'Ministry of Home Affairs',
      ],
      correctAnswer: 2,
      explanation:
        'DRDO is the R&D wing of the Ministry of Defence, Govt of India, with a vision to empower India with cutting-edge defence technologies.',
      difficulty: 'Easy',
      hint: "Its purpose is related to the country's defence.",
    },
    {
      level: 50,
      mainsubject: 'Technology & Development',
      question: "What is 'INS Vikrant'?",
      options: [
        'A nuclear submarine',
        "India's first indigenously-built aircraft carrier",
        'A destroyer ship',
        'A stealth frigate',
      ],
      correctAnswer: 2,
      explanation:
        "INS Vikrant is the first aircraft carrier to be designed and built in India, a significant milestone for the country's naval capabilities and 'Aatmanirbhar Bharat' initiative.",
      difficulty: 'Medium',
      hint: 'It carries fighter jets.',
    },
    {
      level: 51,
      mainsubject: 'Technology & Development',
      question: "India's Aditya-L1 mission is dedicated to the study of what?",
      options: ['Jupiter', 'Black Holes', 'The Sun', 'Asteroids'],
      correctAnswer: 3,
      explanation:
        'Aditya-L1 is the first Indian space-based observatory-class mission to study the Sun from a halo orbit around the first Sun-Earth Lagrangian point (L1).',
      difficulty: 'Easy',
      hint: "'Aditya' is a name for the Sun God.",
    },
    {
      level: 52,
      mainsubject: 'Technology & Development',
      question:
        "The BrahMos missile is a joint venture between India's DRDO and which other country?",
      options: ['USA', 'France', 'Israel', 'Russia'],
      correctAnswer: 4,
      explanation:
        "BrahMos is a supersonic cruise missile developed as a joint venture between India's DRDO and Russia's NPO Mashinostroyeniya. The name is a portmanteau of the Brahmaputra and Moskva rivers.",
      difficulty: 'Medium',
      hint: 'The name is a blend of two rivers, one Indian and one from the partner country.',
    },
    {
      level: 53,
      mainsubject: 'Technology & Development',
      question:
        'What is the primary difference between a ballistic missile and a cruise missile?',
      options: [
        'Ballistic missiles are faster than cruise missiles',
        'Ballistic missiles follow an unpowered, arching trajectory after burnout, while cruise missiles are self-propelled and fly at low altitudes',
        'Cruise missiles can only be launched from ships',
        'Ballistic missiles cannot carry nuclear warheads',
      ],
      correctAnswer: 2,
      explanation:
        'A ballistic missile is launched on a sub-orbital flight path and its trajectory is largely determined by gravity. A cruise missile is a self-propelled guided vehicle that flies within the atmosphere and uses jet engine technology.',
      difficulty: 'Hard',
      hint: 'Think of one as a thrown rock and the other as a small airplane.',
    },
    {
      level: 54,
      mainsubject: 'Technology & Development',
      question: 'What is NavIC, developed by ISRO?',
      options: [
        'A weather forecasting satellite system',
        'An independent regional navigation satellite system',
        'A telecommunication satellite',
        'A space telescope',
      ],
      correctAnswer: 2,
      explanation:
        "Navigation with Indian Constellation (NavIC) is India's own regional satellite navigation system, designed to provide accurate real-time positioning and timing services over India and the region extending 1,500 km around it.",
      difficulty: 'Medium',
      hint: "It's India's alternative to GPS.",
    },
    {
      level: 55,
      mainsubject: 'Technology & Development',
      question: "Who is known as the 'Father of the Indian Space Program'?",
      options: [
        'C. V. Raman',
        'Homi J. Bhabha',
        'Vikram Sarabhai',
        'A. P. J. Abdul Kalam',
      ],
      correctAnswer: 3,
      explanation:
        'Dr. Vikram Sarabhai is internationally regarded as the Father of the Indian Space Program. He was instrumental in establishing the Indian National Committee for Space Research (INCOSPAR) in 1962, which was later renamed ISRO.',
      difficulty: 'Easy',
      hint: 'The lander of the Chandrayaan missions is named after him.',
    },
    {
      level: 56,
      mainsubject: 'Technology & Development',
      question:
        "The 'Prithvi' series of missiles developed under the Integrated Guided Missile Development Programme (IGMDP) are:",
      options: [
        'Long-range intercontinental ballistic missiles',
        'Short-range surface-to-surface ballistic missiles',
        'Anti-tank guided missiles',
        'Submarine-launched ballistic missiles',
      ],
      correctAnswer: 2,
      explanation:
        "The Prithvi missile is a tactical surface-to-surface short-range ballistic missile (SRBM). It was the first missile to be developed under India's prestigious IGMDP.",
      difficulty: 'Medium',
      hint: "'Prithvi' means Earth, suggesting a surface-to-surface role.",
    },
    {
      level: 57,
      mainsubject: 'Technology & Development',
      question: "What is a 'geosynchronous orbit'?",
      options: [
        'A low Earth orbit that passes over the poles',
        "An orbit around a planet where the orbital period is equal to the planet's rotational period",
        'A highly elliptical orbit used for spy satellites',
        'An orbit very close to the Sun',
      ],
      correctAnswer: 2,
      explanation:
        "A satellite in a geosynchronous orbit returns to the exact same position in the sky after one sidereal day. A geostationary orbit is a special type of geosynchronous orbit where the satellite is always in the same position from the Earth's surface.",
      difficulty: 'Medium',
      hint: "The name implies it is 'synchronized' with the Earth's rotation.",
    },
    {
      level: 58,
      mainsubject: 'Technology & Development',
      question:
        "ISRO's launch centre, the Satish Dhawan Space Centre, is located in which state?",
      options: ['Kerala', 'Karnataka', 'Andhra Pradesh', 'Tamil Nadu'],
      correctAnswer: 3,
      explanation:
        'The Satish Dhawan Space Centre is located at Sriharikota in the Tirupati district of Andhra Pradesh. Its location on the east coast is ideal for launching satellites into eastward orbits.',
      difficulty: 'Easy',
      hint: "It's on the east coast of India.",
    },
    {
      level: 59,
      mainsubject: 'Technology & Development',
      question:
        'Which aircraft is the frontline multi-role fighter of the Indian Air Force, procured from France?',
      options: ['Sukhoi Su-30MKI', 'Tejas', 'MiG-29', 'Rafale'],
      correctAnswer: 4,
      explanation:
        'The Dassault Rafale is a French twin-engine, canard delta wing, multirole fighter aircraft. The Indian Air Force has inducted these jets to enhance its combat capabilities.',
      difficulty: 'Easy',
      hint: 'There was significant media coverage of its procurement.',
    },
    {
      level: 60,
      mainsubject: 'Technology & Development',
      question:
        'The rover that was part of the Chandrayaan-3 mission is named:',
      options: ['Pragyan', 'Vikram', 'Dhruv', 'Aditya'],
      correctAnswer: 1,
      explanation:
        "The rover's name is Pragyan, which means 'wisdom' in Sanskrit. The lander was named Vikram after Dr. Vikram Sarabhai.",
      difficulty: 'Easy',
      hint: "The name means 'wisdom' in Sanskrit.",
    },
    {
      level: 61,
      mainsubject: 'Technology & Development',
      question:
        "India's Anti-Satellite (ASAT) missile test conducted in 2019 was codenamed:",
      options: [
        'Operation Shakti',
        'Mission Shakti',
        'Operation Vijay',
        'Mission Gagan',
      ],
      correctAnswer: 2,
      explanation:
        'Mission Shakti was a military operation where India successfully tested an anti-satellite weapon, demonstrating its capability to intercept and destroy satellites in low Earth orbit.',
      difficulty: 'Medium',
      hint: "'Shakti' means power.",
    },
    {
      level: 62,
      mainsubject: 'Technology & Development',
      question:
        "What type of engine is used in the upper stage of India's GSLV Mk-II launch vehicle?",
      options: [
        'Solid fuel engine',
        'Vikas liquid fuel engine',
        'Scramjet engine',
        'Indigenously developed Cryogenic engine',
      ],
      correctAnswer: 4,
      explanation:
        'The GSLV (Geosynchronous Satellite Launch Vehicle) uses an indigenously developed cryogenic upper stage (CUS), which uses liquid hydrogen and liquid oxygen as propellants. This technology is complex and mastered by only a few nations.',
      difficulty: 'Hard',
      hint: 'This type of engine uses super-cooled propellants.',
    },

    // 8.4: Infrastructure Development (18 Questions)
    {
      level: 63,
      mainsubject: 'Technology & Development',
      question:
        "The 'Smart Cities Mission' in India was launched with the primary objective of:",
      options: [
        'Building 100 new cities from scratch',
        'Providing free Wi-Fi in all cities',
        "Promoting cities that provide core infrastructure, a clean and sustainable environment, and a decent quality of life to their citizens through 'smart' solutions",
        'Connecting all cities with high-speed rail',
      ],
      correctAnswer: 3,
      explanation:
        'The mission focuses on sustainable and inclusive development to create a replicable model which will act as a lighthouse to other aspiring cities. It is about improving existing cities, not building new ones from scratch.',
      difficulty: 'Easy',
      hint: 'It focuses on improving quality of life using technology.',
    },
    {
      level: 64,
      mainsubject: 'Technology & Development',
      question: "What is the main focus of the 'Bharatmala Pariyojana'?",
      options: [
        'Development of inland waterways',
        'Development of a network of roads, highways, and expressways',
        'Modernization of Indian Railways',
        'Construction of new airports',
      ],
      correctAnswer: 2,
      explanation:
        'Bharatmala Pariyojana is a centrally-sponsored and funded road and highways project of the Government of India, focusing on optimizing the efficiency of freight and passenger movement across the country.',
      difficulty: 'Easy',
      hint: "'Mala' can mean garland, suggesting a network connecting the country.",
    },
    {
      level: 65,
      mainsubject: 'Technology & Development',
      question:
        "The 'Sagarmala' Programme is aimed at the development of what infrastructure?",
      options: [
        'River interlinking',
        'Rural road networks',
        'Ports and coastal shipping',
        'Urban metro rail systems',
      ],
      correctAnswer: 3,
      explanation:
        "The Sagarmala Programme aims to promote port-led development in the country by harnessing India's 7,500 km long coastline, 14,500 km of potentially navigable waterways, and strategic location on key international maritime trade routes.",
      difficulty: 'Easy',
      hint: "'Sagar' means sea or ocean.",
    },
    {
      level: 66,
      mainsubject: 'Technology & Development',
      question:
        "The 'UDAN' scheme launched by the government is aimed at what?",
      options: [
        'Developing urban green spaces',
        'Improving national highways',
        'Making air travel affordable and widespread for the common man',
        'Providing electricity to all villages',
      ],
      correctAnswer: 3,
      explanation:
        "UDAN (Ude Desh ka Aam Naagrik) is a regional airport development and 'Regional Connectivity Scheme' (RCS) with the objective of letting the common citizen of the country fly.",
      difficulty: 'Easy',
      hint: "The full form is 'Ude Desh ka Aam Naagrik'.",
    },
    {
      level: 67,
      mainsubject: 'Technology & Development',
      question: "What is the primary goal of the 'AMRUT' mission?",
      options: [
        'To provide housing for all in urban areas',
        'To ensure that every household has access to a tap with an assured supply of water and a sewerage connection',
        'To develop 100 smart cities',
        'To create a national gas grid',
      ],
      correctAnswer: 2,
      explanation:
        'The Atal Mission for Rejuvenation and Urban Transformation (AMRUT) focuses on establishing infrastructure that could ensure robust sewage networks and water supply for urban transformation.',
      difficulty: 'Medium',
      hint: 'It focuses on basic urban amenities like water and sewerage.',
    },
    {
      level: 68,
      mainsubject: 'Technology & Development',
      question:
        "India's longest sea bridge, the Atal Setu (Mumbai Trans Harbour Sea Link), connects Mumbai with which area?",
      options: ['Goa', 'Pune', 'Navi Mumbai', 'Thane'],
      correctAnswer: 3,
      explanation:
        'The Atal Bihari Vajpayee Sewri–Nhava Sheva Atal Setu connects Mumbai with its satellite city, Navi Mumbai, significantly reducing travel time between the two.',
      difficulty: 'Easy',
      hint: 'It connects the island city to its planned satellite city.',
    },
    {
      level: 69,
      mainsubject: 'Technology & Development',
      question:
        "The 'Golden Quadrilateral' is a network of highways connecting which four major Indian cities?",
      options: [
        'Srinagar, Kanyakumari, Porbandar, Silchar',
        'Mumbai, Kolkata, Hyderabad, Bengaluru',
        'Delhi, Mumbai, Chennai, Kolkata',
        'Jaipur, Bhopal, Lucknow, Patna',
      ],
      correctAnswer: 3,
      explanation:
        'The Golden Quadrilateral is a highway network connecting most of the major industrial, agricultural and cultural centres of India. It forms a quadrilateral connecting the four major metro cities.',
      difficulty: 'Easy',
      hint: 'It connects the four main metro cities in a quadrilateral shape.',
    },
    {
      level: 70,
      mainsubject: 'Technology & Development',
      question:
        "The 'Dedicated Freight Corridor' (DFC) project is being implemented to primarily improve the transportation of what?",
      options: [
        'Passengers',
        'Goods and raw materials',
        'Military equipment',
        'Perishable food items',
      ],
      correctAnswer: 2,
      explanation:
        'The DFC project involves constructing a high-speed, high-capacity railway corridor exclusively for the transportation of freight, or goods. This aims to decongest the existing railway network and speed up freight movement.',
      difficulty: 'Medium',
      hint: "The name includes the word 'Freight'.",
    },
    {
      level: 71,
      mainsubject: 'Technology & Development',
      question:
        "Under the Smart Cities Mission, what does an 'Integrated Command and Control Centre' (ICCC) do?",
      options: [
        "It's a city's main entertainment hub",
        "It acts as a central 'nerve center' for managing city operations and services",
        "It's a training facility for municipal workers",
        "It is the main office of the city's mayor",
      ],
      correctAnswer: 2,
      explanation:
        'The ICCC serves as the brain of the city, collecting and analyzing real-time data from various sensors and systems (like traffic cameras, water sensors) to monitor and manage city services like traffic, water, waste, and security.',
      difficulty: 'Medium',
      hint: "It 'commands and controls' city services.",
    },
    {
      level: 72,
      mainsubject: 'Technology & Development',
      question:
        'The Pradhan Mantri Gram Sadak Yojana (PMGSY) is a nationwide plan to provide good all-weather road connectivity to what?',
      options: [
        'Major cities',
        'State capitals',
        'Unconnected habitations',
        'Ports and airports',
      ],
      correctAnswer: 3,
      explanation:
        'The primary objective of the PMGSY is to provide all-weather road connectivity to eligible unconnected habitations in rural areas of the country.',
      difficulty: 'Easy',
      hint: "'Gram' means village and 'Sadak' means road.",
    },
    {
      level: 73,
      mainsubject: 'Technology & Development',
      question:
        'The Chenani-Nashri Tunnel, renamed as Dr. Syama Prasad Mookerjee Tunnel, is located on which National Highway?',
      options: ['NH 1', 'NH 8', 'NH 44', 'NH 2'],
      correctAnswer: 3,
      explanation:
        'It is located on NH 44 in Jammu and Kashmir. This all-weather tunnel bypasses the snow-prone upper reaches and has reduced the distance between Jammu and Srinagar.',
      difficulty: 'Medium',
      hint: 'This highway is the longest in India, running from Srinagar to Kanyakumari.',
    },
    {
      level: 74,
      mainsubject: 'Technology & Development',
      question:
        "What is the primary objective of the 'Jal Marg Vikas Project'?",
      options: [
        'To provide clean drinking water to all villages',
        'To develop National Waterways for commercial navigation',
        'To interlink major rivers in India',
        'To promote rainwater harvesting',
      ],
      correctAnswer: 2,
      explanation:
        'The Jal Marg Vikas Project (JMVP) aims to enhance the transport capacity and reliability of National Waterway-1 (the Ganga river) for commercial navigation, providing an alternative, more environmentally friendly mode of transport.',
      difficulty: 'Medium',
      hint: "'Jal Marg' means 'Water Way'.",
    },
    {
      level: 75,
      mainsubject: 'Technology & Development',
      question:
        "The concept of 'Transit-Oriented Development' (TOD) in urban planning focuses on:",
      options: [
        'Building more car parking facilities',
        'Creating compact, walkable, mixed-use communities centered around high-quality train systems',
        'Developing cities in a circular shape',
        'Prioritizing road construction over public transport',
      ],
      correctAnswer: 2,
      explanation:
        'TOD is an urban planning strategy that aims to concentrate jobs, housing, and services around public transport stations to reduce reliance on private vehicles and promote sustainable urban growth.',
      difficulty: 'Hard',
      hint: "It is oriented around 'transit' hubs.",
    },
    {
      level: 76,
      mainsubject: 'Technology & Development',
      question:
        "The 'Setu Bharatam' programme was launched to make all National Highways free of what by 2019?",
      options: [
        'Toll booths',
        'Potholes',
        'Railway level crossings',
        'Advertisements',
      ],
      correctAnswer: 3,
      explanation:
        'The Setu Bharatam programme was launched with the aim of making all National Highways free of railway level crossings by building over-bridges and under-bridges to ensure safe and seamless travel.',
      difficulty: 'Medium',
      hint: "'Setu' means bridge.",
    },
    {
      level: 77,
      mainsubject: 'Technology & Development',
      question:
        "India's first 'Vande Bharat Express' train was launched between which two cities?",
      options: [
        'Mumbai and Ahmedabad',
        'Delhi and Varanasi',
        'Bengaluru and Chennai',
        'Kolkata and Patna',
      ],
      correctAnswer: 2,
      explanation:
        'The first Vande Bharat Express, also known as Train 18, was flagged off between New Delhi and Varanasi in February 2019.',
      difficulty: 'Medium',
      hint: 'It connected the national capital with a major religious city.',
    },
    {
      level: 78,
      mainsubject: 'Technology & Development',
      question: "What does 'FASTag', seen on vehicle windshields, enable?",
      options: [
        'GPS tracking of the vehicle',
        'Automatic toll payment without stopping',
        "Measurement of the vehicle's speed",
        'Access to in-car Wi-Fi',
      ],
      correctAnswer: 2,
      explanation:
        'FASTag is an electronic toll collection system operated by the NHAI. It employs Radio Frequency Identification (RFID) technology for making toll payments directly from the prepaid or savings account linked to it.',
      difficulty: 'Easy',
      hint: "It makes crossing toll plazas 'fast'.",
    },
    {
      level: 79,
      mainsubject: 'Technology & Development',
      question:
        'The Zoji La tunnel project will provide all-weather connectivity between which two regions?',
      options: [
        'Jammu and Kashmir Valley',
        'Srinagar and Leh (Ladakh)',
        'Manali and Leh',
        'Himachal Pradesh and Uttarakhand',
      ],
      correctAnswer: 2,
      explanation:
        'The Zoji La tunnel will provide strategic, all-weather connectivity between Srinagar, Kargil, and Leh. The Zoji La pass is currently snow-bound for a large part of the year, cutting off Ladakh from the rest of the country.',
      difficulty: 'Medium',
      hint: 'It connects the Kashmir Valley with Ladakh.',
    },
    {
      level: 80,
      mainsubject: 'Technology & Development',
      question:
        "Which of the following is a key component of the 'National Infrastructure Pipeline' (NIP)?",
      options: [
        'A list of all manufacturing companies in India',
        'A government-owned construction company',
        'A first-of-its-kind, whole-of-government exercise to provide world-class infrastructure projects',
        'A plan to privatize all national highways',
      ],
      correctAnswer: 3,
      explanation:
        'The National Infrastructure Pipeline (NIP) is a forward-looking plan that outlines infrastructure projects worth over ₹102 lakh crore to be implemented between 2020 and 2025 across various sectors like energy, roads, railways, and urban infrastructure.',
      difficulty: 'Hard',
      hint: "It is a 'pipeline' of future projects.",
    },

    // 8.5: Sustainable Development (20 Questions)
    {
      level: 81,
      mainsubject: 'Technology & Development',
      question:
        'The headquarters of the International Solar Alliance (ISA) is located in which Indian city?',
      options: ['New Delhi', 'Gurugram', 'Mumbai', 'Bengaluru'],
      correctAnswer: 2,
      explanation:
        'The International Solar Alliance is a treaty-based inter-governmental organization whose headquarters is located in Gurugram, Haryana, India.',
      difficulty: 'Easy',
      hint: "It's a major satellite city of Delhi.",
    },
    {
      level: 82,
      mainsubject: 'Technology & Development',
      question: "What is 'Green Technology'?",
      options: [
        'Technology that uses the color green in its design',
        'Technology whose use is intended to mitigate or reverse the effects of human activity on the environment',
        'The use of technology in agriculture',
        'A brand of consumer electronics',
      ],
      correctAnswer: 2,
      explanation:
        'Green technology, or clean technology, is the application of environmental science to conserve the natural environment and resources, and to curb the negative impacts of human involvement.',
      difficulty: 'Easy',
      hint: "It's technology that is environmentally friendly or 'green'.",
    },
    {
      level: 83,
      mainsubject: 'Technology & Development',
      question:
        "The 'National Solar Mission', also known as Jawaharlal Nehru National Solar Mission, is part of which larger plan?",
      options: [
        'The National Action Plan on Climate Change (NAPCC)',
        'The Smart Cities Mission',
        'The Make in India initiative',
        'The Digital India programme',
      ],
      correctAnswer: 1,
      explanation:
        "The National Solar Mission is one of the eight key national missions comprising India's National Action Plan on Climate Change (NAPCC).",
      difficulty: 'Medium',
      hint: "It's a mission related to climate.",
    },
    {
      level: 84,
      mainsubject: 'Technology & Development',
      question:
        'Which of the following is considered a source of renewable energy?',
      options: ['Coal', 'Natural Gas', 'Petroleum', 'Wind'],
      correctAnswer: 4,
      explanation:
        'Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight, wind, rain, tides, waves, and geothermal heat are common sources.',
      difficulty: 'Easy',
      hint: 'Which resource will not run out with use?',
    },
    {
      level: 85,
      mainsubject: 'Technology & Development',
      question: "What is 'Green Hydrogen'?",
      options: [
        'Hydrogen that is colored green for identification',
        'Hydrogen produced using renewable energy sources, like solar or wind power, to split water',
        'Hydrogen extracted from plants',
        'A type of natural gas',
      ],
      correctAnswer: 2,
      explanation:
        'Green hydrogen is produced through electrolysis powered by renewable energy, making it a clean fuel with no carbon emissions during its production.',
      difficulty: 'Medium',
      hint: "Its 'green' credential comes from how it's produced.",
    },
    {
      level: 86,
      mainsubject: 'Technology & Development',
      question:
        "The 'Kusum Scheme' by the Government of India is primarily aimed at helping whom?",
      options: [
        'Urban residents to install solar rooftops',
        'Farmers to install solar pumps and solar power plants',
        'Industrial factories to switch to renewable energy',
        'Electric vehicle manufacturers',
      ],
      correctAnswer: 2,
      explanation:
        "The Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) scheme is aimed at ensuring energy security for farmers, along with honouring India's commitment to increase the share of installed capacity of electric power from non-fossil-fuel sources.",
      difficulty: 'Medium',
      hint: "The 'K' in KUSUM stands for 'Kisan' (farmer).",
    },
    {
      level: 87,
      mainsubject: 'Technology & Development',
      question: "What does 'E-waste' primarily refer to?",
      options: [
        'Waste from power plants',
        'Food waste that can be composted',
        'Discarded electronic devices',
        'Waste paper from offices',
      ],
      correctAnswer: 3,
      explanation:
        'E-waste, or electronic waste, describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered e-waste.',
      difficulty: 'Easy',
      hint: "The 'E' stands for electronic.",
    },
    {
      level: 88,
      mainsubject: 'Technology & Development',
      question:
        'The Paris Agreement, to which India is a signatory, is a landmark international accord on what issue?',
      options: [
        'Nuclear disarmament',
        'Global trade',
        'Climate change',
        'Cybersecurity',
      ],
      correctAnswer: 3,
      explanation:
        'The Paris Agreement is a legally binding international treaty on climate change. Its goal is to limit global warming to well below 2, preferably to 1.5 degrees Celsius, compared to pre-industrial levels.',
      difficulty: 'Easy',
      hint: "It's about reducing global warming.",
    },
    {
      level: 89,
      mainsubject: 'Technology & Development',
      question:
        "In India, the 'PAT Scheme' is a flagship program of the Bureau of Energy Efficiency (BEE) aimed at what?",
      options: [
        'Promoting tourism',
        'Improving road safety',
        'Enhancing energy efficiency in large industries',
        'Providing patents for new inventions',
      ],
      correctAnswer: 3,
      explanation:
        'The Perform, Achieve and Trade (PAT) scheme is a market-based mechanism to enhance energy efficiency in large, energy-intensive industries by allowing them to trade energy-saving certificates.',
      difficulty: 'Hard',
      hint: "The name suggests 'Performing' better in energy use, 'Achieving' targets, and 'Trading' the results.",
    },
    {
      level: 90,
      mainsubject: 'Technology & Development',
      question:
        'Which of these is a major challenge associated with solar and wind power?',
      options: [
        'They produce a lot of air pollution',
        'The fuel for them is very expensive',
        'They are not available continuously (intermittency)',
        'They require a very small area of land',
      ],
      correctAnswer: 3,
      explanation:
        "The biggest challenge for solar and wind power is intermittency – solar power is not available at night, and wind power is not available when the wind isn't blowing. This requires backup power sources or energy storage solutions.",
      difficulty: 'Medium',
      hint: 'What happens to solar panels at night or wind turbines on a calm day?',
    },
    {
      level: 91,
      mainsubject: 'Technology & Development',
      question: "The term 'Net Zero Emissions' means:",
      options: [
        'Completely stopping all emissions of greenhouse gases',
        'Achieving a balance between the greenhouse gases put into the atmosphere and those taken out',
        'Planting enough trees to cover the entire country',
        'Switching entirely to nuclear power',
      ],
      correctAnswer: 2,
      explanation:
        'Net zero means not adding new emissions to the atmosphere. This can be achieved by a combination of reducing emissions (like switching to renewable energy) and removing greenhouse gases from the atmosphere (like through forests or carbon capture technology).',
      difficulty: 'Medium',
      hint: "The 'net' result is zero, not the initial emission itself.",
    },
    {
      level: 92,
      mainsubject: 'Technology & Development',
      question:
        'What is the primary function of a catalytic converter in a vehicle?',
      options: [
        "To improve the engine's fuel efficiency",
        'To cool the engine',
        'To convert toxic pollutants in exhaust gas to less toxic pollutants',
        'To silence the engine noise',
      ],
      correctAnswer: 3,
      explanation:
        'A catalytic converter is an exhaust emission control device that converts toxic gases and pollutants in exhaust gas from an internal combustion engine into less-toxic pollutants by catalyzing a redox reaction.',
      difficulty: 'Medium',
      hint: "It acts as a 'catalyst' for a chemical reaction to clean the exhaust.",
    },
    {
      level: 93,
      mainsubject: 'Technology & Development',
      question: "The 'FAME India' Scheme is associated with promoting what?",
      options: [
        'Organic farming',
        'The use of electric and hybrid vehicles',
        'The construction of green buildings',
        'Exports of Indian handicrafts',
      ],
      correctAnswer: 2,
      explanation:
        'FAME stands for Faster Adoption and Manufacturing of (Hybrid &) Electric Vehicles in India. It is a scheme under the National Electric Mobility Mission Plan to encourage the adoption of electric vehicles.',
      difficulty: 'Easy',
      hint: "Think about 'Faster Adoption' of a new type of vehicle.",
    },
    {
      level: 94,
      mainsubject: 'Technology & Development',
      question: "What is 'carbon sequestration'?",
      options: [
        'The process of burning fossil fuels',
        'The long-term storage of carbon dioxide to mitigate global warming',
        "The measurement of a product's carbon footprint",
        'A method for producing carbon fibre',
      ],
      correctAnswer: 2,
      explanation:
        'Carbon sequestration is the process of capturing and storing atmospheric carbon dioxide. It is one method of reducing the amount of CO2 in the atmosphere with the goal of reducing global climate change. Natural forests are a major form of carbon sequestration.',
      difficulty: 'Hard',
      hint: "To 'sequester' means to isolate or hide away.",
    },
    {
      level: 95,
      mainsubject: 'Technology & Development',
      question:
        'The Bhadla Solar Park, one of the largest solar parks in the world, is located in which Indian state?',
      options: ['Gujarat', 'Rajasthan', 'Andhra Pradesh', 'Madhya Pradesh'],
      correctAnswer: 2,
      explanation:
        'Bhadla Solar Park is located in the Jodhpur district of Rajasthan. The region is known for its high solar irradiation, making it ideal for solar power generation.',
      difficulty: 'Medium',
      hint: "It's located in a desert state.",
    },
    {
      level: 96,
      mainsubject: 'Technology & Development',
      question: "What does the 'GRIHA' rating system in India evaluate?",
      options: [
        'The nutritional value of food products',
        'The energy efficiency of electronic appliances',
        'The environmental performance of a building',
        'The safety of automobiles',
      ],
      correctAnswer: 3,
      explanation:
        'GRIHA (Green Rating for Integrated Habitat Assessment) is a national rating system for green buildings in India. It evaluates the environmental performance of a building holistically over its entire life cycle.',
      difficulty: 'Hard',
      hint: "'Griha' means house or habitat.",
    },
    {
      level: 97,
      mainsubject: 'Technology & Development',
      question: "Which of the following is a 'biodegradable' material?",
      options: ['Plastic bag', 'Glass bottle', 'Jute bag', 'Aluminum can'],
      correctAnswer: 3,
      explanation:
        'Biodegradable materials can be broken down into natural materials in the environment by microorganisms. Jute is a natural plant fibre and is biodegradable, while plastic, glass, and aluminum are not (or take an extremely long time to degrade).',
      difficulty: 'Easy',
      hint: 'Which one comes from a plant?',
    },
    {
      level: 98,
      mainsubject: 'Technology & Development',
      question:
        'The National Green Tribunal (NGT) in India was established to handle cases related to what?',
      options: [
        'Consumer rights',
        'Cybercrime',
        'Financial fraud',
        'Environmental protection and conservation',
      ],
      correctAnswer: 4,
      explanation:
        'The NGT is a specialized body equipped with the necessary expertise to handle environmental disputes involving multi-disciplinary issues. It was established for effective and expeditious disposal of cases relating to environmental protection.',
      difficulty: 'Easy',
      hint: "The name includes 'Green'.",
    },
    {
      level: 99,
      mainsubject: 'Technology & Development',
      question: "What is 'Ethanol Blending'?",
      options: [
        'A technique for making alcohol stronger',
        'A process for water purification',
        'The practice of mixing ethanol with petrol to reduce crude oil import and emissions',
        'A method to preserve food',
      ],
      correctAnswer: 3,
      explanation:
        'The Ethanol Blended Petrol (EBP) programme aims to promote the use of alternative and environmentally friendly fuels. Ethanol is a biofuel derived from sources like sugarcane, and blending it with petrol helps reduce the consumption of fossil fuels.',
      difficulty: 'Medium',
      hint: 'It involves mixing a biofuel with a fossil fuel.',
    },
    {
      level: 100,
      mainsubject: 'Technology & Development',
      question:
        "The concept of 'Sustainable Development Goals' (SDGs) was formally adopted by which organization?",
      options: [
        'World Bank',
        'World Trade Organization (WTO)',
        'United Nations (UN)',
        'G20',
      ],
      correctAnswer: 3,
      explanation:
        'The 17 Sustainable Development Goals (SDGs) were adopted by all United Nations Member States in 2015 as a universal call to action to end poverty, protect the planet, and ensure that all people enjoy peace and prosperity by 2030.',
      difficulty: 'Easy',
      hint: "It's the primary international body for global cooperation.",
    },
  ],
  'Language & Communication': [
    {
      level: 1,
      mainsubject: 'Language & Communication',
      question: "What is the plural form of 'child'?",
      options: ['Childs', 'Children', 'Childes', "Child's"],
      correctAnswer: 2,
      explanation:
        "The plural form of 'child' is 'children', which is an irregular plural form in English.",
      difficulty: 'Easy',
      hint: "It's an irregular plural",
    },
    {
      level: 2,
      mainsubject: 'Language & Communication',
      question: "Which of the following is a synonym for 'beautiful'?",
      options: ['Ugly', 'Pretty', 'Dark', 'Small'],
      correctAnswer: 2,
      explanation:
        "'Pretty' is a synonym for 'beautiful', both meaning attractive or pleasing to look at.",
      difficulty: 'Easy',
      hint: 'Think about attractive appearance',
    },
  ],
};

// Helper function to get quiz data for a specific subject
export const getQuizDataForSubject = subject => {
  // Reduced logging for performance

  // Try exact match first
  if (QUIZ_DATA[subject]) {
    return QUIZ_DATA[subject];
  }

  // Try to find a match (case insensitive)
  const subjectKey = Object.keys(QUIZ_DATA).find(
    key => key.toLowerCase() === subject.toLowerCase(),
  );

  if (subjectKey) {
    return QUIZ_DATA[subjectKey];
  }

  return [];
};

// Helper function to get total levels for a subject
export const getTotalLevelsForSubject = subject => {
  const data = getQuizDataForSubject(subject);
  return data.length;
};

// Helper function to get quiz for a specific level
export const getQuizForLevel = (subject, level) => {
  const data = getQuizDataForSubject(subject);
  return data.find(quiz => quiz.level === level);
};

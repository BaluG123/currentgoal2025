# PSIESI - Government Exam Preparation App

A comprehensive React Native mobile application designed to help students prepare for Indian & Karnataka Government Exams. The app provides organized study materials covering all major subjects with detailed subtopics and topics.

## 🎯 Features

- **9 Major Subjects**: History, Geography, Political Science, Economics, Science, Current Affairs, Culture & Society, Technology & Development, and Language & Communication
- **Beautiful UI/UX**: Modern design with gradient cards, smooth animations, and intuitive navigation
- **Drawer Navigation**: Easy access to all subjects through a beautiful drawer menu
- **Detailed Content**: Each subject contains multiple subtopics with comprehensive topic lists
- **Responsive Design**: Optimized for both Android and iOS devices
- **Color-coded Subjects**: Each subject has its own color theme for easy identification

## 📱 Screenshots

The app features:
- **Home Screen**: Grid layout of all subjects with gradient cards
- **Subject Detail Screen**: Expandable list of subtopics and topics
- **Drawer Navigation**: Custom drawer with user profile and subject navigation

## 🏗️ Project Structure

```
src/
├── components/
│   └── CustomDrawerContent.js    # Custom drawer navigation component
├── constants/
│   └── colors.js                 # Color themes and gradients
├── data/
│   └── subjects.js               # Complete subject data with topics
├── navigation/
│   └── AppNavigator.js           # Main navigation setup
├── screens/
│   ├── HomeScreen.js             # Main home screen
│   └── SubjectDetailScreen.js    # Subject detail screen
└── utils/                        # Utility functions (future use)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 18)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PSIESI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the app**

   **For Android:**
   ```bash
   npm run android
   ```

   **For iOS:**
   ```bash
   npm run ios
   ```

## 📚 Subjects Covered

### 1. History
- Ancient Indian History
- Medieval Indian History
- Modern Indian History
- Karnataka History (State-Specific)

### 2. Geography
- Physical Geography
- Indian Geography
- Karnataka Geography

### 3. Political Science
- Constitution of India
- Governance
- Important Amendments & Acts

### 4. Economics
- Basic Concepts
- Indian Economy
- Karnataka Economy
- Current Economic Issues

### 5. Science
- Physics
- Chemistry
- Biology
- Environmental Science
- Space & Defence Science

### 6. Current Affairs
- National & International Current Affairs
- Indian Government Schemes & Programs
- Karnataka Government Schemes
- Recent Bills & Acts

### 7. Culture & Society
- Indian Culture
- Karnataka Culture
- Society

### 8. Technology & Development
- Information Technology & AI
- Biotechnology & Healthcare
- Space & Defence Technology
- Infrastructure Development
- Sustainable Development

### 9. Language & Communication
- English / Kannada Grammar
- Reading & Writing
- Official & Administrative

## 🎨 Design System

The app uses a comprehensive color system with:
- **Primary Colors**: Deep blue theme
- **Subject-specific Colors**: Each subject has its own color identity
- **Gradients**: Beautiful gradient backgrounds for cards and headers
- **Typography**: Consistent font sizes and weights
- **Spacing**: Systematic spacing using consistent margins and padding

## 🔧 Technologies Used

- **React Native**: Cross-platform mobile development
- **React Navigation**: Navigation library with drawer and stack navigators
- **React Native Vector Icons**: Material Design icons
- **React Native Linear Gradient**: Gradient backgrounds
- **React Native Gesture Handler**: Touch handling for drawer navigation
- **React Native Reanimated**: Smooth animations

## 📦 Dependencies

```json
{
  "@react-navigation/drawer": "^6.x.x",
  "@react-navigation/native": "^6.x.x",
  "@react-navigation/stack": "^6.x.x",
  "react-native-gesture-handler": "^2.x.x",
  "react-native-linear-gradient": "^2.x.x",
  "react-native-reanimated": "^3.x.x",
  "react-native-safe-area-context": "^4.x.x",
  "react-native-screens": "^3.x.x",
  "react-native-vector-icons": "^10.x.x"
}
```

## 🚧 Future Enhancements

- [ ] Quiz/MCQ functionality
- [ ] Progress tracking
- [ ] Study timer
- [ ] Offline content download
- [ ] Search functionality
- [ ] Bookmark important topics
- [ ] Dark mode support
- [ ] Push notifications for study reminders
- [ ] Performance analytics
- [ ] Social features (study groups)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Development Team

- **PSIESI Team** - Government Exam Preparation Specialists

## 📞 Support

For support and queries, please contact:
- Email: support@psiesi.com
- Website: www.psiesi.com

---

**Note**: This app is designed specifically for Indian & Karnataka Government Exam preparation. The content is comprehensive and regularly updated to match the latest exam patterns and syllabi.

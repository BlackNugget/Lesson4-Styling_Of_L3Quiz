// Lesson 4 Quiz App Styles
import React, { useState } from 'react';
import { ScrollView, StatusBar, Text, View, Alert, Button, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6';

const questions = [
  {
    question: "Who is this Demon Slayer?",
    image: require('./image/tanjiro.gif'),
    options: ['Tanjiro', 'Rengoku', 'Nezuko'],
    answer: 'Tanjiro',
  },
  {
    question: "Which two participated in this fight?",
    image: require('./image/Tengen.gif'),
    options: ['Giyu and Inosuke', 'Sanemi and Mitsuri', 'Tengen and Tanjiro', 'Tengen and Gyutaro'],
    answer: 'Tengen and Gyutaro',
  },
  {
    question: "Who is this Hashira?",
    image: require('./image/Rengoku.gif'),
    options: ['Donut', 'Rengoku', 'Fire Boy', 'Blazing Lion'],
    answer: 'Rengoku',
  },
  {
    question: "Who is this Demon Slayer and what is his/her rank?",
    image: require('./image/Inosuke.gif'),
    options: ['Kanoe - Inosuke', 'Hashira - Inosuke', 'Hashira - Pigman', 'Kanoe - WildBoar'],
    answer: 'Kanoe - Inosuke',
  },
  {
    question: "What is this Breathing Technique?",
    image: require('./image/Giyu.webp'),
    options: ['Water Breathing', 'Fire Breathing', 'Lightning Breathing', 'Wind Breathing'],
    answer: 'Water Breathing',
  },
  {
    question: "What is this Breathing Technique?",
    image: require('./image/Fire.webp'),
    options: ['Water Breathing', 'Fire Breathing', 'Lightning Breathing', 'Wind Breathing'],
    answer: 'Fire Breathing',
  },
];

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(""));

  const handlePickerChange = (value, index) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = value;
    setSelectedAnswers(newAnswers);
  };

  const submitAnswers = () => {
    const score = selectedAnswers.reduce((count, answer, index) => {
      return answer === questions[index].answer ? count + 1 : count;
    }, 0);
    Alert.alert(`You have ${score} correct answers!`);
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Icon name="bolt" size={30} color="#FFB000" />
          <Text style={styles.headerText}>Darren's Quiz</Text>
        </View>
        {questions.map((q, index) => (
            <View key={index} style={styles.questionContainer}>
              <Text style={styles.questionText}>{q.question}</Text>
              <Image source={q.image} style={styles.image} />
              <RNPickerSelect
                  onValueChange={(value) => handlePickerChange(value, index)}
                  items={q.options.map(option => ({ label: option, value: option }))}
                  style={pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{
                    label: 'Select an answer...',
                    value: null,
                    color: '#9EA0A4',
                  }}
              />
            </View>
        ))}
        <Button title="SUBMIT ANSWERS" onPress={submitAnswers} color="#FF4500" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: 'black',
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#FFB000',
    letterSpacing: 1.5,
  },
  questionContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 10,
  },
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    color: '#333',
    backgroundColor: '#FFEEE5',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  inputAndroid: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    color: '#333',
    backgroundColor: 'darkgray',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  placeholder: {
    color: 'black',
  },
});

export default App;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ProgressBarAndroidComponent } from 'react-native';
import exercises from '../../assets/data/exercises.json';               // Importing exercises data from template of tutorial
import ExerciseListItem from '../components/ExerciseListItem';   // Importing the ExerciseListItem component to render each exercise in the list

export default function App() {  
  return (
    <View style={styles.container}>
      <FlatList                                                     // Used to "render" a list of items
        data = {exercises}                                          // Data we want to render are the exercises
        contentContainerStyle = {{gap: 5}}                          // Gap between the items in the list
        keyExtractor={(item, index) => item.name + index}           // Key extractor is used to extract the key from each item in the list
        renderItem = {({item}) => <ExerciseListItem item={item}/>}  // This allows us to stylize the items in the list, with "item" being the parameter of the function
      />
      <StatusBar style="auto" />
    </View>
  );
}

// Style sheet for the text within the lists
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
});

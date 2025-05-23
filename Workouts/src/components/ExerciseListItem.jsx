import { StyleSheet, Text, View, Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function ExerciseListItem({item}) {
    return (
      <Link href = {`/${item.name}`} asChild>
        <Pressable style = {styles.exerciseContainer}>
          <Text style = {styles.exerciseName}>
              {item.name}
          </Text>

          <Text style = {styles.exerciseSubtitle}>
              <Text style = {styles.subValue}>{item.muscle}</Text> | {''}
              <Text style = {styles.subValue}>{item.equipment}</Text>
          </Text>
        </Pressable>
      </Link>
    );
}

const styles = StyleSheet.create({
    exerciseContainer: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      gap: 5,
      marginVertical: 2,
      marginHorizontal: 5,

      //Dropshadow details below:
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },

      shadowOpacity: 0.25,
      shadowRadius: 2,

      elevation: 2,
    },
    exerciseName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    exerciseSubtitle: {
      fontSize: 12,
      color: 'dimgray',
    },
    subValue: {
      textTransform: 'capitalize',
    },
  }
);
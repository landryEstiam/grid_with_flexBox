import { StyleSheet, Text, View } from 'react-native';

export default function Square({text}) {
    return (
        <View style={styles.square}>
             <Text style={styles.text}>{text}</Text>
        </View>
    );
}
  

const styles = StyleSheet.create({
    square: {
        borderColor: "#fff",
        borderWidth: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
  });
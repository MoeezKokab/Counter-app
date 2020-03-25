import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './Component/Header';
import Card from './Component/Card';


const counter = 0;
export default function App() {
  const [count, next] = useState(counter)
  return (

    <View>
      <Header title=' Counter' />

      <View style={styles.container}>
        <Card style={styles.card}>
         
          <Text style={styles.text}> {count} </Text>

          <Button title='add' onPress={() => next(count + 1)} />

          <Button title='reset' onPress={() => next(0)} />
          <Button title='sub' onPress={() => next(count - 1)} />
        
          <Button title='add 100' onPress={() => next(count + 100)} />
          <Text style={styles.text}>{count}</Text>
          </Card>
         
        
      </View>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'yellow',
    height: "100%",
    width: '100%',
    
   


  },
  card:{
    fontSize:20,
    flexDirection: "row",
    alignContent:"center",
    justifyContent:"space-around",
  },
  text:{
    fontSize:20,
    fontStyle:"italic",
  }

});

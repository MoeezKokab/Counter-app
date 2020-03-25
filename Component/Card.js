import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Card = props=>{
return( 
<View style={{...styles.cards,...props.style}}>{props.children}</View>


);};


const styles =StyleSheet.create({
    cards:{
        
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius: 6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        elevation:8,
        padding:10,
        marginVertical:23,

        borderRadius:100,
    },
});


export default Card ;
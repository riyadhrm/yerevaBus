﻿import React, {Component} from 'react';import {AppRegistry,TouchableHighlight ,Dimensions,StyleSheet, Text, View,TextInput} from 'react-native';import ToSearchButton from './ToSearchButton';export default class FromInput extends Component<Props>{    constructor(){        super();        this.state= {                     }     }          render (){          return (          <View style={styles.textInputContainer}>                                  <Text style={styles.text}>To:</Text>                                 <TextInput style={styles.textInput} placeholder="where to?">                 </TextInput>                <ToSearchButton navigation={this.props.navigation}/>                 </View>           )       }   }const styles = StyleSheet.create({  textInputContainer: {    backgroundColor: '#f8f8ff',    height: 50,    top: 27,    borderWidth: 0,    left:5,    borderWidth: 2,    borderRadius:20,    width:"95%" ,    borderColor: 'grey',    flexDirection:'row'    },    text:{    top: 12.5,    fontSize: 20,    fontWeight: 'bold',    justifyContent: 'center',    alignItems: 'center',    left:5    },   textInput: {        flex:1,        color: 'black',        fontSize: 16,        left: 10,        top:2,        backgroundColor: 'transparent',    },})        
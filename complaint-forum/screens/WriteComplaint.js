import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
//import db from '../config'
//import firebase from 'firebase'
 
export default class WriteComplaint extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'darkcyan'}
                    centerComponent = {{
                        text : 'Complaint Forum',
                        style : { color: 'paleturquoise', fontSize: 24, fontFamily: 'fantasy', fontWeight: 'bold'}
                    }}
                />
                <TextInput 
                    placeholder="Complaint"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                    placeholderTextColor='black'/>
                <TextInput
                    placeholder="Plaintiff"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Explain your struggles..."
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                   // onPress={this.submitStory}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkcyan',
  },
  title:{
      height: 40,
      borderWidth: 4,
      marginTop: 40,
      margin: 10,
      backgroundColor:'paleturquoise',
      padding: 6,
      textAlign: 'center',

  },
  author: {
      textAlign: 'center',
      height: 40,
      backgroundColor:'paleturquoise',
      borderWidth: 4,
      margin: 10,
       padding: 6,
  },
  storyText: {
      textAlign: 'center',
      height: 250,
      backgroundColor:'paleturquoise',
      borderWidth: 4,
      margin: 9, 
      padding: 6,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 4,
      backgroundColor: 'paleturquoise',
      width: 80,
      height: 40,color:'white',
  },
  buttonText: {
      textAlign: 'center',
      fontWeight: 'bold',
      color:'black',
  }
});
import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';
export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId :'',
            password:'',


        }
    }
    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
.then((response)=>{
    return Alert.alert("User Added Succesfully")
})
.catch(function(error){
    var errorCode=error.code;
    var errormessage=error.errormessage;
    return Alert.alert(errormessage)
});
    }
    userLogin=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
.then(()=>{
    return Alert.alert("Succesfully Logined")
})
.catch(function(error){
    var errorCode=error.code;
    var errormessage=error.errormessage;
    return Alert.alert(errormessage)
});
    }
    render(){
        return(
<View style={styles.container}>
    <View>
    <Text style={styles.title}>
BookSanta
</Text>
</View>
<View>
    <TextInput style={styles.loginbox}
    placeholder="abc@eg.com"
    keyboardType='email-address'
    onChangeText={(text)=>{
        this.setState({
            emailId:text,
        })
            
    }}
    >

    </TextInput>
    <TextInput style={styles.loginbox}
    secureTextEntry={true}
    placeholder="Enter Password"
   
    onChangeText={(text)=>{
        this.setState({
            password:text,
        })
            
    }}
    >

    </TextInput>
    <TouchableOpacity
    style={[styles.button,{
        marginBottom:20,
    marginTop:20,
}]}
onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}}
    >
        <Text style={style.buttonText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={[styles.button,{
        marginBottom:20,
    marginTop:20,
}]}
onPress={()=>{this.userSignUp(this.state.emailId,this.state.password)}}
    >
        <Text style={style.buttonText}>SignUp</Text>
    </TouchableOpacity>
</View>
</View>
        )
    }
}
const styles = StyleSheet.create({
  container:{
flex:1,
backgroundColor:'#F8BE85'

  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})



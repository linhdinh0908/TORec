import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
            // Background Linear Gradient
                colors={['#1C5A8A','rgba(72, 218, 4, 0.51)']}
                style={styles.background}
            />
            <LinearGradient
            // Glass Effect
                colors={['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.09)']}
                style={styles.glass}
            >
                <Text style = {styles.text}>TORec</Text>
                <Image
                  style = {styles.logo}
                  source = {require ('../assets/logo.png')}
                />
                <Text style = {styles.call}>Click start to see where your garbages go!</Text>
                <View style = {styles.startbutton}>
                    <Button 
                        title = "Start"
                        color = 'black'
                        onPress={() => console.log('Button Clicked')}
                    >
                    </Button>
                </View>
            </LinearGradient>  
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    glass: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      width: 288,
      height: 599,
      top: 102,
      bottom: 111,
      borderRadius: 30,
    
    },
    text: {
      position: 'absolute',
      width: 185,
      height: 95,
      top: 50,
      fontSize: 55,
      color: 'black',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 65,
      display: 'flex',
      alignItems: 'flex-end',
      textAlign: 'center',
      letterSpacing: -0.02,
    },
    logo: {
        position: 'absolute',
        width: 270,
        height: 215,
        top: 128,
    },
    call: {
      position: 'absolute',
      width: 171,
      height: 71,
      bottom: 140,
  
      fontStyle: 'italic',
      fontWeight: '500',
      fontSize: 15,
      lineHeight: 18,
      display: 'flex',
      alignItems: 'flex-end',
      textAlign: 'center',
      letterSpacing: -0.02,
      color: 'black',
    },
    startbutton: {
      position: 'absolute',
      width: 160,
      height: 40,
      top: 469,
      backgroundColor: 'rgba(255,255,255, 0.8)',
      borderColor: 'white',
      borderRadius: 50,
    }
  });
  
export default HomeScreen;
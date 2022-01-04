import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'


import Home from './src/screens/Home.js'





const App = () => {
  return (
    <View style = {styles.container}>
      <Home />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})


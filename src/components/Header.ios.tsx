import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';


interface HeaderProps {
  darkMode: boolean;
  handleChangeMode: () => void;
}

export function Header({ darkMode, handleChangeMode}: HeaderProps) {
  return (
    <SafeAreaView style={{backgroundColor: darkMode ? '#282B5A' : '#273FAD'}}>
      <View style={[styles.header, {backgroundColor: darkMode ? '#282B5A' : '#273FAD'}]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
        
      
      </View>
      <View >
      <TouchableOpacity onPress={handleChangeMode} >
        <View 
        style={[styles.touchableOpacity, 
          { backgroundColor: darkMode ?'#FFF' : '#262626'}]}>
          <Text
            style={{color: darkMode ? '#262626' : '#FFF'}}
          >{darkMode ?  'Light' : 'Dark'}</Text>
        </View>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  touchableOpacity: {
    alignSelf: 'flex-end',
    borderRadius: 3,
    marginRight: 2,
    padding: 2
  }
});

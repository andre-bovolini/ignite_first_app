import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

interface HeaderProps {
  darkMode: boolean;
  handleChangeMode: () => void;
}

export function Header({ darkMode, handleChangeMode }: HeaderProps) {
  return (
    <View style={[styles.header, {backgroundColor: darkMode ? '#282B5A' : '#273FAD'}]}>
      <Text style={styles.headerText}>too.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <TouchableOpacity>
        <View>
          <Text>Dark</Text>
        </View>
      </TouchableOpacity>
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
    </View>
    
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
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

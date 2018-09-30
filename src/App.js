import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import  { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    return(
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Header headerText="Tech Stack"/>
                </View>
                <LibraryList />
            </View>    
        </Provider>
        
    )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    }
  });

export default App;
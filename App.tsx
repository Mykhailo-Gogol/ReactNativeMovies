import React, {StrictMode} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';
import {moviesApi} from './src/redux/api';
import MainScreen from './src/screens/MainScreen';

function App(): JSX.Element {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApiProvider api={moviesApi}>
            <SafeAreaView style={styles.app}>
              <MainScreen />
            </SafeAreaView>
          </ApiProvider>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;

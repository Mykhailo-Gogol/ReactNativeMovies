import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import MainScreen from './src/screens/MainScreen';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faHome, faBookmark} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faBookmark);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.app}>
          <MainScreen />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;

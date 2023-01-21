import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigation/rootNavigation';
import {store} from './src/service/redux/store';

const App = () => {
  
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <RootNavigation />
      </View>
    </Provider>
  );
};
export default App;

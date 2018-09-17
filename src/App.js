import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBHYurVkTt8CQtKRGJeT50WBn70cTMvDPM',
            authDomain: 'manager-64cb1.firebaseapp.com',
            databaseURL: 'https://manager-64cb1.firebaseio.com',
            projectId: 'manager-64cb1',
            storageBucket: 'manager-64cb1.appspot.com',
            messagingSenderId: '562824975803'
        };

        firebase.initializeApp(config);
    }
    
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
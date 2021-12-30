import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import StartPage from './components/StartPage';

const App: React.FC = () => (
    <Provider store={store}>
        <StartPage />
    </Provider>
);

export default App;

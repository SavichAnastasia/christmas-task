import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import styles from './styles.module.scss';
import ChristmasTree from '../ChristmasTree/index';
import ChristmasToys from '../ChristmasToys/index';
import MainPage from '../MainPage';
import WelcomePage from './WelcomPage';

const StartPage: React.FC = () => {
    const [isStarted, setIsStarted] = useState(false);
    return <div>{isStarted ? <MainPage /> : <WelcomePage onClick={setIsStarted} />}</div>;
};

export default StartPage;

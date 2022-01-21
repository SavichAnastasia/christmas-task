import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './styles.module.scss';
import ChristmasTree from '../ChristmasTree/index';
import ChristmasToys from '../ChristmasToys/index';
import MainPage from '../MainPage';
import WelcomePage from './WelcomPage';

const StartPage: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<WelcomePage />}></Route>
                <Route path="/game" element={<MainPage />}></Route>
            </Routes>
        </Router>
    );
};

export default StartPage;

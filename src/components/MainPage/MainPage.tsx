import React from 'react';
import { Route } from 'react-router-dom';
import styles from './styles.module.scss';
import ChristmasTree from '../ChristmasTree/index';
import ChristmasToys from '../ChristmasToys/index';
import MenuButton from '../MenuButton';

const MainPage: React.FC = () => {
    return (
        <div>
            <MenuButton text="ChristmasTree" linkTo="ChristmasTree" />
            <MenuButton text="ChristmasToys" linkTo="ChristmasToys" />
        </div>
    );
};

export default MainPage;

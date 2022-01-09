import React from 'react';
import styles from './styles.module.scss';
import MenuButton from '../MenuButton';
import ToyCard from '../ToyCard';

const MainPage: React.FC = () => {
    return (
        <div className={styles.mainPage}>
            MainPage
            {/* <MenuButton text="ChristmasTree" linkTo="ChristmasTree" />
            <MenuButton text="ChristmasToys" linkTo="ChristmasToys" /> */}
            <ToyCard />
        </div>
    );
};

export default MainPage;

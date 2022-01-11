import React from 'react';
import styles from './styles.module.scss';
import MenuButton from '../MenuButton';
import ChristmasToys from '../ChristmasToys';

const MainPage: React.FC = () => {
    return (
        <div className={styles.mainPage}>
            {/* <MenuButton text="ChristmasTree" linkTo="ChristmasTree" />
            <MenuButton text="ChristmasToys" linkTo="ChristmasToys" /> */}
            <ChristmasToys />
        </div>
    );
};

export default MainPage;

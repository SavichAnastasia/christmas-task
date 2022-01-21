import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';

const WelcomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Помоги бабушке нарядить ёлку</div>
            <Link className={styles.link} to="game">
                <Button variant="contained" size="large" color="success" className={styles.startBtn}>
                    Начать
                </Button>
            </Link>
        </div>
    );
};

export default WelcomePage;

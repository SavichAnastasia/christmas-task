import React, { SetStateAction, Dispatch } from 'react';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';

type WelcomePageProps = {
    onClick: Dispatch<SetStateAction<boolean>>;
};

const WelcomePage: React.FC<WelcomePageProps> = ({ onClick }) => {
    return (
        <div>
            <Button variant="contained" onClick={() => onClick(true)}>
                Start
            </Button>
            ;
        </div>
    );
};

export default WelcomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';

type MenuButtonProps = {
    text: string;
    linkTo: string;
};

const MenuButton: React.FC<MenuButtonProps> = ({ text, linkTo }) => {
    return (
        <Link className={styles.link} to={linkTo}>
            <Button className={styles.menuItem}>{text}</Button>
        </Link>
    );
};

export default MenuButton;

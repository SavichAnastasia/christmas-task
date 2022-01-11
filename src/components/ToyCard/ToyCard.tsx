import React from 'react';
import { Card, CardHeader, Typography, CardMedia, CardContent } from '@mui/material';
import { ReactSVG } from 'react-svg';
import styles from './styles.module.scss';
import heartIcon from './heart.svg';

type MenuButtonProps = {
    name: string;
    count: number;
    year: number;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
    num: string;
};

const ToyCard: React.FC<MenuButtonProps> = ({ name, count, year, shape, color, size, favorite, num }) => {
    return (
        <Card className={styles.toyCard} sx={{ minWidth: 275 }}>
            <CardHeader title={name} titleTypographyProps={{ className: styles.cardHeaderTitle }} />
            <div className={styles.cardContainer}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://raw.githubusercontent.com/SavichAnastasia/stage1-tasks/christmas-task/assets/toys/${num}.png`}
                    alt="toy"
                    className={styles.toyImg}
                />
                <CardContent className={styles.toyContent}>
                    <Typography variant="body2">count: {count}</Typography>
                    <Typography variant="body2">year: {year}</Typography>
                    <Typography variant="body2">shape: {shape}</Typography>
                    <Typography variant="body2">color: {color}</Typography>
                    <Typography variant="body2">size: {size}</Typography>
                    <ReactSVG src={heartIcon} className={`${styles.icon} ${favorite ? styles.red : styles.grey}`} />
                </CardContent>
            </div>
        </Card>
    );
};

export default ToyCard;

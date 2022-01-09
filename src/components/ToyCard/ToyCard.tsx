import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './styles.module.scss';

type MenuButtonProps = {
    name?: string;
    count?: string;
};

const ToyCard: React.FC<MenuButtonProps> = ({ name = 'name', count = '0' }) => {
    return (
        <Card className={styles.toyCard} sx={{ maxWidth: 300 }}>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <div className={styles.cardContainer}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="toy"
                    className={styles.toyImg}
                />
                <CardContent className={styles.toyContent}>
                    <Typography variant="body2">count: {count}</Typography>
                    <Typography variant="body2">year: 1960</Typography>
                    <Typography variant="body2">shape: шар</Typography>
                    <Typography variant="body2">color: желтый</Typography>
                    <Typography variant="body2">size: большой</Typography>
                    <Typography variant="body2">favorite: false</Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default ToyCard;

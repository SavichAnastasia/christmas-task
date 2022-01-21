import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import styles from './styles.module.scss';
import data from '../../../data';
import ToyCard from '../ToyCard';

type ChristmasToy = {
    num: string;
    name: string;
    count: number;
    year: number;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
};

const ChristmasTree: React.FC = () => {
    const [toys, setToys] = useState<Array<ChristmasToy> | null>(null);

    useEffect(
        () =>
            setToys(
                data.map((toy) => ({
                    ...toy,
                    count: Number(toy.count),
                    year: Number(toy.year),
                })),
            ),
        [],
    );

    return (
        <Container className={styles.container} maxWidth="lg">
            {toys &&
                toys.map((toy: ChristmasToy) => (
                    <ToyCard
                        key={toy.num}
                        name={toy.name}
                        count={toy.count}
                        year={toy.year}
                        shape={toy.shape}
                        color={toy.color}
                        size={toy.size}
                        favorite={toy.favorite}
                        num={toy.num}
                    />
                ))}
        </Container>
    );
};

export default ChristmasTree;

import React, { useState } from 'react';
import { Container, Slider } from '@mui/material';

const Filters: React.FC = () => {
    type ValueType = number | number[];
    const [value, setValue] = useState<ValueType>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Slider
                getAriaLabel={() => 'Number range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                // getAriaValueText={valuetext}
                size="medium"
                defaultValue={5}
                sx={{
                    width: 300,
                    color: '#24C5DB',
                    '& .MuiSlider-thumb': { color: '#ffffff' },
                    '& .css-1kz0hui-MuiSlider-valueLabel': { backgroundColor: 'transparent' },
                }}
                min={1}
                max={100}
            />
        </Container>
    );
};

export default Filters;

import React, { useState } from 'react';
import { Tabs, Box, Tab, Typography } from '@mui/material';
import styles from './styles.module.scss';
import ChristmasTree from '../ChristmasTree';
import ChristmasToys from '../ChristmasToys';
import Filters from '../Filters';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const MainPage: React.FC = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={styles.mainPage}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="tabs" centered>
                        <Tab label="Игрушки" {...a11yProps(0)} />
                        <Tab label="Ёлка" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Filters />
                    <ChristmasToys />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ChristmasTree />
                </TabPanel>
            </Box>
        </div>
    );
};

export default MainPage;

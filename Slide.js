import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { TbFilter } from 'react-icons/tb';
import Checkbox from './checkbox';


export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
    });
    const [active, setActive] = React.useState(0)
    const [index, setIndex] = React.useState(0)

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const Data = (i) => {
        setIndex(i)
        setActive(i)
    }

    const DataPreview = [
        {
            name: 'DEGREE',
            data: [
                { title: 'B.Tech.' },
                { title: 'Engineering - Har...' },
                { title: 'Engineering - Soft...' },
                { title: 'IT & Information S...' },
                { title: 'B.Tech. Engg...' },
                { title: 'Engineering - Sci...' },
                { title: 'Engineering - Civil' }
                
            ]

            
        },
        {
            name: 'SPECIALIZATION',
            data: [
                { title: 'Commerce' },
                { title: 'Accounting' },
                { title: 'Finance' },
            ]
        },
        {
            name: 'INSTITUTE TYPE',
            data: [
                { title: 'Govt.' },
                { title: 'Private' },
                { title: 'Public' },

            ]
            
        },
        {
            name: 'EXAM',
            data: [
                { title: 'JEE Mains' },
                { title: 'JEE Advanced' },
                { title: 'CAT' },
                { title: 'AIEEE' },
                { title: 'MAT' },
                { title: 'GATE' },
                { title: 'PGCET' },
            ]
        },
        {
            name: 'TOP Companies',
            data: [
                { title: 'Google' },
                { title: 'Microsoft' },
                { title: 'Apple' },
                { title: 'EPAM' },
                { title: 'Oracle' },
                { title: 'Infosys' },
                { title: 'TCS' },
            ]
        },
        {
            name: 'FEES RANGE',
            data: [
                { title: 'Less than 1Lakh' },
                { title: '1 to 2 Lakh' },
                { title: '2 to 3 Lakh' },
                { title: '3 to 4 Lakh' },
                { title: '4 to 5 Lakh' },
                { title: '5 to 6 Lakh' },
                { title: '6 to 7 Lakh' },
                { title: '7 to 8 Lakh' },
                { title: '8 to 9 Lakh' },
                { title: '9 to 10 Lakh' },
                { title: 'Greater than 10 Lakh' },
            ]
        },
        {
            name: 'HOSTEL',
            data: [
                { title: 'Boys Hostel' },
                { title: 'Girls Hostel' }
            ]
        },
        {
            name: 'COURSES',
            data: [
                { title: 'B.tech' },
                { title: 'MCA' },
                { title: 'MBA' },
            ]
        }

    ]

    const list = (anchor) => (
        <>
            <div className='main_head'>
                <h1 className='main_heading'>Filter Jobs</h1>
                <div className='main_Anchor' onClick={toggleDrawer('top', false)}>Clear All</div>
            </div>
            <Divider />

            <div className='main'>
                <div className='main1'>
                    <Box className='main_box'
                        // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                        role="presentation"
                    >
                        <List>
                            {['DEGREE', 'SPALIZATION', 'INSTITUTE TYPE', 'EXAM', 'TOP Companies', 'FEES RANGE', 'HOSTEL', 'COURSES',].map((text, index) => (
                                <>
                                    <ListItem className={active == index ? 'activeList listItem' : 'listItem'} key={text} disablePadding onClick={() => { Data(index) }}>
                                        <ListItemButton>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                </>
                            ))}
                        </List>
                    </Box>
                </div>
                <div className='main2'>
                    <Checkbox DataPreview={DataPreview[index]} />
                </div>
            </div>
            <div className='footer' >
                <button  onClick={toggleDrawer('top', false)}>Apply</button>

            </div>
        </>
    );

    return (
        <div>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <TbFilter style={{ fontSize: '26px', color: 'black' }} />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        className='drawer'
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}



import React, { useState } from 'react';
import contents from './content';
import Products from './products';
import Slide from './slide';
import Divider from '@mui/material/Divider';
import { RxCross2 } from 'react-icons/rx';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";


const Index = () => {
    const [f, setF] = useState([]);
    const [expanded, setExpanded] = useState({});


    const checkBox = [
        {
            title: 'DEGREE',
            data: [
                { id: 1, name: 'B.Tech.' },
                { id: 2, name: 'Engineering - Har...' },
                { id: 3, name: 'Engineering - Soft...' },
                { id: 4, name: 'IT & Information S...' },
                { id: 5, name: 'B.Tech. Engg...' },
                { id: 6, name: 'Engineering - Sci...' },
                { id: 7, name: 'Engineering - Civil' }
            ]
        },
        {
            title: 'SPECIALIZATION',
            data: [
                { id: 8, name: 'Commerce' },
                { id: 9, name: 'Accounting' },
                { id: 10, name: 'Finance' },
            ]
        },
        {
            title: 'INSTITUTE TYPE',
            data: [
                { id: 11, name: 'Govt.' },
                { id: 12, name: 'Private' },
                { id: 13, name: 'Public' },
            ]
        },
        {
            title: 'EXAM',
            data: [
                { id: 14, name: 'JEE Mains' },
                { id: 15, name: 'JEE Advanced' },
                { id: 16, name: 'CAT' },
                { id: 17, name: 'AIEEE' },
                { id: 18, name: 'MAT' },
                { id: 19, name: 'GATE' },
                { id: 20, name: 'PGCET' },
            ]
        },
        {
            title: 'TOP Companies',
            data: [
                { id: 21, name: 'Google' },
                { id: 22, name: 'Microsoft' },
                { id: 23, name: 'Apple' },
                { id: 24, name: 'EPAM' },
                { id: 25, name: 'Oracle' },
                { id: 26, name: 'Infosys' },
                { id: 27, name: 'TCS' },
            ]
        },
        {
            title: 'FEES RANGE',
            data: [
                { id: 28, name: 'Less than 1Lakh' },
                { id: 29, name: '1 to 2 Lakh' },
                { id: 30, name: '2 to 3 Lakh' },
                { id: 31, name: '3 to 4 Lakh' },
                { id: 32, name: '4 to 5 Lakh' },
                { id: 33, name: '5 to 6 Lakh' },
                { id: 34, name: '6 to 7 Lakh' },
                { id: 35, name: '7 to 8 Lakh' },
                { id: 36, name: '8 to 9 Lakh' },
                { id: 37, name: '9 to 10 Lakh' },
                { id: 38, name: 'Greater than 10 Lakh' },
            ]
        },
        {
            title: 'HOSTEL',
            data: [
                { id: 39, name: 'Boys Hostel' },
                { id: 40, name: 'Girls Hostel' }
            ]
        },
        {
            title: 'COURSES',
            data: [
                { id: 41, name: 'B.tech' },
                { id: 42, name: 'MCA' },
                { id: 43, name: 'MBA' },
            ]
        },

    ]

    function AddRemoveItem(data, name) {
        if (!data) return false;
        let findEle = f.find((element) => element === data);

        if (findEle) {
            setF([...f].filter((ele) => ele !== data));
            // If a name is provided, uncheck the corresponding checkbox
            if (name) {
                let checkbox = document.getElementById(`${name + 50}`);
                if (checkbox) {
                    checkbox.checked = false;
                }
            }
        } else {
            setF([...f, data]);
        }
    }

    const toggleExpand = (title) => {
        setExpanded({ ...expanded, [title]: !expanded[title] });
    };

    return (
        <>
            <div className='App'>
                <div className='aside-box'>
                    <div className='main_head'>
                        <h4 className='main_heading'>All Filters </h4>
                        <div className='main_Anchor'> </div>
                    </div>
                    <Divider variant="middle" className='divider1' />
                    <div className='aside2'>
                        {checkBox && checkBox.map((ele, index) => (
                            <div className='department' key={index}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h6>{ele.title}</h6>
                                    <div onClick={() => toggleExpand(ele.title)} style={{cursor:"pointer"}}>
                                        {expanded[ele.title] ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                                    </div>
                                </div>
                                {expanded[ele.title] &&
                                    <div>
                                        {ele.data && ele.data.length > 0 && ele.data.map((e, i) => (
                                            <label htmlFor={`${e.name + 50}`} key={i} style={{ display: 'inline-flex', alignItems: 'center', width: '100%', fontSize: '16px', cursor: 'pointer' }}>
                                                <input onClick={() => { AddRemoveItem(e.name) }} type="checkbox" id={`${e.name + 50}`} style={{ margin: '8px 4px 5px 4px' }} defaultChecked={false} />
                                                {e.name}
                                            </label>
                                        ))}
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>

                <div className='right-box'>
                    <div className='heading1'>
                        <div className='head' style={{ fontSize: '30px', fontWeight: 600 }} > College Found </div>
                        <div className='heading2' style={{ fontSize: '30px', fontWeight: 600 }} > <Slide />
                        </div>
                    </div>

                    <div className='filter' style={{ fontSize: '20px', marginLeft: '30px', display: 'flex', flexWrap: 'wrap' }}>
                        Applied Filter:
                        {f.map((e, i) => {
                            return <div  key={i} id={`${e + 40}`} style={{ border: '1px solid #ced4da', padding: '8px', fontSize: '15px', marginLeft: '10px' }} onClick={() => { AddRemoveItem(e, e) }}>{e}<span  style={{ color: 'black', marginLeft: '10px', cursor: 'pointer', marginTop: '10px' }}><RxCross2 style={{cursor:"pointer"}} /></span></div>
                        })}
                    </div>
                    {contents.map(contents => (
                        <Products
                            key={contents.id}
                            image={contents.image}
                            name={contents.name}
                            price={contents.price}
                            year={contents.year}
                            totalSales={contents.totalSales}
                            timeLeft={contents.timeLeft}
                            rating={contents.rating}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Index;

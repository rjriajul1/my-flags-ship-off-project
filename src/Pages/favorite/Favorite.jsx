import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getLocalStore } from '../../Utilies/LocalStorage';
import BookMarkPhone from '../bookMarkPhone/BookMarkPhone';

const Favorite = () => {
    const data = useLoaderData();
    const [bookMarks, setBookMarks] = useState([]);
   useEffect(()=>{
    const localStoredItem = getLocalStore();
    const convertedNumber = localStoredItem.map(item=>parseInt(item));
    const items = data.filter(item=> convertedNumber.includes(item.id));
    setBookMarks(items);
   },[data]);
   console.log(bookMarks);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-8'>
           {
            bookMarks.map(bookMark=><BookMarkPhone key={bookMark.id} bookMark={bookMark}></BookMarkPhone>)
           }
        </div>
    );
};

export default Favorite;
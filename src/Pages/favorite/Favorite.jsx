import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getLocalStore, removeFormLocalStorage } from '../../Utilies/LocalStorage';
import BookMarkPhone from '../bookMarkPhone/BookMarkPhone';
import EmptyState from '../../components/emptyState/EmptyState';

const Favorite = () => {
    const data = useLoaderData();
    const [bookMarks, setBookMarks] = useState([]);
   useEffect(()=>{
    const localStoredItem = getLocalStore();
    const convertedNumber = localStoredItem.map(item=>parseInt(item));
    const items = data.filter(item=> convertedNumber.includes(item.id));
    setBookMarks(items);
   },[data]);

   const handleDelete = (id) =>{
    console.log(id);
    removeFormLocalStorage(id)
    setBookMarks(bookMarks.filter((item)=>item.id !== id))
   }

   if(bookMarks.length < 1) return <EmptyState/>
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-8 px-6'>
           {
            bookMarks.map(bookMark=>(
               <BookMarkPhone key={bookMark.id} bookMark={bookMark} handleDelete={handleDelete} ></BookMarkPhone>
           
                
            ))
           }
        </div>
    );
};

export default Favorite;
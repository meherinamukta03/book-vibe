"use client"
import { Bookcontext } from '@/context/bookContext';
import { iBook } from '@/type/bookType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';



const ReadButton = ({book}:{book:iBook}) => {

    const { readBooks,setReadBooks,}=useContext(Bookcontext)

const handleReadBook=()=>{

setReadBooks([...readBooks,book])
 toast.success(`You have read "${book.bookName}"`) 
}



    return (
       <button className="btn  px-8" onClick={()=>handleReadBook()}>
                        Read</button>
    );
};

export default  ReadButton ;
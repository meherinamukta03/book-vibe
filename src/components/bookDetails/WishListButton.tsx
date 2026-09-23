"use client"
import { Bookcontext } from '@/context/bookContext';
import { iBook } from '@/type/bookType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';



const WishListButton = ({book}:{book:iBook}) => {

    const {    wishlist ,setwishlist}=useContext(Bookcontext)

const handleAdToWish=()=>{

setwishlist([...wishlist,book])
 toast.success(`You have read "${book.bookName}"`) 
}



    return (
       <button className="btn btn-success  px-8" onClick={()=>handleAdToWish()}>
                        WishList</button>
    );
};

export default  WishListButton ;
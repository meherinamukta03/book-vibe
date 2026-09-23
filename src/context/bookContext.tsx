"use client"
import React, { createContext, ReactNode, useState } from 'react';


 export const Bookcontext=createContext({})


const BooksProvider = ({children}:{children:ReactNode}) => {

const [readBooks,setReadBooks]=useState([])
const [wishlist ,setwishlist]=useState([])


  
    const sharedata={
     readBooks,
     setReadBooks,
      wishlist ,setwishlist

    }


    return (
       < Bookcontext.Provider value ={sharedata}>{children}</Bookcontext.Provider>
    );
};

export default BooksProvider;
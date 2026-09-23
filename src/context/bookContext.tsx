"use client"

import { iBook } from '@/type/bookType';
import React, { createContext, ReactNode, useState } from 'react';


interface IBooksContext{


readBooks:iBook[];
setReadBooks:React.Dispatch<React.SetStateAction<iBook[] >>;

wishlist:iBook[];
setWishlist:React.Dispatch<React.SetStateAction<iBook[] >>
}





 export const Bookcontext=createContext<IBooksContext>(

    {

     readBooks:[],
     setReadBooks:()=>{},

      wishlist :[],
      
 setWishlist:()=>{}



    }
 )


const BooksProvider = ({children}:{children:ReactNode}) => {

const [readBooks,setReadBooks]=useState<iBook[]>([])
const [wishlist, setWishlist] = useState<iBook[]>([])


  
    const sharedata={
     readBooks,
     setReadBooks,
      wishlist ,setWishlist

    }


    return (
       < Bookcontext.Provider value ={sharedata}>{children}</Bookcontext.Provider>
    );
};

export default BooksProvider;
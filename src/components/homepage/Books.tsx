import React from 'react';
import BookCard from '../shared/BookCard';

import { iBook } from '@/type/bookType';

const getBooks = async () => {
try{
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)
    const data=await  res.json()
    return data}
    catch(error){
        console.error("Error fetching book data",error)
        return []
    }
}




const Books = async () => {


    const books = await getBooks()

    return (

        <section className='container mx-auto my-[70px] max-w-6xl  px-6'>

            
<div className='grid grid-cols-3 gap-4  '>


                {books.slice(0,9).map((book:iBook )=> <BookCard key={book.bookId} book={book}></BookCard> )}
</div>

        </section>
    );
};

export default Books;
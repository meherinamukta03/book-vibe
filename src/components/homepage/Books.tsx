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
           <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
          Our Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
          Explore some  Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover amazing stories, timeless classics, and inspiring books from
          talented authors.
        </p>
      </div>
            
<div className='grid grid-cols-3 gap-4  '>


                {books.slice(0,9).map((book:iBook)=> <BookCard key={book.bookId} book={book}></BookCard> )}
</div>

        </section>
    );
};

export default Books;
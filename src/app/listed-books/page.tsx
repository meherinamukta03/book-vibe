"use client"



import BookCard from '@/components/shared/BookCard';
import ListedBookCard from '@/components/shared/ListedBookCard';
import { Bookcontext } from '@/context/bookContext';
import { iBook } from '@/type/bookType';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {

    const { readBooks, wishlist } = useContext(Bookcontext)




    // console.log(readBooks)
    // console.log(wishlist)







    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")


    const sortBook = (books: iBook[]) => {

        const sortedBooks = [...books]



        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating)
        }
        else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
        }
        else if (sortBy === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        return sortedBooks
    }

    const sortedReadBooks = sortBook(readBooks)
    const sortedWishlist = sortBook(wishlist)


    return (
        <div className='container mx-auto py-[20px'>

            <h2 className='my-4 bg-amber-100 rounded-3xl py-16 font-bold text-6xl text-center'>
                Listed books</h2>

            <div className='text-center'>
                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(e.target.value as "rating" | "pages" | "year")}

                    defaultValue="Pick a Runtime" className="select select-success">


                    <option disabled={true}>Sort by</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of pages</option>
                    <option value={"year"}>published year</option>
                </select>


            </div>





            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Read Books (${readBooks.length}) `} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {
                        sortedReadBooks.length > 0 ?
                            sortedReadBooks.map((book) => {

                                return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>

                            }) : (<p className='text-center font-semibold text-lg'>No read book found</p>)


                    }



                </div>

                <input type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Wistlist Books (${wishlist.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">


                    {
                        sortedWishlist.length > 0 ?
                            sortedWishlist.map((book: iBook) => {

                                return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>

                            }) : (<p className='text-center font-semibold text-lg'>No wishlist book found</p>)



                    }
                </div>


            </div>
        </div>
    );
};

export default ListedBooks;
import ReadBooks from '@/components/bookDetails/ReadBooks';
import WishListButton from '@/components/bookDetails/WishListButton';
import { iBook } from '@/type/bookType';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsProps{

params: Promise<{
    bookId:string
}>
}

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

const BookDetailsPage = async({params}:IBookDetailsProps) => {
    const { bookId }= await params
const bookData=await getBooks()
const book=bookData.find((book:iBook)=>String(book.bookId)==String(bookId)) as iBook

    return (
       <div className="container mx-auto px-4 py-10">

        <div className="card lg:card-side bg-base-100 shadow-xl rounded-2xl overflow-hidden">

            {/* Book Image */}
            <figure className="lg:w-2/5 bg-base-200 p-8">
                <Image
                    src={book.image}
                    width={500}
                    height={300}
                    alt={book.bookName}
                    className="rounded-xl object-contain max-h-[450px]"
                />
            </figure>

            {/* Book Details */}
            <div className="card-body lg:w-3/5 p-8">

                {/* Category & Rating */}
                <div className="flex items-center justify-between gap-4">
                    <span className="badge badge-success badge-outline">
                        {book.category}
                    </span>

                    <span className="font-semibold">
                        ⭐ {book.rating}
                    </span>
                </div>

                {/* Book Name */}
                <h2 className="card-title text-3xl md:text-4xl font-bold mt-3">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="text-gray-500">
                    by <span className="font-semibold text-base-content">
                        {book.author}
                    </span>
                </p>

                {/* Review */}
                <div className="mt-4">
                    <h3 className="font-bold text-lg mb-2">
                        Review
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        {book.review}
                    </p>
                </div>

                {/* Book Information */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">

                    <div className="bg-base-200 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Pages</p>
                        <p className="font-bold text-lg">
                            {book.totalPages}
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Publisher</p>
                        <p className="font-bold text-lg">
                            {book.publisher}
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Published</p>
                        <p className="font-bold text-lg">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                    {book.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-ghost"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <div className="card-actions  mt-6">
                   <ReadBooks book={book}></ReadBooks>
                    <WishListButton book={book} ></WishListButton>
                </div>

            </div>
        </div>
    </div>
    );
};

export default BookDetailsPage;
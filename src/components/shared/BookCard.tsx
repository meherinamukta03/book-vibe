import Image from "next/image";
import React from "react";
import { iBook } from '@/type/bookType';
import Link from "next/link";

interface iBookProps{

    book:iBook
}





const BookCard = ({book}:iBookProps) => {
    const {
        bookName,
        author,
        image,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = book;

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 overflow-hidden">

            {/* Book Image */}
            <figure className="bg-base-200 p-6">
                <Image
                    src={image}
                    alt={bookName}
                    width={200}
                    height={260}
                    className="h-64 w-auto object-contain rounded-md shadow-md"
                />
            </figure>

            {/* Content */}
            <div className="card-body">

                {/* Category & Rating */}
                <div className="flex items-center justify-between">
                    <span className="badge badge-success badge-outline">
                        {category}
                    </span>

                    <span className="flex items-center gap-1 font-medium">
                        ⭐ {rating}
                    </span>
                </div>

                {/* Book Name */}
                <h2 className="card-title text-xl mt-2">
                    {bookName}
                </h2>

                {/* Author */}
                <p className="text-sm text-gray-500">
                    by {author}
                </p>

                {/* Book Info */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div>
                        <span className="font-semibold">Pages:</span>{" "}
                        {totalPages}
                    </div>

                    <div>
                        <span className="font-semibold">Year:</span>{" "}
                        {yearOfPublishing}
                    </div>

                    <div className="col-span-2">
                        <span className="font-semibold">Publisher:</span>{" "}
                        {publisher}
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-ghost"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <div className="card-actions mt-4">
                    <Link href={`/books/${book.bookId}`}>
                    <button className="btn btn-success w-full">
                        View Details
                    </button>

                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BookCard;
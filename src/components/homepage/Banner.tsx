import Image from 'next/image';
import React from 'react';
import img from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 mt-8">
            <div className="bg-base-200 rounded-3xl overflow-hidden">
                
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">

                    {/* Left Side */}
                    <div className="px-8 py-12 md:px-12 lg:px-16">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Books to Freshen Up
                            <br />
                            Your BookSelf
                        </h2>

                        <button className="btn btn-success mt-7 px-7">
                            view the list
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="flex justify-center md:justify-end px-8 py-8">
                        <Image
                            src={img}
                            alt="photo"
                            width={280}
                            height={280}
                            className="object-contain drop-shadow-xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
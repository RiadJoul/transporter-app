import React from 'react'

export default function CallToAction() {
    return (
        <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
            <div className="relative">
                <div className="flex items-center justify-center -space-x-2">
                    <img
                        loading="lazy"
                        width="400"
                        height="400"
                        src="/vercel.svg"
                        alt="member photo"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                    <img
                        loading="lazy"
                        width="200"
                        height="200"
                        src="/vercel.svg"
                        alt="member photo"
                        className="h-12 w-12 rounded-full object-cover"
                    />
                    <img
                        loading="lazy"
                        width="200"
                        height="200"
                        src="/vercel.svg"
                        alt="member photo"
                        className="z-10 h-16 w-16 rounded-full object-cover"
                    />
                    <img
                        loading="lazy"
                        width="200"
                        height="200"
                        src="/vercel.svg"
                        alt="member photo"
                        className="relative h-12 w-12 rounded-full object-cover"
                    />
                    <img
                        loading="lazy"
                        width="200"
                        height="200"
                        src="/vercel.svg"
                        alt="member photo"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                </div>
                <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
                    <h1 className="text-center text-4xl font-bold text-gray-800  md:text-5xl">Get Started now</h1>
                    <p className="text-center text-xl text-gray-600 ">
                        Be part of millions people around the world using tailus in modern User Interfaces.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="#"
                            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                        >
                            <span className="relative text-base font-semibold text-white "
                            >Get Started</span>
                        </a>
                        <a
                            href="#"
                            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                        >
                            <span
                                className="relative text-base font-semibold text-primary"
                            >More about</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

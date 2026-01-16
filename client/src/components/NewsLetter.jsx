import React from 'react'

const NewsLetter = () => {
    
    return (
             <section className="flex flex-col items-center text-black py-16 px-4">
            <div className="flex flex-col items-center">
                <h2 className="text-center text-3xl sm:text-4xl font-semibold max-w-2xl">Subscribe <span className="text-orange-500 p-1 bg-left inline-block bg-no-repeat">newsletter</span></h2>
                <p className="text-center text-slate-500 max-w-lg mt-4 text-sm sm:text-base">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            </div>
            <div className="flex items-center justify-center mt-10 border border-slate-800 focus-within:outline focus-within:outline-orange-500 text-sm rounded-full h-14 max-w-xl w-full px-1">
                <input className="bg-transparent outline-none rounded-full px-4 h-full flex-1 placeholder:text-slate-500" placeholder="Enter your email address" type="text" />
                <button className="bg-orange-500 text-white rounded-full h-11 mr-1 px-6 sm:px-10 flex items-center justify-center hover:bg-orange-600 active:scale-95 transition">Subscribe</button>
            </div>
        </section>
    )
}

export default NewsLetter
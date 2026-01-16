import React, { useRef } from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Categories = () => {
    const { navigate } = useAppContext();
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = 300; 
        current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };

    return (
        <div className='mt-16 relative px-4 md:px-0'>
            {/* Header Section */}
            <div className='flex items-end justify-between mb-10'>
                <div className='space-y-1'>
                    <h2 className='text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight'>
                        Explore <span className='text-orange-500'>Categories</span>
                    </h2>
                    <p className='text-zinc-500 font-medium text-sm'>Select a category to start shopping</p>
                </div>
                
                <div className='flex gap-3'>
                    <button onClick={() => scroll('left')} className='hidden md:flex p-2.5 rounded-full border border-zinc-200 hover:bg-zinc-900 hover:text-white transition-all shadow-sm'>
                        <ChevronLeft size={18} />
                    </button>
                    <button onClick={() => scroll('right')} className='hidden md:flex p-2.5 rounded-full border border-zinc-200 hover:bg-zinc-900 hover:text-white transition-all shadow-sm'>
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
            
            <style>
                {`.no-scrollbar::-webkit-scrollbar { display: none; }
                  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}
            </style>

            <div 
                ref={scrollRef}
                className='flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8'
            >
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        className='group relative min-w-[140px] sm:min-w-[170px] md:min-w-[190px] aspect-[3/4.2] overflow-hidden rounded-[2.5rem] cursor-pointer 
                        bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 shadow-sm'
                        onClick={() => {
                            navigate(`/products/${category.path.toLowerCase()}`);
                            window.scrollTo(0, 0);
                        }}
                    >
                        {/* Ultra-Light Subtle Glow */}
                        <div 
                            className='absolute inset-0 opacity-[0.05] group-hover:opacity-20 transition-opacity duration-500'
                            style={{ backgroundColor: category.bgColor }}
                        />

                        {/* Glossy Top Reflection */}
                        <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none' />

                        {/* Image Section */}
                        <div className='absolute inset-0 flex items-center justify-center p-6 pb-16 transition-transform duration-700 group-hover:scale-110'>
                            <img 
                                src={category.image} 
                                alt={category.text} 
                                className='w-full h-full object-contain drop-shadow-2xl filter saturate-[1.1]' 
                            />
                        </div>

                        {/* Minimalist Bottom Label (No Button Shape) */}
                        <div className='absolute bottom-6 left-0 right-0 flex flex-col items-center justify-center space-y-1'>
                            <h3 className='text-sm md:text-base font-bold text-zinc-800 group-hover:text-orange-600 transition-colors duration-300'>
                                {category.text}
                            </h3>
                            {/* Subtle line that grows on hover */}
                            <div className='w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-1/3 rounded-full' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
import React from 'react'
import { useAppContext } from '../context/AppContext';
import { ShoppingCart } from 'lucide-react'
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();
    const randomRatingCount = (Math.random() * (20 - 1) + 1).toFixed(1);
    const randomRating = (Math.random() * (5 - 4) + 4).toFixed(1);

    return product && (
        <div onClick={() => { navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0, 0) }}
            className="  border border-white/20 rounded-xl md:px-4 px-3 py-3 bg-white/15 backdrop-blur-md shadow-sm min-w-[150px] max-w-full w-full">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-1 text-[#ff7a00]">
                    <FaStar className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {randomRating} <span className="text-gray-500">({randomRatingCount}k)</span>
                    </span>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                        {currency}{product.offerPrice}{" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
                    </p>
                    <div onClick={(e) => { e.stopPropagation() }} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-primary/10 border 
                            border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer"
                                onClick={() => addToCart(product._id)}
                            >
                            <ShoppingCart color="#ff7a00" className="w-6 opacity-80" aria-hidden="true"/>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                                <button onClick={() => { removeFromCart(product._id) }} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button onClick={() => { addToCart(product._id) }} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
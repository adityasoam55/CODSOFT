import React from 'react';
import { RxCross2 } from 'react-icons/rx';

function CartRow({product, handleChange, handleRemove, localCart}) {
    return (
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 border border-gray-300 items-center px-4 py-2">
            <button
                className="w-6 text-red-500 text-xl flex justify-center items-center self-start sm:self-center"
                onClick={() => {
                    handleRemove(product.id);
                }}
            >
                <RxCross2 />
            </button>

            <div className="w-16 h-16 self-start max-sm:self-center">
                <img className="w-full h-full object-cover" src={product.thumbnail} />
            </div>
            <span className="grow text-center self-start max-sm:self-center">
                {product.title}
            </span>
            <span className="w-14 self-start max-sm:self-center">
                ${product.price}
            </span>
            
            <input
                className="w-10 border border-black pl-1 outline-none self-start max-sm:self-center "
                type="number"
                value={localCart[product.id]}
                onChange={(e) => {
                    handleChange(+e.target.value, product.id);
                }}
            />
            <span className="w-14 self-start max-sm:self-center">
                ${product.price * localCart[product.id]}
            </span>
        </div>
    )
}

export default CartRow;

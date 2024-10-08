"use client"

import Image from "next/image";
import { useState } from "react";



const Images = [
    {
        id:1,
        url: 'https://images.pexels.com/photos/27059631/pexels-photo-27059631/free-photo-of-decor-in-luxurious-apartment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id:2,
        url: 'https://images.pexels.com/photos/12993969/pexels-photo-12993969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id:3,
        url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id:4,
        url: 'https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
];

const ProductImages = () => {

    const [index, setIndex] = useState(0);
    
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image 
                    src={Images[index].url} 
                    alt="" 
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {Images.map((u, i) => 
                    <div className="w-1/4 h-32 relative gap-4" key={u.id} onClick={() => setIndex(i)}>
                        <Image 
                            src={u.url} 
                            alt="" 
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md cursor-pointer"
                        />
                    </div>

                )}
            </div>
        </div>
    )
}

export default ProductImages;
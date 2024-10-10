import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Image from "next/image";
import { Suspense } from "react";

const Deals = () => {
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            {/* CAMPAIGN */}
            <div className="hidden bg-gradient-to-r from-neutral-300 to-stone-400 px-4 sm:flex justify-between h-64">
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
                    Grab up to 50% off on
                    <br /> Selected Products
                </h1>
                <button className="rounded-3xl bg-black text-white w-max py-3 px-5 text-sm">
                    Buy Now
                </button>
                </div>
                <div className="relative w-1/3">
                <Image src="/cluster_1.png" alt="" fill className="object-contain" />
                </div>
            </div>
            <h1 className="mt-12 text-xl font-semibold">Deals of the Month</h1>
            <Suspense fallback={<Skeleton />}>
                <ProductList
                    categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!}
                    limit={4}
                />
            </Suspense>
        </div>
    )
}

export default Deals;
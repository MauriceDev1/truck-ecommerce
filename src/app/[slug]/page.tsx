import ProductImages from "@/components/ProductImages";

const SinglePage = () => {

    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
            {/* IMAGE CONTAINER */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            {/* TEXT CONTAINER */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa corrupti est autem, alias fuga consequuntur laboriosam, quia ea suscipit quae a ullam voluptatibus commodi soluta ipsum fugiat eum aperiam? Adipisci, dignissimos cum incidunt nisi odio illo amet. Id iusto nulla eligendi assumenda veritatis temporibus ab nemo incidunt adipisci suscipit, odio non hic modi mollitia deserunt voluptatibus culpa sint ad! Quae pariatur enim reprehenderit voluptatibus id laboriosam iusto maxime possimus laborum.</p>
                <div className=""></div>
            </div>
        </div>
    )
}

export default SinglePage;
const Contact = () => {
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            <h1 className="text-2xl mt-5">
                Contact Us
            </h1>
                <form id="contact-form" className="flex flex-col gap-2">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required className="border h-10 rounded-3xl" />
                    <label htmlFor="cellphone">Cellphone:</label>
                    <input type="tel"
                    id="cellphone" name="cellphone" required className="border h-10 rounded-3xl" />
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                    id="email" name="email" required className="border h-10 rounded-3xl" />
                    <label htmlFor="subject">Subject:</label>
                    <select id="email" name="email" required className="border h-10 rounded-3xl">
                        <option value="">Select</option>
                    </select>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className="border resize-none h-32 rounded-3xl" required></textarea>
                    <button type="submit" className="bg-black text-white rounded-3xl h-10 mt-5">Submit</button>
                </form>
        </div>
    )
}

export default Contact;
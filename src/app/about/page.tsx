const About = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            <div className="w-full py-16 flex gap-8">
                <div className="w-2/3">
                    <h1 className="text-2xl mb-5">
                        About Us
                    </h1>
                    <p>
                        At Mo Parts, we understand the high cost of maintaining a fleet of trucks firsthand. While managing a logistics company and running a fleet, we saw the constant demand for quality truck parts. Too often, businesses face the difficult choice between expensive new parts or unreliable, low-grade aftermarket options. That&#39;s why we created Mo Parts to offer a better, more affordable solution.
                        <br />
                        <br />
                        Our mission is simple: provide top-quality, refurbished truck parts that deliver the performance of new parts without the hefty price tag. Every part in our inventory is thoroughly tested, inspected, and restored to meet industry standards, ensuring you get reliability and value. Whether you&#39;re managing a fleet or a single vehicle, we help you keep your trucks on the road without breaking the bank.
                    </p>
                </div>
                <div className="w-1/3 bg-red-500 h-80" role="img" aria-label="Decorative red background"></div>
            </div>
        </div>
    );
};

export default About;

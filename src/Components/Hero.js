import Sai from './images/sai.jpg';
export default function Hero() {
    return (
        <section
            id="hero"
            className="px-10 w-full flex gap-12 flex-col lg:flex-row justify-center items-center align-center mt-40 mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80h]  hover:bg-blue-300">
            <div className="flex-1 flex flex-col justify-center items-center gap-5">
                <div>
                    <h4 className="text-center text-xl font-bold">
                        Hi ..
                    </h4>
                    

                    <h3 className="text-center text-blue-500 text-5xl font-bold">
                        I am Venkat sai kanala
                    </h3>
                </div>
                <p className="text-center text-xl font-bold">
                    I am a Java Full Stack Devloper.......</p>
            </div>
            <div className="flex-1">
                <img src={Sai} alt="Image"
                    className='w-80 h-90' />
            </div>
        </section>
    );
}
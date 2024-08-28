import SaiImage from './images/saiimg.jpg'; // Import the image

export default function About() {
    return (
        <section id="about" className="px-10 w-full flex flex-col lg:flex-row py-20 align-center bg-blue-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src={SaiImage} alt="Image" 
                className='w-70 h-80'/> {/* Use the imported image */}
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-blue-500 text-5xl font-bold">About me:</h2>
                </div>
                <p>Hello, I am a Java full stack developer....</p>
                <p>
                    I’m a Java Full Stack Developer who loves turning ideas into real, working applications. Whether
                    it’s the front-end or back-end, I enjoy building user-friendly, efficient systems that solve problems.
                    I have hands-on experience with Java, along with web technologies like HTML, CSS, and JavaScript, and
                    frameworks like Spring and Angular. I’m always eager to learn new things and keep up with the latest
                    in tech to make sure I’m delivering the best work possible.
                </p>
            </div>
        </section>
    );
}

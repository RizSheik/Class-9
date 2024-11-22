import Image from "next/image"
const Navbar = () => {
    return (
        <nav className="bg-blue-950 h-30 w-full flex justify-around items-center">
            {/* Logo */}
            <img src="/image/logo.png" alt="logo.png" width={80} height={80}/>
            {/* Subtitle */}
           <h3 className="text-lg font-bold text-white text-center">Tuition Free Education Program on Latest Technologies</h3>
            {/* Nav Link */}
            <ul className="flex">
                <li className="py-4 px-2 text-white font-semibold hover:text-blue-300 transition duration-300">Home</li>
                <li className="py-4 px-2 text-white font-semibold hover:text-blue-300 transition duration-300">Galle</li>
                <li className="py-4 px-2 text-white font-semibold hover:text-blue-300 transition duration-300">About</li>
                <li className="py-4 px-2 text-white font-semibold hover:text-blue-300 transition duration-300">Conta</li>
            </ul>
        </nav>
    )
}

export default Navbar
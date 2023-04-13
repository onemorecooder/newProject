import { motion } from 'framer-motion';
import { SiCodersrank } from "react-icons/si";

function Header() {
    return (
        <div className="bg-gray-100 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mx-4 md:mx-20 py-20">
                <div className="lg:pl-10 md:pr-10 text-center md:text-right w-full">
                    <h1 className="text-5xl font-medium">
                        ¿Lorem ipsum<br></br>lorem ipsum{" "}
                        <label className="text-nav font-bold">Lorem</label>?
                    </h1>
                    <h2 className="text-3xl my-4">
                        Lorem ipsum Lorem ipsum <br></br>
                        Lorem ipsum Lorem ipsum

                    </h2>
                    <motion.button
                        className=" rounded-lg p-2 w-56 font-medium bg-button text-white"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "red",
                            animation: "ease-in",
                        }}
                    >
                        Lorem ipsum
                    </motion.button>
                </div>
                <motion.div class="mx-auto sm:max-w-full">
                    <SiCodersrank color='black' size={264} />
                </motion.div>
            </div>
        </div>
    );
}

export default Header;
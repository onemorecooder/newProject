/* import { motion } from 'framer-motion'; */

import { SiInstagram, SiLinkedin, SiSteam, SiGithub } from "react-icons/si";

function Footer() {
    return (
        <section class="min-h-screen bg-footerright lg:flex">
            <div class="flex w-full flex-col justify-center p-8 lg:w-1/2  lg:px-12 lg:bg-footerleft xl:px-32">
                <h1 class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-5xl">¿Conectamos?</h1>

                <p class="mt-4 text-gray-500 dark:text-white">Puedes preguntarme cualquier cosa que necesites.</p>

                <div class="mt-6 md:mt-8">
                    <h3 class="font-medium text-white ">Sígueme</h3>

                    <div class="-mx-1.5 mt-4 flex">
                        <a class="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500 " href="a">
                            <SiInstagram size={30} />
                        </a>

                        <a class="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500 " href="a">
                            <SiLinkedin size={30} />
                        </a>

                        <a class="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500 " href="a">
                            <SiGithub size={30} />
                        </a>

                        <a class="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500 " href="a">
                            <SiSteam size={30} />
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex w-full flex-col justify-center p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24">
                <form>
                    <div class="-mx-2 md:flex md:items-center">
                        <div class="flex-1 px-2">
                            <label class="mb-2 block text-sm text-gray-200 ">Nombre completo</label>
                            <input type="text" placeholder="Alejandro Torres" class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-100  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-footerright dark:text-gray-300 dark:placeholder-gray-500 dark:focus:border-blue-400" />
                        </div>

                        <div class="mt-4 flex-1 px-2 md:mt-0">
                            <label class="mb-2 block text-sm text-gray-200">Correo electrónico</label>
                            <input type="email" placeholder="atorres@example.com" class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-footerright dark:text-gray-300 dark:placeholder-gray-500 dark:focus:border-blue-400" />
                        </div>
                    </div>

                    <div class="mt-4 w-full">
                        <label class="mb-2 block text-sm text-gray-200">Mensaje</label>
                        <textarea class="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-footerright dark:text-gray-300 dark:placeholder-gray-500 dark:focus:border-blue-400 md:h-56" placeholder="Escribe tu mensaje aquí"></textarea>
                    </div>

                    <button class="mt-4 w-full transform rounded-md bg-button px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-hover focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">get in touch</button>
                </form>
            </div>
        </section>
    );
}

export default Footer;


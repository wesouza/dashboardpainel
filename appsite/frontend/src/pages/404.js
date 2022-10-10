/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function page404() {
  return (
    <>
      <Navbar />
      <section className="relative pt-16 pb-32 md:pb-0 bg-black overflow-hidden w-full h-full">
        <img
          className="absolute top-0 left-0"
          src="flaro-assets/images/http-codes/gradient.svg"
          alt=""
        />
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap items-center -m-8">
            <div className="w-full md:w-1/2 p-8 self-end">
              <img
                className="mx-auto transform hover:scale-105 transition ease-in-out duration-1000"
                src="flaro-assets/images/http-codes/error-code.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div>
                <h2 className="mb-7 text-6xl md:text-8xl xl:text-10xl text-center text-white font-bold tracking-px-n leading-none">
                  Página não encontrada!
                </h2>
                <p className="mb-12 text-xl text-gray-400 text-center font-medium leading-relaxed md:max-w-lg mx-auto">
                  Lamentamos, mas a página solicitada não foi encontrada. Por
                  favor voltar para a página inicial
                </p>
                <div className="md:max-w-max mx-auto">
                  <a
                    href="/"
                    className="inline-flex flex-wrap justify-center items-center py-4 px-6 w-full text-white hover:text-black font-semibold border border-gray-700 hover:border-gray-800 rounded-lg focus:ring focus:ring-white bg-transparent hover:bg-gray-50 transition ease-in-out duration-200"
                  >
                    <svg
                      className="mr-2.5"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66667 12.6666L2 7.99998M2 7.99998L6.66667 3.33331M2 7.99998L14 7.99998"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Voltar para página inicial</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

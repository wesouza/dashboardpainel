export default function Navbar() {
  return (
    <>
      <section className="overflow-hidden fixed z-10 w-full">
        <div className="flex items-center justify-between px-7 xl:px-40 py-5 bg-black w-full">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14">
                <a href="#">
                  <img
                    src="https://static.shuffle.dev/uploads/files/9e/9e1512affcd1aa82f62c6251243af0e354d78e35/logovox2you-1.png"
                    alt=""
                    className="w-32"
                  />
                </a>
              </div>
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-16">
                  <li className="mr-9 font-medium text-white hover:text-gray-200">
                    <a href="#">Home</a>
                  </li>
                  <li className="mr-9 font-medium text-white hover:text-gray-200">
                    <a href="#">Quem somos</a>
                  </li>
                  <li className="mr-9 font-medium text-white hover:text-gray-200">
                    <a href="#">Blog</a>
                  </li>
                  <li className="font-medium text-white hover:text-gray-200">
                    <a href="#">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden mr-5 lg:block">
                <div className="inline-block"></div>
              </div>
              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <button
                    className="w-full text-black font-semibold rounded-xl  bg-[#eda420] hover:bg-[#b7801a] transition ease-in-out duration-200 px-5 py-2"
                    type="button"
                  >
                    SEJA UM FRANQUEADO
                  </button>
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <a href="#">
                  <svg
                    className="navbar-burger text-indigo-600"
                    width={51}
                    height={51}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={56} height={56} rx={28} />
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
          <nav className="relative z-10 px-9 pt-8 bg-black h-full overflow-y-auto">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <img
                      src="https://static.shuffle.dev/uploads/files/9e/9e1512affcd1aa82f62c6251243af0e354d78e35/logovox2you-1.png"
                      alt=""
                      className="w-32"
                    />
                  </div>
                  <div className="w-auto p-2">
                    <a className="navbar-burger text-white" href="#">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col 
               py-16 w-full"
              >
                <ul>
                  <li className="mb-12">
                    <a
                      className="font-medium text-white hover:text-gray-200"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-12">
                    <a
                      className="font-medium text-white hover:text-gray-200"
                      href="#"
                    >
                      Solutions
                    </a>
                  </li>
                  <li className="mb-12">
                    <a
                      className="font-medium text-white hover:text-gray-200"
                      href="#"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-medium text-white hover:text-gray-200"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

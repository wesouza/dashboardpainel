export default function Footer() {
  return (
    <>
      <section className="relative pt-24 bg-[#202020]  overflow-hidden">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="pb-24 border-b border-gray-900">
            <div className="flex flex-wrap -m-8">
              <div className="w-full sm:w-1/2 lg:w-6/12 p-8">
                <div className="lg:max-w-sm">
                  <a href="#">
                    <img
                      src="https://static.shuffle.dev/uploads/files/9e/9e1512affcd1aa82f62c6251243af0e354d78e35/logovox2you-1.png"
                      alt=""
                      className="w-32"
                    />
                  </a>
                  <p className="mb-20 mt-20 text-gray-400 font-medium leading-relaxed md:max-w-xs">
                    A maior rede de escolas de oratória da América Latina.
                  </p>
                  <div className="flex flex-wrap -m-1.5">
                    <div className="w-auto p-1.5">
                      <a href="https://www.instagram.com/vox2you/">
                        <div className="flex items-center justify-center w-9 h-9">
                          <i className="fa-brands fa-instagram text-white text-xl"></i>
                        </div>
                      </a>
                    </div>
                    <div className="w-auto p-1.5">
                      <a href="https://www.facebook.com/vox2you/">
                        <div className="flex items-center justify-center w-9 h-9">
                          <i className="fa-brands fa-facebook text-white text-xl"></i>
                        </div>
                      </a>
                    </div>
                    <div className="w-auto p-1.5">
                      <a href="https://br.linkedin.com/company/vox2you">
                        <div className="flex items-center justify-center w-9 h-9">
                          <i className="fa-brands fa-linkedin text-white text-xl"></i>
                        </div>
                      </a>
                    </div>
                    <div className="w-auto p-1.5">
                      <a href="https://www.youtube.com/c/Vox2youEscolasdeOrat%C3%B3ria">
                        <div className="flex items-center justify-center w-9 h-9">
                          <i className="fa-brands fa-youtube text-white text-xl"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-8 text-sm text-gray-600 uppercase font-semibold leading-normal tracking-px">
                  Products
                </h3>
                <ul>
                  <li className="mb-5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      News &amp; Stories
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-8 text-sm text-gray-600 uppercase font-semibold leading-normal tracking-px">
                  Important links
                </h3>
                <ul>
                  <li className="mb-5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Our Journeys
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Pricing Plans
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-8 text-sm text-gray-600 uppercase font-semibold leading-normal tracking-px">
                  Vox2you
                </h3>
                <ul>
                  <li className="mb-5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Sobre
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Trabalhe conosco
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

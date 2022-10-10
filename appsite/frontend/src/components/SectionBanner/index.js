/* eslint-disable @next/next/no-html-link-for-pages */
// import Swiper JS
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper styles
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});
/* eslint-disable @next/next/no-img-element */
export default function SectionBanner() {
  return (
    <>
      <section className="overflow-hidden py-36 bg-[#202020]  pt-[150px]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -m-8 md:px-28 md:p-12">
            <div className="w-full md:w-1/2 p-16 md:p-10">
              <h2
                className="mb-9 font-bold font-heading tracking-px-n leading-none text-white text-4xl "
                contentEditable="false"
              >
                A maior rede de escolas de oratória da América Latina
              </h2>
              <div className="mb-11 md:inline-block rounded-xl shadow-4xl">
                <a
                  href="/unidades"
                  className="w-full text-black font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-[#eda420] hover:bg-[#b7801a] transition ease-in-out duration-200 py-2 px-4"
                  type="button"
                >
                  Encontre a Vox mais próxima{" "}
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="h-full md:w-1/2 w-full md:p-0 p-10">
              {/* Slider main container */}
              <div className="swiper">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                  {/* Slides */}
                  <div className="swiper-slide">
                    <p className="text-white">
                      <img
                        className="transform"
                        src="images/foto_unidade.png"
                        alt=""
                      />
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <p className="text-white">
                      <img
                        className="transform"
                        src="images/foto_unidade.png"
                        alt=""
                      />
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <p className="text-white">
                      <img
                        className="transform"
                        src="images/foto_unidade.png"
                        alt=""
                      />
                    </p>
                  </div>
                  ...
                </div>
                {/* If we need pagination */}
                <div className="swiper-pagination" />

                <div className="swiper-scrollbar" />
              </div>
              {/* <img className="transform" src="images/foto_unidade.png" alt="" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

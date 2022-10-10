import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionBanner from "../components/SectionBanner";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Home" path="/" description="Homedescription">
        <Navbar />

        <SectionBanner />
        <section className="flex flex-wrap justify-center relative py-32 md:px-16 xl:px-72 bg-[#eda420]">
          <div className="w-full  md:w-1/2 xl:w-1/4 p-3 flex justify-center content-center	items-center	">
            <div className="">
              <h3 class=" text-5xl font-extrabold text-center">+ 120</h3>
              <p class=" text-2xl font-medium text-center">escolas</p>
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/4 p-3 flex justify-center content-center	items-center	">
            <div className="">
              <h3 class=" text-5xl font-extrabold text-center">24 mil</h3>
              <p class=" text-2xl font-medium text-center">alunos</p>
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/4 p-3 flex justify-center content-center	items-center	">
            <div className="">
              <h3 class=" text-5xl font-extrabold text-center">80</h3>
              <p class=" text-2xl font-medium text-center">técnicas</p>
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/4 p-3 flex justify-center content-center	items-center	">
            <div className="">
              <h3 class=" text-5xl font-extrabold text-center">150</h3>
              <p class=" text-2xl font-medium text-center">Dinâmica</p>
            </div>
          </div>
        </section>
        <section className="pt-24 pb-28 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <spam className="mb-5 text-xl text-justify font-medium font-heading md:text-center px-6">
                Com unidades em <b>todas as regiões do país</b>, não somos
                apenas uma escola de oratória, mas sim, uma verdadeira
                acadfemia. Já
                <b> transformamos milhares de vidas</b> por meio de um método de
                ensino capaz de modificar a comunicação e a visão de mundo de
                pessoas desde as mais tímidas até as mais falantes.
              </spam>
            </div>
          </div>
        </section>

        <section className="overflow-hidden  bg-[#202020]  pt-[150px] ">
          <div className="container mx-auto md:px-24 pb-28 ">
            <div className="flex flex-wrap items-center -m-8 md:px-28 ">
              <div className="h-full md:w-1/2 w-full p-12 md:p-0 ">
                <div
                  className="video "
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    paddingTop: 25,
                    height: 0,
                  }}
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://www.youtube.com/embed/AKZzlHCKcpw"
                    frameBorder="0"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-16 md:p-10">
                <h2 className="mb-5 text-xl text-justify text-white font-medium font-heading md:text-left">
                  Tenha a experiência de se conectar com pessoas fora da sua
                  bolha. Perca o medo de falar em público,
                  <b> aprensa a falar bem, com persuasão e faça networking </b>
                  enquanto se desevolve com nossa metodologia de ensino.
                </h2>
                <div className="mb-11 md:inline-block rounded-xl shadow-4xl">
                  <button
                    className="w-full text-black font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-[#eda420] hover:bg-[#b7801a] transition ease-in-out duration-200 py-2 px-4"
                    type="button"
                  >
                    Quero ser Vox <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-24 pb-12 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2
                className="mb-3 font-bold font-heading tracking-px-n leading-none text-[#eda420] text-4xl "
                contentEditable="false"
              >
                A vox2you é para você e também para empresas dos mais diversos
                segmentos.
              </h2>

              <span className="text-xl text-justify font-medium font-heading md:text-center px-6">
                Confira algumas que confiaram no
                <b> método Vox:</b>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center -m-8 mt-10 pb-28 xl:px-60 w-full">
            <div className="w-auto p-8">
              <img src="flaro-assets/logos/brands/brand-xl.png" alt="" />
            </div>
            <div className="w-auto p-8">
              <img src="flaro-assets/logos/brands/brand-xl-2.png" alt="" />
            </div>
            <div className="w-auto p-8">
              <img src="flaro-assets/logos/brands/brand-xl-3.png" alt="" />
            </div>
            <div className="w-auto p-8">
              <img src="flaro-assets/logos/brands/brand-xl-4.png" alt="" />
            </div>
          </div>
        </section>
        <Footer />
      </Seo>
    </>
  );
}

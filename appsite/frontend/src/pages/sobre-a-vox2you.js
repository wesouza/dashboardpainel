import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SectionBanner from "../components/SectionBanner";
import Seo from "../components/Seo";

export default function Sobre() {
  return (
    <>
      <Seo
        title="Sobre a Vox2you"
        path="/sobre-a-vox2you"
        description="Conheça a história da maior rede de cursos de oratória da América Latina."
      >
        <Navbar />
        <Hero
          color="#eda420"
          title="Sobre a Vox2you"
          subtitle="São mais de 12 cursos e 55 unidades pelo país. Aprenda a falar bem, com clareza e persuasão!"
        />

        <section className="overflow-hidden    pt-[150px] ">
          <div className="container mx-auto md:px-24 pb-28 ">
            <div className="flex flex-wrap items-center -m-8 md:px-28 ">
              <div className="w-full md:w-1/2 p-16 ">teste</div>
              <div className="w-full md:w-1/2 p-16 ">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                      2013
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Início do sonho grande!
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Luis Fernando Câmara procurou por maneiras que pudessem
                      contribuir com o cenário educacional.
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                      2015
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Primeira unidade inaugurada em Cravinhos.
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Nesse momento, a marca passou por um processo de transição
                      e teve sua primeira unidade inaugurada em Cravinhos,
                      interior de São Paulo.
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                      2016
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      A virada de chave.
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Esse foi o marco da expansão. Nesse ano, houve o início do
                      processo de estruturação das franquias e a migração da
                      franqueadora para Ribeirão Preto, também no interior de
                      São Paulo. Além disso, o negócio também contou com a
                      entrada de grandes investidores.
                    </p>
                  </li>

                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                      2017
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      A primeira unidade inaugurada.
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      A marca ganha sua primeira unidade franqueada, localizada
                      em Sorocaba, interior de São Paulo. Juntamente a isso,
                      houve a modernização dos materiais didáticos e criação de
                      técnicas exclusivas.
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                      2018/2019
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Expansão da rede.
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      A rede chega em diversos estados do país, promovendo a
                      implantação de novas equipes para suporte especializado e
                      constante e especializado, com foco em gestão de alta
                      performance.
                    </p>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                      2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      O primeiro marco.
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Intensiva expansão da rede, atingindo 70 unidades e o
                      marco de 118.7% de crescimento.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </Seo>
    </>
  );
}

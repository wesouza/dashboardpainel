/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from "next/router";

import { useState } from "react";
import Footer from "../../components/Footer";
import NavbarUnidade from "../../components/NavbarUnidade";
import Seo from "../../components/Seo";
import { toast } from "react-toastify";

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

import {
  FaBook,
  FaBox,
  FaCamera,
  FaCompressArrowsAlt,
  FaRegAddressCard,
  FaUserAlt,
} from "react-icons/fa";

import supabase from "../../lib/supabase";

export default function Unidade({ data }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consentimento, setConsentimento] = useState("");

  const { asPath } = useRouter();

  async function cadastrarLead(event) {
    event.preventDefault();

    let inputs = { nome, email, whatsapp, consentimento };

    if (
      (inputs.nome === "") |
      (inputs.email === "") |
      (inputs.whatsapp === "")
    ) {
      toast("Os campos são obrigatórios", {
        hideProgressBar: true,
        autoClose: 3000,
        type: "error",
        position: "top-right",
      });
      return;
    }

    try {
      const { result, error } = await supabase.from("lead").insert([
        {
          nome: inputs.nome,
          email: inputs.email,
          whatsapp: inputs.whatsapp,
          consentimento: "sim",
          origem: data.nome,
          url_origem: `http://localhost:3000${asPath}`,
          identificador: data.url,
        },
      ]);

      return toast("Cadastro realizado com sucesso!", {
        hideProgressBar: true,
        autoClose: 3000,
        type: "success",
        position: "top-right",
      });
    } catch (error) {
      return toast(`Erro: ${error}`, {
        hideProgressBar: true,
        autoClose: 3000,
        type: "error",
        position: "top-right",
      });
    }
  }

  const number = `${data.whatsapp}`;
  const num = `(${number.substring(0, 2)}) ${number.substring(
    2,
    7
  )} - ${number.substring(7, number.length)}`;

  data.whatsapp = num;

  return (
    <>
      <Seo
        title={`Curso de oratória em ${data.nome}`}
        path={`/${data.url}`}
        description={`Curso de oratória em ${data.nome}`}
      >
        <NavbarUnidade url={data.url} />
        <section
          className="overflow-hidden py-22 bg-[#202020]  pt-[22px] "
          id="home"
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center -m-8 md:px-28 md:p-12">
              <div className="w-full md:w-1/2 p-16 md:p-10">
                <p className=" text-white text-2xl mb-3 ">
                  Curso de oratória em
                </p>

                <h1
                  className="mb-5 font-bold font-heading tracking-px-n leading-none text-[#eda420] text-[38px] "
                  contentEditable="false"
                >
                  {data.nome}
                </h1>

                <p
                  className="mb-9 tracking-px-n leading-none text-white text-xl"
                  contentEditable="false"
                >
                  Perca o medo de falar em público e aprenda a falar bem em
                  qualquer situação!
                </p>
                <div className="mb-11 md:inline-block rounded-xl shadow-4xl">
                  <a
                    href="/unidades"
                    className="w-full text-black font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-[#eda420] hover:bg-[#b7801a] transition ease-in-out duration-200 py-2 px-4"
                    type="button"
                  >
                    Quero saber mais <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="h-full md:w-1/2 w-full md:p-0 p-10">
                <div className="md:p-16  rounded-sm w-full ">
                  <div className="p-8 bg-white rounded-sm">
                    <form>
                      <div className="mb-5">
                        <h3 className="text-2xl font-bold">
                          Fale com a gente!
                        </h3>
                      </div>
                      <div className="flex flex-col mb-5">
                        <label className="text-start">Nome</label>
                        <input
                          autofocus="true"
                          required="true"
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                          type="text"
                          name="nome"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col mb-5">
                        <label className="text-start">E-mail</label>
                        <input
                          required="true"
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="flex flex-col mb-5">
                        <label className="text-start">WhatsApp</label>
                        <input
                          required="true"
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                          type="text"
                          name="whatsapp"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                        />
                      </div>

                      <div className="flex flex-col mb-5">
                        <label className="text-start">
                          Ao enviar o formulário você concorda com os termos.
                        </label>
                      </div>

                      <div className="text-start mt-5 mb-5 font-bold">
                        <h3></h3>
                      </div>

                      <div className="flex flex-col mt-10">
                        <button
                          className=" text-black  font-semibold rounded-sm focus:ring focus:ring-indigo-300 bg-[#eda420] hover:bg-[#b7801a] transition ease-in-out duration-200 py-2 px-4"
                          type="submit"
                          onClick={cadastrarLead}
                        >
                          Entrar em contato
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="overflow-hidden   pt-[100px] ">
          <div className="container mx-auto md:px-24 pb-10 ">
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
                      width: "98%",
                      height: "90%",
                    }}
                    src={`https://www.youtube.com/embed/${data.video}`}
                    frameBorder="0"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-16 md:p-10">
                <h2
                  className="mb-5 text-2xl texCurso de oratória em

Ribeirão Preto - Ribeirânia
Perca o medo de falar em público e aprenda a falar bem em qualquer situação!

Quero saber mais 
t-justify  font-bold font-heading md:text-left text-[#00aaa5]"
                >
                  Conheça a nossa unidade
                </h2>
                <p className="font-bold mt-2 text-lg">Endereço: </p>
                <>
                  <p className="text-lg">
                    {data.endereco}, {data.numero} - {data.bairro} -{" "}
                    {data.complemento ? `${data.complemento} - ` : ""}{" "}
                    {data.cidade}/{data.estado} - CEP {data.cep}
                  </p>
                </>
                {data.whatsapp ? (
                  <div className="inline-flex justify-center items-center mt-2">
                    <p className="font-bold  text-lg">WhatsApp: </p>
                    <p className="text-lg ml-2">{data.whatsapp}</p>
                  </div>
                ) : (
                  ""
                )}

                {data.telefone ? (
                  <div>
                    <p className="font-bold mt-2 text-lg">Telefone: </p>
                    <p className="text-lg">{data.telefone}</p>
                  </div>
                ) : (
                  ""
                )}

                <div className="mb-11 mt-5 md:inline-block rounded-xl shadow-4xl">
                  <a
                    href={`https://api.whatsapp.com/send?phone=55${data.whatsapp}`}
                    className="w-full text-white font-semibold text-lg  bg-[#00aaa5] hover:bg-[#008d88] transition ease-in-out duration-200 py-2 px-4"
                    type="text"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap justify-center relative py-32 md:px-16 xl:px-72 bg-[#f0f0f0]">
          <div className="flex w-full justify-center text-4xl mb-12 px-6 font-bold text-center text-[#00aaa5]">
            Somos a primeira e maior rede de escolas de oratória da América
            Latina!
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/4 p-3 flex justify-center content-center	items-center text-[#00aaa5]	">
            <div className="">
              <h3 class=" text-5xl font-extrabold text-center">+ 120</h3>
              <p class=" text-2xl font-medium text-center">escolas</p>
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/4 p-3 flex justify-center content-center	items-center	text-[#00aaa5]">
            <div className="">
              <h3 class=" text-5xl font-extrabold text-center">24 mil</h3>
              <p class=" text-2xl font-medium text-center">alunos</p>
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/4 p-3 flex justify-center content-center	items-center	text-[#00aaa5]">
            <div className="">
              <h3 class=" text-5xl font-extrabold text-center">80</h3>
              <p class=" text-2xl font-medium text-center">técnicas</p>
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/4 p-3 flex justify-center content-center	items-center	text-[#00aaa5]">
            <div className="">
              <h3 class=" text-5xl font-extrabold text-center">150</h3>
              <p class=" text-2xl font-medium text-center">Dinâmica</p>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap justify-center relative py-32 md:px-16 xl:px-72 bg-[#202020]">
          <div className="flex w-full justify-center text-4xl mb-12 px-6 font-bold text-center text-[#eda420]">
            Somos a primeira e maior rede de escolas de oratória da América
            Latina!
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/3 p-3 flex justify-center content-center	items-center text-[#00aaa5]	">
            <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <FaBook class="mb-2 w-10 h-10 text-[#202020] dark:text-[#202020]" />
              <h5 class="mb-2 text-2xl leading-[1.4rem] font-bold tracking-tight text-gray-900 dark:text-white">
                Material didático completo
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Transformar vidas por meio da comunicação só é possível por meio
                de materiais ricos e de qualidade e teste de mensagem.
              </p>
            </div>
          </div>

          <div className="w-full  md:w-1/2 xl:w-1/3 p-3 flex justify-center content-center	items-center text-[#00aaa5]	">
            <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <FaBox class="mb-2 w-10 h-10  text-[#202020] dark:text-[#202020]" />
              <h5 class="mb-2 text-2xl leading-[1.4rem]  font-bold tracking-tight text-gray-900 dark:text-white">
                Caixote <br />
                Vox
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Durante os intervalos, é o Caixote que entra em ação. Nele, há a
                prática de networking e também do que é aprendido em sala.
              </p>
            </div>
          </div>

          <div className="w-full  md:w-1/2 xl:w-1/3 p-3 flex justify-center content-center	items-center text-[#00aaa5]	">
            <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <FaRegAddressCard class="mb-2 w-10 h-10  text-[#202020] dark:text-[#202020]" />
              <h5 class="mb-2 text-2xl leading-[1.4rem] font-bold tracking-tight text-gray-900 dark:text-white">
                Passe <br />
                livre
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Seja para complementar o que já aprendeu ou por ainda ter
                dúvidas, você tem direito de reassistir todas as aulas que
                sentir necessidade.
              </p>
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/3 p-3 flex justify-center content-center	items-center text-[#00aaa5]	">
            <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <FaCompressArrowsAlt class="mb-2 w-10 h-10  text-[#202020] dark:text-[#202020]" />
              <h5 class="mb-2 text-2xl leading-[1.4rem] font-bold tracking-tight text-gray-900 dark:text-white">
                Flexibilidade para <br />
                assistir outras aulas
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Desenvolvidos pensando na sua praticidade, nossos treinamentos
                permitem que você organize suas aulas de acordo com sua
                disponibilidade.
              </p>
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/3 p-3 flex justify-center content-center	items-center text-[#00aaa5]	">
            <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <FaCamera class="mb-2 w-10 h-10  text-[#202020] dark:text-[#202020]" />
              <h5 class="mb-2 text-2xl leading-[1.4rem] font-bold tracking-tight text-gray-900 dark:text-white">
                Aulas páticas
                <br />e gravadas
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                As aulas são gravadas para que você identifique os pontos que
                precisam de melhoria, bem como, avalie sua evolução durante o
                curso.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/3 p-3 flex justify-center content-center	items-center text-[#00aaa5]	">
            <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <FaUserAlt class="mb-2 w-10 h-10  text-[#202020] dark:text-[#202020]" />
              <h5 class="mb-2 text-2xl leading-[1.4rem] font-bold tracking-tight text-gray-900 dark:text-white">
                Mentorias <br />
                individuais
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Realizadas com nossos facilitadores, você tem direito a 7
                mentorias de 1:30h cada. Esse é o seu espaço para solucionar
                dúvidas, definir metas e planejar ações.
              </p>
            </div>
          </div>

          <div className="mb-11 mt-20 md:inline-block rounded-xl shadow-4xl">
            <a
              href="/unidades"
              className="w-full text-black font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-[#eda420] hover:bg-[#b7801a] transition ease-in-out duration-200 py-2 px-4"
              type="button"
            >
              Quero saber mais <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </section>

        <section className="flex flex-wrap justify-center relative py-32 md:px-16 xl:px-72 bg-[#f0f0f0]">
          <div className="flex w-full justify-center text-4xl mb-12 px-6 font-bold text-center text-[#00aaa5]">
            Quem já soltou a voz por aqui
          </div>

          <div className="h-full md:w-1/2 w-full md:p-0 p-10">
            {/* Slider main container */}
            <div className="swiper">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper">
                {/* Slides */}
                <div className="swiper-slide">
                  <img className="transform" src="images/01.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img className="transform" src="images/02.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img className="transform" src="images/03.png" alt="" />
                </div>
                ...
              </div>
              {/* If we need pagination */}
              <div className="swiper-pagination" />

              <div className="swiper-scrollbar" />
            </div>
            {/* <img className="transform" src="images/foto_unidade.png" alt="" /> */}
          </div>
        </section>

        <Footer />
      </Seo>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const data = await supabase.from("unidade").select("*").eq("url", params.url);

  if (!data.data[0]) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: { data: data.data[0] },
  };
}

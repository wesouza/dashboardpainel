import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Seo from "../../components/Seo";

import supabase from "../../lib/supabase";

import { useState } from "react";

export default function Unidades({ data }) {
  const [busca, setBusca] = useState("");

  return (
    <>
      <Seo
        title="Unidades Vox2you"
        path="/unidades"
        description="Estude na maior academia de oratória da América Latina! Conheça as unidades Vox2you e encontre a mais próxima de você!"
      >
        <Navbar />
        <Hero
          color="#eda420"
          title="De Norte a Sul. De Leste a Oeste. 
          A Vox está por todo Brasil!"
          subtitle="Presente em todas as regiões do país, não somos apenas uma escola de oratória, mas, sim, uma escola de transformação!"
        />

        <section className="pt-24 bg-white overflow-hidden ">
          <div className="container px-4 mx-auto flex justify-center">
            <div className="w-full max-w-lg">
              <div className="">
                <h3 className="text-xl font-bold mb-2">Buscar unidade</h3>
                <input
                  type="text"
                  className="bg-slate-200 w-full border-none outline-none mr-10 py-3 px-1 p-3 rounded-lg pl-4"
                  name=""
                  id=""
                  placeholder="Digite o nome, cidade ou uf da unidade"
                  value={busca}
                  onChange={(e) => {
                    setBusca(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-coolGray-50 py-24 mb-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-3" id="count">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-2/2 sm:w-1/3 xl:w-1/4 p-3 "
                >
                  <div
                    className=" flex-col shadow-dashboard rounded-sm  bg-cover bg-no-repeat w-full md:w-[300px] h-[200px] flex justify-center items-center shadow-lg"
                    style={{
                      backgroundImage: `url(${item.capa})`,
                      objectFit: "cover",
                      backgroundRepeat: "none",
                    }}
                  >
                    <p className="text-white">
                      {item.cidade} - {item.estado}
                    </p>

                    <a href={"unidades/" + item.url}>
                      <h2 className="text-[17px] text-center font-bold text-white hover:underline">
                        {item.nome}
                      </h2>
                    </a>

                    {/* <a
                        href={process.env.BASE_URL + "/unidades/" + data.url}
                        className=" text-black mt-2 font-semibold rounded-xl  bg-[#ffffff] hover:bg-[#f5f5f5] transition ease-in-out duration-200 px-5 py-2"
                      >
                        Acessar
                      </a> */}
                  </div>
                </div>
              ))}

              {data.length <= 0 && (
                <div className="container px-4 flex justify-center">
                  <div className="text-center max-w-3xl ">
                    <span className="text-xl font-medium font-heading md:text-center ">
                      Nenhuma unidade encontrada na busca!
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </Seo>
    </>
  );
}

export const getServerSideProps = async function () {
  const data = await supabase.from("unidade").select("*");

  return {
    props: { data: data.data },
  };
};

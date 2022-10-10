import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import axios from "axios";

import InputMask from "react-input-mask";
import { useEffect, useState } from "react";

export default function Contato() {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [hiddenContato, setHiddenContato] = useState(true);
  const [hiddenSaf, setHiddenSaf] = useState(false);

  const [selectedEstado, setSelectedEstado] = useState("");
  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setEstados(response.data);
      })
      .catch();
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado}/municipios`
      )
      .then((response) => {
        setCidades(response.data);
      })
      .catch();
  }, [selectedEstado]);

  function handleSelectEstado(e) {
    const uf = e.target.value;
    setSelectedEstado(uf);
  }

  function mostrarContato() {
    setHiddenContato(false);
  }
  function mostrarSaf() {
    setHiddenSaf(true);
  }

  return (
    <>
      <Seo
        title="Contato"
        path="/contato"
        description="Veja aqui como entrar em contato com a unidade Vox2you mais próxima de você!"
      >
        <Navbar />
        <Hero
          color="#eda420"
          title="Contato"
          subtitle="Fale com uma unidade mais próxima de você! "
        />

        <section className="pt-24 pb-28 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-lg mx-auto">
              {hiddenContato ? (
                <form action="" method="post" id="form">
                  <div className="flex flex-col mb-5">
                    <label className="text-start">Nome</label>
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col mb-5">
                    <label className="text-start">E-mail</label>
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col mb-5">
                    <label className="text-start">WhatsApp</label>
                    <InputMask
                      mask="(99) 99999-9999"
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-start">Unidade</label>
                    <select
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                      type="text"
                    >
                      <option value="">Unidade 01 - São Paulo</option>
                    </select>
                  </div>

                  <div className="text-start mt-5 mb-5 font-bold">
                    <h3>
                      Não encontrou unidade próxima? Informe o seu estado e
                      cidade
                    </h3>
                  </div>

                  <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 text-start ">Estados</p>
                      <div className="relative">
                        <select
                          name="estado"
                          id="estado"
                          onChange={handleSelectEstado}
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                        >
                          <option value="0">Selecione o estado</option>
                          {estados.map((estado) => (
                            <option key={estado.id} value={estado.id}>
                              {estado.nome}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 text-start ">Cidades</p>
                      <div className="relative">
                        <select
                          name="cidade"
                          id="cidade"
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                        >
                          <option value="0">Selecione a cidade</option>
                          {cidades.map((cidade) => (
                            <option key={cidade.id} value={cidade.id}>
                              {cidade.nome}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mt-10">
                    <button
                      className=" text-black  font-semibold rounded-sm focus:ring focus:ring-indigo-300 bg-[#eda420] hover:bg-[#b7801a] transition ease-in-out duration-200 py-2 px-4"
                      type="button"
                    >
                      Entrar em contato{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              ) : (
                ""
              )}
              {hiddenSaf ? (
                <form action="" method="post" id="form">
                  <div className="flex flex-col mb-5">
                    <label className="text-start">Saf</label>
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col mb-5">
                    <label className="text-start">E-mail</label>
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col mb-5">
                    <label className="text-start">WhatsApp</label>
                    <InputMask
                      mask="(99) 99999-9999"
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-start">Unidade</label>
                    <select
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                      type="text"
                    >
                      <option value="">Unidade 01 - São Paulo</option>
                    </select>
                  </div>

                  <div className="text-start mt-5 mb-5 font-bold">
                    <h3>
                      Não encontrou unidade próxima? Informe o seu estado e
                      cidade
                    </h3>
                  </div>

                  <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 text-start ">Estados</p>
                      <div className="relative">
                        <select
                          name="estado"
                          id="estado"
                          onChange={handleSelectEstado}
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                        >
                          <option value="0">Selecione o estado</option>
                          {estados.map((estado) => (
                            <option key={estado.id} value={estado.id}>
                              {estado.nome}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 text-start ">Cidades</p>
                      <div className="relative">
                        <select
                          name="cidade"
                          id="cidade"
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                        >
                          <option value="0">Selecione a cidade</option>
                          {cidades.map((cidade) => (
                            <option key={cidade.id} value={cidade.id}>
                              {cidade.nome}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mt-10">
                    <button
                      className=" text-black  font-semibold rounded-sm focus:ring focus:ring-indigo-300 bg-[#eda420] hover:bg-[#b7801a] transition ease-in-out duration-200 py-2 px-4"
                      type="button"
                    >
                      Entrar em contato{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>

        <div>
          <button onClick={mostrarContato}>Contato</button>
        </div>
        <div>
          <button onClick={mostrarSaf}>SAF</button>
        </div>

        <Footer />
      </Seo>
    </>
  );
}
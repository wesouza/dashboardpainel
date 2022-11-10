/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";

export default function SectionBannerUnidade({ ...props }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  async function cadastrarLead(event) {
    event.preventDefault();

    const body = { nome, email, whatsapp };

    const { data, error } = await supabase.from("lead").insert([{ body }]);

    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  }

  return (
    <>
      <section
        className="overflow-hidden py-22 bg-[#202020]  pt-[22px] "
        id="home"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -m-8 md:px-28 md:p-12">
            <div className="w-full md:w-1/2 p-16 md:p-10">
              <p className=" text-white text-2xl mb-3 ">Curso de oratória em</p>

              <h1
                className="mb-5 font-bold font-heading tracking-px-n leading-none text-[#eda420] text-[40px] "
                contentEditable="false"
              >
                {props.title}
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
                      <h3 className="text-2xl font-bold">Fale com a gente!</h3>
                    </div>
                    <div className="flex flex-col mb-5">
                      <label className="text-start">Nome</label>
                      <input
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
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal rounded-sm outline-none bg-slate-100"
                        type="text"
                        name="whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                      />
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
    </>
  );
}

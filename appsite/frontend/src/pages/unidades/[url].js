import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export async function getServerSideProps(context) {
  const { params } = context;

  const data = await fetch(`http://localhost:3333/api/unidades/${params.url}`);
  const unidade = await data.json();

  console.log(unidade);

  if (unidade.error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: { unidade },
  };
}

export default function Unidade({ unidade }) {
  return (
    <>
      <Navbar />
      <h1>Unidade01 {unidade.nome} </h1>

      <Footer />
    </>
  );
}

// export async function getServerSideProps() {
//   const url = "araraquara";
//   const response = await api.get(`http://localhost:3333/api/unidades/${url}`);

//   return { props: { datas: response.data } };
// }

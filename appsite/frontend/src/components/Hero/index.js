export default function Hero({ ...props }) {
  return (
    <>
      <section
        className={"bg-[" + props.color + "] pt-24 pb-24 overflow-hidden "}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="mb-3 font-bold font-heading tracking-px-n leading-none text-black text-4xl "
              contentEditable="false"
            >
              {props.title}
            </h2>

            <span className="text-xl text-justify font-medium font-heading md:text-center px-6 ">
              {props.subtitle}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

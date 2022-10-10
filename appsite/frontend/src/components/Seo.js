import { NextSeo } from "next-seo";

export default function Seo({ ...props }) {
  const url = `https://vox2you.com.br${props.path}`;
  return (
    <div>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={url}
        openGraph={{
          url: url,
          title: props.title,
        }}
      />
      {props.children}
    </div>
  );
}

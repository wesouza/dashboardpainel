import { NextSeo } from "next-seo";

export default function Seo({ title, description, path, children }) {
  const url = `https://vox2you.com.br${path}`;
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </div>
  );
}

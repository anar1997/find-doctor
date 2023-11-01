import Layout from "@/components/Layout";
import LinksArea from "@/components/LinksArea";
import Cover from "@/components/about/Cover";

export default function Doctors() {
  return (
    <Layout>
      <div>
        <LinksArea />
        <Cover title={"Doctors"} />
      </div>
    </Layout>
  );
}

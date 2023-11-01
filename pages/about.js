import Layout from "@/components/Layout";
import LinksArea from "@/components/LinksArea";
import Cover from "@/components/about/Cover";
import Texts from "@/components/about/Texts";

export default function About() {
    return (
        <Layout>
            <div>
                <LinksArea/>
                <Cover title={'About'}/>
                <Texts/>
            </div>
        </Layout>
    )
}
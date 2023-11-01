import Layout from "@/components/Layout";
import LinksArea from "@/components/LinksArea";
import Cover from "@/components/about/Cover";
import BlankRegister from "@/components/register/BlankRegister";

export default function Register() {
    return(
        <Layout>
            <div>
                <LinksArea/>
                <Cover title={'Register'}/>
                <BlankRegister/>
            </div>
        </Layout>
    )
}
import Layout from "@/components/Layout";
import LinksArea from "@/components/LinksArea";
import Cover from "@/components/about/Cover";
import BlankLogin from "@/components/login/BlankLogin";

export default function Login() {
    return (
        <Layout>
            <div>
                <LinksArea/>
                <Cover title={'Login'}/>
                <BlankLogin/>
            </div>
        </Layout>
    )
}
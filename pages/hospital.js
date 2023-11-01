import Layout from "@/components/Layout";
import LinksArea from "@/components/LinksArea";
import Cover from "@/components/about/Cover";
import HospitalList from "@/components/hospital/HospitalList";
import HospitalPage from "@/components/hospital/HospitalPage";

export default function Hospital(){
    return(
        <Layout>
            <div>
                <LinksArea/>
                <Cover title={'Hospitals'}/>
                <HospitalPage/>
                <HospitalList/>
            </div>
        </Layout>
    )
}
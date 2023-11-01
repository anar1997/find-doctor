import Layout from "@/components/Layout";
import LinksArea from "@/components/LinksArea";
import Cover from "@/components/about/Cover";
import HospitalList from "@/components/hospital/HospitalList";
import HospitalPage from "@/components/hospital/HospitalPage";

export default function BeautyCenter(){
    return(
        <Layout>
            <div>
                <LinksArea/>    
                <Cover title={'Beauty Center'}/>
                <HospitalPage/>
                <HospitalList/>
            </div>
        </Layout>
    )
}
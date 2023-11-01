import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import LinksArea from '@/components/LinksArea'
import MainCover from '@/components/MainCover'



export default function Home() {
  return (
     <Layout>
        <div className='home'>
          <LinksArea/>
          <MainCover/>
        </div>
     </Layout>
  )
}

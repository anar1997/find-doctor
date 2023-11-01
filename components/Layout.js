import SEO from "./SEO";
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, title, description, url, thumbnail, type = 'default', categories })=>{
    return (
        <div className="layout">
            <SEO title={title} description={description} url={url} thumbnail={thumbnail}/>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;
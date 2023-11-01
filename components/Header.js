import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaLinkedinIn, FaMap, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Header = () => {
    return (
        <div className='header-wrap'>
            <div className='header-wrap-1'>
                <ul className='col-4 header-wrap-first'>
                    <li>
                        <BsFillTelephoneFill className="header-icon" />
                        Tel: +440-98-5298
                        <p>&nbsp;&nbsp;</p>|<p>&nbsp;&nbsp;</p>
                    </li>
                    <li>
                        <IoMdMail className="header-icon" />
                        info@finddoctorinturkey.com
                        <p>&nbsp;&nbsp;</p>|<p>&nbsp;&nbsp;</p>
                    </li>
                    <li>
                        <FaMap className="header-icon" />
                        Mansuroğlu Mah. 288/6 Sk. No:4/1 Bayraklı / İzmir
                    </li>
                </ul>
                <div className='col-4 header-wrap-second'>
                    <ul>
                        <li className='li'>
                            <Link legacyBehavior href=''>
                                <FaFacebook className='icon-2'/>
                            </Link>
                        </li>
                        <li className='li'>
                            <Link legacyBehavior href=''>
                                <FaTwitter className='icon-2'/>
                            </Link>
                        </li>
                        <li className='li'>
                            <Link legacyBehavior href=''>
                                <FaYoutube className='icon-2'/>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href=''>
                                <FaLinkedinIn className='icon-2'/>
                            </Link>
                        </li>
                    </ul>
                    <a href="" className='doctor-registration'>
                        Join
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
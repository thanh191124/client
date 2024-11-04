import React,{useEffect} from 'react'
import Preloader from "../helper/Preloader";

import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import ProjectDetails from "../components/ProjectDetails";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
// App.js or your component file

export default function Login() {
  const checkToken = async () => {
    const tokenUser = localStorage.getItem('tokenUser');
    if (!tokenUser) {
      window.location.href = '/login'; // Correct redirection to the login page
    }
  };
  useEffect(()=>{
    checkToken();
  },[])
  return (
    <>
          {/* ColorInit */}
          <ColorInit color={true} />

{/* ScrollToTop */}
<ScrollToTop smooth color="#FA6400" />

{/* Preloader */}
<Preloader />

{/* HeaderTwo */}
<HeaderTwo category={true} />

{/* Breadcrumb */}
<Breadcrumb title={"Tài Khoản Cá Nhân"} />

{/* Account */}
<ProjectDetails />

{/* ShippingOne */}
<ShippingOne />

{/* FooterTwo */}
<FooterTwo />

{/* BottomFooter */}
<BottomFooter />
    </>
)
}

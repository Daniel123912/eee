import Navigationmenu from "./Navigationmenu";
import SiteHeader from "../SiteHeader";
import Mainhome from "./Mainhome";
import Footer from "./Footer";


export default function Home() {
  return (
 <div>
    <Navigationmenu/>
    <SiteHeader/>
    <Mainhome/>
    <Footer/>
 </div>
  )
}

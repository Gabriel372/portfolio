import Footer from "@/pages/Footer";
import Header from "../pages/Header";

function Layout({ children }:any) {

return (
<>
<main>
<Header/>
{children}
<Footer/>
</main>
</>
)
  }

export default Layout


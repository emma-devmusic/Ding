import { 
    About, ButtonToTop, Contact, Footer, Hero, Navbar, Newsletter, Portfolio, Price, SearchStart, Services, Spinner, Team 
} from "../components";
import { useInit } from "../actions/useInit";

export const Home = () => {

    const { isLoading } = useInit();

    return (

        <div className="container-xxl bg-white p-0" >

            { isLoading && <Spinner /> }

            <div className="container-xxl position-relative p-0">
                <Navbar/>
                <Hero />
            </div>

            <SearchStart />

            <About />

            <Newsletter />

            <Services />

            <Portfolio />

            <Price />

            <Team />

            {/* <TechStack /> */}

            <Contact />

            <Footer />

            <ButtonToTop />

        </div>
    )
}

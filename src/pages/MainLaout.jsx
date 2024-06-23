import {NavMenu} from "../components/osnova/NavMenu";
import {Footer} from "../components/osnova/Footer";






export const MainLaout = (props) => {
    return(
        <>
        <NavMenu />
            {props.children}
        <Footer />
        </>
    )
};
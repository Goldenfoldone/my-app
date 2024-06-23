import { MiniPost } from "../Posts/MiniPost";


export const ContentNews = (props) => {

    const {massiv} = props
    return(
        <>
        {massiv.map((item) => {
                return(
                    <MiniPost object={item} />
                )
            })} 
        </>
    )
}
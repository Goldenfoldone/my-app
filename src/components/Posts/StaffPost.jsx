import { styled } from "styled-components"
import pyst from '../img/Staff/free-icon-no-camera-7454976.png'

const Grani = styled.div`
    display: grid;
    max-width: 360px;
    justify-items: center;
    
`
const Img = styled.img`
    max-width: 330px;
    border-radius: 50%;
`
const Post = styled.p`
    width: fit-content;
    margin: 0;
    padding: 0;
    font-size: 25px;
    text-align: center;
`
const FIO = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
`

export const StaffPost = (props) => {
    const {object} = props;
    const {img, tel, name, post} = object;
    return(
        <>
        <Grani>
            <Img src={img == '' ? pyst: img}/>
            <Post>{post}</Post>
            <FIO>{name}</FIO>
            <Post>{tel}</Post> 
        </Grani>        
              
        </>
    )
}
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";


const Osnova = styled(Slider)`
    div div div{
      box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-right: 30px;
    }
    div div.slick-center{
      
    }
    
`

const Text = styled.p`
    margin: 0;
    overflow-wrap: break-word;
    hyphens: auto;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
const Title = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const Eelment = styled.div`    
`
const ElemImg = styled.img`
    scale: 1;
    max-width: 314px;
    min-height: 251px;
`


export const SimpleSlider = (props) => {
  var settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
};
    const {content} = props
  return (
    <Osnova {...settings}>
      {content.map((e) => {
        return(
            <>
                    <ElemImg src ={e.img}/>
                    <Title>{e.title}</Title>
                    <Text>{e.descropion}</Text>
            </>
        )
      })}
    </Osnova>
  );
}
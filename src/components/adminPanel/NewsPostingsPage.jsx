import { styled } from "styled-components";
import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'



const AdInput = styled.input`
    display: flex;
    background-color: white;
    border: 0px  solid black;
    width: 70%;
    height: 40px;
    font-size: 35px;
    margin-left: 10%;
    margin-top: 25px;
    outline: none;

    &.l{
        margin-top: 45px;
    }
`

const AdButton = styled.button`
    margin-top: 45px;
    margin-left: 10%;
    border: 2px solid black;
    border-radius: 7px;
    padding: 10px;  
    font-size: 23px;
    cursor: pointer;

    &:hover{
        background-color: #DB6B4D;
        border-color: white;
    }
`
const OsnText = styled.textarea`
    display: flex; 
    width: 70%;
    margin-left: 9.3%;
    margin-top: 25px;
    padding: 10px;
    font-size: 35px;
    border: 0 solid black;
    outline: none;
    resize: none;
`

const Helper = styled.div`
    display:flex;
`

export const NewsPostingsPage = () =>{
    return(
        <div>
            <AdInput type="text" placeholder='Введите заголовок'  required/>
            <Editor />
            <OsnText placeholder='Введите основной текст'/>
            <AdButton>Загрузите изображение</AdButton>
            <div>
                <Helper>
                    <AdInput type="text"  class='l' placeholder='Укажите автора статьи'  required/>
                    <AdInput type="text"  class='l' placeholder='Укажите рубрику статьи'  required/>
                </Helper>
                <Helper>
                
                </Helper>
            </div>
        </div>
    )
}
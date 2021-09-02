import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const ModalWrapperStyled = styled.div`
    box-sizing: border-box;
    max-width: 827px;
    max-height: 100vh;
    overflow: scroll;
    padding: ${props => props.confirm ? "40px 20px" : "20px 10px"};
    margin: 10px;
    border-radius: 14px;
    background:#fff;
    position:relative;
    text-align:${props => props.confirm ? "center" : "start"};
    display:${props => props.confirm ? "flex" : ""};
    flex-direction:${props => props.confirm ? "column" : ""};
    @media (min-width: 1024px) {
        padding: ${props => props.confirm ? "60px" : "60px 100px"};
    }
`

const FormStyled = styled.form`        
    margin: 10px 0 0;
    display: flex;
    flex-direction: column;
    @media (min-width: 1440px) {
        margin: 20px 0 0;
    }
`
const TitleStyled = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    margin:0;
    color: #000000;
    padding: 0 55px 0 0;
    @media (min-width: 1024px) {
        font-size: 30px;
        line-height: 40px;}
    }
`
const FormLabelStyled = styled.label`
    font-size: 16px;
    line-height: 30px;
    color: #000000; 
    @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 30px;
    }
`
const FormInputStyled = styled.input`
    width:100%;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #0a0a0a;
    margin: 5px 0 12px;
    padding: 5px;
    outline:none;
    @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 30px;
        margin: 6px 0 20px;
        padding: 8px 10px;
    }
`
const FormTextAreaStyled = styled.textarea`
    width: 100%;
    min-height:100px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    padding:5px;
    margin: 5px 0 12px;
    color: #0a0a0a;
    @media (min-width: 1024px) {
        min-height:152px;
        padding: 8px 10px; 
        margin: 6px 0 20px;
        font-size: 20px;
        line-height: 30px; 
    }
`
const ButtonStyled = styled.button`
    display: flex;
    align-self: center;
    justify-content: center;
    width:100%;
    margin: 15px 0 0;

    @media (min-width: 1024px) {
        align-self: flex-end;
        max-width: 200px;
        margin: 24px 0 0;
    }
`
const CloseModalButtonStyled = styled(MdClose)`
    cursor:pointer;
    position:absolute;
    top:20px;
    right:20px;
    width:32px;
    height:32px;
    padding:0;
    z-index:10;
    @media (min-width: 1024px) {
        display:flex;
    }
    @media (min-width: 1440px) {
        display:none;
    }
`
const ConfirmButtonStyled = styled(ButtonStyled)`
    align-self:center;
    margin: 40px 0 0;
`

function ModalWithForm(props) {
    const [secondOpen, setSecondOpen] = React.useState(false)
    const [companyName, setCompanyName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [call, setCall] = React.useState('')

    function handleOnSubmit(e) {
        e.preventDefault()
        setSecondOpen(true)
        const payload = {
            companyName: companyName,
            email: email,
            description: description,
            call: call
        }
        props.onSubmit(payload)
    }

    function handleCloseModals() {
        props.setFirstOpen()
        setSecondOpen(false)
    }

    if (!secondOpen) {
        return (<ModalWrapperStyled data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="400" className="scrollbar-hidden">
            <CloseModalButtonStyled
                aria-label='Close modal'
                onClick={handleCloseModals}
            />
            <TitleStyled > Delegate us your task! Fill in this form!</ TitleStyled>
            <FormStyled onSubmit={handleOnSubmit} method="post" name="delegate-task">
                <FormLabelStyled>Your company name *</FormLabelStyled>
                <FormInputStyled type="text" required placeholder="Company Name" onChange={e => setCompanyName(e.target.value)} />
                <FormLabelStyled>Your email *</FormLabelStyled>
                <FormInputStyled type="email" required placeholder="email@email.com" onChange={e => setEmail(e.target.value)} />
                <FormLabelStyled>Describe your task</FormLabelStyled>
                <FormTextAreaStyled type="text" placeholder="We want to..." onChange={e => setDescription(e.target.value)} />
                <FormLabelStyled>How can we call you?</FormLabelStyled>
                <FormInputStyled type="text" placeholder="My name is" onChange={e => setCall(e.target.value)} />
                <ButtonStyled type="submit" className="cta cta_theme_dark">
                    Submit
                </ButtonStyled>
            </FormStyled>
        </ModalWrapperStyled>)
    } else {
        return (
            <ModalWrapperStyled confirm className="scrollbar-hidden">
                <TitleStyled>
                    Thank you for contacting us, Tim Cook from Apple Inc.! We’ll reach out to you in email as soon as possible. Looking forward to work together!</TitleStyled>
                <ConfirmButtonStyled className="cta cta_theme_dark" onClick={handleCloseModals}>Done</ConfirmButtonStyled>
            </ModalWrapperStyled>)
    }
}

export default ModalWithForm;
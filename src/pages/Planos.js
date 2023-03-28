import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import InfoPlanos from "../components/InfoPlanos"
import { AuthContext } from "../context/AuthContext"

export default function Planos() {
    const { setModal } = useContext(AuthContext)
    const token = window.localStorage.getItem("token")
    const [info, setInfo] = useState([])
    useEffect(() =>{
        function listPlans(){
            setModal(false)
            const config = {
                headers : { Authorization: `Bearer ${token}` }
            }
            const promise = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
            promise.then((res) =>{
                console.log(res.data)
                setInfo(res.data)
                
            })
            promise.catch((err) =>{
                console.log(err.response.data)
            })
        }
        listPlans()
    }, [])
    return(
        <DivContainer>
            <Span>Escolha seu Plano</Span>
            <InfoPlanos info={info}/>
        </DivContainer>
    )

}

const DivContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    margin-top: 20px;
    
`

const Span = styled.span`
    font-family: 'Roboto';
    font-size: 32px;
    color: #FFFFFF;
    font-weight: bold;
    margin-bottom: 10px;
`


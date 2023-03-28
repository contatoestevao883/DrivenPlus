import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import vector from "../assets/Vector5.png"
import { AuthContext } from "../context/AuthContext"

export default function Home(){
    const { idUser } = useParams()
    const { deletePlan } = useContext(AuthContext)
    const imagePlan = window.localStorage.getItem("image")
    const name = window.localStorage.getItem("name")
    const perks = window.localStorage.getItem("perks")
    const perksBenefit = JSON.parse(perks)
    console.log(perksBenefit)
    return(
        <>
            <Header>
                <Logo src={imagePlan} />
                <Link to={`/users/${idUser}`}>
                 <UserLogo src={vector}/>
                </Link>
            </Header>
            <DivSpan>
                <span>{`Olá, ${name}`}</span>
            </DivSpan>
            <Main>
                <ListBenefits>
                    {perksBenefit.map(benefit => 
                    <li key={benefit.id}> <a href={benefit.link}>{benefit.title}</a></li>
                    )}
                </ListBenefits>
                <DivContainer>
                    <Link to="/subscriptions">
                        <ChangePlanButton>Mudar plano</ChangePlanButton>
                    </Link>
                    <DeletePlanButton onClick={deletePlan}>Cancelar plano</DeletePlanButton>
                </DivContainer>
            </Main>
        </>
    )

}

const Main = styled.div`
    display: flex;
    flex-direction:column;
    height: 500px;
    justify-content: space-between;
`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
`
const Logo = styled.img`
    width: 80px;
    margin-top: 30px;
`
const UserLogo = styled.img`
    margin-right: 30px;
    margin-top: 25px;
    width: 35px;
    height: 38px;
`
const DivSpan = styled.span`
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight:bold;
    font-family: 'Roboto';
    margin-bottom: 30px;
`
const ListBenefits = styled.ul`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    li{
        color: #FFFFFF;
        width: 299px;
        height: 52px;
        background: #FF4791;
        border-radius: 8px;
        list-style: none;
        text-align: center;
        line-height: 50px;
        margin-top: 10px;
        font-size: 14px;
        font-family: 'Roboto';
        font-weight: bold;
    }
    a{
        color: #FFFFFF;
        cursor: pointer;
    }
`

const DivContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;

`
const ChangePlanButton = styled.button`
    box-sizing: content-box;
    color: #FFFFFF;
    width: 289px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    border-style: none;
    font-weight: bold;
    font-family: 'Roboto';
    margin-bottom: 10px;
    cursor: pointer;
`
const DeletePlanButton = styled.button`
    box-sizing: content-box;
    width: 289px;
    height: 52px;   
    color: #FFFFFF;
    background: #FF4747;
    border-radius: 8px;
    border-style: none;
    font-weight: bold;
    font-family: 'Roboto';
    cursor: pointer;
`
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function InfoPlanos({ info }) {
    return(
        <>
        {info.map((infos, index) => <InfoPlano image={infos.image} price={infos.price} id={infos.id} key={index}/>)}
        </>
    )
}

function InfoPlano(props){
    return(
        <>
            <Link to={`/subscriptions/${props.id}`}>
                <DivLogo key={props.index}>
                    <Logo src={props.image}/>
                    <SpanPrice>{`R$ ${props.price}`}</SpanPrice>
                </DivLogo>
            </Link>
        </>
    )
}

const DivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    width: 290px;
    height: 180px;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    margin-top: 10px;
`
const SpanPrice = styled.span`
    font-size: 24px;
    color: #FFFFFF;
    font-weight: bold;
`
const Logo = styled.img`
    width: 150px;
    height: 110px;
`
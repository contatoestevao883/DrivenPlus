import logo from '../assets/Logo.png' 
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Login() {
    const { signIn, email, senha, setEmail, setSenha} = useContext(AuthContext)
    return(
        <>
            <Logo src={logo}/>
            <DivContainer onSubmit={signIn}>
                <Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
                <Input type= "password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required/>
                <Button type="submit">ENTRAR</Button>
                <Link to="/sign-up">
                     <Span>Não possuí uma conta? Cadastre-se</Span>
                </Link>
            </DivContainer>
        </>
    )
}

const DivContainer= styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Logo = styled.img`
    margin-top: 130px;
    margin-bottom: 80px;
`
const Input = styled.input`
    font-family: 'Roboto';
    background: #FFFFFF;
    border-radius: 8px;
    width: 298px;
    height: 52px;
    margin-top: 10px;
    font-size: 14px;
    ::placeholder{
        padding-left: 10px;
    }
`
const Button = styled.button`
    box-sizing: content-box;
    width: 293px;
    height: 52px;
    margin-top: 20px;
    font-size: 14px;
    margin-bottom: 20px;
    background: #FF4791;
    border-radius: 8px;
    border-style: none;
    font-family: 'Roboto';
    color: #FFFFFF;
    cursor: pointer;
`
const Span = styled.span`
    font-family: 'Roboto';
    font-size: 14px;
    text-decoration: underline;
    color: #FFFFFF;
`
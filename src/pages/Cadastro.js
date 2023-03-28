import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from "../context/AuthContext"

export default function Cadastro() {
    const { nome, email, CPF, senha, setEmail, setSenha, setNome, setCPF, signUp } = useContext(AuthContext)
    return(
        <DivContainer onSubmit={signUp}>
                <Input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
                <Input type= "cpf" placeholder="CPF" value={CPF} onChange={e => setCPF(e.target.value)} required/>
                <Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                <Input type= "password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required/>
                <Button type="submit">CADASTRAR</Button>
                <Link to="/">
                     <Span>Já possuí uma conta? Entre</Span>
                </Link>
        </DivContainer>
    )
}

const DivContainer= styled.form`
    margin-top: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
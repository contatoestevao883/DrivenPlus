import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from "../context/AuthContext"
import vector3 from "../assets/Vector3.png"

export default function User() {
   const { idUser } = useParams()
    const { setNome, setCPF, setEmail, nome, CPF, senha, email, userSignIn, setSenha } = useContext(AuthContext)
    return(
        <>
            <Link to="/home">
                <Vector3 src={vector3} />
            </Link>
            <DivContainer onSubmit={userSignIn}>
                <Input type="text" placeholder="Fulano" value={nome} onChange={e => setNome(e.target.value)} required/>
                <Input type="text" placeholder="111.111.111-11" value={CPF} onChange={e => setCPF(e.target.value)} required/>
                <Input type= "email" placeholder="fulano@email.com" value={email} onChange={e => setEmail(e.target.value)} required/>
                <Input type= "password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required/>
                <Link to={`/users/${idUser}/update`}>
                    <Button type="submit">ATUALIZAR</Button>
                </Link>
            </DivContainer>
        </>
    )
}

const DivContainer= styled.form`
    margin-top: 150px;
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
    font-weight:  bold;
    cursor: pointer;
`
const Vector3 = styled.img`
    position: absolute;
    top: 20px;
    left: -10px;
    cursor: pointer;
`
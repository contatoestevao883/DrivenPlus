import axios from "axios"
import { createContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    const { idUser } = useParams()
    const navigate = useNavigate()
    
    const [modal, setModal] = useState(false)

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [CPF, setCPF] = useState("")
    const [novaSenha, setNovaSenha] = useState("")

    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [securityNumber, setSecurityNumber] = useState("")
    const [expirationData, setExpirationData] = useState("")
    const [membershipId, setMemberShipId] =  useState("")


    const [perksBenefits, setPerksBenefits] = useState([])
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    
    const token = window.localStorage.getItem("token")

    function signUp(e){
        e.preventDefault()
        const body = {
            email: email,
            name: nome,
            cpf: CPF,
            password: senha
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", body)
        promise.then((res) => {
            console.log(res.data)
            navigate("/")
        })
        promise.catch((err) => {
            console.log(err.response.message)
            alert(`Erro: ${err.response.data.message}`)
        })
    }

    function signIn(e){
        e.preventDefault()
        const body = {
            email: email,
            password: senha
        }
        const promise= axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", body)
        promise.then((res) => {
            console.log(res.data)
            window.localStorage.clear()
            window.localStorage.removeItem("membership")
            window.localStorage.setItem("token", res.data.token)
            window.localStorage.setItem("name", res.data.name)
            window.localStorage.setItem("id", res.data.id)
            if(res.data.membership === null ){
                navigate("/subscriptions")
            }else{
                window.localStorage.setItem("image", res.data.membership.image)
                window.localStorage.setItem("perks", JSON.stringify(res.data.membership.perks))
                navigate("/home")
            }
        })
        promise.catch((err) =>{
            console.log(err.response.data.message)
            alert(`Erro: ${err.response.data.message}`)
        })
    }
    
    function displayModal(e){
        e.preventDefault()
        setModal(true)
    }

    function removeModal(){
        setModal(true)
    }

    function subscribePlan(e){
        e.preventDefault()
        setMemberShipId("")
        setCardName("")
        setCardNumber("")
        setSecurityNumber("")
        setExpirationData("")
        const body = {
            membershipId: membershipId,
            cardName: cardName,
            cardNumber: cardNumber,
            securityNumber: securityNumber,
            expirationDate: expirationData
        }
        const config = {
            headers : { Authorization: `Bearer ${token}` }
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", body, config)
        promise.then((res) => {
            console.log(res.data)
            window.localStorage.setItem("image", res.data.membership.image)
            window.localStorage.setItem("perks", JSON.stringify(res.data.membership.perks))
            navigate("/home")
        })
        promise.catch((err) => {
            console.log(err.response.data.message)
            alert(`Erro: ${err.response.data.message}`)
        })
        
    }

    function deletePlan(){
        const config = {
            headers : { Authorization: `Bearer ${token}` }
        }
        const promise = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config)
        promise.then((res) =>{
            console.log(res.data)
            navigate("/subscriptions")
        })
        promise.catch((err) =>{
            console.log(err.response.data.message)
        })
    }

    function userSignIn(e){
        e.preventDefault()
        const body = {
            email: email,
            password: senha
        }
        const promise= axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", body)
        promise.then((res) => {
            console.log(res.data)
            navigate(`/users/${idUser}/update`)
        })
        promise.catch((err) =>{
            console.log(err.response.data.message)
        })
    }

    function userUpdate(e){
        e.preventDefault()
        const body = {
            name: nome,
            cpf: CPF,
            email: email,
            currentPassword: senha,
            newPassword: novaSenha
        }
        const config = {
            headers : { Authorization: `Bearer ${token}` }
        }
        const promise= axios.put("https://mock-api.driven.com.br/api/v4/driven-plus/users/", body, config)
        promise.then((res) => {
            console.log(res.data)
            navigate("/home")
            alert("Informações de usuário atualizadas")
        })
        promise.catch((err) =>{
            console.log(err.response.data.message)
        })
    }


    return(
        <AuthContext.Provider value ={{ 
            novaSenha, perksBenefits, image, name, price, email, senha, nome, CPF, modal, membershipId, cardName, securityNumber, expirationData, cardNumber, 
            setCardName, setSecurityNumber, setExpirationData, setCardNumber, setEmail, setSenha, setNome, setCPF, signUp, signIn, subscribePlan,
            displayModal, setModal, removeModal, setMemberShipId, setPrice, setPerksBenefits, setImage,setName, deletePlan, userSignIn, setNovaSenha, userUpdate
             }}>
            {children}
        </AuthContext.Provider>
    )
}
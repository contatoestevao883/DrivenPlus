import { Routes, Route } from 'react-router-dom'
import Cadastro from '../pages/Cadastro'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Planos from '../pages/Planos'
import PlanSub from '../pages/PlanSub'
import User from '../pages/User'
import UserUpdate from '../pages/UserUpdate'

export default function RoutesMain() {
    return(
        <Routes>
            <Route path="/" element= { <Login /> } />
            <Route path="/sign-up" element= { <Cadastro /> } />
            <Route path="/subscriptions" element= { <Planos /> } />
            <Route path="/subscriptions/:idPlano" element= { <PlanSub /> } />
            <Route path="/home" element= { <Home /> } />
            <Route path="/users/:idUser" element= { <User /> } />
            <Route path="/users/:idUser/update" element= { <UserUpdate /> } />
        </Routes>
    )
}
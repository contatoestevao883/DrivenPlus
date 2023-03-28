import axios from "axios";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import vector from '../assets/Vector.png'
import vector2 from '../assets/Vector2.png'
import vector3 from '../assets/Vector3.png'
import { AuthContext } from "../context/AuthContext";

export default function PlanSub(){
    const { modal, setModal,removeModal, perksBenefits, image,name, price, setPrice,setImage, setPerksBenefits, setName, subscribePlan, setMemberShipId, setCardName, setCardNumber, setSecurityNumber, setExpirationData, cardName, cardNumber, securityNumber, expirationData, displayModal } = useContext(AuthContext)
    const { idPlano } = useParams()
    const token = window.localStorage.getItem("token")

    function closeModal(){
        setModal(false)
    }

    
    useEffect(() => {
        function listPlanSub(){
            setMemberShipId("")
            setCardName("")
            setCardNumber("")
            setSecurityNumber("")
            setExpirationData("")
            const config = {
                headers : { Authorization: `Bearer ${token}` }
            }
            const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`, config)
            promise.then((res) => {
                console.log(res.data)
                setImage(res.data.image)
                setName(res.data.name)
                setPrice(res.data.price)
                setPerksBenefits(res.data.perks)
                setMemberShipId(res.data.id)
            })
            promise.catch((err) => {
                console.log(err.response.data.message)
            })
        }
        listPlanSub()
    }, [])
    return(
        <>

        {modal ? 
            <Main2 >

            { modal ? 
                <Modal>
                    <VectorButton onClick={closeModal}>
                        X
                     </VectorButton>
                    <DivSpan>
                        <ModalSpan>Tem certeza que deseja</ModalSpan>
                        <h3>assinar o plano</h3>
                        <h3>{`${name} (R$ ${price})?`}</h3>
                    </DivSpan>

                    <DivBox>
                            <ModalButton1 onClick={removeModal}>Não</ModalButton1>
                            <ModalButton2 onClick={subscribePlan}>SIM</ModalButton2>
                    </DivBox>
                </Modal>
                :
                <Modal2></Modal2>
             }

            <DivContainer style={{opacity: modal ? '20%' : '100%'}}>
                <Link to="/subscriptions">
                    <Vector3 src={vector3} />
                </Link>
                <Logo src={image}/>
                <Span>{name}</Span>
            </DivContainer>

            <BenefitDiv style={{opacity: modal ? '20%' : '100%'}}>
                    <Vector src={vector}/>
                    <BenefitSpan>Benefícios:</BenefitSpan>
                    <Ul>
                        {perksBenefits.map(benefit => 
                            <li key={benefit.id}>{benefit.title}</li>
                        )}
                    </Ul>
                    <DivPrice>
                        <Vector2 src={vector2}/>
                        <PriceSpan>Preço:</PriceSpan>
                    </DivPrice>
                    <Price>{`R$ ${price} cobrados mensalmente `}</Price>
            </BenefitDiv>

            <DivForm onSubmit = {displayModal} style={{opacity: modal ? '20%' : '100%'}}>
                <Input type="text" placeholder="Nome impresso no cartão" required value={cardName} onChange={e => setCardName(e.target.value)}/>
                <Input type="text" placeholder="Digitos do cartão" value={cardNumber} onChange={e => setCardNumber(e.target.value)} required/>
                <DivInput>
                        <InputSmall1 type="number" placeholder="Código de segurança" value={securityNumber} onChange={e => setSecurityNumber(e.target.value)} required/>
                        <InputSmall type="text" placeholder="Validade" value={expirationData} onChange={e => setExpirationData(e.target.value)} required/>
                </DivInput>
                <Button type="submit">ASSINAR</Button>
            </DivForm>
        </Main2>
            :
             <Main>
                { modal ? 
                
                    <Modal>
                        <VectorButton onClick={closeModal}>
                            X
                        </VectorButton>
                        <DivSpan>
                            <ModalSpan>Tem certeza que deseja</ModalSpan>
                            <h3>assinar o plano</h3>
                            <h3>{`${name} (R$ ${price})?`}</h3>
                        </DivSpan>

                        <DivBox>
                                <ModalButton1 onClick={removeModal}>Não</ModalButton1>
                                <ModalButton2 onClick={subscribePlan}>SIM</ModalButton2>
                        </DivBox>
                    </Modal>
                    :
                    <Modal2></Modal2>
                }

                <DivContainer>
                    <Link to="/subscriptions">
                        <Vector3 src={vector3} />
                    </Link>
                    <Logo src={image}/>
                    <Span>{name}</Span>
                </DivContainer>

                <BenefitDiv >
                        <Vector src={vector}/>
                        <BenefitSpan>Benefícios:</BenefitSpan>
                        <Ul>
                            {perksBenefits.map(benefit => 
                                <li key={benefit.id}>{benefit.title}</li>
                            )}
                        </Ul>
                        <DivPrice>
                            <Vector2 src={vector2}/>
                            <PriceSpan>Preço:</PriceSpan>
                        </DivPrice>
                        <Price>{`R$ ${price} cobrados mensalmente `}</Price>
                </BenefitDiv>

                <DivForm onSubmit = {displayModal}>
                    <Input type="text" placeholder="Nome impresso no cartão" required value={cardName} onChange={e => setCardName(e.target.value)}/>
                    <Input type="text" placeholder="Digitos do cartão" value={cardNumber} onChange={e => setCardNumber(e.target.value)} required/>
                    <DivInput>
                            <InputSmall1 type="number" placeholder="Código de segurança" value={securityNumber} onChange={e => setSecurityNumber(e.target.value)} required/>
                            <InputSmall type="text" placeholder="Validade" value={expirationData} onChange={e => setExpirationData(e.target.value)} required/>
                    </DivInput>
                    <Button type="submit">ASSINAR</Button>
                </DivForm>
            </Main>
            }
        </>
    )
}
const Main = styled.div`  

`
const Main2 = styled.div`   
`
const Modal2 =styled.div`
    display: none;
`
const DivContainer = styled.div`
   
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.img`
    margin-bottom: 15px;
    width: 150px;
    height: 110px;
`

const Span = styled.span`
    color: #FFFFFF;
    font-size: 32px;
    font-family: 'Roboto';
`
const BenefitDiv = styled.div`
  
    margin-left: 10px;
    margin-top: 15px;
`
const Vector = styled.img`
    margin-top: 12px;
`
const Vector2 = styled.img`
    margin-top: 18px;
`
const BenefitSpan = styled.span `
    color: #FFFFFF;
    font-size: 16px;
    font-family: 'Roboto';
    margin-left: 10px;
`
const Ul = styled.ul`
    margin-left: 52px;
    margin-top: 10px;
        li{
            color: #FFFFFF;
        }
`
const DivPrice = styled.div`
    display: flex;
`
const PriceSpan = styled.span`
    color: #FFFFFF;
    font-size: 16px;
    font-family: 'Roboto';
    margin-top: auto;
    margin-left: 5px;
    line-height: 10px;
`

const Price = styled.span`
    font-size: 14px;
    color: #FFFFFF;
    font-family: 'Roboto';
    margin-left: 33px;
    line-height: 28px;
`

const DivForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const Input = styled.input`
    width: 299px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    border-style: none;
    margin-top: 8px;
    font-family: 'Roboto';
    font-size:14px;
    ::placeholder{
        padding-left: 10px;
    }
`
const DivInput = styled.div`
    display: flex;
`

const InputSmall1 = styled.input`
    width: 145px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    border-style: none;
    margin-top: 8px;
    font-family: 'Roboto';
    margin-right: 8px;
    font-size:14px;
    ::placeholder{
        padding-left: 10px;
    }
`
const InputSmall = styled.input`
    width: 143px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    border-style: none;
    margin-top: 8px;
    font-family: 'Roboto';
    font-size:14px;
    ::placeholder{
        padding-left: 10px;
    }
`
const Button = styled.button` 
    box-sizing: content-box;
    width: 295px;
    height: 52px;
    background: #FF4791;
    border-style: none;
    border-radius: 8px;
    margin-top:10px;
    font-family: 'Roboto';
    color: #FFFFFF;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`

const Modal = styled.div`
    position: absolute;
    top:200px;
    left: 70px;
    width: 248px;
    height: 210px;
    background: #FFFFFF;
    border-radius: 12px;
`
const DivBox= styled.form`
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
`
const ModalButton1 = styled.button`
    width: 95px;
    height: 52px;
    background: #CECECE;
    border-radius: 8px;
    font-size: 14px;
    color: #FFFFFF;
    border-style: none;
    font-family: 'Roboto';
    cursor: pointer;
`
const ModalButton2 = styled.button`
    width: 95px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    font-size: 14px;
    color: #FFFFFF;
    border-style: none;
    font-weight: bold;
    font-family: 'Roboto';
    cursor: pointer;
`
const ModalSpan = styled.span`
    margin-top: 30px;
    font-size: 18px;
    font-family: 'Roboto';
    color: #000000;
    font-weight: bold;
`
const DivSpan = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    flex-direction: column;
    h3{
        font-size: 18px;
        font-family: 'Roboto';
        color: #000000;
        font-weight: bold;
    }
`
const Vector3 = styled.img`
    position: absolute;
    top: 20px;
    left: -10px;
    cursor: pointer;
`
const VectorButton = styled.button`
    position: absolute;
    top: -183px;
    left: 255px;
    border-style: none;
    cursor: pointer;
    font-size: 25px;
    width: 28px;
    height: 28px;
    font-weight:bold;
    line-height: 27px;
    color: #FFFFFF;
    background: #FF4791;
`   

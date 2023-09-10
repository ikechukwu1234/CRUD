import React, {useState} from 'react'
import styled from '@emotion/styled'
import {BsTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {AiFillDelete} from "react-icons/ai"
import Nigeria from "../../assets/Nigeria download.jpeg"
import Ghana from "../../assets/Ghana Flag.png"
import USA from "../../assets/USA download.png"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
 width: 400px;
 border: 1px solid #f1f1f1;
 display: flex; 
 flex-direction: column;
 justify-content: center;
 padding: 20px;
`

const Input = styled.input`
 height: 30px;
 width: 100%;
 margin-bottom: 10px;
 padding: 10px;
 border-radius: 3px;
 border: 1px solid #dcdce9;
 transition: all 350ms;
 outline-color: #aba5f5;
 padding-left: 10px;
`;
const CardHold= styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Button = styled.button`
    background-color: #123456;
    height: 40px;
    width: 150px;
    outline-color: none;
    color: white;
    cursor: pointer;

`

const Del = styled.div`
    color: red;
`

const Card = styled.div`
    width: 250px;
    border:  1px solid #f1f1f1;
    background-color: white;
    padding: 10px; 
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 10px;

    span{
        font-size: 11px;
    }
`

const Hold = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TName = styled.div``
const Name = styled.div`
    font-weight: bold;
`
const Logo = styled.img`
    height: 30px;
    width: 30px;
    background-color: gray;
    object-fit: cover;
`
const Box = styled.div`
    color: gray;
    border: 1px solid gray;
    padding: 15px 5px 10px 5px;
    height: 10px;
`

const Select= styled.select`
    height: 30px;
    margin-bottom: 10px;
    width: 420px;
    padding: 5px;
    border-radius: 3px;
    transition: all 350ms;
    outline-color: #aba5f5;
`

interface UData {
    fullName: string
    email: string
    phoneNumber: string
    country: string
    id: string
}


const MainScreen :React.FC= () => {
    const [fullName, setFullName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [country, setCountry] = useState<string>("")
    const [data, setData] = useState<Array<UData>>([])

    const SubmitData = ()=>{
        setData((prev)=>[
            ...prev, {
                fullName,
                email,
                phoneNumber,
                country,
                id: `${Math.random()*40000000000000000}`
            }
        ])
    }

  return (
    <Container>
        <Form onSubmit={(e)=>{
            e.preventDefault();
            SubmitData();
        }}> 
            <h2>Add Contact</h2>
            <Input
            onChange={(e)=>{
                setFullName(e.target.value)
            }}
            required  placeholder='Enter FullName' />
            <Input 
            onChange={(e)=>{
                setEmail(e.target.value)
            }}    
            required placeholder='Enter Email' />
            <Input
            onChange={(e)=>{
                setPhoneNumber(e.target.value)
            }}
             required placeholder='e.g' />

            <Select onChange={(e)=>{
                setCountry(e.target.value)
            }}>
            <option selected disabled>--Select Country--</option>
            <option value="USA">USA</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            </Select>

            <Button type='submit'>Submit</Button>
        </Form>
        <br />
        <br />
        <br />
        <h2>All Contacts</h2>
        <CardHold>
            {data?.map((props)=>(
                    <Card>
                    <Hold>
                        <TName>
                            <Name>{props.fullName}</Name>
                            <span>Alfred co.</span>
                            <span>{props.country}</span>
                        </TName>
                         {props.country === "USA"?<Logo src={USA}/> : null}
                       {props.country === "Nigeria"?<Logo src={Nigeria}/> :null}
                      {props.country === "Ghana"?<Logo src={Ghana} /> : null}
                        
                    </Hold>
                    <br />
                    <Box>
                        <BsTelephoneFill /> 
                        {props.phoneNumber}               
                    </Box>
                    <Box>
                        <MdEmail />
                        {props.email}                
                    </Box>
                    <Del>
                        {""}
                        <AiFillDelete />
                    </Del>
                    
          
               <button>
               Edit
               </button>
               <br />
                   <div>
                       <input
                       placeholder='edit name'
                       />
                        <input
                       placeholder='edit email'
                       />
                       <Button>Save</Button>
                   </div>
           </Card>  

            ))}
            
        </CardHold>
    </Container>
  );
};

export default MainScreen

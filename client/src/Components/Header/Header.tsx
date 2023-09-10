import React from 'react'
import styled from '@emotion/styled'
import {BiMenu} from "react-icons/bi"

const Container = styled.header`
    height: 70px;
    width: 100%;
    background-color: #123456;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
`;

const Logo = styled.div``

const Icon = styled.div`
    margin-right: 30px;
    font-size: 30px;
`

const Header :React.FC= () => {
  return (
    <Container>
      <Logo>KODE10X - (PhoneBook)</Logo>
      <Icon>
        {""}
        <BiMenu />
      </Icon>
    </Container>
  )
}

export default Header

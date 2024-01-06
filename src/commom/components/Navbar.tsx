import { Link } from "react-router-dom"
import { styled } from "styled-components"

const Navbar = () => {
  return (
    <Container>
      <NavbarLink to="">Home</NavbarLink>
      <NavbarLink to="/wallet">Wallet</NavbarLink>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
`

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 28px;
  margin: 10px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-color: black;
    cursor: pointer;
  }
`


export { Navbar }
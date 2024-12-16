import styled from 'styled-components'

const FooterArea = styled.footer`
  background-color: #1f1f1f;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const FooterLogo = styled.div`
  color: #ff6200;
  font-family: 'Kelly Slab', sans-serif;
  font-size: 20px;
`
const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 100%;
  }
  li {
    margin-right: 20px;
  }
  a {
    color: #fff;
    font-family: 'Kelly Slab', sans-serif;
    font-size: 16px;
  }
  a:hover {
    color: #ff6200;
  }
`

export { FooterArea, FooterLogo, FooterLinks }

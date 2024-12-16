import styled from 'styled-components'
const SuperiorMenu = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #1f1f1f;
  justify-content: space-between;
  display: flex;
  align-items: center;
`

const BrandArea = styled.div`
  color: #ff6200;
  margin-left: 52px;
  font-family: 'Kelly Slab', sans-serif;
  font-size: 20px;
`

const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-right: 52px;

  & ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 100%;
  }
`

const MenuItem = styled.li`
  margin-right: 20px;
  color: #fff;
  font-size: 16px;
  font-family: 'Kelly Slab', sans-serif;
  font-size: 20px;
  .menu-active a {
    color: #ff6200;
  }
`

const Cart = styled.div`
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-right: 20px;
`
const CartNumber = styled.label`
  background-color: #ff6200;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  padding: 5px;
  font-family: 'Kelly Slab', sans-serif;
`

const CartIcon = styled.img`
  width: 40px;
  height: 40px;
`

export {
  SuperiorMenu,
  BrandArea,
  MenuList,
  MenuItem,
  Cart,
  CartNumber,
  CartIcon
}

import {
  SuperiorMenu,
  BrandArea,
  MenuList,
  MenuItem,
  Cart,
  CartNumber,
  CartIcon
} from './styled'

const Header = () => {
  return (
    <SuperiorMenu>
      <BrandArea>
        <h1>Le-food</h1>
      </BrandArea>
      <MenuList>
        <ul>
          <MenuItem className="menu-active">
            <a>Cardapio</a>
          </MenuItem>
          <MenuItem>
            <a>Categorias</a>
          </MenuItem>
          <MenuItem>
            <a>Mais</a>
          </MenuItem>
        </ul>
      </MenuList>
      <Cart>
        <CartNumber>0</CartNumber>
        <CartIcon src="/cart.png"></CartIcon>
      </Cart>
    </SuperiorMenu>
  )
}

export default Header

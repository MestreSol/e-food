const Header = () =>{
  return (
      <nav className="SuperiorMenu">
        <div className="brand-area">
          <h1>
            Le-food
          </h1>
        </div>
        <div className="menu-list">
          <ul>
            <li className="menu-item .menu-active">
              <a>
                Cardapio
              </a>
            </li>
            <li className="menu-item">
              <a>
                Categorias
              </a>
            </li>
            <li className="menu-item">
              <a>
                Mais
              </a>
            </li>
          </ul>
        </div>
        <div className="cart">
          <label className="cart-number">
            0
          </label>
          <img src="/cart.png" className="cart-icon"/>
        </div>
      </nav>
  )
}

export default Header;

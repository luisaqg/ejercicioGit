import React, { useContext } from 'react';
import CartContext from '../../context/Cart';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { Container, HeaderCointaner, Cart } from './styles';

function Header() {
    const { state } = useContext(CartContext);
    const totalQuantity = state.cart.reduce((acc, travel) =>
        acc + travel.quantity, 0,
    )
    return (
        <Container>
            <HeaderCointaner>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <Link to="/cart">
                    <Cart>
                        <div>
                            <span>{totalQuantity}</span>
                        </div>
                        <FaShoppingCart size={36} color="#fff" />
                    </Cart>
                </Link>
            </HeaderCointaner>
        </Container>
    )
}

export default Header;
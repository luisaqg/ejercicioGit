import React, { useContext } from 'react';
import CartContext from '../../context/Cart';
import { MdDelete } from 'react-icons/md'
import { Container, ContainerList, TravelItems, Total, Info, Quantity, Subtotal, TextEmpty, TotalContainer } from './styles'

function Cart() {
    const { state, setState } = useContext(CartContext);
    const getTotal = state.cart.reduce((acc, { price, quantity}) =>
        acc + (quantity*price), 0,
    )

    function deleteItem(elementId){
        const copyCart = [...state.cart];
        setState({cart: copyCart.filter(({id}) => id !== elementId )})
    }

    function handleQuantity({target:{value, id}}) {
        const copyCart = [...state.cart];
        copyCart.map(el => {
            if(el.id === id) {
                el.quantity = parseInt(value);
            }
            return el;
        });
        setState({cart: copyCart})
    }

    return (
        <Container>
        {state.cart.length > 0 ? (
            <ContainerList>
                {state.cart.map((el) => (
                    <TravelItems key={el.id}>
                        <img src={el.photo} alt={el.title} />
                        <Info>
                            <p>{el.title}</p>
                            <strong>$ {el.price}</strong>
                        </Info>
                        <Quantity type='number' min={1} onChange={handleQuantity} id={el.id} value={el.quantity} />
                        <Subtotal>
                            <p>$ {el.quantity * el.price}</p>
                            <button type="button" onClick={() => deleteItem(el.id)}>
                                <MdDelete size={24} color="#0676d9" />
                            </button>
                        </Subtotal>
                    </TravelItems>
                ))}
                <Total>
                    <TotalContainer>
                        <p>Total</p>
                        <p>$ {getTotal}</p>
                    </TotalContainer>
                </Total>
            </ContainerList>
        ): (
            <TextEmpty>
                <p>Sin viajes :(</p>
            </TextEmpty>
        )}
        </Container>
    )
}

export default Cart;
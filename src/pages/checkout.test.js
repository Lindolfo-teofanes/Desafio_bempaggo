import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Checkout from './checkout.jsx'

describe('Checkout redering test', () => {
    test('should render checkout screen', () => {
        const { getByTestId } = render(<Checkout/>)


        const information = getByTestId('information')
        const cardData = getByTestId('card-data')
        const name = getByTestId('name')
        const cardNumber = getByTestId('card-number')
        const ccv = getByTestId('ccv')
        const finish = getByTestId('finish')


        expect(information).toBeInTheDocument()
        expect(cardData).toBeInTheDocument()
        expect(name).toBeInTheDocument()
        expect(cardNumber).toBeInTheDocument()
        expect(ccv).toBeInTheDocument()
        expect(finish).toBeInTheDocument()
    })
})

describe('Checkout input test', () => {
    test('Should change the name input value', () => {
        const { getByPlaceholderText } = render(<Checkout/>)

        const input = getByPlaceholderText("Nome Completo")

        fireEvent.change(input, {
            target: { value: "Lindolfo Teofanes" }
        });
        
        expect(screen.getByDisplayValue("Lindolfo Teofanes")).toBeInTheDocument();
    })

    test('Should change the card number input value', () => {
        const { getByPlaceholderText } = render(<Checkout/>)

        const input = getByPlaceholderText("N° do Cartão")

        fireEvent.change(input, {
            target: { value: "40028922" }
        });
        
        expect(screen.getByDisplayValue("40028922")).toBeInTheDocument();
    })

    test('Should change the CVV input value', () => {
        const { getByPlaceholderText } = render(<Checkout/>)

        const input = getByPlaceholderText("CVV")

        fireEvent.change(input, {
            target: { value: "421" }
        });
        
        expect(screen.getByDisplayValue("421")).toBeInTheDocument();
    })
})
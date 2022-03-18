import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Itens from './itens.jsx'

describe('rendering test', () => {
    test('should rendering all itens avaliable', () => {
        render(<Itens/>)

        const react = screen.getByText(/react/i)
        const vue = screen.getByText(/vue/i)
        const angular = screen.getByText(/angular/i)

        expect(react).toBeInTheDocument()
        expect(vue).toBeInTheDocument()
        expect(angular).toBeInTheDocument()
    })
})

describe('Plus buttons test', () => {
    test('should increase react\'s sticker number', () => {
        const { getByTestId } = render(<Itens/>)

        const plusButton = getByTestId('react-plus-button')
        const count = getByTestId('react-counter')

        for(let i = 0; i < 10; i++)
            fireEvent.click(plusButton)

        expect(Number(count.innerHTML)).toBe(10)
    })

    test('should increase angular\'s sticker number', () => {
        const { getByTestId } = render(<Itens/>)

        const plusButton = getByTestId('angular-plus-button')
        const count = getByTestId('angular-counter')

        for(let i = 0; i < 115; i++)
            fireEvent.click(plusButton)

        expect(Number(count.innerHTML)).toBe(115)
    })

    test('should increase vue\'s sticker number', () => {
        const { getByTestId } = render(<Itens/>)

        const plusButton = getByTestId('vue-plus-button')
        const count = getByTestId('vue-counter')

        for(let i = 0; i < 17; i++)
            fireEvent.click(plusButton)

        expect(Number(count.innerHTML)).toBe(17)
    })
})

describe('minus buttons test', () => {
    test('shouldn\'t decrease react\'s sticker number', () => {
        const { getByTestId } = render(<Itens/>)

        const minusButton = getByTestId('react-minus-button')
        const count = getByTestId('react-counter')

        for(let i = 0; i < 10; i++)
            fireEvent.click(minusButton)

        expect(Number(count.innerHTML)).toBe(0)
    })

    test('should decrease angular\'s sticker number from 115 to 100', () => {
        const { getByTestId } = render(<Itens/>)

        const plusButton = getByTestId('angular-plus-button')
        const minusButton = getByTestId('angular-minus-button')
        const count = getByTestId('angular-counter')

        let i = 0
        for(i = 0; i < 115; i++)
            fireEvent.click(plusButton)

        for(i = 0; i < 15; i++)
            fireEvent.click(minusButton)

        expect(Number(count.innerHTML)).toBe(100)
    })

    test('should decrease vue\'s sticker number from 17 to 13', () => {
        const { getByTestId } = render(<Itens/>)

        const plusButton = getByTestId('vue-plus-button')
        const minusButton = getByTestId('vue-minus-button')
        const count = getByTestId('vue-counter')

        let i = 0
        for(i = 0; i < 17; i++)
            fireEvent.click(plusButton)

        for(i = 0; i < 4; i++)
            fireEvent.click(minusButton)

        expect(Number(count.innerHTML)).toBe(13)
    })
})
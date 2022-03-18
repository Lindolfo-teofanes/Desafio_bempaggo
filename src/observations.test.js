import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.js'

describe('Observations test', () => {
    test('input text', () => {
        const { getByPlaceholderText } = render(<App/>)

        const input = getByPlaceholderText("Alguma dúvida? Recado?")

        fireEvent.change(input, {
            target: { value: "Não tenho nenhuma duvida" }
        });
        
        expect(screen.getByDisplayValue("Não tenho nenhuma duvida")).toBeInTheDocument();
    })
})
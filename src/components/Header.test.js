import { getByRole, render, screen } from "@testing-library/react"
import Header from "./Header"

test('The home button is clickable', () => {
    render(<Header/>);

    expect(screen.findByRole('link', { name: /home/i })).toBeEnabled;

    
} )
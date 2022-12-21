import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe('Pruebas en <GifItem/>', () => { 

    const title = 'Saitama'
    const url = 'https://dragonball.com/goku.jpg'
    
    test ('debe de hacer match contra snapshot', () => {

        const {container} = render(<GiftItem title= {title} url= {url} />)
        expect (container).toMatchSnapshot();

    });

    test ('debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GiftItem title= {title} url= {url} />)
        expect ( screen.getByRole('img').src ).toBe(url)
        expect ( screen.getByRole('img').alt ).toBe(title)

    });

    test ('debe mostrar el titulo en el componenete', () => {

        render(<GiftItem title= {title} url= {url} />)
        expect (screen.getByText(title)).toBeTruthy

    });

 });
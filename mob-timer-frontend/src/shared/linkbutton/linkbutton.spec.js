import Button from './linkbutton.svelte';
import { render } from '@testing-library/svelte'

describe('button',  () => {
    let component;

    beforeEach(() => {
        component = render(Button, {text: 'Test', href: 'test1234'});
    })

    it('should render', () => {
        expect(component).toBeTruthy();
    })

    it('should render an element with the given text', () => {
        const {getByText} = component;
        const linkElement = getByText('Test');
        expect(linkElement).toBeTruthy();
    })

    it('should link to the given href on click', async () => {
        const {getByText} = component;
        const linkElement = getByText('Test');
        expect(linkElement).toHaveAttribute('href', "test1234");
    })
})
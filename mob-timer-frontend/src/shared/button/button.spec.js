import { fireEvent, render } from '@testing-library/svelte'

import Button from './button.svelte';

describe('button',  () => {
    let component;

    beforeEach(() => {
        component = render(Button, {text: 'Test'});
    })

    it('should render', () => {
        expect(component).toBeTruthy();
    })

    it('should render an element with the given text', () => {
        const {getByText} = component; 
        const linkElement = getByText('Test');
        expect(linkElement).toBeTruthy();
    })

    it('should pass the on click event', async () => {
        const onClick = jest.fn();
        component.component.$on('click', onClick);

        const {getByText} = component; 
        const buttonElement = getByText('Test');
        await fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalled();

    })

})
import { describe, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/vitest';

import { render  } from './base';

describe('When we call render', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    test('should render the provided template in the specified selector and position', () => {
        const template = '<div class="test">Hello</div>';
        const element = render('body', 'afterbegin', template); 
        const renderedElement = screen.getByText('Hello');

        expect(renderedElement).toBeInTheDocument();
        expect(renderedElement).toHaveClass('test');
        expect(element).toBe(renderedElement);
    });

    test('should throw an error if the selector does not exist', () => {
        const template = '<div>Test</div>';
        expect(() => render('#nonexistent', 'afterbegin', template)).toThrow(
            'Element with selector #nonexistent not found',
        );
    });
});

import { render, screen, RenderResult, fireEvent } from '@testing-library/react';
import { Input } from './index';

describe('Input', () => {
  let renderResult: RenderResult;

  // Actions taken before the test
  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />);
  });

  // Actions taken after the test
  afterEach(() => {
    renderResult.unmount();
  });

  // test if input element is empty when initially drawn
  it('should empty in input on initial render', () => {
    // get input element corresponding to a component whose label is Username
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;
    expect(inputNode).toHaveValue('');
  });

  // test if text is displayed when input is typed in
  it('should show input text', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    // Use fireEvent to fire onChange event of input element
    fireEvent.change(inputNode, { target: { value: inputText } });
    expect(inputNode).toHaveValue(inputText);
  });

  // test if text is cleared when button is clicked
  it('should reset when user clicked button', () => {
    // First, input the text
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    // get button DOM
    const buttonNode = screen.getByRole('button', { name: 'Reset', }) as HTMLButtonElement;
    // click the button using fireEvent
    fireEvent.click(buttonNode);

    // check if the input element is empty
    expect(inputNode).toHaveValue('');
  });

});

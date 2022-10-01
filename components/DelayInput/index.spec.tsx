import { render, screen, RenderResult, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { DelayInput } from './index';

describe('DelayInput', () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    // replace timer with the one from jest
    jest.useFakeTimers();

    // create mock function
    handleChange = jest.fn();

    // pass mock function to DelayButton to draw
    renderResult = render(<DelayInput onChange={handleChange} />);
  });

  afterEach(() => {
    renderResult.unmount();
    // restore original timer
    jest.useFakeTimers();
  })

  it('should display empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;
    expect(spanNode).toHaveTextContent('User input:');
  });

  it('should display "Now typing..." immediately after onChange event occurs', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    expect(spanNode).toHaveTextContent("Now typing...");
  });

  it('should display input text 1 second after onChange event occurs', async () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    // use act function to make sure state changes happened in callback func in timer will be reflected
    await act(() => {
      jest.runAllTimers();
    });

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

    expect(spanNode).toHaveTextContent(`User input: ${inputText}`);
  });

  it('should call onChange 1 second after onChange event occurs', async () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    // use act function to make sure state changes happened in callback func in timer will be reflected
    await act(() => {
      jest.runAllTimers();
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
import React, { useState, useCallback, useRef } from "react";

type DelayButtonProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const DelayInput = (props: DelayButtonProps) => {
  const { onChange } = props;

  // to store information if use is typing
  const [isTyping, setIsTyping] = useState(false);
  // to store text displayed in input
  const [inputValue, setInputValue] = useState('');
  // to store text displayed in span
  const [viewValue, setViewValue] = useState('');
  // Ref to store timer
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // set typing flag
    setIsTyping(true);
    // update text to be displayed in input
    setInputValue(e.target.value);

    // if there is existing timer, first reset it
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    // set timer for 1 second
    timerRef.current = setTimeout(() => {
      timerRef.current = null;

      // reset typing flag
      setIsTyping(false);
      // update text to be displayed in span
      setViewValue(e.target.value);
      // call onChange callback
      onChange(e);
    }, 1000);
  }, [onChange]);

  // text to be displayed in span
  const text = isTyping ? 'Now typing...' : `User input: ${viewValue}`;

  return (
    <div>
      {/* data-testid is the id only used during test */}
      <input data-testid='input-text' value={inputValue} onChange={handleChange} />
      <span data-testid='display-text'>{text}</span>
    </div>
  );
};
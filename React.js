// useRef():
// Use Case: useRef() is typically used when you need to access the DOM element directly, for instance, to focus an input,
// measure its size, or keep a mutable value that doesn’t cause a re-render when updated.
// Example: If you need to focus an input field when the component mounts or under a specific condition.

import React, { useRef } from "react";

function MyForm() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

// State (useState()):
// Use Case: You use state when you need to track and respond to user input, and when changes in the input should trigger a
// re-render of the component or cause side effects.
// Example: If you want to display the current value of an input or perform validation when the user types.

import React, { useState } from "react";

function MyForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Current value: {inputValue}</p>
    </div>
  );
}

// Contolled COmponents
// Definition: In a controlled component, the form input's value is controlled by React state. The value of the input field is set
// by the state, and the input's value updates whenever the state changes.
// Usage: Typically used when you want to keep the input value in sync with the component's state and have the ability to validate, modify,
// or react to the input value in real-time.

function ControlledForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
// Uncontrolled Components:
// Definition: In an uncontrolled component, the form input's value is not controlled by React state. Instead, you use useRef to
// access the DOM element directly when needed.
// Usage: This approach is useful when you don't need to re-render the component on every change or when you want to handle
// form submissions without binding the input value to the component's state.

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value:", inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

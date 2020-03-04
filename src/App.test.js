import React from "react";
import { render, fireEvent } from '@testing-library/react'
import App from "./App";

describe("Form tests", () => {

  it("button should be click", () => {
  const { getByLabelText, getByTestId,container, debug } = render(<App />);
  const firstNameInput = container.querySelector('input[name="firstName"]');
  const lastNameInput = container.querySelector('input[name="lastName"]');
  const emailInput = container.querySelector('input[name="email"]');
  const passwordInput = container.querySelector('input[name="password"]');
  const confirmPasswordInput = container.querySelector('input[name="confirmPassword"]');

  firstNameInput.value = "Risabh";
  lastNameInput.value = "Test";
  emailInput.value = "test@test.com";
  passwordInput.value = "12345678";
  confirmPasswordInput.value = "12345678";

  fireEvent.change(firstNameInput);
  fireEvent.change(lastNameInput);
  fireEvent.change(emailInput);
  fireEvent.change(passwordInput);
  fireEvent.change(confirmPasswordInput);

  expect(firstNameInput.value).toEqual("Risabh");
  expect(lastNameInput.value).toEqual("Test");
  expect(emailInput.value).toEqual("test@test.com");
  expect(passwordInput.value).toEqual("12345678");
  expect(confirmPasswordInput.value).toEqual("12345678");

  
  });
});

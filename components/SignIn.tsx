import React from "react";

function SignIn() {
  return (
    <div>
      <form>
        {/*  
        <input
          id="email"
          {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
        />
        */}
      </form>
    </div>
  );
}

export default SignIn;

/*
test("When we click on submit button", () => {
  const mockSubmission = jest.fn();
  render(<Account submission={mockSubmission} />);
  const emailInput = screen.getByLabelText(/Email/i);
  userEvent.type(emailInput, "test@example.org");
  const passwordInput = screen.getByLabelText(/Mot de passe/i);
  userEvent.type(passwordInput, "password");
  const submitButton = screen.getByRole("button", {
    name: /Se connecter/i,
  });
  fireEvent.click(submitButton);
  expect(mockSubmission.mock.calls.length).toBe(1);
  expect(mockSubmission.mock.calls[0][0]).toEqual({
    email: "test@example.org",
    password: "password",
  });
});
*/

import signupValidation from '../../shared/validations/signup';



let validData = {
  username: "mohammad.zeeshan",
  name: "Mohammad Zeeshan",
  email: "myEmail@mail.com"
}

let invalidData = {
  username: "",
  name: "",
  email: ""
}

let invalidEmailData = {
  username: "mohammad.zeeshan",
  name: "Mohammad Zeeshan",
  email: "myEmail@mail"
}



describe('Check Signup Required Field validation', () => {
  test('Check for valid input', () => {
      expect(signupValidation(validData)).toEqual({
        errors: {},
        isValid: true
      })
    }),
    test('Check for invalid input', () => {
      expect(signupValidation(invalidData)).toEqual({
        errors: {
          username: 'This field is required',
          name: 'This field is required',
          email: 'Email is invalid'
        },
        isValid: false
      })
    }),

    test('Check for invalid email input', () => {
      expect(signupValidation(invalidEmailData)).toEqual({
        errors: {
        email: 'Email is invalid'
        },
        isValid: false
      })
    })
});

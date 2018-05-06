import loginValidation from '../../shared/validations/login';

let validData = {
  identifier: "mohammad.zeeshan",
  password: "myPassword",
}

let invalidData = {
  identifier: "",
  password: "",
}


describe('Check Login Required Field validation', () => {
  test('Check for valid input', () => {
      expect(loginValidation(validData)).toEqual({
        errors: {},
        isValid: true
      })
    }),
    test('Check for invalid input', () => {
      expect(loginValidation(invalidData)).toEqual({
        errors: {
          identifier: 'This field is required',
          password: 'This field is required'
        },
        isValid: false
      })
    })
});

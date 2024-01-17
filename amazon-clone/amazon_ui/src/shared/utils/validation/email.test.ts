import { validateEmail } from "./email"

describe('Email validation', () => {
  let email = ''
  test('an empty input field should not be valid.', () => {
    expect(validateEmail(email)).toEqual(false)
  })

  test("it should have an @ symbol", () => {
    email = 'john@gmail.com'
    expect(email.includes('@')).toEqual(true)
  })

  test("it should have an . symbol", () => {
    expect(email.includes(".")).toEqual(true);
  });

  test("a valid email should pass validation", () => {
    expect(validateEmail(email)).toEqual(true);
  });

  test("an invalid email should not pass validation", () => {
    email = "jon@gmail";
    expect(validateEmail(email)).toEqual(false);
  });
})
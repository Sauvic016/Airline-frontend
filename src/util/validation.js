export default function validateEmail(email) {
  // Regular expression to match email format
  const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Test the email against the regular expression
  return regex.test(email);
}

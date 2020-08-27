// local modules - functions
import checkIsString from "./checkIsString";

const checkIsEmailValid = (email = "") => {
  if (!checkIsString(email)) {
    throw new Error("The parameter is not string", email);
  }

  return !!email.match(
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gm
  );
};

export default checkIsEmailValid;

/* 
  Reference:
  1. Regex Rule: https://ihateregex.io/expr/email-2
*/

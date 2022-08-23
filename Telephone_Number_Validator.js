function telephoneCheck(str) {
  if (str[0] === "(" && str[4] !== ")") {
    return false;
  } else if (str.split(/[^0-9]/).join("").length > 11) {
    return false;
  } else if (str.split(/[^0-9]/).join("").length >= 11 && str[0] !== '1') {
    return false;
  }  else if (str[str.length - 1] === ")") {
    return false;
  } else if (str.match(/(1[ -])?\d{3}[ -]?\d{3}[ -]?\d{4}/g)){
    return true;
  } else if (str.match(/(1[ -])?\(\d{3}\)[ -]?\d{3}[ -]?\d{4}/g)){
    return true;
  } else {
    return false;
  }
}

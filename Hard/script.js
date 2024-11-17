const PII = (name, ssn)  => {
  let privateInfo = {
    name: name,
    ssn: ssn
  };

  return {
    getName: () => privateInfo.name
  }
};

let person = PII('Tyler Krug', '123-45-6789');

console.log(person.getName());
console.log(person.privateInfo);

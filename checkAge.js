/* checks age of a person */

function checkAge(name, age) {
  if (age >= 21) {
    return ("Welcome, " + name + "!");
  } else if (age < 21) {
    return ("Go home, " + name + "!");
  }
}

checkAge('Adrian', 22);

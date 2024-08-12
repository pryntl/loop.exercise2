//function structure.
function stars(number) {
    //until 'i' is less than the number, it keeps getting more.
  for (let i = 1; i <= number; i++) {
    //the star will be printed, 'i' times.
    console.log("*".repeat(i));
  }
  //then when 'i' is one less than the number, it keeps getting less, until it reaches 1.
  for (let i = number - 1; i >= 1; i--) {
    //the star will be printed, 'i' times.
    console.log("*".repeat(i));
  }
}
//testing.
stars(3);

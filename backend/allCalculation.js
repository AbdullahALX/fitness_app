export const calcBmi = (weight, feet, inches) => {
  let res = 0;
  //weight in pounds
  // height in inches, as 5 feet =12*5
  let height = feet * 12 + inches;

  res = (weight / (height * height)) * 703;
  res = (Math.round(res * 100) / 100).toFixed(2);
  return res;
};

export const calcProtein = (weight, level) => {
  let neededProtein = 0;
  //neededProtein on grams
  //weight in pounds
  // height in inches, as 5 feet =12*5
  // we have many level depends on that we caclculate protein
  /*

  1- Light exercise 1-3 times a week 
  2- Moderate exercise 4-5 times a week 
  3- Active  daily exercise
  4- Very active intense exercise 6-7 times a week
  5- Extra active intense daily exercise 
  
  */

  switch (level) {
    case 1:
      neededProtein = weight * 0.453592 * 1.0;
      break;
    case 2:
      neededProtein = weight * 0.453592 * 1.2;
      break;

    case 3:
      neededProtein = weight * 0.453592 * 1.4;
      break;

    case 4:
      neededProtein = weight * 0.453592 * 1.6;
      break;

    case 5:
      neededProtein = weight * 0.453592 * 1.8;
      break;

    default:
      neededProtein = -999;
  }

  return neededProtein;
};

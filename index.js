// Write your code in this file!
function scuberGreetingForFeet (feet) {
  if (feet <= 199) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity (city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you kindly. It has been a pleasure.';
    case 'not as generous':
      return 'Well, that was unexpected!.';
    default:
      return 'Adios.';
  }
}

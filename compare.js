// Comparing two string without using .length
function compare(str1, str2) {
  let count1 = 0;
  let count2 = 0;

  while (str1[count1] !== undefined) {
    count1++;
  }

  while (str2[count2] !== undefined) {
    count2++;
  }

  if (count1 == count2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

compare("12345", "12345");

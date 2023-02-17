var qoute;
qoute = "Abraham Lincolin once said,\" I m Walking Slowly but not Walking Backward\"";
// console.log(qoute.toLowerCase());
// console.log(qoute.toUpperCase());
// console.log(qoute.);

function titleCase(msg){
  let step1 = qoute.split(' ');
  let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
  let step3 = step2.join(' ');
  console.log(step3); 

}

titleCase(qoute)

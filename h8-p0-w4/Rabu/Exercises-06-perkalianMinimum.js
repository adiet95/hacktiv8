function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let faktor1 = 0;
  let faktor2 = 0;

  if(angka%2==0){
    for(i=1; i<angka; i*2){
        faktor1 += angka[i]
    }
  }
  if(angka%3==0){
      for(j=1; j<angka; j*3){
          faktor1 += angka[j]
      }

  }
  return faktor1
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
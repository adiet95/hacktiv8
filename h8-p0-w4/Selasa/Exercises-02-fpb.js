function fpb(angka1, angka2) {
    let tampung1 = []
    let tampung2 = []
    let prima = [1,2,3,5,7,11,13,17,19,23,29,31]
    let num = 1
    for(i=0; i<angka1;i++){
        if(angka1%i==0){
            tampung1.push(i)
        } if(tampung1==prima){
            tampung1=1
        }
    }
    for(j=0; j<angka2;j++){
        if(angka2%j==0){
            tampung2.push(j)
        } if(tampung2==prima){
            tampung2=1
        }
    }
    for(k=tampung1.length-1; k>0; k--){
        for(l=tampung2.length-1; l>0; l--){
            if(tampung1[k]==tampung2[l]){
                return tampung2[l]
            }
        }
    }
    
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
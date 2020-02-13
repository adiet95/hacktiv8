/*
1. Urutkan arr
2. Cek index variabel arr
3. pilih index yang berada di tengah atau index atas + index selanjutnya / 2
4. tampilkan hasil median
*/
function cariMedian(arr) {
    // you can only write your code here!
    median = 0;
    if(arr.length%2==0){
        for(i=0; i<arr.length/2; i++){
            median = (arr[i] + arr[i+1])/2 
        }
    } else {
        for(j=0; j<Math.round(arr.length/2); j++){
            median = arr[j]
        }
    }
    return median
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
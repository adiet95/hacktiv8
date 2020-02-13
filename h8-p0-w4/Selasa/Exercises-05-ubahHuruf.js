/*Algoritma
1. Urutkan string kata
2. Buat String Kamus dan urutkan
3. Cocokan String Kata dan Kamus kemudian ubah menjadi Huruf berikutnya
4. Tampung didalam Temp
5. Tampilkan Temp hasil ubah kata
*/
function ubahHuruf(kata) {
    // you can only write your code here!
    let ubah = ''
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    for(i=0; i<kata.length; i++){
    for(j=0; j<kamus.length; j++){
        if(kata[i]==kamus[j]){
            ubah+=kamus[j+1]
        }
    }
  }
  return ubah
}
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
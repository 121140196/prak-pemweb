/* 
Nama: Adriel Gideon Benedict Sirait
NIM: 121140196
Kelas Praktikum: RC
*/

function hitungganjilgenap(){
  const Inputbilangan = parseInt(document.getElementById('inputBilangan').value);
  let ganjil = 0;
  let genap = 0;
  
if( Inputbilangan > 0 && !isNaN(Inputbilangan)){
  for(let i = 1; i <= Inputbilangan; i++){
    if(i%2 == 0){
        genap++;
    }else{
        ganjil++;
    }
}

let hasilPerhitungan =  document.getElementById('hasilPerhitungan');
    hasilPerhitungan.innerHTML = 'Hasil:' + '<br>' + 'Jumlah bilangan ganjil: '+ ganjil + '<br>' + 
                                'Jumlah bilangan genap: ' + genap;
  }else{
    alert("Input tidak valid. Masukkan bilangan bulat positif/ bukan 0!");
}
}
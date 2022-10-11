//Untuk menggambar garis miring 
function garisMiring(n) {
    let hasil ;
    for (let i = 0; i <n; i++) {
        for (let j = 0; j < n ; j++){
            if(i===j){
                hasil +="*";
            }else{
                hasil +=" ";
            }
        }   
    hasil +="\n";
    }
    console.log(hasil);
}
garisMiring(5);

//menggambar bentuk X
function X(n) {
    let hasil ="";
    for(let i = 0 ; i <= n ; i++){
        for(let j = 0 ; j <= n ; j++){
            if(i===j){
                hasil +="*";
            }else if(i+j==n){
                hasil +="*";
            }else{
                hasil +=" ";
            }
        }
        hasil +="\n";
    }
    console.log(hasil);
}

X(10);


//untuk membuat bentuk kotak dan x
function kotakX(n) {
    let hasil ="";
    for(let i = 0 ; i <= n ; i++){
        for(let j = 0 ; j <= n ; j++){
            if(i===j||i+j==n){
                hasil +="*";
            }else if(i==0 || j==0){
                 hasil +="*";
            }else if(i==n || j==n ){
                hasil +="*";
            }else {
                hasil +=" ";
            }
        }
        hasil +="\n";
    }
    console.log(hasil);
}

kotakX(10);


//untuk membuat segitiga siku siku
function SegitigaSiku(n) {
    let hasil = "";
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++){
            if(i+j<n){
                hasil += " ";
            }else{
                hasil += "*";
            }
        }
        hasil += "\n";
    }
    console.log(hasil);
}

SegitigaSiku(9);


//buat bentuk infinity
function infinity(n) {
    let hasil = "";
    for(let i = 0 ; i <= n ; i++){
        for(let j = 0 ; j <= n ; j++){
            if (i>j && i+j < n) {
                hasil +="*";
            }
            else if(j-i >=1 && i+j>n){
                hasil +="*";
            }
            else if(i===j){
                hasil +="*";
            }else if(i+j==n){
                hasil +="*";
            }else{
                hasil +=" ";
            }
        }
        hasil +="\n";
    }
    console.log(hasil);
}

infinity(8);
function total(a,b){
    let result= a + b;
    return result;
}
let a=+prompt('Nhập a');
let b=+prompt('NHập b');
if(a>b){
    alert('a>b');
}else {
    document.write('Tổng 2 số là ' + total(a,b))
}
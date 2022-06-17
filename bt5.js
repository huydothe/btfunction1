let arr1=['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let arr2=['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

function checkstar(){
    let result="";
    let index=-1;
    for(let i=0; i<arr1.length; i++){
        if(star==arr1[i]){
            index=i;
            return result;
            break;
        }
    }
    if(index===-1){
        alert('Không có ngôi sao nào');
        return result;
    }else {
        document.write(arr1[index] + ' ứng với chòm sao ' + arr2[index]);
        return result;
    }
}
let star=prompt('Nhập tên ngôi sao');
document.write(checkstar());
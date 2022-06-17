function foottometer(meter){
    changemeter = foot * 0.305;
    return changemeter;
}
function metertofoot(foot){
    changefoot = meter * 3.279;
    return changefoot;
}
let foot=prompt('Chuyển từ foot sang meter');
document.write(foot + 'foot' + '=' + metertofoot(foot) + 'meter');
document.write('<br>');
let meter=prompt('Chuyển từ meter sang foot');
document.write(meter + 'meter' + '=' + foottometer(meter) + 'foot');
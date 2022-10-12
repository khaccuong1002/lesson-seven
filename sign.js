// let value = prompt('Type a number', 0);
// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

let value = +prompt('Type a number', 0);
switch (value) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case -1:
        alert(-1);
        break;
    default:
        alert('The end')
}

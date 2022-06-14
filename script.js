//window.onload = function initial() {
//    const color = document.querySelector('.color');
//    color.classList.add('selected');
//};

const backInpt = document.getElementsByClassName('color');

for (let index = 0; index <= backInpt.length; index += 1) {
    backInpt[index].style.backgroundColor = 'black';
    backInpt[index].style.borderColor = '#ddbea8';
    backInpt[index].addEventListener('click', changeBack = (event) => {

        //let changeClass = document.querySelector('.selected');
        //changeClass.classList.remove('selected');
        //event.target.classList.add('selected');

        if (backInpt[index].style.backgroundColor === 'black') {
            event.target.style.backgroundColor = '#ddbea8';
        }
        if (backInpt[index].style.backgroundColor === '#ddbea8') {
            event.target.style.backgroundColor = 'black';
        }
    })
}

// FORMS COLOR INPUT BACKGROUND //
function inputBackground() {
    const backInpt = document.getElementsByClassName('color');

    for (let i = 0; i <= backInpt.length; i += 1) {
        backInpt[i].style.backgroundColor = '#f3dea4';
        backInpt[i].style.border = '2px solid #1b1727';
    }
}

inputBackground();

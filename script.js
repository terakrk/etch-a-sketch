const container = document.querySelector('.canvas');

const black = document.querySelector('#black');
black.addEventListener('click', addBlack);


   function addBlack(num1, num2) {
      num1 = prompt('First number?', '16');
        num1 = parseInt(num1);
      num2 = prompt('Second number?', '16');
        num2 = parseInt(num2);
    const sum = num1 * num2;
    for (let i = 0; i <= sum; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
        item.addEventListener(
            "mouseenter", 
            (e) => {
                e.target.classList.add('black');
            }
        )
        
    };
};
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', clearGrid);

    function clearGrid(){
        const color = document.querySelectorAll('.item');
        const colorArray = [...color];
        colorArray.forEach(color => {
            color.remove();
        });
    }

    const rainbow = document.querySelector('#rainbow');
    rainbow.addEventListener('click', randomColors);

    function randomColors(num1, num2) {
        num1 = prompt('First number?', '16');
        num1 = parseInt(num1);
      num2 = prompt('Second number?', '16');
        num2 = parseInt(num2);
    const sum = num1 * num2;
    for (let i = 0; i <= sum; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
        item.addEventListener(
            "mouseenter", 
            (e) => {
                e.target.style.backgroundColor = randomRgbColor();
            }
        )
            }
        
        
    };
function randomRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g =  Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256)
    return 'rgb(' + r + ',' + g + ',' + b + ')';
    };




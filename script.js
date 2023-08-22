const container = document.querySelector('.canvas');

const black = document.querySelector('#black');
black.addEventListener('click', addBlack);

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', randomColors);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid);


   function createGrid(num1, num2) {
      num1 = prompt('First number?', '16');
        num1 = parseInt(num1);
      num2 = prompt('Second number?', '16');
        num2 = parseInt(num2);
        if((num1 < 16 || num1 > 100) || (num2 < 16 || num2 > 100)) {
            alert('The number must be between 16 and 100'); createGrid();
        } else {
            const sum = num1 * num2;
    for (let i = 0; i <= sum; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
    };
        };
    };

    function addBlack() {
        clearGrid();
        createGrid();
        const black = document.querySelectorAll('.item');
        black.forEach((item) => {
            item.addEventListener(
                'mouseenter', function(e) {
                    e.target.classList.add('black');
                })
        });
    };


    function clearGrid(){
        const color = document.querySelectorAll('.item');
        const colorArray = [...color];
        colorArray.forEach(color => {
            color.remove();
        });
    };


    function randomColors() {
        clearGrid();
        createGrid();
       const colors = document.querySelectorAll('.item');
        colors.forEach((item) => {
            item.addEventListener("mouseenter", function (e) {
                e.target.style.backgroundColor = randomRgbColor();
            }
        
        )
    }); 
};

function randomRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g =  Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256)
    return 'rgb(' + r + ',' + g + ',' + b + ')';
    };


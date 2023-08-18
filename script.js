const container = document.querySelector('.container');


   function createGrid(num1, num2) {
    const sum = num1 * num2;
    for (let i = 0; i <= sum; i++) {
    const item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
        item.addEventListener(
            "mouseenter", 
            (e) => {
                e.target.classList.add('color');
            }
        )
        
    };
};

createGrid(16, 16);




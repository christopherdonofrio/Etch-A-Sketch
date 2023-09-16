document.addEventListener('DOMContentLoaded', function() {

    
    const resetButton = document.getElementById('reset');
    const container = document.createElement('div');
    const colorInput = document.getElementById('color')
    container.classList.add('container');

    function removeAllGridElements() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    let color = "black"
    createGrid(16, color)
    

    
    function createGrid(num, color) {

        if (reset) {
            removeAllGridElements();
        }

        for (let i = 0; i < num; i++) {
            const tempVerticalDiv = document.createElement('div');
            tempVerticalDiv.classList.add('verticalDiv');
            tempVerticalDiv.style.height = 500/num + 'px';

            container.appendChild(tempVerticalDiv)
            for (let j = 0; j < num; j++) {
                const tempHorizontalDiv = document.createElement('div');
                tempHorizontalDiv.classList.add('horizontalDiv');
                tempVerticalDiv.appendChild(tempHorizontalDiv);
                tempHorizontalDiv.style.height = 450/num + 'px';
                tempHorizontalDiv.style.width = 450/num + 'px';

                tempHorizontalDiv.addEventListener('mouseover', () => {
                    colorInput.addEventListener('input', () => {
                        
                        color = colorInput.value;
                    });
                    tempHorizontalDiv.style.backgroundColor = color;
                });
            }

        }
    }
    

    


    resetButton.addEventListener('click', () => {

        const userInput = prompt("How Many Squares Per Side (Max 100)?:");

        if (userInput === null) {
            // User pressed "Cancel," do nothing
            createGrid(16)
        }

        const parsedInput = parseInt(userInput);        
        if (isNaN(userInput) || userInput > 100 || userInput <= 0 ) {
            alert("Enter a postive integer within the range 1-100")
            createGrid(16, color)
        }
        else {
            createGrid(userInput,colorInput.value)

        }
      });

    const place = document.getElementById('placeHolder')

    place.appendChild(container)

    document.body.appendChild(etch)

    








});
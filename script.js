document.addEventListener('DOMContentLoaded', function() {

    
    const resetButton = document.getElementById('reset');
    const container = document.createElement('div');
    container.classList.add('container');

    function removeAllGridElements() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }


    
    function createGrid(num) {

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
                tempHorizontalDiv.style.height = 500/num + 'px';
                tempHorizontalDiv.style.width = 500/num + 'px';

                tempHorizontalDiv.addEventListener('mouseover', () => {
                    // Change the button's background color
                    tempHorizontalDiv.style.backgroundColor = 'black';
                });
            }

        }
    }

    createGrid(16)



    resetButton.addEventListener('click', () => {
        const userInput = parseInt(prompt("How Many Squares Per Side (Max 100)?:"));
        if (isNaN(userInput) || userInput > 100 || userInput <= 0 ) {
            alert("Enter a postive integer within the range 1-100")
            createGrid(16)
        }
        createGrid(userInput)
      });


    document.body.appendChild(container);












});
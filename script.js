document.addEventListener('DOMContentLoaded', function() {

    const container = document.createElement('div')

    let num = 16

    for (let i = 0; i < num; i++) {
        const tempVerticalDiv = document.createElement('div');
        tempVerticalDiv.classList.add('verticalDiv')
        tempVerticalDiv.setAttribute

        container.appendChild(tempVerticalDiv)
        for (let j = 0; j < num; j++) {
            const tempHorizontalDiv = document.createElement('div');
            tempHorizontalDiv.classList.add('horizontalDiv')
            tempVerticalDiv.appendChild(tempHorizontalDiv)

        }

    }

    document.body.appendChild(container);












});
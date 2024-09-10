function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num-1').value) || 0;
    const num2 = parseFloat(document.getElementById('num-2').value) || 0;
    let result;

    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            result = 0;
    }

    const resultElement = document.getElementById('result');

    // Reset animation by removing and adding class
    resultElement.style.opacity = '0';
    resultElement.style.transform = 'scale(0.5)';

    // Wait a moment for animation reset, then show result
    setTimeout(() => {
        resultElement.innerText = result;
        resultElement.style.opacity = '1';
        resultElement.style.transform = 'scale(1)';
    }, 100);
}

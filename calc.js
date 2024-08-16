
const buttons = document.querySelectorAll('.button');
    let expression = '';
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerText;

            if (value === '=') {
                try {
                    expression = eval(expression);
                    document.getElementById('display').value = expression;
                } catch (error) {
                    document.getElementById('display').value = 'Error';
                    expression = '';
                }
            } else if (value === 'C') {
                expression = '';
                document.getElementById('display').value = '';
            } else {
                expression += value;
                document.getElementById('display').value = expression;
            }
        });
    });
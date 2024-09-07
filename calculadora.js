// Função para adicionar um valor ao visor
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Função para limpar o visor
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para calcular o resultado e exibir no visor
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Avalia a expressão e exibe o resultado
        display.value = eval(display.value);
    } catch {
        // Em caso de erro, exibe "Error"
        display.value = 'Error';
    }
}

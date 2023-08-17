const createErrorMessage = () => {
    const container = document.createElement('div');
    container.className = 'error';
    container.id = 'error';

    const message = document.createElement('h2');
    message.innerText =
        'The numbers are incorrect. Please enter numbers from 1 to 1010 separated by ","';

    container.append(message);
    return container;
};

export default createErrorMessage;

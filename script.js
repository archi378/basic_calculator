let decFunction = () => {
    let display = document.getElementById('output').value;
    let displayText = document.getElementById('output');
    if(display.includes('.') && (display.includes('+') || display.includes('-') || display.includes('*') || display.includes('/') )){
        display += '.';
        displayText.value = display;
    }
    if(!display.includes('.')){
        display += '.';
        displayText.value = display;
    }
};

let backFunction = () => {
    let displayText = document.getElementById('output');
    let display = document.getElementById('output').value;
    displayText.value = display.slice(0, display.length-1 )
    
}

let sqrtFunction = () => {
    let displayText = document.getElementById('output');
    let display = document.getElementById('output').value;

    displayText.value = Math.pow(eval(display), 1/2);
}

let equalToFunction = () => {
    let displayText = document.getElementById('output');
    let display = document.getElementById('output').value;
    if(display==='')
    return true;
    else
    displayText.value = eval(display);
}
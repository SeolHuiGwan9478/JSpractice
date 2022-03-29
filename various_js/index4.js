const el = document.querySelector('#form');

function printEventType(e){
    console.log('type:', e.type);
    console.log('target:', e.target);
    console.log('---------:');
}

el.addEventListener('focusin', printEventType);
el.addEventListener('focusout', printEventType);

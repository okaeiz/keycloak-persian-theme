document.addEventListener("DOMContentLoaded", function() {
    // Apply Carbon classes
    [...document.querySelectorAll('a[id^=social]')].forEach(element => element.classList.add('cds--btn', 'cds--btn--tertiary'));
    [...document.querySelectorAll('a:not([id^=social])')].forEach(element => element.classList.add('cds--link'));
    [...document.querySelectorAll('input[type="text"]'), ...document.querySelectorAll('input[type="password"]')].forEach(element => element.classList.add('cds--text-input'));
    [...document.querySelectorAll('*[type="submit"]')].forEach(element => element.classList.add('cds--btn', 'cds--btn--primary'));
    [...document.querySelectorAll('label:not([class*="checkbox"')].forEach(element => element.classList.add('cds--label'));
    [...document.querySelectorAll('span[id^=input-error]')].forEach(element => element.classList.add('cds--form-requirement'));
    [...document.querySelectorAll('form > div')].forEach(element => element.classList.add('cds--form-item'));
});


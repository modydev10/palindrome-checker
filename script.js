let input = document.querySelector('input');
let button = document.getElementsByTagName('button')[0];





input.addEventListener('keyup', function(e) {
    if (e.key == 'Enter') {
        button.click()
    }
})

// this code is for saving the input text when reloading the page:
input.addEventListener('input', function(e) {
    localStorage.setItem('input-value', input.value)
})

window.addEventListener('load', function(e) {
    input.value = this.localStorage.getItem('input-value')
})



button.addEventListener('click', function(e) {
    let text = input.value.match(/[a-z0-9]/gi);
    if (text == null) {
        Swal.fire('add some text');
    } else {
        text = text.join('');
        let reversed = [...text].reverse().join('');
        let result = text == reversed ? `"${text}" is a palindrome` : `"${text}" is not a palindrome`;
        let color = text == reversed ? 'green' : 'red';
        
        let p = document.createElement('p');
        p.style.color = color;

        p.append(result)
        Swal.fire(p);
    }
})
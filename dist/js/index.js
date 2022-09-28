const hello = document.querySelector('#hello');
const helloActive = document.querySelector('#helloActive');

Hello.addEventListener('click', function() {
    helloActive.ClassList.toggle('hello_active')
})
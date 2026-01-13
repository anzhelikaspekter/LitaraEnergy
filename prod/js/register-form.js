document.getElementById('signInButton').addEventListener('click', function() {
    document.querySelector('.signUp').classList.add('hide');
    document.querySelector('.signIn').classList.remove('hide');
    document.getElementById('registerButton').classList.remove('active');
    this.classList.add('active');
});

document.getElementById('registerButton').addEventListener('click', function() {
    document.querySelector('.signIn').classList.add('hide');
    document.querySelector('.signUp').classList.remove('hide');
    document.getElementById('signInButton').classList.remove('active');
    this.classList.add('active');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.querySelector('.popup').classList.add('hide');
});

document.querySelectorAll('.eye').forEach(eyeIcon => {
    eyeIcon.addEventListener('click', function() {
        const passwordInput = this.previousElementSibling;
        const eyeOffIcon = this.nextElementSibling;

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.classList.add('hide');
            eyeOffIcon.classList.remove('hide');
        }
    });
});

document.querySelectorAll('.eye-off').forEach(eyeOffIcon => {
    eyeOffIcon.addEventListener('click', function() {
        const passwordInput = this.previousElementSibling.previousElementSibling;
        const eyeIcon = this.previousElementSibling;

        if (passwordInput.type === 'text') {
            passwordInput.type = 'password';
            this.classList.add('hide');
            eyeIcon.classList.remove('hide');
        }
    });
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    const password = document.getElementById('passwordSignUp').value;
    const confirmPassword = document.getElementById('confirmPasswordSignUp').value;
    const errorSpan = this.querySelector('.desc--error');

    if (password !== confirmPassword) {
        event.preventDefault();
        errorSpan.classList.remove('hide');
    } else {
        errorSpan.classList.add('hide');
    }
});
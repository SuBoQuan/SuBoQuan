document.addEventListener("DOMContentLoaded", function(){
    const switchToLoginBtn = document.querySelector('.auth-form__switch-btn.login');
    const switchToRegisterBtn = document.querySelector('.auth-form__switch-btn.register');
    const backToMainBtns = document.querySelectorAll('#backToMain');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const mainApp = document.getElementById('mainApp');

    switchToLoginBtn.addEventListener('click', function(){
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    switchToRegisterBtn.addEventListener('click', function(){
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    backToMainBtns.forEach(function(btn) {
        btn.addEventListener('click', function(){
            if (registerForm.style.display === 'block' || registerForm.style.display === ''){
                registerForm.style.display = 'none';
            }
            if (loginForm.style.display === 'block' || loginForm.style.display === ''){
                loginForm.style.display = 'none';
            }
            mainApp.style.display = 'block';
        });
    });
});

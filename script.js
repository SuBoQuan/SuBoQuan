document.addEventListener("DOMContentLoaded", function(){
    const switchToLoginBtn = document.querySelector('.auth-form__switch-btn.login');
    const switchToRegisterBtn = document.querySelector('.auth-form__switch-btn.register');
    const backToMainBtns = document.querySelectorAll('#backToMain');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const mainApp = document.getElementById('mainApp');
    const modal = document.querySelector('.modal');
    const openRegister = document.getElementById('openRegister');
    const openLogin = document.getElementById('openLogin');

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
            registerForm.style.display = 'none';
            loginForm.style.display = 'none';
            modal.style.display = 'none'; // Ẩn toàn bộ modal
            mainApp.style.display = 'block';
        });
    });

    openRegister.addEventListener('click', function(){
        modal.style.display = 'flex';
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    openLogin.addEventListener('click', function(){
        modal.style.display = 'flex';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    })
});

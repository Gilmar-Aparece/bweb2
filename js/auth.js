document.addEventListener('DOMContentLoaded', function () {

  function showError(el) { if (el) el.style.display = 'block'; }
  function hideError(el) { if (el) el.style.display = 'none'; }
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ===== Registration form =====
  var registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('regEmail');
      var password = document.getElementById('regPassword');
      var confirm = document.getElementById('regConfirm');
      var errEmail = document.getElementById('errEmail');
      var errPassword = document.getElementById('errPassword');
      var errConfirm = document.getElementById('errConfirm');

      var valid = true;
      if (!emailRe.test(email.value)) { showError(errEmail); valid = false; } else { hideError(errEmail); }
      if (password.value.length < 8) { showError(errPassword); valid = false; } else { hideError(errPassword); }
      if (confirm.value !== password.value || confirm.value === '') { showError(errConfirm); valid = false; } else { hideError(errConfirm); }

      if (valid) {
        var btn = registerForm.querySelector('.auth-submit');
        btn.textContent = 'Creating account…';
        btn.disabled = true;
        // Hook this up to your PHP registration endpoint, e.g.:
        // fetch('api/register.php', { method: 'POST', body: new FormData(registerForm) })
        setTimeout(function () {
          window.location.href = 'login.html';
        }, 600);
      }
    });
  }

  // ===== Login form =====
  var loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('loginEmail');
      var password = document.getElementById('loginPassword');
      var errEmail = document.getElementById('errLoginEmail');
      var errPassword = document.getElementById('errLoginPassword');

      var valid = true;
      if (!emailRe.test(email.value)) { showError(errEmail); valid = false; } else { hideError(errEmail); }
      if (password.value === '') { showError(errPassword); valid = false; } else { hideError(errPassword); }

      if (valid) {
        var btn = loginForm.querySelector('.auth-submit');
        btn.textContent = 'Signing in…';
        btn.disabled = true;
        // Hook this up to your PHP login endpoint, e.g.:
        // fetch('api/login.php', { method: 'POST', body: new FormData(loginForm) })
        setTimeout(function () {
          window.location.href = 'index.html';
        }, 600);
      }
    });
  }
});

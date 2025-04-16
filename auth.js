function handleSignup(event) {
    event.preventDefault();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    alert('Sign up successful!');
  }
  
  function handleSignin(event) {
    event.preventDefault();
    alert('Sign in successful!');
  }
  
  function handleForgot(event) {
    event.preventDefault();
    alert('Password reset link sent to your email!');
  }
  
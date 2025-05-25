export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!re.test(email)) return 'Enter a valid email address';
  return '';
};

export const validatePassword = (password, isSignup = false) => {
  if (!password) return 'Password is required';
  if (isSignup) {
    if (password.length < 6) return 'Password must be at least 6 characters';
    // if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter';
    // if (!/[0-9]/.test(password)) return 'Password must contain at least one number';
  }
  return '';
};
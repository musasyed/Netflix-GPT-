export const checkValidData = (email, password) => {
    // console.log("Email received for validation:", email);
  
    // Improved regex pattern for email validation
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    // console.log("Is Email Valid:", isEmailValid);
  
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // console.log("Is Password Valid:", isPasswordValid);
  
    if (!isEmailValid) return "Email ID is not Valid";
    if (!isPasswordValid) return "Password is not Valid";
  
    return null;
  }
  
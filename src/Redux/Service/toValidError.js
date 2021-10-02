export const toValidError = (errorMessage) => {
  if (errorMessage.includes("Password")) {
    return {
      password: errorMessage,
    };
  }

  if (errorMessage.toLowerCase().includes("login")) {
    return {
      login: errorMessage,
    };
  }

  return { _error: errorMessage };
};

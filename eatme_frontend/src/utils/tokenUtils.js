const getIdToken = () => {
  try {
    const idToken = localStorage.getItem("idToken");
    if (idToken) {
      return idToken;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error retrieving ID token from localStorage:", error);
    return null;
  }
};

export { getIdToken };

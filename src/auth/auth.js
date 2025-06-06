export const login = (username, password) => {
  // Simulación (puedes usar API real)
  if (username === "admin" && password === "admin123") {
    return { username, role: "admin" };
  } else if (username === "user" && password === "user123") {
    return { username, role: "user" };
  } else {
    return null;
  }
};

export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem("user");
};

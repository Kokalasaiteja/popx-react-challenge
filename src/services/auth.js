const USERS_KEY = "users";
const CURRENT_USER = "currentUser";

// Register User
export const registerUser = (user) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Login User
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    localStorage.setItem(CURRENT_USER, JSON.stringify(user));
    return true;
  }

  return false;
};

// Get Current User
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER));
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER);
  return true;
};

const USERS_STORAGE_KEY = "sms_users";
const CURRENT_USER_STORAGE_KEY = "sms_current_user";

function readJson(key, fallback) {
  try {
    const rawValue = window.localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function createSessionUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

export function getStoredUsers() {
  return readJson(USERS_STORAGE_KEY, []);
}

export function getCurrentUser() {
  return readJson(CURRENT_USER_STORAGE_KEY, null);
}

export function registerUser({ name, email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getStoredUsers();
  const existingUser = users.find((user) => user.email === normalizedEmail);

  if (existingUser) {
    return {
      success: false,
      error: "An account with this email already exists.",
    };
  }

  const user = {
    id:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}`,
    name: name.trim(),
    email: normalizedEmail,
    password,
  };

  writeJson(USERS_STORAGE_KEY, [...users, user]);

  const sessionUser = createSessionUser(user);
  writeJson(CURRENT_USER_STORAGE_KEY, sessionUser);

  return { success: true, user: sessionUser };
}

export function loginUser({ email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getStoredUsers();
  const user = users.find((entry) => entry.email === normalizedEmail);

  if (!user) {
    return {
      success: false,
      error: "No account was found for this email address.",
    };
  }

  if (user.password !== password) {
    return {
      success: false,
      error: "Incorrect password. Please try again.",
    };
  }

  const sessionUser = createSessionUser(user);
  writeJson(CURRENT_USER_STORAGE_KEY, sessionUser);

  return { success: true, user: sessionUser };
}

export function clearCurrentUser() {
  window.localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
}

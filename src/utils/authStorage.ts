export function saveAuthToLocalStorage(data: {
  token: string;
  isAdmin: boolean;
  username: string;
}) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("isAdmin", String(data.isAdmin));
  localStorage.setItem("username", data.username);
};
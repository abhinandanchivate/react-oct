// we will write our axios related configurations.
import axios from "axios";
// centralized place to manage all api related configurations.
const API = axios.create({
  timeout: 3000, // time limit to wait for the response from the server.
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "/api", // vite config server will redirect the request to the backend server.
  /// http://localhost:9500
}); // create a new instance of axios with custom configuration.
API.interceptors.request.use(
  // add the token to header called x-auth-token
  (config) => {
    const NO_AUTH_URLS = ["/auth", "/users"];
    // only post methods are public in nature
    // /auth : get the user details it requires token
    // /auth : is private api.

    // token should not be added for login and register.

    const isLoginOrRegister =
      (config.url?.toLowerCase().startsWith("/auth") &&
        config.method === "post") ||
      config.url?.toLowerCase().startsWith("/users");

    if (isLoginOrRegister) {
      return config; // return the config without adding token
    }

    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  }
);
// before hitting the server every req will be passed through this interceptor. ==> will add the token except for login and register.

export default API;

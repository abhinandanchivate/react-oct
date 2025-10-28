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
    // token should not be added for login and register.
    if (NO_AUTH_URLS.some((url) => config.url?.toLowerCase().startsWith(url))) {
      return config;
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

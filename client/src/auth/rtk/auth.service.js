// we will have rest calls
// to backend services
// RESTCLIENT : axios/ fetch api :
// axios : promise based HTTP client
// we geta facility to add interceptors : to intercept request and response globally
// to add headers / logics
// we will create functions for login / register / logout
// to add auth token to headers or remove the token from headers
// http://localhost:5000/api/auth/login ==> netwrok from the client side browser.
// my customer will get to know that he is consuming xyz api from abc company.
// it should look like everything is happening from my own frontend application only.
// show like all api calls are happening from my own frontend application only but behind the scenes it should hit to my backend service ==> proxy setup
// register / login/ load user details
import API from "../../utils/api.js";
// to perform rest calls to backend services + business logics related to auth we willwrite here.
export const registerUser = async (formData) => {
  // export : to access it from other files
  // async : to use await keyword inside the function
  // formData : data filled by the user in the register form we are demanding here.
  try {
    //localhost:9500/api/users
    ///users : endpoint to register the user. used in the post call
    // /api : base url defined in the api.js file
    // http://localhost:9500: backend server url: server{proxy : }
    const res = await API.post("/users", formData);
    return { data: res.data, status: res.status };
    // data: jwt token
    // status: res.status // 200, 201
  } catch (err) {
    const res = err.response;
    // console.log(res);
    if (res.status === 400) {
      throw { data: err.response.data.errors, status: res.status }; // we will get it in the catch block of the calling function
    }
  }
};
export const loginUser = async (formData) => {
  // formData : data filled by the user in the login form we are demanding here.
  try {
    //localhost:9500/api/auth/login
    const res = await API.post("/auth", formData);
    return { data: res.data, status: res.status };
    // data: jwt token + user details
    // status: res.status // 200, 201
  } catch (err) {
    const res = err.response;
    // console.log(res);
    if (res.status === 400) {
      throw { data: err.response.data.errors, status: res.status }; // we will get it in the catch block of the calling function
    }
  }
};

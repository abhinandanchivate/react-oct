import API from "../../utils/api";

// create or update profile
export const createProfile = async (formData) => {
  try {
    // URL: http://localhost:9500/api/profile
    // method: POST
    // body: formData
    // response(success): {profile}
    // response(failure): {error validational details}
    const response = await API.post("/profile", formData);
    // below return is ur success response
    console.log(response);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};

export const getCurrentProfile = async () => {
  try {
    const response = await API.get("/profile/me");
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response);
    throw { data: error.response.data, status: error.response.status };
  }
};

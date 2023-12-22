import LOGOUT_POST_PATH from "./logout-post-path";

const logoutPostRequest = async (): Promise<Response> => {
  return fetch(LOGOUT_POST_PATH, {
    method: "POST",
  });
};

export default logoutPostRequest;

const logoutPostFetch = async (): Promise<Response> => {
  return fetch("/api/auth/logout", {
    method: "POST",
  });
};

export default logoutPostFetch;

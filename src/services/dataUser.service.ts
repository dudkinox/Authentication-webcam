import axiosInstance from "../http/client";

const DataUserService = {
  getLogin(username: string, password: string) {
    return axiosInstance
      .get(`/api/login/${username}/${password}`)
      .then((response) => response.data);
  },
};

export default DataUserService;

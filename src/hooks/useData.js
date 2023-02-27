import axios from "axios";

function useData() {
  const URL = process.env.REACT_APP_API_URL;

  const get = async (route, headers = {}, responseType = "json") => {
    try {
      const url = `${URL}/${route}`;
      const response = await axios.get(url, {
        responseType: responseType,
        headers: headers,
      });

      return response;
    } catch (error) {
      return error.response;
    }
  };

  const post = async (route, payload, headers = {}) => {
    try {
      const url = `${URL}/${route}`;
      const response = await axios.post(url, payload, { headers: headers });
      return response;
    } catch (error) {
      return error.response;
    }
  };

  const update = async (route, payload, headers = {}) => {
    try {
      const url = `${URL}/${route}`;
      const response = await axios.put(url, payload, { headers: headers });
      return response;
    } catch (error) {
      return error.response;
    }
  };

  const remove = async (route, headers = {}) => {
    try {
      const url = `${URL}/${route}`;
      const response = await axios.delete(url, { headers: headers });
      return response;
    } catch (error) {
      return error.response;
    }
  };

  return [get, post, update, remove];
}

export default useData;

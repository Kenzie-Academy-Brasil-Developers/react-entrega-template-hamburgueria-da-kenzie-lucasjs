import axios from "axios";

const baseConfig = {
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const Axios= axios.create(baseConfig);

import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS}`,
  },
});

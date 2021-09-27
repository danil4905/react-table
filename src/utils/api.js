import axios from "axios";
import { URL } from "./contants";

export default axios.create({
  baseURL: URL,
  responseType: "json",
});

import axios from "axios";

export const instance = axios.create({
  baseURL:
    process.env.FARJAN_GALLERY_BACK_END_BASE_URL || "http://localhost:3002",
});

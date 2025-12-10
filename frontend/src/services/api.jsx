import axios from "axios";
import { FIREWALL_URL } from "../config/constants";

export const sendEncryptedRequest = async (payload) => {
  try {
    const res = await axios.post(FIREWALL_URL, { payload });
    return res.data;
  } catch {
    return { error: "Firewall or backend unreachable" };
  }
};

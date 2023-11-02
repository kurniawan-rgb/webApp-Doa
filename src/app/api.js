import axios from "axios";

export const getDoaList = async () => {
  const doa = await axios.get("/api"); // Use a relative URL starting with '/api'
  console.log({ DoaList: doa });
};

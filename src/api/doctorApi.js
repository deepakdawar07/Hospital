import api from "./axiosConfig";

export const addDoctor = (doctorData) => {
  return api.post("/api/doctors", doctorData);
};

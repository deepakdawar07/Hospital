import api from "./axiosConfig";

export const addDoctor = (doctorData) => {
  return api.post("/api/doctors", doctorData);
};

export const getAllDoctor = ()=>{
    return api.get("/api/doctors");
};

export const deleteDoctore=(id)=>{
  return api.delete(`/api/doctors/${id}`);
};

export const getDoctorById =(id)=>{
    return api.get(`/api/doctors/${id}`);
};

export const updateDoctor = (id, data) => {
  return api.put(`/api/doctors/${id}`, data);
};

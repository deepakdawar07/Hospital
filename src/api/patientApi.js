import api from './axiosConfig';

export const addPatient =(data)=>{
  return api.post("/api/patients",data);
}

export const showPatient=()=>{
  return api.get("/api/patients");
}
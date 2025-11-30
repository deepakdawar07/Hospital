import api from './axiosConfig';

export const addPatient =(data)=>{
  return api.post("/api/patients",data);
}

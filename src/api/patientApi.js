const submitForm = async (e) => {
  e.preventDefault();
  try {
    await api.post("/api/patients", form);
    toast.success("Patient added successfully");
    navigate("/patients");
  } catch {
    toast.error("Failed to add patient");
  }
};

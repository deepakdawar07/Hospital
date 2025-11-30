import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import PatientList from "./pages/Patients/PatientList";
import AddPatient from "./pages/Patients/AddPatient";
import EditPatient from "./pages/Patients/EditPatient";

import DoctorList from "./pages/Doctors/DoctorList";
import AddDoctor from "./pages/Doctors/AddDoctor";
import EditDoctor from "./pages/Doctors/EditDoctor";

import Appointment from "./pages/Appointments/AppointmentList";
import AddAppointment from "./pages/Appointments/AddAppointment";
import CalendarView from "./pages/Appointments/CalendarView";

import ProtectedRoute from "./components/ProtectedRoute";
import AuthAdmin from "./pages/Admin/AuthAdmin";
import AuthFaculty from "./pages/Faculty/AuthFaculty";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <ToastContainer position="top-center" />

      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={
            <ProtectedRoute allowed={["admin","faculty"]}>
                <Dashboard />
            </ProtectedRoute>
            } />

          <Route
            path="/patients"
            element={
              <ProtectedRoute allowed={["admin","faculty"]}>
                <PatientList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/patients/add"
            element={
              <ProtectedRoute allowed={["admin","faculty"]}>
                <AddPatient />
              </ProtectedRoute>
            }
          />

          <Route
            path="/patients/edit/:id"
            element={
              <ProtectedRoute allowed={["admin","faculty"]}>
                <EditPatient />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctors"
            element={
              <ProtectedRoute allowed={["admin","faculty"]}>
                <DoctorList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctors/add"
            element={
              <ProtectedRoute allowed={["admin","faculty"]}>
                <AddDoctor />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctors/edit/:id"
            element={
              <ProtectedRoute allowed={["admin","faculty"]}>
                <EditDoctor />
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments"
            element={
              <ProtectedRoute allowed={["admin", "faculty"]}>
                <Appointment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments/add"
            element={
              <ProtectedRoute allowed={["admin", "faculty"]}>
                <AddAppointment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments/calendar"
            element={
              <ProtectedRoute allowed={["admin", "faculty"]}>
                <CalendarView />
              </ProtectedRoute>
            }
          />
          {/* Admin Auth */}
        <Route path="/admin/login" element={<AuthAdmin />} />
        <Route path="/admin/signup" element={<AuthAdmin />} />

        {/* Faculty Auth */}
        <Route path="/faculty/login" element={<AuthFaculty />} />
        <Route path="/faculty/signup" element={<AuthFaculty />} />
        </Route>
      </Routes>
    </>
  );
}

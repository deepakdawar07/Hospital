export default function Sidebar() {
  return (
    <div className="w-48 bg-white shadow-lg h-full pt-2">
      <ul className="mt-0">
        <li className="p-4 hover:bg-blue-100 cursor-pointer">Dashboard</li>
        <li className="p-4 hover:bg-blue-100 cursor-pointer">Patients</li>
        <li className="p-4 hover:bg-blue-100 cursor-pointer">Doctors</li>
        <li className="p-4 hover:bg-blue-100 cursor-pointer">Appointments</li>
      </ul>
    </div>
  );
}

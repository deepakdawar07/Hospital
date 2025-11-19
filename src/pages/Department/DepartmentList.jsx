import React from "react";

export default function DepartmentList() {
  const departments = [
    {
      name: "Cardiology",
      description: "Heart care, ECG, angiography, bypass & pacemaker services.",
      image: "/DepartmentImage/cardiology.jpg",
    },
    {
      name: "Neurology",
      description: "Brain, spine, nerves treatment including stroke care.",
      image: "/DepartmentImage/neurology.jpg",
    },
    {
      name: "Orthopedics",
      description: "Bone fractures, knee/hip replacement & joint care.",
      image: "/DepartmentImage/orthopedics.jpg",
    },
    {
      name: "Pediatrics",
      description: "Child treatment, neonatal care & vaccinations.",
      image: "/DepartmentImage/pediatrics.jpg",
    },
    {
        name: "Pathology",
        description: "Blood, urine, biopsy & lab test services.",
        image: "/DepartmentImage/pathology.jpg",
        },
        {
        name: "Oncology",
        description: "Cancer diagnosis, chemotherapy & radiation treatment.",
        image: "/DepartmentImage/oncology.jpg",
        },

    {
      name: "Emergency",
      description: "24x7 emergency & trauma care with ambulance support.",
      image: "/DepartmentImage/emergency.jpg",
    },
    {
      name: "Radiology",
      description: "MRI, CT-Scan, Ultrasound & X-ray imaging services.",
      image: "/DepartmentImage/radiology.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Our Hospital Departments
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={dept.image}
              alt={dept.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{dept.name}</h2>
              <p className="text-gray-600 text-sm">{dept.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

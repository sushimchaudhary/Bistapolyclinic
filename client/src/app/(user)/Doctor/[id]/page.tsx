// /app/Doctor/[id]/page.tsx

import axios from "axios";

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  education: string[];
  experience: string;
  bio: string;
  image: string;
}

interface Props {
  params: { id: string };
}

const getDoctorById = async (id: string): Promise<Doctor | null> => {
  try {
    const res = await axios.get(`http://localhost:5000/api/doctors/${id}`);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch doctor details", err);
    return null;
  }
};

const DoctorDetailsPage = async ({ params }: Props) => {
  const doctor = await getDoctorById(params.id);

  if (!doctor) return <div className="text-center py-20">Doctor not found</div>;

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="bg-white shadow-lg rounded-4 p-4">
              <div className="row align-items-start g-4">

                {/* Doctor Image Column */}
                <div className="col-12 col-lg-6">
                  <img
                    src={`http://localhost:5000${doctor.image}`}
                    alt={doctor.name}
                    className="img-fluid rounded-4"
                    style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
                  />
                </div>

                {/* Doctor Details Column */}
                <div className="col-12 col-lg-6 text-start">
                  <h1 className="h3 fw-bold text-primary">{doctor.name}</h1>
                  <p className="text-info fw-semibold mb-1">{doctor.specialization}</p>
                  <p className="text-secondary mb-2">{doctor.experience}</p>
                  <p className="text-dark mb-3">{doctor.bio}</p>

                  <h5 className="fw-semibold text-secondary mt-4">Education:</h5>
                  <ul className="ps-3 mb-0">
                    {doctor.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default DoctorDetailsPage;

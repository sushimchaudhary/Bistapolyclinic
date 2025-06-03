// /app/Doctor/[id]/page.tsx

import axios from "axios";

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  education: string[];
  experience: string;
  service: string;
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
          <div className="col-12 col-lg-12">
            <div className="bg-white shadow-lg rounded-4 p-4">
              <div className="row align-items-start g-4">

                {/* Doctor Image Column */}
                <div className="col-12 col-lg-4" style={{
                height: "430px",
                overflow: "hidden",
              }}>
                  <img
                    src={`http://localhost:5000${doctor.image}`}
                    alt={doctor.name}
                    className="img-fluid rounded-4"
                  />
                </div>

                {/* Doctor Details Column */}
                <div className="col-12 col-lg-8 text-start ">
                  <h1 className="h3 fw-bold text-primary">{doctor.name}</h1>
                  <div  className="d-flex items-center">
                    <h5 className="fw-semibold text-secondary mb-0">Education:</h5>
                    <ul className="mb-0 flex items-center">
                      {doctor.education.map((edu, index) => (
                        <li key={index} className="text-start">{edu}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-info fw-semibold mb-1">{doctor.specialization}</p>
                  <p className="text-secondary mb-2">{doctor.experience}</p>
                  <p className="text-secondary mb-2">{doctor.service}</p>
                  <p className="text-dark mb-3">{doctor.bio}</p>


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
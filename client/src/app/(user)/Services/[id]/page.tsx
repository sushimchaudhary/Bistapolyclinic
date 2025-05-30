import axios from "axios";
import { notFound } from "next/navigation";

interface Service {
  _id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

interface Props {
  params: {
    id: string;
  };
}

const getServiceById = async (id: string): Promise<Service | null> => {
  try {
    const res = await axios.get(`http://localhost:5000/api/services/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
};

export default async function ServiceDetailPage({ params }: Props) {
  const service = await getServiceById(params.id);

  if (!service) return notFound();

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row g-5 border-bottom">
            {/* Image */}
            <div className="col-md-4 border-top py-3">
              <div
                className="border-2 rounded-2xl"
                style={{
                  height: "320px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`http://localhost:5000${service.image}`}
                  alt={service.title}
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Text */}
            <div className="col-md-8 border-top py-3">
              <div>
                <h1 className="py-3 text-start text-dark">{service.title}</h1>
                <p className="text-secondary" style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

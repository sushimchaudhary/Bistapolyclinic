import axios from "axios";

interface Service {
  _id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const getService = async (id: string): Promise<Service | null> => {
  try {
    const res = await axios.get(`http://localhost:5000/api/services/${id}`);
    return res.data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.response?.data || err.message);
    } else {
      console.error("Unknown error:", err);
    }
    return null;
  }
};

const ServiceDetailPage = async ({ params }: { params: { id: string } }) => {
  const service = await getService(params.id);

  if (!service) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Service Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <img
            src={`http://localhost:5000${service.image}`}
            alt={service.title}
            className="img-fluid rounded mb-4"
          />
          <h2 className="text-primary">{service.title}</h2>
          <p className="text-muted">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;

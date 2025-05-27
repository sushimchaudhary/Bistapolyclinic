// app/(user)/News/[id]/page.tsx
import { notFound } from "next/navigation";
import axios from "axios";

interface News {
  _id: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

export default async function NewsDetail({ params }: { params: { id: string } }) {
  try {
    const res = await axios.get(`http://localhost:5000/api/news/${params.id}`);
    const news: News = res.data;

    return (
      <>

        <section className="py-5">
          <div className="container">
            <div className="row g-5 border-bottom">
              <div className="col-md-4 border-top py-3">
                <div className="border-2 rounded-2xl" style={{
                  height: "320px",
                  overflow: "hidden",
                }}>
                  <img
                    src={`http://localhost:5000${news.image}`}
                    alt={news.title}
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="col-md-8 border-top py-3">
                <div>
                  <h1 className="py-3 text-start text-dark">{news.title}</h1>
                  <p className="text-muted text-start">By {news.author}</p>
                  <p className="text-secondary" style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
                    {news.description}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </>




    );
  } catch (error) {
    console.error("Error loading news detail:", error);
    notFound();
  }
}

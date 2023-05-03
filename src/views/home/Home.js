import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-light d-flex flex-column min-vh-100 pt-5">
      <div className="container pb-5 pt-5">
        <div className="align-items-center mb-5 row">
          <div className="col-lg-12">
            <h3 className="h2 mb-1">
              Services Portal for Munirka DDA FLats AOA-78 resident members
            </h3>
          </div>
          <div className="col-lg-auto d-none ml-auto">
            <a href="#" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xl-6 pb-3 pt-3">
            <Link
              to="/search-requests"
              className="align-items-center btn btn-light d-flex justify-content-center p-3 pb-5 pl-4 pr-4 pt-5 shadow"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.2rem"
                height="2.2rem"
                fill="currentColor"
                className="bi bi-hourglass-split mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
              </svg>
              <span className="p-1"></span>
              <h4 className="font-weight-bold h5 mb-0">Check Request Status</h4>{" "}
            </Link>
          </div>
          <div className="col-sm-6 col-xl-6 pb-3 pt-3">
            <Link
              to="/select-request-type"
              className="align-items-center btn btn-light d-flex justify-content-center p-3 pb-5 pl-4 pr-4 pt-5 shadow text-left"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.2rem"
                height="2.2rem"
                fill="currentColor"
                className="bi tools mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
              </svg>
              <span className="p-1"></span>
              <h4 className="font-weight-bold h5 mb-0">New Service Request</h4>{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

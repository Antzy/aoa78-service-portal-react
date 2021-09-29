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
              </svg>{" "}
              <h4 className="font-weight-bold h5 mb-0">Check Request Status</h4>{" "}
            </Link>
          </div>
          <div className="col-sm-6 col-xl-6 pb-3 pt-3">
            <Link
              to="/new-request"
              className="align-items-center btn btn-light d-flex justify-content-center p-3 pb-5 pl-4 pr-4 pt-5 shadow text-left"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.2rem"
                height="2.2rem"
                fill="currentColor"
                className="bi bi-wrench mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
              </svg>{" "}
              <h4 className="font-weight-bold h5 mb-0">New Service Request</h4>{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

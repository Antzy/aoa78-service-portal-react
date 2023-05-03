import { Link } from "react-router-dom";
import { SERVICE_TYPES, REQUEST_PARAMS } from "../../constants/constants";

export default function SelectRequestType() {
  return (
    <section className="bg-light d-flex flex-column min-vh-100 pt-5">
      <div className="container pb-5 pt-5">
        <div className="mb-5 row">
          <div className="col-md-12">
            <h2>
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
              Select Service Request Type
            </h2>
          </div>
        </div>
        <div className="align-items-center mb-5 row">
          <div className="col-lg-auto d-none ml-auto">
            <a href="#" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xl-6 pb-3 pt-3">
            <Link
              to={"/new-request?" + REQUEST_PARAMS.SERVICE_TYPE + "=" + SERVICE_TYPES.ELECTRICIAN}
              className="align-items-center btn btn-light d-flex justify-content-center p-3 pb-5 pl-4 pr-4 pt-5 shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
              </svg>
              <span className="p-1"></span>
              <h4 className="font-weight-bold h5 mb-0">Electrician</h4>{" "}
            </Link>
          </div>
          <div className="col-sm-6 col-xl-6 pb-3 pt-3">
            <Link
              to={"/new-request?" + REQUEST_PARAMS.SERVICE_TYPE + "=" + SERVICE_TYPES.PLUMBER}
              className="align-items-center btn btn-light d-flex justify-content-center p-3 pb-5 pl-4 pr-4 pt-5 shadow text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" fill="currentColor" class="bi bi-wrench-adjustable" viewBox="0 0 16 16">
                <path d="M16 4.5a4.492 4.492 0 0 1-1.703 3.526L13 5l2.959-1.11c.027.2.041.403.041.61Z" />
                <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.49 4.49 0 0 0 11.5 9Zm-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376ZM3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>
              <span className="p-1"></span>
              <h4 className="font-weight-bold h5 mb-0">Plumber</h4>{" "}
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xl-6 pb-3 pt-3">
            <Link
              to={"/new-request?" + REQUEST_PARAMS.SERVICE_TYPE + "=" + SERVICE_TYPES.SEWERMAN}
              className="align-items-center btn btn-light d-flex justify-content-center p-3 pb-5 pl-4 pr-4 pt-5 shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
              </svg>
              <span className="p-1"></span>
              <h4 className="font-weight-bold h5 mb-0">Sewerman</h4>{" "}
            </Link>
          </div>
          <div className="col-sm-6 col-xl-6 pb-3 pt-3">
            <Link
              to={"/new-request?" + REQUEST_PARAMS.SERVICE_TYPE + "=" + SERVICE_TYPES.DJB}
              className="align-items-center btn btn-light d-flex justify-content-center p-3 pb-5 pl-4 pr-4 pt-5 shadow text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" fill="currentColor" class="bi bi-tsunami" viewBox="0 0 16 16">
                <path d="M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zM2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.878 1.878 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5a.493.493 0 0 1 .034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495-.426-.42-1.19-.77-2.477-.77-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13z"/>
              </svg>
              <span className="p-1"></span>
              <h4 className="font-weight-bold h5 mb-0">DJB Related</h4>{" "}
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xl-6 pb-3 pt-3">
            <Link
              to={"/new-request?" + REQUEST_PARAMS.SERVICE_TYPE + "=" + SERVICE_TYPES.MCD}
              className="align-items-center btn btn-light d-flex justify-content-center p-3 pb-5 pl-4 pr-4 pt-5 shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
                <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
              </svg>
              <span className="p-1"></span>
              <h4 className="font-weight-bold h5 mb-0">MCD Related</h4>{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

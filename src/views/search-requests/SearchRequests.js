import { useState } from "react";
import { ADDRESSES, SEARCH_TYPES } from "../../constants/constants";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useHistory } from "react-router-dom";

export default function SearchRequests() {
  const [requestId, setRequestId] = useState("");
  const [address, setAddress] = useState({
    block: "",
    building: "",
    flat: "",
  });
  const history = useHistory();

  const handleChange = (event) => {
    if (event) {
      event.preventDefault();
    }

    let value = event.target.value;
    let name = event.target.name;
    let newAddress = { ...address };

    switch (name) {
      case "referenceIdInput":
        setRequestId(value);
        break;
      case "blockInput":
        newAddress.block = value;
        if (
          !ADDRESSES[newAddress.block] ||
          !ADDRESSES[newAddress.block][newAddress.building]
        ) {
          newAddress.building = "";
          newAddress.flat = "";
        } else {
          if (
            !ADDRESSES[newAddress.block][newAddress.building].includes(
              newAddress.flat
            )
          ) {
            newAddress.flat = "";
          }
        }
        setAddress(newAddress);
        // setAddress({ ...address, block: value, building: "", flat: "" });
        break;
      case "buildingInput":
        newAddress.building = value;
        if (
          !ADDRESSES[newAddress.block] ||
          !ADDRESSES[newAddress.block][newAddress.building] ||
          !ADDRESSES[newAddress.block][newAddress.building].includes(
            newAddress.flat
          )
        ) {
          newAddress.flat = "";
        }
        setAddress(newAddress);
        // setAddress({ ...address, building: value, flat: "" });
        break;
      case "flatInput":
        setAddress({ ...address, flat: value });
        break;
    }
  };

  const onReferenceIdFormSubmit = (event) => {
    if (event) event.preventDefault();
    if (requestId === "") return;
    history.push({
      pathname: "/view-requests",
      search: `?${SEARCH_TYPES.REQUEST_ID}=${requestId}`,
      // state: { [SEARCH_TYPES.REQUEST_ID]: requestId },
    });
  };

  const onAddressFormSubmit = (event) => {
    if (event) event.preventDefault();
    if (address.block === "" || address.building === "" || address.flat === "")
      return;
    history.push({
      pathname: "/view-requests",
      search: `?${SEARCH_TYPES.ADDRESS}=${address.block}${address.building}${address.flat}`,
    });
  };

  return (
    <>
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
                className="bi bi-hourglass-split mr-3"
                viewBox="0 0 16 16"
                >
                  <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                </svg>
                <span className="p-1"></span> 
                Check Request Status
              </h2>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="mb-3 row">
                <div className="col-md-12">
                  <h4>Find By Request ID</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 col-xl-8 ml-auto mr-auto">
                  <form onSubmit={onReferenceIdFormSubmit}>
                    <div className="align-items-center form-row">
                      <div className="col-sm form-group">
                        <input
                          type="text"
                          name="referenceIdInput"
                          className="form-control pl-4 pr-4"
                          placeholder="Enter Request ID..."
                          value={requestId}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-sm-auto form-group text-right">
                        <button
                          type="submit"
                          className="btn btn-primary pl-4 pr-4 rounded-pill"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="1.25em"
                            height="1.25em"
                            className="mr-1"
                          >
                            <g>
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                            </g>
                          </svg>
                          <span className="align-middle">Search</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="align-items-center mb-4 mt-4 row">
            <div className="col">
              <hr className="border-secondary mb-0 mt-0" />
            </div>
            <div className="col-auto">
              <h2 className="font-weight-bold h4 mb-0 text-uppercase">OR</h2>
            </div>
            <div className="col">
              <hr className="border-secondary mb-0 mt-0" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="mb-3 row">
                <div className="col-md-12">
                  <h4>Find Requests By Address</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 col-xl-8 ml-auto mr-auto">
                  <form onSubmit={onAddressFormSubmit}>
                    <div className="form-row row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="blockInput">Block</label>
                          <select
                            className="form-control"
                            id="blockInput"
                            name="blockInput"
                            value={address.block}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              -- Block --
                            </option>
                            {Object.keys(ADDRESSES).map((block) => (
                              <option key={block} value={block}>
                                {block}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="buildingInput">Building No.</label>
                          <select
                            className="form-control"
                            id="buildingInput"
                            name="buildingInput"
                            value={address.building}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              -- Building No. --
                            </option>
                            {address.block &&
                              ADDRESSES[address.block] &&
                              Object.keys(ADDRESSES[address.block]).map(
                                (building) => (
                                  <option key={building} value={building}>
                                    {building}
                                  </option>
                                )
                              )}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="flatInput">Flat</label>
                          <select
                            className="form-control"
                            id="flatInput"
                            name="flatInput"
                            value={address.flat}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              -- Flat --
                            </option>
                            {address.block &&
                              ADDRESSES[address.block] &&
                              ADDRESSES[address.block][address.building] &&
                              ADDRESSES[address.block][address.building].map(
                                (flat) => (
                                  <option key={flat} value={flat}>
                                    {flat}
                                  </option>
                                )
                              )}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="align-items-center form-row">
                      <div className="col-sm-12 form-group text-right">
                        <button
                          type="submit"
                          className="btn btn-primary pl-4 pr-4 rounded-pill"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="1.25em"
                            height="1.25em"
                            className="mr-1"
                          >
                            <g>
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                            </g>
                          </svg>
                          <span className="align-middle">Search</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

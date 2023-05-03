import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  ADDRESSES,
  SEARCH_TYPES,
  SERVICE_TYPES,
  REQUEST_PARAMS
} from "../../constants/constants";
import { addServiceRequest, getPaymentBalanceByAddress } from "../../models/firebase";

export default function NewRequest() {
  const [canProceed, setCanProceed] = useState(false);
  const [showPaymentError, setShowPaymentError] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState({
    block: "",
    building: "",
    flat: "",
  });
  const [requestId, setRequestId] = useState(null);
  const history = useHistory();
  const location = useLocation();

  let params = new URLSearchParams(location.search);

  const handleChange = async (event) => {
    if (event) {
      event.preventDefault();
    }

    let value = event.target.value;
    let name = event.target.name;
    let newAddress = { ...address };

    switch (name) {
      case "nameInput":
        setName(value);
        break;
      case "mobileInput":
        setMobile(value);
        break;
      case "serviceTypeInput":
        setServiceType(value);
        break;
      case "detailsInput":
        setDetails(value);
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
        if(params.has(REQUEST_PARAMS.SERVICE_TYPE)) {
          setServiceType(params.get(REQUEST_PARAMS.SERVICE_TYPE))
        }
        let paymentDtl;
        if(!params.has(REQUEST_PARAMS.BY_PASS)) {
          paymentDtl = await getPaymentBalanceByAddress(`${address.block}${address.building}${value}`)
        }
        if(params.has(REQUEST_PARAMS.BY_PASS) || paymentDtl.balance <= 0) {
          setCanProceed(true)
          setShowPaymentError(false)
        } else {
          setCanProceed(false)
          setShowPaymentError(true)
        }
        break;
    }
  };

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();

    let addedRequestId = await addServiceRequest(
      name,
      mobile,
      `${address.block}${address.building}${address.flat}`,
      serviceType,
      details
    );

    setRequestId(addedRequestId);

    // alert(`Your Rrequest ID is ${addedRequestId}`);
  };

  if (requestId !== null) {
    return (
      <section className="bg-light min-vh-100 pb-5 pt-5">
        <div className="container pb-5 pt-5">
          <div className="bg-white p-4 p-lg-5 text-center">
            <h2 className="mb-4">Service Request Submitted!</h2>
            <p>Request ID: {requestId}</p>
            <p>Thanks for raising your concern, <br/>
               The service man should visit your place in 3 Business Days,<br/>
               Kindly stay available from 17:00 to 19:00<br/><br/>
               
               Please have a look at the <a href="https://bit.ly/aoa78-services-offered" target = "_blank">Services Offered page</a>.</p>
            <button
              className="btn btn-primary"
              onClick={() =>
                history.push({
                  pathname: "/view-requests",
                  search: `?${SEARCH_TYPES.REQUEST_ID}=${requestId}`,
                })
              }
            >
              View Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-light min-vh-100 pb-5 pt-5">
      <div className="container pb-5 pt-5">
        <div className="bg-white p-4 p-lg-5">
          <h2 className="mb-4">New Service Request</h2>
          <form className="border p-3" onSubmit={handleSubmit}>
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
                      Object.keys(ADDRESSES[address.block]).map((building) => (
                        <option key={building} value={building}>
                          {building}
                        </option>
                      ))}
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
                      ADDRESSES[address.block][address.building].map((flat) => (
                        <option key={flat} value={flat}>
                          {flat}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            {showPaymentError && <>
            <div align="center">
              <h3> <span className="text-danger"> Oops !.. </span><br/> It seems you have dues in your RWA subscription </h3>
              <br/> Please clear them and come back again tomorrow. 
              <br/> To know your dues, <a href="https://wa.me/919810762010?text=Hi" target="_blank">please reach out the Treasurer</a>
            </div>
            </>
            }
            {canProceed && <>
            <div className="form-row row">
              <div className="form-group col-md-6">
                <label htmlFor="nameInput">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  name="nameInput"
                  placeholder="Enter name..."
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-6">
                <label htmlFor="mobileInput">Mobile No.</label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobileInput"
                  name="mobileInput"
                  placeholder="Enter mobile number..."
                  value={mobile}
                  onChange={handleChange}
                  title="(Ten digit numbers only)"
                  pattern="\d{10}"
                  required
                />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-6">
                <div className="form-group">
                  <label htmlFor="serviceTypeInput">Service Type</label>
                  <select
                    className="form-control"
                    id="serviceTypeInput"
                    name="serviceTypeInput"
                    value={serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      -- Service Type --
                    </option>
                    {Object.values(SERVICE_TYPES)
                      .sort()
                      .map((serviceTypesValue) => (
                        <option key={serviceTypesValue} value={serviceTypesValue} >
                          {serviceTypesValue}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-row row">
              <div className="col-md-12 form-group">
                <div className="form-group">
                  <label htmlFor="detailsInput">
                    Request Details (mention all service requirements)
                  </label>
                  <textarea
                    className="form-control"
                    rows={6}
                    id="detailsInput"
                    name="detailsInput"
                    placeholder="Enter request details..."
                    value={details}
                    onChange={handleChange}
                    maxLength={500}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 text-left">
              <button
                type="submit"
                className="btn btn-primary pl-4 pr-4 rounded-0 rounded-pill text-uppercase"
              >
                <span className="align-middle">Submit</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height={16}
                  width={16}
                  className="ml-1"
                >
                  <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                </svg>
              </button>
            </div>
            </> }
          </form>
        </div>
      </div>
    </section>
  );
}

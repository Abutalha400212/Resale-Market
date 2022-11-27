import React, { useContext } from "react";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { bookingOrder } from "../../../Api/OrderBooking";
import { soldProduct } from "../../../Api/UserCollection";
import { AuthContext } from "../../../Context/AuthProvider";

const OrderModal = ({ item, setHandleShop }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { resale, description, _id,img } = item;
  const handleBooking = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const location = e.target.location.value;
    const date = format(new Date(), "dd/MM/yyyy");
    const booking = {
      customer: user?.displayName,
      email: user?.email,
      phone: phone,
      product: description.name,
      price: resale,
      meet: location,
      date:date,
      img:img
    };
    bookingOrder(booking).then((data) => {
      if (data.acknowledged) {
        toast.success(`${description.name} item booked`);
        setHandleShop(null);
        soldProduct(_id).then((data) => console.log(data));
        navigate("/dashboard/myOrders");
      }
    });
  };
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="card bg-base-100 shadow-xl flex-1 ">
            <section className="Uneditable text-sm">
              <div className="form-control w-11/12 mx-auto mb-2 mt-4">
                <input
                  type="text"
                  disabled
                  defaultValue={user.displayName}
                  placeholder="Type here"
                  className="input input-bordered w-full text-sm input-sm "
                />
              </div>

              <div className="form-control  w-11/12 mx-auto mb-2">
                <input
                  type="email"
                  disabled
                  defaultValue={user?.email}
                  placeholder="Type here"
                  className="input input-bordered w-full text-sm input-sm "
                />
              </div>
              <div className="form-control w-11/12 mx-auto mb-2 ">
                <input
                  type="text"
                  disabled
                  defaultValue={item?.phone}
                  placeholder="Type here"
                  className="input input-bordered w-full text-sm input-sm "
                />
              </div>
              <div className="form-control w-11/12 mx-auto mb-2">
                <input
                  type="text"
                  disabled
                  defaultValue={description?.name}
                  placeholder="Type here"
                  className="input input-bordered w-full text-sm input-sm  "
                />
              </div>
              <div className="form-control w-11/12 mx-auto">
                <input
                  type="text"
                  disabled
                  defaultValue={`৳ ${resale}`}
                  placeholder="Type here"
                  className="input input-bordered w-full input-sm text-sm "
                />
              </div>
            </section>
            <form onSubmit={handleBooking} className="card-body">
              <h1 className="text-md font-mono text-gray-600 underline">
                {" "}
                ProductDescription:
              </h1>
              <div className="md:flex justify-between gap-1">
                <ul className=" text-xs text-light  bg-white rounded-lg border border-gray-200 dark:bg-gray-700 light:border-gray-600 dark:text-white">
                  <li className="py-2 px-2 w-full rounded-t-lg border-b border-gray-200 light:border-gray-600">
                    Model: {description.name}
                  </li>
                  <li className="py-2 px-2 w-full border-b border-gray-200 light:border-gray-600">
                    Made by {description.made}
                  </li>
                  <li className="py-2 px-2 w-full border-b border-gray-200 light:border-gray-600">
                    Display: {description.display}
                  </li>
                  <li className="py-2 px-2 w-full rounded-b-lg">
                    Camera: {description.camera}
                  </li>
                  <li className="py-2 px-2 w-full rounded-b-lg">
                    {" "}
                    ram: {description.ram}
                  </li>
                </ul>
                <div>
                  <h1 className="text-xs text-gray-600 text-center underline">
                    Make sure give your information{" "}
                  </h1>
                  <div className="form-control w-full">
                    <label className="label m-0">
                      <span className="label-text text-xs">Phone No.</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone No:"
                      required
                      className="input input-bordered w-full input-sm m-0"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label m-0">
                      <span className="label-text text-xs">
                        Metting Location
                      </span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="Meeting Location:"
                      className="input input-bordered w-full input-sm m-0"
                    />
                  </div>
                </div>
              </div>
              <div className=" md:flex justify-center mt-2">
                <label htmlFor="order-modal" className="btn btn-sm btn-warning">
                  Cancel
                </label>
                <button
                  disabled={item.status}
                  className="btn btn-sm btn-success ml-3"
                >
                  Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;

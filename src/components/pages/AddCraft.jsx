import { useForm } from "react-hook-form";
import addImage from "./../../assets/images/add.svg";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddCraft = () => {
  const { register, handleSubmit } = useForm();

  const { user } = useContext(AuthContext);
  const email = user.reloadUserInfo.email;
  const displayName = user.reloadUserInfo.displayName;
  const navigate = useNavigate();

  const handleAddCraft = (formInfo) => {
    fetch("https://drawing-den-server.vercel.app/crafts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Item Added Successfully !",
            icon: "success",
            confirmButtonText: "Okay",
          });
          setTimeout(() => {
            navigate("/myCraftList");
          }, 3500);
        }
      });
  };

  return (
    <div className="my-4 md:my-8 lg:my-16">
      <Helmet>
        <title>DrawingDen | Add Art And Craft</title>
      </Helmet>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 justify-between">
        <form
          onSubmit={handleSubmit(handleAddCraft)}
          className="w-full space-y-4 lg:p-12 "
        >
          <div className="grid grid-cols-2 gap-4">
            <fieldset>
              <label className="">Photo URL</label>
              <input
                type="url"
                placeholder="https://image/1s8vQ2D/123.jpg"
                className="w-full input input-sm text-sm border-gray-300"
                {...register("photo", { required: true })}
              />
            </fieldset>
            <fieldset>
              <label className="">Item Name</label>
              <input
                type="text"
                placeholder="Enter your item name"
                className="w-full input input-sm text-sm border-gray-300"
                {...register("itemName", { required: true })}
              />
            </fieldset>

            {/* select */}
            <fieldset className="join col-span-2">
              <select
                className="select select-sm select-bordered join-item w-full"
                {...register("subCategory", { required: true })}
              >
                <option value="" selected disabled>
                  Select Subcategory
                </option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">
                  Watercolour Painting
                </option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
            </fieldset>
            <fieldset>
              <label className="">Details</label>
              <input
                type="text"
                placeholder="Enter short details"
                className="w-full input input-sm text-sm border-gray-300"
                {...register("details")}
              />
            </fieldset>
            <fieldset>
              <label className="">Price</label>
              <input
                type="text"
                placeholder="Enter the price $"
                className="w-full input input-sm text-sm border-gray-300"
                {...register("price", { required: true })}
              />
            </fieldset>
            <fieldset>
              <label className="">Rating</label>
              <input
                type="text"
                placeholder="4.5"
                className="w-full input input-sm text-sm border-gray-300"
                {...register("rating")}
              />
            </fieldset>
            <fieldset>
              <label className="">Customization</label>
              <input
                type="text"
                placeholder="Yes or No"
                className="w-full input input-sm text-sm border-gray-300"
                {...register("customization", { required: true })}
              />
            </fieldset>
            <fieldset>
              <label className="">Processing Time</label>
              <input
                type="text"
                placeholder="1-2 weeks"
                className="w-full input input-sm text-sm border-gray-300"
                {...register("processTime")}
              />
            </fieldset>
            <fieldset>
              <label className="">Product Status</label>
              <input
                type="text"
                placeholder="Enter your product status"
                className="w-full input input-sm text-sm border-gray-300"
                {...register("stock", { required: true })}
              />
            </fieldset>
            <fieldset>
              <label className="">Email</label>
              <input
                type="email"
                className="w-full input input-sm text-sm border-gray-300"
                value={email}
                {...register("email", { required: true })}
              />
            </fieldset>
            <fieldset className="mb-2">
              <label className="">Full Name</label>
              <input
                type="text"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={displayName}
                {...register("fullName", { required: true })}
              />
            </fieldset>
            <button className="my-primary-btn col-span-2">Add Item</button>
          </div>
        </form>
        <div className="lg:w-[1100px] text-center pt-12">
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold">
            Add New Art and Crafts
          </h3>
          <img src={addImage} />
        </div>
      </div>
    </div>
  );
};

export default AddCraft;

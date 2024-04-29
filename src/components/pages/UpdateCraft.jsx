import { useLoaderData } from "react-router-dom";
import updateImg from "./../../assets/images/update.svg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateCraft = () => {
  const loadedCraft = useLoaderData();
  const {
    _id,
    photo,
    itemName,
    subCategory,
    details,
    price,
    rating,
    customization,
    processTime,
    stock,
  } = loadedCraft;

  const { register, handleSubmit } = useForm();

  const handleUpdate = (updateFormData) => {
    fetch(`https://drawing-den-server.vercel.app/crafts/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully updated your item !",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <div className="my-4 md:my-8 lg:my-16">
      <Helmet>
        <title>DrawingDen | Update Art and Craft</title>
      </Helmet>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 justify-between">
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="w-full space-y-4 lg:p-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <fieldset>
              <label className="">Photo</label>
              <input
                type="url"
                placeholder="https://image/1s8vQ2D/123.jpg"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={photo}
                {...register("photo", { required: true })}
              />
            </fieldset>
            <fieldset>
              <label className="">Item Name</label>
              <input
                type="text"
                placeholder="Enter your item name"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={itemName}
                {...register("itemName", { required: true })}
              />
            </fieldset>

            {/* select */}
            <fieldset className="join col-span-2">
              <select
                className="select select-sm select-bordered join-item w-full"
                {...register("subCategory", { required: true })}
                defaultValue={subCategory}
              >
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
                defaultValue={details}
                {...register("details", { required: true })}
              />
            </fieldset>
            <fieldset>
              <label className="">Price</label>
              <input
                type="text"
                placeholder="Enter the price"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={price}
                {...register("price", { required: true })}
              />
            </fieldset>
            <fieldset>
              <label className="">Rating</label>
              <input
                type="text"
                placeholder="4.5"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={rating}
                {...register("rating", { required: true })}
              />
            </fieldset>
            <fieldset>
              <label className="">Customization</label>
              <input
                type="text"
                placeholder="Yes or No"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={customization}
                {...register("customization", { required: true })}
              />
            </fieldset>
            <fieldset>
              <label className="">Processing Time</label>
              <input
                type="text"
                placeholder="Enter processing time"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={processTime}
                {...register("processTime", { required: true })}
              />
            </fieldset>
            <fieldset className="">
              <label className="">Stock</label>
              <input
                type="text"
                placeholder="Enter your product status"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={stock}
                {...register("stock", { required: true })}
              />
            </fieldset>
            <button
              onClick={handleUpdate}
              className="my-primary-btn col-span-2"
            >
              Update
            </button>
          </div>
        </form>
        <div className="lg:w-[1100px]">
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold">
            Update Your Art and Crafts
          </h3>
          <img className="pt-6" src={updateImg} />
        </div>
      </div>
    </div>
  );
};

export default UpdateCraft;

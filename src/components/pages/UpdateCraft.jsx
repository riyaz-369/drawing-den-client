import { useLoaderData } from "react-router-dom";
import updateImg from "./../../assets/images/update.svg";
import { useForm } from "react-hook-form";

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
    email,
    fullName,
  } = loadedCraft;

  const { register, handleSubmit } = useForm();

  const handleUpdate = (updateFormData) => {
    console.log(updateFormData);
    fetch(`http://localhost:5000/crafts/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="my-24  bg-gray-50">
      <div className="max-w-7xl mx-auto flex gap-12 justify-between rounded-md">
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="w-full space-y-4 p-6"
        >
          <h3 className="text-3xl font-semibold">Update Your Art and Crafts</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            earum dignissimos nulla rerum vitae corrupti eveniet. Officia, vitae
            eveniet
          </p>
          <div className="grid grid-cols-2 gap-4">
            <fieldset>
              <label className="">Photo</label>
              <input
                type="url"
                placeholder="https://image/1s8vQ2D/123.jpg"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={photo}
                {...register("photo")}
              />
            </fieldset>
            <fieldset>
              <label className="">Item Name</label>
              <input
                type="text"
                placeholder="Enter your item name"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={itemName}
                {...register("itemName")}
              />
            </fieldset>
            <fieldset>
              <label className="">Subcategory Name</label>
              <input
                type="text"
                placeholder="Enter your subcategory name"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={subCategory}
                {...register("subCategory")}
              />
            </fieldset>
            <fieldset>
              <label className="">Details</label>
              <input
                type="text"
                placeholder="Enter short details"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={details}
                {...register("details")}
              />
            </fieldset>
            <fieldset>
              <label className="">Price</label>
              <input
                type="text"
                placeholder="Enter the price"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={price}
                {...register("price")}
              />
            </fieldset>
            <fieldset>
              <label className="">Rating</label>
              <input
                type="text"
                placeholder="4.5"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={rating}
                {...register("rating")}
              />
            </fieldset>
            <fieldset>
              <label className="">Customization</label>
              <input
                type="text"
                placeholder="Yes or No"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={customization}
                {...register("customization")}
              />
            </fieldset>
            <fieldset>
              <label className="">Processing Time</label>
              <input
                type="text"
                placeholder="Enter processing time"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={processTime}
                {...register("processTime")}
              />
            </fieldset>
            <fieldset className="col-span-2">
              <label className="">Stock</label>
              <input
                type="text"
                placeholder="Enter your product status"
                className="w-full input input-sm text-sm border-gray-300"
                defaultValue={stock}
                {...register("stock")}
              />
            </fieldset>
            <button
              onClick={handleUpdate}
              className="my-secondary-btn col-span-2"
            >
              Update
            </button>
          </div>
        </form>
        <div className="border-red-800 w-[1100px]">
          <img className="pt-36" src={updateImg} />
        </div>
      </div>
    </div>
  );
};

export default UpdateCraft;

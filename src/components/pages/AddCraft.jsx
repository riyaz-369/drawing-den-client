import { useForm } from "react-hook-form";
import addImage from "./../../assets/images/add.svg";
import Swal from "sweetalert2";

const AddCraft = () => {
  const { register, handleSubmit } = useForm();

  const handleAddCraft = (formInfo) => {
    console.log(formInfo);

    fetch("http://localhost:5000/crafts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Item Added Successfully !",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-24 flex gap-12 justify-between rounded-md bg-gray-50">
      <form
        onSubmit={handleSubmit(handleAddCraft)}
        className="w-full space-y-4 p-6"
      >
        <h3 className="text-3xl font-semibold">Add New Art and Crafts</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          earum dignissimos nulla rerum vitae corrupti eveniet. Officia, vitae
          eveniet
        </p>
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
          <fieldset>
            <label className="">Subcategory Name</label>
            <input
              type="text"
              placeholder="Enter your subcategory name"
              className="w-full input input-sm text-sm border-gray-300"
              {...register("subCategory")}
            />
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
              placeholder="Enter the price"
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
              {...register("customization")}
            />
          </fieldset>
          <fieldset>
            <label className="">Processing Time</label>
            <input
              type="text"
              placeholder="Enter processing time"
              className="w-full input input-sm text-sm border-gray-300"
              {...register("processTime")}
            />
          </fieldset>
          <fieldset>
            <label className="">Stock</label>
            <input
              type="text"
              placeholder="Enter your product status"
              className="w-full input input-sm text-sm border-gray-300"
              {...register("stock", { required: true })}
            />
          </fieldset>
          <fieldset>
            <label className="">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full input input-sm text-sm border-gray-300"
              {...register("email", { required: true })}
            />
          </fieldset>
          <fieldset className="mb-2 col-span-2">
            <label className="">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full input input-sm text-sm border-gray-300"
              {...register("fullName", { required: true })}
            />
          </fieldset>
          <button className="my-secondary-btn col-span-2">Add Item</button>
        </div>
      </form>
      <div className="border-red-800 w-[1100px]">
        <img className="pt-36" src={addImage} />
      </div>
    </div>
  );
};

export default AddCraft;

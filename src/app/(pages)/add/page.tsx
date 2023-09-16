"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddPage = () => {
  const { data: session, status } = useSession();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    price: 0,
    catSlug: ""
  });

  const [options, setOptions] = useState([]);
  const [option, setOption] = useState({
    title: "",
    additionalPrice: 0
  });
  const router = useRouter();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleChangeOption = (e) => {
    setOption((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(options)
    console.log(option)
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("https://restaurant-app.vercel.app/api/products", {
        method: "POST",
        body: JSON.stringify({
          ...inputs,
          options
        })
      });
      const data = await res.json();
      router.push(`/product/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-lg flex flex-col flex-wrap gap-4 p-8"
    >
      <h1>Add page</h1>
      <div className="flex flex-col w-full g-2">
        <label>title</label>
        <input
          onChange={(e) => handleChange(e)}
          className="ring-2 ring-red-500 text-black"
          type="text"
          name="title"
        />
      </div>
      <div className="flex flex-col w-full g-2">
        <label>description</label>
        <input
          onChange={(e) => handleChange(e)}
          className="ring-2 ring-red-500 text-black"
          type="text"
          name="description"
        />
      </div>
      <div className="flex flex-col w-full g-2">
        <label>price</label>
        <input
          onChange={(e) => handleChange(e)}
          className="ring-2 ring-red-500 text-black"
          type="number"
          name="price"
        />
      </div>
      <div className="flex flex-col w-full g-2">
        <label>Category</label>
        <input
          onChange={(e) => handleChange(e)}
          className="ring-2 ring-red-500 text-black"
          type="text"
          name="catSlug"
        />
      </div>
      <div>
        <label>Options</label>
        <div>
          <input
            onChange={(e) => handleChangeOption(e)}
            className="ring-2 ring-red-500 text-black"
            type="text"
            placeholder="title"
            name="title"
          />
          <input
            onChange={(e) => handleChangeOption(e)}
            className="ring-2 ring-red-500 text-black"
            type="text"
            placeholder="title"
            name="additionalPrice"
          />
        </div>
        <button
          type="button"
          onClick={() => setOptions((prev) => [...prev, option])}
        >
          Add option
        </button>
        <div className=" flex flex-col items-start">
          {options.map((option) => (
            <div
              className="cursor-pointer flex p-2 gap-5 border-2 border-white "
              onClick={() =>
                setOptions((prev) =>
                  prev.filter((item) => item.title !== option.title)
                )
              }
              key={option.title}
            >
              <span>{option.title}</span>
              <span>${option.additionalPrice}</span>
            </div>
          ))}
        </div>
      </div>
      <button type="submit" className="bg-red-400 py-2">
        Submit
      </button>
    </form>
  );
};

export default AddPage;

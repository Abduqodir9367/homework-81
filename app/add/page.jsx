"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const Add = () => {
  const [values, setValues] = useState({
    name: "",
    brand: "",
    price: "",
    code: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products",
        values
      );
      let data = await res.data;
      console.log(data);
      handleSearch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `https://654503825a0b4b04436d735b.mockapi.io/api/v1/Students/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="ml-96">
      <form
        className=" mt-28 flex flex-col gap-3 "
        
      >
        <div className="mt-4 flex gap-3 items-center">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control border outline-none w-96 h-11"
            name="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            id="name"
          />
        </div>
        <div className="flex gap-3 mt-4 items-center">
          <label htmlFor="brand" className="form-label">
          Brand
          </label>
          <input
            type="text"
            className="form-control border outline-none w-96 h-11"
            name="brand"
            value={values.brand}
            onChange={(e) => setValues({ ...values, brand: e.target.value })}
            id="brand"
          />
        </div>
        <div className="flex gap-3 mt-4 items-center">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control border outline-none w-96 h-11"
            name="price"
            value={values.price}
            onChange={(e) => setValues({ ...values, price: e.target.value })}
            id="price"
          />
        </div>
        <select
          className="form-select mt-4 w-20 ml-14"
          name="code"
          value={values.code}
          onChange={(e) => setValues({ ...values, code: e.target.value })}
          id="code"
        >
          <option value="junior">junior</option>
          <option value="middle">middle</option>
          <option value="senior">senior</option>
        </select>
        <button
          type="submit"
          className="btn btn-primary mt-4 "
          onClick={(e) => handleSubmit(e)}
        >
          <Link href={"/"} className="border">
            Submit
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Add;

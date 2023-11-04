"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchSearchPosts();
  };

  const fetchSearchPosts = async () => {
    try {
      let res = await axios.get(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products?search=${searchQuery}`
      );
      let data = await res.data;
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSearchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/${id}`
      );
    } catch (error) {
      console.log(error);
    }
    // location.reload();
  };
  return (
    <div className="Home mt-20">
      <div className="container">
        <div></div>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-3 outline-none border-2 rounded-md"
            type="text"
            placeholder="Search Users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[#333333] text-white py-2 rounded-md mt-5 hover:bg-white hover:text-[#333333] hover:transition-[0.3s] transition-[0.3s] border-2"
          >
            Search
          </button>
        </form>
        <div className="users">
          {users.map((ps) => (
            <div className="user" key={ps.id}>
              <img src={ps.image} alt="Error" />
              <h3 className="mx-[3.4rem] text-[1.5rem]">{ps.name}</h3>
            <div className="btns flex items-center ">  <Link href={`${ps.id}`}>
                <button className="px-[1.4rem] py-[0.5rem] mx-[4.5rem] text-white my-5 bg-[#333333] border-2 text-800 hover:bg-white hover:border-2 hover:text-black transition-[0.3s] hover:transition-[0.3s]">
                  Edit
                </button>
              </Link>
              <button className="border" onClick={() => handleDelete(ps.id)}>
                Delete
              </button></div>
            </div>
          ))}
        </div>

        {users.length < 1 && (
          <div className="free">
            <h2>Вы пока не создали ни одного товара</h2>
            <img src="./free.png" alt="img" />
            <Link href={"/add"}>
              <button className="add">Создать первый товар</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

import { Link, useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { useState } from "react";
import UseAuth from "../hooks/UseAuth";

const AllArtCraft = () => {
  const {user} = UseAuth();
  const all = useLoaderData();
  const [allArtCraft, setAllArtCraft] = useState(all)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://painting-server-wheat.vercel.app/craft_items/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = all?.filter((item) => item._id !== id);
        setAllArtCraft(remaining);
        
      });
        Swal.fire({
          title: "Deleted!",
          text: "Craft item has been deleted.",
          icon: "success"
        });
      }
    });
  };

  return (
    <div className=" md:px-10">
      <h2 className="text-3xl font-semibold text-center my-8">
        All Art Craft Items
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>User Name</th>
              <th>Item Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Customization</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allArtCraft.map((item) => (
              <tr key={item._id}>
                <th>{item.user_name}</th>
                <td>{item.item_name}</td>
                <td>{item.stock_status}</td>
                <td>${item.price}</td>
                <td>{item.customization}</td>
                <td>
                  <Link to={`/view_details/${item._id}`}>
                    <button className="btn bg-[#ff9276] text-white hover:bg-[#fd6e4b]">
                      View Details
                    </button>
                  </Link>
                </td>
                <td>
                  {
                    (user?.email === "monzil246@gmail.com") ? 
                    <button onClick={() => handleDelete(item._id)} className="btn text-[#ff9276] text-3xl hover:bg-[#ffe7e1]">
                  <MdDelete />
                  </button> :
                  <p>Admins only</p>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtCraft;

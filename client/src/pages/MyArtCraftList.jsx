import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const MyArtCraftList = () => {
  const { user } = UseAuth();
  const [myItems, setMyItems] = useState([]);
  console.log(user?.email);
  console.log(myItems);
  useEffect(() => {
    fetch(`https://painting-server-wheat.vercel.app/craft_items/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyItems(data);
      });
  }, []);

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
        const remaining = myItems?.filter((item) => item._id !== id);
        setMyItems(remaining);
        
      });
        Swal.fire({
          title: "Deleted!",
          text: "Craft item has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const filter = (value1,value2) => {

    setMyItems([...myItems].sort((a, b) => {
      if (a.customization === value1 && b.customization === value2) {
          return -1; // "yes" age 
      } else if (a.customization === value2 && b.customization === value1) {
          return 1; // "no" pore
      } else {
          return 0; // 
      }
  }))
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-5">
        My Art Craft List
      </h2>
      <div className="w-full flex justify-end my-4">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#ff7c5c] text-white hover:bg-[#fd6e4b]">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={() => filter("Yes", "No")}>Yes</button>
            </li>
            <li>
              <button onClick={() => filter("No", "Yes")}>No</button>
            </li>
          </ul>
        </details>
      </div>
      {myItems?.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {myItems?.map((item) => (
            <div
              key={item._id}
              className="card bg-base-100 border p-6 hover:scale-95 transition-all duration-300"
            >
              <figure className="">
                <img
                  src={item.photo}
                  alt="Shoes"
                  className="rounded-xl h-60 w-full"
                />
              </figure>

              <div className="mt-4 flex flex-col">
                <h2 className="card-title">{item.item_name}</h2>
                <p className="my-2 h-[80px]">{item.short_description}</p>
                <div className="my-2 space-y-1">
                  <p className="font-medium">
                    <span className="font-semibold">Processing Time: </span>
                    {item.processing_time}
                  </p>
                  <p className="font-medium">
                    <span className="font-semibold">Customizable: </span>
                    {item.customization}
                  </p>
                  <p className="font-medium">
                    <span className="font-semibold">Rating: </span>
                    {item.rating}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 my-4">
                  <span className="bg-[#fff2ee] py-2 px-6 text-[#E76F51] font-semibold text-lg rounded-full w-fit">
                    ${item.price}
                  </span>
                  <span className="bg-[#fff2ee] py-2 px-6 text-[#E76F51] font-medium text-lg rounded-full w-fit">
                    {item.stock_status}
                  </span>
                </div>

                <div className=" flex gap-6 align-bottom mt-auto">
                  <Link to={`/update_item/${item._id}`}>
                    <button className="btn bg-[#ff7c5c] text-white hover:bg-[#fd6e4b] px-6 ">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-[#ff7c5c] text-white hover:bg-[#fd6e4b] px-6"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl font-semibold text-center mt-60 h-[25vh]">
          No items added yet
        </p>
      )}
    </div>
  );
};

export default MyArtCraftList;


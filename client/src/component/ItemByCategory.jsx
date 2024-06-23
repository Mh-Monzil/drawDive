import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const ItemByCategory = () => {
    const item = useLoaderData();
    const categoryName = item.subcategory_name;
    console.log(categoryName);

    const [itemsByCategoryName, setItemsByCategoryName] = useState([]);
    const [allSubCategories, setAllSubCategories] = useState([]);
    
    useEffect(() => {
        fetch("https://painting-server-wheat.vercel.app/craft_items")
        .then(res => res.json())
        .then(data => {
            setAllSubCategories(data);
        })
    },[])

    useEffect(() => {
        const remaining = allSubCategories?.filter(category => category.subcategory_name === categoryName);
    console.log(remaining , "remaining categories");
    setItemsByCategoryName(remaining)
    }, [allSubCategories])

    return (
        <div>
            <h2 className="text-center font-semibold text-3xl my-6">{categoryName}'s Art and Craft</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:p-12">
            {
                itemsByCategoryName?.map(item => 
                    <div
                    key={item._id}
                    className="card bg-base-100 border p-3 md:p-6  transition-all duration-300"
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
                      <div className="flex flex-col md:flex-row gap-5 my-4">
                        <span className="bg-[#fff2ee] py-2 px-6 text-[#E76F51] font-semibold text-lg rounded-full w-fit">
                          ${item.price}
                        </span>
                        <span className="bg-[#fff2ee] py-2 px-6 text-[#E76F51] font-medium text-lg rounded-full w-fit">
                          {item.stock_status}
                        </span>
                      </div>
      
                      <div className=" flex gap-6 align-bottom mt-auto">
                        <Link to={`/view_details/${item._id}`}>
                          <button className="btn bg-[#ff7c5c] text-white hover:bg-[#fd6e4b] px-6 ">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>)
            }
            </div>
        </div>
    );
};

export default ItemByCategory;
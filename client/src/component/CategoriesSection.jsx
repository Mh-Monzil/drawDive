import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'


const CategoriesSection = () => {
    const [subCategories, setSubCategories] = useState([]);
    
    useEffect(() => {
        fetch("https://painting-server-wheat.vercel.app/categories")
        .then(res => res.json())
        .then(data => {
            setSubCategories(data)
        })
    })

    

  return (
    <div className="mt-12 md:mt-24">
      
      <h2 className="text-4xl font-semibold text-center"> All Art & Craft Categories</h2>
      <p className="font-medium text-center max-w-[650px] mx-auto my-6">Discover a range of handmade items, from unique jewelry and textiles to custom paintings and sculpted ceramics, perfect for creative enthusiasts.</p>
      <div 
   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:p-6">
        {
            subCategories.map(subCategory => <Link to={`/categories/${subCategory._id}`} data-tooltip-id="my-tooltip"
            data-tooltip-content="Click for more..."
            data-tooltip-place="top" key={subCategory._id} className="card bg-base-100 border hover:scale-105 transition-all duration-500 cursor-pointer">
              <Tooltip id="my-tooltip" />
            <figure className="">
              <img src={subCategory.photo} alt="Shoes" className="rounded-xl h-72 w-full" />
            </figure>
            <div className=" flex flex-col py-3 px-5">
              <h2 className="card-title text-2xl text-[#E76F51]">{subCategory.subcategory_name}</h2>
              <p className="my-3 h-[100px]">{subCategory.key_elements}</p>
            </div>
          </Link>)
        }
      </div>
    </div>
  );
};

export default CategoriesSection;

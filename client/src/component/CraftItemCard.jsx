import { Link } from "react-router-dom";

const CraftItemCard = ({ item }) => {
  const {
    _id,
    item_name,
    subcategory_name,
    customization,
    photo,
    price,
    processing_time,
    rating,
    short_description,
    stock_status,
  } = item;
  return (
    <div className="card bg-base-100 border p-4 md:p-6 hover:scale-105 transition-all duration-500">
      <figure className="">
        <img src={photo} alt="Shoes" className="rounded-xl h-60 w-full" />
      </figure>
      <div className="mt-4 flex flex-col">
        <h2 className="card-title">{item_name}</h2>
        <p className="my-2 h-[100px]">{short_description}</p>
        <div className="flex flex-col sm:flex-row gap-5 my-4">
          <span className="bg-[#fff2ee] py-2 px-6 text-[#E76F51] font-semibold text-lg rounded-full w-fit">
            ${price}
          </span>
          <span className="bg-[#fff2ee] py-2 px-6 text-[#E76F51] font-medium text-lg rounded-full w-fit">
            {stock_status}
          </span>
        </div>
        <div className="card-actions">
          <Link to={`/view_details/${_id}`}>
            <button className="btn bg-[#ff7c5c] text-white hover:bg-[#fd6e4b]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CraftItemCard;

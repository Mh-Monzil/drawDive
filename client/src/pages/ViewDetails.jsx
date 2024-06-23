import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const itemDetails = useLoaderData();
  console.log(itemDetails);
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
  } = itemDetails;
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-6xl mx-auto h-fit md:h-[53vh] p-4 md:p-8 rounded-2xl mt-5 md:mt-12 bg-base-100 shadow-xl">
      <div className="w-full md:w-1/2 h-full ">
        <img className="rounded-2xl h-full w-full" src={photo} alt="Album" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#E76F51]">{item_name}</h2>
        <p className="text-xl font-medium py-2">Category: {subcategory_name}</p>
        <p className="mt-2 md:mt-4 font-medium text-lg">{short_description}</p>
        <div className="my-3 md:my-5 space-y-1">
          <p className="font-medium">
            <span className="font-semibold">Processing Time: </span>
            {processing_time}
          </p>
          <p className="font-medium">
            <span className="font-semibold">Customizable: </span>
            {customization}
          </p>
          <p className="font-medium">
            <span className="font-semibold">Rating: </span>
            {rating}
          </p>
          <p className="font-medium">
            <span className="font-semibold">Status: </span>
            {stock_status}
          </p>
        </div>
        <p className="font-bold text-xl md:text-2xl text-[#E76F51]">
          <span className="">Price: </span>${price}
        </p>
        <div className="card-actions mt-6 ">
          <Link to="/">
            <button className="btn bg-[#ff7c5c] text-white hover:bg-[#fd6e4b]">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

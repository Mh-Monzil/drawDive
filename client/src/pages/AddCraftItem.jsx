import UseAuth from "../hooks/UseAuth";
import Swal from 'sweetalert2'

const AddCraftItem = () => {
    const {user} = UseAuth();
    console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const customization = form.customization.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const processing_time = form.processing_time.value;
    const rating = form.rating.value;
    const short_description = form.short_description.value;
    const stock_status = form.stock_status.value;
    const user_name = user.displayName;
    const user_email = user.email;

    form.reset();

    const artCraftInfo = { item_name, subcategory_name, customization, photo, price, processing_time, rating, short_description, stock_status, user_name, user_email};

    fetch("https://painting-server-wheat.vercel.app/craft_items", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(artCraftInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Craft Item Added Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
    })
  };


  return (
    <div className="text-center">
      <h2 className="font-semibold text-4xl my-6">Add Craft Item</h2>
      <p className="font-medium">
        Add and sell your unique art and craft items on our platform, connecting
        creators with buyers worldwide
      </p>
      <div className="p-4">
        <form
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          onSubmit={handleSubmit}
          className="space-y-4 lg:w-3/5 my-12 h-full mx-auto p-6 md:p-10  backdrop-blur-sm rounded-lg  shadow-md shadow-red-100"
        >
          <div className="flex justify-center mb-2">
            <span className="text-center text-2xl font-bold border-b-[3px] border-b-[#E76F51] px-4">
              Add your art & craft
            </span>
          </div>
          <div className="md:grid md:grid-cols-2 gap-5">
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Item Name</span>
              </label>
              <div className="relative">
                <input
                  type="name"
                  name="item_name"
                  placeholder="Enter your name"
                  className=" input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  required
                />
              </div>
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Category Name</span>
              </label>
              {/* <div className="relative"> */}
              <select
                id="country"
                name="subcategory_name"
                className=" w-full pr-10 p-2.5 text-base border-2 border-red-100 focus:outline-none  focus:border-red-300 sm:text-sm rounded-md font-semibold"
                required
              >
                <option className="font-semibold" value="Landscape Painting">Landscape Painting</option>
                <option className="font-semibold" value="Portrait Drawing">Portrait Drawing</option>
                <option className="font-semibold" value="Watercolor Painting">Watercolour Painting</option>
                <option className="font-semibold" value="Oil Painting">Oil Painting</option>
                <option className="font-semibold" value="Charcoal Sketching">Charcoal Sketching</option>
                <option className="font-semibold" value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
              {/* </div> */}
            </div>
            {/* input  */}
            <div className="col-span-2">
              <label className="label">
                <span className="font-semibold">Short Description</span>
              </label>
              <div className="relative">
                <input
                  type="name"
                  name="short_description"
                  placeholder="Enter your name"
                  className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  required
                />
              </div>
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Price</span>
              </label>
              <div className="relative">
                <input
                  type="name"
                  name="price"
                  placeholder="Enter your name"
                  className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  required
                />
              </div>
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Rating</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="rating"
                  placeholder="Enter your name"
                  className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  required
                />
              </div>
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Image URL</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your name"
                  className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  required
                />
              </div>
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Customization</span>
              </label>
              {/* <div className="relative"> */}
              <select
                id="country"
                name="customization"
                className=" w-full pr-10 p-2.5 text-base border-2 border-red-100 focus:outline-none  focus:border-red-300 sm:text-sm rounded-md font-semibold"
                required
              >
                <option className="font-semibold" value="Yes">Yes</option>
                <option className="font-semibold" value="No">No</option>
              </select>
              {/* </div> */}
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Processing Time</span>
              </label>
              <div className="relative">
                <input
                  type="name"
                  name="processing_time"
                  placeholder="Enter your name"
                  className="input border-2 border-red-100 focus:border-red-300 focus:outline-none font-medium w-full"
                  required
                />
              </div>
            </div>
            {/* input  */}
            <div>
              <label className="label">
                <span className="font-semibold">Stock Status</span>
              </label>
              {/* <div className="relative"> */}
              <select
                name="stock_status"
                className=" w-full pr-10 p-2.5 text-base border-2 border-red-100 focus:outline-none  focus:border-red-300 sm:text-sm rounded-md font-semibold"
                required
              >
                <option className="font-semibold" value="In Stock">In Stock</option>
                <option className="font-semibold" value="Made to Order">Made to Order</option>
              </select>
              {/* </div> */}
            </div>
          </div>

          <div className="form-control mt-4">
            <button type="submit" className="btn bg-[#E76F51] text-white font-semibold text-xl hover:bg-[#e25f3f] border border-[@#E76F51] hover:border-[#E76F51 mt-2">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;

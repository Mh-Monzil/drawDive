import { useEffect, useState } from "react";
import CraftItemCard from "./CraftItemCard";


const CraftItemsSection = () => {
    const [craftItems, setCraftItems] = useState([]);
    useEffect(() => {
        fetch("https://painting-server-wheat.vercel.app/craft_items")
        .then(res => res.json())
        .then(data => {
            setCraftItems(data.slice(0,6));
        })
    },[])
    return (
        <div className="mt-12 md:mt-24">
            <h2 className="text-4xl font-semibold text-center">Crafts & Creativity</h2>
            <p className="font-medium text-center max-w-[650px] mx-auto my-6">Explore our vibrant collection of craft items, perfect for DIY enthusiasts looking to create unique, handmade art.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:p-6">
                {craftItems.map(item => <CraftItemCard key={item._id} item={item} />)}
            </div>
        </div>
    );
};

export default CraftItemsSection;





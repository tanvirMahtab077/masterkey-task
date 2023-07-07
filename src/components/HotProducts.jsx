import { useEffect, useState } from "react";
import axios from "axios";
export default function HotProducts() {
  const [hotProducts, setHotProducts] = useState([])
  useEffect(() => {
    const url = "https://api.hiring.masterkey.tech/api/v1/products";
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        if (result) {
          const products = result.data.products[0].productData
          const filteredProducts = products.filter(hotProduct=> hotProduct.product_type == 'hot deals for you')
          setHotProducts(filteredProducts);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
    
  return (
    <div className="flex mt-10 gap-5">
      <div className="flex w-[548px] flex-col shrink-0 font-pop text-[96px] text-black font-[300] leading-[100px] items-center">
        <div className="">We picked </div>
        <div>some <span className="text-[#FFAE5D] font-bold">cool</span> </div>
        <div><span className="text-[#FFAE5D] font-bold">things</span> for </div>
        <div>you! </div>t{" "}
      </div>
      <div className="flex flex-wrap gap-5">
        {hotProducts.map((product,indx)=>{
          return (
            <div className="font-pop" key={indx}>
              <img className="w-[235px] h-[235px]" src={product.product_img} alt="" />
              <h4 className="text-[16px] font-[500] w-[236px]">{product.product_name}</h4>
              <p className="">{product.product_price}</p>
            </div>
          )
        })}

      </div>
    </div>
  );
}

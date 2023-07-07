import locationIcon from "../assets/icons/Group.svg";
import searchIcon from '../assets/icons/search.png'
export default function MiddleNav() {
  return (
    <div className="flex justify-between mt-5">
      <div className="flex items-center justify-center gap-[10px] p-[16px] bg-[#FFAE5D] rounded-[20px]">
        <img src={locationIcon} alt="" />
        <p className="">Dhaka,1212</p>
      </div>
      <div className="flex w-[622px] p-[16px] justify-between items-center border rounded-[20px] font-pop">
            <p className="text-[#808080] text-[16px] font-[500] leading-normal">Search</p>
            <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}

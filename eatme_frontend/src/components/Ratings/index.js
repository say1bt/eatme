import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Ratings = () => {
  return <button className="inline-flex gap-3 items-center mt-4 text-left">
          <svg height="24" width="24" fill="#4d7c1b" viewBox="0 0 24 24" role="presentation" focusable="false" class="ccl-2608038983f5b413 ccl-24025c233c77af94"><path d="M12 1L9 9H2L7 14.0001L5 21L12 17.0001L19 21L17 14.0001L22 9H15L12 1Z"></path></svg>
      <div className="flex-1">
        <div className="text-[#4d7c1b]">4.7 Excellent</div>
        <div className="text-[#585c5c] text-sm">See all 500 reviews</div>
      </div>
      <ArrowForwardIosOutlinedIcon fontSize="16" className="text-[#00ccbc]" />
    </button>
  
};

export default Ratings;

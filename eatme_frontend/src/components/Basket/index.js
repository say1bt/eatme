const Basket = () => {
  return (
    <div className="w-[30%] sticky top-[25%] 3xl:top-[20%] z-50">
      <div className="w-full bg-white border flex flex-col justify-center items-center text-center border-gray-200 rounded pt-8 px-4 pb-4 text-[#abadad]">
        <svg
          height="48"
          width="48"
          fill="currentColor"
          viewBox="0 0 24 24"
          role="presentation"
          focusable="false"
          class="ccl-2608038983f5b413 ccl-73d4ddfccb057499 ccl-4475ede65a9c319d"
        >
          <path d="M14 15V13H10V15H14ZM15 15H19.1872L19.7172 13H15V15ZM14 12V10H15V12H19.9822L20.5122 10H3.48783L4.01783 12H9V10H10V12H14ZM14 18V16H10V18H14ZM15 18H18.3922L18.9222 16H15V18ZM9 15V13H4.28283L4.81283 15H9ZM9 18V16H5.07783L5.60783 18H9ZM7 8V3H17V8H23L20 20H4L1 8H7ZM9 8H15V5H9V8Z"></path>
        </svg>
        <p className=" pt">Your basket is empty</p>
        <button className="bg-[#e2e5e5] w-full py-3 text-[#abadad] font-bold mt-10">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default Basket;

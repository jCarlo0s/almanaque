import Image from "next/image";

const Loader = () => {
  return (
    <div className='fixed z-50 w-full h-full bg-white bg-opacity-50 top-0 left-0 flex justify-center items-center'>
      <Image src='/loader.gif' alt='loading' width={50} height={50} />
    </div>
  );
};

export default Loader;
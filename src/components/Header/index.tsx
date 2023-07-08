import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <header className="px-2 lg:px-10 py-2 flex items-center justify-between border-b shadow">
      <div className='font-poppins uppercase font-bold text-2xl'>
        <p className='text-sky-700'>El Almanaque</p>
      </div>
      <div className="relative w-[70px] h-[40px]">
        <Image
          data-testid="nba-logo"
          src='/logo/nba.png'
          alt='Almanaque, los juegos más relevantes de la temporada 2019 - 2020 de la NBA'
          fill
        />
      </div>
    </header>
  );
};

export default Header;
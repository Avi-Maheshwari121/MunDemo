const Header = () => {
  return (
    <header className="flex items-center justify-around py-4 px-8 shadow-md">
      <div className="flex items-center space-x-2 pl-10">
        <span className="text-pink-500 text-5xl font-bold pt-3 ">*</span>
        <h1 className="text-xl font-semibold">Acme</h1>
      </div>

      <nav className="hidden md:flex text-gray-500 space-x-20 pr-10">
        <a href="#" className="hover:text-black transition">
          Home
        </a>
        <a href="#" className="hover:text-black transition">
          Shop
        </a>
        <a href="#" className="hover:text-black transition">
          About
        </a>
        <a href="#" className="hover:text-black transition">
          Contact
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Header;

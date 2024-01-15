const Header = () => {
  return (
    <header className="bg-white p-4 border">
      <button className="me-2 py-2 px-4">
        <i className="fa-solid fa-bars"></i>
      </button>
      <input type="search" className="border border-black py-2 px-4 rounded-md" placeholder="Search" />
    </header>
  );
};

export default Header;

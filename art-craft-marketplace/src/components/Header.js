function Header({ setCurrentPage }) {
  return (
    <header>
      <h1>ART & CRAFT MARKETPLACE</h1>

      <nav>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("about")}>About</button>
        <button onClick={() => setCurrentPage("checkout")}>Checkout</button>
      </nav>
    </header>
  );
}

export default Header;
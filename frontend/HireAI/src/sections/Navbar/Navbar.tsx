import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-slate-800/60 text-amber-50 flex justify-between mb-16">
      <Link to={"/"}>
        <div className="m-4 flex items-center justify-center text-3xl font-semibold gap-2">
          <img
            src="../src/assets/chatbot.png"
            alt="HireAI Logo"
            className="w-13"
          />
          <h2>HireAI</h2>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;

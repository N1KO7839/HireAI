import Button from "../../components/Button";
const Navbar = () => {
  return (
    <nav className="bg-slate-800/60 text-amber-50 flex justify-between mb-16">
      <div className="m-4 flex items-center justify-center text-3xl font-semibold gap-2">
      <img src="../src/assets/chatbot.png" alt="HireAI Logo" className="w-14" />
      <h2>HireAI</h2>
      </div>
      <Button text="Get Started" height="13" width="w-40" action={() => {

      }}/>
    </nav>
  );
};

export default Navbar;

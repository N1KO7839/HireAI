function Footer() {
  return (
    <footer className="flex justify-between items-center bg-slate-800/60 text-amber-50 mt-12 pt-1">
      <div className="m-4 flex items-center justify-center text-2xl font-semibold gap-2">
        <img
          src="../src/assets/chatbot.png"
          alt="HireAI Logo"
          className="w-10"
        />
        <h1>HireAI</h1>
      </div>
      <h3 className="text-gray-400/80 m-4">&copy; 2025 HireAI. All rights reserved.</h3>
      
    </footer>
  );
}

export default Footer;

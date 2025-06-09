interface props {
  text?: string;
  icon?: string;
  height: string;
  width: string;
  action: () => void;
}

const Button = ({ text, icon, height, width, action }: props) => {
  return (
    <button
      onClick={() => action()}
      className={`flex justify-center items-center text-center bg-indigo-600 hover:bg-blue-700/60 transition-all text-xl ${height} ${width} border-0 rounded-lg m-4`}
    >
      {text}
      {icon ? <img className="w-6 h-6" src={`${icon}`} alt="Delivery button" /> : ""}
    </button>
  );
};

export default Button;

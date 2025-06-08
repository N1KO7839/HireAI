interface props{
    text: string,
    height: string,
    width: string,
    action: () => void; 
}

const Button = ({text, height, width,action} : props)  => {
  return (
    <button onClick={() => action()} className={`bg-indigo-600 hover:bg-blue-700/60 transition-all text-xl h-${height} ${width} border-0 rounded-lg m-4`}>{text}</button>

  )
}

export default Button
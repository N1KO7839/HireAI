interface props{
    messageText: string;
    index: number;
}
const ChatMessage = ({messageText, index}: props) => {
  return (
    <div className={index % 2 === 0 ? "bg-slate-600 rounded-b-4xl rounded-l rounded-r-4xl break-words whitespace-pre-wrap w-1/2 p-3" : "bg-blue-500 rounded-r rounded-l-4xl rounded-b-4xl break-words whitespace-pre-wrap w-1/2 p-3 ml-auto"}>{messageText}</div>
  )
}

export default ChatMessage
import ChatBot from "./ChatBot"
const Chat = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center text-amber-50 py-28">
        <h2 className="text-5xl font-semibold">Try Our AI Interviewer</h2>
        <h3 className="text-3xl opacity-60 pt-4">Experience the power of AI-driven job preparation</h3>
        <ChatBot/>
    </section>
  )
}

export default Chat
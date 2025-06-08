import Button from "../../components/Button";
const Hero = () => {
  return (
    <main className="text-amber-50 text-center m-4">
      <div className="flex items-center justify-center text-6xl font-semibold">
        <h1>Ace Your Next&nbsp;</h1>
        <h1 className="text-indigo-300">Job Interview</h1>
      </div>
      <h2 className="text-3xl mt-6">
        Practice with our AI-powered chatbot that mirrors real interview scenarios and adapts to answers.
      </h2>
      <h3 className="text-3xl mt-2 mb-4">Get instant, personalized feedback to improve faster.</h3>
      <Button text="Start Interview" height="14" width="w-52" action={() => {}}/>
    </main>
  );
};

export default Hero;

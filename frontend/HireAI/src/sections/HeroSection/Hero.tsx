import Button from "../../components/Button";

const Hero = () => {
  return (
    <main className="flex flex-col justify-center items-center text-amber-50 text-center mx-2 sm:mx-4 md:mx-8 py-20 sm:py-32 md:py-52">
      <div className="flex flex-col sm:flex-row items-center justify-center text-4xl sm:text-5xl md:text-6xl font-semibold space-y-4 sm:space-y-0 sm:space-x-2">
        <h1>Ace Your Next&nbsp;</h1>
        <h1 className="text-indigo-300">Job Interview</h1>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 mx-auto">
        Practice with our AI-powered chatbot that mirrors real interview scenarios and adapts to answers.
      </h2>
      <h3 className="text-xl sm:text-2xl md:text-3xl mt-2 mb-4 sm:mb-6 max-w-3xl mx-auto">
        Get instant, personalized feedback to improve faster.
      </h3>
      <Button
        text="Start Interview"
        height="h-12 sm:h-14"
        width="w-44 sm:w-52"
        action={() => {}}
      />
    </main>
  );
};

export default Hero;
import HowItWorksPart from "./HowItWorksPart";

const HowItWorks = () => {
  return (
    <section className="bg-slate-800/60 text-amber-50 text-center py-22 sm:py-32 md:py-40">
      <div className="mx-4 sm:mx-6 md:mx-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          How It Works
        </h2>
        <h4 className="text-lg sm:text-xl md:text-2xl mt-2 sm:mt-4 max-w-3xl mx-auto">
          See how easy landing your dream job can be
        </h4>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 mt-8 sm:mt-12">
          <HowItWorksPart
            partNumber={1}
            mainText="Chat with AI"
            subText="Pick your role and give your best answers. AI handles the rest."
          />
          <HowItWorksPart
            partNumber={2}
            mainText="Get Rated"
            subText="At the end, receive a score from the AI that shows how well you did."
          />
          <HowItWorksPart
            partNumber={3}
            mainText="Land the Job"
            subText="Apply with full confidence by using your own interview skills."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

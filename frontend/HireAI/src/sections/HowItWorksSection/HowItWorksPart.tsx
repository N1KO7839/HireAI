interface Props {
  partNumber: number;
  mainText: string;
  subText: string;
}

const HowItWorksPart = ({ partNumber, mainText, subText }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center w-full sm:w-1/3 mt-8 sm:mt-10">
      <div className="flex items-center justify-center bg-blue-600 text-amber-50 text-lg sm:text-xl md:text-2xl font-semibold rounded-full h-12 w-12 sm:h-14 sm:w-14">
        {partNumber}
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">
        {mainText}
      </h3>
      <h4 className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-sm mx-auto">
        {subText}
      </h4>
    </div>
  );
};

export default HowItWorksPart;
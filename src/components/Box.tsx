interface BoxProps {
  index: number;
  text: string;
  title: string;
  img: string;
}
const Box: React.FC<BoxProps> = ({ text, title, img, index }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-8 relative flex flex-col justify-center items-center md:items-start ${
        index === 1
          ? "md:translate-y-8"
          : index === 2
          ? "md:translate-y-16"
          : ""
      }`}
    >
      <div className="w-16 h-16 rounded-full bg-DarkViolet flex justify-center items-center p-4 absolute -top-[32px] z-20">
        <img src={img} alt={title} />
      </div>
      {index === 1 && (
        <>
          <div className="bg-Cyan absolute w-2 h-16 -top-16 md:w-16 md:h-2 md:top-[40%] md:-left-16" />
          <div className="bg-Cyan absolute w-2 h-16 -bottom-16 md:w-16 md:h-2 md:top-[40%] md:-right-16" />
        </>
      )}

      <h2 className="pt-8 pb-4 text-lg font-semibold text-VeryDarkBlue">
        {title}
      </h2>
      <p className="text-GrayishViolet text-center font-light md:text-start">{text}</p>
    </div>
  );
};
export default Box;

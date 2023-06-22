import { texts } from "../helper/text";
import Box from "./Box";
const StatSection = () => {
  return (
    <section className="bg-slate-200 py-16 md:pb-[120px] px-8 md:px-16 lg:px-32">
      <article className="flex flex-col items-center justify-center text-center gap-4 mb-20 md:w-[35%] mx-auto md:px-8">
        <h2 className="text-3xl font-semibold text-DarkViolet">Advanced Statistics</h2>
        <p className="text-GrayishViolet">
          Track how you links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </article>
      <div className="flex flex-col md:flex-row gap-16">
        {texts.map((text, index) => (
          <Box key={text.id} {...text} index={index}/>
        ))}
      </div>
    </section>
  );
};
export default StatSection;


const HeroSection = () => {
  return (
    <section className="pl-8 md:pl-16 lg:pl-32 flex flex-col md:flex-row-reverse md:justify-between py-8">
      <div className="bg-bgWorking w-full h-[400px] bg-cover bg-left md:bg-right md:h-[450px] md:bg-contain bg-no-repeat" />

      <article className="flex flex-col justify-center items-center gap-y-6 text-center md:items-start md:text-start pr-8 mt-6">
        <h2 className="text-5xl md:text-6xl font-bold text-DarkViolet">
          More than just <br />
          shorter links
        </h2>
        <p className="text-GrayishViolet">
          Build your brands's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="px-10 py-3 bg-Cyan rounded-3xl font-semibold text-white relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-Gray/20 hover:before:rounded-3xl">Get Started</button>
      </article>
    </section>
  );
};
export default HeroSection;

const SectionHeading = ({ title, text, width }: { title: string; text: string , width: string}) => {
  return (
    <>
      {/* heading */}
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl text-primary font-semibold">
          {title}
        </h1>
        {/* underline */}
        <div className={`bg-secondary h-2 ${width} mx-auto rounded-full mb-5`}></div>
        {/* description */}
        {text && <p className="md:w-1/2 mx-auto">{text}</p>}
      </div>
    </>
  );
};

export default SectionHeading;

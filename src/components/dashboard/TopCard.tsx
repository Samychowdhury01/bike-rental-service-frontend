const TopCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="bg-secondary p-5 rounded-lg flex-1 text-center">
      <h3 className=" text-xl lg:text-2xl font-semibold">{title}</h3>
      <p className="text-lg lg:text-xl">{text}</p>
    </div>
  );
};

export default TopCard;

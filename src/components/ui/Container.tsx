type TContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full max-w-7xl md:mx-auto p-5">{children}</div>
  );
};

export default Container;

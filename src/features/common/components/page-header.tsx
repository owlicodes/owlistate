type PageHeaderProps = {
  title: string;
};

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
};

interface IOption {
  children: React.ReactNode;
  className?: string;
}

export const McqOption = ({ className, children }: IOption) => {
  return <p className={className}>{children}</p>;
};

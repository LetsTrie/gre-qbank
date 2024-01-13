interface IPropType {
  index: number;
  type: string;
}

const IndexHeader = (props: IPropType) => {
  return (
    <p className="pt-2">
      <span className="list-index">{props.index}.</span>
      <span className="pl-3 list-index-type">{props.type}</span>
    </p>
  );
};

export default IndexHeader;

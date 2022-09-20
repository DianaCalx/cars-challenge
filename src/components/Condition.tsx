interface ConditionProp {
  condition: string;
}

const Condition = ({ condition }: ConditionProp) => {
  const getCondition = () => {
    switch (condition) {
      case 'A':
        return 'Salvage Title';
      case 'N':
        return 'New';
      default:
        return 'N/A';
    }
  };

  return <div>{getCondition()}</div>;
};

export default Condition;

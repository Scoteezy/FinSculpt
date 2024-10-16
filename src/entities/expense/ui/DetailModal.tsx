import { ExpenseWithTags } from "../model";

const DetailModal = ({expense}:{expense:ExpenseWithTags}) => {
  return (
    <div>{expense.id}</div>
  );
};

export default DetailModal;
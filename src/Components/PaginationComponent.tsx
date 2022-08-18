import { Pagination } from "antd";
interface Props {
  current: any;
  onPageChange: (page: number) => void;
  totalCount: number;
}
const PaginationComponent = ({ current, onPageChange, totalCount }: Props) => {
  return (
    <Pagination current={current} onChange={onPageChange} total={totalCount} />
  );
};
export default PaginationComponent;

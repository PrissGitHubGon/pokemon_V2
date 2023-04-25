import { ChildrenPropsInterface } from "../../entities/props-interface/childrenProps-interface";

const TableStat = ({ children }: ChildrenPropsInterface) => {
  return (
    <table className="table-auto mt-10 ">
      <thead>
        <tr>
          <th className="text-center px-2 text-sm sm:text-lg md:text-1xl">
            Résistances
          </th>
          <th className="text-center px-2  text-sm sm:text-lg md:text-1xl">
            Multiplicateur
          </th>
          <th className="text-center px-2  text-sm sm:text-lg md:text-1xl">
            Relation
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
export default TableStat;

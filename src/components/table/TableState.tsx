import React, { createContext, useContext, useState } from "react";

const Context = createContext({});
const { Provider } = Context;
const ActionContext = createContext({});
const { Provider: ActionProvider } = ActionContext;

export const useTableState: Function = () => useContext(Context) || {};
export const useTableActions: Function = () => useContext(ActionContext) || {};

const TableState = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [page, setPage] = useState(1);
  const [qte, setQte] = useState(5);
  const [count, setCount] = useState();
  const [cursor, setCursor] = useState(false);
  const [sort, setSort] = useState("name");
  const [filter, setFilter] = useState("");

  return (
    <ActionProvider
      value={{ setPage, setQte, setCount, setCursor, setSort, setFilter }}
    >
      <Provider value={{ page, qte, count, cursor, filter, sort }}>
        {children}
      </Provider>
    </ActionProvider>
  );
};

export default TableState;

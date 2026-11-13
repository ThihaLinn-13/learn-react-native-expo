import {
    createContext,
    use,
    useState,
    type PropsWithChildren
} from "react";

const CountContext = createContext<{
  count: number;
  increase: () => void;
  decrease: () => void;
}>({
  count: 0,
  increase: () => {},
  decrease: () => {},
});

export const CountProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);

  return (
    <CountContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => use(CountContext);

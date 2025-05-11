import { createContext, useContext, useRef } from "react";

const DataContext = createContext();

//* export context for consumers
export const useDataContext = () => useContext(DataContext);

//* export context for provider
export const DataContextProvider = ({ children }) => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const scrollTo = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const dataContext = {
    sectionRefs: {
      section1Ref,
      section2Ref,
      section3Ref,
      section4Ref,
      section5Ref,
      section6Ref,
    },
    scrollTo,
  };

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

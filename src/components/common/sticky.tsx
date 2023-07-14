import React from "react";

const App = (params: any) => {
  const ref = React.useRef();
  let [check, setCheck] = React.useState(true);
  const sticky = useStickyHeader(50);
  const headerClasses = `header ${sticky && check ? "sticky" : ""}`;
  // const { clientHeight } = ref;

  // const checkChange = (value:any) => {
  //   setCheck(value);
  // };

  return (
    <div>
      <header className={headerClasses}>Header</header>

      <Switch onCheck={setCheck} defaultValue={check}>
        Toggle Sticky
      </Switch>
    </div>
  );
};

const Switch: React.FC<any> = ({ children, defaultValue, onCheck }) => {
  const [check, setCheck] = React.useState(defaultValue);

  React.useEffect(() => {
    onCheck(check);
  });

  return (
    <div className="switch">
      <label>
        <input
          type="checkbox"
          onClick={() => setCheck(!check)}
          checked={check}
        />{" "}
        - {children}
      </label>
    </div>
  );
};

function useStickyHeader(offset = 0) {
  const [stick, setStick] = React.useState(false);

  const handleScroll = () => {
    setStick(window.scrollY > offset);
  };

  React.useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return stick;
}

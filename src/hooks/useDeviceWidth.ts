import { useState, useEffect } from "react";
import debounce from "../utils/debounce";

const useDeviceWidth = () => {
  const [breakpoint, setBreakpoint] = useState<string>("MOBILE");

  const updateBreakpoint = debounce(() => {
    let deviceWidth = window.innerWidth;
    if (deviceWidth < 490) {
      setBreakpoint("MOBILE");
    } else if (deviceWidth > 700) {
      setBreakpoint("DESKTOP");
    } else {
      setBreakpoint("TABLET");
    }
  }, 50);

  useEffect(() => {
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, [breakpoint]);

  return [breakpoint];
};
export default useDeviceWidth;

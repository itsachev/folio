import { useContext } from "react";

import LenisContext from "@/providers/lenisContext";

// Returns a ref, so `lenisRef.current` always holds the live Lenis instance.
function useLenis() {
  return useContext(LenisContext);
}

export default useLenis;

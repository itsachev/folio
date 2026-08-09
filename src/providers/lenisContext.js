import { createContext } from "react";

// Holds a ref to the current Lenis instance (null during route transitions
// while the previous instance has been destroyed and the next one hasn't
// mounted yet).
const LenisContext = createContext(null);

export default LenisContext;

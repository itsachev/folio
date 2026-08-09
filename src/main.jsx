import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "@fontsource/italiana/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@/styles/main.scss";

createRoot(document.getElementById("root")).render(<App />);

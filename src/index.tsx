import { Root, createRoot } from "react-dom/client";
import { App } from "./components/app/app";
import "./global.css";

const root: Root = createRoot(document.getElementById("root")!);
root.render(<App />);

import { Root, createRoot } from "react-dom/client";
import { App } from "./components/app";
import "./stylesheets/global.css";

const root: Root = createRoot(document.getElementById("root")!);
root.render(<App />);

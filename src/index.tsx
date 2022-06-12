import { Root, createRoot } from "react-dom/client";
import "./stylesheets/global.css";

const root: Root = createRoot(document.getElementById("root")!);
root.render(<h1>🌎 Hello, World!</h1>);

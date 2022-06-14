// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { Root, createRoot } from "react-dom/client";
import { App } from "./components/app/app";
import "./global.css";

const root: Root = createRoot(document.getElementById("root")!);
root.render(<App />);

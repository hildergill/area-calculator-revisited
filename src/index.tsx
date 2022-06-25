// This file is a part of area-calculator-revisited
// https://github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { Root, createRoot } from "react-dom/client";
import { App } from "./components/app";
import "./stylesheets/global.css";
import "./i18n";
import { StrictMode } from "react";

const root: Root = createRoot(document.getElementById("root")!);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

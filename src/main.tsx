// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill

import { createRoot } from "react-dom/client";
import { withTranslation } from "react-i18next";
import App from "./components/App";

import "./localization";

import "./styles/common.scss";

const AppWithTranslations = withTranslation()(App),
	root = createRoot(document.getElementById("root") as Element);

root.render(<AppWithTranslations />);

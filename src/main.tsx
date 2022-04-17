// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill

import ReactDOM from "react-dom";
import { withTranslation } from "react-i18next";
import App from "./components/App";

import "./localization";

import "./styles/common.scss";

const AppWithTranslations = withTranslation()(App);
ReactDOM.render(<AppWithTranslations />, document.getElementById("root"));

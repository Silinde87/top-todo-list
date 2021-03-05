import css from "./styles/root.css";

import { renderMain } from "./modules/render.js";

const $content = document.querySelector("#content");
renderMain();

export { $content };

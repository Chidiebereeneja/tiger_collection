"use strict";

import { navbarTask, fitlterProductTask } from "./modules/nav_bar.js";
import { imgDescriptionTask } from "./modules/imageDescription.js";
import { productSearchCon, sizeStyleTask } from "./modules/varible.js";

const sizeContainer = document.querySelector("section.size_category");

navbarTask("Men");
imgDescriptionTask(".product_card_container", "Men", ".proName");
fitlterProductTask(productSearchCon);
sizeStyleTask(sizeContainer);

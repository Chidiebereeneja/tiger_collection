"use strict";

import { navbarTask } from "./modules/nav_bar.js";
import { imgDescriptionTask } from "./modules/imageDescription.js";
import { productSearchCon, sizeStyleTask } from "./modules/varible.js";
import { fitlterProductTask } from "./modules/nav_bar.js";

const sizeContainer = document.querySelector("section.size_category");

navbarTask("Women");
imgDescriptionTask(".product_card_container", "Women", ".proName");
fitlterProductTask(productSearchCon);
sizeStyleTask(sizeContainer);

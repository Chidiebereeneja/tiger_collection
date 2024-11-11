"use strict";

import { navbarTask } from "./modules/nav_bar.js";
import { imgDescriptionTask } from "./modules/imageDescription.js";
import { fitlterProductTask } from "./modules/nav_bar.js";
import { productSearchCon, sizeStyleTask } from "./modules/varible.js";

const sizeContainer = document.querySelector("section.size_category");

navbarTask("Categories");
imgDescriptionTask(".product_card_container", "Footwear", ".proName");
fitlterProductTask(productSearchCon);
sizeStyleTask(sizeContainer);

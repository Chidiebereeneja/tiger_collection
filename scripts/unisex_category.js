"use strict";

import { navbarTask } from "./modules/nav_bar.js";
import { imgDescriptionTask } from "./modules/imageDescription.js";
import { fitlterProductTask } from "./modules/nav_bar.js";
import { productSearchCon } from "./modules/varible.js";

navbarTask("Unisex");
imgDescriptionTask(".product_card_container", "Unisex", ".proName");
fitlterProductTask(productSearchCon);

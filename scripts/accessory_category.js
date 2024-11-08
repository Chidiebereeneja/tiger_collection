"use strict";

import { navbarTask } from "./modules/nav_bar.js";
import { imgDescriptionTask } from "./modules/imageDescription.js";
import { fitlterProductTask } from "./modules/nav_bar.js";
import { productSearchCon } from "./modules/varible.js";

navbarTask("Categories");
imgDescriptionTask(".product_card_container", "Accessories", ".proName");
fitlterProductTask(productSearchCon);

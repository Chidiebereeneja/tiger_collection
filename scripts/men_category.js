"use strict";

import { navbarTask, fitlterProductTask } from "./modules/nav_bar.js";
import { imgDescriptionTask } from "./modules/imageDescription.js";
import { productSearchCon } from "./modules/varible.js";

navbarTask("Men");
imgDescriptionTask(".product_card_container", "Men", ".proName");
fitlterProductTask(productSearchCon);

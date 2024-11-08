"use strict";

import { navbarTask } from "./modules/nav_bar.js";
import { imgDescriptionTask } from "./modules/imageDescription.js";
import { productSearchCon } from "./modules/varible.js";
import { fitlterProductTask } from "./modules/nav_bar.js";
navbarTask("Women");

imgDescriptionTask(".product_card_container", "Women", ".proName");
fitlterProductTask(productSearchCon);

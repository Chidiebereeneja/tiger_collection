"use strict";

import { navbarTask } from "./modules/nav_bar.js";
import { queryElementTask } from "./modules/varible.js";
import { imgDescriptionTask } from "./modules/imageDescription.js";

navbarTask("Men");

imgDescriptionTask(".product_card_container", "Men", ".proName");

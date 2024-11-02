"use strict";

import { navbarTask } from "./modules/nav_bar.js";
import { imgDescriptionTask } from "./modules/imageDescription.js";
navbarTask("Women");

imgDescriptionTask(".product_card_container", "Women", ".proName");

import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	EffectFade,
	Pagination,
	Thumbs,
	Controller,
	FreeMode,
	Scrollbar,
	A11y,
	Mousewheel
} from 'swiper';

import checkBoxHandler from "./modules/checkbox.js";
import AOS from 'aos';

flsFunctions.isWebp();
checkBoxHandler();
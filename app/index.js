import './styles/styles.scss';

import {buttons, result, clearBtn, equalBtn} from './dom-loader';

buttons.forEach((button) => button.addEventListener('click', () => result.value += button.value));

clearBtn.addEventListener('click', () => result.value = clearBtn.value);

equalBtn.addEventListener('click', () => result.value = eval(result.value));

import { createElement } from "lwc";
import App from "example/app";

const elm = createElement("example-app", { is: App });
document.body.appendChild(elm);

import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./card-info.template.html"
import styles from "./card-info.module.scss"

export class CardInfo extends ChildComponent {
constructor() {
    super({title: "Home"})
}

    render() {
        this.element = renderService.htmlToElement(template, [], styles)
        return this.element
    }
}




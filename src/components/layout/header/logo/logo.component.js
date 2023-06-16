import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./logo.template.html"
import styles from "./logo.module.scss"
import ChildComponent from "@/core/component/child.component"

export class Logo extends ChildComponent {
constructor() {
    super({title: "Home"})
}

    render() {
        this.element = renderService.htmlToElement(template, [], styles)
        return this.element
    }


}
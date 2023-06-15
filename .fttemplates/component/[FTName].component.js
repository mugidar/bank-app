import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./<FTName>.template.html"
import styles from "./<FTName>.module.scss"

export class <FTName | pascalcase> extends ChildComponent {
constructor() {
    super({title: "Home"})
}

    render() {
        this.element = renderService.htmlToElement(template, [], styles)
        return this.element
    }


}
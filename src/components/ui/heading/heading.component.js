import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./heading.template.html"
import styles from "./heading.module.scss"
import { $m } from "@/core/mquery/mquery.lib"
import ChildComponent from "@/core/component/child.component"

export class Heading extends ChildComponent {
constructor({children}) {
    super()

    if(!children) {
        throw new Error("No heading")
    }

    this.children = children
}

    render() {
        this.element = renderService.htmlToElement(template, [], styles)

        $m(this.element).text(this.children)

        return this.element
    }


}
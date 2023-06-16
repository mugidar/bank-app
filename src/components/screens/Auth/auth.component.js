import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./auth.template.html"
import styles from "./auth.module.scss"
import ChildComponent from "@/core/component/child.component"
import { Heading } from "@/components/ui/heading/heading.component"

export class Auth extends ChildComponent {
constructor() {
    super({title: "Auth"})
}

    render() {
        this.element = renderService.htmlToElement(template, [
            new Heading({
                children: "Auth"
            })
        ], styles)
        return this.element
    }


}
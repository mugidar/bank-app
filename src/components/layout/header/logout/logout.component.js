import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./logout.template.html"
import styles from "./logout.module.scss"
import ChildComponent from "@/core/component/child.component"
import { $m } from "@/core/mquery/mquery.lib"

export class Logout extends ChildComponent {
constructor({router}) {
    super()

    this.router = router
}

    render() {
        this.element = renderService.htmlToElement(template, [], styles)

       $m(this.element).find("button").click(() =>{
        this.router.navigate("/auth")
       })
        
        return this.element
    }


}
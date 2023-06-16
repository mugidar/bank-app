import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./search.template.html"
import styles from "./search.module.scss"
import ChildComponent from "@/core/component/child.component"
import { $m } from "@/core/mquery/mquery.lib"

export class Search extends ChildComponent {
constructor() {
    super({title: "Home"})
}

    render() {
        this.element = renderService.htmlToElement(template, [], styles)
       

        $m(this.element).find("input").input({
            type: "search",
            name: "search",
            placeholder: "search contacts",
        })
       
        return this.element
    }


}
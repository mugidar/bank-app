import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./loader.template.html"
import styles from "./loader.module.scss"

export const LOADER_SELECTOR = '[data-component="loader"]'


export class Loader extends ChildComponent {
constructor(width=100, height=100) {
    super()
    
    this.weight = this.weight 
    this.height = this.height 
}

    render() {
        this.element = renderService.htmlToElement(template, [], styles)

        this.element.style = `width: ${this.width}px; height: ${this.height}px`
        this.element.classList.add('bounce')
        return this.element
    }


}
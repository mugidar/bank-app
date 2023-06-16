import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./user.template.html"
import styles from "./user.module.scss"
import { $m } from "@/core/mquery/mquery.lib"
import ChildComponent from "@/core/component/child.component"

export class User extends ChildComponent {
constructor(user, isGray  = false, onClick ) {
    super()

    if(!user) throw new Error("User not passed")
    if(!user?.name) throw new Error("User must have a name")
    if(!user?.avatarPath) throw new Error("User must have a avatarPath")

    this.user = user
    this.onClick = onClick
    this.isGray = isGray
}

    #preventDefault(event) {
    event.preventDefault()
    }

    update({avatarPath, name}) {
        if(avatarPath && name) {
            $m(this.element).find("img").attr("src", avatarPath).attr("alt", name)
       
       $m(this.element).find('span').text(name)
        }

    }

    render() {
        this.element = renderService.htmlToElement(template, [], styles)
        this.update(this.user)

        $m(this.element).click(this.onClick || this.#preventDefault.bind(this))
       
       if(!this.onClick) $m(this.element).attr('disabled', '')
       if(this.isGray) $m(this.element).addClass(styles.gray)

        return this.element
    }


}
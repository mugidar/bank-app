import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./header.template.html"
import styles from "./header.module.scss"
import ChildComponent from "@/core/component/child.component"
import { Search } from "./search/search.component"
import { User } from "@/components/ui/user/user.component"
import { Logo } from "./logo/logo.component"
import { Logout } from "./logout/logout.component"

export class Header extends ChildComponent {
	constructor({router}) {
		super()
		this.router = router
	}

	render() {
		this.element = renderService.htmlToElement(template, [
			Logo, new Logout({
				router: this.router
			}), Search, new User({avatarPath: "fgsd", name: "Misha"}, true)
		]
		, styles)

		return this.element
	}
}


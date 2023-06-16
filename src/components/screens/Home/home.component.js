import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from "./home.template.html"
import styles from "./home.module.scss"
import { $m } from "@/core/mquery/mquery.lib"
import { Button } from "@/components/ui/button/button.component"
import { Field } from "@/components/ui/field/field.component"
import { Heading } from "@/components/ui/heading/heading.component"
import { User } from "@/components/ui/user/user.component"



export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(template, [
			new Heading({children: "Home"})
		], styles)



		return element
	}
}

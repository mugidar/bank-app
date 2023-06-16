import ChildComponent from "@/core/component/child.component"
import { $m } from "@/core/mquery/mquery.lib"
import renderService from "@/core/services/render.service"

import template from "./layout.template.html"
import styles from "./layout.module.scss"

import { Header } from "./header/header.component"

export class Layout extends ChildComponent {
	constructor({ router, children }) {
		super()

		this.router = router
		this.children = children
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		const mainElement = $m(this.element).find('main')

		const contentContainer = $m(this.element).find('#content')
		contentContainer.append(this.children)

		mainElement.before(new Header({
			router: this.router
		}).render())

		return this.element
	}
}

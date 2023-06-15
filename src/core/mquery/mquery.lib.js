// $R('#rrt').find('.rge').css('', '').text('').html('')

/**
 * Represents the mQuery class for working with DOM elements.
 */
class mQuery {
	constructor(selector) {
		if (typeof selector === 'string') {
			this.element = document.querySelector(selector)

			if (!this.element) {
				throw new Error(`Element ${selector} not found!`)
			}
		} else if (selector instanceof HTMLElement) {
			this.element = selector
		} else {
			throw new Error('Invalid selector type')
		}
	}


	find(selector) {
		const element = new mQuery(this.element.querySelector(selector))

		if (element) {
			return element
		} else {
			throw new Error(`Element ${selector} not found!`)
		}
	}

	css(property, value) {
		if (typeof property !== 'string' || typeof value !== 'string') {
			throw new Error('property and value must be strings')
		}

		this.element.style[property] = value
		return this
	}
}

export function $m(selector) {
	return new mQuery(selector)
}

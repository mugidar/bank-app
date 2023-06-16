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
    html(htmlContent) {
		if (typeof htmlContent === 'undefined') {
			return this.element.innerHTML
		} else {
			this.element.innerHTML = htmlContent
			return this
		}
	}
    text(textContent) {
		if (typeof textContent === 'undefined') {
			return this.element.textContent
		} else {
			this.element.textContent = textContent
			return this
		}
	}

	attr(attributeName, value) {
		if(typeof attributeName !== "string") {
			throw new error("STRING NAME")
		}
		if(typeof value === "undefined") {
			return this.element.getAttribute(attributeName)
		}else {
			this.element.setAttribute(this.attributeName, value)
			return this
		}

	}

    click(callback) {
        this.element.addEventListener('click', callback)
        return this
    }

    before(newElement) {
        if(!(newElement instanceof HTMLElement)) {
            throw new Error("Element must be an HTMLElement")
        }

        const parentElement = this.element.parentElement

        if(parentElement) {
            parentElement.insertBefore(newElement, this.element)
            return 
        }else {
            throw new Error("No parent el")
        }
    }

    append(childElement) {
		this.element.appendChild(childElement)
		return this
	}

    addClass(classNames) {
		if (Array.isArray(classNames)) {
			for (const className of classNames) {
				this.element.classList.add(className)
			}
		} else {
			this.element.classList.add(classNames)
		}

		return this
	}

	removeClass(classNames) {
		if (Array.isArray(classNames)) {
			for (const className of classNames) {
				this.element.classList.remove(className)
			}
		} else {
			this.element.classList.remove(classNames)
		}

		return this
	}
	creditCardInput() {
		const limit = 16

		if (
			this.element.tagName.toLowerCase() !== 'input' ||
			this.element.type !== 'text'
		)
			throw new Error('Element must be an input with type "text"')

		this.element.addEventListener('input', event => {
			let value = event.target.value.replace(/[^0-9]/g, '')
			if (limit) value = value.substring(0, limit)
			event.target.value = formatCardNumberWithDashes(value)
		})

		return this
	}

	numberInput(limit) {
		if (
			this.element.tagName.toLowerCase() !== 'input' ||
			this.element.type !== 'number'
		)
			throw new Error('Element must be an input with type "number"')

		this.element.addEventListener('input', event => {
			let value = event.target.value.replace(/[^0-9]/g, '')
			if (limit) value = value.substring(0, limit)
			event.target.value = value
		})

		return this
	} 

	input({ onInput, ...rest }) {
		if (this.element.tagName.toLowerCase() !== 'input')
			throw new Error('Element must be an input')

		for (const [key, value] of Object.entries(rest)) {
			this.element.setAttribute(key, value)
		}

		if (onInput) {
			this.element.addEventListener('input', onInput)
		}

		return this
	}
}

export function $m(selector) {
	return new mQuery(selector)
}

import { BaseScreen } from "@/core/component/base-screen.component"

export class Home extends BaseScreen {
constructor() {
    super({title: "Home"})
}

    render() {
        return `
        <h1>Home</h1>
        `
    }


}
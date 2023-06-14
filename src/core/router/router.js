import { NotFound } from "@/components/screens/NotFound/not-found.component";
import { ROUTES } from "./routes.data";
import { Layout } from "@/components/layout/layout.component";

export class Router {
    #routes = ROUTES
    #currentRoute = null
    #layout = null

    constructor() {
        window.addEventListener("popstate", () => {
            this.#handleRouteChange()
        })

        this.#handleRouteChange()
        this.#handleLinks()
    }
    
    #handleRouteChange() {
       const path = this.getCurrentPath() || "/"

       let route = this.#routes.find(route => route.path === path) || {component: NotFound} 
   

       this.#currentRoute = route
       this.#render()
   }
    getCurrentPath() {
        return window.location.pathname
    }

    #handleLinks () {
        document.addEventListener( 'click', event => {
            const target = event.target.closest('a')

            if(target) {
                event.preventDefault()
                this.navigate(target.href)
            }
        })
    }

    navigate(path) {
        if(path !== this.getCurrentPath()) {
            window.history.pushState({}, '', path)
            this.#handleRouteChange()
        }
    }




    #render() {
        const component = new this.#currentRoute.component()

        if(!this.#layout){
            this.#layout = new Layout({
                router: this,
                children: component.render()
            })
            document.getElementById("app").innerHTML = this.#layout.render()
        }else {
            document.querySelector('main').innerHTML = component.render()
        }
    }
}
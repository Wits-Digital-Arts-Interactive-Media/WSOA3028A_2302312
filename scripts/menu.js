const root= "/WSOA3028A_2302312"
const menuItems = [
    { name: "Home", href: "index.html" },
    { name: "Design", href: "design.html" },
    { name: "Projects", href: "portfolio.html" },
    { name: "Blog", href: "blog.html" },
    { name: "Essays", href: "essays.html" }
]
function initialize() {
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")

    for (const menuItem of menuItems) {
        const li = document.createElement("li")
        if (menuItem.name != document.title) {
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        }
        else if (menuItem.name == document.title) {
            li.innerText = menuItem.name
        }
        ul.appendChild(li)
    }
    nav.appendChild(ul)

}
initialize()
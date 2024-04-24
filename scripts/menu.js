const root= "/WSOA3028A_2302312"
const menuItems = [
    { name: "Home", href: `${root}/index.html` },
    { name: "Design", href: `${root}/design/index.html` },
    { name: "Projects", href: `${root}/projects/index.html` },
    { name: "Blog", href: `${root}/blogs/index.html` },
    { name: "Essays", href: `${root}/essays/index.html` }
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
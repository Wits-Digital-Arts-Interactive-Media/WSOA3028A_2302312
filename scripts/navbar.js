const root = "/WSOA3028A_2302312"
const menuItems = [
    { name: "Home", href: `${root}/index.html` },
    { name: "Design", href: `${root}/design/index.html` },
    { name: "Projects", href: `${root}/projects/index.html` },
    { name: "Blog", href: `${root}/blogs/index.html` },
    { name: "Essays", href: `${root}/essays/index.html` }
]


function initialize() {
    //Adds the Navbar to everypage. Disabling a link if it refers to the current page.
    const nav = document.querySelector("header > div> nav")
    const ul = document.createElement("ul")
    const link = document.createElement("link")
    if (document.title != "Home") { link.setAttribute("href", `${root}/styles/styleSheet1.css`) }

    link.type = "text/css"
    link.rel = "stylesheet"
    link.media = "screen,print"
    document.querySelector("head").appendChild(link)
    for (const menuItem of menuItems) {
        const li = document.createElement("li")
        const a = document.createElement("a")
        if (menuItem.name == document.title) {
            a.className = "active";
        }
        if (menuItem.name != document.title) {
            a.setAttribute("href", menuItem.href)
        }
        a.innerText = menuItem.name
        li.appendChild(a)
        ul.appendChild(li)
    }
    nav.appendChild(ul)

    const footer = document.querySelector("footer")
    // Adds a "Back to top" button on every page footer when the page is big enough to scroll down
    if (document.body.scrollHeight > window.screen.height) {

        const toTopBut = document.createElement("button")
        toTopBut.setAttribute("onclick", "toTop()")
        toTopBut.innerText = "Back to Top"
        footer.appendChild(toTopBut)
    }
    //append social links to footer
    const socialList = document.createElement("ul")
    const aitch = document.createElement("a")
    const itch = document.createElement("li")
    aitch.innerText = "Itch.io"
    aitch.setAttribute("href", "https://ghetto-noodles.itch.io/")
    itch.appendChild(aitch)
    socialList.appendChild(itch)

    const github = document.createElement("li")
    const aGit = document.createElement("a")
    aGit.innerText = "GitHub"
    aGit.setAttribute("href", "https://github.com/GhettoNoodles")
    github.appendChild(aGit)
    socialList.appendChild(github)

    const linkedin = document.createElement("li")
    const aLink = document.createElement("a")
    aLink.innerText = "LinkedIn"
    aLink.setAttribute("href", "https://www.linkedin.com/in/jacques-coetzee5689/")
    linkedin.appendChild(aLink)
    socialList.appendChild(linkedin)

    footer.appendChild(socialList)
}

initialize()
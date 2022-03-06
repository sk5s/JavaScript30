document.addEventListener("DOMContentLoaded", () => {
  // sidenav
  let div = document.createElement("div")
  div.style.height = "100%"
  div.style.width = 0
  div.style.position = "fixed"
  div.style.zIndex = 1
  div.style.top = 0
  div.style.left = 0
  div.style.backgroundColor = "#111"
  // div.style.overflow = "hidden"
  div.style.overflowY = "scroll"
  div.style.transition = "ease-in-out 0.3s"
  // div.style.paddingTop = "60px"
  // div.style.paddingBottom = "120px"

  // console.log("insert top main navbar")
  let navbar_container = document.getElementById("sk5s_top_main_navbar")
  if (!navbar_container) return
  navbar_container.style.fontSize = "20px"
  navbar_container.style.fontFamily = "monospace,sans-serif"
  navbar_container.style.userSelect = "none"
  navbar_container.style.margin = 0

  let ul = document.createElement("ul")
  ul.style.listStyle = "none"
  ul.style.margin = 0
  ul.style.padding = "10px"
  ul.style.backgroundColor = "#333"
  ul.style.overflow = "hidden"
  ul.style.fontSize = "14px"
  // ul.style.fontFamily = "monospace,sans-serif"
  // ul.style.borderBottomLeftRadius = "8px"
  // ul.style.borderBottomRightRadius = "8px"
  let nav = [
    {
      name: "JavaScript30",
      href: "/JavaScript30/",
      target: "_self",
      title: true
    },
    {
      name: "Home",
      href: "/JavaScript30/",
      target: "_self"
    },
    {
      name: "sk5s project",
      href: "https://sk5s.cyou/",
      target: "_blank"
    }
  ]
  let sidenav = [
    {
      name: "01-JavaScript-Drum-Kit",
      href: "/JavaScript30/01-JavaScript-Drum-Kit/",
      target: "_self"
    },
    {
      name: "02-JS-and-CSS-Clock",
      href: "/JavaScript30/02-JS-and-CSS-Clock/",
      target: "_self"
    },
    {
      name: "03-CSS-Variables",
      href: "/JavaScript30/03-CSS-Variables/",
      target: "_self"
    },
    {
      name: "04-Array-Cardio-Day-1",
      href: "/JavaScript30/04-Array-Cardio-Day-1/",
      target: "_self"
    },
    {
      name: "05-Flex-Panel-Gallery",
      href: "/JavaScript30/05-Flex-Panel-Gallery/",
      target: "_self"
    },
    {
      name: "06-Type-Ahead",
      href: "/JavaScript30/06-Type-Ahead/",
      target: "_self"
    },
    {
      name: "07-Array-Cardio-Day-2",
      href: "/JavaScript30/07-Array-Cardio-Day-2/",
      target: "_self"
    },
    {
      name: "08-Fun-with-HTML5-Canvas",
      href: "/JavaScript30/08-Fun-with-HTML5-Canvas/",
      target: "_self"
    },
    {
      name: "09-Dev-Tools-Domination",
      href: "/JavaScript30/09-Dev-Tools-Domination/",
      target: "_self"
    },
    {
      name: "10-Hold-Shift-and-Check-Checkboxes",
      href: "/JavaScript30/10-Hold-Shift-and-Check-Checkboxes/",
      target: "_self"
    }
  ]
  let open_button = document.createElement("a")
  open_button.innerHTML = "&#9776;"
  open_button.style.display = "block"
  open_button.style.padding = "8px"
  open_button.style.color = "#fff"
  open_button.style.cursor = "pointer"
  open_button.id = "sk5s_top_main_navbar_open"
  open_button.addEventListener("click", () => {
    div.style.width = "100%"
  })
  let open_button_li = document.createElement("li")
  open_button_li.appendChild(open_button)
  open_button_li.style.display = "inline"
  open_button_li.style.float = "left"
  for (let index = 0; index < nav.length; index++) {
    let item = nav[index]
    let name = item.name
    let href = item.href
    let target = item.target ? item.target : "_blank"
    let title = item.title ? item.title : false
    let a = document.createElement("a")
    a.target = target
    a.innerText = name
    a.href = href
    a.style.display = "block"
    a.style.padding = "8px"
    // a.style.backgroundColor = "#dddddd"
    if (title) {
      a.style.color = "#ffc600"
      a.style.fontWeight = "bold"
    } else {
      a.style.color = "#fff"
    }
    a.style.textAlign = "center"
    a.style.textDecoration = "none"
    let li = document.createElement("li")
    li.style.display = "inline"
    li.style.float = "left"
    li.appendChild(a)
    ul.appendChild(li)
  }
  ul.appendChild(open_button_li)
  navbar_container.appendChild(ul)

  // <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  let close_button = document.createElement("a")
  close_button.innerHTML = "&times;"
  // close_button.style.fontSize = ""
  close_button.style.cursor = "pointer"
  close_button.style.color = "#fff"
  close_button.style.display = "block"
  close_button.style.padding = "8px"
  close_button.style.textAlign = "center"
  close_button.style.textDecoration = "none"
  close_button.id = "sk5s_top_main_navbar_close"
  close_button.addEventListener("click", () => {
    div.style.width = "0"
  })
  div.appendChild(close_button)
  for (let index = 0; index < sidenav.length; index++) {
    let item = sidenav[index]
    let name = item.name
    let href = item.href
    let target = item.target ? item.target : "_blank"
    let title = item.title ? item.title : false
    let a = document.createElement("a")
    a.target = target
    a.innerText = name
    a.href = href
    a.style.display = "block"
    a.style.padding = "8px"
    // a.style.backgroundColor = "#dddddd"
    if (title) {
      a.style.color = "#ffc600"
      a.style.fontWeight = "bold"
    } else {
      a.style.color = "#fff"
    }
    a.style.textAlign = "center"
    a.style.textDecoration = "none"
    a.style.overflow = "hidden"
    a.style.minWidth = "90%"

    div.appendChild(a)
  }

  navbar_container.appendChild(div)

  // instant page
  let script = document.createElement("script")
  script.type = "module"
  script.src = "//instant.page/5.1.0"
  script.integrity = "sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"
  document.body.appendChild(script)
  if (typeof sk5s_top_main_navbar_loaded === "function") {
    sk5s_top_main_navbar_loaded()
  }
})
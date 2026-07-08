/**
 * Load Nav Keys
 */

export function LNkey() {
  const nav_items = document.querySelectorAll("header .navigation-pannel li");
  return new Promise((resolve) => {
    const path = location.pathname;
    console.log(path)
    let active_index = 0;
        console.log('Before', active_index)
    const key = "A6bdecfa4";
    switch (path) {
      case "/":
      case "/index.html":
        active_index = 0;
        break;
      case "/about.html":
        active_index = 1;
        break;
      case "/services.html":
        active_index = 2;
        break;
      case "/contacts.html":
        active_index = 3;
        break;
      default:
        active_index = 0;
    }

    nav_items.forEach((e, i) =>
      i === active_index ? e.classList.add(key) : e.classList.remove(key),
    );
        console.log('After', active_index)

    resolve("Loaded");
  });
}

/**
 * Load Pictures
 * @param {Object} pictures
 * @param {Array} holder_names
 */
export function LPcs(pictures, holder_names) {
  return new Promise((resolve) => {
    for (const addr of holder_names) {
      const element = document.getElementById(addr);
      if (element) {
        element.setAttribute("src", pictures[addr]);
      }
    }
    resolve("Loaded");
  });
}

/* main.js - reads SITE (from content.js) and builds the page.
   You rarely need to edit this file. */

// Tiny helper: h("li", {class:"x"}, "text", childElement)
// It uses textContent-style appending, so your text can never inject HTML.
function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  kids.forEach(k => el.append(k));
  return el;
}

// 1. Simple text: any element with data-text="key" gets SITE[key]
document.querySelectorAll("[data-text]").forEach(el => {
  el.textContent = SITE[el.dataset.text];
});

// 2. Hero headline: wrap each word so they can fade in one by one
const title = document.getElementById("hero-title");
title.textContent = "";
SITE.headline.split(" ").forEach((w, i) => {
  title.append(h("span", { class: "w", style: `--i:${i}` }, w), " ");
});

// 3. About paragraphs
const about = document.getElementById("about-body");
SITE.about.forEach(p => about.append(h("p", {}, p)));

// 4. Skills: <details> is built into the browser - it opens/closes on
//    click or Enter/Space with no JavaScript needed.
const skills = document.getElementById("skills-body");
SITE.skills.forEach(g => {
  const list = h("ul", { class: "parts" });
  g.items.forEach(s => {
    const d = h("details", { class: "part", "data-status": s.status },
      h("summary", {},
        h("span", { class: "dot", "aria-hidden": "true" }),
        h("span", { class: "pname" }, s.name),
        h("span", { class: "tag mono" }, s.status)),
      h("p", { class: "note" }, s.note));
    list.append(h("li", {}, d));
  });
  skills.append(h("h3", {}, g.group), list);
});

// 5. Bench notes
const bench = document.getElementById("bench-body");
SITE.bench.forEach(b => bench.append(
  h("li", {}, h("span", { class: "mono" }, b.tag), h("p", {}, b.text))));

// 6. Project slots: no title = empty slot. With a title = filled card.
const proj = document.getElementById("projects-body");
SITE.projects.forEach(p => {
  const filled = Boolean(p.title);
  const li = h("li", { class: filled ? "slot filled" : "slot" },
    h("span", { class: "mono" }, p.slot));
  if (filled) {
    li.append(h("h3", {}, p.title), h("p", {}, p.text));
    if (p.link) li.append(h("a", { href: p.link, rel: "noopener" }, "View project"));
  } else li.append(h("p", {}, p.text));
  proj.append(li);
});

// 7. Contact links: empty ones are skipped, so no dead links
const L = SITE.links, contact = document.getElementById("contact-body");
const add = (label, href) => href && contact.append(
  h("li", {}, h("a", { href, rel: "noopener" }, label)));
add(L.email, L.email && "mailto:" + L.email);
add("GitHub", L.github);
add("LinkedIn", L.linkedin);
if (L.resume) {
  const r = document.querySelector("[data-resume]");
  r.hidden = false; r.querySelector("a").href = L.resume;
  add("Resume", L.resume);
}

// 8. Mobile menu
const btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
const setMenu = open => { btn.setAttribute("aria-expanded", open); nav.classList.toggle("open", open); };
btn.addEventListener("click", () => setMenu(btn.getAttribute("aria-expanded") !== "true"));
nav.addEventListener("click", e => e.target.closest("a") && setMenu(false));
document.addEventListener("keydown", e => e.key === "Escape" && setMenu(false));

// 9. Hairlines draw in once when scrolled into view
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.6 });
document.querySelectorAll(".rule").forEach(r => io.observe(r));

"use strict";
const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() { toggle.setAttribute("aria-expanded", "false"); navigation.classList.remove("is-open"); }
toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") !== "true"; toggle.setAttribute("aria-expanded", String(open)); navigation.classList.toggle("is-open", open); });
navigation.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { closeMenu(); toggle.focus(); } });
window.matchMedia("(min-width: 601px)").addEventListener("change", closeMenu);
document.querySelector("#year").textContent = new Date().getFullYear();
const content = window.portfolioContent || { certificates: [], resume: null };
// Permit local assets only, avoiding accidental script or external asset URLs.
function localAsset(path, extension) { return typeof path === "string" && /^assets\/[a-zA-Z0-9_./-]+$/.test(path) && !path.includes("..") && extension.test(path); }
if (localAsset(content.resume, /\.(pdf|docx)$/i)) { const link = document.querySelector("#resume-download"); link.href = content.resume; link.download = ""; link.removeAttribute("aria-disabled"); link.querySelector("span").textContent = content.resume.toLowerCase().endsWith(".docx") ? "↓ DOCX" : "↓ PDF"; document.querySelector("#resume-description").textContent = "A closer look at my academic background and project experience."; }
const modal = document.querySelector("#certificate-modal");
const gallery = document.querySelector("#certificate-gallery");
let certificateOpener;
let currentCertificateFolder;
(content.certificates || []).filter(c => c.title && c.issuer && c.date && c.alt && localAsset(c.image, /\.(webp|png|jpe?g)$/i)).sort((a, b) => (a.folder || "Other").localeCompare(b.folder || "Other", "en", { sensitivity: "base" }) || a.title.localeCompare(b.title)).forEach(certificate => {
  const folder = certificate.folder || "Other";
  if (folder !== currentCertificateFolder) {
    const heading = document.createElement("h3"); heading.className = "certificate-group-heading"; heading.textContent = folder; gallery.append(heading); currentCertificateFolder = folder;
  }
  const card = document.createElement("button"); card.type = "button"; card.className = "certificate-card";
  const img = document.createElement("img"); img.src = certificate.image; img.alt = certificate.alt; img.loading = "lazy";
  const title = document.createElement("h4"); title.textContent = certificate.title;
  const meta = document.createElement("p"); meta.textContent = `${certificate.issuer} · ${certificate.date}`;
  const view = document.createElement("span"); view.className = "certificate-view"; view.textContent = "View certificate ↗"; card.setAttribute("aria-haspopup", "dialog"); card.append(img, title, meta, view); gallery.append(card);
  card.addEventListener("click", () => { certificateOpener = card; document.querySelector("#certificate-title").textContent = certificate.title; const full = document.querySelector("#certificate-image"); full.src = certificate.image; full.alt = certificate.alt; document.querySelector("#certificate-meta").textContent = `${meta.textContent} · ${certificate.note || "Privacy-safe excerpt"}`; modal.showModal(); });
});
document.querySelector("#certificate-empty").hidden = gallery.children.length > 0;
document.querySelector("#modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("close", () => certificateOpener?.focus());
modal.addEventListener("click", event => { if (event.target === modal) { const bounds = modal.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) modal.close(); } });

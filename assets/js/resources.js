(function () {
  const source = document.querySelector("#resource-source");
  const results = document.querySelector("#resource-results");
  const search = document.querySelector("#resource-search");
  const count = document.querySelector("#resource-count");
  const categoryFilters = document.querySelector("#category-filters");

  if (!source || !results || !search || !count || !categoryFilters) return;

  const sectionNames = {
    "A. Tools": "Tools",
    "B. Sources": "Sources",
    "C. Examples": "Examples",
    "D. Design Methods & Workshop Inspiration": "Methods"
  };

  const ignoredHeadings = new Set(["Contents", "Contributing", "License", "License Key"]);
  const resources = [];
  let section = "";
  let category = "";
  let type = "";

  Array.from(source.children).forEach((node) => {
    if (node.tagName === "H2") {
      section = sectionNames[node.textContent.trim()] || "";
      category = "";
      type = "";
      return;
    }

    if (node.tagName === "H3") {
      const heading = node.textContent.trim();
      if (!ignoredHeadings.has(heading)) {
        category = heading;
      }
      type = "";
      return;
    }

    if (node.tagName === "P") {
      const text = node.textContent.trim();
      if (text === "Platforms" || text === "Production tools" || text === "Guided narratives" || text === "Exploratory / reference interfaces" || text === "Guided narratives and strong hybrids" || text === "Exploratory / analytical interfaces") {
        type = text;
      }
      return;
    }

    if (node.tagName !== "UL" || !section || !category) return;

    node.querySelectorAll(":scope > li").forEach((item) => {
      const link = item.querySelector("a");
      if (!link) return;

      const title = link.textContent.trim();
      const url = link.getAttribute("href");
      const description = item.textContent.replace(title, "").replace(/^:\s*/, "").trim();
      const searchable = [title, description, section, category, type].join(" ").toLowerCase();

      resources.push({ title, url, description, section, category, type, searchable });
    });
  });

  const categories = Array.from(new Set(resources.map((resource) => resource.category))).sort((a, b) => a.localeCompare(b));
  const visibleCategories = categories.filter((name) => !["License Key"].includes(name));
  const state = { section: "all", category: "all", query: "" };

  categoryFilters.innerHTML = [
    '<button class="filter-chip active" type="button" data-filter="category" data-value="all">All categories</button>',
    ...visibleCategories.map((name) => `<button class="filter-chip" type="button" data-filter="category" data-value="${escapeAttribute(name)}">${name}</button>`)
  ].join("");

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      state[filter] = button.dataset.value;

      document.querySelectorAll(`.filter-chip[data-filter="${filter}"]`).forEach((chip) => {
        chip.classList.toggle("active", chip === button);
      });

      render();
    });
  });

  search.addEventListener("input", () => {
    state.query = search.value.trim().toLowerCase();
    render();
  });

  function render() {
    const filtered = resources.filter((resource) => {
      const sectionMatch = state.section === "all" || resource.section === state.section;
      const categoryMatch = state.category === "all" || resource.category === state.category;
      const queryMatch = !state.query || resource.searchable.includes(state.query);
      return sectionMatch && categoryMatch && queryMatch;
    });

    count.textContent = `${filtered.length} ${filtered.length === 1 ? "resource" : "resources"} found`;

    if (!filtered.length) {
      results.innerHTML = '<p class="empty-state">No matching resources. Try a broader search or clear a filter.</p>';
      return;
    }

    results.innerHTML = filtered.map((resource) => `
      <article class="resource-card">
        <div class="resource-tags">
          <span>${escapeHtml(resource.section)}</span>
          <span>${escapeHtml(resource.category)}</span>
          ${resource.type ? `<span>${escapeHtml(resource.type)}</span>` : ""}
        </div>
        <h2><a href="${escapeAttribute(resource.url)}">${escapeHtml(resource.title)}</a></h2>
        <p>${escapeHtml(resource.description)}</p>
      </article>
    `).join("");
  }

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]);
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }

  render();
})();

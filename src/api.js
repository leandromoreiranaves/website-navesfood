let BASE = "https://api.b7web.com.br/devsfood/api";

export default {
  getCategories: async () => {
    // GET /categories
    const res = await fetch(BASE + "/categories");
    const json = await res.json();
    return json;
  },
  getProducts: async (category, page, search) => {
    // GET /products ([category, page, search])
    let fields = {};
    if (category !== 0) {
      fields.category = category;
    }
    if (page > 0) {
      fields.page = page;
    }
    if (search !== "") {
      fields.search = search;
    }

    // {category: 2, page: 1, search: 'bolo'}
    // "category=2&page=1&search=bolo"
    let queryString = new URLSearchParams(fields).toString();

    const res = await fetch(BASE + "/products?" + queryString);
    const json = await res.json();
    return json;
  },
};

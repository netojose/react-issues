export const pick = function(items, attrs) {
  return items.map(item => {
    const obj = {};
    attrs.forEach(attr => {
      obj[attr] = item[attr];
    });
    return obj;
  });
};

export const formatIssues = function(data) {
  return pick(data, [
    "number",
    "title",
    "created_at",
    "updated_at",
    "labels",
    "state"
  ]).map(item => {
    item.labels = pick(item.labels, ["id", "name", "color"]);
    return item;
  });
};

export const getLasPageFromLink = function(link) {
  let page = 1;
  const item = link.split(",").find(item => item.includes('rel="last"'));
  if (item) {
    page = item
      .split(";")[0]
      .match(/&page=([^&]*)/)[1]
      .replace(">", "");
  }

  return page;
};

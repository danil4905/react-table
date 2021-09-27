export const sorting = (content,parametr) => {
    function byField(field) {
      return (a, b) => (a[field] > b[field] ? 1 : -1);
    }
    switch (parametr) {
      case "title":
        return content.sort(byField("title"));
      case "count":
        return content.sort(byField("count"));
      case "distance":
        return content.sort(byField("distance"));
      default:
        return content;
    }
}
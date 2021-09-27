export const filterContent = (content, paramFirst, paramSecond, input) => {
  console.log(input);
  if (content === null) {
    return content;
  } else {
    switch (paramFirst) {
      case "title":
        return content.filter(function (v) {
          return v.title.includes(input);
        });
      case "count": {
        if (paramSecond === "=")
          return content.filter(function (v) {
            return v.count * 1 === input * 1;
          });
        if (paramSecond === ">")
          return content.filter(function (v) {
            return v.count * 1 > input * 1;
          });
        else
          return content.filter(function (v) {
            return v.count * 1 < input * 1;
          });
      }

      case "distance": {
        if (paramSecond === "=")
          return content.filter(function (v) {
            return v.distance * 1 === input * 1;
          });
        if (paramSecond === ">")
          return content.filter(function (v) {
            return v.distance * 1 > input * 1;
          });
        else
          return content.filter(function (v) {
            return v.distance * 1 < input * 1;
          });
      }
      default:
        return content;
    }
  }
};

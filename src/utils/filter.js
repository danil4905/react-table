export const filter = (content, paramFirst, paramSecond, input) => {
  if (paramFirst === "title") {
    if (paramSecond === "include") {
    }
  }
  switch (paramFirst) {
    case "title":
      return content.filter(function (v) {
        return v.title.includes(input);
      });
    case "count": {
      if (paramSecond === "=")
        return content.filter(function (v) {
          return v.count === input;
        });
      if (paramSecond === ">")
        return content.filter(function (v) {
          return v.count > input;
        });
      else
        return content.filter(function (v) {
          return v.count < input;
        });
    }

    case "distance": {
      if (paramSecond === "=")
        return content.filter(function (v) {
          return v.distance === input;
        });
      if (paramSecond === ">")
        return content.filter(function (v) {
          return v.distance > input;
        });
      else
        return content.filter(function (v) {
          return v.distance < input;
        });
    }
    default:
      return content;
  }
};

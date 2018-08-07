fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => json.forEach(({ body, id, title, userId }) => {
    document.writeln(title)
  }))

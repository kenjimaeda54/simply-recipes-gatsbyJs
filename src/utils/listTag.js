export const listTag = recipes => {
  const tags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(element => {
      if (!tags[element]) {
        tags[element] = 1
      } else {
        tags[element]++
      }
    })
  })
  const recipesSort = Object.entries(tags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  return recipesSort
}

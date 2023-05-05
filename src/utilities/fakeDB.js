const addToDb = (id, name) => {
    let favoriteRecipes = {};
    const localData = localStorage.getItem('favorite-recipes')
    if (localData) {
        favoriteRecipes = JSON.parse(localData);
    }
    favoriteRecipes[id] = name
    localStorage.setItem('favorite-recipes', JSON.stringify(favoriteRecipes))

}
export { addToDb }
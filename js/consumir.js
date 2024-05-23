function getRandomHealthyRecipe() {
    // Definir la URL base y la clave de API
    const baseUrl = "https://api.spoonacular.com/recipes/random";
    const apiKey = "cf045db4a0df4b68a2f4529adab91fe0"; // Tu clave de API

    // Parámetros de la consulta
    const params = {
        apiKey: apiKey,
        number: 1, // Número de recetas a devolver
        tags: "vegetarian", // Etiquetas para obtener recetas saludables
    };

    // Crear la URL completa con los parámetros de la consulta
    const url = new URL(baseUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    // Realizar la solicitud a la API utilizando fetch
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then(data => {
            const recipe = data.recipes[0];
            const recipeElement = document.getElementById('recipe');
            recipeElement.innerHTML = `
                <h2>${recipe.title}</h2>
                <h3>Ingredientes:</h3>
                <ul>
                    ${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
                </ul>
                <h3>Instrucciones:</h3>
                <p>${recipe.instructions}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Llamar a la función al cargar la página
window.onload = getRandomHealthyRecipe;
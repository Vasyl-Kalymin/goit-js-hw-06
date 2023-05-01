//const numberOfCategories = document.querySelectorAll('h2').length;
const numberOfCategories = document.getElementById('categories').children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const ollTitlesCategories = document.querySelectorAll('h2');

ollTitlesCategories.forEach((title) => {
    console.log(`Category: ${title.textContent}`)
    console.log(`Elements: ${title.nextElementSibling.children.length}`)
})

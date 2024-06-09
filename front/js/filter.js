import { attachEventHandler, setPage } from "./config.js";
import { getAndShowAllProducts } from "./productAPI/products.js";

export const renderFiltration = () => {
    const filterContainer = document.querySelector('.filter-container');
    filterContainer.innerHTML  =`<form class="filter-form">
    <div class="filter-category">
<select class="form-select" id="filter-category" >
</select>
</div>
<div class="filter-search">
<input class="form-control" id="filter-search" type="text" placeholder="search " >
</div>
<div class="filter-sort">
<select class="form-select" id="filter-sort">
    <option selected value="nosort">sort </option>
    <option value="incPr">by increasing priority</option>
    <option value="decPr">by decreasing priority</option>
    <option value="incD">by increasing due date</option>
    <option value="decD">by decreasing due date</option>
    <option value="nf">newest first</option>
    <option value="of">oldest first</option>
  </select>
</div> 
             </form>`;

            // <form class="filter-form">
              //   </form>

    // Навішуємо обробники
    // Фільтація по категоріях
    attachEventHandler('filter-category', 'change', filtration);
    // Сортуавння
    attachEventHandler('filter-sort', 'change', filtration);
    // Пошук
    attachEventHandler('filter-search', 'input', filtration);
}

/* <i class="fa fa-search search-icon"></i> */

// document.addEventListener('DOMContentLoaded', () => {
//     const filterToggle = document.querySelector('.filter-toggle');
//     const filterCategory = document.querySelector('.filter-category');
//     const filterSort = document.querySelector('.filter-sort');

//     filterToggle.addEventListener('click', () => {
//         filterCategory.classList.toggle('filter-visible');
//         filterSort.classList.toggle('filter-visible');
//     });
// });


export const  renderFilterCategoriesOptions = (categories) => {
    // Вибираємо відповідний select з блоку фільтрації i очищуємо його
    const filterCategory = document.getElementById('filter-category');
    filterCategory.innerHTML = ``;
    // Додаємо в них опцію по замовчуванню 
    // <option disabled selected value> -- select a category -- </option>
    const defaultProductCategoryOption = document.createElement('option');
    // defaultProductCategoryOption.setAttribute("disabled", "");
    defaultProductCategoryOption.setAttribute("selected", "");
    defaultProductCategoryOption.setAttribute("value", "all");
    defaultProductCategoryOption.innerText = `select a category`;
    filterCategory.appendChild(defaultProductCategoryOption);
    // Вибираємо категорії товарів з LS
    // const categoryArr = getCategories();
    categories.forEach(category => {
                const categoryOption = document.createElement('option');
                categoryOption.value = category._id;
                categoryOption.innerText = `${category.name}`;
                filterCategory.appendChild(categoryOption);
    });
}

// При будь-якій фільтрації - стаємо на 1-шу сторінку
const filtration = async () => {
    setPage(1);
    await getAndShowAllProducts();
}

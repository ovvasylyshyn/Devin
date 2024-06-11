// import { getCategories } from "../config.js";
// import { getAndShowAllProducts, sendProductData } from "../productAPI/products.js";
// import { CustomModal } from "./main.js";

// //
// // ********* Модальне вікно для створення та редагування продукту ************
// // 
// const productModalTitle = `Create product`;
// const productModalContent = `<form name="productForm" enctype="multipart/form-data">
//     <input type="hidden" name="productId" id="productId">
//     <input type="hidden" name="oldCloudinaryPublicId" id="oldCloudinaryPublicId">
//     <input type="hidden" name="oldImagePath" id="oldImagePath">
//     <table class="form-table">
//         <tr>
//             <td class="form-label"><label for="producCategory">Category:</label> </td>
//             <td class="form-input">
//                 <select name="producCategory" id="producCategory" class="form-select" required>
//                 </select>
//             </td>
//         </tr>
//         <tr>
//             <td class="form-label"><label for="productName">Name:</label> </td>
//             <td class="form-input"><input type="text" name="productName" id="productName" class="form-control" required></td>
//         </tr>
//         <tr>
//             <td class="form-label"><label for="productVolume">Volume:</label> </td>
//             <td class="form-input"><input type="number" name="productVolume" id="productVolume" class="form-control" min="20" max="2000" required></td>
//         </tr>
//         <tr>
//         <td class="form-label"><label for="productVolume">опис:</label> </td>
//         <td class="form-input"><input type="number" name="productVolume" id="productVolume" class="form-control" min="20" max="2000" required></td>
//     </tr>
//         <tr>
//             <td class="form-label"><label for="productMaterial">Material:</label> </td>
//             <td class="form-input">
//                 <select name="productMaterial" id="productMaterial" class="form-select" required>
//                     <option>Glass</option>
//                     <option>Porcelian</option>
//                     <option>Silicon</option>
//                     <option>Plastic</option>
//                     <option>Paper</option>
//                     <option>Metal</option>
//                 </select>
//             </td>
//         </tr>
//         <tr>
//             <td></td>
//             <td class="form-image-container">
//                 <img class="form-image" id="formImage" >
//             </td>
//         </tr>
//         <tr>
//             <td class="form-label"><label for="productImage">Image:</label> </td>
//             <td class="form-input"><input type="file" name="productImage" id="productImage" class="form-control" onchange="document.getElementById('formImage').src = window.URL.createObjectURL(this.files[0])" ></td>
//         </tr>
//         <tr>
//             <td class="form-label"><label for="productPrice">Price, &#x20b4:</label> </td>
//             <td class="form-input"><input type="number" name="productPrice" id="productPrice" class="form-control" required></td>
//         </tr>
//     </table>
//     <div class="modal-form-footer">
//         <input type="submit" class="btn btn-success" id="submitProductBtn" value="Create">
//         <input type="reset" class="btn btn-danger" id="cancelProductBtn" data-close="true" value="Cancel">
//     </div>
//     </form>`;
// const productModalFooter =``;
// export const productModal = new CustomModal('prd', productModalTitle, productModalContent, productModalFooter);
// productModal.create();

// export const convertModalToCreate = () => {
//     document.getElementById('title-prd').innerText = "Create product";
//     document.getElementById('submitProductBtn').value = "Create" 
// }



// //Функції для зміни режиму вікна Створення/Редагування

// export const convertModalToEdit = () => {
//     document.getElementById('title-prd').innerText = "Edit product";
//     document.getElementById('submitProductBtn').value = "Confirm" 
// }



// export const openProductModalWithCreate = () => {
//     convertModalToCreate();
//     renderProductCategoriesOptions();
//     productModal.open();
// }

// // Обробник відправки форми
// document.forms["productForm"].addEventListener ('submit', (e) => {
//     e.preventDefault();
//     productModal.close();
//     convertModalToCreate();
//     sendProductData()
//     .then( () => {getAndShowAllProducts()} )
//     .catch (err => console.error(err)) ;    
// })


// // Випадаючий список для категорій товарів в модалці продуктів
// // тобто дані блоки перемальовуються при створенні нової категорії

// export const renderProductCategoriesOptions = () =>  {
    
//     // Вибираємо select модалкки продуктів i очищуємо його
//     const producCategory = document.getElementById('producCategory');
//     // console.log('producCategory', producCategory);
//     producCategory.innerHTML = ``;
//     // Додаємо в нього опцію по замовчуванню 
//     // <option disabled selected value> -- select a category -- </option>
//     const defaultProductCategoryOption = document.createElement('option');
//     defaultProductCategoryOption.setAttribute("disabled", "");
//     defaultProductCategoryOption.setAttribute("selected", "");
//     defaultProductCategoryOption.setAttribute("value", "");
//     defaultProductCategoryOption.innerText = ` -- select a category -- `;
//     producCategory.appendChild(defaultProductCategoryOption);
    
//     // Вибираємо категорії товарів з LS
//     const categoryArr = getCategories();
    
//     categoryArr.forEach(category => {
//         const categoryOption = document.createElement('option');
//         categoryOption.value = category._id;
//         categoryOption.innerText = `${category.name}`;
//         producCategory.appendChild(categoryOption);
//     });
// }




import { getCategories } from "../config.js";
import { getAndShowAllProducts, sendProductData } from "../productAPI/products.js";
import { CustomModal } from "./main.js";

// ********* Модальне вікно для створення та редагування продукту ************
const productModalTitle = `Create product`;
const productModalContent = `<form name="productForm" id="productForm" enctype="multipart/form-data">
    <input type="hidden" name="productId" id="productId">
    <input type="hidden" name="oldCloudinaryPublicId" id="oldCloudinaryPublicId">
    <input type="hidden" name="oldImagePath" id="oldImagePath">
    <table class="form-table pr">
        <tr>
            <td class="form-label"><label for="productCategory">Category:</label> </td>
            <td class="form-input">
                <select name="productCategory" id="productCategory" class="form-select" required>
                </select>
            </td>
        </tr>
        <tr>
            <td class="form-label"><label for="productName">Name:</label> </td>
            <td class="form-input"><input type="text" name="productName" id="productName" class="form-control" required></td>
        </tr>
        <tr>
            <td class="form-label"><label for="productDescription">Description:</label> </td>
            <td class="form-input"><input type="text" name="productDescription" id="productDescription" class="form-control" required></td>
        </tr>
        <tr>
            <td class="form-label"><label for="productPriority">Priority:</label> </td>
            <td class="form-input"><input type="number" name="productPriority" id="productPriority" class="form-control" required></td>
        </tr>
        <tr>
            <td class="form-label"><label for="productDueDate">Due Date:</label> </td>
            <td class="form-input"><input type="date" name="productDueDate" id="productDueDate" class="form-control" required></td>
        </tr>
        <tr>
            <td class="form-label"><label for="productAssignedEmployee">Assigned Employee:</label> </td>
            <td class="form-input"><input type="text" name="productAssignedEmployee" id="productAssignedEmployee" class="form-control" required></td>
        </tr>
        <tr>
            <td class="form-label"><label for="productImage">Image:</label> </td>
            <td class="form-input"><input type="file" name="productImage" id="productImage" class="form-control" onchange="document.getElementById('formImage').src = window.URL.createObjectURL(this.files[0])" required></td>
        </tr>
        <tr>
            <td></td>
            <td class="form-image-container">
                <img class="form-image" id="formImage">
            </td>
        </tr>
       


       
    </table>
     <div class="modal-form-footer">
         <button type="submit" class="btn btn-success" id="submitProductBtn">Create</button>
         <button type="reset" class="btn btn-danger" id="cancelProductBtn" data-close="true">Cancel</button>
    </div>
</form>`;

/* <tr>
<td class="form-label"><label for="cloudinaryPublicId">Cloudinary Public ID:</label> </td>
<td class="form-input"><input type="text" name="cloudinaryPublicId" id="cloudinaryPublicId" class="form-control" required></td>
</tr> */

//  <tr>
//         <button type="submit" class="btn btn-success" id="submitProductBtn">Create</button>
//         <button type="reset" class="btn btn-danger" id="cancelProductBtn" data-close="true">Cancel</button>
   
//         </tr>
const productModalFooter =``;
export const productModal = new CustomModal('prd', productModalTitle, productModalContent, productModalFooter);
productModal.create();


document.getElementById("productForm").addEventListener("submit", function(event) {
    // Отримання значення дати з поля введення
    var inputDate = new Date(document.getElementById("productDueDate").value);
    
    // Отримання сьогоднішньої дати
    var today = new Date();
    today.setHours(0, 0, 0, 0); // Обнулення годин, хвилин, секунд та мілісекунд

    // Перевірка, чи введена дата не менша за сьогоднішню
    if (inputDate < today) {
        // Стоп за подію за замовчуванням (відправку форми)
        event.preventDefault();
        // Виведення повідомлення про помилку
        alert("Ви ввели неправильну дату. Будь ласка, введіть коректну дату.");
    }
});



export const convertModalToCreate = () => {
    document.getElementById('title-prd').innerText = "Create product";
    document.getElementById('submitProductBtn').innerText = "Create";
}

// Функції для зміни режиму вікна Створення/Редагування
export const convertModalToEdit = () => {
    document.getElementById('title-prd').innerText = "Edit product";
    document.getElementById('submitProductBtn').innerText = "Confirm";
}

export const openProductModalWithCreate = () => {
    convertModalToCreate();
    renderProductCategoriesOptions();
    productModal.open();
}

// Обробник відправки форми
document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();
    productModal.close();
    convertModalToCreate();
    sendProductData()
        .then(() => { getAndShowAllProducts() })
        .catch(err => console.error(err));
})

// Випадаючий список для категорій товарів в модалці продуктів
// тобто дані блоки перемальовуються при створенні нової категорії
export const renderProductCategoriesOptions = () => {
    // Вибираємо select модалкки продуктів i очищуємо його
    const productCategory = document.getElementById('productCategory');
    productCategory.innerHTML = ``;
    
    // Додаємо в нього опцію по замовчуванню 
    const defaultProductCategoryOption = document.createElement('option');
    defaultProductCategoryOption.setAttribute("disabled", "");
    defaultProductCategoryOption.setAttribute("selected", "");
    defaultProductCategoryOption.setAttribute("value", "");
    defaultProductCategoryOption.innerText = `select a category`;
    productCategory.appendChild(defaultProductCategoryOption);
    
    // Вибираємо категорії товарів з LS
    const categoryArr = getCategories();
    
    categoryArr.forEach(category => {
        const categoryOption = document.createElement('option');
        categoryOption.value = category._id;
        categoryOption.innerText = `${category.name}`;
        productCategory.appendChild(categoryOption);
    });
}

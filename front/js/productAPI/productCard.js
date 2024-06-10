import { addToCart } from "../cartAPI/cart.js";
import { attachEventHandler, getUser } from "../config.js";
import { popUp } from "../popup.js";
import { editProduct, removeProduct } from "./products.js";

const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
};


export const productCardRender = (product) => {
    // Виймаємо з product об'єкт category
    const { category } = product;
    // console.log(product);
    const prdStr = JSON.stringify(product);
    const prdId = JSON.stringify(product._id).trim();
    // console.log(prdStr);
    // Функціонал для формування карточки продукту
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    // Карточка продукту буде мати різний вигляд в залежності від стану авторизації
    // Верхня частина буде однаковою, футер - буде відрізнятися


    // const commonProductCardPart = `<div class="product-data">
    //                                     <div><img src="${product.image}" class="product-img"></div>
    //                                     <div class="product-category"><div class="product-category-text">${category.name}</div></div>
    //                                     <div class="product-name">${product.name}</div>
    //                                     <div class="product-text">Description: <span class="product-volume">${product.description}</span></div> 
    //                                      <div class="product-text">Priority: <span class="product-material">${product.priority}</span></div>
    //                                     <div class="product-text">Due date: <span class="product-material">${product.dueDate}</span></div> 
    //                                     <div class="product-text">Employee: <span class="product-price">${product.assignedEmployee}</span></div>   
    //                                 </div>`;

// ВНИЗУ ХОРОША РОБОЧА МОЯ ВЕРСІЯ
      const commonProductCardPart = `<div class="product-data">
                                        <div><img src="${product.image}" class="product-img"></div>
                                        <div class="product-name">${product.name}</div>
                                        <div class="product-category">
                                        <i class="fa fa-thumbtack"></i>
                                        <div class="product-category-text">${category.name}</div>
                        
                                        </div>

                                        <div class="product-des"><span class="product-tit">Description:</span> <span class="product-des">${product.description}</span></div> 
                                        <div class="product-prio"><span class="product-tit">Priority:</span>  <span class="product-prio">${product.priority}</span></div>
                                    
                                        <div class="product-due"><span class="product-tit">Due date:</span> <span class="product-due">${formatDate(product.dueDate)}</span></div>
                                        <div class="product-empl"><span class="product-tit"></span>  <span class="product-empl">${product.assignedEmployee}</span></div>   
                                    </div>`;

                                    // <div class="product-due"><span class="product-tit">Due date:</span>  <span class="product-due">${product.dueDate}</span></div> 
    
                                    // <div> <span class="product-price">${product.assignedEmployee} &#x20b4 </span> </div>  

    const adminProductCardFooter = `  <div class="product-footer">
                                                                          
                                        <div class="product-manage-btns">
                                            <div class="fas fa-edit product-btn" id='editProduct${product._id}'> </div>
                                            <div class="fa-solid fa-trash-can product-btn" id="removeProduct${product._id}"></div>
                                        </div> 
                                    </div>`;

{/* <div> <span class="product-price">${product.assignedEmployee} &#x20b4 </span> </div>                                     */}

    const userProductCardFooter = `
                                    <div class="product-footer">
                                        
                                        <div class="product-manage-btns">
                                         <div class="fa fa-check-circle product-cart-btn" id="addToCart${product._id}"> </div>
                                        </div> 
                                    </div>`;

                                    // <div> <span class="product-price">${product.assignedEmployee} &#x20b4 </span> </div> 

    const unAuthProductCardFooter = `
                                    <div class="product-footer">
                                                                          
                                        <div class="product-manage-btns">
                                            <div class="fa fa-check-circle product-cart-btn" id='popUp${product._id}' > </div>
                                        </div> 
                                    </div>`;
    // Перевіряємо стан авторизації
    const user = getUser();
    
    // В залежності від стану авторизації формуємо карточку
    switch (true) {
        // Перевіряємо чи авторизований користувач
        case user === null:
            // Картка продукуту для  неваторизованого користувача
            productCard.innerHTML = `${commonProductCardPart} ${unAuthProductCardFooter}`;
            break;
        // Перевіряємо, чи авторизований користувач є покупцем 
        case user && !user.isAdmin :
            // Меню авторизованого покупця
            productCard.innerHTML = `${commonProductCardPart} ${userProductCardFooter}`;
            break;
        // Перевіряємо, чи авторизований користувач є адміністраторои
        case  user.isAdmin:
            // Меню адміністратора
            productCard.innerHTML = `${commonProductCardPart} ${adminProductCardFooter}`;
            break;   
    }
    
    // Розміщаємо карточку продукту
    const dataContainer = document.querySelector(".data-container");
    dataContainer.appendChild(productCard);

    // Навішуємо обробники подій
    attachEventHandler(`popUp${product._id}`, 'click', () => { popUp('Please log in', 'danger') });
    attachEventHandler(`addToCart${product._id}`, 'click', () => { addToCart(product) });
    attachEventHandler(`editProduct${product._id}`, 'click', () => { editProduct(product) });
    attachEventHandler(`removeProduct${product._id}`, 'click', () => { removeProduct(product) });
}

import { createOrder } from "../orderAPI/order.js";
import { CustomModal } from "./main.js";
///
/// ********* Модальне вікно для створення замовлення
///

const orderModalTitle = `Apply for change status`;
const orderModalContent = `<form name="orderForm">
    <div class="mb-3 order-recipient-name">
        <label for="employeeName" class="form-label">Assigned employee name</label>
        <input type="text" class="form-control" id="recipientName" name="recipientName" placeholder="Enter employee full name" required>
    </div>
    <div class="mb-3 order-delivery-address">
        <label for="details" class="form-label">Details</label>
        <textarea class="form-control" id="details" name="deliveryAddress" rows="3" required></textarea>
    </div>
    <div class="modal-form-footer">
        <input type="submit" class="btn btn-success" id="orderSubmitBtn" value="Confirm">
    </div>
</form>`  ;
const orderModalFooter =``;

export const orderModal = new CustomModal('ordr', orderModalTitle, orderModalContent, orderModalFooter);
orderModal.create();

// Обробник відправки ордера
document.forms['orderForm'].addEventListener('submit', (event) => {
    event.preventDefault();
    createOrder();
})
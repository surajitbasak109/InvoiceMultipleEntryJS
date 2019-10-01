// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    document.querySelector('#btnRowAdd').addEventListener('click', () => {
        let table = document.querySelector('#itemTable'),
            tbody = table.querySelector('tbody'),
            tr = tbody.querySelectorAll('tr'),
            i = tr.length;
        i++;
        let html = `<tr>
            <td data-title="Check">
                <input class="case" class="form-control" type="checkbox" />
            </td>

            <td data-title="Item Name">
                <input class="form-control" type="text" name="data[${i}][item_name]"
                    id="item_name_${i}" required>
                <div class="invalid-feedback small">Item name is required</div>
            </td>
            <td data-title="Item Code">
                <input class="form-control" type="text" name="data[${i}][item_code]"
                    id="item_code_${i}" required>
                <div class="invalid-feedback small">Item code is required</div>
            </td>
            <td data-title="Rate">
                <input class="form-control" type="text" name="data[${i}][rate]" id="rate_${i}"
                    required>
                <div class="invalid-feedback small">Rate is required</div>
            </td>
            <td data-title="Quantity">
                <input class="form-control" type="text" name="data[${i}][qty]" id="qty_${i}" required>
                <div class="invalid-feedback small">Quantity is required</div>
            </td>
            <td data-title="Discount">
                <input class="form-control" type="text" name="data[${i}][discount]"
                    id="discount_${i}">
            </td>
            <td data-title="Amount">
                <input class="form-control" type="text" name="data[${i}][amount]" id="amount_${i}"
                    required readonly>
                <div class="invalid-feedback small">Amount is required</div>
            </td>
        </tr>`;
        tbody.insertAdjacentHTML("beforeend", html);
    });

    document.querySelector('#check_all').addEventListener('change', (event) => {
        let check = document.querySelectorAll('input[type=checkbox].case');
        if (event.target.checked) {
            check.forEach((item) => {
                item.checked = true;
            });
        } else {
            check.forEach((item) => {
                item.checked = false;
            });
        }
    });

    document.querySelector('#btnRowDelete').addEventListener('click', () => {

        let tbody = document.querySelector('#itemTable tbody'),
            checked = document.querySelectorAll('input[type=checkbox].case:checked');
        checked.forEach((item) => {
            tbody.removeChild(item.parentElement.parentElement);
        });

        document.querySelector('#check_all').checked = false;
    });
})();
function openModal(modalId) {
    $('.modal-overlay').addClass('modal-open');
    $(modalId).addClass('modal-open');
}

function closeModal() {
    $('.modal-overlay').removeClass('modal-open');
    $('#add-category-modal, #add-lot-modal, #update-lot-modal').removeClass('modal-open');
    $('.error').addClass('hidden')
}

$(document).on('click', '#add-category-button', function(e) {
    e.preventDefault();
    openModal('#add-category-modal');
});

$(document).on('click', '#add-lot-button', function(e) {
    e.preventDefault();
    openModal('#add-lot-modal');
});

$(document).on('click', '#update-lot', function(e) {
    e.preventDefault();
    openModal('#update-lot-modal');

    let lotElement = $(this).closest('.lot');
    let lotId = lotElement.find('#lot_id').val();
    let lotName = lotElement.find('.lot-name').text();
    let updateRoute = $(this).data('update');

    $('#modal-lot-name').text(lotName)
    $('#update-id').val(lotId)
    $('#change-lot').attr('data-update', updateRoute);
});

$(document).on('click', '.close, .modal-overlay', function(e) {
    e.preventDefault();
    closeModal();
});

$(document).on('click', '#create-category', function() {
    let csrfToken = $('meta[name="csrf-token"]').attr('content');
    let newCategory = $('#add-category input').val();
    let createCategoryUrl = $(this).data('create');
        
    $.ajax({
        url: createCategoryUrl,
        type: 'POST',
        data: {
            _token: csrfToken,
            _method: 'POST',
            name: newCategory
        },
        success: function() {
            closeModal();
            location.reload();
        },
        error: function(response) {
            let error = $('#add-category').find('.error')
            error.removeClass('hidden')
            error.text(response.responseJSON.message)
        }
    });
});

$(document).on('click', '#delete-category', function(e) {
    e.preventDefault();

    let csrfToken = $('meta[name="csrf-token"]').attr('content');
    let categoryId = $(this).closest('.category').find('#category_id').val();
    let deleteCategoryUrl = $(this).data('delete');

    $.ajax({
        url: deleteCategoryUrl,
        type: 'DELETE',
        data: {
            _token: csrfToken,
            _method: 'DELETE',
            id: categoryId
        },
        success: function(response) {
            window.location.href = '/'
        },
        error: function(response) {
            console.log(response, 'error')
        }
    });
});

$(document).on('click', '#create-lot', function(e) {
    e.preventDefault();

    let csrfToken = $('meta[name="csrf-token"]').attr('content');
    let createLotUrl = $(this).data('create');

    let lotName = $('#add-lot input[name="name"]').val();
    let lotPrice = $('#add-lot input[name="price"]').val();
    let lotDescription = $('#add-lot input[name="description"]').val();
    let categoryName = $('#add-lot input[name="category_name"]').val();

    $.ajax({
        url: createLotUrl,
        type: 'POST',
        data: {
            _token: csrfToken,
            _method: 'POST',
            name: lotName,
            price: lotPrice,
            description: lotDescription,
            category_name: categoryName
        },
        success: function() {
            location.reload();
        },
        error: function(response) {
            if(response.responseJSON.message === 'The price field must be a number.') {
                let error = $('#change-lot-data').find('.error')
                error.removeClass('hidden')
                error.text(response.responseJSON.message)
                return
            }
            let error = $('#add-lot').find('.error')
            error.removeClass('hidden')
            error.text('All fields must be filled')
        }
    });
});

$(document).on('click', '#delete-lot', function(e) {
    e.preventDefault();

    let csrfToken = $('meta[name="csrf-token"]').attr('content');
    let lotId = $(this).closest('.lot').find('#lot_id').val();
    let deleteLotUrl = $(this).data('delete');

    $.ajax({
        url: deleteLotUrl,
        type: 'DELETE',
        data: {
            _token: csrfToken,
            _method: 'DELETE',
            id: lotId
        },
        success: function(response) {
            window.location.href = '/'
        },
        error: function(response) {
            console.log(response, 'error')
        }
    });
});

$(document).on('click', '#change-lot', function(e) {
    e.preventDefault();

    let csrfToken = $('meta[name="csrf-token"]').attr('content');
    let updateLotUrl = $(this).data('update');

    let lotName = $('#change-lot-data input[name="name"]').val();
    let lotPrice = $('#change-lot-data input[name="price"]').val();
    let lotDescription = $('#change-lot-data input[name="description"]').val();

    $.ajax({
        url: updateLotUrl,
        type: 'PATCH',
        data: {
            _token: csrfToken,
            name: lotName,
            price: lotPrice,
            description: lotDescription
        },
        success: function() {
            location.reload();
        },
        error: function(response) {
            if(response.responseJSON.message === 'The price field must be a number.') {
                let error = $('#change-lot-data').find('.error')
                error.removeClass('hidden')
                error.text(response.responseJSON.message)
                return
            }
            let error = $('#change-lot-data').find('.error')
            error.removeClass('hidden')
            error.text('All fields must be filled')
        }
    });
});
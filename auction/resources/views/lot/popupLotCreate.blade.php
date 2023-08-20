<div class="modal-lot" id="add-lot-modal">
        <div class="modal-content">
            <p class="title">Add New Lot</p>
            <div class="modal-body" id="add-lot">
                <input type="hidden" name="category_name" value="{{ request()->route('name') }}">
                <div>
                    <label for="lot-name">Name</label>
                    <input class="input" type="text" name="name" placeholder="name" id="lot-name">
                </div>
                <div>
                    <label for="lot-name">Price in $</label>
                    <input class="input" type="text" name="price" placeholder="price" id="lot-price">
                </div>
                <div>
                    <label for="lot-name">Description</label>
                    <input class="input" type="text" name="description" placeholder="description" id="lot-description">
                </div>
                <p class="error hidden"></p>
            </div>
            <div class="modal-buttons">
                <button type="button" class="btn close">Close</button>
                
                <button type="submit" class="btn create" id="create-lot" data-create="{{ route('newLot', ['name' => $category->name]) }}">Create Lot</button>
            </div>
        </div>
    </div>
</div>
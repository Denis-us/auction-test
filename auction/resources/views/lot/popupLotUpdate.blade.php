<div class="modal-update-lot" id="update-lot-modal">
    <div class="modal-content">
            <p class="title">Update Lot <span id="modal-lot-name"></span></p>
        <div class="modal-body" id="change-lot-data">
            <input type="hidden" name="id" id="update-id" value="">
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
            
            <button type="submit" class="btn update" id="change-lot" data-update="">Update</button>
        </div>
    </div>
</div>
</div>
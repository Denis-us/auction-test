<div class="modal-category" id="add-category-modal">
        <div class="modal-content">
            <p class="title">Add New Category</p>
            <div class="modal-body" id="add-category">
                {{-- <form id="add-category-form" action="{{ route('newCategory') }}" method="POST"> --}}
                    <label for="category-name">Category Name</label>
                    <input class="input" type="text" name="name" placeholder="Category Name" id="category-name">
                    {{-- @error('name')
                        <div class="alert-danger" role="alert">
                            <p class="form-text">{{ $message }}</p>
                        </div>
                    @enderror --}}
                {{-- </form> --}}
            </div>
            <div class="modal-buttons">
                <button type="button" class="btn close">Close</button>
                <button type="submit" class="btn create" id="create-category" data-create="{{ route('newCategory') }}">Create Category</button>
            </div>
        </div>
</div>
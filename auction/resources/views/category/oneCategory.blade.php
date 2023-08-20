@extends('layout')

@section('content')
    <div class="auction">
        <div class="all-categories">
            <h1 class="title">Categories</h1>

            @if(isset($categories) && count($categories) > 0)
                <div id="all-categories">
                    <div id="categories-list">
                        <ul class="list">
                            @foreach($categories as $category)
                                <a class="category-el" href="{{ route('showCategory', ['name' => $category->name]) }}">
                                    <li class="category" data-category="{{ $category->name }}">
                                        <p class="category-name">{{ $category->name }}</p>
                                        <input type="hidden" name="id" id="category_id" value="{{ $category->id }}">
                                        <button class="btn delete" id="delete-category" type="button" data-delete="{{ route('deleteCategory', ['id' => $category->id]) }}">Delete</button>
                                    </li>
                                </a>
                            @endforeach
                        </ul>
                    </div>
                </div>
            @endif

            <div class="button">
                <button class="btn create" id="add-category-button" type="button">Create</button>
            </div>
        </div>

        <div class="all-lots">
            <h1 class="title">Lots</h1>
            <p class="lot-title">{{ request()->route('name') }}</p>

            @if(isset($lots) && count($lots) > 0 && isset($categories) && count($categories) > 0)
                <ul class="list lots ">
                    @foreach ($lots as $lot)
                        <a class="lot-el" href="{{ route('showLot', ['name' => $lot->category_name, 'id' => $lot->id]) }}">
                            <li class="lot">
                                <div class="lot-head">
                                    <p class="lot-name">{{ $lot->name }}</p>
                                    <p class="lot-price">{{ $lot->price }} $</p>
                                </div>
                                <p class="lot-description">{{ $lot->description }}</p>
                                <input type="hidden" name="id" id="lot_id" value="{{ $lot->id }}">
                                <div>
                                    <button class="btn update" id="update-lot" type="button" data-update="{{ route('updateLot', ['name' => $category->name, 'id' => $lot->id]) }}">Update</button>
                                    <button class="btn delete" id="delete-lot" type="button" data-delete="{{ route('deleteLot', ['name' => $category->name, 'id' => $lot->id]) }}">Delete</button>
                                </div>
                            </li>
                        </a>
                    @endforeach
                </ul>
            @endif

            <div class="button">
                <button class="btn create" id="add-lot-button" type="button">Create</button>
            </div>
        </div>
    
    </div>
    @include('lot.popupLotCreate')
    @include('lot.popupLotUpdate')
@endsection
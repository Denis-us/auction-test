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
    </div>
@endsection
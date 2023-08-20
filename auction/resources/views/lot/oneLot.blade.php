@extends('layout')

@section('content')
    @if(isset($lot))
        <div class="lot-container">
            <div class="lot">
                <input type="hidden" name="id" id="lot_id" value="{{ $lot->id }}">
                <div class="lot-info">
                    <p class="lot-name one-lot">{{ $lot->name }}</h1>
                    <p>Price: <span class="lot-price">{{ $lot->price }} $</span></p>
                    <p>Description: <span class="lot-description">{{ $lot->description }}</span></p>
                </div>
                <div class="lot-btns">
                    <button class="btn update" id="update-lot" type="button" data-update="{{ url()->current() }}">Update</button>
                    <button class="btn delete" id="delete-lot" type="button" data-delete="{{ url()->current() }}">Delete</button>
                </div>
                <a href="/" class="back">Main page</a>
            </div>
            @include('lot.popupLotUpdate')
        </div>
    @endif
@endsection
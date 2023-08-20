<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LotController;

// Categories
Route::get('/', [CategoryController::class, 'allCategories'])->name('allCategories');
Route::post('/', [CategoryController::class, 'newCategory'])->name('newCategory');
Route::patch('/', [CategoryController::class, 'updateCategory'])->name('updateCategory');
Route::delete('/{id}', [CategoryController::class, 'deleteCategory'])->name('deleteCategory');
Route::get('/{name}', [CategoryController::class, 'showCategory'])->name('showCategory');

// Lots
Route::post('/{name}', [LotController::class, 'newLot'])->name('newLot');
Route::delete('/{name}/{id}', [LotController::class, 'deleteLot'])->name('deleteLot');
Route::patch('/{name}/{id}', [LotController::class, 'updateLot'])->name('updateLot');
Route::get('/{name}/{id}', [LotController::class, 'showLot'])->name('showLot');
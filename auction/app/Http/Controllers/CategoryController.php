<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Lot;

class CategoryController extends Controller
{
    public function allCategories()
    {
        $categories = Category::get();
        return view('auction', compact('categories'));
    }

    public function newCategory(Request $request)
    {
        request()->validate([
            'name' => 'required|unique:categories|max:255'
        ]);
        $category = Category::create([
            'name' => $request->input('name'),
        ]);
        $categories = Category::all();
        return response()->json(['name' => $category->name]);
    }

    public function showCategory($name)
    {
        $category = Category::where('name', $name)->first();
        $lots = Lot::where('category_name', $name)->get();
        $categories = Category::all();
        return view('category.oneCategory', compact('category', 'categories', 'lots'));
    }

    public function deleteCategory($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json(['id' => $id]);
    }
}
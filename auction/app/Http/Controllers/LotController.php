<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Lot;

class LotController extends Controller
{
    public function newLot(Request $request, $name)
    {
        request()->validate([
            'category_name' => 'required',
            'name' => 'required|max:50',
            'price' => 'required',
            'description' => 'required|max:255',
        ]);
        $lot = Lot::create([
            'category_name' => $request->input('category_name'),
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'description' => $request->input('description'),
        ]);
        $categories = Category::all();
        $category = Category::where('name', $name)->first();
        // return view('category.oneCategory', compact('lot', 'categories'));
        return response()->json(['name' => $name]);
        // return redirect()->route('showCategory', ['name' => $category->$name]);
    }

    public function deleteLot($name, $id)
    {
        $lot = Lot::findOrFail($id);
        $lot->delete();

        return response()->json(['id' => $id]);
    }

    public function updateLot(Request $request, $name, $id)
    {
        $lot = Lot::findOrFail($id);
    
        $lot->update([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'description' => $request->input('description'),
        ]);
    
        return response()->json(['id' => $id]);
    }

    public function showLot($category_name, $id)
    {
        $lot = Lot::where('id', $id)->first();

        return view('lot.onelot', compact('lot'));
    }
}
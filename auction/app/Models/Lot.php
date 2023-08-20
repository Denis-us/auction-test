<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{
    protected $fillable = [
        'category_name',
        'name',
        'price',
        'description',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

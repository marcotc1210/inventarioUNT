<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    protected $fillable = [
        'descripcion',
    ];

    public function dispositivos()
    {
        return $this->hasMany(Dispositivo::class);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tipo;
use Illuminate\Http\Request;

class TipoController extends Controller
{
    public function index()
    {
        $tipos = Tipo::all();
        return $tipos;
    }

    public function store(Request $request)
    {
        $tipo = new Tipo();

        $tipo->descripcion = $request->descripcion;

        $tipo->save();
        return $tipo;
    }

    public function show(string $id)
    {
        $tipo = Tipo::find($id);
        return $tipo;
    }

    public function update(Request $request, string $id)
    {
        $tipo = Tipo::findOrFail($request->id);
        
        $tipo->descripcion = $request->descripcion;

        $tipo->save();
        return $tipo;
    }

    public function destroy(string $id)
    {
        $tipo = Tipo::destroy($id);
        return $tipo;
    }
}

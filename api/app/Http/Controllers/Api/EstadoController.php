<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Estado;

class EstadoController extends Controller
{
    public function index()
    {
        $estados = Estado::all();
        return $estados;
    }

    public function store(Request $request)
    {
        $estado = new Estado();

        $estado->descripcion = $request->descripcion;

        $estado->save();
        return $estado;
    }

    public function show(string $id)
    {
        $estado = Estado::find($id);
        return $estado;
    }

    public function update(Request $request, string $id)
    {
        $estado = Estado::findOrFail($request->id);
        
        $estado->descripcion = $request->descripcion;

        $estado->save();
        return $estado;
    }

    public function destroy(string $id)
    {
        $estado = Estado::destroy($id);
        return $estado;
    }
}

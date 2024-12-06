<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dispositivo;
use Illuminate\Http\Request;

class DispositivoController extends Controller
{
    public function index()
    {
        // $dispositivos = Dispositivo::all();
        // return $dispositivos;
        $dispositivos = Dispositivo::with('tipo', 'estado')->get();
        return response()->json($dispositivos);
    }

    public function store(Request $request)
    {
        $dispositivo = new Dispositivo();

        $dispositivo->tipoId = $request->tipo;
        $dispositivo->estadoId = $request->estado;
        $dispositivo->ubicacion = $request->ubicacion;
        $dispositivo->habilitado = $request->habilitado;
        // $dispositivo->usuario = $request->usuario;
        $dispositivo->fecha_ingreso = $request->fecha_ingreso;
        $dispositivo->color = $request->color;
        $dispositivo->marca = $request->marca;
        $dispositivo->serie = $request->serie;
        $dispositivo->modelo = $request->modelo;
        $dispositivo->dimensionLargo = $request->dimensionLargo;
        $dispositivo->dimensionAlto = $request->dimensionAlto;
        $dispositivo->dimensionProfundidad = $request->dimensionProfundidad;
        
        $dispositivo->save();
        return $dispositivo;
    }

    public function show(string $id)
    {
        $dispositivo = Dispositivo::find($id);
        return response()->json($dispositivo);
    }

    public function update(Request $request, string $id)
    {
        $dispositivo = Dispositivo::findOrFail($request->id);
        
        $dispositivo->tipoId = $request->tipo;
        // $dispositivo->estado = $request->estado;
        $dispositivo->ubicacion = $request->ubicacion;
        // $dispositivo->habilitado = $request->habilitado;
        // $dispositivo->usuario = $request->usuario;
        $dispositivo->fecha_ingreso = $request->fecha_ingreso;
        $dispositivo->color = $request->color;
        $dispositivo->marca = $request->marca;
        $dispositivo->serie = $request->serie;
        $dispositivo->modelo = $request->modelo;
        $dispositivo->dimensionLargo = $request->dimensionLargo;
        $dispositivo->dimensionAlto = $request->dimensionAlto;
        $dispositivo->dimensionProfundidad = $request->dimensionProfundidad;

        $dispositivo->save();
        return $dispositivo;
    }

    public function destroy(string $id)
    {
        $dispositivo = Dispositivo::destroy($id);
        return $dispositivo;
    }
}

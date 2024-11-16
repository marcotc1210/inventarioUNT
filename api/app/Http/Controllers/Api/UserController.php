<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        $usuarios = User::all();
        return $usuarios;
    }

    public function store(Request $request)
    {
        $usuario = new User();

        $usuario->document = $request->document;
        $usuario->name = $request->name;
        $usuario->lastname1 = $request->lastname1;
        $usuario->lastname2 = $request->lastname2;
        $usuario->email = $request->email;
        $usuario->password = $request->password;

        // $usuario->rol = $request->rol;

        $usuario->save();
        return $usuario;
    }

    public function show(string $id)
    {
        $usuario = User::find($id);
        return $usuario;
    }

    public function update(Request $request, string $id)
    {
        $usuario = User::findOrFail($request->id);
        
        $usuario->document = $request->document;
        $usuario->name = $request->name;
        $usuario->lastname1 = $request->lastname1;
        $usuario->lastname2 = $request->lastname2;
        // $usuario->rol = $request->rol;

        $usuario->save();
        return $usuario;
    }

    public function destroy(string $id)
    {
        $usuario = User::destroy($id);
        return $usuario;
    }
}


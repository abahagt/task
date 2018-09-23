<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AddController extends Controller
{
    public function send(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'price' => 'required',
        ]);

        Add::create($request->all());

        return view()>with(['success' => 'done']);
    }
}

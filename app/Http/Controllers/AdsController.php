<?php

namespace App\Http\Controllers;

use App\Ads;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Ads::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('filepond')) {
            /* Handle pictures upload */
            $pictures = $request->file('filepond')->store('public/ad-pictures');
            $pictures = substr($pictures, 7);

            return $pictures;
        } else {
            $this->validate($request, [
                'title' => 'required|string',
                'features' => 'required|string',
                'category' => 'required|string',
                'description' => 'required|string',
                'price' => 'required',
            ]);

            /* Create new ad song */
            $ad = new Ads;
            $ad->title = $request->input('title');
            $ad->features = $request->input('features');
            // $ad->user_id = auth()->user()->id;
            $ad->category = $request->input('category');
            $ad->description = $request->input('description');
            $ad->price = $request->input('price');
            $ad->pictures = $request->input('pictures');
            $ad->save();

            return response('Ad Uploaded', 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function show(Ads $ads)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function edit(Ads $ads)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required|string',
            'features' => 'required|string',
            'category' => 'required|string',
            'description' => 'required|string',
            'price' => 'required',
        ]);

        /* Update Ad */
        $ad = Ads::find($id);

        if ($request->filled('title')) {
            $ad->title = $request->input('title');
        }
        if ($request->filled('features')) {
            $ad->features = $request->input('features');
        }
        if ($request->filled('category')) {
            $ad->category = $request->input('category');
        }
        if ($request->filled('description')) {
            $ad->description = $request->input('description');
        }
        if ($request->filled('price')) {
            $ad->price = $request->input('price');
        }

        $ad->save();

        return response('Ad Edited', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Storage::delete('public/ads/' . $id);

        return response("Picture deleted", 200);
    }
}

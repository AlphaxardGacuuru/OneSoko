<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Post::all();
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
            $pictures = $request->file('filepond')->store('public/post-pictures');
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

            /* Create new post song */
            $post = new Post;
            $post->title = $request->input('title');
            $post->features = $request->input('features');
            // $post->user_id = auth()->user()->id;
            $post->category = $request->input('category');
            $post->description = $request->input('description');
            $post->price = $request->input('price');
            $post->pictures = $request->input('pictures');
            $post->save();

            return response('Post Uploaded', 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        /* Update Post */
        $post = Post::find($id);

        if ($request->filled('title')) {
            $post->title = $request->input('title');
        }
        if ($request->filled('features')) {
            $post->features = $request->input('features');
        }
        if ($request->filled('category')) {
            $post->category = $request->input('category');
        }
        if ($request->filled('description')) {
            $post->description = $request->input('description');
        }
        if ($request->filled('price')) {
            $post->price = $request->input('price');
        }

        $post->save();

        return response('Post Edited', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Storage::delete('public/posts/' . $id);

        return response("Picture deleted", 200);
    }
}

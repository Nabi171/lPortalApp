import React from 'react';

const AddVideo = () => {
    return (
        <main className="py-6 2xl:px-6">
            <div className="container">
                <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                    <form method="POST" onSubmit={handleSubmit} className="book-form">
                        <div className="space-y-2">
                            <label for="lws-bookName">Book Name</label>
                            <input required className="text-input" type="text"
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}
                                id="lws-bookName" name="name" />
                        </div>

                        <div className="space-y-2">
                            <label for="lws-author">Author</label>
                            <input required className="text-input" type="text"
                                // value={author}
                                // onChange={(e) => setAuthor(e.target.value)}
                                id="lws-author" name="author" />
                        </div>

                        <div className="space-y-2">
                            <label for="lws-thumbnail">Image Url</label>
                            <input required className="text-input"
                                // value={thumbnail}
                                // onChange={(e) => setThumbnail(e.target.value)}
                                type="text" id="lws-thumbnail" name="thumbnail" />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <label for="lws-price">Price</label>
                                <input required className="text-input"
                                    // value={price}
                                    // onChange={(e) => setPrice(e.target.value)}
                                    type="number" id="lws-price" name="price" />
                            </div>

                            <div className="space-y-2">
                                <label for="lws-rating">Rating</label>
                                <input required className="text-input"
                                    // value={rating}
                                    // onChange={(e) => setRating(e.target.value)}
                                    type="number" id="lws-rating" name="rating" min="1"
                                    max="5" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input id="lws-featured"
                                value={featured}
                                onChange={handleFeature}
                                type="checkbox" name="featured" className="w-4 h-4" />
                            <label for="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" className="submit" id="lws-submit">Add Book</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AddVideo;
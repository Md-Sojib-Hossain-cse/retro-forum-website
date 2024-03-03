const defaultPosts = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    const postsContainer = document.getElementById('authors-posts-container');
    posts.forEach(post => {
        const div = document.createElement('div');
        // console.log(post.title)
        div.classList = `bg-[#F3F3F5] p-3 md:p6 lg:p-8 xl:p-10 rounded-3xl flex w-full gap-4 lg:gap-5 xl:gap-6`;
        div.innerHTML= `
                        <div class="indicator">
                            <span class="indicator-item badge bg-green-700"></span>
                            <div class="grid w-[72px] h-[72px] bg-base-300 place-items-center">
                                <img src="${post?.image}" class="rounded-xl">
                            </div>
                        </div>

                        <div class="font-inter w-full">
                            <div class="text-[#12132DCC] text-sm font-medium leading-4 flex gap-4 lg:gap-5">
                                <p># ${post?.category}</p>
                                <p>Author : ${post?.author?.name}</p>
                            </div>
                            <h4 class="font-mulish text-xl font-bold leading-6  mt-2  md:mt-3">${post?.title}</h4>
                            <p class="text-[#12132D99] mt-3 lg:mt-4 lg:pr-6 pb-4 lg:pb-5">${post?.description}</p>
                            <div class="flex justify-between pt-5 lg:pt-6 border-t-2 border-dashed border-[#12132D40]">
                                <div class="text-[#12132D99] flex justify-between space-x-5 lg:space-x-6">
                                    <div class="flex gap-2 lg:gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                        <span>${post?.comment_count}</span>
                                    </div>
                                    <div class="flex gap-2 lg:gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                        <span>${post?.view_count}</span>
                                    </div>
                                    <div class="flex gap-2 lg:gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <span>${post?.posted_time} min</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="bg-[#10B981] text-white p-1 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
        postsContainer.appendChild(div);
        console.log();
    });
}
defaultPosts();
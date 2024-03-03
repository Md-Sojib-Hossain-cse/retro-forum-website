// Default Dynamic posts 
const defaultPosts = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    const postsContainer = document.getElementById('authors-posts-container');
    posts.forEach(post => {
        const div = document.createElement('div');
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
                                    <div class="bg-[#10B981] text-white p-1 rounded-full" onclick="markAsRead( '${(post?.title).replace("'" , "@")}' , '${post?.view_count}')">
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
    });
}
defaultPosts();

const latestPosts = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const postCardsContainer = document.getElementById('post-cards-container');
    data.forEach(post => {
        console.log(post?.author?.posted_date)
        const div = document.createElement('div');
        div.classList = `card w-full bg-white border-[1px] border-[#12132D26]`;
        div.innerHTML = `
        <figure class="px-3 md:px-5 lg:px-8 xl:px-10 pt-3 md:pt-5 lg:pt-8 xl:pt-10">
            <img src="${post?.cover_image}" alt="post cover" class="w-full bg-[#12132D0D] rounded-2xl">
        </figure>
        <div class="card-body items-left text-left">
            <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <p class="text-[#12132D99] leading-5">${post?.author?.posted_date}</p>
            </div>
            <h4 class="text-[#12132D] text-lg font-extrabold leading-7 mt-2 md:mt-3">${post?.title}</h4>
            <p class="text-[#12132D99] leading-6 mt-2 md:mt-3">${post?.description}</p>
            <div class="flex items-center gap-2 md:gap-3 lg:gap-4 mt-3 md:mt-4 ">
                <div class="h-11 w-11 rounded-full bg-gray-200">
                    <img src="${post?.profile_image}" alt="author_photo" class="rounded-full">
                </div>
                <div>
                    <h4 class="text-[#12132D] font-bold leading-5">${post?.author?.name}</h4>
                    <p class="text-[#12132D99] text-sm leading-4 mt-1">${post?.author?.designation}</p>
                </div>
            </div>
        </div>
        `;
        postCardsContainer.appendChild(div);
    })
}
latestPosts();

//mark as read 
const markAsRead = (postTitle , viewCount) =>{
    //dynamically updating total Reading
    const markReadTotalText = document.getElementById('markReadTotal');
    const markReadTotalValue = parseInt(markReadTotalText.innerText);
    const markReadNewTotal = markReadTotalValue + 1;
    markReadTotalText.innerText = markReadNewTotal;

    //dynamically adding reading list
    const readListContainer = document.getElementById('read-list-container');
    const div = document.createElement('div');
    div.classList = `mt-5 lg:mt-6`;
    div.innerHTML = `
    <div class="flex items-center gap-2 bg-white p-4 rounded-2xl">
        <h5 class="flex-1 text-[#12132D] font-semibold leading-6">${postTitle.replace("@" , "'")}</h5>
        <div class="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span>${viewCount}</span>
        </div>
    </div>
    `;
    readListContainer.appendChild(div);
}
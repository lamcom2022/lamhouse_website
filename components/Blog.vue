<template>
<banner />
    <div>
        <div class="bg-white pt-10 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8">
            <div class="relative max-w-lg mx-auto lg:max-w-7xl">
                <h3 class="text-lg tracking-tight font-normal text-primary-900 sm:text-2xl my-6">
                    Valued Services
                </h3>
                <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">
                    Managed IT, Software, Data & <br />Digital Marketing Services for Your Organization.
                </h2>
                <div class="mt-6 pt-5 grid gap-4 place-self-center lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8">
                    <div v-for="article of articles" :key="article._path"
                        class="shadow-lg flex-col flex-direction: column">
                        
                            <div class="flex flex-1 h-48 xxlmin:w-1/2 xxlmax:w-full object-center">
                                <img v-if="article.coverimage" class="scale-x-50 scale-y-50 mx-auto object-center overflow-hidden"
                                    :src="article.coverimage" />
                            </div>
                            
                       
                        
                        <div class="flex flex-1 flex-col justify-evenly bg-white p-3">
                            <div class="flex-1">
                                                           
                                    <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                                        <ClientOnly>
                                            {{ $s(article.title).prune(50)._wrapped }}
                                        </ClientOnly>
                                    </h3>
                                    <p class="mt-3 text-base leading-6 text-gray-500 text-center">
                                        <ClientOnly>
                                            {{ $s(article.description).prune(100)._wrapped }}
                                        </ClientOnly>
                                    </p>
                                    <a href="/services">
                                     <p class="mt-3 text-base leading-6 text-primary-500 text-center">
                                        <ClientOnly>
                                            {{ $s(article.link).prune(50)._wrapped }}
                                        </ClientOnly>
                                    </p> 
                                    </a>
                              
                            </div>
                           <!--
                            <div class="mt-3 flex items-center">

                                <p class="text-sm leading-5 font-medium text-gray-900">
                                    {{ article.author }}
                                </p>
                                <span class="mx-1">
                                    &middot;
                                </span>
                                <div class="flex text-sm leading-5 text-gray-500">

                                    {{ $dayjs(article.date).format('DD-MMM-YYYY') }}

                                    <span class="mx-1">
                                        &middot;
                                    </span>
                                    <span>

                                    </span>
                                </div>
                            </div>
                          -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        articles: Array,
    },
    filters: {

    },
};
</script>

<style>
.article-card {
    border-radius: 8px;
}

.article-card a {
    background-color: #fff;
    border-radius: 8px;
}

.article-card img div {
    border-radius: 8px 0 0 8px;
}
</style>
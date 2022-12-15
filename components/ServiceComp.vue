<template>
    <div>
        <div class="bg-white pt-10 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8">
            <div class="relative max-w-lg mx-auto lg:max-w-7xl">
                <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">
                    Why seek therapy?
                </h2>

                <div class="w-full max-w-5xl px-8 mx-auto leading-6 text-left xl:px-12">
                    <div class="
                        relative
                        w-full
                        px-4
                        leading-6                       
                        xl:flex-grow-0 xl:flex-shrink-0
                        lg:flex-grow-0 lg:flex-shrink-0
                      ">

                        <p class="
                          box-border
                          mx-0
                          mt-6
                          mb-0
                          text-sm
                          font-medium
                          leading-normal
                          text-gray-900
                          sm:text-lg
                        ">
                            Sometimes we can face the various problems of life alone or with help from our loved ones,
                            but it may not always be effective.
                            If you feel specific issues in your life aren’t getting better despite your best efforts,
                            that may be a sign that you could use help from therapy. A therapist can help analyse the
                            problem and suggest a new approach you may haven’t thought of before.
                        </p>
                    </div>
                </div>

                <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl mt-12">
                    Services
                </h2>
                <h3 class="text-lg tracking-tight font-normal text-primary-900 sm:text-1xl my-6">
                    "The sole journey is the journey within "
                </h3>

                <div class="mt-6 pt-5 grid gap-4 place-self-center lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8">
                    <div v-for="service of services" :key="service._path"
                        class="shadow-lg flex-col flex-direction: column">
                        <a :href="services._path">
                            <div class="flex flex-1 h-48 xxlmin:w-1/2 xxlmax:w-full object-center">
                                <img v-if="service.coverimage"
                                    class="scale-x-50 scale-y-50 mx-auto object-center overflow-hidden"
                                    :src="service.coverimage" />

                            </div>
                        </a>
                        <div class="flex flex-col justify-evenly bg-white p-3">
                            <div class="flex-2">
                                <a :href="service._path">
                                    <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                                        {{ $s(service.title).prune(50)._wrapped }}
                                        <ClientOnly>
                                        </ClientOnly>
                                    </h3>
                                </a>
                                <!-- <a href="/form">
                                <div class="grid w-3/4 mx-auto justify-center bg-primary h-12 mt-12 align-bottom rounded-lg">
                                <span class="text-justify mt-3 text-white">Book Now</span>
                                </div>
                                 </a> -->
                                <!-- <p class="mt-3 text-base leading-6 text-gray-500 text-center">
                                    <ClientOnly>
                                        {{ $s(service.status).prune(500)._wrapped }}
                                    </ClientOnly>
                                </p> -->
                                <div>
                                </div>
                            </div>
                            <br>
                            <br>
                            <div class="p-2 flex ">
                                <ul class="servicelist">
                                    <li class="servicelistText">
                                               {{ $s(service.bullet1).prune(50)._wrapped }}
                                    </li>
                                    <li>
                                        {{ $s(service.bullet2).prune(50)._wrapped }}
                                    </li>
                                    <li>
                                        {{ $s(service.bullet3).prune(50)._wrapped }}
                                    </li>
                                    <li>
                                        {{ $s(service.bullet4).prune(50)._wrapped }}
                                    </li>
                                    <li>
                                        {{ $s(service.bullet5).prune(50)._wrapped }}
                                    </li>
                                    <!-- <li>
                                        {{ $s(service.bullet6).prune(50)._wrapped }}
                                    </li>
                                    <li>
                                        {{ $s(service.bullet7).prune(50)._wrapped }}
                                    </li> -->
                                </ul>

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
                <a href="/form">
                    <div class="bg-primary w-32 h-12 rounded-full text-center mx-auto py-3 mt-6">
                        <span class="text-white font-normal text-sm text-center">Book Now</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        services: Array,
    },
    filters: {
    }
};
</script>

<style>
.servicelist li{
    padding: 8px;
    background-color: #728574;
    margin: 5px;
    border-radius: 5px;
    color: #fff;
    align-items: center;
    align-self: center;
    display:    flex;
    align-content: space-around;
    box-shadow: black;
}
.servicelistText{
    color: black;
}
.article-card {
    border-radius: 8px;
    height: 300vh;
}

.article-card a {
    background-color: #fff;
    border-radius: 8px;
}

.article-card img div {
    border-radius: 8px 0 0 8px;
}
</style>
<template>
   <div>
      <div class="container-full">
         <div class="navbar bg-gray-900 shadow-md w-screen">
            <div class="mx-auto">
               <img
                  src="https://www.optiktunggal.com/design/img/logoOT.png"
                  alt=""
               />
            </div>
         </div>
      </div>

      <div class="container-full">
         <div class="md:block hidden">
            <div class="flex justify-center items-center">
               <div class="">
                  <div class="mockup-phone mt-5">
                     <div class="camera"></div>
                     <div class="display">
                        <iframe
                           class="md:w-full sm:w-screen"
                           style="height: 736px"
                           src="https://ddgng.zappar.io/2086448079594778129/1.0.16/"
                           allow="camera;gyroscope;accelerometer"
                        ></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="block md:hidden">
            <iframe
               class="w-screen h-screen"
               src="https://ddgng.zappar.io/2086448079594778129/1.0.16/"
               allow="camera;gyroscope;accelerometer"
            ></iframe>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'IndexPage',
}
</script>

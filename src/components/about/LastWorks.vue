<template>
    <section>
        <div class="section_top">
            <div class="container">
                <h1>Latest design style</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat illum, tenetur, earum, reprehenderit explicabo quos ipsam neque accusantium incidunt saepe deleniti. Sunt omnis voluptatum fuga qui maiores? Voluptatum, molestias reprehenderit!</p>
            </div>
            <div class="section_bottom">
                <img src="../../assets/img/lastworks/iphone_2.png" alt="">
            </div> 
        </div>
        <div id="circle"><span></span><i><icon name="arrow-circle-o-down" scale="2"></icon></i></div>
    </section>
</template>

<style lang="sass" scoped>

.section_top
    text-align: center
    background-color: #EBEFF3
    h1
        padding: 0
        margin: 0
        font-size: 40px
        text-transform: uppercase
        padding-top: 120px
        padding-bottom: 40px
    p
        padding: 0
        margin: 0
        font-size: 14px
        padding-bottom: 70px
        color: #999da0

.section_bottom
    background-color: #EBEFF3

#circle 
  width: 100px
  height: 50px
  background: #28C8C6
  border-radius: 50% / 100%
  border-top-left-radius: 0
  border-top-right-radius: 0
  margin: auto
  i
    color: white
    padding-left: 37px
  span
    padding: 1px
    padding-left: 0

</style>

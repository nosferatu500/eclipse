<template>
    <section>
        <div class="container">
            <div class="section_top">
                <h1>Features of app</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis enim, suscipit obcaecati, eligendi, adipisci commodi expedita in ullam distinctio omnis voluptas. Sed fugiat molestias accusantium aliquam provident delectus corporis veritatis?</p>
            </div>
            <div class="section_bottom">
                <div class="col-md-3 features_item">
                    <img src="../../assets/img/features/card.png" alt="">
                    <h1>Lorem</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, debitis, pariatur. Iure voluptatem, totam similique modi! Reprehenderit numquam maxime porro a voluptatum, aliquam earum, eius totam omnis odio laudantium asperiores.</p>
                </div>
                <div class="col-md-3 features_item">
                    <img src="../../assets/img/features/plane.png" alt="">
                    <h1>Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, debitis, pariatur. Iure voluptatem, totam similique modi! Reprehenderit numquam maxime porro a voluptatum, aliquam earum, eius totam omnis odio laudantium asperiores.</p>
                </div>
                <div class="col-md-3 features_item">
                    <img src="../../assets/img/features/arrows.png" alt="">
                    <h1>Amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, debitis, pariatur. Iure voluptatem, totam similique modi! Reprehenderit numquam maxime porro a voluptatum, aliquam earum, eius totam omnis odio laudantium asperiores.</p>
                </div>
                <div class="col-md-3 features_item">
                    <img src="../../assets/img/features/window.png" alt="">
                    <h1>dolor</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, debitis, pariatur. Iure voluptatem, totam similique modi! Reprehenderit numquam maxime porro a voluptatum, aliquam earum, eius totam omnis odio laudantium asperiores.</p>
                </div>
            </div>
        </div>
        <div class="element">
            <div id="circle"><span></span><i><icon name="arrow-circle-o-down" scale="2"></icon></i></div>        
        </div>
    </section>
</template>

<style lang="sass" scoped>

.section_top
    text-align: center
    h1
        padding: 0
        margin: 0
        text-transform: uppercase
        font-size: 30px
        padding-top: 100px
        padding-bottom: 30px
    p
        padding: 0
        margin: 0
        font-size: 14px
        padding-bottom: 60px

.section_bottom
    .features_item
        text-align: center
        h1
            padding: 0
            margin: 0
            text-transform: uppercase
            font-size: 17px
            padding-top: 35px
            padding-bottom: 30px
        p
            padding: 0
            margin: 0
            font-size: 14px
            padding-bottom: 150px

#circle 
    width: 100px
    height: 50px
    background: white
    border-radius: 50% / 100%
    border-top-left-radius: 0
    border-top-right-radius: 0
    margin: auto
    i
        color: #EBEFF3
        padding-left: 37px
    span
        padding: 1px
        padding-left: 0

.element
    background-color: #EBEFF3
    
</style>

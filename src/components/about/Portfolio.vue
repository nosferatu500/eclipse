<template>
    <section>
        <div class="container">
            
            <div class="section_top">

            </div>

            <div class="section_middle">
                	
            </div>
            
            <div class="section_bottom">

            </div>
        </div>    
    </section>
</template>

<script>
export default {
  ready () {
    $(document).ready(function ($) {
      $('#portfolio_grid').mixItUp()
    })
  }
}
</script>

<style lang="sass" scoped>

/////////////
.s_portfolio
	ul,
	li
		list-style-type: none
		padding: 0
		margin: 0
		text-align: center
	li
		display: inline-block
		margin: 0 10px
		text-transform: uppercase
		font-size: 12px
		cursor: pointer
		line-height: 2
	ul
		margin-bottom: 50px

.portfolio_item
	padding: 0
	img
		width: 100%
	.port_item_container
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%
		background-color: rgba(0, 0, 0, .8)
		text-align: center
		padding-top: 15%
		opacity: 0
		transition: all .5s
	&:hover .port_item_container
		opacity: 1
		padding-top: 20%
	h3
		margin-bottom: 0
	a
		background-color: transparent
		border: #fff 1px solid
		padding: 2px 10px
		display: inline-block

.port_description
	background-color: #fff
	max-width: 500px
	margin: auto
	p,
	h3
		padding: 20px
		padding-bottom: 0
	h3
		margin-bottom: 0
		text-align: center
		text-transform: uppercase
		font-weight: 400
		margin-top: 20px
		padding-top: 25px
	p
		margin-top: 0
	img
		width: 100%
		margin-top: 10px
</style>

<template>
    <section class="s_portfolio">
        <div class="container">
            
            <div class="section_top">
				<h1>Our design guidelines</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum atque tempora officiis ad magnam natus, blanditiis, deleniti sit praesentium architecto dolore repellat fugit officia ipsa, voluptates maxime voluptatem eos provident?</p>
            </div>

            <div class="section_middle">
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<ul>
							<li>Development</li>
							<li>Design</li>
							<li>Business</li>
							<li>Arts</li>
						</ul>
					</div>
				</div>
            </div>
            
            <div class="section_bottom">
				<div class="portfolio">
					<div class="row">			
						<div class="s_item col-md-4">
							<img src="../../assets/img/portfolio/item.png" alt="">
							<h1>design listing one</h1>
						</div>
						<div class="s_item col-md-4">
							<img src="../../assets/img/portfolio/item.png" alt="">
							<h1>design listing one</h1>
						</div>
						<div class="s_item col-md-4">
							<img src="../../assets/img/portfolio/item.png" alt="">
							<h1>design listing one</h1>
						</div>
					</div>
				</div>
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

.s_portfolio
	background-color: #EBEFF3

.section_top
	h1
		padding: 0
		margin: 0
		text-transform: uppercase
		font-size: 30px
		padding-top: 80px
		padding-bottom: 20px
		text-align: center
	p
		padding: 0
		margin: 0
		font-size: 14px
		padding-bottom: 40px

.section_middle
	ul
		padding: 0
		margin: 0
		text-align: center
		border: 2px solid #28c8c6
		border-radius: 4px
		li
			list-style-type: none
			text-align: center
			padding: 0
			margin: 0
			display: inline-block
			padding: 20px 30px 20px
			color: #28c8c6
			&:hover
				color: white
				background-color: #28c8c6

.section_bottom
	.portfolio
		padding-top: 50px
		padding-bottom: 100px
		.col-md-4
			width: 30%
		.s_item
			border-radius: 4px
			text-align: center
			background-color: #fff
			padding-left: 0
			padding-right: 0
			margin-left: 7px
			margin-right: 7px	
			img
				padding: 0
				margin: 0
				padding-bottom: 20px
				width: 100%
			h1
				padding: 0
				margin: 0
				padding-bottom: 20px
				font-size: 14px
				text-transform: uppercase

</style>

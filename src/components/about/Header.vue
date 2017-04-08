<template>
  <link rel="stylesheet" href="../../libs/font-awesome/css/font-awesome.min.css" />

  <header class="main_head">
		<div class="container">

			<div class="header_nav_bar">
				<div class="row">
					<div class="col-sm-6">
						<img src="img/logo.png" alt="">
					</div>
					<div class="col-sm-4 header_nav">
						<nav>
							<ul>
								<li><a href="#">About</a></li>
								<li><a href="#">Studio</a></li>
								<li><a href="#">Pricing</a></li>
								<li><a href="#">Blog</a></li>
							</ul>
						</nav>
					</div>
					<div class="col-sm-2">
						<button>Join <i class="fa fa-arrow-circle-o-right"></i></button>
					</div>
				</div>
			</div>

			<div class="header_top">
				<h1>Push yourself</h1>
				<h1>& your</h1>
				<h1>designs</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur expedita nihil iure quibusdam quae ab. Id hic vero, laborum esse voluptate veritatis, obcaecati dolore quo ipsa nobis nam cum beatae?</p>
			</div>

			<div class="header_bottom">
        <div class="row">
          <div class="col-md-10">
            <input type="text">
				    <input type="text">
          </div>

          <div class="col-sm-2">
            <button> <i class="fa fa-arrow-circle-o-right"></i></button>
          </div>
        </div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

.img-responsive
	display: block
	max-width: 100%
	height: auto

.main_head
	background-image: url(../../assets/img/background_header_1.png)
	background-size: cover
	width: 100%
	padding-top: 70px

.header_nav
	padding: 0
	margin: 0
	ul
		float: right
		li
			list-style-type: none
			display: inline-block
			padding: 0 15px
			a
				text-transform: uppercase
				color: #fff
				font-size: 14px

.header_top
	padding-top: 190px
	color: #fff
	h1
		font-size: 60px
		line-height: 60px
		padding: 0
		margin: 0
		text-transform: uppercase
	p
		font-size: 16px
		padding: 40px 0 27px
		margin: 0

.header_nav_bar
	button
		border: #a100ff
		border-radius: 4px
		background-color: #a100ff
		color: #fff
		padding-top: 15px
		padding-bottom: 15px
		padding-left: 32px
		font-size: 16px
		i
			padding-left: 12px
			padding-right: 17px

.header_bottom
  row
    button
      border: #a100ff
      border-radius: 4px
      background-color: #a100ff
      color: #fff
      padding-top: 15px
      padding-bottom: 15px
      padding-left: 32px
      font-size: 16px
      float: left
      i
        padding-left: 12px
        padding-right: 17px

</style>

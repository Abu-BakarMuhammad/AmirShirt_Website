<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">


	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/initialLoading.css" rel="stylesheet">

	<link href="css/style.css" rel="stylesheet">
	<link href="css/font-awesome.min.css" rel="stylesheet">

	<link href="css/owl.carousel.css" rel="stylesheet">
</head>
<body class="templatemo-gray-bg">
	<div class="container">
		<div class="row" style="padding-top: 2em">
			@foreach($dress as $dress)
				<div class="col-md-4" style="padding-top: 3em">
					<img src="{{$dress->image_name}}" class="img-responsive img-rounded dress-image" alt="Responsive image">
				</div>
			@endforeach
		</div>
	</div>
</body>

</html>
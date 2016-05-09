(function(){
	var app = angular.module('wejob', ['wejob-jobs']);

	app.controller('JobController', function(){
		this.jobs = jobList;
	});

	var jobList = [
		{
			compLogo: './img/image-1.jpg',
			compName: 'Google Inc.',
			jobTitle: 'IT Engineer',
			jobPosit: 'Mountain View, CA',
			postTime: 'December 15 2015',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-2.jpg',
			compName: 'Apple Inc.',
			jobTitle: 'Full Stack Engineer',
			jobPosit: 'Mountain View, CA',
			postTime: 'December 16 2015',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-3.jpg',
			compName: 'WE Career Inc.',
			jobTitle: 'Front End Engineer',
			jobPosit: 'Dulin, CA',
			postTime: 'April 10 2016',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-4.jpg',
			compName: 'WE Housing Inc.',
			jobTitle: 'Marketing Intern',
			jobPosit: 'Dulin, CA',
			postTime: 'April 20 2016',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-1.jpg',
			compName: 'Google Inc.',
			jobTitle: 'IT Engineer',
			jobPosit: 'Mountain View, CA',
			postTime: 'December 15 2015',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-2.jpg',
			compName: 'Apple Inc.',
			jobTitle: 'Full Stack Engineer',
			jobPosit: 'Mountain View, CA',
			postTime: 'December 16 2015',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-3.jpg',
			compName: 'WE Career Inc.',
			jobTitle: 'Front End Engineer',
			jobPosit: 'Dulin, CA',
			postTime: 'April 10 2016',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-4.jpg',
			compName: 'WE Housing Inc.',
			jobTitle: 'Marketing Intern',
			jobPosit: 'Dulin, CA',
			postTime: 'April 20 2016',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-1.jpg',
			compName: 'Google Inc.',
			jobTitle: 'IT Engineer',
			jobPosit: 'Mountain View, CA',
			postTime: 'December 15 2015',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-2.jpg',
			compName: 'Apple Inc.',
			jobTitle: 'Full Stack Engineer',
			jobPosit: 'Mountain View, CA',
			postTime: 'December 16 2015',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-3.jpg',
			compName: 'WE Career Inc.',
			jobTitle: 'Front End Engineer',
			jobPosit: 'Dulin, CA',
			postTime: 'April 10 2016',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-4.jpg',
			compName: 'WE Housing Inc.',
			jobTitle: 'Marketing Intern',
			jobPosit: 'Dulin, CA',
			postTime: 'April 20 2016',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-1.jpg',
			compName: 'Google Inc.',
			jobTitle: 'IT Engineer',
			jobPosit: 'Mountain View, CA',
			postTime: 'December 15 2015',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-2.jpg',
			compName: 'Apple Inc.',
			jobTitle: 'Full Stack Engineer',
			jobPosit: 'Mountain View, CA',
			postTime: 'December 16 2015',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-3.jpg',
			compName: 'WE Career Inc.',
			jobTitle: 'Front End Engineer',
			jobPosit: 'Dulin, CA',
			postTime: 'April 10 2016',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		},
		{
			compLogo: './img/image-4.jpg',
			compName: 'WE Housing Inc.',
			jobTitle: 'Marketing Intern',
			jobPosit: 'Dulin, CA',
			postTime: 'April 20 2016',
			detail: 'Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio mauris, vel dapibus nulla accumsan vitae. Nulla sit amet imperdiet tortor. Sed vitae pharetra nisi, eu pretium dolor. Praesent vehicula nunc eu elit lobortis, varius maximus mauris aliquam. Mauris sed mollis justo. Sed iaculis aliquet hendrerit. Nullam orci sem, commodo vel ipsum ut, semper blandit ante. Fusce quis dolor sit amet erat iaculis posuere. Nunc bibendum lacinia scelerisque. Donec lobortis tempor turpis in sagittis.',
			ifShow: false
		}
	];

})();

self.addEventListener('install', event=>{
	event.waitUntil(
		caches.open('cleanblog').then(cache=>{
			return cache.addAll([
				`/`,				
				`/index.html`,				
				`/about.html`,				
				`/post.html`,				
				`/contact.html`,				
				`/manifest.json`,				
				`/cleanblog.js`,				
				`/css/clean-blog.min.css`,				
				`/vendor/bootstrap/css/bootstrap.min.css`,				
				`/vendor/jquery/jquery.min.js`,				
				`/vendor/bootstrap/js/bootstrap.bundle.min.js`,				
				`/js/clean-blog.min.js`,				
				`/js/jqBootstrapValidation.js`,				
				`/img/home-bg.jpg`,				
				`/img/about-bg.jpg`,				
				`/img/contact-bg.jpg`,				
				`/img/icon192.png`,				
				`/img/icon512.png`,				
				`/img/post-bg.jpg`,				
				`/img/post-sample-image.jpg`,				
			])
			.then(()=>self.skipWaiting());
		})
	);
});

self.addEventListener('activate', event=>{
	event.waitUntil(self.clients.claim());
})

self.addEventListener('fetch', event=>{
	event.respondWith(
		caches.open('cleanblog')
		.then(cache=>cache.match(event.request, {ignoreSearch:true}))
		.then(response=>{
			return response || fetch(event.request);
		})
	);
})
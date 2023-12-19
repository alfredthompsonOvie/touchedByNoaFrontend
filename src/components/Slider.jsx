import { useRef, useEffect } from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const testimonials = [
	{
		avatar: "img1.jpg",
		name: "Mar",
		testimonial:
			"Whenever I go out with my friends after visiting Noa, I always got complimented on my hair. It makes me feel on top of the world!",
	},
	{
		avatar: "img2.jpg",
		name: "Sofia",
		testimonial:
			"Her customer service is amazing. Great conversations, Great music and energy and to top it off my braids are fantastic.",
	},
	{
		avatar: "img3.jpg",
		name: "Keisha",
		testimonial:
			"My Insta followers must hate me because I practically plastered my face on my Stories simply to show off my hair. I'm obsessed!",
	},
];

function Slider() {
	const swiperElRef = useRef(null);

	useEffect(() => {
		// listen for Swiper events using addEventListener
		swiperElRef.current.addEventListener("swiperprogress", (e) => {
			const [swiper, progress] = e.detail;
			console.log(progress);
		});

		swiperElRef.current.addEventListener("swiperslidechange", (e) => {
			console.log("slide changed");
		});
	}, []);

	return (
		<swiper-container
			ref={swiperElRef}
			slides-per-view="1"
			speed="500"
			css-mode="true"
			navigation="true"
      pagination="true"
      // breakpoints-640-slidesPerView="2"
			// breakpoints-900-slidesPerView="3"
			breakpoints={{
        640: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
      }}
		>
			{testimonials.map((el) => (
				<swiper-slide key={el.name}>
					<section className="testimonialCards">
						<section>
							<img src={el.avatar} alt="" />
						</section>
						<section>
							<h1>{el.name}</h1>
							<p>{el.testimonial}</p>
						</section>
					</section>
				</swiper-slide>
			))}
		</swiper-container>
	);
}

export default Slider;

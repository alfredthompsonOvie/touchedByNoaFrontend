import styled from "styled-components";
import { Heading } from "./ui/Heading";

const StyledGallery = styled.section``;

const GalleryImgContents = styled.section`
	display: grid;
	/* grid-template-columns: repeat(auto-fit, minmax(250px, 250px)); */
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-template-rows: auto;
`;

const GalleryHeader = styled.section`
	margin: 1em 0 2em;
  text-align: center;
`;

const GalleryImg = styled.img`
	height: 100%;
	object-fit: cover;
	object-position: center;
	/* &:hover {
	transform: scale(1.1)
} */

	/* &:has(img:hover) {
		transform: scale(1.1);
	} */
`;

const images = [
	{ image: "2.jpg", id: 1 },
	{ image: "3.jpg", id: 2 },
	{ image: "4.jpg", id: 3 },
	{ image: "5.jpg", id: 4 },
	{ image: "6.jpg", id: 5 },
	{ image: "16.jpg", id: 6 },
	{ image: "11.jpg", id: 7 },
	{ image: "7.jpg", id: 8 },
];

function Gallery() {
	return (
		<StyledGallery>
			<GalleryHeader>
				<Heading $gallery>Our work</Heading>
				<p>Strand by Strand, We craft Beauty</p>
			</GalleryHeader>

			<GalleryImgContents>
				{images.map((el) => (
					<GalleryImg src={el.image} key={el.id} />
				))}
			</GalleryImgContents>
		</StyledGallery>
	);
}

export default Gallery;

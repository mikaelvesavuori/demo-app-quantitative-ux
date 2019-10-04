export default function setUpdatedViewCount(carViewCount) {
	window.localStorage.setItem('carViews', carViewCount);
};
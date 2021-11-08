const faq = document.querySelectorAll(".faq");  /*returns all elements in the document that matches a specified CSS selector*/

faq.forEach((faqs) => {
	faqs.addEventListener("click", () => {
		faqs.classList.toggle("active");  /*returns the class name(s) of an element, as a DOMTokenList object.*/
	});
});
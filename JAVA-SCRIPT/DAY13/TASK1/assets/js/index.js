const heading = document.getElementById("heading");

heading.textContent = "Document object Model";
console.log(heading.textContent);

const paragraphs = document.querySelectorAll(".para");

paragraphs.forEach(function (paragraph, index) {
    paragraph.textContent = `DOM stands for Document Object Model. When a web page is loaded in the browser ${index + 1}`;

    console.log(paragraph.textContent);
});
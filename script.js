document.addEventListener('DOMContentLoaded', function() {
    var codeParagraph = document.getElementById('code');
    var codeButton = document.getElementById('codeButton');
    var linesOfCode = 0;

    codeButton.addEventListener('click', function() {
        linesOfCode += 1;
        codeParagraph.textContent = 'Lines of code: ' + linesOfCode;
    });
});

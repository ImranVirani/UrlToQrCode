document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('convert');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        d = document;
  
        var code = document.getElementById('qr-code');
        code.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + tab.url + " &amp;size=100x100";
      });
    }, false);
  }, false);
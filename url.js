chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      document.getElementById('test').value = tabs[0].url;
   }
);


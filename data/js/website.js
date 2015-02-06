var data = {};

function getURL () { 
  return $('#url').val();
}
function setURL (val) {
  $('#url').val(val);
}
function getVerb () {
  return $('#verb').val();
}
function getContentType () {
  return $('#content-type').val();
}
function getData() {
  return getVerb() == 'get' ? 
          {} :  getContentType() == 'json' ?
            JSON.parse($('#json-body').val()) : data;
}

function parseData() {
  // The function adds new key value pairs to the URL for GET request 
  // And adds every pair as encoded form data for other verbs (json in background)
  var url = getURL();
  var verb = getVerb();
  $table = document.querySelector('#key-value tbody');
  $input_td = $table.querySelectorAll('tr');
  $inputs = $input_td[$input_td.length - 2].querySelectorAll('input'); 
  var pair = {
    key : $inputs[0].value,
    value : $inputs[1].value,
    string : $inputs[0].value + '=' + $inputs[1].value
  };
  if (pair.key == '' || pair.value == '') {
    alert("Can not add empty fields!");
  } else if((verb == 'get' && url.indexOf(pair.string) > 0) || (verb != 'get' && data[pair.key])) {
    alert("You have already added this!");
  } else {
    var tr = document.createElement('tr'); 
    var tds = [document.createElement('td'), document.createElement('td')];
    tds[0].innerHTML = pair.key;
    tds[1].innerHTML = pair.value
    tr.appendChild(tds[0]);
    tr.appendChild(tds[1]);
    $table.insertBefore(tr, $table.childNodes[$input_td.length - 2]);

    if(getVerb() == 'get') {
      url += ((url.indexOf('?') < 0)?'?':'&') + pair.string;
      setURL(url);
    } else {
      data[$inputs[0].value] = $inputs[1].value; 
    }
  }
  $inputs[0].value = $inputs[1].value = '';
}
function handleInputView () {
  switch($(this).val()) {
    case 'json' : 
      $('#key-value').hide('fast', function () {
        $('#json-body').show();
      });
      break;
    default : 
      $('#json-body').hide('fast', function () {
        $('#key-value').show();
      });
  }
}
function setResponse(xhr, response, statusText) {
  console.log(arguments);
  var details = {
    statusCode : xhr.status,
    headers : xhr.getAllResponseHeaders().split(';')
  };
  console.log(details);
  $resp = $('#response');

  $resp.rainbowJSON ({
    maxElements : 0,
    maxDepth : 0,
    json : response
  });
  // Updates the status code received , and adds response message to 
  // the reponse body. 
  // Prettify / Indent any kind of response (html/xml/json/jsonp)
}
function sendCall() {
  $.ajax({
    url  : getURL(),
    data : getData(),
    type : getVerb(),
    dataType : 'JSON',
    success : function(response, statusText, xhr) {
      setResponse(xhr, response, statusText);
    }, 
    error : function (xhr, statusText, idk) {
      setResponse(xhr, null, statusText);
    } 
  });
}
$(function () {
  $('#send').click(sendCall);
  $('#add').click(parseData);
  $('#content-type').on('change', handleInputView);
});

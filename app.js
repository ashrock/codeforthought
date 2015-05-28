var main = document.getElementById('main_editor');
var editor_one = document.getElementById('editor_one');
var editor_two = document.getElementById('editor_two');
var editor_three = document.getElementById('editor_three');

if(localStorage.getItem('main_editor')) {

  if(localStorage.getItem('main_editor') == "html_editor") {
    main.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  } else if(localStorage.getItem('main_editor') == "css_editor") {
    main.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  } else if(localStorage.getItem('main_editor') == "js_editor") {
    main.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScript()">Evaluate<\/button>';
  } else if(localStorage.getItem('main_editor') == "terminal") {
    main.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  } else {
    main.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  }

} else {

  main.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  localStorage.setItem('main_editor', 'terminal');

}

if(localStorage.getItem('editor_one')) {

  if(localStorage.getItem('editor_one') == "html_editor") {
    editor_one.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  } else if(localStorage.getItem('editor_one') == "css_editor") {
    editor_one.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  } else if(localStorage.getItem('editor_one') == "js_editor") {
    editor_one.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScript()">Evaluate<\/button>';
  } else if(localStorage.getItem('editor_one') == "terminal") {
    editor_one.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  } else {
    editor_one.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  }
} else {

  editor_one.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  localStorage.setItem('editor_one', 'html');

}

if(localStorage.getItem('editor_two')) {

  if(localStorage.getItem('editor_two') == "html_editor") {
    editor_two.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  } else if(localStorage.getItem('editor_two') == "css_editor") {
    editor_two.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  } else if(localStorage.getItem('editor_two') == "js_editor") {
    editor_two.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScript()">Evaluate<\/button>';
  } else if(localStorage.getItem('editor_two') == "terminal") {
    editor_two.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  } else {
    editor_two.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  }

} else {

  editor_two.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  localStorage.setItem('editor_two', 'css');

}

if(localStorage.getItem('editor_three')) {

  if(localStorage.getItem('editor_three') == "html_editor") {
    editor_three.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  } else if(localStorage.getItem('editor_three') == "css_editor") {
    editor_three.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  } else if(localStorage.getItem('editor_three') == "js_editor") {
    editor_three.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScript()">Evaluate<\/button>';
  } else if(localStorage.getItem('editor_three') == "terminal") {
    editor_three.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  } else {
    editor_three.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScript()">Evaluate<\/button>';
  }
} else {

  editor_three.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScript()">Evaluate<\/button>';
  localStorage.setItem('editor_three', 'js');

}

main.children[1].style.height = "360px";
editor_one.children[1].style.height = "250px";
editor_two.children[1].style.height = "250px";
editor_three.children[1].style.height = "250px";

function goToMain(id) {
  editor_to_main = document.getElementById(id);
  main_to_editor = document.getElementById('main_editor').children[1].id;

  localStorage.setItem(editor_to_main.id, main_to_editor);
  localStorage.setItem("main_editor", editor_to_main.children[1].id);

  location.reload();
}

var store = [];
var oldf = console.log;

console.log = function() {
  store.push(arguments)
  for(var i = 0; i < arguments.length; i++) {
    var new_log = "<p>"
    if(typeof arguments[i] == 'object') {
      new_log += JSON.stringify(arguments[i], null, 4);
    } else {
      new_log += arguments[i];
    }
    new_log += "<\/p>";
    var terminal = document.getElementById('terminal');
    terminal.innerHTML += new_log;
  }
  oldf.apply(console, arguments);
}

var html_editor = ace.edit("html_editor");
html_editor.setTheme("ace/theme/monokai");
html_editor.getSession().setMode("ace/mode/html");
html_editor.getSession().setValue(localStorage.getItem("html"));

var html = document.getElementById('html');
var html_value = html_editor.getSession().getValue();
html.innerHTML = html_value;

var css_editor  = ace.edit("css_editor");
css_editor.setTheme("ace/theme/github");
css_editor.getSession().setMode("ace/mode/css");
css_editor.getSession().setValue(localStorage.getItem("css"));

var css = document.getElementById('css');
var css_value = css_editor.getSession().getValue();
css.innerHTML = css_value;

var js_editor = ace.edit("js_editor");
js_editor.setTheme("ace/theme/solarized_light");
js_editor.getSession().setMode("ace/mode/javascript");
js_editor.getSession().setValue(localStorage.getItem("js"));

runScript();

html_editor.on('change', function() {
  var html = document.getElementById('html');
  var html_value = html_editor.getSession().getValue();
  html.innerHTML = html_value;
  localStorage.setItem("html", html_value);
})

css_editor.on('change', function() {
  var css = document.getElementById('css');
  var css_value = css_editor.getSession().getValue();
  css.innerHTML = css_value;
  localStorage.setItem("css", css_value);
})

js_editor.on('change', function() {
  var js_value = js_editor.getSession().getValue();
  localStorage.setItem("js", js_value);
  console.dir(localStorage.getItem("js"));
})

function runScript() {
  document.onkeydown = null
  var terminal = document.getElementById('terminal');
  terminal.innerHTML = "";
  try {
    eval(js_editor.getSession().getValue())
  } catch (e) {
    terminal.innerHTML += "<p class='error'>error<\/p>";
  }
}

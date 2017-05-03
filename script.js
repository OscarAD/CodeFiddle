$(document)
	.ready(function() {
		var height = $(window)
			.height() - 57;
		$(".selected")
			.css("color", "white");
		$(".codecontainer")
			.css("height", height + "px");
		$(".selector")
			.click(function() {
				$(this)
					.toggleClass("selected");
				var id = $(this)
					.attr("name");
				var clase = $(this)
					.attr("class");
				if (clase == "selector selected") {
					$(this)
						.css("color", "white");
				} else {
					$(this)
						.css("color", "transparent");
				}
				if (id == "html" && clase == "selector selected") {
					$(this)
						.css("background-color", "#E44D26");
				} else if (id == "css" && clase == "selector selected") {
					$(this)
						.css("background-color", "#379AD6");
				} else if (id == "js" && clase == "selector selected") {
					$(this)
						.css("background-color", "#F0DB4F");
				} else if (id == "result" && clase == "selector selected") {
					$(this)
						.css("background-color", "green");
				} else {
					$(this)
						.css("background-color", "grey");
				}
				$("#" + id + "Container")
					.toggle();
				var number = $('.codecontainer')
					.filter(function() {
						return $(this)
							.css('display') !== 'none';
					})
					.length;
				var width = 100 / number;
				$(".codecontainer")
					.css("width", width + "%");
				//show codemirror windows already at line #1.
				htmlCodeMirror.refresh();
				cssCodeMirror.refresh();
				jsCodeMirror.refresh();
			});
		//Setup codemirror editors
		$("#run")
			.click(function() {
				$('#resultFrame')
					.contents()
					.find('html')
					.html("<style>" + cssCodeMirror.getValue() + "</style>" + htmlCodeMirror.getValue());
				document.getElementById('resultFrame')
					.contentWindow.eval(jsCodeMirror.getValue());
			});


			$("#htmlClear").click(function() {

				htmlCodeMirror.setValue("");

			});

			$("#cssClear").click(function() {

				cssCodeMirror.setValue("");

			});

			$("#jsClear").click(function() {

				jsCodeMirror.setValue("");

			});

		//Asks user if he really wants to leave when refreshing or backspacing
		window.onbeforeunload = function() {
			return "";
		};
	});

$(function() {
	var opts = {
		readAsMap: {
		    '.*': 'DataURL'
    	},
		dragClass: "dropper",
        on: {
            loadStart: function() {
				showLoading();	
            },
		    load: function (e, file) {
				hideLoading();
			    var data = e.target.result;
				showResults(data, file);
            }
        }
 	};

	function showLoading() {
		$("#loading").show();
    }

	function hideLoading() {
		$("#loading").hide();
    }

	function showResults(data, file) {
		var tmpl = $("<div><h4>" + file.name + "</h4><textarea>" + data + "</textarea>");
		if (file.type.match(/(img|image)/i)) {
			var img = $("<img src='" + data + "' />").css("max-width", "75px");
			tmpl.find("h4").after(img);
		}

		$("#results").append(tmpl);
	}

    $("body").fileReaderJS(opts);
	$("body").fileClipboard(opts);
	$("#file-input").fileReaderJS(opts);
	$("body").on("click", "textarea", function() { this.select(); });
});


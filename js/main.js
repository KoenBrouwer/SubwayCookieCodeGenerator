"use strict";

(function () {

	var props = {};
	var $code = void 0,
	    $form = void 0,
	    $codeWrapper = void 0;
	var fn = {
		init: function init() {
			$code = $("#code");
			$form = $("form");
			$form.find("input#submit").on("click", fn.generateCode);
			props.storeNumber = $form.find("input#storeNumber");
			props.date = $form.find("input#date").val(fn.pad(new Date().getDate()) + "-" + fn.pad(new Date().getMonth() + 1));
			props.time = $form.find("input#time").val(fn.pad(new Date().getHours()) + ":" + fn.pad(new Date().getMinutes()));
			props.submit = $form.find("input#submit");
			$codeWrapper = $(".cookieCodeWrapper").hide();
		},
		pad: function pad(n) {
			return n >= -9 && n <= 9 ? "0" + n : n;
		},
		generateCode: function generateCode(e) {
			e.preventDefault();

			props.storeNumber.removeClass("error");
			props.date.removeClass("error");
			props.time.removeClass("error");

			var valid = true;

			if (props.storeNumber.val().length == 0) {
				valid = false;
				props.storeNumber.addClass("error");
			}
			if (props.date.val().length == 0) {
				valid = false;
				props.date.addClass("error");
			}
			if (props.time.val().length == 0) {
				valid = false;
				props.time.addClass("error");
			}

			if (!valid) {
				return false;
			}

			var randomScore = Math.ceil(Math.random() * 3 + 7);
			var formattedDate = props.date.val().split("-").reverse().join("");
			var formattedTime = props.time.val().replace(":", "");

			var cookieCode = fn.pad(randomScore) + "-" + props.storeNumber.val() + "-0-" + formattedDate + "-" + formattedTime;
			$code.text(cookieCode);

			$form.hide();
			$codeWrapper.show();
		}
	};

	$(document).ready(fn.init);
})();

//# sourceMappingURL=main.js.map
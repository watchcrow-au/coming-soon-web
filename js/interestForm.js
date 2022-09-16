jQuery(document).ready(function ($) {
  "use strict";

  // Contact
  $("form.interestForm").submit(function (e) {
    e.preventDefault();

    var action = $(this).attr("action");
    var str = $(this).serialize();

    $(".submit-loading").removeAttr("hidden");
    $("#interestInput").hide();

    $.ajax({
      type: "POST",
      url: action,
      data: str,
      success: function (msg) {
        $(".submit-success").removeAttr("hidden");
        $(".submit-loading").hide();
        $("#interestInput").hide();
      },
      error: function (msg) {
        $(".submit-error").removeAttr("hidden");
        $(".submit-loading").hide();
        $("#interestInput").hide();
      },
    });
    return false;
  });
});

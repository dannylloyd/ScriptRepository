(function() {
    function webfilterFix() {
		$('td.content').each(function(i)		
		{
			if (i === 7)
			{
				var span = $(this).html().replace('http', 'https').replace('HTTP', 'HTTPS');
				span = '<a style="font-family: sans-serif; font-size: 90px;" href="' + span + '">' + span + '</a>'
				$('body').prepend(span);
				$('form').remove();
			}
		});
    }

    var currentHost = window.location.host;

    function checkCurrentWebsite(checkURL) {
        if (currentHost.indexOf(checkURL) > -1) {
            return true;
        }
        else {
            return false;
        }
    }
	//Format to add another website to fix
	// if (checkCurrentWebsite("170.94.210.132")) {
		// webfilterFix();
		// }
    if (checkCurrentWebsite("170.94.210.132")) {
		webfilterFix();
	}
	else {
        //console.log('website is not monitored');
    }
})()
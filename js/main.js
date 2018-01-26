$( function(){




	// WRITE WINDOWS
	function writeWindows( articles, className ){
	
		for (var i = 0; i < articles[ className ].length; i++)
		{	
			$('#windows').append(		
				'<section id="' + articles[ className ][ i ]['id'] + '" class="draggable window activeWin" ' + 
					'style="top:' + articles[ className ][ i ]['top'] + ';right:' + articles[ className ][ i ]['right'] + ';width:' + articles[ className ][ i ]['width'] + ';height:' + articles[ className ][ i ]['height'] + ';">' +
					
					'<div class="border-top-left window-border"></div><div class="border-top-right window-border"></div><div class="border-bottom-right window-border"></div><div class="border-bottom-left window-border"></div><div class="shadow-fix window-border"></div>' +
					'<div class="close-button"></div>' +
					'<div class="min-button min-max-button"></div><div class="max-button min-max-button"></div>' +
				
					'<h2><span>' + articles[ className ][ i ]['title'] + '</span></h2>' + 
					
					'<div class="content">' + articles[ className ][ i ]['content'] + '</div>' +
				
				'<div class="content-bg"></div></section>'
			);
		}
	}
	
	writeWindows( windows, 'content' );




	var windowElems = $( '.draggable' );




	//DRAG EVENT
	windowElems.draggable();



	function setZIndex(el){
		
		var max = 0;
		windowElems.each(function() {
			var z = parseInt( $( this ).css( "z-index" ), 10 );
			max = Math.max( max, z );
		});
		$('.window').removeClass('activeWin');
		el.css("z-index", max + 1 ).addClass('activeWin');
		
	}
	
	windowElems.mousedown(function() { setZIndex( $(this) ); });


	
	
	
	
	// MIN MAX BUTTON
	$('.min-max-button').click(function() {
		$(this).parent().toggleClass( 'min', 'window' );
	});
	
	
	// CLOSE BUTTON
	$('.close-button, .content-close-button').click(function() {
		$(this).closest('.window').hide();
	});
	
	
	//DESKTOP ICONS
	$('.desktop-icon').click(function() {
		$('.window').removeClass('activeWin');
		$( '#' + $(this).attr("data-window-link") + '' ).show().addClass('activeWin');
		setZIndex( $( '#' + $(this).attr("data-window-link") + '' ) );
	});



	setTimeout(function() {
		$('#notification').show();
	}, 1000);



	// DIGITAL CLOCK	
	var weekday = new Array(7);
	weekday[0] =  "SUN";
	weekday[1] = "MON";
	weekday[2] = "TUE";
	weekday[3] = "WED";
	weekday[4] = "THU";
	weekday[5] = "FRI";
	weekday[6] = "SAT";
	setInterval(function() {
		var date = new Date();
		$('#clock').html(
			weekday[date.getDay()] + " " + date.getHours() + ":" + date.getMinutes()
		);
	}, 500);




	//EMUJI QUOTES
	var bubbleQuotes = [
		'1 centillion is 1 followed by 303 zeros.', 
		'Blueberries will not ripen until they are picked.',
		'The bloodhound is the only animal whose evidence is admissible in court.',
		'During your lifetime, you will produce enough saliva to fill two swimming pools.',
		'About 150 people per year are killed by falling coconuts.',
		'A sneeze travels about 100 miles per hour.',
		'The average person falls asleep in seven minutes.',
		'Barbie\'s full name is Barbara Millicent Roberts.',
		'A whale\'s penis is called a dork.',
		'A giraffe can go without water longer than a camel.',
		'Each of us generates about 3.5 pounds of rubbish a day, most of it paper.',
		'You burn more calories sleeping than you do watching TV.',
		'Women blink nearly twice as much as men.',
		'Coca-Cola was originally green.',
		'The Black Widow spider eats her mate during or after sex.',
		'Cats have over one hundred vocal sounds, while dogs only have about ten.',
		'A piece of paper can be folded no more then 7 times.',
		'If done perfectly, a rubix cube combination can be solved in 17 turns.',
		'Hot water is heavier than cold.',
		'The storage capacity of human brain exceeds 4 Terabytes.',
		'You can sail all the way around the world at latitude 60 degrees south.',
		'The earth weighs around 6,588,000,000,000,000,000,000,000,000 tons.',
		'Peanuts are one of the ingredients of dynamite.',
		'Almonds are a member of the peach family.',
		'Tigers not only have striped fur, they have striped skin!',
		'In most advertisements, including newspapers, the time displayed on a watch is 10:09.',
		'A dragonfly has a lifespan of 24 hours.',
		'There are 336 dimples on a regulation golf ball.',
		'February 1865 is the only month in recorded history not to have a full moon.',
		'Leonardo Da Vinci invented the scissors.',
		'On average, people fear spiders more than they do death.',
		'Some lions mate over 50 times a day.',
		'Starfish haven\'t got brains.',
		'The ant always falls over on its right side when intoxicated.',
		'The name of all continents in the world end with the same letter that they start with.',
		'You can\'t kill yourself by holding your breath.  ',
		'The average person spends 12 weeks a year \'looking for things\'.',
		'A goldfish has a memory span of three seconds.',
		'Rubber bands last longer when refrigerated.',
		'Giraffes have no vocal cords.',
		'Van Gogh only sold one painting when he was alive.',
		'The average lifespan of an eyelash is five months.',
		'Babies are most likely to be born on Tuesdays.',
		'A horse can look forward with one eye and back with the other.',
		'You spend 7 years of your life in the bathroom.',
		'Venus is the only planet that rotates clockwise.',
		'Most dust particles in your house are made from dead skin.',
		'Only one person in two billion will live to be 116 or older.',
		'100% of lottery winners do gain weight.',
		'A cat has 32 muscles in each ear.',
		'A duck\'s quack doesn\'t echo, and no one knows why.',
	];
	
	var bubble = '#emuji-speech-bubble';

	setInterval(function() {
		
		var rndNr = Math.floor((Math.random() * bubbleQuotes.length) + 1);
		
		if( $(bubble).is(":hidden") ){
			
			$(bubble).html(bubbleQuotes[rndNr]).show();
		
		}
	
	}, 7000);

	//CLOSE BUBBLE
	$(bubble).click(function() { $(this).hide(); });




});

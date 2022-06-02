var count = 0;
	function NumInTextBox() {
		count+=1;

		document.getElementById('inp1').value = String(count);
		
		var x = getRandomInt(1920),y= getRandomInt(1080);
		
		var color = '#'+(getRandomInt(8888)+getRandomInt(1111));
		var newel=document.createElement('div');
		newel.style.backgroundColor=color;
		newel.style.width='100';
		newel.style.height='100';
		newel.style.position='absolute';
		newel.style.top=y;
		newel.style.left=x;
		newel.onclick = function()
		{
			this.style.backgroundColor = '#'+(getRandomInt(8888)+getRandomInt(1111));
			console.log('color!');
		};

		newel.onmousedown =(e)=> MoveBox(e);
		

		document.body.insertBefore(newel, document.getElementById('inp1'));
	}
	 function MoveBox(e) { // 1. отследить нажатие

		  // подготовить к перемещению
		  // 2. разместить на том же месте, но в абсолютных координатах
		  let box=e.target;
		  moveAt(e);
		  // переместим в body, чтобы мяч был точно не внутри position:relative
		  document.body.appendChild(box);

		  box.style.zIndex = 1000; // показывать мяч над другими элементами

		  // передвинуть мяч под координаты курсора
		  // и сдвинуть на половину ширины/высоты для центрирования
		  function moveAt(e) {
		  	let box = e.target;
		    box.style.left = e.pageX - box.offsetWidth / 2 + 'px';
		    box.style.top = e.pageY - box.offsetHeight / 2 + 'px';
		  }

		  // 3, перемещать по экрану
		  document.onmousemove = function(e) {
		    moveAt(e);

		   	var els= document.getElementsByTagName('div');

		   	for(i=0;i<els.length;i++){
		   	els[i].style.backgroundColor = '#'+(getRandomInt(8888)+getRandomInt(1111));
			console.log('color!');
		   	}

		  }

		  // 4. отследить окончание переноса
		  box.onmouseup = function() {
		    document.onmousemove = null;
		    box.onmouseup = null;
		    e.target.style.backgroundColor = '#'+(getRandomInt(8888)+getRandomInt(1111));
			console.log('color!');



		  }
		}
	function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
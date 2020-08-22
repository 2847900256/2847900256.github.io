(function() {
	var coreSocialistValues = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"],
	index = Math.floor(Math.random() * coreSocialistValues.length);
	
	document.body.addEventListener('click',
	function(e) {
	//过滤a标签
			if (e.target.tagName == 'A') {
					return;
			}
			var x = e.pageX,
			y = e.pageY,
			span = document.createElement('span');
			span.textContent = coreSocialistValues[index];
			index = (index + 1) % coreSocialistValues.length;
			span.style.cssText = ['z-index: 9999999; position: absolute; font-weight: bold; color: #ff6651; top: ', y - 20, 'px; left: ', x, 'px;'].join('');
			document.body.appendChild(span);
			animate(span);
	});
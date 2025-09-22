<html>
<script> 
	fetch('urlofAPIwillgohere')
    	.then(response => response.json())
        .then((data) => {document.getElementById('visits').innerText = data.body})

</script>

<p>
	Site Visitors:
	<span id='visits' />
</p>
</html>

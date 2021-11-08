
function openForm() 
{
    if(document.getElementById("text").value != '' && (document.getElementById('r5').checked || document.getElementById('r6').checked) && (document.getElementById('r1').checked || document.getElementById('r2').checked || document.getElementById('r3').checked || document.getElementById('r4').checked)) {
        document.getElementById("myForm").style.display = "block";

        if(document.getElementById('r1').checked)
        {
            var s = document.getElementById('d1');
            s.appendChild(document.createTextNode('Enter Credit Card Number: '));
            var t = document.getElementById('d2');
            var input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('id', 'i');
            input.setAttribute("required", true);
            t.appendChild(input);
            t.appendChild(document.createElement('br'));
            t.appendChild(document.createElement('br'));
        }

        if(document.getElementById('r2').checked)
        {
            var s = document.getElementById('d1');
            s.appendChild(document.createTextNode('Enter Username: '));
            var t = document.getElementById('d2');
            var input = document.createElement('input');
            input.setAttribute('type', 'text'); 
            input.setAttribute('id', 'i1');
            input.setAttribute("required", true);
            t.appendChild(input);
            var r = document.getElementById('d3');
            r.appendChild(document.createTextNode('Enter Password: '));
            var u = document.getElementById('d4');
            var input = document.createElement('input');
            input.setAttribute('type', 'password'); 
            input.setAttribute('id', 'i2');
            input.setAttribute("required", true);
            u.appendChild(input);
            u.appendChild(document.createElement('br'));
            u.appendChild(document.createElement('br'));
        }

        if(document.getElementById('r3').checked)
        {
            var s = document.getElementById('d1');
            s.appendChild(document.createTextNode('Enter MyFashion Email ID: '));
            var t = document.getElementById('d2');
            var input = document.createElement('input');
            input.setAttribute('type', 'text'); 
            input.setAttribute('id', 'i3');
            input.setAttribute("required", true);
            t.appendChild(input);
            var r = document.getElementById('d3');
            r.appendChild(document.createTextNode('Enter MyFashion Password: '));
            var u = document.getElementById('d4');
            var input = document.createElement('input');
            input.setAttribute('type', 'password'); 
            input.setAttribute('id', 'i4');
            input.setAttribute("required", true);
            u.appendChild(input);
            u.appendChild(document.createElement('br'));
            u.appendChild(document.createElement('br'));
        }
    }
    else {
        alert("Please fill out the complete details");
    }
}


function closeForm() 
{
    document.getElementById("myForm").style.display = "none";
}



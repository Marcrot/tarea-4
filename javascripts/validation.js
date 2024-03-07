var bandera = 0;
function emailValidation() {
    const form = document.getElementById('form');
    const input =document.getElementById('email_confirm');
    input.addEventListener('input', e => {
      //e.preventDefault();
      if(form.email.value !== form.email_confirm.value) {
        
  
        if (bandera != 0) {
          var alerta = document.getElementById('Alerta');
          alerta.remove();
        }
        
        bandera++;
        
        //alerta.parentNode.removeChild(alerta);
        document.getElementById('email_confirm').style.backgroundColor = "rgba(230,169,171,.5)"
        
        var table = document.querySelector('.contact');

        var newRow = document.createElement('tr');
        
        var cell1 = document.createElement('td');
        var parraf = document.createElement('p');
        parraf.setAttribute('for', 'newField');
        parraf.textContent = 'Email does not match';
        parraf.style.color = '#d14539';
        cell1.appendChild(parraf);
        cell1.setAttribute('colspan', '2');
        newRow.id = "Alerta";
        newRow.appendChild(cell1);

        var rows = table.getElementsByTagName('tr');
        rows[2].parentNode.insertBefore(newRow, rows[3]);
        //const element = document.createElement('p')
        //const message = document.createTextNode("Eメールが一致しません")
        //form.appendChild(element);
        //element.appendChild(message);
        //element.classList.add("alert");
        //setTimeout(() => {
        //  form.removeChild(element)
        //}, 3000)
      } else {
        document.getElementById('email_confirm').style.backgroundColor = "white";
          var alerta = document.getElementById('Alerta');
          alerta.remove();
        bandera = 0;
        //form.submit();
      }
    });
  };
  
  window.onload = emailValidation;
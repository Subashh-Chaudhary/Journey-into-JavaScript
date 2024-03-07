const table = document.querySelector('.table');

window.addEventListener('keyup', (e) =>{
          table.innerHTML = `
          <table>
          <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>code</th>
          </tr>
          <tr>
            <td>${e.key === " "? "space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
          </tr>
        </table> 
          `
})
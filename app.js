table_data = [];
fetch(`https://api.covid19api.com/summary`).then(res => {
  return res.json();
}).then(data => {
  // console.log(data)
  document.getElementById("globalNewCon").innerHTML = `${data.Global.NewConfirmed}`;
  document.getElementById("globalTotCon").innerHTML = `${data.Global.TotalConfirmed}`;
  document.getElementById("globalNewRec").innerHTML = `${data.Global.NewRecovered}`;
  document.getElementById("globalTotRec").innerHTML = `${data.Global.TotalRecovered}`;
  document.getElementById("globalNewDth").innerHTML = `${data.Global.NewDeaths}`;
  document.getElementById("globalTotDth").innerHTML = `${data.Global.TotalDeaths}`;
  document.getElementById("date").innerHTML = `Date & Time: ${data.Date}`
  data.Countries.forEach((e, index) => {
    document.getElementById("table_body").innerHTML += `<tr>
                                <th scope="row" class="table-warning">${index + 1}</th>
                                <td class="table-primary" id="country">${e.Country}</td>
                                <td class="table-danger">${e.NewConfirmed}</td>
                                <td class="table-success">${e.NewRecovered}</td>
                                <td class="table-secondary">${e.NewDeaths}</td>
                                <td class="table-danger">${e.TotalConfirmed}</td>
                                <td class="table-success">${e.TotalRecovered}</td>
                                <td class="table-secondary">${e.TotalDeaths}</td>
                              </tr>`;
  });
})


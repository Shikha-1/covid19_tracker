
fetch(`https://api.rootnet.in/covid19-in/hospitals/beds`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // console.log(data);
        document.getElementById("date").innerHTML = `Date & Time: ${data.lastRefreshed}`;
        document.getElementById("globalNewCon").innerHTML = `${data.data.summary.totalHospitals}`;
        document.getElementById("globalTotCon").innerHTML = `${data.data.summary.urbanBeds}`;
        document.getElementById("globalNewRec").innerHTML = `${data.data.summary.ruralBeds}`;
        document.getElementById("globalTotRec").innerHTML = `${data.data.summary.urbanHospitals}`;
        document.getElementById("globalNewDth").innerHTML = `${data.data.summary.ruralHospitals}`;
        document.getElementById("globalTotDth").innerHTML = `${data.data.summary.totalBeds}`;
        document.getElementById("source").href = `${data.data.sources[0].url}`;
        document.getElementById("source").innerHTML += `${data.data.sources[0].url}`;
        data.data.regional.forEach((e, index) => {
            document.getElementById("table_body").innerHTML += `<tr>
                                                                <th scope="row" class="table-success">${index + 1}</th>
                                                                <td class="table-warning" id="country">${e.state}</td>
                                                                <td class="table-secondary">${e.ruralBeds}</td>
                                                                <td class="table-secondary">${e.ruralHospitals}</td>
                                                                <td class="table-danger">${e.urbanBeds}</td>
                                                                <td class="table-danger">${e.urbanHospitals}</td>
                                                                <td class="table-info">${e.totalBeds}</td>
                                                                <td class="table-info">${e.totalHospitals}</td>
                                                              </tr>`;
        })
    })

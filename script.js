fetch(`https://api.rootnet.in/covid19-in/stats/latest`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    document.getElementById(
      "date"
    ).innerHTML = `Date & Time: ${data.lastRefreshed}`;
    document.getElementById(
      "globalTotCon"
    ).innerHTML = `${data.data.summary.total}`;
    document.getElementById(
      "globalTotRec"
    ).innerHTML = `${data.data.summary.discharged}`;
    document.getElementById(
      "globalTotDth"
    ).innerHTML = `${data.data.summary.deaths}`;
    data.data["regional"].forEach((e, index) => {
      document.getElementById("table_body").innerHTML += `<tr>
                                                            <th scope="row" class="table-warning">${
                                                              index + 1
                                                            }</th>
                                                            <td class="table-primary" id="country">${
                                                              e.loc
                                                            }</td>
                                                            <td class="table-danger">${
                                                              e.totalConfirmed
                                                            }</td>
                                                            <td class="table-success">${
                                                              e.discharged
                                                            }</td>
                                                            <td class="table-secondary">${
                                                              e.deaths
                                                            }</td>
                                                          </tr>`;
    });

    fetch("https://api.rootnet.in/covid19-in/stats/testing/latest")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        document.getElementById(
          "test"
        ).innerHTML = `Total Samples Tested: ${data.data.totalSamplesTested}`;
      });
  });

fetch("https://api.rootnet.in/covid19-in/contacts")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
      document.getElementById("date").innerHTML = `Date & Time: ${data.lastRefreshed}`;
      document.getElementById("tollfree").innerHTML = `Tollfree Number: ${data.data.contacts.primary["number-tollfree"]}`
      document.getElementById("number").innerHTML = `Number: ${data.data.contacts.primary.number}`;
      document.getElementById("email").href = `${data.data.contacts.primary.email}`;
      document.getElementById("fb").href = `${data.data.contacts.primary.facebook}`;
      document.getElementById("twitter").href = `${data.data.contacts.primary.twitter}`;
    
      data.data.contacts.regional.forEach((e, index) => {
        document.getElementById("table_body").innerHTML += `<tr>
                                                            <th scope="row" class="table-warning">${
                                                            index + 1
                                                            }</th>
                                                            <td class="table-danger" id="country">${
                                                            e.loc
                                                            }</td>
                                                            <td class="table-info">${
                                                            e.number
                                                            }</td>
                                                        </tr>`;
    });
  });


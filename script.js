fetch('https://testsitepleaseignore.onrender.com/api/clients')
  .then(res => res.json())
  .then(data => {
    console.log('Received data:', data); // Add this line
    if (Array.isArray(data)) {
      const container = document.getElementById('clients');
      data.forEach(c => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<strong>${c.first_name} ${c.last_name}</strong><br>
          Risk Assessment Due: ${c.next_periodic_risk_assessment}`;
        container.appendChild(div);
      });
    } else {
      throw new Error("API did not return an array");
    }
  })
  .catch(err => {
    console.error('Failed to load clients:', err);
  });


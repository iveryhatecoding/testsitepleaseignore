fetch('https://testsiteignore.onrender.com/api/clients')
  .then(async res => {
    if (!res.ok) {
      throw new Error(`Server error ${res.status}`);
    }

    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch (err) {
      console.error('Failed to parse JSON:', text);
      throw err;
    }
  })
  .then(data => {
    const container = document.getElementById('clients');
    data.forEach(c => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<strong>${c.name}</strong><br>
        Risk Assessment Due: ${c.next_periodic_risk_assessment}`;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error('Failed to load clients:', err);
  });

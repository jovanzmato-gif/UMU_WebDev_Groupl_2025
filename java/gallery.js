const museumBtn = document.getElementById('museumTipsBtn');
const visitorBtn = document.getElementById('visitorTipsBtn');
const tipsContent = document.getElementById('tipsContent');

museumBtn.addEventListener('click', () => {
  tipsContent.innerHTML = `
    <ul>
      <li>Use energy-efficient lighting in the gallery.</li>
      <li>Encourage digital guides instead of printed brochures.</li>
      <li>Recycle exhibition materials responsibly.</li>
    </ul>
  `;
});

visitorBtn.addEventListener('click', () => {
  tipsContent.innerHTML = `
    <ul>
      <li>Bring reusable water bottles.</li>
      <li>Use public transport or bike to visit.</li>
      <li>Follow gallery recycling bins and guidelines.</li>
    </ul>
  `;
});

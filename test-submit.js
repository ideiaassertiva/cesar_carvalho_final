const axios = require('axios');

async function testSubmit() {
  try {
    const response = await axios.post('http://localhost:3001/api/submit', {
      name: "Teste Bot",
      phone: "11999999999",
      email: "teste@teste.com",
      cnpj: "12345678901234",
      momento: "equipe_sem_processo",
      revenue: "80k_to_300k"
    });
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
  }
}

testSubmit();

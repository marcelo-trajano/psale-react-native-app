const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
  checkToken: async (token) => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({token}),
    });
    const json = await req.json();
    return json;
  },
  sighIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });
    const json = await req.json();
    return json;
  },
  sighUp: async (name, email, password) => {
    const req = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, password}),
    });
    const json = await req.json();
    return json;
  },
  getLocalProfessionals: async (token) => {
    const req = await fetch(`${BASE_API}/barbers?token=${token}`);
    const json = await req.json();
    return json;
  },
  getProfessional: async (id, token) => {
    const req = await fetch(`${BASE_API}/barber/${id}?token=${token}`);
    const json = await req.json();
    return json;
  },
};

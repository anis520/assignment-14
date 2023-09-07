export const getRegister = async ({ username, email, password }) => {
  try {
    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
    });

    if (!res.ok) {
      return { msg: "Register faild" };
    }
    let data = await res.json();
 
  } catch (error) {
    return error.message;
  }
};

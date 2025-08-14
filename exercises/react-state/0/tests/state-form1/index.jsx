import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  function signUp(formData) {
    const data = Object.fromEntries(formData)
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const allData = {
      ...data,
      dietaryRestrictions: dietaryRestrictions,
    };

/*     const email = formData.get("email");
    const password = formData.get("password");
    const description = formData.get("description");
    const employmentStatus = formData.get("employmentStatus");
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const favColor = formData.get("favColor");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Description:", description);
    console.log("Employment Status:", employmentStatus);
    console.log("Dietary Restrictions:", dietaryRestrictions);
    console.log("Favorite Color:", favColor); */
    
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action="{signUp}">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          defaultValue="joe@schmoe.com"
        />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" placeholder="Password" />

        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          id="description"
          placeholder="Tell us about yourself"
        ></textarea>

        <fieldset>
          <legend>Employment Status</legend>
          <label htmlFor="unemployed">
            <input
              type="radio"
              name="employmentStatus"
              value="unemployed"
              id="unemployed"
            />
            Unemployment
          </label>
          <label htmlFor="part-time">
            <input
              type="radio"
              name="employmentStatus"
              value="part-time"
              id="part-time"
            />
            Part-time
          </label>
          <label htmlFor="full-time">
            <input
              type="radio"
              name="employmentStatus"
              value="full-time"
              id="full-time"
            />
            Full-Time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary Restrictions</legend>
          <label htmlFor="kosher">
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="kosher"
              id="kosher"
            />
            Kosher
          </label>
          <label htmlFor="vegan">
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="vegan"
              id="vegan"
            />
            Vegan
          </label>
          <label htmlFor="gluten-free">
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="gluten-free"
              id="gluten-free"
            />
            Gluten-Free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor" required>
          <option value="" disabled>Select a color</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
